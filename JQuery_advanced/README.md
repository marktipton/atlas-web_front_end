# JQuery

#### Loading jQuery from a CDN

- jQuery can be loaded from a CDN (Content Delivery Network) by using a script in the head tag of an HTML file.

#### DOM manipulation

- Using jQuery, elements can be selected by
  - tag name: $('p')
  - class: $('.className')
  - id: $('idName')
  - attribute: $('[name="username"]')

#### Modifying elements

- Content can be modified by selecting the desired element and then using key words to target the html, text, attributes, styles, etc. of the element
  - $('#imageName').attr('src', 'newImage.jpg');
  - $('#elementName').text('New text content');
  - $('#elementName').html('New HTML content');

#### Add elements with different positions

- elements can be added by appending them
  - $('#contentID').append('insert html here')
  - $('#contentToBeRemoved').remove();

#### Click Handlers

#### AJAX queries with jQuery

#### pagination