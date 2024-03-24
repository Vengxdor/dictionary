export type License = {
  name?: string;
  url?: string;
}

export type Definition = {
  definition?: string;
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
}

export type Meaning = {
  partOfSpeech?: string;
  definitions?: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}
export type Phonetic = {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
}

export type DictionaryRes = {
  word?: string;
  phonetic?: string;
  phonetics?: Phonetic[];
  meanings?: Meaning[];
  license?: License;
  sourceUrls?: string[];
}

export const searchWord = async (word: string): Promise<DictionaryRes[]> => {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  const data = await res.json()

  return data as DictionaryRes[]
}
