export type Message = TextMessage | GeoResponse | DateResponse | RateResponse;

export type CommandType = 'Date' | 'Map' | 'Rate';

type TextMessage = {
  author: string;
  type: 'Text';
  message: string;
};

type DateResponse = {
  type: 'Date';
  data: Date;
};

type GeoResponse = {
  type: 'Map';
  data: { lat: number, lng: number };
};

type RateResponse = {
  type: 'Rate';
  data: [number, number];
};
