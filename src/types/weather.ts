export interface WeatherResponse {
    name: string;

    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
    };

    wind: {
        speed: number;
    };

    weather: {
        main: string;
        description: string;
        icon: string;
    }[];

    sys: {
        country: string;
    };
}