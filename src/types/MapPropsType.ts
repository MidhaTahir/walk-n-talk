import { ITimeTravelInfo } from './index';
type Location = {
  lat: number;
  lng: number;
};

type Place = {
  description: string;
  location: Location;
};

export type MapPropsType = {
  origin: Place;
  destination: Place;
  travelTimeInfo: ITimeTravelInfo | null;
  setTravelTimeInfo: Function;
};
