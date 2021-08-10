import { LASTFM_API } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const ALBUM_INFO = 'method=album.getinfo';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${LASTFM_API}/?${ALBUM_INFO}${url}&api_key=${process.env.API_KEY}&format=json`;

    //console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const infoAlbum = async (term) => {

    return await doRequest(`&${term}`);

};