const baseUrl = 'https://shinginitelecom.com.ng/';

export default URLS = () => {
  return {
    home: `${baseUrl}mobile/home/`,
    login: `${baseUrl}mobile/login/`,
    forgetPassword: `${baseUrl}mobile/recovery/`,
    signup: `${baseUrl}mobile/register/`,
    api: `${baseUrl}api/account/login/`,
  };
};
