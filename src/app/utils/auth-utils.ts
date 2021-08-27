export class AuthUtils{
private static AUTH_KEY='auth_key';

static getAuthDetails(){
  return localStorage.getItem(AuthUtils.AUTH_KEY);

}

static setAuthdetails(){
  return localStorage.setItem(AuthUtils.AUTH_KEY, String(true));
}

static deleteAuthDetails(){
  return localStorage.removeItem(AuthUtils.AUTH_KEY);
}

}
