import axios from "axios";
import toast from "react-hot-toast";

export const wordShortner = (word: string, length: number) => {
  if (word.length >= length) {
    return word.substring(0, length);
  } else return word + "...";
};
export const nameExtractor = (word: string) => {
  var index = word.indexOf("@");
  var newWord = word.substring(0, index);
  return newWord;
};
export const numberShortner = (number: number) => {
  if (String(number).length === 4) {
    return `${String(number).substring(0, 1)}K`;
  } else if (String(number).length === 5) {
    return `${String(number).substring(0, 2)}K`;
  } else if (String(number).length === 6) {
    return `${String(number).substring(0, 3)}K`;
  } else return number;
};

export const uploadFile = async (file: FormData, config: any) => {
  let result = axios.post(
    "https://api.pneumaimpact.ng/v1/api/uploads",
    file,
    config
  );
  return result;
};

export const toWeeksAgo = (dateString: string) => {

if (dateString  !== '' || dateString === undefined){
  const date = new Date(dateString);
  const now = new Date();
  const millisecondsAgo = now.getTime() - date.getTime();
  const daysAgo = Math.floor(millisecondsAgo / (1000 * 60 * 60 * 24));
  if (daysAgo == 0){
    return 'Today'
  }
  else
  return daysAgo + ' Days ago';}
  else
  return 'Today'
};
