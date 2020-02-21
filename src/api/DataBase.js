import Ajax from '@/plugins/axios';

class DataBase {
  constructor() {
    this.baseURL = 'http://zvo.is.szdl.ru:80/ajax/';
  }

  request(props) {
    console.log(this);
    return Ajax(props);
  }

  getRegion() {
    this.request({
      url: `${this.baseURL}getRegionByCoords.php`,
      data: {
        TOP_LAT: 55.18489,
        TOP_LNG: 61.44208,
        BOTTOM_LAT: 55.18422,
        BOTTOM_LNG: 61.4409,
      },
    });
  }
}

const instance = new DataBase();

export default instance;
