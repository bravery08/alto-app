export interface TripDetails {
    "trip": {
        "estimated_arrival": string,
        "estimated_fare_min": number,
        "estimated_fare_max": number,
        "passengers_min": number,
        "passengers_max": number,
        "payment": string,
        "dropoff_location": {
          "name": string,
          "street_line1": string,
          "street_line2": string,
          "city": string,
          "state": string,
          "zipcode": string,
          "lat": string,
          "long": string
        }, 
        "pickup_location": {
            "name": string,
            "street_line1": string,
            "street_line2": string,
            "city": string,
            "state": string,
            "zipcode": string,
            "lat": string,
            "long": string
          },
          "notes": string
        },
        "driver": {
          "name": string,
          "image": string,
          "bio": string,
          "phone": string
        },
        "vehicle": {
          "license": string,
          "make": string,
          "color": string,
          "image": string
        },
        "vibe": {
          "name": string
        }
      }