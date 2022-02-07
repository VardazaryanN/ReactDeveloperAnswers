import {API_URL} from "./config"

const getWords = async(word)=> {
	const response = await fetch(API_URL + '/words?rel_rhy=' + word);
	return response.json();
}



export {getWords};