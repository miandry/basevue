

import api from 'api';

const mainService = {
      getListUsers() {
        return api.get('/users')
      }
}

export default mainService;
