import { combineReducers } from 'redux';
import settings from './settings_reducer';
import weather from './weather_reducer';
import forecast from './forecast_reducer';
import airQuality from './air_quality_reducer';

// Redux requires at least one Reducer defined
export default combineReducers({
  // Every Reducer must define a non-undefined value
  settings, weather, forecast, airQuality
});
