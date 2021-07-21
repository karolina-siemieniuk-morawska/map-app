import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Geosuggest from 'react-geosuggest';

export const Header = ({ coordinates }) => {
  const search = <FontAwesomeIcon icon={faSearch} />;

  const onSuggestSelect = (suggest) => {
    if (suggest) {
      coordinates({
        lat: suggest.location.lat,
        lng: suggest.location.lng
      });
    }
  };

  return (
    <header className="topbar">
      <p className="mb-0">Geosuggestion</p>
      <div className="input-wrapper">
        {search}
        <Geosuggest placeholder="Country, region, city..." onSuggestSelect={onSuggestSelect} />
      </div>
    </header>
  )
};