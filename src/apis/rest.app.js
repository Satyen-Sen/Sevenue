import feathers from '@feathersjs/feathers';
import auth from '@feathersjs/authentication-client';
import { CookieStorage } from 'cookie-storage';
import rest from '@feathersjs/rest-client';
import Axios from 'axios';
import services from './services.json';

export const authCookieName = 'ticket';

/**
 * CookieStorage
 * @type {CookieStorage}
 */
export const cookieStorage = new CookieStorage();

const restClient = rest(process.env.baseUrl);

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

export const ServiceRequestService = restApp.service(services['service-request']);
export const PartnerRequestService = restApp.service(services['partner-request']);
export const CityService = restApp.service(services['city']);
export const BrandService = restApp.service(services['brand']);
export const AreaService = restApp.service(services['area']);

export const UsersService = restApp.service(services['users']);
export const ForgetPasswordService = restApp.service(services['forgetPassword']);
export const VerifyEmailService = restApp.service(services['verifyEmail']);

export const VerifyOtpServiceForForgotPassword = restApp.service(services['verifyOtp']);
export const ResetPasswordService = restApp.service(services['resetPassword']);
