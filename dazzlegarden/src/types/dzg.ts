import {
  Address,
  Amenity,
  AmenityId,
  Anchor,
  Building,
  BuildingId,
  Fixture,
  FixtureId,
  Footprint,
  ImdfManifest,
  Kiosk,
  KioskId,
  Level,
  LevelId,
  Occupant,
  OccupantId,
  Opening,
  Unit,
  UnitId,
  Venue,
  VenueId,
} from "@/types/imdf";

export interface DzgVenue {
  id: VenueId;
  name: string;
  imdfVenue: Venue;
  imdfAddress: Address;
}

export interface DzgAmenity {
  type: "amenity";
  id: AmenityId;
  imdfAmenity: Amenity;
}

export interface DzgOccupant {
  type: "occupant";
  id: OccupantId;
  imdfOccupant: Occupant;
  imdfAnchor: Anchor;
}

export type DzgPOI = DzgAmenity | DzgOccupant;

export interface DzgFixture {
  type: "fixture";
  id: FixtureId;
  imdfFixture: Fixture;
}

export interface DzgKiosk {
  type: "kiosk";
  id: KioskId;
  imdfKiosk: Kiosk;
}

export type DzgAsset = DzgFixture | DzgKiosk;

/** rooms, walkways etc */
export interface DzgUnit {
  id: UnitId;
  imdfUnit: Unit;
}

export interface DzgOpening {
  id: string;
  imdfOpening: Opening;
}

export interface DzgLevel {
  id: LevelId;
  imdfLevel: Level;
  openings: DzgOpening[];
  units: DzgUnit[];

  assets: DzgAsset[];
  pois: DzgPOI[];
}

export interface DzgBuilding {
  id: BuildingId;
  imdfBuilding: Building;
}

export interface DzgFootprint {
  id: string;
  imdfFootprint: Footprint;
}

export interface Dzg {
  id: string;
  manifest: ImdfManifest;
  venue: DzgVenue;
  buildings: DzgBuilding[];
  footprints: DzgFootprint[];
  levels: DzgLevel[];
}

export type Colors =
  | "gray"
  | "gold"
  | "bronze"
  | "brown"
  | "yellow"
  | "amber"
  | "orange"
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "lime"
  | "mint"
  | "sky";

export enum DzgLeafletPanes {
  level = "dzg-level",
  units = "dzg-units",
  openings = "dzg-openings",
  openingsInteractive = "dzg-openings-interactive",
  markers = "dzg-markers",
  unitsHighlighted = "dzg-units-highlighted",
  unitNumbers = "dzg-unit-numbers",
}
