import axios from 'axios';
import { HelloWorldApi } from './generated';

export const axiosInstance = axios.create();
// configuration, base path, axios instance
const commonParams = [undefined, undefined, axiosInstance];

export default {
  HelloWorldApi : new HelloWorldApi()
};