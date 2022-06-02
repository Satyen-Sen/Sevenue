import feathers from '@feathersjs/feathers';
import auth from '@feathersjs/authentication-client';
import { CookieStorage } from 'cookie-storage';
import rest from '@feathersjs/rest-client';
import Axios from 'axios';
import services from './services.json';

export const authCookieName = 'sev_auth';

/**
 * CookieStorage
 * @type {CookieStorage}
 */
export const cookieStorage = new CookieStorage();

export const cookieStorageGetItem = (key) => {
  try {
    return cookieStorage.getItem(key);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Cookie parse fail:', e);
    return null;
  }
};

export const cookieStorageRemoveItem = (key) => {
  try {
    return cookieStorage.removeItem(key);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Cookie remove fail:', e);
    return null;
  }
};

const restClient = rest(process.env.NEXT_PUBLIC_API_URI);

/**
 * Feathers application
 * @type {createApplication.Application<any>}
 */
const restApp = feathers();

restApp.configure(restClient.axios(Axios));

restApp.configure(
  auth({
    path: services.authentication,
    // cookie: process.env.NEXT_COOKIE_NAME,
    cookie: authCookieName,
    // storageKey: process.env.NEXT_COOKIE_NAME,
    storageKey: authCookieName,
    storage: cookieStorage,
  }),
);

export default restApp;

export const uploadService = restApp.service(services.upload);

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('uri[]', file);
  return uploadService.create(formData);
};

export const UsersService = restApp.service(services['users']);
export const GetEventService = restApp.service(services['get-event']);
export const CheckEmailService = restApp.service(services['check-email']);
