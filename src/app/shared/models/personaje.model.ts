export class PersonajeModel {
  name?: string;
  alternate_names?: string[];
  species?: Species;
  gender?: Gender;
  house?: House;
  dateOfBirth?: string;
  yearOfBirth?: number | string;
  wizard?: boolean;
  ancestry?: Ancestry;
  eyeColour?: EyeColour;
  hairColour?: string;
  wand?: Wand;
  patronus?: string;
  hogwartsStudent?: boolean;
  hogwartsStaff?: boolean;
  actor?: string;
  alternate_actors?: string[];
  alive?: boolean;
  image?: string;
}

export enum Ancestry {
  Empty = "",
  HalfBlood = "half-blood",
  Muggleborn = "muggleborn",
  PureBlood = "pure-blood",
}

export enum EyeColour {
  Black = "black",
  Blue = "blue",
  Brown = "brown",
  Dark = "dark",
  Empty = "",
  Green = "green",
  Grey = "grey",
  Red = "red",
}

export enum Gender {
  Female = "female",
  Male = "male",
}

export enum House {
  Gryffindor = "Gryffindor",
  Hufflepuff = "Hufflepuff",
  Ravenclaw = "Ravenclaw",
  Slytherin = "Slytherin",
}

export enum Species {
  Ghost = "ghost",
  HalfGiant = "half-giant",
  Human = "human",
  Werewolf = "werewolf",
}

export interface Wand {
  wood?: string;
  core?: Core;
  length?: number | string;
}

export enum Core {
  DragonHeartstring = "dragon heartstring",
  Empty = "",
  PhoenixFeather = "phoenix feather",
  UnicornHair = "unicorn hair",
  UnicornTailHair = "unicorn tail-hair",
}
