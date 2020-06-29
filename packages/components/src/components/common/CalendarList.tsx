import React from 'react'
import { Image } from 'react-native'
import { CalendarList as DefaultCalendarList, LocaleConfig } from 'react-native-calendars'
import moment from 'moment'
import { assets } from '../../assets/index'
import { useSelector } from '../../hooks/useSelector'
import * as selectors from '../../redux/selectors'
LocaleConfig.locales.id = {
  monthNames: [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ],
  monthNamesShort: [
    'Janv',
    'Févr',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil',
    'Août',
    'Sept',
    'Oct',
    'Nov',
    'Déc',
  ],

  dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  dayNamesShort: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
}
LocaleConfig.locales.mn = {
  monthNames: [
    'Нэгдүгээр',
    'Хоёрдугаар',
    'Гуравдугаар',
    'Дөрөвдүгээр',
    'Тавдугаар',
    'Зургадугаар',
    'Долоодугаар',
    'Наймдугаар',
    'Есдүгээр',
    'Аравдугаар',
    'Арван нэг',
    'Арван хоёр',
  ],
  monthNamesShort: [
    'Janv',
    'Févr',
    'Mar',
    'Avri',
    'Ma',
    'Jui',
    'Juil',
    'Aoû',
    'Sept',
    'Oct',
    'Nov',
    'Déc',
  ],
  dayNames: ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба'],
  dayNamesShort: ['Ням', 'Да', 'Мя', 'Лха', 'Пү', 'Ба', 'Бя'],
}
LocaleConfig.locales.en = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: ['Jan', 'Feb', 'Ma', 'Ap', 'Ma', 'Ju', 'Jul', 'Au', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
}

export function CalendarList({ highlightedDates = {}, setInputDay, width = null }: any) {
  const locale = useSelector(selectors.currentLocaleSelector)
  LocaleConfig.defaultLocale = locale
  const [markedDates, setMarkedDates] = React.useState({})

  React.useEffect(() => {
    setMarkedDates(highlightedDates)
  }, [highlightedDates])

  return (
    <DefaultCalendarList
      initialNumToRender={3}
      theme={{
        monthTextColor: '#f49200',
        textMonthFontSize: 20,
        textMonthFontFamily: 'Roboto-Black',
        'stylesheet.day.period': {
          base: {
            overflow: 'hidden',
            height: 34,
            alignItems: 'center',
            width: 38,
          },
          today: {
            backgroundColor: '#f49200',
          },
          todayText: {
            fontWeight: '700',
            color: 'white',
          },
        },
      }}
      horizontal={true} // Enable paging on horizontal
      pagingEnabled={true}
      renderArrow={direction => {
        if (direction === 'left')
          return <Image source={assets.static.icons.back} style={{ height: 20, width: 20 }} />
        return (
          <Image
            source={assets.static.icons.back}
            style={{ height: 20, width: 20, transform: [{ scaleX: -1 }] }}
          />
        )
      }}
      pastScrollRange={24} // months
      futureScrollRange={12} // months
      calendarWidth={width || 340}
      onDayPress={day => setInputDay(moment.utc(day.timestamp).startOf('day'))}
      markedDates={markedDates}
      markingType={'period'}
      hideArrows={false}
    />
  )
}
