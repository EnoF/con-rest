Feature: Call registration
  As a user of conREST
  I want to register a new rest call
  So that I can test this rest call in a workflow

  Scenario Outline: Registering api's
    Given I navigate to "registerCall"
    When entering the name with "[name]" on request
      And entering the url with "[url]" on request
      And entering the method with "[method]" on request
      And entering the type with "[type]" on request
      And clicking the button with "save" action
    Then the form header should become "Edit API Call"

    Where:
      | name    | url               | method  | type      |
      | Google  | http://google.com | GET     | formData  |
      | Yahoo   | http://yahoo.com  | OPTIONS | payload   |
      | Google  | http://google.com | DELETE  | formData  |
      | Bing    | http://bing.com   | PUT     | formData  |
