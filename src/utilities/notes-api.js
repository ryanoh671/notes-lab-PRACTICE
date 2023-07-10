import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAllUserNotes() {
  return sendRequest(`${BASE_URL}/user`);
}

export async function createNote(newNote) {
  return sendRequest(`${BASE_URL}`, 'POST', newNote);
}