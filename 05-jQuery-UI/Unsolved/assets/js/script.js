// variables setup with IDs
var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function(name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date); //concat means join together
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function(event) {
  event.preventDefault(); //preventdeault prevents the browser from refreshing

  var nameInput = nameInputEl.val(); //name input field
  var dateInput = dateInputEl.val(); //date input field

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// TODO: Add comments to describe the functionality of this jQuery UI interaction
// Enables users to quickly find and select from a pre-populated list of values as they type, leveraging searching and filtering.
$(function() {
  var skillNames = [
    'Bootstrap',
    'C',
    'C++',
    'CSS',
    'Express.js',
    'Git',
    'HTML',
    'Java',
    'JavaScript',
    'jQuery',
    'JSON',
    'MySQL',
    'Node.js',
    'NoSQL',
    'PHP',
    'Python',
    'React',
    'Ruby'
  ];
  $('#skill-name').autocomplete({
    source: skillNames
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction

// The datepicker is tied to a standard form input field. Focus on the input (click, or use the tab key) to open an interactive calendar in a small overlay. 
// Choose a date, click elsewhere on the page (blur the input), or hit the Esc key to close. 
// If a date is chosen, feedback is shown as the input's value.
$(function() {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction
$(function() {
  $('#skills-list').sortable({    // Enable a group of DOM elements to be sortable. Click on and drag an element to a new spot within the list, and the other items will adjust to fit. By default, sortable items share draggable properties.
    placeholder: 'ui-state-highlight'  //corresponds to the highligh behind the moveable list items
  });
  $('#skills-list').disableSelection();   //Disable selection of text content within the set of matched elements.
});
