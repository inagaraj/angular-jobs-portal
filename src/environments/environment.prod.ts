const sessionId = localStorage.getItem('sessionId');
export const environment = {
  production: true,
  baseUrl: 'http://localhost:8888/',
  sessionid: sessionId,
};
