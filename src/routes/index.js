import { Router } from 'express';
import { getArtists } from '../services/artistsService.js';
import { artistInfo } from '../services/artistInfo.js';
import { artistSearch } from '../services/artistSearch.js';
import { artistSimilar } from '../services/artistSimilar.js';
import { artistTopTags } from '../services/artistTopTags.js';
import { artistTopTracks } from '../services/artistTopTracks.js';
import { artistTopAlbums } from '../services/artistTopAlbums.js';
import { albumInfo } from '../services/albumInfo.js';
import { albumSearch } from '../services/albumSearch.js';
import { albumTopTags } from '../services/albumTopTags.js';
import { chartsTopArtists } from '../services/chartsTopArtists.js';
import { chartsTopTags } from '../services/chartsTopTags.js';
import { chartsTopTracks } from '../services/chartsTopTracks.js';
import { trackSearch } from '../services/trackSearch.js';
import { trackInfo } from '../services/trackInfo.js';
import { trackTopTags } from '../services/trackTopTags.js';
import { trackSimilar } from '../services/trackSimilar.js';
import { geoTopArtists } from '../services/geoTopArtists.js';
import { geoTopTracks } from '../services/geoTopTracks.js';

const routes = new Router();

routes.get('/artists', getArtists);
routes.get('/artistInfo', artistInfo);
routes.get('/artistSearch', artistSearch);
routes.get('/artistSimilar', artistSimilar);
routes.get('/artistTopTags', artistTopTags);
routes.get('/artistTopTracks', artistTopTracks);
routes.get('/artistTopAlbums', artistTopAlbums);
routes.get('/albumInfo', albumInfo);
routes.get('/albumSearch', albumSearch);
routes.get('/albumTopTags', albumTopTags);
routes.get('/chartsTopArtists', chartsTopArtists);
routes.get('/chartsTopTags', chartsTopTags);
routes.get('/chartsTopTracks', chartsTopTracks);
routes.get('/trackSearch', trackSearch);
routes.get('/trackInfo', trackInfo);
routes.get('/trackTopTags', trackTopTags);
routes.get('/trackSimilar', trackSimilar);
routes.get('/geoTopArtists', geoTopArtists);
routes.get('/geoTopTracks', geoTopTracks);

export default routes;
