class Auth {
  constructor() {
    this.token = null;
    this.isAuth = false;
  }

  authenticate = token => {
    this.token = token;
    this.isAuth = true;
  };
}

const authClient = new Auth();

export default authClient;
