import React from 'react'
import Animated, { Easing } from 'react-native-reanimated'
import { runTiming } from 'react-native-redash'
import moment from 'moment'
import _ from 'lodash'
import { useCalculateFullInfoForDateRange } from '../../../components/context/PredictionProvider'

const today = moment.utc().startOf('day')
const todayMinusSevenDays = moment.utc(today.clone().add(-7, 'days'))
const todaysPlusFourDays = moment.utc(today.clone().add(4, 'days'))

const {
  Value,
  Clock,
  useCode,
  onChange,
  clockRunning,
  block,
  set,
  cond,
  eq,
  not,
  floor,
  modulo,
  call,
} = Animated

const initialState = {
  startDate: todayMinusSevenDays,
  endDate: todaysPlusFourDays,
  offset: 0,
  currentIndex: 0,
  page: 0,
}

const ITEM_LENGTH = 12
const RESET_AFTER = 8000
const RESET_ANIMATION_DURATION = 4000

enum RESET_STATE {
  INACTIVE,
  ACTIVE,
}

function reorderData(array, offset = 0) {
  const reorder = _.chunk(array, array.length / 2)
    .reverse()
    .flat()

  if (offset < 0) {
    return [
      ..._.takeRight(reorder, array.length - Math.abs(offset)),
      ..._.take(reorder, Math.abs(offset)),
    ]
  }

  return [..._.takeRight(reorder, offset), ..._.take(reorder, array.length - offset)]
}

export function useInfiniteScroll() {
  const [state, setState] = React.useState(initialState)
  const { startDate, endDate, offset, currentIndex, page } = state

  const fullInfoForDateRange = useCalculateFullInfoForDateRange(startDate, endDate)

  const isActive = new Value(0)
  const absoluteIndex = new Value(0)
  const floorAbsoluteIndex = floor(absoluteIndex)
  const index = modulo(absoluteIndex, ITEM_LENGTH)

  const clock = new Clock()
  const shouldReset = new Value(0)
  const resetState = React.useRef(new Value(RESET_STATE.INACTIVE))

  React.useEffect(() => {
    if (currentIndex === 0 && page === 0) {
      return
    }

    const timeout = setTimeout(() => {
      // @ts-ignore
      resetState.current.setValue(RESET_STATE.ACTIVE)
    }, RESET_AFTER)

    return () => {
      resetState.current.setValue(RESET_STATE.INACTIVE)
      clearTimeout(timeout)
    }
  }, [currentIndex, page])

  useCode(
    block([
      cond(eq(resetState.current, RESET_STATE.ACTIVE), [set(shouldReset, 1)]),
      cond(eq(shouldReset, 1), [
        set(
          absoluteIndex,
          runTiming(clock, absoluteIndex, {
            toValue: 0,
            duration: RESET_ANIMATION_DURATION,
            easing: Easing.inOut(Easing.ease),
          }),
        ),
        cond(not(clockRunning(clock)), [
          set(shouldReset, 0),
          set(resetState.current, RESET_STATE.INACTIVE),
        ]),
      ]),
      onChange(floorAbsoluteIndex, [
        call(
          [floorAbsoluteIndex],
          _.debounce(idx => {
            const nextIndex = idx[0]

            const absIndex = Math.abs(nextIndex)
            const absOffset = Math.abs(absIndex % ITEM_LENGTH)
            const pageNumber = Math.ceil(absIndex / ITEM_LENGTH)

            // scroll into the future
            if (nextIndex > 0) {
              return setState({
                startDate: todayMinusSevenDays.clone().add(absIndex, 'days'),
                endDate: todaysPlusFourDays.clone().add(absIndex, 'days'),
                currentIndex: absOffset,
                offset: absOffset,
                page: pageNumber,
              })
            }

            // scroll into the past
            return setState({
              startDate: todayMinusSevenDays.clone().add(-absIndex, 'days'),
              endDate: todaysPlusFourDays.clone().add(-absIndex, 'days'),
              currentIndex: (ITEM_LENGTH - absOffset) % ITEM_LENGTH,
              offset: -absOffset,
              page: pageNumber,
            })
          }, 100),
        ),
      ]),
    ]),
    [],
  )

  return {
    data: reorderData(fullInfoForDateRange, offset),
    isActive,
    index,
    currentIndex,
    absoluteIndex,
  }
}
