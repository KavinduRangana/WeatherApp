// import dependencies
import create from "zustand";

const Store = create((set) => ({
  searchkey: "colombo",

  weather: {
    city: "",
    temp: "",
    feels_like: "",
    temp_min: "",
    temp_max: "",
    pressure: "",
    humidity: "",
    sea_level: "",
    grnd_level: "",
    speed: "",
    gust: "",
    sky: "",
  },

  forcast: [
    { temp: "", feels_like: "", date: "", sky: "" },
    { temp: "", feels_like: "", date: "", sky: "" },
    { temp: "", feels_like: "", date: "", sky: "" },
    { temp: "", feels_like: "", date: "", sky: "" },
  ],

  updateSearch: (e) => {
    const { value } = e.target;

    set((state) => {
      return {
        searchkey: value,
      };
    });
  },

  searchData: (e) => {
    const { searchkey } = Store.getState();

    console.log(searchkey);

    fetch("http://localhost:8000/weather?address=" + searchkey).then((res) => {
      res.json().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          set({
            weather: {
              city: data.name,
              temp: data.main.temp,
              feels_like: data.main.feels_like,
              temp_min: data.main.temp_min,
              temp_max: data.main.temp_max,
              pressure: data.main.pressure,
              humidity: data.main.humidity,
              sea_level: data.main.sea_level,
              grnd_level: data.main.grnd_level,
              speed: data.wind.speed,
              gust: data.wind.gust,
              sky: data.weather[0].description,
            },
          });
        }
      });
    });

    fetch("http://localhost:8000/forcast?address=" + searchkey).then((res) => {
      res.json().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          set({
            forcast: [
              {
                temp: data.list[1].main.temp,
                feels_like: data.list[1].main.feels_like,
                date: data.list[1].dt_txt,
                sky: data.list[1].weather[0].description,
              },
              {
                temp: data.list[2].main.temp,
                feels_like: data.list[2].main.feels_like,
                date: data.list[2].dt_txt,
                sky: data.list[2].weather[0].description,
              },
              {
                temp: data.list[3].main.temp,
                feels_like: data.list[3].main.feels_like,
                date: data.list[3].dt_txt,
                sky: data.list[3].weather[0].description,
              },
              {
                temp: data.list[4].main.temp,
                feels_like: data.list[4].main.feels_like,
                date: data.list[4].dt_txt,
                sky: data.list[4].weather[0].description,
              },
            ],
          });
        }
      });
    });
  },
}));

export default Store;
