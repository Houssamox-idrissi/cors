import axiosInstance from './axiosInstance'; 

const AuthService = {
  async register(firstName, lastName, post, lieu, ville, email, password, password_confirmation) {
    try {
      const response = await axiosInstance.post('/register', {
        firstName,
        lastName,
        post,
        lieu,
        ville,
        email,
        password,
        password_confirmation,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async login(email, password) {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout() {
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
};

export default AuthService;
