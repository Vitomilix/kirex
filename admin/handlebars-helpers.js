const Handlebars = require('handlebars')
require('dotenv').config();
Handlebars.registerHelper('getIcon', function (category, options) {
  return category === '家居物業' ? `<i class="fas fa-home text-danger"></i>`
    : category === '交通出行' ? `<i class="fas fa-shuttle-van text-primary"></i>`
      : category === '休閒娛樂' ? `<i class="fas fa-grin-beam text-purple"></i>`
        : category === '餐飲食品' ? `<i class="fas fa-utensils text-orange"></i>`
          : `<i class="fas fa-pen text-success"></i>`
})


Handlebars.registerHelper('getText', function (value, options) {
  return value === 1 || value === '1' ? `Yes`
    : value === 0 || value === '0'? `No`
      : value === 2 ? `N/A`
          : `No Data`
})


Handlebars.registerHelper('isSelected', function (selectedOption, thisOption, options) {
  return (selectedOption === thisOption) ? 'selected' : ''
})

Handlebars.registerHelper('getDisplayDate', function (date, options) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}/${month}/${day}`
})

Handlebars.registerHelper('getInputDate', function (date, options) {
  if (!date) { return '' }
  const month = date.getMonth() === 11 ? 1 : date.getMonth() + 1
  return `${date.getFullYear()}-${month.toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
})


Handlebars.registerHelper('switch', function(value, options) {
  this.switch_value = value;
  return options.fn(this);
});

Handlebars.registerHelper('case', function(value, options) {
  if (value == this.switch_value) {
    return options.fn(this);
  }
});
