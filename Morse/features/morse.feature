Feature: Morse

  Scenario: getLatinCharacterList
    When I input "bonjour"
    Then I receive a list

  Scenario: encode
    When I encode "toto"
    Then I get "- --- - ---"