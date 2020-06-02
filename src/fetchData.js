const fetchData = coord => {
    var geolocations = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [-77.032, 38.913]
            },
            properties: {
            title: 'D.C.',
            description: 'The District of Columbia'
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [-122.414, 37.776]
            },
            properties: {
            title: 'S.F.',
            description: 'San Francisco, California'
            }
        }]
    };

    return Promise.resolve({
        type: "FeatureCollection",
        features: geolocations.features,
    });
}

export default fetchData;