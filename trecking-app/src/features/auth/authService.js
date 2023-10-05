import Axios from 'axios';

class AuthService {
  constructor() {
    this.axios = Axios.create({
      baseURL: 'http://192.168.1.37:8000'
    });
  }

  async login(email, password) {
    const response = await this.axios.post('/token', {
      email,
      password
    });

    const token = response.data.token;
    localStorage.setItem('token', token);

    return response.data;
  }

  async logout() {
    localStorage.removeItem('token');
  }
}

export const authService = new AuthService();