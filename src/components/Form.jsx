export const Form = ({ coordinates }) => {

  const submitCoordinates = (event) => {
    event.preventDefault();
    coordinates({
      lat: event.target[0].value,
      lng: event.target[1].value
    });
  }

  return (
    <form className="d-flex flex-column w-50 mx-auto my-4" onSubmit={submitCoordinates}>
      <label htmlFor="latitude">
        Latitude:
        <input type="text" name="latitude"></input>
      </label>

      <label htmlFor="longitude">
        Longitude:
        <input type="text" name="longitude"></input>
      </label>

      <button type="submit">Try</button>
    </form>
  )
};