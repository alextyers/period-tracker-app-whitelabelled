var chart
var dashChart
var barChart
var lineChart

const usersLocations = JSON.parse($('#userLocationsJSON').text())
const usersGenders = JSON.parse($('#userGendersJSON').text())
const usersAgeGroups = JSON.parse($('#usersAgeGroupsJSON').text())
const usersCountries = JSON.parse($('#usersCountriesJSON').text())
const usersProvinces = JSON.parse($('#usersProvincesJSON').text())
const userShares = JSON.parse($('#usersSharesJSON').text())
const directDownloads = JSON.parse($('#directDownloadsJSON').text())

$('#currentCountry').change(() => {
  dashBarChart(usersProvinces[$('#currentCountry').val()], 'usersProvincesGraph')
})

$(document).ready(() => {
  console.log(usersProvinces)
  dashPieChart(
    {
      Male: usersGenders[0].total_male,
      Female: usersGenders[0].total_female,
      'Prefer not to say': usersGenders[0].total_other,
    },
    'userGenderGraph',
  )
  dashPieChart(
    { Urban: usersLocations[0].total_urban, Rural: usersLocations[0].total_rural },
    'userLocationGraph',
  )
  dashBarChart(
    {
      'Under 5': usersAgeGroups[0].under_5,
      '5 to 10': usersAgeGroups[0].between_5_10,
      '11 - 13': usersAgeGroups[0].between_11_13,
      '14 - 15': usersAgeGroups[0].between_14_15,
      '16 - 18': usersAgeGroups[0].between_16_18,
      '19 - 20': usersAgeGroups[0].between_19_20,
      'Over 21': usersAgeGroups[0].greater_than_20,
    },
    'userAgeGroupsGraph',
  )
  dashBarChart(usersCountries, 'userCountriesGraph')
  dashBarChart(usersProvinces[$('#currentCountry').val()], 'usersProvincesGraph')

  dashLineChart(userShares, 'userShareGraph')
  dashLineChart(directDownloads, 'directDownloadsGraph')
})

$('#graphModal').on('show.bs.modal', event => {
  const button = $(event.relatedTarget) // Button that triggered the modal
  var request = button.data('value') // Extract info from data-* attributes
  const requestInfo = switchActions(request)
  renderPieChart(requestInfo.chartDataFormat, 'chartDiv')
})

$('#graphModal').on('hide.bs.modal', event => {
  !!chart ? chart.dispose() : null
})

$('#downloadCSV').on('click', () => {
  const countryList = Object.keys(usersCountries)
  const countryCount = Object.values(usersCountries)
  const provinceList = Object.keys(usersProvinces[$('#currentCountry').val()])
  const provinceCount = Object.values(usersProvinces[$('#currentCountry').val()])
  const totalShares = userShares.reduce((a, b) => a + parseInt(b.value), 0)
  const totalDownloads = directDownloads.reduce((a, b) => a + parseInt(b.value), 0)
  const rows = [
    ['User Gender'],
    ['Male', 'Female', 'Prefer not to say'],
    [usersGenders[0].total_male, usersGenders[0].total_female, usersGenders[0].total_other],
    ['User Ages'],
    ['Under 5', '5 to 10', '11 - 13', '14 - 15', '16 - 18', '19 - 20', 'Over 21'],
    [
      usersAgeGroups[0].under_5,
      usersAgeGroups[0].between_5_10,
      usersAgeGroups[0].between_11_13,
      usersAgeGroups[0].between_14_15,
      usersAgeGroups[0].between_16_18,
      usersAgeGroups[0].between_19_20,
      usersAgeGroups[0].greater_than_20,
    ],
    ['User Locations'],
    ['Urban', 'Rural'],
    [usersLocations[0].total_urban, usersLocations[0].total_rural],
    ['User Countries'],
    countryList,
    countryCount,
    [`User Province for ${$('#currentCountry').val()}`],
    provinceList,
    provinceCount,
    ['User Shares'],
    [totalShares],
    ['User Downloads'],
    [totalDownloads],
  ]
  exportToCsv('User Analytics', rows)
})

exportToCsv = (filename, rows) => {
  var processRow = function(row) {
    var finalVal = ''
    for (var j = 0; j < row.length; j++) {
      var innerValue = row[j] === null ? '' : row[j].toString()
      if (row[j] instanceof Date) {
        innerValue = row[j].toLocaleString()
      }
      var result = innerValue.replace(/"/g, '""')
      if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"'
      if (j > 0) finalVal += ','
      finalVal += result
    }
    return finalVal + '\n'
  }

  var csvFile = ''
  for (var i = 0; i < rows.length; i++) {
    csvFile += processRow(rows[i])
  }

  var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' })
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename)
  } else {
    var link = document.createElement('a')
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', filename)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}

switchActions = input => {
  switch (input) {
    case 'userLocation':
      return {
        chartDataFormat: {
          Urban: usersLocations[0].total_urban,
          Rural: usersLocations[0].total_rural,
        },
      }
    case 'userGender':
      return {
        chartDataFormat: {
          Male: usersGenders[0].total_male,
          Female: usersGenders[0].total_female,
          'Prefer not to say': usersGenders[0].total_other,
        },
      }
    case 'usersAgeGroups':
      return {
        chartDataFormat: {
          'Under 5': usersAgeGroups[0].under_5,
          '5 to 10': usersAgeGroups[0].between_5_10,
          '11 - 13': usersAgeGroups[0].between_11_13,
          '14 - 15': usersAgeGroups[0].between_14_15,
          '16 - 18': usersAgeGroups[0].between_16_18,
          '19 - 20': usersAgeGroups[0].between_19_20,
          'Over 21': usersAgeGroups[0].greater_than_20,
        },
      }
    case 'usersCountries':
      return {
        chartDataFormat: usersCountries,
      }
    case 'usersProvinces':
      return {
        chartDataFormat: usersProvinces[$('#currentCountry').val()],
      }
  }
}

renderPieChart = (data, location) => {
  am4core.useTheme(am4themes_animated)
  chart = am4core.create(location, am4charts.PieChart3D)
  chart.innerRadius = am4core.percent(30)
  chart.legend = new am4charts.Legend()
  chart.legend.position = 'left'
  chart.legend.valign = 'middle'
  // chart.legend.labels.template.text = '[bold {color}]{name}:[/] '
  // chart.legend.labels.template.value = '[{value.value} {valueY.close}'

  if ($.isEmptyObject(data)) {
    chart.data = [
      {
        answer: 'No dataset 1',
        amount: 36,
      },
      {
        answer: 'No dataset 2',
        amount: 42,
      },
      {
        answer: 'No dataset 3',
        amount: 10,
      },
    ]
  } else {
    chart.data = Object.keys(data).map((key, index) => {
      return {
        answer: key,
        amount: parseInt(data[key]),
      }
    })
  }

  var pieSeries = chart.series.push(new am4charts.PieSeries3D())
  pieSeries.dataFields.value = 'amount'
  pieSeries.dataFields.category = 'answer'
  pieSeries.slices.template.stroke = am4core.color('#fff')
  pieSeries.slices.template.strokeWidth = 2
  pieSeries.slices.template.strokeOpacity = 1
  pieSeries.labels.template.disabled = true
  pieSeries.ticks.template.disabled = true
  chart.numberFormatter.numberFormat = '#.'
  pieSeries.legendSettings.labelText = '[bold {color}]{name}[/]'
  var label = pieSeries.createChild(am4core.Label)
  label.text = 'Total: [bold {color}]{values.value.sum}[/]'
  label.isMeasured = false
  label.fontSize = 16
  label.x = -30
  label.y = -15
  pieSeries.legendSettings.valueText = '{value.value} '
  pieSeries.slices.template.states.getKey('hover').properties.shiftRadius = 0
  pieSeries.slices.template.states.getKey('hover').properties.scale = 1.1
}

dashPieChart = (data, location) => {
  dashChart = am4core.create(location, am4charts.PieChart3D)
  dashChart.innerRadius = am4core.percent(10)
  if ($.isEmptyObject(data)) {
    dashChart.data = [
      {
        answer: 'No dataset 1',
        amount: 36,
      },
      {
        answer: 'No dataset 2',
        amount: 42,
      },
      {
        answer: 'No dataset 3',
        amount: 10,
      },
    ]
  } else {
    dashChart.data = Object.keys(data).map((key, index) => {
      return {
        answer: key,
        amount: parseInt(data[key]),
      }
    })
  }
  var pieSeries = dashChart.series.push(new am4charts.PieSeries())
  pieSeries.dataFields.value = 'amount'
  pieSeries.dataFields.category = 'answer'
  pieSeries.slices.template.stroke = am4core.color('#fff')
  pieSeries.slices.template.strokeWidth = 2
  pieSeries.slices.template.strokeOpacity = 1
  pieSeries.ticks.template.disabled = true
  pieSeries.slices.template.states.getKey('hover').properties.scale = 1
  pieSeries.slices.template.states.getKey('active').properties.shiftRadius = 0
  dashChart.numberFormatter.numberFormat = '#.'
  pieSeries.alignLabels = false
  pieSeries.labels.template.text = '[font-size: 12px]{answer}: {amount}[/]'
  pieSeries.labels.template.radius = am4core.percent(-35)
  pieSeries.labels.template.fill = am4core.color('white')
  pieSeries.labels.template.adapter.add('hidden', hideSmall)
  function hideSmall(hidden, target) {
    return target.dataItem.values.value.percent < 17 ? true : false // hides the label if less than 17 percent
  }
}

dashBarChart = (data, location) => {
  var barChart = am4core.create(location, am4charts.XYChart)

  // Create axes
  if ($.isEmptyObject(data)) {
    barChart.data = [
      {
        answer: 'No dataset 1',
        amount: 36,
      },
      {
        answer: 'No dataset 2',
        amount: 42,
      },
      {
        answer: 'No dataset 3',
        amount: 10,
      },
    ]
  } else {
    barChart.data = Object.keys(data).map((key, index) => {
      return {
        answer: key,
        amount: parseInt(data[key]),
      }
    })
  }
  var categoryAxis = barChart.xAxes.push(new am4charts.CategoryAxis())
  categoryAxis.dataFields.category = 'answer'
  categoryAxis.renderer.grid.template.location = 0
  categoryAxis.renderer.minGridDistance = 30

  categoryAxis.renderer.labels.template.adapter.add('dy', function(dy, target) {
    if (target.dataItem && target.dataItem.index & (2 == 2)) {
      return dy + 25
    }
    return dy
  })

  var valueAxis = barChart.yAxes.push(new am4charts.ValueAxis())

  // Create series
  var series = barChart.series.push(new am4charts.ColumnSeries())
  series.dataFields.valueY = 'amount'
  series.dataFields.categoryX = 'answer'
  series.name = 'User Age Groups'
  series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]'
  series.columns.template.fillOpacity = 0.8

  var columnTemplate = series.columns.template
  columnTemplate.strokeWidth = 2
  columnTemplate.strokeOpacity = 1
}

dashLineChart = (data, location) => {
  lineChart = am4core.create(location, am4charts.XYChart)
  lineChart.data = data

  // Create axes
  var dateAxis = lineChart.xAxes.push(new am4charts.DateAxis())
  dateAxis.renderer.minGridDistance = 60

  var valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis())
  valueAxis.baseValue = 0
  // Create series
  var series = lineChart.series.push(new am4charts.LineSeries())
  series.dataFields.valueY = 'value'
  series.dataFields.dateX = 'date'
  series.tooltipText = '{value}'

  series.tooltip.pointerOrientation = 'vertical'
  series.strokeWidth = 2
  series.tensionX = 0.9

  // lineChart.cursor.snapToSeries = series
  // lineChart.cursor.xAxis = dateAxis

  //chart.scrollbarY = new am4core.Scrollbar();
  lineChart.scrollbarX = new am4core.Scrollbar()
}
