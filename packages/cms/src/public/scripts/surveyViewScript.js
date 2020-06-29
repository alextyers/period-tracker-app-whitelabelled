var chart

// Update variable content in Modal when it shows from the edit button
$('#dynamicModal').on('show.bs.modal', event => {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var surveyId = button.data('value') // Extract info from data-* attributes
  if (surveyId === 0) {
    $('.modal-title').text('Insert New Survey')
    $('#col0TableModal').val('')
    $('#col1TableModal').val('')
    $('#col2TableModal').val('')
    $('#col3TableModal').val('')
    $('#col4TableModal').val('')
    $('#col5TableModal').val('')
    $('#col6TableModal').val('')
    $('#itemID').text(0)
    return
  }
  var surveys = JSON.parse($('#surveysJSON').text())
  var surveyInfo = surveys.find(item => {
    return item.id === surveyId
  })

  $('.modal-title').text('Edit Did You Know')
  $('#col0TableModal').val(surveyInfo.question)
  $('#col1TableModal').val(surveyInfo.option1)
  $('#col2TableModal').val(surveyInfo.option2)
  $('#col3TableModal').val(surveyInfo.option3)
  $('#col4TableModal').val(surveyInfo.option4)
  $('#col5TableModal').val(surveyInfo.option5)
  $('#col6TableModal').val(surveyInfo.response)
  $('#itemID').text(surveyId)
})

//  and create confirmation
$('#btnEditConfirm').on('click', () => {
  const surveyId = $('#itemID').text()
  const data = {
    question: $('#col0TableModal').val(),
    option1: $('#col1TableModal').val(),
    option2: $('#col2TableModal').val(),
    option3: $('#col3TableModal').val(),
    option4: $('#col4TableModal').val(),
    option5: $('#col5TableModal').val(),
    response: $('#col6TableModal').val(),
    live: 'false',
  }
  if (
    data.question === '' ||
    data.question.length > 65 ||
    data.option1 === '' ||
    data.option1.length > 20 ||
    data.option2 === '' ||
    data.option2.length > 20 ||
    data.option3 === '' ||
    data.option3.length > 20 ||
    data.option4 === '' ||
    data.option4.length > 20 ||
    data.option5 === '' ||
    data.option5.length > 20 ||
    data.response === ''
  ) {
    $('#error1').show()
    $('#error2').show()
    $('#error3').show()
    $('#error4').show()
    $('#error5').show()
    $('#error6').show()
    $('#error7').show()
    return
  }
  // if the ID is 0 we are creating a new entry
  $.ajax({
    url: '/survey' + (surveyId === '0' ? '' : '/' + surveyId),
    type: surveyId === '0' ? 'POST' : 'PUT',
    data: data,
    success: result => {
      location.reload()
    },
    error: error => {
      console.log(error)
    },
  })
})

// ==================== Live check =============================
$('.liveCheckbox').on('click', () => {
  var button = $(event.currentTarget) // Button that triggered the modal
  var surveyId = button.data('value') // Extract info from data-* attributes
  var surveys = JSON.parse($('#surveysJSON').text())
  var surveyInfo = surveys.find(item => {
    return item.id === surveyId
  })

  const data = {
    question: surveyInfo.question,
    option1: surveyInfo.option1,
    option2: surveyInfo.option2,
    option3: surveyInfo.option3,
    option4: surveyInfo.option4,
    option5: surveyInfo.option5,
    response: surveyInfo.response,
    live: button.prop('checked'),
  }
  // if the ID is 0 we are creating a new entry
  $.ajax({
    url: '/survey/' + surveyId,
    type: 'PUT',
    data: data,
    success: result => {
      location.reload()
    },
    error: error => {
      console.log(error)
    },
  })
})

// ==================== Delete =============================

$('.delete').on('click', event => {
  var button = $(event.currentTarget) // currentTarget is the outer
  var surveyId = button.data('value') // Extract info from data-* attributes
  var result = confirm('Are you sure? This will permanently delete the item')
  if (result) {
    $.ajax({
      url: '/survey/' + surveyId,
      type: 'DELETE',
      success: result => {
        location.reload()
      },
      error: error => {
        console.log(error)
      },
    })
  }
})

// ==================== Graph =============================

$('#graphModal').on('show.bs.modal', event => {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var answeredSurveys = JSON.parse($('#answeredSurveysJSON').text())
  var surveyID = button.data('value') // Extract info from data-* attributes
  var surveyAnswered = answeredSurveys.find(item => {
    return item.id === surveyID
  })
  if (!surveyAnswered) {
    renderPieChart({ 'No Data': 1 }, 'chartDiv')
    return
  }
  renderPieChart(
    {
      'Option 1': surveyAnswered.total_option1,
      'Option 2': surveyAnswered.total_option2,
      'Option 3': surveyAnswered.total_option3,
      'Option 4': surveyAnswered.total_option4,
      'Option 5': surveyAnswered.total_option5,
    },
    'chartDiv',
  )
})

$('#graphModal').on('hide.bs.modal', event => {
  !!chart ? chart.dispose() : null
})

$('#downloadCsv').on('click', () => {
  var answeredSurveys = JSON.parse($('#answeredSurveysJSON').text())
  var surveys = JSON.parse($('#surveysJSON').text())
  var relevantSurvey = ''
  var rows = []
  answeredSurveys.forEach((item, index) => {
    relevantSurvey = surveys.find(innerItem => {
      return innerItem.id === item.id
    })
    if (relevantSurvey === null) return
    rows.push([relevantSurvey.question, 'Total Option 1', 'Total Option 2'])
    rows.push(['', item.total_option1, item.total_option2])
  })
  exportToCsv('Survey Analytics', rows)
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

renderPieChart = (data, location) => {
  // Set theme
  am4core.useTheme(am4themes_animated)
  chart = am4core.create(location, am4charts.PieChart3D)
  chart.innerRadius = am4core.percent(30)
  chart.legend = new am4charts.Legend()
  chart.legend.position = 'left'
  chart.legend.valign = 'middle'
  // chart.legend.labels.template.text = '[bold {color}]{name}:[/] '
  // chart.legend.labels.template.value = '[{value.value} {valueY.close}'

  chart.data = Object.keys(data).map((key, index) => {
    return {
      answer: key,
      amount: parseInt(data[key]),
    }
  })

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

$('#countdown1').show()
$('#countdown2').show()
$('#countdown3').show()
$('#countdown4').show()
$('#countdown5').show()
$('#countdown6').show()

function makeUpdateCountdown({ countdownElement, tableElement, maxLength }) {
  function updateCountdown() {
    var remaining = maxLength - tableElement.val().length
    countdownElement.text(remaining + ' characters remaining.')
  }

  $(document).ready(function($) {
    updateCountdown()
    tableElement.change(updateCountdown)
    tableElement.keyup(updateCountdown)
  })
}

//================= Sorting =======================================

var filterList = $('#surveyContainer')
var items = filterList.children()
var sortDateStatus = false
var filteredItems = false
var sortAlphabetStatus = false

var sortDate = function({ column }) {
  filteredItems = filteredItems ? filteredItems : items

  if (!sortDateStatus) {
    var sortList = Array.prototype.sort.bind(filteredItems)
    sortList(function(a, b) {
      var aText = new Date(a.children[column].innerHTML)
      var bText = new Date(b.children[column].innerHTML)
      if (aText < bText) {
        return -1
      }
      if (aText > bText) {
        return 1
      }
      return 0
    })
    sortDateStatus = true
  } else {
    var sortList = Array.prototype.sort.bind(filteredItems)
    sortList(function(a, b) {
      var aText = new Date(a.children[column].innerHTML)
      var bText = new Date(b.children[column].innerHTML)
      if (aText > bText) {
        return -1
      }
      if (aText < bText) {
        return 1
      }
      return 0
    })
    sortDateStatus = false
  }
  filterList.append(filteredItems)
}

var sortAlphabetically = function({ column }) {
  filteredItems = filteredItems ? filteredItems : items
  if (!sortAlphabetStatus) {
    var sortList = Array.prototype.sort.bind(filteredItems)

    sortList(function(a, b) {
      var aText = a.children[column].innerHTML
      var bText = b.children[column].innerHTML
      if (aText < bText) {
        return -1
      }
      if (aText > bText) {
        return 1
      }
      return 0
    })
    sortAlphabetStatus = true
  } else {
    var sortList = Array.prototype.sort.bind(filteredItems)
    sortList(function(a, b) {
      var aText = a.children[column].innerHTML
      var bText = b.children[column].innerHTML
      if (aText > bText) {
        return -1
      }
      if (aText < bText) {
        return 1
      }
      return 0
    })
    sortAlphabetStatus = false
  }
  filterList.append(filteredItems)
}

$('#dateSort').click(() => sortDate({ column: 11 }))
$('#surveyQuestion').click(() => sortAlphabetically({ column: 0 }))

//==================== Countdown logic =============================

makeUpdateCountdown({
  countdownElement: $('#countdown1'),
  tableElement: $('#col0TableModal'),
  maxLength: 65,
})

makeUpdateCountdown({
  countdownElement: $('#countdown2'),
  tableElement: $('#col1TableModal'),
  maxLength: 20,
})
makeUpdateCountdown({
  countdownElement: $('#countdown3'),
  tableElement: $('#col2TableModal'),
  maxLength: 20,
})

makeUpdateCountdown({
  countdownElement: $('#countdown4'),
  tableElement: $('#col3TableModal'),
  maxLength: 20,
})

makeUpdateCountdown({
  countdownElement: $('#countdown5'),
  tableElement: $('#col4TableModal'),
  maxLength: 20,
})

makeUpdateCountdown({
  countdownElement: $('#countdown6'),
  tableElement: $('#col5TableModal'),
  maxLength: 20,
})
