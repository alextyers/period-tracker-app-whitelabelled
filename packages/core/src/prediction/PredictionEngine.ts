import _ from 'lodash'
import moment, { Moment } from 'moment'
import { PredictionState } from './PredictionState'

type Subscriber = (state: PredictionState) => void

export class PredictionEngine {
  private constructor(private state: PredictionState, private listener: Subscriber = () => null) {
    this._currentDayChecking()
  }

  public static fromState(state: PredictionState) {
    return new PredictionEngine(state)
  }

  // +=+=+=+=+=+=+=+=+=+=+=+=+=+ Main Engine +=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
  public predictDay(inputDay: Moment) {
    let onPeriod = false
    let onFertile = false
    let daysLeftOnPeriod = 0
    let periodLength = this.state.currentCycle.periodLength
    let cycleLength = this.state.currentCycle.cycleLength

    if (!this.state.isActive) {
      // user case where child has not started her period yet
      return {
        onPeriod,
        onFertile,
        date: moment.utc(inputDay).startOf('day'),
        cycleDay: 0,
        daysLeftOnPeriod: 0,
        cycleStart: moment.utc().startOf('day'),
        daysUntilNextPeriod: 0,
        cycleLength: 100,
        periodLength: 0,
      }
    }
    // ------------------------- Basic Calcs --------------------------------
    let cycleStart = this.state.currentCycle.startDate
    const diffDays = inputDay.diff(cycleStart, 'days')
    let cycleDay = diffDays + 1 // because days start from 1 and not 0

    // --------------- Future and History Handling -----------------------------

    if (diffDays >= cycleLength && diffDays > 0) {
      // Future Predictions
      periodLength = this.state.smartPrediction.smaPeriodLength
      const numberOfCyclesAheadOfCurrent = Math.floor(
        (diffDays - cycleLength) / this.state.smartPrediction.smaCycleLength,
      )
      cycleStart = moment
        .utc(cycleStart)
        .clone()
        .add(
          cycleLength + numberOfCyclesAheadOfCurrent * this.state.smartPrediction.smaCycleLength,
          'days',
        )
      cycleDay =
        diffDays -
        cycleLength -
        numberOfCyclesAheadOfCurrent * this.state.smartPrediction.smaCycleLength +
        1
    }
    if (diffDays < 0) {
      // History Predictions
      const relevantCycleHistoryEntry = this._getClosetCycleHistoryInfo(inputDay).closetCycle
      if (_.isEmpty(relevantCycleHistoryEntry)) {
        return {
          onPeriod,
          onFertile,
          date: moment.utc(inputDay).startOf('day'),
          cycleDay: 0,
          daysLeftOnPeriod: 0,
          cycleStart: moment.utc(0),
          daysUntilNextPeriod: 0,
          cycleLength: 100,
          periodLength: 0,
        }
      }
      cycleStart = relevantCycleHistoryEntry.cycleStartDate
      cycleLength = relevantCycleHistoryEntry.cycleLength
      periodLength = relevantCycleHistoryEntry.periodLength
      const diffFromRelevantStart = inputDay.diff(relevantCycleHistoryEntry.cycleStartDate, 'days')
      cycleDay = diffFromRelevantStart + 1
    }

    // ------------------------- Dependant Constants -------------------------------
    // if we are outside our current cycle we need to calculate the fertile period relative to the smart prediction length not the
    // current cycle length therefore overwrite it for the following calculation
    if (diffDays >= cycleLength && diffDays > 0) {
      cycleLength = this.state.smartPrediction.smaCycleLength
    }
    const midCycle = Math.floor(cycleLength / 2)
    const fertileDayStart = midCycle - Math.floor(this._fertileLength(cycleLength) / 2)
    const fertileDayEnd = midCycle + Math.floor(this._fertileLength(cycleLength) / 2)
    const daysUntilNextPeriod = cycleLength - cycleDay

    // ------------------------- Conditions ------------------------------------------

    // if cycle day is within the period days (ie if the person is on their period)
    if (cycleDay <= periodLength) {
      onPeriod = true
      daysLeftOnPeriod = periodLength - cycleDay
    }
    if (fertileDayStart <= cycleDay && cycleDay <= fertileDayEnd) {
      onFertile = true
    }

    // --------------------- Return Statement ----------------------------------------
    return {
      onPeriod,
      onFertile,
      date: moment.utc(inputDay).startOf('day'),
      cycleDay,
      daysLeftOnPeriod,
      cycleStart,
      daysUntilNextPeriod,
      cycleLength,
      periodLength,
    }
  }

  // +=+=+=+=+=+=+=+=+=+ Range Population +=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

  public calculateStatusForDateRange(startDate: Moment, endDate: Moment) {
    const loop = moment.utc(startDate)
    let markedDates = {}
    while (loop <= endDate) {
      const newDate = moment.utc(loop.date(loop.date() + 1)).startOf('day')
      const {
        onPeriod,
        onFertile,
        cycleDay,
        date,
        daysLeftOnPeriod,
        cycleLength,
      } = this.predictDay(newDate)
      if (onPeriod || onFertile) {
        // feed back relevant styling information for Calendar shape {'2019-05-12': { styles...}}
        const newEntry = date.format('YYYY-MM-DD')
        markedDates = {
          ...markedDates,
          [newEntry]: {
            color: onPeriod ? '#E3629B' : '#3ea4dd',
            startingDay:
              cycleDay === 1 ||
              (cycleDay ===
                Math.floor(cycleLength / 2) - Math.floor(this._fertileLength(cycleLength) / 2) &&
                !onPeriod)
                ? true
                : false,
            endingDay:
              (daysLeftOnPeriod === 0 && onPeriod) ||
              (cycleDay ===
                Math.floor(cycleLength / 2) + Math.floor(this._fertileLength(cycleLength) / 2) &&
                !onPeriod)
                ? true
                : false,
          },
        }
      }
    }
    return markedDates
  }
  // +=+=+=+=+=+=+=+=+=+ Range Population Full Info +=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=

  public calculateFullInfoForDateRange(startDate: Moment, endDate: Moment) {
    const loop = moment.utc(startDate).startOf('day')
    const dateArray = []
    while (loop <= endDate) {
      const newDate = moment.utc(loop.date(loop.date() + 1)).startOf('day')
      dateArray.push(this.predictDay(newDate))
    }
    return dateArray
  }

  // +=+=+=+=+==+=+=++=+=+=+=+ Get State From Store =+=+=++=+=+=+=+=+=+=+==+=+=+=+=+

  public getPredictorState() {
    // send state from engine to store
    return this.state
  }

  public subscribe(callback: Subscriber) {
    // passes state to callback listen
    this.listener = callback

    // unsubscribe
    return () => {
      this.listener = () => null
    }
  }

  // +=+=+=+=+==+=+=+ User Input Handling +=+=+=+=+=+=+=+=++=+=+=+=+=+=+=+==+=+=+=+=+

  public userInputDispatch({ type, inputDay }) {
    this.state.isActive = true
    switch (type) {
      case 'adjust-mens-end':
        this._adjustMenstruatingHandler(inputDay)
        break
      case 'start-next-cycle':
        this._startedEarlyHandler(inputDay)
        break
      case 'current-start-adjust':
        this._adjustCurrentStartDateHandler(inputDay)
        break
      case 'future-start-adjust':
        this._adjustFutureStartDateHandler(inputDay)
        break
      default:
        break
    }
    this.listener(this.state)
  }

  // +=+=+=+=+==+=+=+=+= Private Methods +=+=+=+=+=+=+=+=++=+=+=+=+=+=+=+==+=+=+=+=+

  private _fertileLength(cycleLength) {
    return Math.round(cycleLength / 7)
  }

  private _currentDayChecking() {
    const todayDate = moment.utc().startOf('day')
    const diffDays = todayDate.diff(this.state.currentCycle.startDate, 'days')
    // Only executes if the current day is outside the assumed current cycle
    if (!this.state.isActive) {
      this.state.currentCycle.startDate = todayDate
    }
    if (diffDays >= this.state.currentCycle.cycleLength) {
      // Check how far ahead we are of the assumed current cycle in number of cycles
      const daysAheadOfCurrentCycleEnd = diffDays - this.state.currentCycle.cycleLength
      if (daysAheadOfCurrentCycleEnd < this.state.smartPrediction.smaCycleLength) {
        // only if we are one cycle ahead
        const dayToCheck = this.state.currentCycle.startDate
          .clone()
          .add(this.state.currentCycle.cycleLength, 'days')
        const completionDay = this.predictDay(dayToCheck).cycleStart
        this._cycleCompletion(completionDay)
        return
      }
      const numberOfCyclesAheadOfCurrent = Math.ceil(
        daysAheadOfCurrentCycleEnd / this.state.smartPrediction.smaCycleLength,
      )
      const startingPoint = this.state.currentCycle.startDate
      let i = 0
      while (i < numberOfCyclesAheadOfCurrent) {
        // loop through completing all cycles that have been missed and add to history
        const dayToCheck = startingPoint
          .clone()
          .add(
            this.state.currentCycle.cycleLength + i * this.state.smartPrediction.smaCycleLength,
            'days',
          )
        const completionDay = this.predictDay(dayToCheck).cycleStart
        this._cycleCompletion(completionDay)
        i += 1
      }
    }
  }

  private _adjustMenstruatingHandler(inputDay) {
    const daysFromStart = inputDay.diff(this.state.currentCycle.startDate, 'days')
    if (
      daysFromStart > 0 &&
      daysFromStart < 11 // cant have 11 days of bleeding
    ) {
      this.state.currentCycle.periodLength =
        inputDay.diff(this.state.currentCycle.startDate, 'days') + 1
    }
  }

  private _startedEarlyHandler(inputDay) {
    const daysFromStart = inputDay.diff(this.state.currentCycle.startDate, 'days')
    if (daysFromStart > 0 && daysFromStart < this.state.currentCycle.cycleLength) {
      this._cycleCompletion(inputDay)
    }
    if (daysFromStart < 0) {
      this._adjustCurrentStartDateHandler(inputDay) // in the event the user shifted the current cycle forward
    }
  }

  private _adjustCurrentStartDateHandler(inputDay) {
    const daysFromStart = inputDay.diff(this.state.currentCycle.startDate, 'days')
    if (!this.state.history[0]) {
      this.state.currentCycle.startDate = inputDay
      this.state.currentCycle.cycleLength += -daysFromStart
      this.state.currentCycle.periodLength += -daysFromStart
      return
    }
    const daysFromPreviousStart = inputDay.diff(this.state.history[0].cycleStartDate, 'days')
    // ----------- if between current cycle start and last cycle start --------
    if (daysFromStart < 0 && daysFromPreviousStart > 0) {
      const relevantCycleHistoryEntry = this._getClosetCycleHistoryInfo(inputDay)
      // returns early if selected day is within 2 days of the previous period (No back to back periods)
      if (daysFromPreviousStart < relevantCycleHistoryEntry.closetCycle.periodLength + 2) return
      const updateHistory = {
        ...relevantCycleHistoryEntry.closetCycle,
        cycleEndDate: inputDay.clone().subtract(1, 'days'),
        cycleLength: inputDay.diff(relevantCycleHistoryEntry.closetCycle.cycleStartDate, 'days'),
      }
      this.state.history[relevantCycleHistoryEntry.closestIndex] = updateHistory
      this.state.currentCycle.startDate = inputDay
      this.state.currentCycle.cycleLength += -daysFromStart
      this.state.currentCycle.periodLength += -daysFromStart
    }
    // --------- if between current cycle start and next cycle start ----------
    else if (daysFromStart > 0 && daysFromStart < this.state.currentCycle.cycleLength) {
      this.state.currentCycle.startDate = inputDay
      this.state.currentCycle.cycleLength += -daysFromStart
      this.state.currentCycle.periodLength += -daysFromStart
      const updateHistory = {
        ...this.state.history[0],
        cycleEndDate: inputDay.clone().subtract(1, 'days'),
        cycleLength: inputDay.diff(this.state.history[0].cycleStartDate, 'days'),
      }
      this.state.history[0] = updateHistory
    }
    // Check If the current cycle status must change from the above actions
    const todayInfo = this.predictDay(moment.utc().startOf('day'))
    const diffToCurrentStart = todayInfo.cycleStart.diff(this.state.currentCycle.startDate, 'days')
    if (diffToCurrentStart !== 0) {
      // take the history out and set the state to that
      this.state.currentCycle.startDate = this.state.history[0].cycleStartDate
      this.state.currentCycle.cycleLength = this.state.history[0].cycleLength
      this.state.currentCycle.periodLength = this.state.history[0].periodLength
      this.state.history.shift()
    }
  }

  private _adjustFutureStartDateHandler(inputDay) {
    const daysFromStart = inputDay.diff(this.state.currentCycle.startDate, 'days')
    if (daysFromStart < 50 && daysFromStart > 10) {
      this.state.currentCycle.cycleLength = daysFromStart
    }
  }

  private _getClosetCycleHistoryInfo(inputDay) {
    // tracking history must be sorted from most recent to oldest
    let closetCycle: any = {}
    let closestIndex: number = 0
    this.state.history.some((value, index) => {
      const startDateDiff = inputDay.valueOf() - value.cycleStartDate.valueOf()
      if (startDateDiff < 0) {
        return // return early
      }
      closetCycle = value
      closestIndex = index
      return true // return true breaks out of the some loop
    })
    return { closetCycle, closestIndex }
  }

  private _cycleCompletion(completionDate) {
    const adjustedCycleLength = completionDate.diff(this.state.currentCycle.startDate, 'days')
    this.state.history.unshift({
      cycleStartDate: this.state.currentCycle.startDate,
      cycleEndDate: moment.utc(completionDate.clone().subtract(1, 'days')).startOf('day'),
      periodLength: this.state.currentCycle.periodLength,
      cycleLength: adjustedCycleLength,
    })
    this.state.currentCycle.startDate = moment.utc(completionDate.valueOf()).startOf('day')
    this.state.smartPrediction.circularPeriodLength.push(this.state.currentCycle.periodLength)
    this.state.smartPrediction.smaPeriodLength = Math.round(
      arrayAverage(this.state.smartPrediction.circularPeriodLength.toarray()),
    )
    this.state.currentCycle.periodLength = this.state.smartPrediction.smaPeriodLength
    // ignores irregular entries in the smart Prediction
    if (adjustedCycleLength > 15) {
      this.state.smartPrediction.circularCycleLength.push(adjustedCycleLength)
    } else {
      this.state.smartPrediction.circularCycleLength.push(28)
    }
    this.state.smartPrediction.smaCycleLength = Math.round(
      arrayAverage(this.state.smartPrediction.circularCycleLength.toarray()),
    )
    this.state.currentCycle.cycleLength = this.state.smartPrediction.smaCycleLength
  }
}
// +=+=+=+=+==+=+=+=+=+=+=+=+= Array Average +=+=+=++=+=+=+=+=+==+=+==+=+==+=+=

const arrayAverage = arr => {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}
