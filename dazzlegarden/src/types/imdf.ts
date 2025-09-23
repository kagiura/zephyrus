/**
 * IMDF types for TypeScript.
 * !!! taken from https://github.com/to4st/imdf-typescript !!!
 *  */
import {
  Feature as GeoJsonFeature,
  Geometry,
  LineString,
  MultiPolygon,
  Point,
  Polygon,
} from "geojson";

export type Polygonal = Polygon | MultiPolygon;

export interface Door {
  type: DOOR_TYPE | null;
  automatic: boolean | null;
  material: DOOR_MATERIAL_CATEGORY | null;
}

export enum DOOR_MATERIAL_CATEGORY {
  wood = "wood",
  glass = "glass",
  metal = "metal",
  gate = "gate",
}

interface FeatureReference {
  id: FeatureId;
  feature_type: FeatureType;
}

export enum FeatureType {
  "address" = "address",
  "amenity" = "amenity",
  "anchor" = "anchor",
  "building" = "building",
  "detail" = "detail",
  "fixture" = "fixture",
  "footprint" = "footprint",
  "geofence" = "geofence",
  "kiosk" = "kiosk",
  "level" = "level",
  "occupant" = "occupant",
  "opening" = "opening",
  "relationship" = "relationship",
  "section" = "section",
  "unit" = "unit",
  "venue" = "venue",
}

export const FEATURE_TYPES = Object.values(FeatureType);

export interface Labels {
  [key: string]: string; // ToDo Restrict key to lang shortnames
}

export interface Temporality {
  start: string;
  end: string;
  modified: string;
}

export type Hours = string;
export type Phone = string;
export type Website = string;
export type ISO3166 = string;
export type ISO3166_2 = string;

// IDS
export type FeatureId = string;
export type AddressId = FeatureId;
export type AmenityId = FeatureId;
export type AnchorId = FeatureId;
export type BuildingId = FeatureId;
export type DetailId = FeatureId;
export type FixtureId = FeatureId;
export type FootprintId = FeatureId;
export type GeofenceId = FeatureId;
export type KioskId = FeatureId;
export type LevelId = FeatureId;
export type OccupantId = FeatureId;
export type OpeningId = FeatureId;
export type RelationshipId = FeatureId;
export type SectionId = FeatureId;
export type UnitId = FeatureId;
export type VenueId = FeatureId;

/**
 * Base properties for all IMDF features
 */
export type FeatureProperties = {};

/**
 * Provide a better default value for GeoJsonFeature (Feature in geojson).
 * This makes the type Feature to be used in generic types much easier.
 */
export interface Feature<P extends FeatureProperties = FeatureProperties>
  extends GeoJsonFeature<Geometry | null, P> {
  feature_type: string;
}

interface Properties extends Record<string, any> {}

export interface NamedFeatureProperties extends Properties {
  name: Labels | null;
  alt_name?: Labels | null;
  display_point?: DisplayPoint | null;
}

export interface LabeledFeatureProperties extends NamedFeatureProperties {
  level_id: LevelId;
  display_point: DisplayPoint | null;
}

/**
 * Features that have a name
 */
export interface NamedFeature<
  Properties extends NamedFeatureProperties = NamedFeatureProperties,
> extends Feature<Properties> {}

/**
 * Features that have a name and a label position
 */
export interface LabeledFeature<
  Properties extends LabeledFeatureProperties = LabeledFeatureProperties,
> extends NamedFeature<Properties> {}

// FEATURE TYPES
/**
 * Address object
 * https://docs.ogc.org/cs/20-094/Address/index.html
 */
export interface Address extends Feature {
  id: AddressId;
  feature_type: FeatureType.address;
  geometry: null;
  properties: FeatureProperties & {
    address: string;
    unit: string | null;
    locality: string;
    province: ISO3166_2 | null;
    country: ISO3166;
    postal_code: string | null;
    postal_code_ext: string | null;
    postal_code_vanity: string | null;
  };
}

/**
 * Amenity object
 * https://docs.ogc.org/cs/20-094/Amenity/index.html
 */
export interface Amenity extends NamedFeature {
  id: AmenityId;
  feature_type: FeatureType.amenity;
  geometry: Point;
  properties: FeatureProperties & {
    category: AMENITY_CATEGORY;
    accessibility: ACCESSIBILITY_CATEGORY[] | null;
    name: Labels | null;
    alt_name: Labels | null;
    hours: Hours | null;
    phone: Phone | null;
    website: Website | null;
    unit_ids: Array<UnitId>;
    address_id: AddressId | null;
    correlation_id: AmenityId | null;
  };
}

/**
 * Anchor object
 * https://docs.ogc.org/cs/20-094/Anchor/index.html
 */
export interface Anchor extends Feature {
  id: AnchorId;
  feature_type: FeatureType.anchor;
  geometry: Point;
  properties: FeatureProperties & {
    address_id: AddressId | null;
    unit_id: UnitId;
  };
}

export interface BuildingProperties extends NamedFeatureProperties {
  category: BUILDING_CATEGORY;
  restriction: RESTRICTION_CATEGORY | null;
  name: Labels | null;
  alt_name: Labels | null;
  display_point: DisplayPoint | null;
  address_id: AddressId | null;
}

/**
 * Building object
 * https://docs.ogc.org/cs/20-094/Building/index.html
 */
export interface Building extends NamedFeature<BuildingProperties> {
  id: BuildingId;
  feature_type: FeatureType.building;
  geometry: null;
  properties: BuildingProperties;
}

/**
 * Detail object
 * https://docs.ogc.org/cs/20-094/Detail/index.html
 */
export interface Detail extends Feature {
  id: DetailId;
  feature_type: FeatureType.detail;
  properties: FeatureProperties & {
    level_id: LevelId;
  };
}

/**
 * Fixture object
 * https://docs.ogc.org/cs/20-094/Fixture/index.html
 */
export interface Fixture extends LabeledFeature {
  id: FixtureId;
  feature_type: FeatureType.fixture;
  geometry: Polygonal;
  properties: FeatureProperties & {
    category: FIXTURE_CATEGORY;
    name: Labels | null;
    alt_name: Labels | null;
    anchor_id: AnchorId | null;
    level_id: LevelId;
    display_point: DisplayPoint | null;
  };
}

/**
 * Footprint object
 * https://docs.ogc.org/cs/20-094/Footprint/index.html
 */
export interface Footprint extends Feature {
  id: FootprintId;
  feature_type: FeatureType.footprint;
  geometry: Polygonal;
  properties: FeatureProperties & {
    category: FOOTPRINT_CATEGORY;
    name: Labels | null;
    building_ids: Array<BuildingId>;
  };
}

/**
 * Geofence object
 * https://docs.ogc.org/cs/20-094/Geofence/index.html
 */
export interface Geofence extends Feature {
  id: GeofenceId;
  feature_type: FeatureType.geofence;
  geometry: Polygonal;
  properties: FeatureProperties & {
    category: GEOFENCE_CATEGORY;
  };
}

export interface KioskProperties extends NamedFeatureProperties {
  name: Labels;
  alt_name: Labels;
  anchorId: AnchorId | null;
  levelId: LevelId | null;
  display_point: DisplayPoint | null;
}

/**
 * Kiosk object
 * https://docs.ogc.org/cs/20-094/kiosk/index.html
 */
export interface Kiosk extends NamedFeature<KioskProperties> {
  id: KioskId;
  feature_type: FeatureType.kiosk;
  geometry: Polygonal;
  properties: KioskProperties;
}

export interface LevelProperties extends NamedFeatureProperties {
  category: LEVEL_CATEGORY;
  restriction: RESTRICTION_CATEGORY | null;
  outdoor: boolean;
  ordinal: number;
  name: Labels;
  short_name: Labels;
  display_point: DisplayPoint | null;
  address_id: AddressId | null;
  building_ids: Array<BuildingId> | null;
}

/**
 * Level object
 * https://docs.ogc.org/cs/20-094/Level/index.html
 */
export interface Level extends NamedFeature<LevelProperties> {
  id: LevelId;
  feature_type: FeatureType.level;
  geometry: Polygonal;
  properties: LevelProperties;
}

/**
 * Occupant object
 * https://docs.ogc.org/cs/20-094/Occupant/index.html
 */
export interface Occupant extends Feature {
  id: OccupantId;
  feature_type: FeatureType.occupant;
  geometry: null;
  properties: FeatureProperties & {
    name: Labels;
    category: OCCUPANT_CATEGORY;
    anchor_id: AnchorId;
    hours: Hours | null;
    phone: Phone | null;
    website: Website | null;
    validity: Temporality | null;
    correlation_id: OccupantId | null;
  };
}

/**
 * Opening object
 * https://docs.ogc.org/cs/20-094/Opening/index.html
 */
export interface Opening extends LabeledFeature {
  id: OpeningId;
  feature_type: FeatureType.opening;
  geometry: LineString;
  properties: LabeledFeatureProperties & {
    category: OPENING_CATEGORY;
    accessibility: ACCESSIBILITY_CATEGORY[] | null;
    access_control: ACCESS_CONTROL_CATEGORY[] | null;
    door: Door | null;
    name: Labels | null;
    alt_name: Labels | null;
    display_point: DisplayPoint | null;
    level_id: LevelId;
  };
}

/**
 * Relationship object
 * https://docs.ogc.org/cs/20-094/Relationship/index.html
 */
export interface Relationship extends Feature {
  id: RelationshipId;
  feature_type: FeatureType.relationship;
  geometry: Geometry | null;
  properties: FeatureProperties & {
    category: RELATIONSHIP_CATEGORY;
    direction: "directed" | "undirected";
    origin: FeatureReference | null;
    intermediary: FeatureReference | null;
    destination: FeatureReference | null;
    hours: Hours | null;
  };
}

/**
 * Section object
 * https://docs.ogc.org/cs/20-094/Section/index.html
 */
export interface Section extends LabeledFeature {
  id: SectionId;
  feature_type: FeatureType.section;
  geometry: Polygonal;
  properties: LabeledFeatureProperties & {
    category: SECTION_CATEGORY;
    restriction: RESTRICTION_CATEGORY | null;
    accessibility: ACCESSIBILITY_CATEGORY[] | null;
    name: Labels | null;
    alt_name: Labels | null;
    display_point: DisplayPoint | null;
    level_id: LevelId;
    address_id: AddressId | null;
    correlation_id: SectionId | null;
    parents: SectionId | null;
  };
}

export interface UnitProperties extends LabeledFeatureProperties {
  category: UNIT_CATEGORY;
  restriction: RESTRICTION_CATEGORY | null;
  accessibility: ACCESSIBILITY_CATEGORY[] | null;
  name: Labels | null;
  alt_name: Labels | null;
  level_id: LevelId;
  display_point: DisplayPoint | null;
}

/**
 * Unit object
 * https://docs.ogc.org/cs/20-094/Unit/index.html
 */
export interface Unit extends LabeledFeature<UnitProperties> {
  id: UnitId;
  feature_type: FeatureType.unit;
  geometry: Polygonal;
  properties: UnitProperties;
}

/**
 * Venue object
 * https://docs.ogc.org/cs/20-094/Venue/index.html
 */
export interface Venue extends NamedFeature {
  id: VenueId;
  feature_type: FeatureType.venue;
  geometry: Polygonal;
  properties: FeatureProperties & {
    category: VENUE_CATEGORY;
    restriction: RESTRICTION_CATEGORY | null;
    name: Labels;
    alt_name: Labels | null;
    hours: Hours | null;
    phone: Phone | null;
    website: Website | null;
    display_point: DisplayPoint;
    address_id: AddressId;
  };
}

// GEOMETRIC OBJECTS
export interface DisplayPoint extends Point {}

/**
 * Access control categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#access-control
 */
export enum ACCESS_CONTROL_CATEGORY {
  "badgereader" = "badgereader",
  "fingerprintreader" = "fingerprintreader",
  "guard" = "guard",
  "keyaccess" = "keyaccess",
  "outofservice" = "outofservice",
  "passwordaccess" = "passwordaccess",
  "retinascanner" = "retinascanner",
  "voicerecognition" = "voicerecognition",
}

// CATEGORIES
/**
 * Accessibility categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#accessibility
 */
export enum ACCESSIBILITY_CATEGORY {
  "assisted.listening" = "assisted.listening",
  braille = "braille",
  hearing = "hearing",
  hearingloop = "hearingloop",
  signlanginterpreter = "signlanginterpreter",
  tactilepaving = "tactilepaving",
  tdd = "tdd",
  trs = "trs",
  volume = "volume",
  wheelchair = "wheelchair",
}

/**
 * Amenity categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#amenity
 */
export enum AMENITY_CATEGORY {
  amphitheater = "amphitheater",
  animalreliefarea = "animalreliefarea",
  arrivalgate = "arrivalgate",
  atm = "atm",
  babychanging = "babychanging",
  baggagecarousel = "baggagecarousel",
  "baggagecarousel.intl" = "baggagecarousel.intl",
  baggagecarts = "baggagecarts",
  baggageclaim = "baggageclaim",
  "baggageclaim.oversize" = "baggageclaim.oversize",
  baggagerecheck = "baggagerecheck",
  baggagestorage = "baggagestorage",
  boardinggate = "boardinggate",
  "boardinggate.aircraft" = "boardinggate.aircraft",
  "boardinggate.bus" = "boardinggate.bus",
  "boardinggate.ferry" = "boardinggate.ferry",
  "boardinggate.train" = "boardinggate.train",
  bus = "bus",
  "bus.muni" = "bus.muni",
  "bus.national" = "bus.national",
  businesscenter = "businesscenter",
  cabin = "cabin",
  caregiver = "caregiver",
  carrental = "carrental",
  cashier = "cashier",
  changemachine = "changemachine",
  checkin = "checkin",
  "checkin.desk" = "checkin.desk",
  "checkin.desk.oversizebaggage" = "checkin.desk.oversizebaggage",
  "checkin.desk.transfer" = "checkin.desk.transfer",
  "checkin.selfservice" = "checkin.selfservice",
  childplayarea = "childplayarea",
  coinlocker = "coinlocker",
  copymachine = "copymachine",
  defibrillator = "defibrillator",
  drinkingfountain = "drinkingfountain",
  eatingdrinking = "eatingdrinking",
  elevator = "elevator",
  emergencyshelter = "emergencyshelter",
  entry = "entry",
  escalator = "escalator",
  exhibit = "exhibit",
  faregate = "faregate",
  "faregate.oversized" = "faregate.oversized",
  fieldofplay = "fieldofplay",
  "fieldofplay.americanfootball" = "fieldofplay.americanfootball",
  "fieldofplay.baseball" = "fieldofplay.baseball",
  "fieldofplay.basketball" = "fieldofplay.basketball",
  "fieldofplay.fieldhockey" = "fieldofplay.fieldhockey",
  "fieldofplay.icehockey" = "fieldofplay.icehockey",
  "fieldofplay.rugby" = "fieldofplay.rugby",
  "fieldofplay.soccer" = "fieldofplay.soccer",
  "fieldofplay.softball" = "fieldofplay.softball",
  "fieldofplay.tennis" = "fieldofplay.tennis",
  "fieldofplay.trackfield" = "fieldofplay.trackfield",
  "fieldofplay.volleyball" = "fieldofplay.volleyball",
  "firealarmpullstation" = "firealarmpullstation",
  "fireextinguisher" = "fireextinguisher",
  firstaid = "firstaid",
  fittingroom = "fittingroom",
  foodservice = "foodservice",
  gatearea = "gatearea",
  groundtransportation = "groundtransportation",
  guestservices = "guestservices",
  handsanitizerstation = "handsanitizerstation",
  healthscreening = "healthscreening",
  hoteling = "hoteling",
  immigration = "immigration",
  information = "information",
  "information.bid" = "information.bid",
  "information.carrental" = "information.carrental",
  "information.hotel" = "information.hotel",
  "information.mufid" = "information.mufid",
  "information.mufid.arrivals" = "information.mufid.arrivals",
  "information.mufid.departures" = "information.mufid.departures",
  "information.transit" = "information.transit",
  landmark = "landmark",
  library = "library",
  limo = "limo",
  lostandfound = "lostandfound",
  mailbox = "mailbox",
  meditation = "meditation",
  meetingpoint = "meetingpoint",
  mobilityrescue = "mobilityrescue",
  mothersroom = "mothersroom",
  movingwalkway = "movingwalkway",
  paidarea = "paidarea",
  parkandride = "parkandride",
  parking = "parking",
  "parking.bicycle" = "parking.bicycle",
  "parking.compact" = "parking.compact",
  "parking.ev" = "parking.ev",
  "parking.longterm" = "parking.longterm",
  "parking.motorcycle" = "parking.motorcycle",
  "parking.shortterm" = "parking.shortterm",
  "parking.waitingarea" = "parking.waitingarea",
  payphone = "payphone",
  pedestriancrossing = "pedestriancrossing",
  peoplemover = "peoplemover",
  phone = "phone",
  "phone.emergency" = "phone.emergency",
  photobooth = "photobooth",
  platform = "platform",
  police = "police",
  powerchargingstation = "powerchargingstation",
  prayerroom = "prayerroom",
  "prayerroom.buddhism" = "prayerroom.buddhism",
  "prayerroom.christianity" = "prayerroom.christianity",
  "prayerroom.hinduism" = "prayerroom.hinduism",
  "prayerroom.islam" = "prayerroom.islam",
  "prayerroom.islam.female" = "prayerroom.islam.female",
  "prayerroom.islam.male" = "prayerroom.islam.male",
  "prayerroom.judaism" = "prayerroom.judaism",
  "prayerroom.shintoism" = "prayerroom.shintoism",
  "prayerroom.sikh" = "prayerroom.sikh",
  "prayerroom.taoic" = "prayerroom.taoic",
  privatelounge = "privatelounge",
  productreturn = "productreturn",
  "rail.muni" = "rail.muni",
  "rail.national" = "rail.national",
  ramp = "ramp",
  "reception.desk" = "reception.desk",
  recreation = "recreation",
  restroom = "restroom",
  "restroom.family" = "restroom.family",
  "restroom.female" = "restroom.female",
  "restroom.female.wheelchair" = "restroom.female.wheelchair",
  "restroom.male" = "restroom.male",
  "restroom.male.wheelchair" = "restroom.male.wheelchair",
  "restroom.transgender" = "restroom.transgender",
  "restroom.transgender.wheelchair" = "restroom.transgender.wheelchair",
  "restroom.unisex" = "restroom.unisex",
  "restroom.unisex.wheelchair" = "restroom.unisex.wheelchair",
  "restroom.wheelchair" = "restroom.wheelchair",
  rideshare = "rideshare",
  seat = "seat",
  seating = "seating",
  security = "security",
  "security.checkpoint" = "security.checkpoint",
  "security.inspection" = "security.inspection",
  service = "service",
  shower = "shower",
  shuttle = "shuttle",
  sleepbox = "sleepbox",
  smokingarea = "smokingarea",
  stairs = "stairs",
  storage = "storage",
  strollerrental = "strollerrental",
  studentadmissions = "studentadmissions",
  studentservices = "studentservices",
  swimmingpool = "swimmingpool",
  "swimmingpool.children" = "swimmingpool.children",
  "swimmingpool.family" = "swimmingpool.family",
  taxi = "taxi",
  ticketing = "ticketing",
  "ticketing.airline" = "ticketing.airline",
  "ticketing.bus" = "ticketing.bus",
  "ticketing.bus.muni" = "ticketing.bus.muni",
  "ticketing.bus.national" = "ticketing.bus.national",
  "ticketing.rail" = "ticketing.rail",
  "ticketing.rail.muni" = "ticketing.rail.muni",
  "ticketing.rail.national" = "ticketing.rail.national",
  "ticketing.shuttle" = "ticketing.shuttle",
  traintrack = "traintrack",
  transit = "transit",
  unspecified = "unspecified",
  valet = "valet",
  vendingmachine = "vendingmachine",
  "vendingmachine.trainticket" = "vendingmachine.trainticket",
  wheelchairassist = "wheelchairassist",
  wifi = "wifi",
  yoga = "yoga",
}

/**
 * Building categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#building
 */
export enum BUILDING_CATEGORY {
  parking = "parking",
  transit = "transit",
  "transit.bus" = "transit.bus",
  "transit.train" = "transit.train",
  unspecified = "unspecified",
}

/**
 * Door categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#door
 */

export enum DOOR_CATEGORY {
  door = "door",
  movablepartition = "movablepartition",
  open = "open",
  revolving = "revolving",
  shutter = "shutter",
  sliding = "sliding",
  swinging = "swinging",
  turnstile = "turnstile",
  "turnstile.fullheight" = "turnstile.fullheight",
  "turnstile.waistheight" = "turnstile.waistheight",
  unspecified = "unspecified",
}

/**
 * Door types
 * https://docs.ogc.org/cs/20-094/Reference/index.html#door
 */
export enum DOOR_TYPE {
  movablepartition = "movablepartition",
  open = "open",
  revolving = "revolving",
  shutter = "shutter",
  sliding = "sliding",
  swinging = "swinging",
  turnstile = "turnstile",
  "turnstile.fullheight" = "turnstile.fullheight",
  "turnstile.waistheight" = "turnstile.waistheight",
}

/**
 * Fixture categories
 *
 */
export enum FIXTURE_CATEGORY {
  baggagecarousel = "baggagecarousel",
  "boardinggate.desk" = "boardinggate.desk",
  "checkin.desk" = "checkin.desk",
  "checkin.kiosk" = "checkin.kiosk",
  desk = "desk",
  equipment = "equipment",
  furniture = "furniture",
  "immigration.desk" = "immigration.desk",
  "inspection.desk" = "inspection.desk",
  obstruction = "obstruction",
  securityequipment = "securityequipment",
  stage = "stage",
  vegetation = "vegetation",
  wall = "wall",
}

/**
 * Footprint categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#footprint
 */
export enum FOOTPRINT_CATEGORY {
  aerial = "aerial",
  ground = "ground",
  subterranean = "subterranean",
}

/**
 * Geofence categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#geofence
 */
export enum GEOFENCE_CATEGORY {
  concourse = "concourse",
  geofence = "geofence",
  paidarea = "paidarea",
  platform = "platform",
  postsecurity = "postsecurity",
  presecurity = "presecurity",
  terminal = "terminal",
  underconstruction = "underconstruction",
}

/**
 * Level categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#level
 */
export enum LEVEL_CATEGORY {
  arrivals = "arrivals",
  "arrivals.domestic" = "arrivals.domestic",
  "arrivals.intl" = "arrivals.intl",
  departures = "departures",
  "departures.domestic" = "departures.domestic",
  "departures.intl" = "departures.intl",
  parking = "parking",
  transit = "transit",
  unspecified = "unspecified",
}

/**
 * Occupant categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#occupant
 */
export enum OCCUPANT_CATEGORY {
  "3dprinting" = "3dprinting",
  "acai" = "acai",
  "accessories" = "accessories",
  "accounting" = "accounting",
  "acnetreatment" = "acnetreatment",
  "acupuncture" = "acupuncture",
  "adoptionservices" = "adoptionservices",
  "adulteducation" = "adulteducation",
  "adultentertainment" = "adultentertainment",
  "adultstore" = "adultstore",
  "advertising" = "advertising",
  "advisoryservices" = "advisoryservices",
  "afghani" = "afghani",
  "african" = "african",
  "agritourism" = "agritourism",
  "airfield" = "airfield",
  "airline" = "airline",
  "airport.regional" = "airport.regional",
  "airportloungebar" = "airportloungebar",
  "airportshuttle" = "airportshuttle",
  "airsoft" = "airsoft",
  "allergies" = "allergies",
  "alternativemedicine" = "alternativemedicine",
  "american.modern" = "american.modern",
  "amusementpark" = "amusementpark",
  "amusementpark.ride" = "amusementpark.ride",
  "animalshelter" = "animalshelter",
  "antiques" = "antiques",
  "apmstop" = "apmstop",
  "appliances" = "appliances",
  "arabian" = "arabian",
  "arabian.pizza" = "arabian.pizza",
  "arcade" = "arcade",
  "archery" = "archery",
  "architecture" = "architecture",
  "argentine" = "argentine",
  "armenian" = "armenian",
  "artgallery" = "artgallery",
  "artinstruction" = "artinstruction",
  "arts.entertainment" = "arts.entertainment",
  "artsandcrafts" = "artsandcrafts",
  "artschool" = "artschool",
  "artstudio" = "artstudio",
  "artstudio.rental" = "artstudio.rental",
  "artsupplies" = "artsupplies",
  "asianfusion" = "asianfusion",
  "astrologist" = "astrologist",
  "asturian" = "asturian",
  "atm" = "atm",
  "atm.cryptocurrency" = "atm.cryptocurrency",
  "audiovideoequipment" = "audiovideoequipment",
  "auditory" = "auditory",
  "australian" = "australian",
  "australian.modern" = "australian.modern",
  "austrian" = "austrian",
  "austrian.schnitzel" = "austrian.schnitzel",
  "auto.accessibilityequipment" = "auto.accessibilityequipment",
  "auto.bodyshop" = "auto.bodyshop",
  "auto.carbuyer" = "auto.carbuyer",
  "auto.carshare" = "auto.carshare",
  "auto.carwash" = "auto.carwash",
  "auto.dealer.boat" = "auto.dealer.boat",
  "auto.dealer.car" = "auto.dealer.car",
  "auto.dealer.motorcycle" = "auto.dealer.motorcycle",
  "auto.dealer.rv" = "auto.dealer.rv",
  "auto.dentrepair.mobile" = "auto.dentrepair.mobile",
  "auto.detailing" = "auto.detailing",
  "auto.electric" = "auto.electric",
  "auto.evcharge" = "auto.evcharge",
  "auto.evcharge.dcfast" = "auto.evcharge.dcfast",
  "auto.evcharge.tesla" = "auto.evcharge.tesla",
  "auto.glass" = "auto.glass",
  "auto.oilchange" = "auto.oilchange",
  "auto.parts" = "auto.parts",
  "auto.repair" = "auto.repair",
  "auto.repair.transmission" = "auto.repair.transmission",
  "auto.repair.wheelrim" = "auto.repair.wheelrim",
  "auto.repair.windshield" = "auto.repair.windshield",
  "auto.servicestation" = "auto.servicestation",
  "auto.shipping" = "auto.shipping",
  "auto.stereoinstallation" = "auto.stereoinstallation",
  "auto.tires" = "auto.tires",
  "auto.upholstery" = "auto.upholstery",
  "automotive" = "automotive",
  "autopartssupplies" = "autopartssupplies",
  "babyclothesandsupplies" = "babyclothesandsupplies",
  "bagels" = "bagels",
  "bakedgoods" = "bakedgoods",
  "ballonservices" = "ballonservices",
  "bangladeshi" = "bangladeshi",
  "bank" = "bank",
  "bar" = "bar",
  "barbecue" = "barbecue",
  "barber" = "barber",
  "barfood" = "barfood",
  "barreclass" = "barreclass",
  "baseballfield" = "baseballfield",
  "bathingarea" = "bathingarea",
  "batteries" = "batteries",
  "battingcages" = "battingcages",
  "beach" = "beach",
  "beautysalon" = "beautysalon",
  "beautyspas" = "beautyspas",
  "bedbreakfast" = "bedbreakfast",
  "beerbar" = "beerbar",
  "beergarden" = "beergarden",
  "beerhall" = "beerhall",
  "beerwineandspirits" = "beerwineandspirits",
  "beerwinespirits" = "beerwinespirits",
  "beisl" = "beisl",
  "belgian" = "belgian",
  "belgian.flemish" = "belgian.flemish",
  "bengali" = "bengali",
  "beveragestore" = "beveragestore",
  "bicycle.repair" = "bicycle.repair",
  "bicyclerental" = "bicyclerental",
  "bicycleshop" = "bicycleshop",
  "bikesandequipment" = "bikesandequipment",
  "billingservices" = "billingservices",
  "bingo" = "bingo",
  "biryani" = "biryani",
  "bistro" = "bistro",
  "blacksea" = "blacksea",
  "blinds" = "blinds",
  "blooddonation" = "blooddonation",
  "blooddonationcenter" = "blooddonationcenter",
  "bodycontouring" = "bodycontouring",
  "bodypiercing" = "bodypiercing",
  "books" = "books",
  "booksmagazinesmusicvideo" = "booksmagazinesmusicvideo",
  "botanicalgarden" = "botanicalgarden",
  "bowlingalley" = "bowlingalley",
  "boxing" = "boxing",
  "brazilian" = "brazilian",
  "brazilian.centralbrazil" = "brazilian.centralbrazil",
  "brazilian.empanadas" = "brazilian.empanadas",
  "brazilian.northeasternbrazil" = "brazilian.northeasternbrazil",
  "brazilian.northernbrazil" = "brazilian.northernbrazil",
  "breakfastandbrunch" = "breakfastandbrunch",
  "brewery" = "brewery",
  "brewpub" = "brewpub",
  "bridalstore" = "bridalstore",
  "british" = "british",
  "bubbletea" = "bubbletea",
  "buffet" = "buffet",
  "buildingsupplies" = "buildingsupplies",
  "bulgarian" = "bulgarian",
  "bulkmedicalbilling" = "bulkmedicalbilling",
  "bungeejumping" = "bungeejumping",
  "burgers" = "burgers",
  "burmese" = "burmese",
  "businesscampus" = "businesscampus",
  "businessconsulting" = "businessconsulting",
  "busrental" = "busrental",
  "busstop" = "busstop",
  "butcher" = "butcher",
  "cabinets" = "cabinets",
  "cafe" = "cafe",
  "cafeteria" = "cafeteria",
  "cajun" = "cajun",
  "cakes" = "cakes",
  "calligraphy" = "calligraphy",
  "cambodian" = "cambodian",
  "canadian.modern" = "canadian.modern",
  "candy" = "candy",
  "candy.dagashi" = "candy.dagashi",
  "cannabisdispensary" = "cannabisdispensary",
  "canteen" = "canteen",
  "cardioclasses" = "cardioclasses",
  "cardiology" = "cardiology",
  "cards.stationery" = "cards.stationery",
  "careercounseling" = "careercounseling",
  "caribbean" = "caribbean",
  "caricaturist" = "caricaturist",
  "carouselride" = "carouselride",
  "carpet" = "carpet",
  "carrental" = "carrental",
  "catering" = "catering",
  "cellphoneaccessories" = "cellphoneaccessories",
  "challengecourse" = "challengecourse",
  "champagnebar" = "champagnebar",
  "cheese" = "cheese",
  "cheesesteaks" = "cheesesteaks",
  "chickenshop" = "chickenshop",
  "chickenwings" = "chickenwings",
  "childbirthschool" = "childbirthschool",
  "childcare" = "childcare",
  "chilean" = "chilean",
  "chimneycakes" = "chimneycakes",
  "chinese" = "chinese",
  "chinese.cantonese" = "chinese.cantonese",
  "chinese.dimsum" = "chinese.dimsum",
  "chinese.fuzhou" = "chinese.fuzhou",
  "chinese.hainan" = "chinese.hainan",
  "chinese.hakka" = "chinese.hakka",
  "chinese.henghwa" = "chinese.henghwa",
  "chinese.hokkien" = "chinese.hokkien",
  "chinese.hunan" = "chinese.hunan",
  "chinese.pekinese" = "chinese.pekinese",
  "chinese.shanghainese" = "chinese.shanghainese",
  "chinese.szechuan" = "chinese.szechuan",
  "chinese.teochew" = "chinese.teochew",
  "chinesebazaar" = "chinesebazaar",
  "chiropractic" = "chiropractic",
  "chocolate" = "chocolate",
  "christmastrees" = "christmastrees",
  "churros" = "churros",
  "cider" = "cider",
  "cigarbar" = "cigarbar",
  "cinema" = "cinema",
  "cityhall" = "cityhall",
  "climbing" = "climbing",
  "clinic" = "clinic",
  "clockrepair" = "clockrepair",
  "clothing" = "clothing",
  "clothing.bespoke" = "clothing.bespoke",
  "clothing.childrens" = "clothing.childrens",
  "clothing.mens" = "clothing.mens",
  "clothing.plussize" = "clothing.plussize",
  "clothing.womens" = "clothing.womens",
  "cocktailbar" = "cocktailbar",
  "coffee" = "coffee",
  "coffee.tea" = "coffee.tea",
  "coffeeroaster" = "coffeeroaster",
  "coffeeteasupplies" = "coffeeteasupplies",
  "coincashingkiosk" = "coincashingkiosk",
  "college" = "college",
  "colombian" = "colombian",
  "comedyclub" = "comedyclub",
  "comfortfood" = "comfortfood",
  "comicbooks" = "comicbooks",
  "commercialrealestate" = "commercialrealestate",
  "commissionedartists" = "commissionedartists",
  "communitybookbox" = "communitybookbox",
  "communitycenter" = "communitycenter",
  "computersandaccessories" = "computersandaccessories",
  "conceptshop" = "conceptshop",
  "concourse" = "concourse",
  "condominium" = "condominium",
  "congee" = "congee",
  "constructionequipmentrental" = "constructionequipmentrental",
  "contractors" = "contractors",
  "conveniencestore" = "conveniencestore",
  "conveyorsushi" = "conveyorsushi",
  "cooking.instruction" = "cooking.instruction",
  "cookingschool" = "cookingschool",
  "copyshop" = "copyshop",
  "corporateheadquarters" = "corporateheadquarters",
  "corporateoffices" = "corporateoffices",
  "corsican" = "corsican",
  "cosmetics" = "cosmetics",
  "cosmeticsurgery" = "cosmeticsurgery",
  "cosmetologyschool" = "cosmetologyschool",
  "costumes" = "costumes",
  "countertopinstallation" = "countertopinstallation",
  "countryclub" = "countryclub",
  "courier" = "courier",
  "crepes" = "crepes",
  "cryotherapy" = "cryotherapy",
  "cuban" = "cuban",
  "culturalcenter" = "culturalcenter",
  "cupcakes" = "cupcakes",
  "currencyexchange" = "currencyexchange",
  "customcakes" = "customcakes",
  "custommerchandise" = "custommerchandise",
  "cyclingclass" = "cyclingclass",
  "cypriot" = "cypriot",
  "czech" = "czech",
  "danceclub" = "danceclub",
  "danceschool" = "danceschool",
  "dancestudio" = "dancestudio",
  "dancewear" = "dancewear",
  "danish" = "danish",
  "datarecovery" = "datarecovery",
  "dayspa" = "dayspa",
  "dealer.usedvehicle" = "dealer.usedvehicle",
  "delicatessen" = "delicatessen",
  "delicatessen.sandwiches" = "delicatessen.sandwiches",
  "dentalhygiene" = "dentalhygiene",
  "dentistry" = "dentistry",
  "dentistry.cosmetic" = "dentistry.cosmetic",
  "dentistry.general" = "dentistry.general",
  "dentistry.pediatric" = "dentistry.pediatric",
  "departmentstore" = "departmentstore",
  "dermatology" = "dermatology",
  "desserts" = "desserts",
  "diagnosticimaging" = "diagnosticimaging",
  "diagnosticservices" = "diagnosticservices",
  "dialysis" = "dialysis",
  "dietician" = "dietician",
  "digitizingservices" = "digitizingservices",
  "diner" = "diner",
  "dinnertheater" = "dinnertheater",
  "discountstore" = "discountstore",
  "distillery" = "distillery",
  "divebar" = "divebar",
  "diyfood" = "diyfood",
  "dmv" = "dmv",
  "dominican" = "dominican",
  "donair" = "donair",
  "donationcenter" = "donationcenter",
  "donuts" = "donuts",
  "doorsalesandinstallation" = "doorsalesandinstallation",
  "drivingrange" = "drivingrange",
  "drivingschool" = "drivingschool",
  "drycleaning" = "drycleaning",
  "drycleaninglaundry" = "drycleaninglaundry",
  "dumplings" = "dumplings",
  "dumpsterrental" = "dumpsterrental",
  "dutyfree" = "dutyfree",
  "earnosethroat" = "earnosethroat",
  "easterneuropean" = "easterneuropean",
  "eatertainment" = "eatertainment",
  "editorialservices" = "editorialservices",
  "education" = "education",
  "educationservices" = "educationservices",
  "egyptian" = "egyptian",
  "electricians" = "electricians",
  "electronicappliances" = "electronicappliances",
  "electronicparts" = "electronicparts",
  "electronicsrepair" = "electronicsrepair",
  "elementaryschool" = "elementaryschool",
  "embroiderycrochet" = "embroiderycrochet",
  "emergencymedicine" = "emergencymedicine",
  "emissionstesting" = "emissionstesting",
  "empanadas" = "empanadas",
  "employmentagency" = "employmentagency",
  "endodontics" = "endodontics",
  "engraving" = "engraving",
  "escapegame" = "escapegame",
  "ethiopian" = "ethiopian",
  "ethnicgrocerystore" = "ethnicgrocerystore",
  "european.modern" = "european.modern",
  "eventplanning" = "eventplanning",
  "eventspace" = "eventspace",
  "experiences" = "experiences",
  "eyelashes" = "eyelashes",
  "eyewear.opticians" = "eyewear.opticians",
  "fabricstore" = "fabricstore",
  "fairground" = "fairground",
  "falafel" = "falafel",
  "familyfriendly" = "familyfriendly",
  "familyfuncenter" = "familyfuncenter",
  "familymedicine" = "familymedicine",
  "familyplanning" = "familyplanning",
  "familyrestaurant" = "familyrestaurant",
  "farm" = "farm",
  "farmersmarket" = "farmersmarket",
  "fashion" = "fashion",
  "fashionaccessories" = "fashionaccessories",
  "fastfood" = "fastfood",
  "fencing" = "fencing",
  "fengshui" = "fengshui",
  "ferry" = "ferry",
  "fieldofplay" = "fieldofplay",
  "filipino" = "filipino",
  "financialservices" = "financialservices",
  "fingerprinting" = "fingerprinting",
  "firearmstrainingschool" = "firearmstrainingschool",
  "fish" = "fish",
  "fishandchips" = "fishandchips",
  "fitnessbootcamp" = "fitnessbootcamp",
  "fitnessequipment" = "fitnessequipment",
  "fitnessinstruction" = "fitnessinstruction",
  "fixedbaseoperator" = "fixedbaseoperator",
  "flatbread" = "flatbread",
  "flightinstructionschool" = "flightinstructionschool",
  "floatspa" = "floatspa",
  "flooringinstallationandrepair" = "flooringinstallationandrepair",
  "floraldesign" = "floraldesign",
  "florist" = "florist",
  "florists" = "florists",
  "flowers" = "flowers",
  "fondue" = "fondue",
  "foodcourt" = "foodcourt",
  "fooddelivery" = "fooddelivery",
  "foodstand" = "foodstand",
  "foodtruck" = "foodtruck",
  "formalwear" = "formalwear",
  "formalwear.rental" = "formalwear.rental",
  "freiduria" = "freiduria",
  "french" = "french",
  "french.alsatian" = "french.alsatian",
  "french.auvergnat" = "french.auvergnat",
  "french.baguette" = "french.baguette",
  "french.berrichon" = "french.berrichon",
  "french.bourguignon" = "french.bourguignon",
  "french.brasserie" = "french.brasserie",
  "french.lyonnais" = "french.lyonnais",
  "french.nicois" = "french.nicois",
  "french.provencal" = "french.provencal",
  "friterie" = "friterie",
  "frozenfoods" = "frozenfoods",
  "fruitandvegetables" = "fruitandvegetables",
  "fuelstation" = "fuelstation",
  "funeralservices" = "funeralservices",
  "furclothing" = "furclothing",
  "furniture" = "furniture",
  "furniture.rental" = "furniture.rental",
  "furniturestore" = "furniturestore",
  "gardening" = "gardening",
  "gastroenterology" = "gastroenterology",
  "gastropubs" = "gastropubs",
  "gelato" = "gelato",
  "georgian" = "georgian",
  "german" = "german",
  "german.baden" = "german.baden",
  "german.bavarian" = "german.bavarian",
  "german.currysausage" = "german.currysausage",
  "german.easterngerman" = "german.easterngerman",
  "german.fischbroetchen" = "german.fischbroetchen",
  "german.franconian" = "german.franconian",
  "german.hessian" = "german.hessian",
  "german.heuriger" = "german.heuriger",
  "german.northerngerman" = "german.northerngerman",
  "german.palatine" = "german.palatine",
  "german.rhinelandian" = "german.rhinelandian",
  "german.swabian" = "german.swabian",
  "giblets" = "giblets",
  "giftshops" = "giftshops",
  "glutenfree" = "glutenfree",
  "gokarting" = "gokarting",
  "goldmerchants" = "goldmerchants",
  "golf" = "golf",
  "golf.instruction" = "golf.instruction",
  "golfequipment" = "golfequipment",
  "golfshop" = "golfshop",
  "gourmetfood" = "gourmetfood",
  "gourmetmarket" = "gourmetmarket",
  "graphicaldesign" = "graphicaldesign",
  "greek" = "greek",
  "grillingequipment" = "grillingequipment",
  "grocery" = "grocery",
  "grocery.asian" = "grocery.asian",
  "grocery.chinese" = "grocery.chinese",
  "grocery.indian" = "grocery.indian",
  "grocery.japanese" = "grocery.japanese",
  "grocery.korean" = "grocery.korean",
  "grocery.persian" = "grocery.persian",
  "grocerystore" = "grocerystore",
  "guitarstore" = "guitarstore",
  "gunrange" = "gunrange",
  "gunsandammo" = "gunsandammo",
  "gym" = "gym",
  "gymnastics" = "gymnastics",
  "hairblowout" = "hairblowout",
  "haircutsstyling" = "haircutsstyling",
  "haircutsstyling.mens" = "haircutsstyling.mens",
  "hairextensions" = "hairextensions",
  "hairloss" = "hairloss",
  "hairremoval" = "hairremoval",
  "hairremoval.laser" = "hairremoval.laser",
  "hairremoval.threading" = "hairremoval.threading",
  "hairremoval.waxing" = "hairremoval.waxing",
  "hairstylist" = "hairstylist",
  "haitian" = "haitian",
  "halal" = "halal",
  "hardware" = "hardware",
  "hats" = "hats",
  "hauntedhouse" = "hauntedhouse",
  "hawaiian" = "hawaiian",
  "headshop" = "headshop",
  "healthcare" = "healthcare",
  "healthcarecenter" = "healthcarecenter",
  "healthyfoods" = "healthyfoods",
  "hearingaidproviders" = "hearingaidproviders",
  "hearingaids" = "hearingaids",
  "hennaartist" = "hennaartist",
  "herbalmedicine" = "herbalmedicine",
  "herbsandspices" = "herbsandspices",
  "highschool" = "highschool",
  "himalayan" = "himalayan",
  "hobbyshop" = "hobbyshop",
  "holidaydecorations" = "holidaydecorations",
  "homeandgarden" = "homeandgarden",
  "homeappliancerepair" = "homeappliancerepair",
  "homeautomation" = "homeautomation",
  "homecleaning" = "homecleaning",
  "homedecor" = "homedecor",
  "homedevelopers" = "homedevelopers",
  "homegarden" = "homegarden",
  "homehealthcare" = "homehealthcare",
  "homeopathy" = "homeopathy",
  "hometheaterinstallation" = "hometheaterinstallation",
  "honey" = "honey",
  "hongkong.cafe" = "hongkong.cafe",
  "hookahbar" = "hookahbar",
  "horsequipment" = "horsequipment",
  "hospital" = "hospital",
  "hostel" = "hostel",
  "hotdogs" = "hotdogs",
  "hotel" = "hotel",
  "hotel.business" = "hotel.business",
  "hotel.capsule" = "hotel.capsule",
  "hotelbar" = "hotelbar",
  "hotpot" = "hotpot",
  "hottubandpool" = "hottubandpool",
  "housingcooperative" = "housingcooperative",
  "hungarian" = "hungarian",
  "huntingfishingsupplies" = "huntingfishingsupplies",
  "hvac" = "hvac",
  "hypermarket" = "hypermarket",
  "iberian" = "iberian",
  "icecream" = "icecream",
  "importedfood" = "importedfood",
  "indian" = "indian",
  "indian.andhra" = "indian.andhra",
  "indian.assamese" = "indian.assamese",
  "indian.awadhi" = "indian.awadhi",
  "indian.bihari" = "indian.bihari",
  "indian.chettinad" = "indian.chettinad",
  "indian.goan" = "indian.goan",
  "indian.gujarat" = "indian.gujarat",
  "indian.hyderabadi" = "indian.hyderabadi",
  "indian.kerala" = "indian.kerala",
  "indian.konkan" = "indian.konkan",
  "indian.lucknowi" = "indian.lucknowi",
  "indian.maharashtrian" = "indian.maharashtrian",
  "indian.malwani" = "indian.malwani",
  "indian.mangalorean" = "indian.mangalorean",
  "indian.northindian" = "indian.northindian",
  "indian.oriya" = "indian.oriya",
  "indian.rajasthani" = "indian.rajasthani",
  "indian.southindian" = "indian.southindian",
  "indonesian" = "indonesian",
  "informationtechnology" = "informationtechnology",
  "installmentloanservices" = "installmentloanservices",
  "insulationinstallation" = "insulationinstallation",
  "insurance" = "insurance",
  "insurance.auto" = "insurance.auto",
  "insurance.health" = "insurance.health",
  "insurance.home" = "insurance.home",
  "insurance.life" = "insurance.life",
  "interiordesign" = "interiordesign",
  "internalmedicine" = "internalmedicine",
  "internationalfood" = "internationalfood",
  "internetbooth" = "internetbooth",
  "internetcafe" = "internetcafe",
  "internetserviceprovider" = "internetserviceprovider",
  "investmentbanking" = "investmentbanking",
  "irish" = "irish",
  "irishpub" = "irishpub",
  "israeli" = "israeli",
  "italian" = "italian",
  "italian.abruzzese" = "italian.abruzzese",
  "italian.altoatesine" = "italian.altoatesine",
  "italian.apulian" = "italian.apulian",
  "italian.calabrian" = "italian.calabrian",
  "italian.cucinacampana" = "italian.cucinacampana",
  "italian.diner" = "italian.diner",
  "italian.emilian" = "italian.emilian",
  "italian.friulan" = "italian.friulan",
  "italian.lumbard" = "italian.lumbard",
  "italian.napoletana" = "italian.napoletana",
  "italian.norcinerie" = "italian.norcinerie",
  "italian.piedmont" = "italian.piedmont",
  "italian.roman" = "italian.roman",
  "italian.sardinian" = "italian.sardinian",
  "italian.sicilian" = "italian.sicilian",
  "italian.tuscan" = "italian.tuscan",
  "italian.venetian" = "italian.venetian",
  "ivhydration" = "ivhydration",
  "izakaya" = "izakaya",
  "japanese" = "japanese",
  "japanese.bento" = "japanese.bento",
  "japanese.blowfish" = "japanese.blowfish",
  "japanese.curry" = "japanese.curry",
  "japanese.donburi" = "japanese.donburi",
  "japanese.gyudon" = "japanese.gyudon",
  "japanese.handrolls" = "japanese.handrolls",
  "japanese.horumon" = "japanese.horumon",
  "japanese.kushikatsu" = "japanese.kushikatsu",
  "japanese.nikkei" = "japanese.nikkei",
  "japanese.oden" = "japanese.oden",
  "japanese.okonomiyaki" = "japanese.okonomiyaki",
  "japanese.onigiri" = "japanese.onigiri",
  "japanese.oyakodon" = "japanese.oyakodon",
  "japanese.ramen" = "japanese.ramen",
  "japanese.shabushabu" = "japanese.shabushabu",
  "japanese.soba" = "japanese.soba",
  "japanese.sukiyaki" = "japanese.sukiyaki",
  "japanese.takoyaki" = "japanese.takoyaki",
  "japanese.tempura" = "japanese.tempura",
  "japanese.teppanyaki" = "japanese.teppanyaki",
  "japanese.tonkatsu" = "japanese.tonkatsu",
  "japanese.udon" = "japanese.udon",
  "japanese.unagi" = "japanese.unagi",
  "japanese.westernjapanese" = "japanese.westernjapanese",
  "japanese.yakiniku" = "japanese.yakiniku",
  "japanese.yakitori" = "japanese.yakitori",
  "japanesesweets" = "japanesesweets",
  "jewelry" = "jewelry",
  "jewelryrepair" = "jewelryrepair",
  "jewish" = "jewish",
  "juicebar" = "juicebar",
  "kaiseki" = "kaiseki",
  "karaoke" = "karaoke",
  "kashmiri" = "kashmiri",
  "kebab" = "kebab",
  "kidsactivities" = "kidsactivities",
  "kimonos" = "kimonos",
  "kindergarten" = "kindergarten",
  "kiosk" = "kiosk",
  "kiosk.food" = "kiosk.food",
  "kitchenandbath" = "kitchenandbath",
  "kitchenincubator" = "kitchenincubator",
  "knifesharpening" = "knifesharpening",
  "knittingsupplies" = "knittingsupplies",
  "kopitiam" = "kopitiam",
  "korean" = "korean",
  "kosher" = "kosher",
  "kurdish" = "kurdish",
  "laboratorytesting" = "laboratorytesting",
  "landmark" = "landmark",
  "landscaping" = "landscaping",
  "languageschool" = "languageschool",
  "laotian" = "laotian",
  "lasereyesurgery" = "lasereyesurgery",
  "lasertag" = "lasertag",
  "latinamerican" = "latinamerican",
  "laundromat" = "laundromat",
  "laundryservices" = "laundryservices",
  "lawyer" = "lawyer",
  "lawyer.business" = "lawyer.business",
  "lawyer.criminaldefense" = "lawyer.criminaldefense",
  "lawyer.divorce" = "lawyer.divorce",
  "lawyer.estateplanning" = "lawyer.estateplanning",
  "lawyer.immigration" = "lawyer.immigration",
  "lawyer.litigation" = "lawyer.litigation",
  "lawyer.personalinjury" = "lawyer.personalinjury",
  "lawyer.realestate" = "lawyer.realestate",
  "lawyer.tax" = "lawyer.tax",
  "lawyer.willtrustprobate" = "lawyer.willtrustprobate",
  "lawyer.workerscomp" = "lawyer.workerscomp",
  "leathergoods" = "leathergoods",
  "lebanese" = "lebanese",
  "legalservices" = "legalservices",
  "library" = "library",
  "lifecoach" = "lifecoach",
  "lighting" = "lighting",
  "ligurian" = "ligurian",
  "limo" = "limo",
  "linens" = "linens",
  "lingerie" = "lingerie",
  "livestocksales" = "livestocksales",
  "localservices" = "localservices",
  "locksmith" = "locksmith",
  "lotterystand" = "lotterystand",
  "loungebar" = "loungebar",
  "luggage" = "luggage",
  "luggagestorage" = "luggagestorage",
  "macaron" = "macaron",
  "magicians" = "magicians",
  "mailboxcenter" = "mailboxcenter",
  "makeupartist" = "makeupartist",
  "malaysian" = "malaysian",
  "mamak" = "mamak",
  "manicurists" = "manicurists",
  "marketing" = "marketing",
  "martialarts" = "martialarts",
  "massageschool" = "massageschool",
  "massagetherapist" = "massagetherapist",
  "massagetherapy" = "massagetherapy",
  "maternitywear" = "maternitywear",
  "mattresses" = "mattresses",
  "mauritian" = "mauritian",
  "meatballs" = "meatballs",
  "medicalcenter" = "medicalcenter",
  "medicalspa" = "medicalspa",
  "medicalsupplies" = "medicalsupplies",
  "mediterranean" = "mediterranean",
  "mexican" = "mexican",
  "mexican.easternmexican" = "mexican.easternmexican",
  "mexican.jaliscan" = "mexican.jaliscan",
  "mexican.modern" = "mexican.modern",
  "mexican.northernmexican" = "mexican.northernmexican",
  "mexican.oaxacan" = "mexican.oaxacan",
  "mexican.pueblan" = "mexican.pueblan",
  "mexican.yucatan" = "mexican.yucatan",
  "middleeastern" = "middleeastern",
  "militarybase" = "militarybase",
  "milkbar" = "milkbar",
  "milkshakes" = "milkshakes",
  "minigolf" = "minigolf",
  "mobilephonerepair" = "mobilephonerepair",
  "mobilephones" = "mobilephones",
  "moneytransferservices" = "moneytransferservices",
  "mongolian" = "mongolian",
  "moroccan" = "moroccan",
  "mortgagebroker" = "mortgagebroker",
  "motorcyclingclothing" = "motorcyclingclothing",
  "movierental.kiosk" = "movierental.kiosk",
  "mughlai" = "mughlai",
  "museum.art" = "museum.art",
  "museum.children" = "museum.children",
  "museum.history" = "museum.history",
  "musicalinstruments" = "musicalinstruments",
  "musicalinstrumentservices" = "musicalinstrumentservices",
  "musicvenue" = "musicvenue",
  "musicvideo" = "musicvideo",
  "naga" = "naga",
  "nasilemak" = "nasilemak",
  "naturopathy" = "naturopathy",
  "nepalese" = "nepalese",
  "newspapersandmagazines" = "newspapersandmagazines",
  "newzealand" = "newzealand",
  "nicaraguan" = "nicaraguan",
  "nightfood" = "nightfood",
  "nonprofit" = "nonprofit",
  "noodles" = "noodles",
  "northamerican.traditional" = "northamerican.traditional",
  "norwegian" = "norwegian",
  "notarypublic" = "notarypublic",
  "nurseries.gardening" = "nurseries.gardening",
  "nyonya" = "nyonya",
  "obgyn" = "obgyn",
  "observatory" = "observatory",
  "occupationaltherapy" = "occupationaltherapy",
  "officebuilding" = "officebuilding",
  "officeequipmentandsupplies" = "officeequipmentandsupplies",
  "okinawan" = "okinawan",
  "oliveoil" = "oliveoil",
  "opensandwiches" = "opensandwiches",
  "opera.ballet" = "opera.ballet",
  "opthamalogy" = "opthamalogy",
  "opticians" = "opticians",
  "optometry" = "optometry",
  "oralsurgery" = "oralsurgery",
  "organicfood" = "organicfood",
  "oriental" = "oriental",
  "orthodontics" = "orthodontics",
  "orthopedics" = "orthopedics",
  "orthotics" = "orthotics",
  "osteopathy" = "osteopathy",
  "ottoman" = "ottoman",
  "outdoorfurniture" = "outdoorfurniture",
  "outdoorgear" = "outdoorgear",
  "outletmall" = "outletmall",
  "outletstore" = "outletstore",
  "oxygenbar" = "oxygenbar",
  "pachinko" = "pachinko",
  "packagelocker" = "packagelocker",
  "packing" = "packing",
  "packingsupplies" = "packingsupplies",
  "paella" = "paella",
  "painmanagement" = "painmanagement",
  "paintandsip" = "paintandsip",
  "painting" = "painting",
  "paintstores" = "paintstores",
  "paintyourownpottery" = "paintyourownpottery",
  "pakistani" = "pakistani",
  "parentingschool" = "parentingschool",
  "parking" = "parking",
  "parks" = "parks",
  "parma" = "parma",
  "parsi" = "parsi",
  "partycharacters" = "partycharacters",
  "partyequipment.rental" = "partyequipment.rental",
  "partysupplies" = "partysupplies",
  "passportvisaservices" = "passportvisaservices",
  "pasta" = "pasta",
  "pathology" = "pathology",
  "pawn" = "pawn",
  "paydayloan" = "paydayloan",
  "pediatrics" = "pediatrics",
  "performingarts" = "performingarts",
  "perfume" = "perfume",
  "periodontics" = "periodontics",
  "permanentmakeup" = "permanentmakeup",
  "persian" = "persian",
  "personalcare" = "personalcare",
  "personalshopper" = "personalshopper",
  "personaltrainer" = "personaltrainer",
  "peruvian" = "peruvian",
  "pets" = "pets",
  "pets.adoption" = "pets.adoption",
  "pets.boarding" = "pets.boarding",
  "pets.grooming" = "pets.grooming",
  "pets.photography" = "pets.photography",
  "pets.sitting" = "pets.sitting",
  "pets.training" = "pets.training",
  "pets.transportation" = "pets.transportation",
  "petstore" = "petstore",
  "petstore.fish" = "petstore.fish",
  "petstore.reptile" = "petstore.reptile",
  "pharmacy" = "pharmacy",
  "pharmacystore" = "pharmacystore",
  "phonechargingstation" = "phonechargingstation",
  "photobooth.rental" = "photobooth.rental",
  "photography" = "photography",
  "photography.event" = "photography.event",
  "photography.session" = "photography.session",
  "photographyequipment" = "photographyequipment",
  "photographystore" = "photographystore",
  "physicaltherapy" = "physicaltherapy",
  "physician" = "physician",
  "piadina" = "piadina",
  "pianobar" = "pianobar",
  "pianostore" = "pianostore",
  "pictureframing" = "pictureframing",
  "pilates" = "pilates",
  "pita" = "pita",
  "pizza" = "pizza",
  "placeofworship" = "placeofworship",
  "placeofworship.church" = "placeofworship.church",
  "placeofworship.mosque" = "placeofworship.mosque",
  "placeofworship.synagogue" = "placeofworship.synagogue",
  "placeofworship.unitarian" = "placeofworship.unitarian",
  "planetarium" = "planetarium",
  "plasticsurgery" = "plasticsurgery",
  "playcenter" = "playcenter",
  "playground" = "playground",
  "playsets" = "playsets",
  "plaza" = "plaza",
  "podiatrists" = "podiatrists",
  "podiatry" = "podiatry",
  "poke" = "poke",
  "poledancingschool" = "poledancingschool",
  "policestation" = "policestation",
  "policestation.koban" = "policestation.koban",
  "polish" = "polish",
  "polish.pierogis" = "polish.pierogis",
  "poolcleaning" = "poolcleaning",
  "poolhall" = "poolhall",
  "pooltablesupplies" = "pooltablesupplies",
  "popcorn" = "popcorn",
  "popup" = "popup",
  "popupshops" = "popupshops",
  "portuguese" = "portuguese",
  "portuguese.alentejo" = "portuguese.alentejo",
  "portuguese.algarve" = "portuguese.algarve",
  "portuguese.azores" = "portuguese.azores",
  "portuguese.beira" = "portuguese.beira",
  "portuguese.fadohouse" = "portuguese.fadohouse",
  "portuguese.madeira" = "portuguese.madeira",
  "portuguese.minho" = "portuguese.minho",
  "portuguese.ribatejo" = "portuguese.ribatejo",
  "portuguese.trasosmontes" = "portuguese.trasosmontes",
  "postoffice" = "postoffice",
  "postoffice.authorizedagent" = "postoffice.authorizedagent",
  "potatoes" = "potatoes",
  "poutineries" = "poutineries",
  "prenatal" = "prenatal",
  "preschool" = "preschool",
  "pretzels" = "pretzels",
  "preventivemedicine" = "preventivemedicine",
  "printmedia" = "printmedia",
  "privateinvestigation" = "privateinvestigation",
  "privatejetcharter" = "privatejetcharter",
  "privateschool" = "privateschool",
  "privateshuttlebus" = "privateshuttlebus",
  "professionalservices" = "professionalservices",
  "professionalsportsteam" = "professionalsportsteam",
  "propertymanagement" = "propertymanagement",
  "psychiatrists" = "psychiatrists",
  "psychiatry" = "psychiatry",
  "psychic" = "psychic",
  "psychology" = "psychology",
  "pub" = "pub",
  "publicart" = "publicart",
  "publiclibrary" = "publiclibrary",
  "publicservices.government" = "publicservices.government",
  "publictransport" = "publictransport",
  "puertorican" = "puertorican",
  "pulmonology" = "pulmonology",
  "punjabi" = "punjabi",
  "racetrack" = "racetrack",
  "radiology" = "radiology",
  "radiostation" = "radiostation",
  "rawfood" = "rawfood",
  "realestate.agents" = "realestate.agents",
  "realestate.services" = "realestate.services",
  "realestateagents" = "realestateagents",
  "realestateagents.commercial" = "realestateagents.commercial",
  "realestateservices" = "realestateservices",
  "recordingstudio" = "recordingstudio",
  "recreation" = "recreation",
  "recreationcenter" = "recreationcenter",
  "recyclingcenter" = "recyclingcenter",
  "reflexology" = "reflexology",
  "religiousitems" = "religiousitems",
  "rental.videoandgame" = "rental.videoandgame",
  "researchanddevelopment" = "researchanddevelopment",
  "residentialapartments" = "residentialapartments",
  "restaurant" = "restaurant",
  "retirementhome" = "retirementhome",
  "reunionnese" = "reunionnese",
  "reupholstery" = "reupholstery",
  "riceshop" = "riceshop",
  "rideshare" = "rideshare",
  "robatayaki" = "robatayaki",
  "rockclimbing" = "rockclimbing",
  "rodizio" = "rodizio",
  "romanian" = "romanian",
  "roofing" = "roofing",
  "rotisseriechicken" = "rotisseriechicken",
  "rugs" = "rugs",
  "russian" = "russian",
  "sakebar" = "sakebar",
  "salad" = "salad",
  "salvadoran" = "salvadoran",
  "sandwiches" = "sandwiches",
  "sauna" = "sauna",
  "scandinavian" = "scandinavian",
  "scandinaviandesign" = "scandinaviandesign",
  "school" = "school",
  "scottish" = "scottish",
  "screenprinting" = "screenprinting",
  "screenprinting.tshirt" = "screenprinting.tshirt",
  "seafood" = "seafood",
  "seafoodmarket" = "seafoodmarket",
  "securitysystems" = "securitysystems",
  "selfstorage" = "selfstorage",
  "senegalese" = "senegalese",
  "seniorcenter" = "seniorcenter",
  "serbianandcroatian" = "serbianandcroatian",
  "sewingalterations" = "sewingalterations",
  "sharedofficespace" = "sharedofficespace",
  "shavedice" = "shavedice",
  "shavedsnow" = "shavedsnow",
  "shippingcenters" = "shippingcenters",
  "shippingdropbox" = "shippingdropbox",
  "shoerepair" = "shoerepair",
  "shoes" = "shoes",
  "shoeshine" = "shoeshine",
  "shoestore" = "shoestore",
  "shopping" = "shopping",
  "shoppingpassage" = "shoppingpassage",
  "shutterinstallation" = "shutterinstallation",
  "signature" = "signature",
  "signmaking" = "signmaking",
  "silentdisco" = "silentdisco",
  "singaporean" = "singaporean",
  "skatepark" = "skatepark",
  "skatingequipment" = "skatingequipment",
  "skatingrink" = "skatingrink",
  "skiequipment" = "skiequipment",
  "skincare" = "skincare",
  "skydiving" = "skydiving",
  "sleepwear" = "sleepwear",
  "slovakian" = "slovakian",
  "soccer" = "soccer",
  "socialclub" = "socialclub",
  "socialservices" = "socialservices",
  "softwaredevelopment" = "softwaredevelopment",
  "solarinstallation" = "solarinstallation",
  "sommeliers" = "sommeliers",
  "soulfood" = "soulfood",
  "soup" = "soup",
  "southafrican" = "southafrican",
  "southernunitedstates" = "southernunitedstates",
  "southwestunitedstates" = "southwestunitedstates",
  "souvenirs" = "souvenirs",
  "spanish" = "spanish",
  "spanish.andalusian" = "spanish.andalusian",
  "spanish.basque" = "spanish.basque",
  "spanish.catalan" = "spanish.catalan",
  "spanish.galician" = "spanish.galician",
  "specialtyfood" = "specialtyfood",
  "specialtyschool" = "specialtyschool",
  "spinclass" = "spinclass",
  "spiritualproducts" = "spiritualproducts",
  "sportinggoods" = "sportinggoods",
  "sportsbar" = "sportsbar",
  "sportsclub" = "sportsclub",
  "sportsequipment.rental" = "sportsequipment.rental",
  "sportsgoods" = "sportsgoods",
  "sportsmedicine" = "sportsmedicine",
  "sportsschool" = "sportsschool",
  "sportswear" = "sportswear",
  "srilankan" = "srilankan",
  "stationery" = "stationery",
  "steak" = "steak",
  "stockings" = "stockings",
  "streetvendor" = "streetvendor",
  "structuralengineers" = "structuralengineers",
  "subwaystation" = "subwaystation",
  "supermarket" = "supermarket",
  "supperclub" = "supperclub",
  "surfacerefinishing" = "surfacerefinishing",
  "surfing" = "surfing",
  "surfingequipment" = "surfingequipment",
  "surgeon" = "surgeon",
  "sushi" = "sushi",
  "swedish" = "swedish",
  "swedish.traditional" = "swedish.traditional",
  "swimminginstruction" = "swimminginstruction",
  "swimmingpool" = "swimmingpool",
  "swimwear" = "swimwear",
  "swiss" = "swiss",
  "syrian" = "syrian",
  "taberna" = "taberna",
  "tabletopgames" = "tabletopgames",
  "tableware" = "tableware",
  "tacos" = "tacos",
  "taiwanese" = "taiwanese",
  "taiyaki" = "taiyaki",
  "talentagencies" = "talentagencies",
  "tamales" = "tamales",
  "tanningbeds" = "tanningbeds",
  "tanningservices" = "tanningservices",
  "tapas" = "tapas",
  "tapas.smallplate" = "tapas.smallplate",
  "tattoo" = "tattoo",
  "tattoo.removal" = "tattoo.removal",
  "taxi" = "taxi",
  "taxistand" = "taxistand",
  "taxoffice" = "taxoffice",
  "taxservices" = "taxservices",
  "tea" = "tea",
  "teachersupplies" = "teachersupplies",
  "teambuilding" = "teambuilding",
  "teethwhitening" = "teethwhitening",
  "telecommunications" = "telecommunications",
  "televisionserviceproviders" = "televisionserviceproviders",
  "televisionstation" = "televisionstation",
  "tennis.instruction" = "tennis.instruction",
  "terminal" = "terminal",
  "terminal.bus" = "terminal.bus",
  "testpreparationschool" = "testpreparationschool",
  "texmex" = "texmex",
  "thai" = "thai",
  "theater.drivein" = "theater.drivein",
  "theater.movie" = "theater.movie",
  "themedcafe" = "themedcafe",
  "thriftstore" = "thriftstore",
  "tibetan" = "tibetan",
  "tickets" = "tickets",
  "tikibar" = "tikibar",
  "titleloan" = "titleloan",
  "tobaccoshop" = "tobaccoshop",
  "tofu" = "tofu",
  "touristattraction" = "touristattraction",
  "tours" = "tours",
  "tours.boat" = "tours.boat",
  "tours.bus" = "tours.bus",
  "tours.scooter" = "tours.scooter",
  "tours.walking" = "tours.walking",
  "towncarservice" = "towncarservice",
  "toys" = "toys",
  "toystore" = "toystore",
  "traditionalchinesemedicine" = "traditionalchinesemedicine",
  "trainserviceprovider" = "trainserviceprovider",
  "trainstation" = "trainstation",
  "trampolining" = "trampolining",
  "transitlounge" = "transitlounge",
  "translationservices" = "translationservices",
  "transportationservices" = "transportationservices",
  "trattoria" = "trattoria",
  "travelagent" = "travelagent",
  "travelservices" = "travelservices",
  "trinidadian" = "trinidadian",
  "trophyshops" = "trophyshops",
  "truckrental" = "truckrental",
  "tuina" = "tuina",
  "turkish" = "turkish",
  "turkish.cheekufta" = "turkish.cheekufta",
  "turkish.gozleme" = "turkish.gozleme",
  "turkish.homemadefood" = "turkish.homemadefood",
  "turkish.lahmacun" = "turkish.lahmacun",
  "turkish.ravioli" = "turkish.ravioli",
  "tutoring" = "tutoring",
  "ukrainian" = "ukrainian",
  "uniforms" = "uniforms",
  "urgentcare" = "urgentcare",
  "usedbooks" = "usedbooks",
  "utilities" = "utilities",
  "uzbek" = "uzbek",
  "vacationhome" = "vacationhome",
  "vacationhome.agent" = "vacationhome.agent",
  "valetservices" = "valetservices",
  "vapeshops" = "vapeshops",
  "vascularmedicine" = "vascularmedicine",
  "vegan" = "vegan",
  "vegetarian" = "vegetarian",
  "vendingmachine" = "vendingmachine",
  "vendingmachine.beverage" = "vendingmachine.beverage",
  "venezuelan" = "venezuelan",
  "venison" = "venison",
  "veteransorganization" = "veteransorganization",
  "veterinarian" = "veterinarian",
  "videofilmproduction" = "videofilmproduction",
  "videogamesandconsoles" = "videogamesandconsoles",
  "vietnamese" = "vietnamese",
  "vintageclothing" = "vintageclothing",
  "vinylrecords" = "vinylrecords",
  "virtualreality" = "virtualreality",
  "visitorcenter" = "visitorcenter",
  "vitaminssupplements" = "vitaminssupplements",
  "vocalcoach" = "vocalcoach",
  "vocationalschool" = "vocationalschool",
  "waffles" = "waffles",
  "walkinclinic" = "walkinclinic",
  "warehouse" = "warehouse",
  "watches" = "watches",
  "watchrepair" = "watchrepair",
  "waterpark" = "waterpark",
  "waterpurification" = "waterpurification",
  "webdesign" = "webdesign",
  "weddingchappel" = "weddingchappel",
  "weddingplanning" = "weddingplanning",
  "weightloss" = "weightloss",
  "welsh" = "welsh",
  "whiskeybar" = "whiskeybar",
  "wholesalemerchant" = "wholesalemerchant",
  "wholesaler" = "wholesaler",
  "wigs" = "wigs",
  "windowinstallation" = "windowinstallation",
  "winebar" = "winebar",
  "winery" = "winery",
  "winetasting" = "winetasting",
  "wok" = "wok",
  "wraps" = "wraps",
  "yoga" = "yoga",
  "youthclub" = "youthclub",
  "yugoslav" = "yugoslav",
}

/**
 * Opening categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#opening
 */
export enum OPENING_CATEGORY {
  "automobile" = "automobile",
  "bicycle" = "bicycle",
  "emergencyexit" = "emergencyexit",
  "pedestrian" = "pedestrian",
  "pedestrian.principal" = "pedestrian.principal",
  "pedestrian.transit" = "pedestrian.transit",
  "service" = "service",
}

/**
 * Relationship categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#relationship
 */
export enum RELATIONSHIP_CATEGORY {
  "elevator" = "elevator",
  "escalator" = "escalator",
  "movingwalkway" = "movingwalkway",
  "ramp" = "ramp",
  "stairs" = "stairs",
  "traversal" = "traversal",
  "traversal.path" = "traversal.path",
}

/**
 * Restricition categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#restriction
 */
export enum RESTRICTION_CATEGORY {
  employeesonly = "employeesonly",
  restricted = "restricted",
}

export enum SECTION_CATEGORY {
  arcade = "arcade",
  baggageclaim = "baggageclaim",
  "baggageclaim.intl" = "baggageclaim.intl",
  carrental = "carrental",
  "carrental.dropoff" = "carrental.dropoff",
  checkin = "checkin",
  concessions = "concessions",
  cubicle = "cubicle",
  dutyfree = "dutyfree",
  eatingdrinking = "eatingdrinking",
  entertainmentarea = "entertainmentarea",
  "entertainmentarea.game" = "entertainmentarea.game",
  "entertainmentarea.music" = "entertainmentarea.music",
  "entertainmentarea.performance" = "entertainmentarea.performance",
  "entertainmentarea.sport" = "entertainmentarea.sport",
  exhibit = "exhibit",
  exhibition = "exhibition",
  gambling = "gambling",
  "gambling.baccarat" = "gambling.baccarat",
  "gambling.bingo" = "gambling.bingo",
  "gambling.blackjack" = "gambling.blackjack",
  "gambling.craps" = "gambling.craps",
  "gambling.keno" = "gambling.keno",
  "gambling.mahjong" = "gambling.mahjong",
  "gambling.medalgame" = "gambling.medalgame",
  "gambling.minibaccarat" = "gambling.minibaccarat",
  "gambling.offtrackbetting" = "gambling.offtrackbetting",
  "gambling.pachinko" = "gambling.pachinko",
  "gambling.paigow" = "gambling.paigow",
  "gambling.poker" = "gambling.poker",
  "gambling.poker.letitride" = "gambling.poker.letitride",
  "gambling.poker.paigow" = "gambling.poker.paigow",
  "gambling.poker.threecard" = "gambling.poker.threecard",
  "gambling.poker.video" = "gambling.poker.video",
  "gambling.roulette" = "gambling.roulette",
  "gambling.rummy" = "gambling.rummy",
  "gambling.sicbo" = "gambling.sicbo",
  "gambling.slotmachine" = "gambling.slotmachine",
  "gambling.slotmachine.highlimit" = "gambling.slotmachine.highlimit",
  gatearea = "gatearea",
  "gatearea.holding" = "gatearea.holding",
  immigration = "immigration",
  "immigration.schengen" = "immigration.schengen",
  information = "information",
  paidarea = "paidarea",
  parkandride = "parkandride",
  parking = "parking",
  "parking.bicycle" = "parking.bicycle",
  "parking.compact" = "parking.compact",
  "parking.ev" = "parking.ev",
  "parking.longterm" = "parking.longterm",
  "parking.motorcycle" = "parking.motorcycle",
  "parking.shortterm" = "parking.shortterm",
  "parking.waitingarea" = "parking.waitingarea",
  platform = "platform",
  postsecurity = "postsecurity",
  presecurity = "presecurity",
  private = "private",
  recomposearea = "recomposearea",
  recreation = "recreation",
  rental = "rental",
  retail = "retail",
  retaildepartment = "retaildepartment",
  road = "road",
  seating = "seating",
  seatingrow = "seatingrow",
  security = "security",
  servicearea = "servicearea",
  ticketing = "ticketing",
  vegetation = "vegetation",
  walkway = "walkway",
}

/**
 * Unit categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#unit
 */
export enum UNIT_CATEGORY {
  auditorium = "auditorium",
  brick = "brick",
  classroom = "classroom",
  column = "column",
  concrete = "concrete",
  conferenceroom = "conferenceroom",
  drywall = "drywall",
  elevator = "elevator",
  escalator = "escalator",
  fieldofplay = "fieldofplay",
  firstaid = "firstaid",
  fitnessroom = "fitnessroom",
  foodservice = "foodservice",
  footbridge = "footbridge",
  glass = "glass",
  huddleroom = "huddleroom",
  kitchen = "kitchen",
  laboratory = "laboratory",
  library = "library",
  lobby = "lobby",
  lounge = "lounge",
  mailroom = "mailroom",
  mothersroom = "mothersroom",
  movietheater = "movietheater",
  movingwalkway = "movingwalkway",
  nonpublic = "nonpublic",
  office = "office",
  opentobelow = "opentobelow",
  parking = "parking",
  phoneroom = "phoneroom",
  platform = "platform",
  privatelounge = "privatelounge",
  ramp = "ramp",
  recreation = "recreation",
  restroom = "restroom",
  "restroom.family" = "restroom.family",
  "restroom.female" = "restroom.female",
  "restroom.female.wheelchair" = "restroom.female.wheelchair",
  "restroom.male" = "restroom.male",
  "restroom.male.wheelchair" = "restroom.male.wheelchair",
  "restroom.transgender" = "restroom.transgender",
  "restroom.transgender.wheelchair" = "restroom.transgender.wheelchair",
  "restroom.unisex" = "restroom.unisex",
  "restroom.unisex.wheelchair" = "restroom.unisex.wheelchair",
  "restroom.wheelchair" = "restroom.wheelchair",
  road = "road",
  room = "room",
  serverroom = "serverroom",
  shower = "shower",
  smokingarea = "smokingarea",
  stairs = "stairs",
  steps = "steps",
  storage = "storage",
  structure = "structure",
  terrace = "terrace",
  theater = "theater",
  unenclosedarea = "unenclosedarea",
  unspecified = "unspecified",
  vegetation = "vegetation",
  waitingroom = "waitingroom",
  walkway = "walkway",
  "walkway.island" = "walkway.island",
  wood = "wood",
}

/**
 * Venue categories
 * https://docs.ogc.org/cs/20-094/Categories/index.html#venue
 */
export enum VENUE_CATEGORY {
  airport = "airport",
  "airport.intl" = "airport.intl",
  aquarium = "aquarium",
  businesscampus = "businesscampus",
  casino = "casino",
  communitycenter = "communitycenter",
  conventioncenter = "conventioncenter",
  governmentfacility = "governmentfacility",
  healthcarefacility = "healthcarefacility",
  hotel = "hotel",
  museum = "museum",
  parkingfacility = "parkingfacility",
  resort = "resort",
  retailstore = "retailstore",
  shoppingcenter = "shoppingcenter",
  stadium = "stadium",
  stripmall = "stripmall",
  theater = "theater",
  themepark = "themepark",
  trainstation = "trainstation",
  transitstation = "transitstation",
  university = "university",
}

/**
 * Custom types on DZG
 */

export interface ImdfManifest {
  version: string;
  created: string;
  generated_by: string;
  language: string;
  extensions: string[];
}

export interface ImdfFeatureCollection<T> {
  name?: string;
  type: "FeatureCollection";
  features: T[];
}

export interface ImdfArchive {
  manifest: ImdfManifest;

  address: ImdfFeatureCollection<Address>;
  venue: ImdfFeatureCollection<Venue>;
  amenity?: ImdfFeatureCollection<Amenity>;
  anchor?: ImdfFeatureCollection<Anchor>;
  building?: ImdfFeatureCollection<Building>;
  detail?: ImdfFeatureCollection<Detail>;
  fixture?: ImdfFeatureCollection<Fixture>;
  footprint?: ImdfFeatureCollection<Footprint>;
  kiosk?: ImdfFeatureCollection<Kiosk>;
  level?: ImdfFeatureCollection<Level>;
  occupant?: ImdfFeatureCollection<Occupant>;
  opening?: ImdfFeatureCollection<Opening>;
  relationship?: ImdfFeatureCollection<Relationship>;
  section?: ImdfFeatureCollection<Section>;
  geofence?: ImdfFeatureCollection<Geofence>;
  unit?: ImdfFeatureCollection<Unit>;
}

// import "imdf-typescript"; // or whatever the package is called

// declare module "imdf-typescript" {
//   interface Feature<P = any> {
//     type: "Feature"; // explicitly fix missing field
//   }
// }
