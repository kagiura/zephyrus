import {
	Address,
	Amenity,
	Anchor,
	Building,
	Footprint,
	ImdfFeatureCollection,
	ImdfManifest,
	Level,
	Occupant,
	Opening,
	Unit,
	Venue,
} from "@dazzlegarden/types/imdf";

import imdfAddressesJSON from "./address.json";
import imdfAmenitiesJSON from "./amenity.json";
import imdfAnchorsJSON from "./anchor.json";
import imdfBuildingsJSON from "./building.json";
import imdfFootprintsJSON from "./footprint.json";
import imdfLevelsJSON from "./level.json";
import imdfManifestJSON from "./manifest.json";
import imdfOccupantsJSON from "./occupant.json";
import imdfOpeningsJSON from "./opening.json";
import imdfUnitsJSON from "./unit.json";
import imdfVenuesJSON from "./venue.json";

const IMDF_MANIFEST = imdfManifestJSON as ImdfManifest;

const IMDF_ADDRESSES = imdfAddressesJSON as ImdfFeatureCollection<Address>;
const IMDF_AMENITIES = imdfAmenitiesJSON as ImdfFeatureCollection<Amenity>;
const IMDF_ANCHORS = imdfAnchorsJSON as ImdfFeatureCollection<Anchor>;
const IMDF_BUILDINGS = imdfBuildingsJSON as ImdfFeatureCollection<Building>;
const IMDF_FOOTPRINTS = imdfFootprintsJSON as ImdfFeatureCollection<Footprint>;
const IMDF_LEVELS = imdfLevelsJSON as ImdfFeatureCollection<Level>;
const IMDF_OCCUPANTS = imdfOccupantsJSON as ImdfFeatureCollection<Occupant>;
const IMDF_OPENINGS = imdfOpeningsJSON as ImdfFeatureCollection<Opening>;
const IMDF_UNITS = imdfUnitsJSON as ImdfFeatureCollection<Unit>;
const IMDF_VENUES = imdfVenuesJSON as ImdfFeatureCollection<Venue>;

export {
	IMDF_ADDRESSES,
	IMDF_AMENITIES,
	IMDF_ANCHORS,
	IMDF_BUILDINGS,
	IMDF_FOOTPRINTS,
	IMDF_LEVELS,
	IMDF_MANIFEST,
	IMDF_OCCUPANTS,
	IMDF_OPENINGS,
	IMDF_UNITS,
	IMDF_VENUES,
};
