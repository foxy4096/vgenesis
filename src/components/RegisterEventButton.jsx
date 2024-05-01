/* eslint-disable react/prop-types */

import { Button } from "@chakra-ui/react";

function convertText(text) {
  // Split the text into words
  let words = text.split(/\s+/);
  
  let capitalizedWords = words.map(function(word) {
      return word.toUpperCase();
  });
  
  // Join the capitalized words with plus signs
  let convertedText = capitalizedWords.join("+");
  
  // Replace hyphens with themselves
  convertedText = convertedText.replace(/-/g, "-");
  
  return convertedText;
}
const RegisterEventButton = ({ event, ...props }) => {
  const registerLink = `https://docs.google.com/forms/d/e/1FAIpQLSf39KvISPq2wnA1xjrg8khtTv9pgoxDtXO0zcrU5kP3V0qgPg/viewform?usp=pp_url&entry.301759722=${convertText(event.name)}`;
  return <><a href={registerLink} target="_blank"><Button {...props}>Register</Button></a></>;
};

export default RegisterEventButton;
