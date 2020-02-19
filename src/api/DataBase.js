import Ajax from '@/plugins/axios';

class DataBase {
  request() {
    Ajax();
  }
}

const instance = new DataBase();

export default instance;
