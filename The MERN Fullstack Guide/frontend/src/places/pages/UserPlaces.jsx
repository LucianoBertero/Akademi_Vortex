import React from "react";
import { PlaceList } from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "empire state building",
    description: "one of the most famous sky scrapers in the world!",
    imageUrl:
      "https://thegamehaus.com/wp-content/uploads/2020/09/all-league-of-legends-champions.jpg",
    address: "20 w 34th st, new york, n y10001",
    location: {
      lat: 40.3,
      lng: -73.98,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "empire state building",
    description: "one of the most famous sky scrapers in the world!",
    imageUrl:
      "https://thegamehaus.com/wp-content/uploads/2020/09/all-league-of-legends-champions.jpg",
    address: "20 w 34th st, new york, n y10001",
    location: {
      lat: 40.3,
      lng: -73.98,
    },
    creator: "u2",
  },
];
export const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces}></PlaceList>;
};
