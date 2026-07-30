export interface ForecastResponse {
  list: {
    dt: number;

    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };

    weather: {
      main: string;
      description: string;
      icon: string;
    }[];

    wind: {
      speed: number;
    };

    dt_txt: string;
  }[];

  city: {
    name: string;
    country: string;
  };
}