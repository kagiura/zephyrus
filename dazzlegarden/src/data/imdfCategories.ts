import {
  ACCESS_CONTROL_CATEGORY,
  ACCESSIBILITY_CATEGORY,
  AMENITY_CATEGORY,
  BUILDING_CATEGORY,
  DOOR_MATERIAL_CATEGORY,
  DOOR_TYPE,
  FIXTURE_CATEGORY,
  FOOTPRINT_CATEGORY,
  GEOFENCE_CATEGORY,
  LEVEL_CATEGORY,
  OCCUPANT_CATEGORY,
  OPENING_CATEGORY,
  RELATIONSHIP_CATEGORY,
  RESTRICTION_CATEGORY,
  SECTION_CATEGORY,
  UNIT_CATEGORY,
  VENUE_CATEGORY,
} from "@/types/imdf";

const imdfCategoriesRaw = [
  {
    collection: "access-control",
    venueType: "",
    feature: "access-control",
    category: "badgereader",
    definition: "",
  },
  {
    collection: "access-control",
    venueType: "",
    feature: "access-control",
    category: "fingerprintreader",
    definition: "",
  },
  {
    collection: "access-control",
    venueType: "",
    feature: "access-control",
    category: "guard",
    definition: "",
  },
  {
    collection: "access-control",
    venueType: "",
    feature: "access-control",
    category: "keyaccess",
    definition: "",
  },
  {
    collection: "access-control",
    venueType: "",
    feature: "access-control",
    category: "outofservice",
    definition:
      "Describes the operational status of an Opening or a Unit described in a Relationship.",
  },
  {
    collection: "access-control",
    venueType: "",
    feature: "access-control",
    category: "passwordaccess",
    definition: "",
  },
  {
    collection: "access-control",
    venueType: "",
    feature: "access-control",
    category: "retinascanner",
    definition: "",
  },
  {
    collection: "access-control",
    venueType: "",
    feature: "access-control",
    category: "voicerecognition",
    definition: "",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "assisted.listening",
    definition: "Describes the presence of an assisted listening service.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "assisted.listening",
    definition:
      "Describes the presence of an assisted listening service. Should be used when the type of assisted listening service is unknown.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "braille",
    definition:
      "Indicates the presence of a device, service, equipment or physical environment that is designed for a pedestrian that is visually impaired.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "hearing",
    definition:
      "Describes the presence of a service provided to a pedestrian with a hearing disability.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "hearing",
    definition:
      "Describes the presence of a service provided to a pedestrian with a hearing disability.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "hearingloop",
    definition:
      "Describes the presence of a telephone that offers a Hearing Loop.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "signlanginterpreter",
    definition:
      "Describes the presence of a sign language interpreter service.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "tactilepaving",
    definition:
      "Describes the presence of a ground surface that is provided to a pedestrian with a sight disability.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "tdd",
    definition:
      "Describes the presence of a telephone device for the deaf which is a device used for text communications along a telephone line.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "trs",
    definition:
      "Describes the presence of a Telecommunications Relay Service which is a telephone service that allows persons with hearing or speech disabilities to place and receive telephone calls.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "volume",
    definition:
      "Describes the presence of a specialized telephone for persons with impaired hearing.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "wheelchair",
    definition:
      "Describes the presence of a building function that is offered to persons that experience disabilities.",
  },
  {
    collection: "accessibility",
    venueType: "",
    feature: "accessibility",
    category: "wheelchair",
    definition:
      "Indicates the presence of a device, service, equipment or physical environment that is provided to a pedestrian with a mobility disability.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "amphitheater",
    definition:
      "Models the presence and approximate point location of an amphitheater.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "animalreliefarea",
    definition:
      "A convenience area for service animal relief, often be equipped with water bowls and animal toiletries",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "animalreliefarea",
    definition:
      "Models the presence and approximate point location of a Service Animal Relief Area (SARA) or domestic pet relief area.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "arrivalgate",
    definition:
      "Models the presence and approximate point location of an arrivals gate operation. In certain airports around the world, arrival gates are separately sign-posted from boarding gates.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "atm",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "babychanging",
    definition:
      "Location for the specific purpose of changing a baby, does not contain bathroom facilities.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "baggagecarousel",
    definition:
      "Models the presence and approximate point location of an individual Baggage Carousel.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "baggagecarousel.intl",
    definition:
      "Models the presence and approximate point location of an individual Baggage Carousel that is either dedicated or timed to support international arrival operations.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "baggagecarts",
    definition:
      "Models the presence and approximate point location of a baggage/luggage trolley system.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "baggageclaim",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a baggage claim operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "baggageclaim.oversize",
    definition:
      "Models the presence and approximate point location of a baggage claim area, desk, or service where special or oversized baggage may be re-claimed. Examples of oversized items include: Golf clubs, skis, lacrosse/hockey sticks and other sporting equipment. Also, pets traveling in crates.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "baggagerecheck",
    definition:
      "Models the presence and approximate point location of a baggage recheck service.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "baggagestorage",
    definition:
      "Models the presence and approximate point location of a baggage service or facility where baggage may be temporarily stored.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "boardinggate",
    definition:
      "Models the presence and approximate point location of a boarding gate operation. `boardinggate` should be used when a location cannot be classified using any other category in the hierarchy. `boardinggate` is not further defined in IMDF.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "boardinggate.aircraft",
    definition:
      "Models the presence and approximate point location of an aircraft boarding gate operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "boardinggate.bus",
    definition:
      "Models the presence and approximate point location of a bus boarding gate operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "boardinggate.ferry",
    definition:
      "Models the presence and approximate point location of a ferry boarding gate operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "boardinggate.train",
    definition:
      "Models the presence and approximate point location of a traint boarding gate operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "bus",
    definition:
      "Models the presence and approximate point location of one or more bus stop.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "bus.muni",
    definition:
      "Models the presence and approximate point location of one or more bus stop that is serviced by a local transit authority.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "bus.national",
    definition:
      "Models the presence and approximate point location of one or more bus stop that is serviced by a national transit authority.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "businesscenter",
    definition:
      "Models the presence and approximate point location of a space that provides office facilities and services to the public.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "cabin",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "caregiver",
    definition:
      "Models the presence and approximate point location of a service that provides caregiving services, especially to persons that experience disabilities.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "carrental",
    definition:
      "A business that rents and leases motor vehicles. Businesses that rent trucks for moving and related purposes should be categorized under truck rentalservices.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "carrental",
    definition:
      "Models the presence and approximate point location or thematic extent of an open or semi-enclosed environment of a space containing one or more car rental operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "cashier",
    definition:
      "Models the presence and approximate point location of a cashier operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "changemachine",
    definition:
      "Models the presence and approximate point location of a service that accepts large denominations of currency and returns an equal amount in smaller denominations.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "checkin",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a collection of check-in operations.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "checkin.desk",
    definition:
      "Models the presence and approximate point location or physical extent of furniture that supports one or more check-in desk operations.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "checkin.desk.oversizebaggage",
    definition:
      "Models the presence and approximate point location of a check-in area, desk, or service where special or oversized baggage may be checked in.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "checkin.desk.transfer",
    definition:
      "Models the presence and approximate point location of a manned transfer desk operation whose purpose is to facilitate a traveler's transfer to another outbound connection.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "checkin.selfservice",
    definition:
      "Models the presence and approximate point location of furniture/equipment that supports full or semi-automated check-in operations.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "childplayarea",
    definition:
      "Models the presence and approximate point location of a child's play area.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "coinlocker",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "copymachine",
    definition:
      "Models the presence and approximate point location of a copy machine service.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "defibrillator",
    definition:
      "Models the presence and approximate point location of an Automated External Defibrillator (AED).",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "drinkingfountain",
    definition:
      "Models the presence and approximate point location of drinking water.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "eatingdrinking",
    definition:
      'Models the presence and approximate thematic extent of an open or semi-enclosed environment that is used as a "common" area for dining.',
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "elevator",
    definition:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "emergencyshelter",
    definition:
      "Models the presence and approximate point location of a room designed to provide shelter. e.g., protection from severe weather conditions.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "entry",
    definition:
      "Models the presence and approximate point location of an entrance to a physical building.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "escalator",
    definition:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "exhibit",
    definition:
      'Models the presence and approximate point location of "...an object, work of art, activity, artifact or poster designed to demonstrate a concept or show an example.", or the approximate thematic extent of an open or semi-enclosed environment containing an exhibit.',
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "faregate",
    definition:
      "Models the presence and approximate point location of equipment that supports a fully automated or manned fare gate operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "faregate.oversized",
    definition:
      'Models the presence and approximate point location of a fare gate operation that is specifically designed for a pedestrian that requires an entrance whose width is greater than the "standard" fare gate.',
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay",
    definition:
      "Intramural sports or recreational fields usually found on college/university campus.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay",
    definition:
      "Models the presence and approximate point location of a sports field.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay",
    definition:
      "Models the presence and physical extent of an area used to play sports.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay.americanfootball",
    definition:
      "Models the presence and approximate point location of an American football pitch.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay.baseball",
    definition:
      "Models the presence and approximate point location of a baseball field.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay.basketball",
    definition:
      "Models the presence and approximate point location of a basketball court.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay.fieldhockey",
    definition:
      "Models the presence and approximate point location of a field hockey pitch.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay.icehockey",
    definition:
      "Models the presence and approximate point location of an ice hockey rink.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay.rugby",
    definition:
      "Models the presence and approximate point location of a rugby pitch.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay.soccer",
    definition:
      "Models the presence and approximate point location of a soccer pitch.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay.softball",
    definition:
      "Models the presence and approximate point location of a softball field.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay.tennis",
    definition:
      "Models the presence and approximate point location of a tennis court.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay.trackfield",
    definition:
      "Models the presence and approximate point location of a track and field arena.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fieldofplay.volleyball",
    definition:
      "Models the presence and approximate point location of a volleyball court.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "firealarmpullstation",
    definition:
      "Models the presence and approximate point location of a fire protection device which, when activated, initiates an alarm on a fire alarm system.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fireextinguisher",
    definition:
      "Models the presence and approximate point location of a fire protection device.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "firstaid",
    definition:
      "Models the presence and approximate point location of: A medical support operation or First Aid, or the physical extent of a space containing a medical support operation..",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "fittingroom",
    definition:
      "Models the presence and approximate point location of one or more fitting room where a person may try on clothes or change clothes.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "foodservice",
    definition:
      "Models the presence and approximate point location of a foodservice operation where a pedestrian can enjoy food and drink. The foodservice is offered by a foodservice company.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "gatearea",
    definition:
      "Models the presence and approximate extent of an open or semi-enclosed environment containing a collection of thematically related gate holding areas.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "groundtransportation",
    definition:
      "Models the presence and approximate point location of an area where a general set of ground transportation services exist.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "guestservices",
    definition:
      "Models the presence and approximate point location of a guest service operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "handsanitizerstation",
    definition:
      "Models the presence and approximate point location of a hand sanitizer dispensing station.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "healthscreening",
    definition:
      "Models the presence and approximate point location of personnel/equipment that supports a health screening operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "hoteling",
    definition:
      "Models the presence and approximate point location of: * A reservation-based unassigned work surface.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "immigration",
    definition:
      'Models the presence and approximate point location of an immigration operation. (Also known as "Passport Control.")',
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "information",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of information.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "information.bid",
    definition:
      "Models the presence and approximate point location of a Baggage Information Display (BID) system that displays baggage claim information.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "information.carrental",
    definition:
      "Models the presence and approximate point location of a manned desk or an automated information kiosk that: May exist in support of a particular brand name or is brand agnostic. Is not concerned with delivering other information types (e.g., tourism, hotel or airline information).",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "information.hotel",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "information.mufid",
    definition:
      "Models the presence and approximate point location of a Multiple User Flight Information Display system that displays flight information to passengers and patrons by destination city, airline, arrival and departure times, gate, and status of the flight (on-time, delayed, cancelled, boarding, or landed).",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "information.mufid.arrivals",
    definition:
      "Models the presence and approximate point location of a Multiple User Flight Information Display system that displays flight information to passengers and patrons by arrival city, airline, arrival times, gate, and status of the flight (on-time, delayed, cancelled, boarding, or landed).",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "information.mufid.departures",
    definition:
      "Models the presence and approximate point location of a Multiple User Flight Information Display system that displays flight information to passengers and patrons by departure city, airline, arrival times, gate, and status of the flight (on-time, delayed, cancelled, or boarding).",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "information.transit",
    definition:
      "Models the presence and approximate point location of a manned desk or an automated information kiosk that: May exist in support of a particular brand name or is brand agnostic. Is not concerned with delivering other information types (e.g., tourism information, hotel.).",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "landmark",
    definition:
      "Items in this category are spaces and places of significance and history.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "landmark",
    definition:
      "Models the presence and approximate point location of a recognizable or substantial natural or artificial feature that is useful for pedestrian navigation or orientation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "library",
    definition:
      "A building or room where media is collected for people to read, borrow, and reference. Traditionally this is mostly books, but may also include other media too.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "library",
    definition:
      "Models the presence and physical extent of an enclosed area containing sources of information.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "limo",
    definition:
      "A company that provides transportation services by limousines.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "limo",
    definition:
      "Models the presence and approximate point location of a limousine service.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "lostandfound",
    definition:
      "Models the presence and approximate point location of a service where a pedestrian may retrieve personal belongings.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "mailbox",
    definition:
      "A physical box into which members of the public can deposit outgoing mail intended for collection by the agents of a country's postal service.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "meditation",
    definition: "Facilities dedicated to the practice of meditation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "meetingpoint",
    definition:
      "Models the presence and approximate point location of a defined place where people can meet.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "mobilityrescue",
    definition:
      "Models the presence and approximate point location of an assembly area where persons that experience disabilities may be assisted during an emergency event.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "mothersroom",
    definition:
      "Models the presence and approximate point or physical extent of an enclosed space where a woman may breastfeed or use a breast pump in private.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "movingwalkway",
    definition:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "paidarea",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a paid area.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "parkandride",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is to host a Park & Ride service.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "parking.bicycle",
    definition:
      "A business that offers parking spaces/services for bicycles only OR a large space specifically made for parking bicycles only, with or without a fee and may or may not have onsite pesonnel. OK to use for businesses that provide bike valet services as a core offering. Please note this should only be used for locations/businesses whose core competency is bike parking. Businesses that have bike racks at/outside of their space should not be categorized under Bike Parking (they should use the Bike Parking attribute, instead). Random bike racks located on public streets/areas are ineligible for a listing.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "parking.bicycle",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of bicycles.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "parking.compact",
    definition:
      'Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of vehicles defined in the automotive industry as being "compact.',
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "parking.ev",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of electric vehicles.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "parking.longterm",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment  whose intended purpose is the storage of vehicles for an extended period of time.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "parking.motorcycle",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed of an environment whose intended purpose is the storage of motorcycles.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "parking.shortterm",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of vehicles for a short period of time.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "parking.waitingarea",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is use by a person (and their vehicle) to wait for the arrival of another person(s).",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "payphone",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "pedestriancrossing",
    definition:
      "Models the presence and approximate point location of a pedestrian crossing.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "peoplemover",
    definition:
      "Models the presence and approximate point location of a transit stop that is associated with a transportation system describable as an Automated People Mover.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "phone",
    definition:
      'Models the presence and approximate point location of a telephone or a "bank" of telephones.',
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "phone.emergency",
    definition:
      "Models the presence and approximate point location of an emergency telephone service.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "photobooth",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "platform",
    definition:
      "Models the presence and approximate point location of an individually named (or numbered) train platform.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "platform",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed area of a railway platform that is distinct from another area of the same physical railway platform, or the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a platform.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "police",
    definition:
      "Models the presence and approximate point location of a police sub-station, office or desk that is permanently staffed by police.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "powerchargingstation",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "prayerroom",
    definition:
      "Models the presence and approximate point location of a place for religious prayer or meditation. Inter-faith (non-denominational) is assumed.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "prayerroom.buddhism",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "prayerroom.christianity",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "prayerroom.hinduism",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "prayerroom.islam",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "prayerroom.islam.female",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "prayerroom.islam.male",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "prayerroom.judaism",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "prayerroom.shintoism",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "prayerroom.sikh",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "prayerroom.taoic",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "privatelounge",
    definition:
      "Models the presence and physical extent of an enclosed space that is made available to authorized pedestrians.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "productreturn",
    definition:
      "Models the presence and approximate point location of a product return service operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "rail.muni",
    definition:
      "Models the presence and approximate point location of one or more rail stop that is serviced by a local transit authority.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "rail.national",
    definition:
      "Models the presence and approximate point location of one or more rail stop that is serviced by a national transit authority.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "ramp",
    definition:
      "Models the presence and approximate point location or physical extent of an incline plane.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "reception.desk",
    definition:
      "Models the presence and approximate point location of a reception desk.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "recreation",
    definition: "Business or location related to recreational activities.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "recreation",
    definition:
      "Models the presence and approximate point location of a break room or recreational space.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single enclosed space, containing bathroom facilities.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.family",
    definition: "A bathroom intended for family use",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.family",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a family.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.female",
    definition: "A bathroom intended for female use",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.female",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a female.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.female.wheelchair",
    definition:
      "Models the presence and approximate point location of a female bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.male",
    definition: "A bathroom intended for male use",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.male",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a male.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.male.wheelchair",
    definition:
      "Models the presence and approximate point location of a male bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.transgender",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a person that identifies themselves as transgender.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.transgender.wheelchair",
    definition:
      "Models the presence and approximate point location of a transgender bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.unisex",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by any person.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.unisex",
    definition:
      "Restroom designed to be used by any person, regardless of gender.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.unisex.wheelchair",
    definition:
      "Models the presence and approximate point location of a unisex bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.wheelchair",
    definition:
      "Dedicated restroom designed to be accessible for those with physical disabilities.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "restroom.wheelchair",
    definition:
      "Models the presence and approximate point location of a bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "rideshare",
    definition:
      "Business or service that facilitates ride sharing or carpooling allowing multiple riders to share a car trip.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "rideshare",
    definition:
      "Models the presence and approximate point location of a ride-share pick-up spot or zone.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "seat",
    definition: "Models the presence and approximate point location of a seat.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "seating",
    definition:
      "models the presence and location of an open or semi-enclosed seating environment.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "security",
    definition:
      "A business or organization who can be hired for private security",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "security",
    definition:
      "Models the presence and approximate point location of an area, or approximate thematic extent of an open or semi-enclosed area, containing a security operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "security.checkpoint",
    definition:
      "Models the presence and approximate point location of personnel/equipment that supports a security operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "security.inspection",
    definition:
      "Models the presence and approximate point location of an inspection operation. Customs Inspection (International Travel) National/Federal Inspection (Domestic Travel)",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "service",
    definition:
      'Should be used to model the presence and approximate point location, or approximate thematic extent of an open or semi-enclosed area, of an service operation that cannot be classified using any other "service" category in the hierarchy.',
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "shower",
    definition:
      "Models the presence and approximate point location of one or more neighboring shower facility and adjoining locker/changing area, or the physical extent of an enclosed space that provides shower facilities and adjoining locker/changing area.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "shuttle",
    definition:
      "Models the presence and approximate point location of one or more bus stop that is serviced by a private enterprise, not a national or local transit authority.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "sleepbox",
    definition:
      "Models the presence and approximate point location of one or more service that offers a bed and an associated set of facilities in a limited space.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "smokingarea",
    definition:
      "Models the presence and approximate point location, or physical extent of a space containing a smoking area or facility.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "stairs",
    definition:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "storage",
    definition:
      "Models the presence and approximate point location of a storage facility.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "strollerrental",
    definition:
      "Models the presence and approximate point location of a stroller rental service.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "studentadmissions",
    definition:
      "Models the presence and approximate point location of a student admissions operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "studentservices",
    definition:
      "Models the presence and approximate point location of a student services operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "swimmingpool",
    definition: "Facilities where one can swim in a swimming pool.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "swimmingpool",
    definition:
      "Models the presence and approximate point location of a water feature that is intended for use by people.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "swimmingpool.children",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "swimmingpool.family",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "taxi",
    definition:
      "A vehicle providing individualized transportation a location specified by the customer.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "taxi",
    definition:
      "Models the presence and approximate point location of a taxi waiting area or line-up.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "ticketing",
    definition:
      "Models the presence and approximate point location of an automated or manned ticketing operation, or the approximate thematic extent of an area containing ticketing operations and services.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "ticketing.airline",
    definition:
      "Models the presence and approximate point location of a manned airline ticketing operation.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "ticketing.bus",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "ticketing.bus.muni",
    definition:
      "Models the presence and approximate point location of an automated or manned bus ticketing operation that is provided by a local transit authority.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "ticketing.bus.national",
    definition:
      "Models the presence and approximate point location of an automated or manned bus ticketing operation that is provided by a national transit authority.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "ticketing.rail",
    definition: "",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "ticketing.rail.muni",
    definition:
      "Models the presence and approximate point location of an automated or manned rail ticketing operation that is provided by a national transit authority.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "ticketing.rail.national",
    definition:
      "Models the presence and approximate point location of an automated or manned rail ticketing operation that is provided by a national transit authority.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "ticketing.shuttle",
    definition:
      "Models the presence and approximate point location of an automated or manned private ticketing operation that is provided by a private enterprise, not a national or local transit authority.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "traintrack",
    definition:
      "Models the presence and approximate point location of an individually named (or numbered) train track or physical portion of a train platform.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "transit",
    definition:
      "Describes a physical structure whose sole operational purpose is to provide transportation services.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "transit",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians: Within or among different parts of the same Venue (inter-venue transit). Within, among and beyond the Venue.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "valet",
    definition:
      "Models the presence and approximate point location of a valet parking service.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "vendingmachine",
    definition:
      "Automated machine that provides items using a payment system. Please use shopping.vendingmachine.refreshments for food related machines.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "vendingmachine",
    definition:
      "Models the presence and approximate point location of an automated system that vends products/services that include, but are not limited to, electronics, cosmetics, food and beverage.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "vendingmachine.trainticket",
    definition:
      "Models the presence and approximate point location of an automated system that vends train tickets.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "wheelchairassist",
    definition:
      "Models the presence and approximate point location of a wheelchair assistance service.",
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "wifi",
    definition:
      'Models the presence and approximate point location of a designated zone/area/"hot spot" where Wi-Fi service is available.',
  },
  {
    collection: "amenity",
    venueType: "",
    feature: "amenity",
    category: "yoga",
    definition:
      "Facilities providing space and instruction for the practice of yoga. Do not use for businesses not offering yoga as their core instruction (e.g. a gym offering yoga once a week should not receive this category).",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "animalreliefarea",
    definition:
      "A convenience area for service animal relief, often be equipped with water bowls and animal toiletries",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "animalreliefarea",
    definition:
      "Models the presence and approximate point location of a Service Animal Relief Area (SARA) or domestic pet relief area.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "babychanging",
    definition:
      "Location for the specific purpose of changing a baby, does not contain bathroom facilities.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "baggagecarousel",
    definition:
      "Models the presence and approximate point location of an individual Baggage Carousel.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "baggagecarts",
    definition:
      "Models the presence and approximate point location of a baggage/luggage trolley system.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "baggageclaim",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a baggage claim operation.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "boardinggate.aircraft",
    definition:
      "Models the presence and approximate point location of an aircraft boarding gate operation.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "checkin.desk",
    definition:
      "Models the presence and approximate point location or physical extent of furniture that supports one or more check-in desk operations.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "checkin.desk.oversizebaggage",
    definition:
      "Models the presence and approximate point location of a check-in area, desk, or service where special or oversized baggage may be checked in.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "checkin.desk.transfer",
    definition:
      "Models the presence and approximate point location of a manned transfer desk operation whose purpose is to facilitate a traveler's transfer to another outbound connection.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "checkin.selfservice",
    definition:
      "Models the presence and approximate point location of furniture/equipment that supports full or semi-automated check-in operations.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "defibrillator",
    definition:
      "Models the presence and approximate point location of an Automated External Defibrillator (AED).",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "drinkingfountain",
    definition:
      "Models the presence and approximate point location of drinking water.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "eatingdrinking",
    definition:
      'Models the presence and approximate thematic extent of an open or semi-enclosed environment that is used as a "common" area for dining.',
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "elevator",
    definition:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "escalator",
    definition:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "firstaid",
    definition:
      "Models the presence and approximate point location of: A medical support operation or First Aid, or the physical extent of a space containing a medical support operation..",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "gatearea",
    definition:
      "Models the presence and approximate extent of an open or semi-enclosed environment containing a collection of thematically related gate holding areas.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "immigration",
    definition:
      'Models the presence and approximate point location of an immigration operation. (Also known as "Passport Control.")',
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "information",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of information.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "lostandfound",
    definition:
      "Models the presence and approximate point location of a service where a pedestrian may retrieve personal belongings.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "mothersroom",
    definition:
      "Models the presence and approximate point or physical extent of an enclosed space where a woman may breastfeed or use a breast pump in private.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "movingwalkway",
    definition:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "peoplemover",
    definition:
      "Models the presence and approximate point location of a transit stop that is associated with a transportation system describable as an Automated People Mover.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "platform",
    definition:
      "Models the presence and approximate point location of an individually named (or numbered) train platform.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "platform",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed area of a railway platform that is distinct from another area of the same physical railway platform, or the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a platform.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single enclosed space, containing bathroom facilities.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.family",
    definition: "A bathroom intended for family use",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.family",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a family.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.female",
    definition: "A bathroom intended for female use",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.female",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a female.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.female.wheelchair",
    definition:
      "Models the presence and approximate point location of a female bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.male",
    definition: "A bathroom intended for male use",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.male",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a male.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.male.wheelchair",
    definition:
      "Models the presence and approximate point location of a male bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.unisex",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by any person.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.unisex",
    definition:
      "Restroom designed to be used by any person, regardless of gender.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.wheelchair",
    definition:
      "Dedicated restroom designed to be accessible for those with physical disabilities.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "restroom.wheelchair",
    definition:
      "Models the presence and approximate point location of a bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "rideshare",
    definition:
      "Business or service that facilitates ride sharing or carpooling allowing multiple riders to share a car trip.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "rideshare",
    definition:
      "Models the presence and approximate point location of a ride-share pick-up spot or zone.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "seating",
    definition:
      "models the presence and location of an open or semi-enclosed seating environment.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "security.checkpoint",
    definition:
      "Models the presence and approximate point location of personnel/equipment that supports a security operation.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "security.inspection",
    definition:
      "Models the presence and approximate point location of an inspection operation. Customs Inspection (International Travel) National/Federal Inspection (Domestic Travel)",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "shuttle",
    definition:
      "Models the presence and approximate point location of one or more bus stop that is serviced by a private enterprise, not a national or local transit authority.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "smokingarea",
    definition:
      "Models the presence and approximate point location, or physical extent of a space containing a smoking area or facility.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "stairs",
    definition:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "taxi",
    definition:
      "A vehicle providing individualized transportation a location specified by the customer.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "taxi",
    definition:
      "Models the presence and approximate point location of a taxi waiting area or line-up.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "ticketing.airline",
    definition:
      "Models the presence and approximate point location of a manned airline ticketing operation.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "ticketing.rail",
    definition: "",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "vendingmachine.trainticket",
    definition:
      "Models the presence and approximate point location of an automated system that vends train tickets.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport",
    feature: "amenity",
    category: "wheelchairassist",
    definition:
      "Models the presence and approximate point location of a wheelchair assistance service.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "animalreliefarea",
    definition:
      "A convenience area for service animal relief, often be equipped with water bowls and animal toiletries",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "animalreliefarea",
    definition:
      "Models the presence and approximate point location of a Service Animal Relief Area (SARA) or domestic pet relief area.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "babychanging",
    definition:
      "Location for the specific purpose of changing a baby, does not contain bathroom facilities.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "baggagecarousel",
    definition:
      "Models the presence and approximate point location of an individual Baggage Carousel.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "baggagecarts",
    definition:
      "Models the presence and approximate point location of a baggage/luggage trolley system.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "baggageclaim",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a baggage claim operation.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "boardinggate.aircraft",
    definition:
      "Models the presence and approximate point location of an aircraft boarding gate operation.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "checkin.desk",
    definition:
      "Models the presence and approximate point location or physical extent of furniture that supports one or more check-in desk operations.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "checkin.desk.oversizebaggage",
    definition:
      "Models the presence and approximate point location of a check-in area, desk, or service where special or oversized baggage may be checked in.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "checkin.desk.transfer",
    definition:
      "Models the presence and approximate point location of a manned transfer desk operation whose purpose is to facilitate a traveler's transfer to another outbound connection.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "checkin.selfservice",
    definition:
      "Models the presence and approximate point location of furniture/equipment that supports full or semi-automated check-in operations.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "defibrillator",
    definition:
      "Models the presence and approximate point location of an Automated External Defibrillator (AED).",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "drinkingfountain",
    definition:
      "Models the presence and approximate point location of drinking water.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "eatingdrinking",
    definition:
      'Models the presence and approximate thematic extent of an open or semi-enclosed environment that is used as a "common" area for dining.',
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "elevator",
    definition:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "escalator",
    definition:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "firstaid",
    definition:
      "Models the presence and approximate point location of: A medical support operation or First Aid, or the physical extent of a space containing a medical support operation..",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "gatearea",
    definition:
      "Models the presence and approximate extent of an open or semi-enclosed environment containing a collection of thematically related gate holding areas.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "immigration",
    definition:
      'Models the presence and approximate point location of an immigration operation. (Also known as "Passport Control.")',
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "information",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of information.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "lostandfound",
    definition:
      "Models the presence and approximate point location of a service where a pedestrian may retrieve personal belongings.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "mothersroom",
    definition:
      "Models the presence and approximate point or physical extent of an enclosed space where a woman may breastfeed or use a breast pump in private.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "movingwalkway",
    definition:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "peoplemover",
    definition:
      "Models the presence and approximate point location of a transit stop that is associated with a transportation system describable as an Automated People Mover.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "platform",
    definition:
      "Models the presence and approximate point location of an individually named (or numbered) train platform.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "platform",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed area of a railway platform that is distinct from another area of the same physical railway platform, or the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a platform.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single enclosed space, containing bathroom facilities.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.family",
    definition: "A bathroom intended for family use",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.family",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a family.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.female",
    definition: "A bathroom intended for female use",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.female",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a female.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.female.wheelchair",
    definition:
      "Models the presence and approximate point location of a female bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.male",
    definition: "A bathroom intended for male use",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.male",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a male.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.male.wheelchair",
    definition:
      "Models the presence and approximate point location of a male bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.unisex",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by any person.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.unisex",
    definition:
      "Restroom designed to be used by any person, regardless of gender.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.wheelchair",
    definition:
      "Dedicated restroom designed to be accessible for those with physical disabilities.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "restroom.wheelchair",
    definition:
      "Models the presence and approximate point location of a bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "rideshare",
    definition:
      "Business or service that facilitates ride sharing or carpooling allowing multiple riders to share a car trip.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "rideshare",
    definition:
      "Models the presence and approximate point location of a ride-share pick-up spot or zone.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "seating",
    definition:
      "models the presence and location of an open or semi-enclosed seating environment.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "security.checkpoint",
    definition:
      "Models the presence and approximate point location of personnel/equipment that supports a security operation.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "security.inspection",
    definition:
      "Models the presence and approximate point location of an inspection operation. Customs Inspection (International Travel) National/Federal Inspection (Domestic Travel)",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "shuttle",
    definition:
      "Models the presence and approximate point location of one or more bus stop that is serviced by a private enterprise, not a national or local transit authority.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "smokingarea",
    definition:
      "Models the presence and approximate point location, or physical extent of a space containing a smoking area or facility.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "stairs",
    definition:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "taxi",
    definition:
      "A vehicle providing individualized transportation a location specified by the customer.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "taxi",
    definition:
      "Models the presence and approximate point location of a taxi waiting area or line-up.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "ticketing.airline",
    definition:
      "Models the presence and approximate point location of a manned airline ticketing operation.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "ticketing.rail",
    definition: "",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "vendingmachine.trainticket",
    definition:
      "Models the presence and approximate point location of an automated system that vends train tickets.",
  },
  {
    collection: "amenity/airport",
    venueType: "airport.intl",
    feature: "amenity",
    category: "wheelchairassist",
    definition:
      "Models the presence and approximate point location of a wheelchair assistance service.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "babychanging",
    definition:
      "Location for the specific purpose of changing a baby, does not contain bathroom facilities.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "defibrillator",
    definition:
      "Models the presence and approximate point location of an Automated External Defibrillator (AED).",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "drinkingfountain",
    definition:
      "Models the presence and approximate point location of drinking water.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "eatingdrinking",
    definition:
      'Models the presence and approximate thematic extent of an open or semi-enclosed environment that is used as a "common" area for dining.',
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "elevator",
    definition:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "escalator",
    definition:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "information",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of information.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "lostandfound",
    definition:
      "Models the presence and approximate point location of a service where a pedestrian may retrieve personal belongings.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "mothersroom",
    definition:
      "Models the presence and approximate point or physical extent of an enclosed space where a woman may breastfeed or use a breast pump in private.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "movingwalkway",
    definition:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "parking.bicycle",
    definition:
      "A business that offers parking spaces/services for bicycles only OR a large space specifically made for parking bicycles only, with or without a fee and may or may not have onsite pesonnel. OK to use for businesses that provide bike valet services as a core offering. Please note this should only be used for locations/businesses whose core competency is bike parking. Businesses that have bike racks at/outside of their space should not be categorized under Bike Parking (they should use the Bike Parking attribute, instead). Random bike racks located on public streets/areas are ineligible for a listing.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "parking.bicycle",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of bicycles.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "peoplemover",
    definition:
      "Models the presence and approximate point location of a transit stop that is associated with a transportation system describable as an Automated People Mover.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single enclosed space, containing bathroom facilities.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.family",
    definition: "A bathroom intended for family use",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.family",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a family.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.female",
    definition: "A bathroom intended for female use",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.female",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a female.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.female.wheelchair",
    definition:
      "Models the presence and approximate point location of a female bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.male",
    definition: "A bathroom intended for male use",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.male",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a male.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.male.wheelchair",
    definition:
      "Models the presence and approximate point location of a male bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.unisex",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by any person.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.unisex",
    definition:
      "Restroom designed to be used by any person, regardless of gender.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.wheelchair",
    definition:
      "Dedicated restroom designed to be accessible for those with physical disabilities.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "restroom.wheelchair",
    definition:
      "Models the presence and approximate point location of a bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "rideshare",
    definition:
      "Business or service that facilitates ride sharing or carpooling allowing multiple riders to share a car trip.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "rideshare",
    definition:
      "Models the presence and approximate point location of a ride-share pick-up spot or zone.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "shuttle",
    definition:
      "Models the presence and approximate point location of one or more bus stop that is serviced by a private enterprise, not a national or local transit authority.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "smokingarea",
    definition:
      "Models the presence and approximate point location, or physical extent of a space containing a smoking area or facility.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "stairs",
    definition:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "taxi",
    definition:
      "A vehicle providing individualized transportation a location specified by the customer.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "taxi",
    definition:
      "Models the presence and approximate point location of a taxi waiting area or line-up.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "ticketing.rail",
    definition: "",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "vendingmachine.trainticket",
    definition:
      "Models the presence and approximate point location of an automated system that vends train tickets.",
  },
  {
    collection: "amenity/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "amenity",
    category: "wheelchairassist",
    definition:
      "Models the presence and approximate point location of a wheelchair assistance service.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "animalreliefarea",
    definition:
      "A convenience area for service animal relief, often be equipped with water bowls and animal toiletries",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "animalreliefarea",
    definition:
      "Models the presence and approximate point location of a Service Animal Relief Area (SARA) or domestic pet relief area.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "babychanging",
    definition:
      "Location for the specific purpose of changing a baby, does not contain bathroom facilities.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "baggagecarousel",
    definition:
      "Models the presence and approximate point location of an individual Baggage Carousel.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "baggagecarts",
    definition:
      "Models the presence and approximate point location of a baggage/luggage trolley system.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "boardinggate.train",
    definition:
      "Models the presence and approximate point location of a traint boarding gate operation.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "checkin.desk",
    definition:
      "Models the presence and approximate point location or physical extent of furniture that supports one or more check-in desk operations.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "checkin.desk.oversizebaggage",
    definition:
      "Models the presence and approximate point location of a check-in area, desk, or service where special or oversized baggage may be checked in.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "checkin.selfservice",
    definition:
      "Models the presence and approximate point location of furniture/equipment that supports full or semi-automated check-in operations.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "coinlocker",
    definition: "",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "defibrillator",
    definition:
      "Models the presence and approximate point location of an Automated External Defibrillator (AED).",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "drinkingfountain",
    definition:
      "Models the presence and approximate point location of drinking water.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "eatingdrinking",
    definition:
      'Models the presence and approximate thematic extent of an open or semi-enclosed environment that is used as a "common" area for dining.',
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "elevator",
    definition:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "escalator",
    definition:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "faregate",
    definition:
      "Models the presence and approximate point location of equipment that supports a fully automated or manned fare gate operation.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "firstaid",
    definition:
      "Models the presence and approximate point location of: A medical support operation or First Aid, or the physical extent of a space containing a medical support operation..",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "immigration",
    definition:
      'Models the presence and approximate point location of an immigration operation. (Also known as "Passport Control.")',
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "information",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of information.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "lostandfound",
    definition:
      "Models the presence and approximate point location of a service where a pedestrian may retrieve personal belongings.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "mothersroom",
    definition:
      "Models the presence and approximate point or physical extent of an enclosed space where a woman may breastfeed or use a breast pump in private.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "movingwalkway",
    definition:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "paidarea",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a paid area.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "parking.bicycle",
    definition:
      "A business that offers parking spaces/services for bicycles only OR a large space specifically made for parking bicycles only, with or without a fee and may or may not have onsite pesonnel. OK to use for businesses that provide bike valet services as a core offering. Please note this should only be used for locations/businesses whose core competency is bike parking. Businesses that have bike racks at/outside of their space should not be categorized under Bike Parking (they should use the Bike Parking attribute, instead). Random bike racks located on public streets/areas are ineligible for a listing.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "parking.bicycle",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of bicycles.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "peoplemover",
    definition:
      "Models the presence and approximate point location of a transit stop that is associated with a transportation system describable as an Automated People Mover.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "platform",
    definition:
      "Models the presence and approximate point location of an individually named (or numbered) train platform.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "platform",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed area of a railway platform that is distinct from another area of the same physical railway platform, or the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a platform.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single enclosed space, containing bathroom facilities.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.family",
    definition: "A bathroom intended for family use",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.family",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a family.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.female",
    definition: "A bathroom intended for female use",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.female",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a female.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.female.wheelchair",
    definition:
      "Models the presence and approximate point location of a female bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.male",
    definition: "A bathroom intended for male use",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.male",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a male.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.male.wheelchair",
    definition:
      "Models the presence and approximate point location of a male bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.unisex",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by any person.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.unisex",
    definition:
      "Restroom designed to be used by any person, regardless of gender.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.wheelchair",
    definition:
      "Dedicated restroom designed to be accessible for those with physical disabilities.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "restroom.wheelchair",
    definition:
      "Models the presence and approximate point location of a bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "rideshare",
    definition:
      "Business or service that facilitates ride sharing or carpooling allowing multiple riders to share a car trip.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "rideshare",
    definition:
      "Models the presence and approximate point location of a ride-share pick-up spot or zone.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "seating",
    definition:
      "models the presence and location of an open or semi-enclosed seating environment.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "security.checkpoint",
    definition:
      "Models the presence and approximate point location of personnel/equipment that supports a security operation.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "security.inspection",
    definition:
      "Models the presence and approximate point location of an inspection operation. Customs Inspection (International Travel) National/Federal Inspection (Domestic Travel)",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "shuttle",
    definition:
      "Models the presence and approximate point location of one or more bus stop that is serviced by a private enterprise, not a national or local transit authority.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "smokingarea",
    definition:
      "Models the presence and approximate point location, or physical extent of a space containing a smoking area or facility.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "stairs",
    definition:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "taxi",
    definition:
      "A vehicle providing individualized transportation a location specified by the customer.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "taxi",
    definition:
      "Models the presence and approximate point location of a taxi waiting area or line-up.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "vendingmachine.trainticket",
    definition:
      "Models the presence and approximate point location of an automated system that vends train tickets.",
  },
  {
    collection: "amenity/trainstation",
    venueType: "trainstation",
    feature: "amenity",
    category: "wheelchairassist",
    definition:
      "Models the presence and approximate point location of a wheelchair assistance service.",
  },
  {
    collection: "building",
    venueType: "",
    feature: "building",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "building",
    venueType: "",
    feature: "building",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "building",
    venueType: "",
    feature: "building",
    category: "transit",
    definition:
      "Describes a physical structure whose sole operational purpose is to provide transportation services.",
  },
  {
    collection: "building",
    venueType: "",
    feature: "building",
    category: "transit",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians: Within or among different parts of the same Venue (inter-venue transit). Within, among and beyond the Venue.",
  },
  {
    collection: "building",
    venueType: "",
    feature: "building",
    category: "transit.bus",
    definition:
      "Describes a physical structure whose sole operational purpose is to provide bus transportation services.",
  },
  {
    collection: "building",
    venueType: "",
    feature: "building",
    category: "transit.train",
    definition:
      "Describes a physical structure whose sole operational purpose is to provide train transportation services.",
  },
  {
    collection: "building",
    venueType: "",
    feature: "building",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "building/airport",
    venueType: "airport",
    feature: "building",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "building/airport",
    venueType: "airport",
    feature: "building",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "building/airport",
    venueType: "airport",
    feature: "building",
    category: "transit",
    definition:
      "Describes a physical structure whose sole operational purpose is to provide transportation services.",
  },
  {
    collection: "building/airport",
    venueType: "airport",
    feature: "building",
    category: "transit",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians: Within or among different parts of the same Venue (inter-venue transit). Within, among and beyond the Venue.",
  },
  {
    collection: "building/airport",
    venueType: "airport",
    feature: "building",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "building/airport",
    venueType: "airport.intl",
    feature: "building",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "building/airport",
    venueType: "airport.intl",
    feature: "building",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "building/airport",
    venueType: "airport.intl",
    feature: "building",
    category: "transit",
    definition:
      "Describes a physical structure whose sole operational purpose is to provide transportation services.",
  },
  {
    collection: "building/airport",
    venueType: "airport.intl",
    feature: "building",
    category: "transit",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians: Within or among different parts of the same Venue (inter-venue transit). Within, among and beyond the Venue.",
  },
  {
    collection: "building/airport",
    venueType: "airport.intl",
    feature: "building",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "building/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "building",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "building/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "building",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "building/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "building",
    category: "transit",
    definition:
      "Describes a physical structure whose sole operational purpose is to provide transportation services.",
  },
  {
    collection: "building/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "building",
    category: "transit",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians: Within or among different parts of the same Venue (inter-venue transit). Within, among and beyond the Venue.",
  },
  {
    collection: "building/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "building",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "building/trainstation",
    venueType: "trainstation",
    feature: "building",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "building/trainstation",
    venueType: "trainstation",
    feature: "building",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "building/trainstation",
    venueType: "trainstation",
    feature: "building",
    category: "transit",
    definition:
      "Describes a physical structure whose sole operational purpose is to provide transportation services.",
  },
  {
    collection: "building/trainstation",
    venueType: "trainstation",
    feature: "building",
    category: "transit",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians: Within or among different parts of the same Venue (inter-venue transit). Within, among and beyond the Venue.",
  },
  {
    collection: "building/trainstation",
    venueType: "trainstation",
    feature: "building",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  // {
  //   collection: "door",
  //   venueType: "",
  //   feature: "door",
  //   category: "door",
  //   definition: "",
  // },
  {
    collection: "door",
    venueType: "",
    feature: "door",
    category: "movablepartition",
    definition:
      "Models a partition wall that may open to join two or more rooms into one large floor area.",
  },
  {
    collection: "door",
    venueType: "",
    feature: "door",
    category: "open",
    definition:
      "Models a doorway that is without a physical barrier. (It has no physical door.)",
  },
  {
    collection: "door",
    venueType: "",
    feature: "door",
    category: "revolving",
    definition: "Models a physical door that rotates.",
  },
  {
    collection: "door",
    venueType: "",
    feature: "door",
    category: "shutter",
    definition: "Models a physical door that rolls open and closed.",
  },
  {
    collection: "door",
    venueType: "",
    feature: "door",
    category: "sliding",
    definition: "Models a physical door that slides or glides open and closed.",
  },
  {
    collection: "door",
    venueType: "",
    feature: "door",
    category: "swinging",
    definition: "Models a physical door that swings open and closed.",
  },
  {
    collection: "door",
    venueType: "",
    feature: "door",
    category: "turnstile",
    definition: "",
  },
  {
    collection: "door",
    venueType: "",
    feature: "door",
    category: "turnstile.fullheight",
    definition: "",
  },
  {
    collection: "door",
    venueType: "",
    feature: "door",
    category: "turnstile.waistheight",
    definition: "",
  },
  // {
  //   collection: "door",
  //   venueType: "",
  //   feature: "door",
  //   category: "unspecified",
  //   definition:
  //     "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  // },
  {
    collection: "door-material",
    venueType: "",
    feature: "door-material",
    category: "gate",
    definition: "",
  },
  {
    collection: "door-material",
    venueType: "",
    feature: "door-material",
    category: "glass",
    definition: "",
  },
  {
    collection: "door-material",
    venueType: "",
    feature: "door-material",
    category: "metal",
    definition: "",
  },
  {
    collection: "door-material",
    venueType: "",
    feature: "door-material",
    category: "wood",
    definition: "",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "baggagecarousel",
    definition:
      "Models the presence and approximate point location of an individual Baggage Carousel.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "boardinggate.desk",
    definition:
      "Models the presence and physical extent of furniture that supports a boarding gate operation.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "checkin.desk",
    definition:
      "Models the presence and approximate point location or physical extent of furniture that supports one or more check-in desk operations.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "checkin.kiosk",
    definition:
      "Models the presence and physical extent of an automated or semi-automated check-in and/or ticketing kiosk operation.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "desk",
    definition:
      "Models the presence and physical extent of an individual or shared work surface or desk.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "equipment",
    definition:
      "Models the presence and physical extent of capital equipment that supports an operation.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "furniture",
    definition:
      "A shop that sells furniture, such as tables, chairs, couches, desks. The items sold are of a more general spread of purpose types, not to be confused with specialized stores like mattress stores or outdoor furniture stores.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "furniture",
    definition:
      "Models the presence and physical extent of moveable or built-in furniture and appliances. Built-in furniture/appliances includes, but is not limited to: Cabinets, office and restaurant countertops, restaurant bars, shelving, bookcases, display cases, lockers, and large kitchen appliances. Moveable furniture/appliances includes, but is not limited to: Unassigned desks/work surfaces, tables, filing cabinets, and large kitchen appliances.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "immigration.desk",
    definition:
      "Models the presence and physical extent of furniture that supports immigration (passport control) operations.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "inspection.desk",
    definition:
      "Models the presence and physical extent of furniture that supports an inspection or security operation.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "obstruction",
    definition:
      "Models the presence and physical extent of a physical, non-traversable object.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "securityequipment",
    definition:
      "Models the presence and physical extent of capital equipment that supports a security operation.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "stage",
    definition: "",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "vegetation",
    definition:
      "Models the presence and physical extent of a natural or artificial vegetation feature or an open or semi-enclosed vegetative area that may or may not be prohibited from being used as a pedestrian pathway.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "wall",
    definition:
      "Models the presence and physical extent of a standalone barrier that is permanent, temporary or moveable.",
  },
  {
    collection: "fixture",
    venueType: "",
    feature: "fixture",
    category: "water",
    definition:
      "Models the presence and physical extent of a natural or artificial water feature.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport",
    feature: "fixture",
    category: "baggagecarousel",
    definition:
      "Models the presence and approximate point location of an individual Baggage Carousel.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport",
    feature: "fixture",
    category: "checkin.desk",
    definition:
      "Models the presence and approximate point location or physical extent of furniture that supports one or more check-in desk operations.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport",
    feature: "fixture",
    category: "furniture",
    definition:
      "A shop that sells furniture, such as tables, chairs, couches, desks. The items sold are of a more general spread of purpose types, not to be confused with specialized stores like mattress stores or outdoor furniture stores.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport",
    feature: "fixture",
    category: "furniture",
    definition:
      "Models the presence and physical extent of moveable or built-in furniture and appliances. Built-in furniture/appliances includes, but is not limited to: Cabinets, office and restaurant countertops, restaurant bars, shelving, bookcases, display cases, lockers, and large kitchen appliances. Moveable furniture/appliances includes, but is not limited to: Unassigned desks/work surfaces, tables, filing cabinets, and large kitchen appliances.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport",
    feature: "fixture",
    category: "inspection.desk",
    definition:
      "Models the presence and physical extent of furniture that supports an inspection or security operation.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport",
    feature: "fixture",
    category: "obstruction",
    definition:
      "Models the presence and physical extent of a physical, non-traversable object.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport",
    feature: "fixture",
    category: "vegetation",
    definition:
      "Models the presence and physical extent of a natural or artificial vegetation feature or an open or semi-enclosed vegetative area that may or may not be prohibited from being used as a pedestrian pathway.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport",
    feature: "fixture",
    category: "water",
    definition:
      "Models the presence and physical extent of a natural or artificial water feature.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport.intl",
    feature: "fixture",
    category: "baggagecarousel",
    definition:
      "Models the presence and approximate point location of an individual Baggage Carousel.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport.intl",
    feature: "fixture",
    category: "checkin.desk",
    definition:
      "Models the presence and approximate point location or physical extent of furniture that supports one or more check-in desk operations.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport.intl",
    feature: "fixture",
    category: "furniture",
    definition:
      "A shop that sells furniture, such as tables, chairs, couches, desks. The items sold are of a more general spread of purpose types, not to be confused with specialized stores like mattress stores or outdoor furniture stores.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport.intl",
    feature: "fixture",
    category: "furniture",
    definition:
      "Models the presence and physical extent of moveable or built-in furniture and appliances. Built-in furniture/appliances includes, but is not limited to: Cabinets, office and restaurant countertops, restaurant bars, shelving, bookcases, display cases, lockers, and large kitchen appliances. Moveable furniture/appliances includes, but is not limited to: Unassigned desks/work surfaces, tables, filing cabinets, and large kitchen appliances.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport.intl",
    feature: "fixture",
    category: "inspection.desk",
    definition:
      "Models the presence and physical extent of furniture that supports an inspection or security operation.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport.intl",
    feature: "fixture",
    category: "obstruction",
    definition:
      "Models the presence and physical extent of a physical, non-traversable object.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport.intl",
    feature: "fixture",
    category: "vegetation",
    definition:
      "Models the presence and physical extent of a natural or artificial vegetation feature or an open or semi-enclosed vegetative area that may or may not be prohibited from being used as a pedestrian pathway.",
  },
  {
    collection: "fixture/airport",
    venueType: "airport.intl",
    feature: "fixture",
    category: "water",
    definition:
      "Models the presence and physical extent of a natural or artificial water feature.",
  },
  {
    collection: "fixture/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "fixture",
    category: "furniture",
    definition:
      "A shop that sells furniture, such as tables, chairs, couches, desks. The items sold are of a more general spread of purpose types, not to be confused with specialized stores like mattress stores or outdoor furniture stores.",
  },
  {
    collection: "fixture/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "fixture",
    category: "furniture",
    definition:
      "Models the presence and physical extent of moveable or built-in furniture and appliances. Built-in furniture/appliances includes, but is not limited to: Cabinets, office and restaurant countertops, restaurant bars, shelving, bookcases, display cases, lockers, and large kitchen appliances. Moveable furniture/appliances includes, but is not limited to: Unassigned desks/work surfaces, tables, filing cabinets, and large kitchen appliances.",
  },
  {
    collection: "fixture/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "fixture",
    category: "obstruction",
    definition:
      "Models the presence and physical extent of a physical, non-traversable object.",
  },
  {
    collection: "fixture/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "fixture",
    category: "vegetation",
    definition:
      "Models the presence and physical extent of a natural or artificial vegetation feature or an open or semi-enclosed vegetative area that may or may not be prohibited from being used as a pedestrian pathway.",
  },
  {
    collection: "fixture/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "fixture",
    category: "water",
    definition:
      "Models the presence and physical extent of a natural or artificial water feature.",
  },
  {
    collection: "fixture/trainstation",
    venueType: "trainstation",
    feature: "fixture",
    category: "baggagecarousel",
    definition:
      "Models the presence and approximate point location of an individual Baggage Carousel.",
  },
  {
    collection: "fixture/trainstation",
    venueType: "trainstation",
    feature: "fixture",
    category: "checkin.desk",
    definition:
      "Models the presence and approximate point location or physical extent of furniture that supports one or more check-in desk operations.",
  },
  {
    collection: "fixture/trainstation",
    venueType: "trainstation",
    feature: "fixture",
    category: "furniture",
    definition:
      "A shop that sells furniture, such as tables, chairs, couches, desks. The items sold are of a more general spread of purpose types, not to be confused with specialized stores like mattress stores or outdoor furniture stores.",
  },
  {
    collection: "fixture/trainstation",
    venueType: "trainstation",
    feature: "fixture",
    category: "furniture",
    definition:
      "Models the presence and physical extent of moveable or built-in furniture and appliances. Built-in furniture/appliances includes, but is not limited to: Cabinets, office and restaurant countertops, restaurant bars, shelving, bookcases, display cases, lockers, and large kitchen appliances. Moveable furniture/appliances includes, but is not limited to: Unassigned desks/work surfaces, tables, filing cabinets, and large kitchen appliances.",
  },
  {
    collection: "fixture/trainstation",
    venueType: "trainstation",
    feature: "fixture",
    category: "inspection.desk",
    definition:
      "Models the presence and physical extent of furniture that supports an inspection or security operation.",
  },
  {
    collection: "fixture/trainstation",
    venueType: "trainstation",
    feature: "fixture",
    category: "obstruction",
    definition:
      "Models the presence and physical extent of a physical, non-traversable object.",
  },
  {
    collection: "fixture/trainstation",
    venueType: "trainstation",
    feature: "fixture",
    category: "vegetation",
    definition:
      "Models the presence and physical extent of a natural or artificial vegetation feature or an open or semi-enclosed vegetative area that may or may not be prohibited from being used as a pedestrian pathway.",
  },
  {
    collection: "fixture/trainstation",
    venueType: "trainstation",
    feature: "fixture",
    category: "water",
    definition:
      "Models the presence and physical extent of a natural or artificial water feature.",
  },
  {
    collection: "footprint",
    venueType: "",
    feature: "footprint",
    category: "aerial",
    definition:
      'Models the referenced Building as "...represented as the shadow projected downward from an overhead light at infinity."',
  },
  {
    collection: "footprint",
    venueType: "",
    feature: "footprint",
    category: "ground",
    definition:
      "Models the referenced Building using the actual physical extent at ground-level.",
  },
  {
    collection: "footprint",
    venueType: "",
    feature: "footprint",
    category: "subterranean",
    definition:
      "Derived from the maximum extent of all floors, modeled as one or more Level, that exist below ground-level.",
  },
  {
    collection: "footprint/airport",
    venueType: "airport",
    feature: "footprint",
    category: "aerial",
    definition:
      'Models the referenced Building as "...represented as the shadow projected downward from an overhead light at infinity.',
  },
  {
    collection: "footprint/airport",
    venueType: "airport",
    feature: "footprint",
    category: "ground",
    definition:
      "Models the referenced Building using the actual physical extent at ground-level.",
  },
  {
    collection: "footprint/airport",
    venueType: "airport",
    feature: "footprint",
    category: "subterranean",
    definition:
      "Derived from the maximum extent of all floors, modeled as one or more Level, that exist below ground-level.",
  },
  {
    collection: "footprint/airport",
    venueType: "airport.intl",
    feature: "footprint",
    category: "aerial",
    definition:
      'Models the referenced Building as "...represented as the shadow projected downward from an overhead light at infinity.',
  },
  {
    collection: "footprint/airport",
    venueType: "airport.intl",
    feature: "footprint",
    category: "ground",
    definition:
      "Models the referenced Building using the actual physical extent at ground-level.",
  },
  {
    collection: "footprint/airport",
    venueType: "airport.intl",
    feature: "footprint",
    category: "subterranean",
    definition:
      "Derived from the maximum extent of all floors, modeled as one or more Level, that exist below ground-level.",
  },
  {
    collection: "footprint/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "footprint",
    category: "aerial",
    definition:
      'Models the referenced Building as "...represented as the shadow projected downward from an overhead light at infinity.',
  },
  {
    collection: "footprint/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "footprint",
    category: "ground",
    definition:
      "Models the referenced Building using the actual physical extent at ground-level.",
  },
  {
    collection: "footprint/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "footprint",
    category: "subterranean",
    definition:
      "Derived from the maximum extent of all floors, modeled as one or more Level, that exist below ground-level.",
  },
  {
    collection: "footprint/trainstation",
    venueType: "trainstation",
    feature: "footprint",
    category: "aerial",
    definition:
      'Models the referenced Building as "...represented as the shadow projected downward from an overhead light at infinity.',
  },
  {
    collection: "footprint/trainstation",
    venueType: "trainstation",
    feature: "footprint",
    category: "ground",
    definition:
      "Models the referenced Building using the actual physical extent at ground-level.",
  },
  {
    collection: "footprint/trainstation",
    venueType: "trainstation",
    feature: "footprint",
    category: "subterranean",
    definition:
      "Derived from the maximum extent of all floors, modeled as one or more Level, that exist below ground-level.",
  },
  {
    collection: "geofence",
    venueType: "",
    feature: "geofence",
    category: "concourse",
    definition:
      "A large open area inside or in front of a public building, as in an airport or train station.",
  },
  {
    collection: "geofence",
    venueType: "",
    feature: "geofence",
    category: "concourse",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a concourse.",
  },
  {
    collection: "geofence",
    venueType: "",
    feature: "geofence",
    category: "geofence",
    definition:
      'A geofence is a virtual boundary. The purpose of the geofence is to attribute applicable features, that fall within its boundary, with characteristics held by the geofence itself. A geofence can support: Location "awareness" among features. Location-based services. Query and find by location functionality.',
  },
  {
    collection: "geofence",
    venueType: "",
    feature: "geofence",
    category: "paidarea",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a paid area.",
  },
  {
    collection: "geofence",
    venueType: "",
    feature: "geofence",
    category: "platform",
    definition:
      "Models the presence and approximate point location of an individually named (or numbered) train platform.",
  },
  {
    collection: "geofence",
    venueType: "",
    feature: "geofence",
    category: "platform",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed area of a railway platform that is distinct from another area of the same physical railway platform, or the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a platform.",
  },
  {
    collection: "geofence",
    venueType: "",
    feature: "geofence",
    category: "postsecurity",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as post-security.",
  },
  {
    collection: "geofence",
    venueType: "",
    feature: "geofence",
    category: "presecurity",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as pre-security.",
  },
  {
    collection: "geofence",
    venueType: "",
    feature: "geofence",
    category: "terminal",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a terminal.",
  },
  {
    collection: "geofence",
    venueType: "",
    feature: "geofence",
    category: "underconstruction",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as under construction.",
  },
  {
    collection: "geofence/airport",
    venueType: "airport",
    feature: "geofence",
    category: "concourse",
    definition:
      "A large open area inside or in front of a public building, as in an airport or train station.",
  },
  {
    collection: "geofence/airport",
    venueType: "airport",
    feature: "geofence",
    category: "concourse",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a concourse.",
  },
  {
    collection: "geofence/airport",
    venueType: "airport",
    feature: "geofence",
    category: "terminal",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a terminal.",
  },
  {
    collection: "geofence/airport",
    venueType: "airport.intl",
    feature: "geofence",
    category: "concourse",
    definition:
      "A large open area inside or in front of a public building, as in an airport or train station.",
  },
  {
    collection: "geofence/airport",
    venueType: "airport.intl",
    feature: "geofence",
    category: "concourse",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a concourse.",
  },
  {
    collection: "geofence/airport",
    venueType: "airport.intl",
    feature: "geofence",
    category: "terminal",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a terminal.",
  },
  {
    collection: "level",
    venueType: "",
    feature: "level",
    category: "arrivals",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians that are arriving from a location.",
  },
  {
    collection: "level",
    venueType: "",
    feature: "level",
    category: "arrivals.domestic",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians that are arriving from a domestic location.",
  },
  {
    collection: "level",
    venueType: "",
    feature: "level",
    category: "arrivals.intl",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians that are arriving from an international location.",
  },
  {
    collection: "level",
    venueType: "",
    feature: "level",
    category: "departures",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians that are departing to a destination.",
  },
  {
    collection: "level",
    venueType: "",
    feature: "level",
    category: "departures.domestic",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians that are departing to a domestic destination.",
  },
  {
    collection: "level",
    venueType: "",
    feature: "level",
    category: "departures.intl",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians that are departing to an international destination.",
  },
  {
    collection: "level",
    venueType: "",
    feature: "level",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "level",
    venueType: "",
    feature: "level",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "level",
    venueType: "",
    feature: "level",
    category: "transit",
    definition:
      "Describes a physical structure whose sole operational purpose is to provide transportation services.",
  },
  {
    collection: "level",
    venueType: "",
    feature: "level",
    category: "transit",
    definition:
      "Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians: Within or among different parts of the same Venue (inter-venue transit). Within, among and beyond the Venue.",
  },
  {
    collection: "level",
    venueType: "",
    feature: "level",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "level/airport",
    venueType: "airport",
    feature: "level",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "level/airport",
    venueType: "airport",
    feature: "level",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "level/airport",
    venueType: "airport",
    feature: "level",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "level/airport",
    venueType: "airport.intl",
    feature: "level",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "level/airport",
    venueType: "airport.intl",
    feature: "level",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "level/airport",
    venueType: "airport.intl",
    feature: "level",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "level/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "level",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "level/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "level",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "level/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "level",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "level/trainstation",
    venueType: "trainstation",
    feature: "level",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "level/trainstation",
    venueType: "trainstation",
    feature: "level",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "level/trainstation",
    venueType: "trainstation",
    feature: "level",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "3dprinting",
    definition:
      "A business that provides 3D printing services. 3D printers synthesize three-dimensional object by adding successive layers of material under the control of a computer.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "acai",
    definition:
      "A business that specializes in acai bowls, a thick smoothie made out of frozen and mashed acai berries (acai palm) and topped with various ingredients, most commonly oatmeal/granola, fruit, coconut flakes, honey, syrup, peanut butter, almonds, and hemp seeds. Although acai bowls are usually sweet, there are also savory versions containing shrimp or dried fish and tapioca (typically found in Northern Brazil).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "accessories",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "accounting",
    definition: "A person or business with expertise in financial accounts",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "acnetreatment",
    definition:
      "A business or individual specializing in treating acne (whiteheads, blackheads, or pimples), which often includes laser treatments, medications, targeted facials, and diet management. (Note: this should not be used for products for treating acne as they are generally not eligible for a Yelp listing.)",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "acupuncture",
    definition:
      "A business or clinic with expertise in the alternative medicine of acupuncture. Originating within traditional Chinese medicine, acupuncture is a technique of inserting thin needles into the body (and occasionally the application of heat, pressure, or laser light) at acupuncture points.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "adoptionservices",
    definition:
      "An organization or business that helps find children for adults to adopt. For Pets please use pets.petadoption.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "adulteducation",
    definition:
      "Schools specializing in programs for adults, both degree and non-degree, at the university-level or technical-training level.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "adultentertainment",
    definition:
      "A venue with entertainment usually considered of an adult nature, typically sexual. This include places like strip clubs, and legal sex work.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "adultstore",
    definition: "A business specializing in the sale of adult themed items",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "advertising",
    definition: "A person or business with expertise in advertising.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "advisoryservices",
    definition:
      "Businesses or individuals specializing in the management of clients' financial investments and/or assets, providing investment advice, and offering financial planning services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "afghani",
    definition: "An establishment specializing in Afgan cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "african",
    definition: "An establishment specializing in African cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "agritourism",
    definition:
      "Any agriculturally based operation or activity that brings visitors to a farm or ranch.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "airfield",
    definition:
      "An open field designated for the taking off and landing of aircraft, but which, unlike an airport, does not necessarily have terminals or paved runways.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "airline",
    definition:
      "A company that provides the service of air travel including the planes and pilots.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "airport.regional",
    definition:
      "A facility for the landing, takeoff, shelter, supply, and repair of aircraft, especially one used for receiving or discharging passengers and cargo at regularly scheduled times that handles only domestic flights—flights within the same country.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "airportloungebar",
    definition:
      "A lounge space inside an airport restricted to customers of specific airlines. Usually offering greater comfort and service than the regular section of the airport.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "airportshuttle",
    definition: "A van or bus providing travel to and from airports.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "airsoft",
    definition:
      "A facility where airsoft, a military simulation sport where players participate in mock combat with authentic military-style weapons and tactics, is played. The airsoft guns used are full scale replicas of real world weapons (not to be confused with paintball, which uses special paint marker/guns).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "allergies",
    definition: "Doctors specializing in diagnosing and treating allergies.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "alternativemedicine",
    definition:
      "An establishment offering treatment which falls in any of a range of medical therapies that are not regarded as orthodox by the medical profession, such as herbalism, homeopathy, and acupuncture.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "american.modern",
    definition:
      "An establishment specializing in modern American cuisine, typically more fine dining experience.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "amusementpark",
    definition:
      "Commercially operated parks featuring roller coasters, shooting galleries, merry-go-rounds, and refreshment stands. For Kids, please use kids_activities.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "amusementpark.ride",
    definition: "An attraction at an amusement park or carnival type event.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "animalshelter",
    definition:
      "An organization that cares for, treats, houses and re-homes animals that have either been rescued from the street or handed in by the public",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "antiques",
    definition: "A business specializing in the sale of antique goods",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "apmstop",
    definition:
      "A transit stop for an Automated People Mover (APM) which generally connects multiple buildings or terminals within an airport or other large venue; Eg airtrains, skyrails, etc",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "appliances",
    definition:
      "A retailer selling consumer grade items for household consumption. Things like white goods, Televisions, electronics, kettles, sewing machines, vacuum cleaners, stereos, etc.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "arabian",
    definition: "An establishment specializing in Arabian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "arabian.pizza",
    definition:
      "A restaurant specializing in Arab style flatbread generally topped with tomato sauce and cheese.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "arcade",
    definition: "Facilities offering arcade games.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "archery",
    definition:
      "Locations or facilities where archery is played, a sport played using a bow and arrow.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "architecture",
    definition: "A person or business with expertise in architecture",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "argentine",
    definition: "An establishment specializing in Argentine cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "armenian",
    definition: "An establishment specializing in Armenian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "artgallery",
    definition:
      "Facilities dedicated to the sale of visual art, e.g. paintings, sculptures, and photographs. Includes art museums, in conjunction with the museum category.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "artinstruction",
    definition:
      "Businesses that are less formal than art schools, specializing in art instruction for generally recreational purposes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "arts.entertainment",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "artsandcrafts",
    definition:
      "A business specializing in the sale of items and materials associated with creating art and craft hobbies like painting, sculpting, drawing, etc.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "artschool",
    definition:
      "Educational institutions specializing in instruction in the visual arts. Not to be confused with Art Classes, or schools offering a degree or certification.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "artstudio",
    definition:
      "A workshop or studio where a professional artist, artisan, or designer creates. Traditionally, ateliers were for fine and decorative arts, but today they can be used for various forms of art (ceramics, painting, photography, knitting, chocolate-making, glass and jewelry design, etc.)",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "artstudio.rental",
    definition:
      "Studios and spaces available to rent for the production of art.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "artsupplies",
    definition:
      "A business specializing in the sale of supplies for creating art.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "asianfusion",
    definition:
      "An establishment specializing in food that is a combination of traditional Asian styles and flavors with modern techniques and foreign influences.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "astrologist",
    definition:
      "A person who uses astrology to tell others about their character or to predict their future.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "asturian",
    definition: "A restaurant specializing in the regional cuisine of Asturia.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "atm",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "atm.cryptocurrency",
    definition: "ATM specifically used for cryptocurrencies like Bitcoin.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "audiovideoequipment",
    definition: "A business specializing in high quality audio equipment.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auditory",
    definition:
      "Doctors specializing in the diagnosis and treatment of hearing and balance problems, and other related disorders.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "australian",
    definition: "An establishment specializing in Australian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "australian.modern",
    definition:
      "A restaurant specializing in contemporary Australian cuisine which may include fusions with other culinary traditions.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "austrian",
    definition: "An establishment specializing in Austrian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "austrian.schnitzel",
    definition:
      "A restaurant that primarily specializes in schnitzel, a deep-fried breaded cutlet of meat, typically of veal, mutton, chicken, beef, turkey, reindeer, or pork.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.accessibilityequipment",
    definition:
      "Businesses specializing in the sale of car equipment, such as van lifts or wheelchairs, designed for the disabled.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.bodyshop",
    definition:
      "Auto repair businesses that specialize in cosmetic repairs (e.g. fixing dents, painting, replacing bumpers). For businesses that specialize in window tinting, use autoglass.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.carbuyer",
    definition:
      "Services specializing in the purchase of used cars from private sellers.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.carshare",
    definition:
      "Businesses that offer vehicles for short term use, such as Zipcar, usually by the hour from various locations in metropolitan areas.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.carwash",
    definition:
      "Businesses specializing in the washing of cars, usually with mechanical brushes and sometimes focusing on the interior as well. Do not use for auto detailing.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.dealer.boat",
    definition:
      "Businesses that sell new or used boats, as well as boat parts.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.dealer.car",
    definition:
      "Retail businesses that sell new or used cars, often showcased in large lots. Do not use for businesses with auto repair or body shops attached.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.dealer.motorcycle",
    definition: "Businesses that sell motorcycles, mopeds, or scooters.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.dealer.rv",
    definition:
      "Businesses that sell motorsport vehicles such as ATVs, jet skis, and snowmobiles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.dentrepair.mobile",
    definition:
      "Mobile businesses that provide on-site repair for automobile dents.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.detailing",
    definition:
      "Services providing cleaning, polishing, and washing of automobiles to a show-quality level of detail.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.electric",
    definition:
      "A business specializing in the repair and troubleshooting of vehicles electrical system",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.evcharge",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.evcharge.dcfast",
    definition:
      "An electric vehicle charging type that supersedes Level 1 and Level 2 charging stations, and are designed to charge electric vehicles quickly",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.evcharge.tesla",
    definition:
      "An electric vehicle charging type that only supports charging for Tesla vehicles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.glass",
    definition:
      "Businesses specializing in car window repairs, tinting, and installation.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.oilchange",
    definition:
      "Businesses specializing in oil change services for cars. Do not use for auto repair.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.parts",
    definition:
      "Businesses that sell auto parts and supplies, and may also provide installation assistance, but not repair.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.repair",
    definition:
      "Businesses that repair mechanical problems in automobile engines.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.repair.transmission",
    definition: "Car repair shops specializing in the repair of transmissions.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.repair.wheelrim",
    definition: "Businesses that repair the wheels of rims of automobiles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.repair.windshield",
    definition:
      "Businesses that specialize in the repair or installation of windshields.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.servicestation",
    definition:
      "Businesses specializing in the sale of fuel and minor repair services for automobiles. This category includes businesses offering light refreshments such as snack foods and drinks.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.shipping",
    definition:
      "Businesses specializing in the facilitation of transport vehicles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.stereoinstallation",
    definition:
      "Businesses specializing in audio system installations for cars, including speakres, amplifiers, and wiring.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.tires",
    definition:
      "Businesses specializing in the sale, repair, and servicing of tires.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "auto.upholstery",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "automotive",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "autopartssupplies",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "babyclothesandsupplies",
    definition:
      "A business specializing in the sale of infant related accessories, like cots and car seats, clothing, strollers, travel bags and furniture.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bagels",
    definition: "Shops that sell bagels, primarily.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bakedgoods",
    definition: "Shops that sell baked goods, e.g. bread, cake, and pastries.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "ballonservices",
    definition: "An establishment offering balloon services",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bangladeshi",
    definition: "An establishment specializing in Bangladeshi cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bank",
    definition:
      "Businesses in which money is invested and/or protected for a client.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bar",
    definition:
      "A venue where their primary business is serving alcohol to the public. Food may also be served but is not the main focus.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "barbecue",
    definition:
      "An establishment specializing in food cooked on a barbecue or grill.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "barber",
    definition:
      "Individuals or businesses that specialize in the service of haircuts or facial shaving for men.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "barfood",
    definition:
      "A restaurant serving food characteristic of pubs and bars such as burgers or fish and chips.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "barreclass",
    definition:
      "Group classes involving an individual teacher instructing participants in workouts on a ballet barre, focusing on small movements designed to tone muscles on the arms, abdomen, gluteal muscles and thighs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "baseballfield",
    definition:
      "Locations or facilities where the sport of baseball is played.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bathingarea",
    definition:
      "An establishment that is equipped for recreational swimming or the washing of the body.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "batteries",
    definition: "A business specializing in the sale of batteries",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "battingcages",
    definition:
      "Facilities where one can practice hitting baseballs fired from a machine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "beach",
    definition:
      "Beach areas where people sunbathe and swim. Do not use for other activities located on beaches.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "beautysalon",
    definition:
      "Businesses specializing in manicures, pedicures, and nail enhancement services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "beautyspas",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bedbreakfast",
    definition:
      "Typically a small lodging or house where overnight rooms are available and breakfast is provided. As usually private or family homes, they should not be used in conjunction with the hotel or resort category.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "beerbar",
    definition:
      "A venue where their primary business is serving beer to the public.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "beergarden",
    definition:
      "An outdoor area in which beer and local food are served, typically at shared tables.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "beerhall",
    definition: "A large pub that specializing in beer.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "beerwineandspirits",
    definition: "Retail shops selling beer, wine, and spirits.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "beerwinespirits",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "beisl",
    definition: "A traditional Austrian restaurant.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "belgian",
    definition: "An establishment specializing in Belgian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "belgian.flemish",
    definition: "A restaurant specializing in Flemish cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bengali",
    definition:
      "A food establishment specializing in cuisine from Bengal, a region in the eastern part of the Indian subcontinent, which is now divided between Bangladesh and West Bengal. Bengali cuisine consists primarily of fish, vegetables and lentils served with rice and is known for its subtle yet sometimes fiery flavors.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "beveragestore",
    definition: "A business that sells alcoholic and non-alcoholic beverages.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bicycle.repair",
    definition:
      "A business that offers repair and maintenance services for bicycles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bicyclerental",
    definition:
      "Businesses offering the temporary use of bicycles for a fee. For Party Bike Rentalservicess, use eventservices.partybikerentalservicess.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bicycleshop",
    definition:
      "A business that sells bicycles, accessories and components and offers repair services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bikesandequipment",
    definition:
      "A store offering bicycles and cycling equipment such as helmets and apparel.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "billingservices",
    definition:
      "A business or individual specializing in submitting and following up on medical claims with health insurance companies in order to receive payment for services rendered by a healthcare provider. This category is intended for medical billing services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bingo",
    definition: "Facilities where groups of people gather to play bingo.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "biryani",
    definition:
      "A restaurant specializing in Biryani, defined by the region of its origin. Popular variants of biryani in include the Hyderabadi Biryani, Chettinad Biryani, Malabar Biryani and the Awadhi Biryani.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bistro",
    definition:
      "A small restaurant, serving moderately priced simple meals in a modest setting.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "blacksea",
    definition:
      "A restaurant specializing in the cuisine of the Black Sea region.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "blinds",
    definition:
      "A business that provides and services the blinds and shades of windows.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "blooddonation",
    definition:
      "An organization where individuals can donate blood or plasma. Can also be used for blood banks.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "blooddonationcenter",
    definition:
      "A facility where a person voluntarily has his blood drawn which is used for transfusions and/or made into biopharmaceutical medications. The category includes permanent facilities as well as mobile sites such as “Bloodmobiles”.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bodycontouring",
    definition:
      "An establishment which specializes in procedures that alter the shape of the human body, such as procedures that eliminate or reduce excess skin and fat that remains after previously obese individuals have lost a significant amount of weight, in a variety of places including the torso, upper arms, chest, and thighs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bodypiercing",
    definition: "Businesses specializing in piercing of the body.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "books",
    definition: "A business specializing in the sale of books",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "booksmagazinesmusicvideo",
    definition:
      "A business specializing in the sale of books, magazines, music, video and related media",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "botanicalgarden",
    definition: "Grounds which display ornamental plants and flora.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bowlingalley",
    definition:
      "Bowling alleys. Do not use for vendors or retailers of bowling products.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "boxing",
    definition:
      "Facilities providing boxing classes, the activity of boxing or sport of fighting with the fists.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "brazilian",
    definition: "An establishment specializing in Brazilian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "brazilian.centralbrazil",
    definition: "A restaurant specializing in Central Brazilian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "brazilian.empanadas",
    definition:
      "A restaurant specializing in Brazilian-style stuffed bread or pastry baked or fried.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "brazilian.northeasternbrazil",
    definition: "A restaurant specializing in Northeastern Brazilian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "brazilian.northernbrazil",
    definition: "A restaurant specializing in Northern Brazilian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "breakfastandbrunch",
    definition: "An establishment open for breakfast/brunch and offering food",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "brewery",
    definition:
      "Businesses that produce and sell beers and ales; some breweries also serve food in a restaurant setting.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "brewpub",
    definition:
      "An establishment selling beer brewed on the premises and often including a restaurant.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bridalstore",
    definition:
      "A business specializing in the wedding dresses and associated accessories for the bridal party for a wedding.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "british",
    definition: "An establishment specializing in traditional English cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bubbletea",
    definition:
      "Shops specializing in the sale of boba milk tea, also known as pearl milk tea, a Taiwanese tea-based drink containing a tea base mixed with fruit or milk. Ice-blended versions are typically mixed with fruit or syrup, creating a slushy consistency. Most contain small chewy tapioca balls.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "buffet",
    definition:
      "An establishment specializing in serving food where customers have to dish up their own meals. Often it is pay for a seat rather than à la carte style of service.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "buildingsupplies",
    definition:
      "Businesses that sell construction materials such as bricks, lumber and/or tiles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bulgarian",
    definition: "A restaurant specializing in Bulgarian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bulkmedicalbilling",
    definition:
      "A business offering payment options under the Medicare system of universal health insurance in Australia.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "bungeejumping",
    definition:
      "A business that offers an activity that involves jumping from a tall structure while connected to a large elastic cord.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "burgers",
    definition: "An establishment specializing in serving burgers",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "burmese",
    definition:
      "An establishment specializing in Burmese cuisine. (Burma is now known as Myanmar)",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "businesscampus",
    definition:
      "A collection of multiple commercial buildings where business is operated from them",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "businessconsulting",
    definition:
      "A person or business who offer their expertise in improving other businesses operations",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "busrental",
    definition:
      "A business specializing in offering the lease of large motor vehicle, having a long body, equipped with seats or benches for passengers, usually operating as part of a scheduled service.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "busstop",
    definition:
      "A designated place where buses stop for passengers to board or alight from a bus.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "butcher",
    definition:
      "Businesses specializing in the butchering and preparation of meats.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "butcher",
    definition:
      "Businesses that slaughter animals, dress their flesh, sell their meat, or do any combination of the three.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cabinets",
    definition:
      "Businesses or individuals specializing in cabinet making, installation and/or servicing.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cafe",
    definition:
      "An establishment serving food, typically in a more relaxed environment than a traditional restaurant. Usually open for lunch rather than dinner. Please note that Cafe is a very general moniker and as such something with Cafe in the name does not not mean it has to be in this category.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cafeteria",
    definition:
      "An establishment serving food, typically in a space where customers order and collect their food and take it to a cashier to pay for it prior to eating it. The space also has seating just beyond this area. Do not confuse with a Cafe or Coffee & Tea categories.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cajun",
    definition:
      "An establishment specializing in cuisine that originated from the region around the Bayou area of the Gulf of Mexico and in particular New Orleans.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cakes",
    definition: "A business that sells sweet, baked, breadlike food.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "calligraphy",
    definition:
      "A business or individual who specializes in the art of writing and/or teaching calligraphy.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cambodian",
    definition: "An establishment specializing in Cambodian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "canadian.modern",
    definition:
      "A restaurant specializing in contemporary Canadian cuisine which may include fusions with other culinary traditions.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "candy",
    definition:
      "Stores specializing in the sale of confections, chocolates, and candy.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "candy.dagashi",
    definition:
      "A store that primarily sells dagashi, cheap candies and snack foods that can generally be bought for between 5 and 10 yen. Most dagashi are packaged in bright, childish wrapping and sometimes come with a small toy or prize. Note: a store that sells dagashi is called a dagashiya).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cannabisdispensary",
    definition:
      "A store permitted to sell legal medical or recreational cannabis. Generally speaking, customers need a referral from a medical professional in order to purchase from a cannabis dispensary.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "canteen",
    definition:
      "A type of food service location in which there is little or no waiting staff table service, whether a restaurant or within an institution such as a large office building or school.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cardioclasses",
    definition:
      "Classes emphasizing cardio exercise (aerobics), such as stairclimbing, jumping jacks, or elliptical training.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cardiology",
    definition: "Doctors specializing in the functions of the heart.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cards.stationery",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "careercounseling",
    definition:
      "A person or business who offers help and guidance in choosing a career or selecting career opportunities",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "caribbean",
    definition: "An establishment specializing in Caribbean cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "caricaturist",
    definition:
      "Individuals specializing in the creation of stylized drawings of people, often at fairs or other large events.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "carouselride",
    definition:
      "A carousel, roundabout, or merry-go-round, is an amusement ride consisting of a rotating circular platform with seats for riders.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "carpet",
    definition:
      "A retail establishment or showroom for the viewing and sale of carpets.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "carrental",
    definition:
      "A business that rents and leases motor vehicles. Businesses that rent trucks for moving and related purposes should be categorized under truck rentalservices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "carrental",
    definition:
      "Models the presence and approximate point location or thematic extent of an open or semi-enclosed environment of a space containing one or more car rental operation.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "catering",
    definition:
      "Businesses specializing in the preparation, delivery, and serving of food for events. Should be used primarily for businesses that cater exclusively. If the business is a restaurant, food truck, or deli, use the Catering attribute.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cellphoneaccessories",
    definition:
      "A business that sells mobile phone accessories such as cases, cables, screens, etc. Not to be confused with stores that sell phones.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "challengecourse",
    definition:
      "Facilities offering physically demanding obstacle courses, usually outdoors, for the purpose of team building. Includes zipline tours and rope courses.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "champagnebar",
    definition:
      "A venue where their primary business is serving champagne to the public.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cheese",
    definition:
      "Businesses that specialize in the sale of specialty cheese or dairy products.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cheesesteaks",
    definition: "An establishment specializing in Cheesesteaks.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chickenshop",
    definition:
      "An establishment specializing in cooking chicken, typically takeaway service.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chickenwings",
    definition: "An establishment specializing in serving chicken wings.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "childbirthschool",
    definition:
      "Individuals or businesses specializing in the education of new mothers and their partners, or other individuals invited to the child-birthing process, usually in a class setting.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "childcare",
    definition:
      "A facility or service that watches over and cares for children, usually for regularly scheduled intervals and at a location other than a family's home.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chilean",
    definition: "A restaurant specializing in Chilean cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chimneycakes",
    definition:
      "A business that specializes in chimney cakes, which are hollow, cylindrical-shaped, bread-like pastries baked on a spit over an open flame. The crust is crispy and the surface of the cake is golden-brown color and is often topped with ingredients such as ground walnut or powdered cinnamon. (Note: known as Kürtőskalács in Hungarian or Trdelní in Czech.)",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese",
    definition: "An establishment specializing in Chinese cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.cantonese",
    definition: "An establishment specializing in Cantonese cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.dimsum",
    definition: "What tapas is to Spanish food, dim sum is to Chinese food.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.fuzhou",
    definition: "A restaurant specializing in Fuzhou cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.hainan",
    definition:
      "A restaurant specializing in Hainan cuisine, which is derived from the cooking styles of the peoples of Hainan province in China. The food is usually lighter, less oily, and more mildly seasoned than that of the Chinese mainland. Seafood predominates the menu, as shrimp, crab, and freshwater and ocean fish are widely available. Well known dishes include Hainan chicken rice, Hainan breakfast noodles, wenchang chicken, jiaji duck, and hele crab.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.hakka",
    definition: "A restaurant specializing in Hakka cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.henghwa",
    definition: "A restaurant specializing in Heng Hwa cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.hokkien",
    definition:
      "A restaurant specializing in a dish in Malaysian and Singaporean cuisine that has its origins in the cuisine of China's Fujian (Hokkien) province. In its most common form, the dish consists of egg noodles and rice noodles stir-fried.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.hunan",
    definition:
      "An establishment serving Hunan cuisine, also known as Xiang cuisine, consists of the cuisines of the Xiang River region, Dongting Lake, and western Hunan province in China",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.pekinese",
    definition:
      "An establishment specializing in Pekinese cuisine, a regional Chinese cuisine from Beijing",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.shanghainese",
    definition: "An establishment specializing in cuisine from Shanghai.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.szechuan",
    definition: "An establishment specializing in Szechuan cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinese.teochew",
    definition:
      "Teochew cuisine is a regional Chinese cuisine, also known as Chiuchow cuisine, Chaozhou cuisine or Chaoshan cuisine, originated from the Chaoshan region in the east of Guangdong province, China.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chinesebazaar",
    definition:
      "A marketplace of many vendors offering goods and services associated with China and Chinese culture.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chiropractic",
    definition:
      "A business or professional offering services related to the care and treatment of disorders and injuries of the skeleton and muscles",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "chocolate",
    definition: "Businesses that specialize in the production of chocolate.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "christmastrees",
    definition: "A store that primarily sells Christmas trees",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "churros",
    definition: "A business that sells fried-dough pastry-based snacks.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cider",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cigarbar",
    definition:
      "A cigar bar (or lounge) is an establishment that caters to patrons who smoke cigars.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cinema",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cityhall",
    definition: "Administration building of a municiple government.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "climbing",
    definition:
      "Outdoor climbing locations, or facilities designed for indoor rock climbing.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "clinic",
    definition:
      "An outpatient healthcare facility, usually providing primary care. A medical practice can be considered a clinic. Not to be confused with hospital departments.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "clockrepair",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "clothing",
    definition: "General clothing category",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "clothing.bespoke",
    definition: "A business specializing in tailor made clothing and footwear.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "clothing.childrens",
    definition:
      "A business specializing in the sale of clothing for young children",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "clothing.mens",
    definition: "A business specializing in mens fashion",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "clothing.plussize",
    definition: "A business specializing in apparel designed for larger people",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "clothing.womens",
    definition: "A business specializing in womens fashion",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cocktailbar",
    definition:
      "A venue where their primary business is serving cocktails to the public.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "coffee",
    definition:
      "Businesses that specialize in the sale of tea and coffee. Do not use for food establishments with only a handful of tea or coffee drinks.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "coffee.tea",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "coffeeroaster",
    definition:
      "A business that roasts and sells its own coffee beans and usually serves coffee drinks onsite as well. Often times coffee roasteries will have roasting equipment on site.Ê",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "coffeeteasupplies",
    definition:
      "A business specializing in equipment and accessories for brewing coffee and/or tea.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "coincashingkiosk",
    definition: "A kiosk or machine where one can convert coins into cash",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "college",
    definition:
      "Post-secondary educational institutions offering courses of specialized study in a variety of subjects.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "colombian",
    definition: "An establishment specializing in Colombian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "comedyclub",
    definition:
      "A venue with a performance space that primarily hosts comedians",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "comfortfood",
    definition:
      "An establishment serving typically simple nostalgic food. Usually this is American style, but will differ culture to culture.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "comicbooks",
    definition:
      "A business specializing in the sale of comic books, graphic novels and associated paraphernalia",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "commercialrealestate",
    definition:
      "A complex or building used for commercial use which includes offices and retail shops.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "commissionedartists",
    definition:
      "An individual who creates artwork for others, either on commission or as a product.Ê",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "communitybookbox",
    definition:
      'A free community book exchange where anybody can take a book and leave a book from a box typically located outside residences or by the curb. These boxes full of books are commonly known as "Little Free Library".',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "communitycenter",
    definition:
      "A space maintained by the local community, that is host to social, educational and recreational activities.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "computersandaccessories",
    definition:
      "A business that sells computer hardware. This includes complete computers, laptops and tablets, as well as computer parts and accessories.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "conceptshop",
    definition:
      "A store, generally in the fashion industry, that does not specialize in a specific type of product but rather offers a range of products that appeal to a particular type of life style, social scene or segment of consumers.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "concourse",
    definition:
      "A large open area inside or in front of a public building, as in an airport or train station.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "concourse",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a concourse.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "condominium",
    definition:
      "A building or complex of buildings where specified units of the property are separately owned, and the remainder of the property is collectively owned; people buy the individual housing units and have access to common facilities such as hallways, heating system, elevators, exterior areas, and other amenities, which are governed and managed by a homeowners association. Commonly known as condos. Not to be confused with Apartments, which are individually rented (not owned) and are managed by either the landlord or a property management company.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "congee",
    definition:
      "A restaurant specializing in a type of rice porridge or gruel popular in many Asian countries.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "constructionequipmentrental",
    definition:
      "A business that rent tools, equipment and machines for construction and utility purposes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "contractors",
    definition:
      "A business or individual that coordinates and manages the materials, labor, equipment and services of major construction projects including home construction and remodeling.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "conveniencestore",
    definition: "Small stores selling snacks, small food items, and sundries.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "conveyorsushi",
    definition:
      "A type of sushi restaurant where the plates with the sushi are placed on a rotating conveyor belt or moat that winds through the restaurant and moves past every table and counter seat.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cooking.instruction",
    definition: "A service offering classes on how to cook.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cookingschool",
    definition:
      "Schools specializing in teaching cooking and culinary technique. Do not use for independent cooking classes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "copyshop",
    definition:
      "A store offering personal and commercial printing and photocopying services",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "corporateheadquarters",
    definition:
      "The main offices of a corporation where most, if not all, of the important functions of an organization are coordinated.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "corporateoffices",
    definition:
      "A building that belongs to or is leased by a corporation to provide office space and office amenities. Unlike other types of offices (eg. doctor's office), corporate facilities often have restricted access and non-employees are typically allowed in by appointment only.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "corsican",
    definition: "An establishment specializing in Corsican cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cosmetics",
    definition:
      "Businesses specializing in the sale of products such as cosmetics, shampoo, and hair styling.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cosmeticsurgery",
    definition:
      "Doctors specializing in enhancing or repairing the physical appearance, typically with procedures such as facelifts, breast augmentations, and nose reshaping.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cosmetologyschool",
    definition:
      "Businesses specializing in teaching the art of body and hair beautification. If the school offers another service, it should be given a separate listing.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "costumes",
    definition: "A store that sells or rents out costumes",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "countertopinstallation",
    definition:
      "A business or individual providing countertop installation and expertise.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "countryclub",
    definition:
      "Clubs providing sports facilities and amenities, often requiring paid membership. Examples include golf, tennis, and squash, as well as social clubs (cafes, halls, ballrooms, and groups).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "courier",
    definition:
      "A business or individual that delivers goods or messages. Couriers are distinguished from general mail and shipping services by such features as speed, security, tracking, specialization and individualization of express services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "crepes",
    definition:
      "An establishment specializing in crepes, be it the sweet and/or savory varieties.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cryotherapy",
    definition:
      "A medical technique that uses extreme low temperatures to destroy cells and is often used to treat a variety of benign and malignant tissue damage (lesions). The surgical version of this treatment is known as cryosurgery. This category can also be used for medical spas or athletic training facilities that offer whole body cryotherapy (or systemic cryotherapy), which is an alternative treatment that involves exposing individuals to extremely cold dry air for two to four minutes to fight aging, inflammation, uneven skin tone, and physical maladies. Many athletes use cryotherapy treatment to alleviate delayed onset muscle soreness after exercise.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cuban",
    definition: "An establishment specializing in Cuban cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "culturalcenter",
    definition:
      "Facilities or organizations dedicated to the promotion of culture and the arts.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cupcakes",
    definition: "Businesses that specialize in the sale of cupcakes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "currencyexchange",
    definition:
      "Businesses that exchange currency, usually for international travelers.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "customcakes",
    definition:
      "A business or individual specializing in making cakes per the customer's request. Common examples include cakes with pictures on it, cakes that resemble an object (e.g. a purse, a basketball, tennis shoes, an animal, etc.), or themed cakes (e.g. princess theme, Hello Kitty, vampire, Star Wars, etc.) These custom cakes are typically one-of-a-kind and require advance notice; customized cakes cannot be found readily available at a cake shop. This category should not be used as an attribute for bakeries that offer a custom cake option; this is for businesses whose core competency is making custom cakes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "custommerchandise",
    definition:
      "A company offering to create customized items and apparel for other companies or events.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cyclingclass",
    definition:
      "Group classes where participants are instructed to ride stationary bikes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "cypriot",
    definition: "An establishment specializing in Cypriot cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "czech",
    definition:
      "An establishment specializing in cuisine from the Czech Republic.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "danceclub",
    definition:
      "Also known as a nightclub, this is an entertainment focused venue that focuses on music and dancing. Typically operating late into the night.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "danceschool",
    definition:
      "Schools or individual instructors that specialize in dancing and the techniques of movement.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dancestudio",
    definition:
      "Facilities teaching dance and providing dance classes; considered less formal than a dance school.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dancewear",
    definition:
      "A store that primarily sells clothing and accessories intended for dancing.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "danish",
    definition: "An establishment specializing in Danish cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "datarecovery",
    definition:
      "A business or individual that specializes in the recovery of digital data when it cannot be accessed under normal circumstances including from damaged or malfunctioning storage devices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dayspa",
    definition:
      "Businesses offering traditional and alternative spa treatments such as Boxtox injections, chemical peels, laser hair removals, and cellulite and vain treatments.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dealer.usedvehicle",
    definition: "A business that primarily sells used/pre-owned vehicles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "delicatessen",
    definition:
      "An establishment specializing in cured meats, sometimes also selling made to order sandwiches and salads.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "delicatessen.sandwiches",
    definition: "A business where prepared foods are sold.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dentalhygiene",
    definition:
      "Health professionals that clean teeth, examine patients for signs of oral diseases such as gingivitis, and provide other preventive dental care.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dentistry",
    definition:
      "Not to be used as category. Practices and professionals of general dentistry should be listed under general dentistry.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dentistry.cosmetic",
    definition:
      "A clinic offering dental work that improves the appearance of a person's teeth, gums and/or bite. Can include services such as bleaching and porcelain veneers.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dentistry.general",
    definition:
      "A clinic or dentist offering regular checkup and all-ages service, such as cleanings, crowns and bridges, and gum disease treatment.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dentistry.pediatric",
    definition:
      "A dentist or clinic that specializes in the dental care and oral health of children",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "departmentstore",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dermatology",
    definition: "Doctors that specialize in skin problems.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "desserts",
    definition:
      "Businesses that specialize in the sale of specialty desserts such as pastries, cakes and ice cream.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "diagnosticimaging",
    definition:
      "Businesses providing technologies that doctors use to look inside patients' bodies for clues about a medical condition, e.g. MRI, Dedicated Extremity MRI, CT (Catscan), Ultrasound, Digital Mammography, Breast MRI, MRI Guided Biopsy, Stereotactic Breast Biopsy, DEXA Scan (Bone Densitometry), X-ray, Fluoroscopy, and Creatinine Lab Services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "diagnosticservices",
    definition:
      "Businesses that provide both lab testing and diagnostic imaging. If services are limited more to one than the other, categorize more specifically using the definitions below.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dialysis",
    definition:
      "Clinics that specialize in dialysis, a procedure that cleans the blood of people with kidney disease or kidney failure.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dietician",
    definition:
      "A qualified health professional who helps promote good health through proper nutritional habits. A dietician is an expert in prescribing therapeutic nutrition. Unlike a nutritionist, dietitians must meet certain educational and training qualifications.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "digitizingservices",
    definition:
      "A business specializing in converting information and/or analog media into digital formats (e.g. scanning paper documents, transferring film negatives, slides, and traditional paper photos to digital files, transferring a VHS video to a DVD, converting your audio cassettes into digital formats, etc.). Digitizing information makes it easier to preserve, access, and share text, audio, video, and/or graphics over the Internet or on digital electronic devices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "diner",
    definition:
      "An establishment somewhere between a cafe and a restaurant. Generally has a counter, and wait staff, food is American and offers late operating hours.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dinnertheater",
    definition:
      "A form of entertainment that combines a restaurant meal with a live performance (musical/play/dance/etc). Sometimes the play is incidental entertainment, secondary to the meal, in the style of a sophisticated night club, or the play may be a major production with dinner less important. A dinner theater typically requires the management of three distinct entities: a live theater, a restaurant, and usually, a bar.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "discountstore",
    definition:
      "A business specializing in the sale of items at a much cheaper rate than elsewhere",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "distillery",
    definition:
      "Businesses that produce and sell distilled spirits, e.g. vodka, gin, and rum.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "divebar",
    definition:
      "A bar that offers a basic but comfortable drinking experience. usually, a local neighborhood bar.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "diyfood",
    definition:
      'Businesses providing "take and bake" meals, meals that are pre-prepared or frozen, that the consumer typically cooks or reheats. Do not use for Food Delivery Services.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dmv",
    definition:
      "A government department that deals with vehicular licensing and registration",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dominican",
    definition:
      "An establishment specializing in cuisine from the Dominican Republic.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "donair",
    definition:
      "A restaurant specializing in a dish made of meat cooked on a vertical rotisserie.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "donationcenter",
    definition: "A facility where people can drop off donations.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "donuts",
    definition: "Shops that specialize in the sale of donuts.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "doorsalesandinstallation",
    definition:
      "Businesses or individuals with a specialization in door sales and installation",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "drivingrange",
    definition:
      "An area where golfers can practice their golf swing. It can be either indoor or outdoor. Synonyms: golf range, practice range or learning center.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "drivingschool",
    definition: "Businesses specializing in driving instruction.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "drycleaning",
    definition:
      "A business specializing in the cleaning process for clothing and textiles using a chemical solvent other than water.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "drycleaninglaundry",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dumplings",
    definition:
      "An establishment specializing in dumplings, a dish that consists of small pieces of dough (made from a variety of starch sources), often wrapped around a filling (as in ravioli or wontons). The dough can be based on bread, flour, or potatoes, and may be filled with fish, meat, sweets, or vegetables. They may be cooked by boiling, frying, simmering, or steaming. Dumplings may be savoury or sweet and can be eaten by themselves, with gravy or sauce, or in soups or stews.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dumpsterrental",
    definition:
      "A business that rents out a variety of recycling and trash dumpster containers. Typically, these businesses will drop off the dumpster at the client's location and then return at a later time to haul it away/empty it. Unlike Junk Removal & Hauling, dumpster rentalservices companies do not help the client do any actual cleaning and they leave the dumpster with the client for use. Most people rent dumpsters for construction projects and cleanouts.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "dutyfree",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment where a pedestrian may purchase duty free goods and services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "earnosethroat",
    definition:
      "Doctors that specialize in ear, nasal, and respiratory problems. Often called ENTs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "easterneuropean",
    definition: "An establishment specializing in cuisine from eastern Europe",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "eatertainment",
    definition:
      "An establishment specializing in experiences which combine eating with entertainment; specifically the sector of the restaurant industry comprising restaurant chains based on an entertainment theme, such as sport, music, or film.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "editorialservices",
    definition:
      "A person or business who offers assistance in terms of editing documents",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "education",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "educationservices",
    definition:
      "Businesses providing educational planning and counseling services. Can be used for businesses providing college placement advice.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "egyptian",
    definition: "An establishment specializing in Egyptian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "electricians",
    definition:
      "A business or professional providing electrical services such as wiring and testing. Electricians may specialize in the servicing of equipment and machines in addition to work on residential or commercial buildings.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "electronicappliances",
    definition:
      "A business specializing in the sale of electronics and electrical appliances like TVs and radios.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "electronicparts",
    definition:
      "A business specializing in the sale of electronic components such as semiconductors, vacuum tubes, resistors and capacitors.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "electronicsrepair",
    definition:
      "A business or individual specializing in the repair and troubleshooting of electronics and electrical devices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "elementaryschool",
    definition: "Primary schools generally for children ages 4-12.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "embroiderycrochet",
    definition:
      "A business specializing in the sale of supplies for embroidery and crocheting.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "emergencymedicine",
    definition:
      "A doctor/professional specializing in the care of critically ill patients.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "emissionstesting",
    definition: "Businesses that test automobile emission standards.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "empanadas",
    definition:
      "Food establishments specializing in empanadas, a pastry filled with a variety of stuffings.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "employmentagency",
    definition:
      "A person or business that connect job seekers with job openings",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "endodontics",
    definition:
      'A clinic or dentist specializing in the treatment of dental pulp. Endodontists perform a variety of procedures including "root canal therapy" and the treatment of cracked teeth or dental trauma.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "engraving",
    definition:
      "A business or individual that offers engraving services by incising or cutting grooves into the surface of certain materials to form designs or text.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "escapegame",
    definition:
      "Games providing an entertaining challenge to escape from a room or other enclosed area using clues and logic.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "ethiopian",
    definition: "An establishment specializing in Ethiopian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "ethnicgrocerystore",
    definition:
      "Grocery stores specializing in the sale of groceries and household goods imported from one particular country or region.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "ethnicgrocerystore",
    definition:
      "Retail shops specializing in international food products, which can be either imported from places around the world or made by the business, e.g. an ethnic food store might sell either imported tofu or tofu made by the business. Do not use for shops that also sell household items such as cleaning supplies and shampoo.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "european.modern",
    definition:
      "An establishment specializing in contemporary European cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "eventplanning",
    definition:
      "Businesses or individuals that specialize in planning and coordinating all necessary components of an event, ceremony, or competition.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "eventspace",
    definition: "Locations for event hosting, ceremonies, shows, or parties.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "experiences",
    definition:
      "The knowledge or mastery of an event or subject gained through involvement in or exposure to it.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "eyelashes",
    definition:
      "Businesses specializing in the enhancement of eyelashes and false extensions.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "eyewear.opticians",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fabricstore",
    definition: "A business specializing in the sale of supplies of fabric",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fairground",
    definition:
      "An outside area dedicated to hosting the fair, carnival, etc.  May include pig racing, horse racing. Rides, food, beverages, arcade games, etc, can be found.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "falafel",
    definition: "An establishment specializing in falafel dishes",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "familyfriendly",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "familyfuncenter",
    definition:
      "Includes such entities as: Arcades, Miniature golf courses, Go-kart race courses, alpine sides, rope courses, etc.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "familymedicine",
    definition:
      "Primary healthcare division that provides continuing and comprehensive care for people of all ages, usually in the context of the patient's family and community. Frequently interchangeable with General Practice.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "familyplanning",
    definition:
      "An establishment that offers health information and clinical services for couples in a committed relationships based on factors involved in deciding if and when to have children.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "familyrestaurant",
    definition:
      "Also known as famiresu, family restaurants are a type of restaurant found in Japan, usually belonging to a chain and serving a wide variety of food types including Japanese, Chinese and Wester. They are usually fairly large with spaciously arranged tables, often open 24-hours per day and less expensive than more formal restaurants.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "farm",
    definition:
      "Businesses located on a plot of land dedicated to food production.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "farmersmarket",
    definition:
      "Markets that host local food merchants, typically in an open-air public environment.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fashion",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fashionaccessories",
    definition:
      "A business specializing in the sale of fashion accessories, like bags, gloves, belts, scarves etc.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fastfood",
    definition:
      "An establishment specializing in food prepared quickly, of relatively low cost and quality. Main examples would be McDonald's and KFC",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fencing",
    definition:
      "Clubs or locations where fencing is played, a sport played using sword-like weapons and protective gear. Do no use for fences and gates. For fences and gates, use homeservices/fencesgates.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fengshui",
    definition:
      "A business (often an individual) specializing in feng shui, the Chinese art of determining the most propitious design, orientation, and placement of objects and structures (e.g. graves, buildings, houses, room, parks, etc.) to achieve maximum harmony between the environment's flow of energy (qi or chi) and that of the  occupant/user, which is believed to bring good fortune and health. Feng shui in/at a given place typically changes periodically and feng shui masters may tell its customers to rearrange furniture, place certain objects at specific locations, sleep in certain areas of a room, or to anticipate unwanted events.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "ferry",
    definition:
      "A boat or ship (a merchant vessel) used to carry (or ferry) primarily passengers, and sometimes vehicles and cargo as well, across a body of water.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fieldofplay",
    definition:
      "Intramural sports or recreational fields usually found on college/university campus.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fieldofplay",
    definition:
      "Models the presence and approximate point location of a sports field.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fieldofplay",
    definition:
      "Models the presence and physical extent of an area used to play sports.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "filipino",
    definition: "An establishment specializing in cuisine from the Philippines",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "financialservices",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fingerprinting",
    definition:
      "A business that offers fingerprinting service, which is taking ink records of a fingerprint, usually for identity-related purposes",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "firearmstrainingschool",
    definition: "Businesses providing classes on the use of firearms.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fish",
    definition: "A wholesaler or retailer who sells raw fish and seafood.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fishandchips",
    definition:
      "An establishment specializing in deep fried fish and hot chips, although not limited to just that. Generally take-away service but may have limited seating as well.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fitnessbootcamp",
    definition:
      "Disciplined workout regimes usually held in group classes at fitness facilities or outdoor venues, including parks.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fitnessequipment",
    definition: "A business specializing in in the sale of fitness eqipment.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fitnessinstruction",
    definition:
      "Individuals or organizations specializing in the education or instruction of clients in physical activities.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fixedbaseoperator",
    definition:
      "Fixed Base Operator, referred to as FBO, is a commercial business licensed to operate on airport grounds to provide services such as fueling, hangaring, tie-down and parking, aircraft rentalservices, aircraft maintenance, and flight instruction.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "flatbread",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "flightinstructionschool",
    definition: "Schools providing pilot training and aircraft instruction.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "floatspa",
    definition:
      "A spa offering floating, an alternative therapy in which an individual floats weightlessly in a dense saline solution for pain/stress relief and meditative/relaxation purposes. Also referred as salt therapy.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "flooringinstallationandrepair",
    definition:
      "Businesses or individuals with a specialization in flooring installation and repair",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "floraldesign",
    definition:
      "An establishment which specializes in the art of using plant materials and flowers to create a pleasing and balanced composition.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "florist",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "florists",
    definition: "A business that primarily sells flowers",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "flowers",
    definition:
      "A business specializing in in the sale of flowers and other assorted gifts",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fondue",
    definition: "An establishment specializing in fondue",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "foodcourt",
    definition:
      "A location serving several types of food from different outlets usually with a common seating area",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "foodcourt",
    definition:
      "An open-air complex housing many stalls that sell a variety of inexpensive food.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fooddelivery",
    definition:
      "Businesses specializing in the delivery of food to private residences or businesses. Do not use for restaurants with a physical dine-in location, or CSAs (Community Supported Agriculture).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "foodstand",
    definition:
      "Small food operation slightly more permanent than a food cart. Usually selling only a few different items",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "foodtruck",
    definition:
      "Trucks equipped with kitchen equipment where food is typically served to on-the-go customers wanting a quick bite; can be either stationary or mobile.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "formalwear",
    definition:
      "A business specializing in formal wear, these may be to sell or rent to customers.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "formalwear.rental",
    definition:
      "A business specializing in the rentalservices of clothes, typically formal wear.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "freiduria",
    definition:
      "A restaurant specializing in fried food (fish, seafood, meat, pork, chicken, churros, etc). It is very common in Spain and in Latin America (referred as chicharr—n). Freidur’a or Nikkei are usually displayed along with/part of the biz name.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "french",
    definition: "An establishment specializing in French cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "french.alsatian",
    definition:
      "An establishment specializing in cuisine from Alsatian region of Germany",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "french.auvergnat",
    definition:
      "An establishment specializing in cuisine from Auvergant region of France",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "french.baguette",
    definition:
      "A restaurant or business specializing in long thin loafs of French bread that are commonly made from basic lean dough.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "french.berrichon",
    definition: "An establishment specializing in berrichon cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "french.bourguignon",
    definition: "A restaurant specializing in French beef stew.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "french.brasserie",
    definition: "A French establishment specializing in simple cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "french.lyonnais",
    definition:
      "A restaurant specializing in the gastronomy of the city of Lyon and surrounding region in France.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "french.nicois",
    definition: "A restaurant specializing in Nicoise cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "french.provencal",
    definition: "A restaurant specializing in Provencal cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "friterie",
    definition:
      "A restaurant or kiosk serving quick-service fast food, particularly fries.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "frozenfoods",
    definition:
      "A business specializing in food that is preserved by freezing.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fruitandvegetables",
    definition:
      "A store that sells, fruits, vegetables or both. This category is distinct from grocery stores, which also sell other items.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "fuelstation",
    definition:
      "A business that sells fuel and engine lubricants for motor vehicles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "funeralservices",
    definition:
      "A business that provides funeral or mortuary services and may also include cemeteries and other burial places.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "furclothing",
    definition: "A store that sells fur clothing",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "furniture",
    definition:
      "A shop that sells furniture, such as tables, chairs, couches, desks. The items sold are of a more general spread of purpose types, not to be confused with specialized stores like mattress stores or outdoor furniture stores.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "furniture",
    definition:
      "Models the presence and physical extent of moveable or built-in furniture and appliances. Built-in furniture/appliances includes, but is not limited to: Cabinets, office and restaurant countertops, restaurant bars, shelving, bookcases, display cases, lockers, and large kitchen appliances. Moveable furniture/appliances includes, but is not limited to: Unassigned desks/work surfaces, tables, filing cabinets, and large kitchen appliances.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "furniture.rental",
    definition:
      "A business that rents or leases home and/or office furniture, usually on a medium- to long-term basis.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "furniturestore",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "gardening",
    definition:
      "A business selling all things related to designing, growing and maintaining a garden. This includes plants, grasses, fertilizers, tools and equipment.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "gastroenterology",
    definition: "Doctors specializing the digestive system and its disorders.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "gastropubs",
    definition:
      "An establishment specializing in beer and good food. Better than usual bar cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "gelato",
    definition:
      "Businesses that specialize in the sale of gelato, an Italian ice cream.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "georgian",
    definition: "A restaurant specializing in Georgian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german",
    definition: "An establishment specializing in German cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.baden",
    definition:
      "A restaurant specializing in the cuisine from Baden, a region of southwestern Germany.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.bavarian",
    definition: "A restaurant specializing in the regional cuisine of Bavaria.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.currysausage",
    definition:
      "An establishment specializing in curried sausage, also known as Currywurst",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.easterngerman",
    definition: "A restaurant specializing in Eastern German cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.fischbroetchen",
    definition:
      "An establishment specializing in a fish sandwich made with other components like fresh white or dried onions, pickles, remoulade, creamy horseradish sauce, ketchup, or cocktail sauce",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.franconian",
    definition: "A restaurant offering Franconian cuisine (German).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.hessian",
    definition:
      "A restaurant specialized in cuisine from the German region of Hesse, which includes both the State of Hesse and the area known as Rhenish Hesse.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.heuriger",
    definition:
      "Eastern Austrian wine taverns in which specially licensed local winemakers serve their most recent year's wines for short periods following the growing season. They are renowned for their atmosphere of Gemütlichkeit (a space of warmth, friendliness, and good cheer) shared among a throng enjoying young wine, simple food, and traditional music.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.northerngerman",
    definition:
      "A restaurant specializing in Northern German cuisine, with dishes centered around boiled potatoes, rye bread, dairy products, cabbages, cucumbers, berries, jams, fish, and pork and beef.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.palatine",
    definition:
      "A restaurant specializing in the cuisine of the Palatinate, a region in Southwestern Germany occupying more than a quarter of the German federal state of Rhineland-Palatinate.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.rhinelandian",
    definition:
      "A restaurant specializing in the cuisine of the Rhineland, a region in Western Germany along the Middle and Lower Rhine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "german.swabian",
    definition:
      "A restaurant specializing in the preparation of cuisine from the region of Swabia in southwestern Germany.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "giblets",
    definition:
      "A food establishment specialized in the preparation of dishes featuring the organ meats of fowl, typically including the heart, gizzard, liver, and other visceral organs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "giftshops",
    definition:
      "A business specializing in in the sale of small gifts and presents",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "glutenfree",
    definition:
      "An establishment specializing in cuisine that does not include gluten",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "gokarting",
    definition:
      "Facilities for racing go-karts, small four-wheeled vehicles usually raced around outdoor tracks.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "goldmerchants",
    definition:
      "A business that purchases gold from customers for cash. May also accept other precious metals too.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "golf",
    definition:
      "Used for golf courses. For golf stores, use shopping.golfshops. For driving ranges, use active.golf.drivingrange.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "golf.instruction",
    definition: "Businesses or individuals that provide golf lessons.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "golfequipment",
    definition:
      "A store offering golf equipment such as clubs, apparel, and shoes",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "golfshop",
    definition:
      "A store offering golf equipment such as clubs, apparel, and shoes",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "gourmetfood",
    definition: "Stores or businesses that sell specialized or uncommon foods.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "gourmetmarket",
    definition:
      "Markets that specialize in the sale of fresh produce and fruits.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "graphicaldesign",
    definition:
      "A person or business who offers skills in creating images and text to be used in advertising and illustrations.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "greek",
    definition: "An establishment specializing in Greek cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "grillingequipment",
    definition:
      "A store that primarily sells grilling equipment, including grilling tools, utensils, and grill sets.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "grocery",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "grocery.asian",
    definition:
      "A grocery store specialized in more than one type of Asian products such that it cannot be classified under a more specific category such as Chinese Grocery or Japanese Grocery.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "grocery.chinese",
    definition:
      "Grocery stores specializing in the sale of groceries and household goods imported from China",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "grocery.indian",
    definition:
      "Grocery stores specializing in the sale of groceries and household goods imported from India",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "grocery.japanese",
    definition:
      "Grocery stores specializing in the sale of groceries and household goods imported from Japan",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "grocery.korean",
    definition:
      "Grocery stores specializing in the sale of groceries and household goods imported from Korea",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "grocery.persian",
    definition:
      "Grocery stores specializing in the sale of groceries and household goods imported from Iran",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "grocerystore",
    definition:
      "Businesses that specialize in the sale of food and household supplies.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "guitarstore",
    definition: "A store specialized in guitar sales and rentalservices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "gunrange",
    definition:
      "Facilities dedicated to the practice of shooting riles and other firearms.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "gunsandammo",
    definition:
      "A business specializing in firearms, ammunition and associated paraphernalia",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "gym",
    definition:
      'Facilities housing gym equipment such as treadmills and dumbbells for independent exercise. Do not use for individuals providing gym training programs; gyms with prominent trainer programs may be marked "Trainers" as well as "Gyms.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "gymnastics",
    definition:
      "Gyms or other facilities where the sport of gymnastics is practiced and taught. Can be used for individual or group teaching environments.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hairblowout",
    definition:
      "Businesses that specialize in blow drying hair. Do not use for general hair salons that provide haircuts and coloring.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "haircutsstyling",
    definition:
      "Businesses that specialize in haircuts, hair styling, and hair coloring.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "haircutsstyling.mens",
    definition:
      "Businesses specializing in men's haircuts in a salon atmosphere, who tend to be more exepensive than barbers.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hairextensions",
    definition:
      "Businesses offering hair extensions and treatment for hair extensions. As a child category of hair salons, hair salons also offering hair extensions can have this added as their biz attribute, but not as a category.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hairloss",
    definition:
      "Medical facilities that focus on the treatment of hair loss, including transplantation and replacement.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hairremoval",
    definition:
      "Businesses that specialize in the removal of facial or body hair through waxing or threading methods.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hairremoval.laser",
    definition:
      "Businesses that specialize in the removal of facial or body hair through waxing or light-based methods.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hairremoval.threading",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hairremoval.waxing",
    definition: "Businesses that specialize in the removal of hair using wax.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hairstylist",
    definition: "Individuals who rent chairs in salon spaces.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "haitian",
    definition: "An establishment specializing in Hatian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "halal",
    definition:
      "An establishment serving food that is in line with Islamic food practices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hardware",
    definition:
      "A business that sells tools and supplies associated with both commercial operations and home improvement projects.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hats",
    definition: "Businesses that sell items people wear on their heads",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hauntedhouse",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hawaiian",
    definition: "An establishment specializing in Hawaiian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "headshop",
    definition: "A shop focusing on marijuana and related paraphernalia",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "healthcare",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "healthcarecenter",
    definition:
      "Any facility/service providing health care but that do not fit other categories such as hospitals, emergency rooms, rehabilitation center, medical center, medical office, hospital department, long term care facility or medical research institute.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "healthyfoods",
    definition:
      "Businesses that sell health-conscious foods and goods, such as dietary supplements and organic, non-processed foods.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hearingaidproviders",
    definition:
      "Businesses providing hearing tests, selections of hearing aids, and/or hearing aid fittings.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hearingaids",
    definition:
      "A business specializing in a devices for assisting the hearing of partially deaf people, typically consisting of a small battery-powered electronic amplifier with microphone and earphone, worn by a deaf person in or behind the ear.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hennaartist",
    definition:
      "Individuals specializing in the creation of artistic designs on the skin using henna ink to create a type of temporary tattoo.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "herbalmedicine",
    definition:
      "A business that primarily sells herbs, herbal medicine, and herbal products. In Chinese herbal shops, there are often traditional Chinese medicine practitioners on site. Not to be confused with Herbs & Spices, which is for shops that sell herbs used for cooking.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "herbsandspices",
    definition:
      "Businesses that specialize in the sale of herbs and spices used for cooking.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "highschool",
    definition:
      "Second schools for individuals, generally for grades 6-12 and ages 12-18.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "himalayan",
    definition: "An establishment specializing in Himalayan/Nepalese cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hobbyshop",
    definition:
      "Specialist stores for recreational hobbies. Examples include model trains, diecast collectables, building kits, paints, collectable dolls, statues, action figures, electronic sets, remote control cars, and so on. These businesses may sell items or accessories tied to creating and modifying these items themselves.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "holidaydecorations",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "homeandgarden",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "homeappliancerepair",
    definition:
      "A business that provides services for household appliances such as delivery, sale, installation and/or repair.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "homeautomation",
    definition:
      "A business or individual with expertise in electrical and computer systems that control and integrate home features such as lights, audio, thermostats, appliances and security.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "homecleaning",
    definition:
      "Businesses that provide cleaning and detailing services for residential and commercial properties including housekeepers and maids. Should not be considered for businesses that fall under damage restoration.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "homedecor",
    definition:
      "A business selling decorative items for a house. Items like lights, pillows, art, vases, curtains, etc.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "homedevelopers",
    definition:
      "A business that specializes in building single-family residences in large-scale, master-planned communities. Some of these companies will sell the individual homes directly and manage the common areas within the built community. Some home developers will merely build the community on behalf of another company.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "homegarden",
    definition:
      "Businesses that sell items designed for use in the home or in the garden",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "homehealthcare",
    definition:
      "Health care or medical treatment provided on an ongoing basis in the patient's home, i.e. concierge services provided by doctors and nurses who visit the homes of patients.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "homeopathy",
    definition:
      "Store that specializes in the sales of homeopathy medicines. Not to the be confused with health.physicians.homeopathic for the practitioner of Homeopathic medicine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hometheaterinstallation",
    definition:
      "A business or individual with expertise in the set up and installation of audio and visual equipment, re-creating a 'movie theater' experience at home.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "honey",
    definition:
      "A business specializing in a sweet, viscid fluid produced by bees from the nectar collected from flowers.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hongkong.cafe",
    definition:
      "Also known as a cha chaan teng or tea restaurant, Hong Kong cafes are simple, quick service restaurants known for eclectic and affordable menus, which include dishes from Hong Kong cuisine and Hong Kong-style Western cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hookahbar",
    definition: "A bar that offers a hookah pipes to smoke flavored tobacco",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "horsequipment",
    definition:
      "A business selling items related to the feeding and care of horses",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hospital",
    definition:
      "Business providing a variety of forms of medical assistance, most commonly emergency services, surgical procedures, and psychiatric evaluation.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hostel",
    definition:
      "An inexpensive accommodation with shared and/or private rooms offering some guest related services and shared facilities like kitchens or game rooms.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hotdogs",
    definition: "An establishment that sells hot dogs",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hotel",
    definition:
      "Businesses providing short-term lodging, that typically have a staff that cleans and maintains rooms for its guests.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hotel.business",
    definition:
      "A commercial establishment providing lodging, meals, and other guest services that caters to business people.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hotel.capsule",
    definition:
      'A capsule hotel (カプセルホテル kapuseru hoteru), also known as a pod hotel, is a type of hotel developed in Japan that features a large number of extremely small "rooms" (capsules) intended to provide cheap, basic overnight accommodation for guests who do not require or who cannot afford the services offered by more conventional hotels.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hotelbar",
    definition:
      "An establishment that is located in a hotel and serves alcoholic beverages, such as beer, wine, liquor, cocktails, and other beverages.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hotpot",
    definition:
      "An establishment offering food in the traditional asian style known as hot pot. All ingredient are cooked single hot pot, usually by the customer at their table. The restaurant will provide the raw ingredients for the customer to cook themselves.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hottubandpool",
    definition: "A business that primarily sells pools, hot tubs, spas, etc.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "housingcooperative",
    definition:
      "A type of housing tenure where an association or corporation owns a group of housing units and the common areas for the use of all the residents. The individual participants own a share in the cooperative which entitles them to occupy an apartment (or town house) as if they were owners, to have equal access to the common areas, and to vote for members of the Board of Directors which manages the cooperative.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hungarian",
    definition: "An establishment specializing in Hungarian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "huntingfishingsupplies",
    definition:
      "A business that primarily sells fishing and hunting equipment (fishhooks, fishing rods, baits, rifles, cartridges, knives etc.).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hvac",
    definition:
      "A business or individual providing services related to ventilation, heating or air conditioning systems such as installation and repair.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "hypermarket",
    definition:
      "In commerce, a hypermarket is a superstore combining a supermarket and a department store. The result is an expansive retail facility carrying a wide range of products under one roof, including full groceries lines and general merchandise",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "iberian",
    definition: "An establishment specializing in Iberian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "icecream",
    definition:
      "Businesses that specialize in the sale of frozen yogurt and ice cream.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "importedfood",
    definition:
      "A store that primarily sells imported foods from a particular country/region such as canned foods, confections, candies, snacks, spices, jams, oils, cured meats, beverages, etc. These shops typically do not carry fresh produce/meats or a wide range of non-food items like a grocery shop does.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian",
    definition: "Restaurant specializing in Indian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.andhra",
    definition:
      "An eatery/restaurant offering Andhra food, with a good balance between vegetarian and non-vegetarian fare. Characterized by its unique tanginess and spiciness, popular food items include Gongura Mamsam, Pulihora, Pulusu, and Podi along with an assortment of pickles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.assamese",
    definition:
      "Restaurants serving assamese cuisine have generous portions of white rice, lentils, elephant apple curries, khaar, indigenous pickles, fried potatoes, fried fish and fish curry in its classic sour flavour, (roasted duck or pigeon is also an option sometimes).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.awadhi",
    definition:
      "An eatery specializing in Awadhi Cuisine, influenced largely by Central Asian and Middle Eastern cuisines. Famous for its kebabs, popular dishes include Kakori Kebabs, Galawti Kebabs, Seekh Kebabs and Awadhi Biryani.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.bihari",
    definition: "Cuisine from the Indian state of Bihar.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.chettinad",
    definition:
      "A restaurant serving Chettinad cuisine has a variety of dishes cooked in freshly ground spices and curry leaves; These dishes are mostly served with rice, dosais, idlis and idiappams (all prepared from rice).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.goan",
    definition:
      "Restaurants specializing in Goan cuisine, with a good mix of seafood, poultry and red meat. Popular dishes include Pork Vindaloo, Goan Prawn curry and the famous Goan dessert - Bibingka.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.gujarat",
    definition: "Cuisine from western India state of Gujarat.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.hyderabadi",
    definition:
      "Restaurants specializing in Hyderabadi cuisine; famous for “Hyderabadi Biryani” which traditionally has lamb as its base. Other variants of the Hyderabadi Biryani include Chicken and Prawn. Hyderabadi cuisine is also famous for desserts such as Qubani ka Meetha and Firni.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.kerala",
    definition:
      "A restaurant serving Kerala food is heavy on dishes with coconut as its base for curry. Most Kerala dishes are meat and seafood oriented. Mildly spiced dishes like meen moilee to very spicy dishes like kozhi vevichathu are served at almost all establishments (big and small).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.konkan",
    definition:
      "A restaurant serving Konkan cuisine, a conflation of cuisines from the western coastal belt of India. Heavily seasoned with different forms of coconut, Konkani fare served in restaurants are known to be spicy.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.lucknowi",
    definition:
      "A restaurant serving food which is largely influenced by the kitchens of the Nawabs of Lucknow. Popular dishes include murgh musallam, boti kebabs, warqi parantha and desserts such as Shahi Tukda.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.maharashtrian",
    definition:
      "A restaurant serving Maharashtrian fare which is largely vegetarian. Most restaurants serve the popular bhakri, vada pav, misal pav and the amti - a dish accompanied with steamed rice",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.malwani",
    definition:
      "An establishment which specializes in food from the western coastal area of India. Preparations are generally spicy with the usage of dried red chilies, peppercorns, coconut, tamarind and kokum. Popular dishes include sol kadhi, bombay duck and spicy curries served with rice.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.mangalorean",
    definition:
      "An eatery focusing on Mangalorean cuisine, which is a mix of sea-food and poultry. Most dishes are coconut based and dry red chillies are used to spice them. Rice and buttermilk are typical accompaniments for Mangalorean food.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.northindian",
    definition: "Restaurant specializing in the cuisine of northern India.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.oriya",
    definition:
      "A restaurant serving Odia cuisine is mild on the spice front and extreme on flavours. Coconut and mustard oil are primary ingredients in Odiya cooking. The coastal region has a variety of fish, mutton (maangsa jhola) prawns and lobster cooked in spices. Pakhala (cooked rice soaked in water overnight and seasoned with salt, curd and green chillies) is synonymous to Odia cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.rajasthani",
    definition:
      "Characterized by strong and fiery flavors, Rajasthani fare includes dishes such as Daal Baati Churma, Lal Maas and Gatte ki Sabzi. Most Rajasthani restaurants are also famous for their elaborate thalis filled with rice, roti, curry, sabzis (vegetable preparations) and finally desserts, comprising Rajasthani sweets.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indian.southindian",
    definition: "Restaurant specializing in the cuisine of southern India.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "indonesian",
    definition: "An establishment specializing in Indonesian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "informationtechnology",
    definition:
      "A business or individual that specializes in information technology and computer related services including troubleshooting, web design, and device repair and set-up.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "installmentloanservices",
    definition:
      "A business that provides installment loans, which are loans that are repaid over time with a set number of scheduled payments. The term of loan may be as little as a few months and as long as 30 years. Compared to payday loans, installment loans typically have bigger amounts, lower interest and fees, and longer payback times and are usually secured by collateral such as personal property. Mortgages, small biz loans, and student loans are all examples of installment loans.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "insulationinstallation",
    definition:
      "A business or individual that provides insulation related services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "insurance",
    definition:
      "Businesses or individuals representing businesses providing indemnity or financial protection for individuals or their goods.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "insurance.auto",
    definition:
      "Businesses or individuals representing businesses providing auto insurance.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "insurance.health",
    definition:
      "Offices of health insurance companies where clients can receive customer support.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "insurance.home",
    definition:
      "Businesses or individuals representing businesses providing home and/or rentalservices insurance.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "insurance.life",
    definition:
      "Businesses or individuals representing businesses providing life insurance.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "interiordesign",
    definition:
      "A business or individual that coordinates and manages the design and decoration of the interior spaces of residential and commercial properties.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "internalmedicine",
    definition:
      "Doctors specializing in the diagnosis and non-invasive treatment of illness.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "internationalfood",
    definition:
      "A restaurant or eatery featuring cuisines from all over the world.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "internetbooth",
    definition:
      "Free-standing structures intended to provide public internet access and are analogous to payphones for telephone service.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "internetcafe",
    definition:
      "Businesses providing computers for Internet access for a fee, that may also serve food and beverages.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "internetserviceprovider",
    definition:
      "Companies and other organizations that provide internet services and connections to residential and commercial properties.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "investmentbanking",
    definition:
      "Businesses that specialize in investing money on behalf of clients.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "irish",
    definition: "An establishment specializing in Irish cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "irishpub",
    definition:
      "A venue where their primary business is serving alcohol and food in a Irish setting.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "israeli",
    definition:
      "A food establishment specializing in Israeli cuisine, a cuisine giving prominence to foods common in the Mediterranean region such as olives, chickpeas, dairy products, fish, and fresh fruits and vegetables but also influenced by the culinary traditions of the global Jewish diaspora now residing in Israel.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian",
    definition: "An establishment specializing in Italian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.abruzzese",
    definition:
      "A restaurant specializing in the cuisine of Abruzzo, a region of central Italy bordering the Adriatic sea and known for its diverse cuisine of both coastal and agricultural influences.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.altoatesine",
    definition:
      "A restaurant specializing in the cuisine of South Tyrol, a German speaking region in Northern Italy. Alto Adige dishes are often hearty and include goulashes and cornmeal polenta, dumplings served with meat, as well as different types of pastas.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.apulian",
    definition:
      "A restaurant specializing in the cuisine of Apulia, a coastal region of Southern Italy. Some of the key ingredients to Apulian dishes include olive oil, artichokes, tomatoes, and mushrooms.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.calabrian",
    definition: "An establishment specializing in Calabrian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.cucinacampana",
    definition:
      "A restaurant specializing in the cuisine of Campania, a region in southern Italy, which may include pizzas, spaghettis, and other dishes relying on cheeses and fresh vegetables as well as seafood. Restaurants primarily focused on the cuisine of Naples should be listed under the Neapolitan category.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.diner",
    definition:
      'A very informal, usually small (and sometimes self-serve) food establishment offering hot and cold food that is often eaten at the counter, even though many places have tables as well. Besides the traditional Italian bar/caf_ fare (bar/caf_ as it is intended in Italy, a place selling pastries, latte, coffee, tea, etc. not food as you could have at a "Caf_" in the US), a tavola calda can serve lunch or dinner often showcasing local food, with more elaborate dishes (some of which are reheated to order) than just sandwiches or snacks. A tavola calda has a full-blown kitchen and has to comply with the health department regulations just like a regular restaurant. A tavola calda can also serve rotisserie chicken, rustic pies, pizza by the slice, and salads.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.emilian",
    definition:
      "A restaurant specializing in the cuisine of the Emilia-Romagna region of Italy, known for its egg and filled pasta made with soft wheat flour and dishes including tortellini, lasagne, gramigna and tagliatelle.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.friulan",
    definition:
      "A restaurant specializing in the cuisine of Friuli, a region of northeast Italy with stronger Central European and Slavic influences. The cuisine includes greater use of goulash, sauerkraut, sausages, potatoes and turnips than other Italian cuisines.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.lumbard",
    definition:
      "A restaurant specializing in the regional cuisine of Lombardy, heavily based upon ingredients like maize, rice, beef, pork, butter, and lard.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.napoletana",
    definition:
      "A restaurant specializing in Neapolitan cuisine, combining dishes based on rural ingredients (pasta, vegetables, cheese) and seafood dishes (fish, crustaceans, mollusks).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.norcinerie",
    definition:
      "A food establishment which serves and/or sells pig products utilizing the art of processing pork and related techniques that come from the town of Norcia, in the province of Perugia, Italy",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.piedmont",
    definition:
      "A restaurant specializing in the gastronomy of the region of Piedmont in northern Italy.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.roman",
    definition:
      "A restaurant specializing in the cuisine of Rome, which utilizes seasonal ingredients from the surrounding Roman Campagna region with preparation in a simple manner.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.sardinian",
    definition: "An establishment specializing in Sardinian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.sicilian",
    definition:
      "A restaurant specializing in the cuisine of Sicily, an Italian island in the Mediterranean Sea. While having a lot in common with Italian cuisine, Sicilian food also has Greek, Spanish, French and Arab influences.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.tuscan",
    definition: "An establishment specializing in Tuscan cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "italian.venetian",
    definition:
      "A restaurant specializing in the cuisine of Venice and the surrounding region of Veneto in Italy.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "ivhydration",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "izakaya",
    definition:
      "A type of informal Japanese gastropub, generally offering a slow pace of food ordering and serving and are casual places for after-work drinking.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese",
    definition: "An establishment specializing in Japanese cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.bento",
    definition:
      "A food establishment offering Japanese single-portion takeout or home-packed meals. Bentos traditionally hold rice, fish or meat, with pickled or cooked vegetables, and are usually served in a box-shaped container.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.blowfish",
    definition:
      "A restaurant specializing in the preparation of blowfish or fugu, a meat that must be carefully prepared to remove the toxic parts and avoid potentially lethal contamination.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.curry",
    definition:
      "A food establishment specializing in Japanese styles of curry and served in three main forms: curry rice, curry udon, and curry bread.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.donburi",
    definition:
      'A food establishment specializing in donburi, a Japanese "rice bowl dish" consisting of fish, meat, vegetables or other ingredients simmered together and served over rice.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.gyudon",
    definition:
      "A food establishment specializing in gyudon, a Japanese dish consisting of a bowl of rice topped with beef and onion simmered in a mildly sweet sauce.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.handrolls",
    definition:
      "A food establishment specializing in temaki sushi or hand rolls, a type of sushi often made at home and consists of a rolled cone of seaweed, wrapped around rice and fillings.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.horumon",
    definition:
      "A food establishment specializing in horumon, a kind of Japanese cuisine made from beef or pork offal (organ meats).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.kushikatsu",
    definition:
      "A food establishment specializing in Kushikatsu, a Japanese dish of deep-fried skewered meat and vegetables.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.nikkei",
    definition:
      "A restaurant that specializes in Nikkei cuisine, a Japanese-Peruvian fusion cuisine (and to a lesser extender, Brazilian-Japanese). It is most popular in South America and Spain and transforms Peruvian dishes using Japanese flavors and techniques and vice versa.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.oden",
    definition:
      "A food establishment specializing in oden, a Japanese winter dish consisting of several ingredients such as boiled eggs, daikon, konjac, and processed fishcakes stewed in a light, soy-flavoured dashi broth.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.okonomiyaki",
    definition:
      "A food establishment specializing in Okonomiyaki, a Japanese savory pancake containing a variety of ingredients.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.onigiri",
    definition:
      "A food establishment specializing in o-nigiri. Also known as o-musubi, nigirimeshi or rice ball, onigiri is a Japanese food made from white rice formed into triangular or cylinder shapes, filled with pickled ume, salted salmon, katsuobushi, or any other salty or sour ingredient, and often wrapped in nori (seaweed).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.oyakodon",
    definition:
      "A food establishment specializing in oyakodon, a Japanese rice bowl dish, in which chicken, egg, sliced scallion (or sometimes regular onions), and other ingredients are all simmered together in a sauce and then served on top of a large bowl of rice.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.ramen",
    definition: "An establishment specializing in Ramen",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.shabushabu",
    definition:
      "A Japanese nabemono hotpot dish of thinly sliced meat and vegetables boiled in water.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.soba",
    definition:
      "A food establishment specializing in soba, a type of Japanese thin noodle made from buckwheat flour and served either chilled with a dipping sauce, or in hot broth as a noodle soup.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.sukiyaki",
    definition:
      "A food establishment specializing in sukiyaki, a Japanese dish that is prepared and served in the nabemono (Japanese hot pot) style.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.takoyaki",
    definition:
      "A food establishment specializing in takoyaki, a ball-shaped Japanese snack made of a wheat flour-based batter, often filled with minced octopus and cooked in a special takoyaki pan.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.tempura",
    definition:
      "A food establishment specializing in tempura, a Japanese dish of seafood or vegetables that have been battered and deep fried.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.teppanyaki",
    definition:
      "An establishment specializing in food cooked on iron griddle. Typically the food is cooked at the customer table by a chef. The food is western influenced Japanese, also referred to as Hibachi.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.tonkatsu",
    definition:
      "A food establishment specializing in tonkatsu, a Japanese style fried pork cutlet.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.udon",
    definition:
      "A food establishment specializing in udon, type of Japanese thick wheat flour noodle often served hot as noodle soup.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.unagi",
    definition:
      "A food establishment specializing in the preperation of ungai or freshwater eel",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.westernjapanese",
    definition:
      "A food establishment specializing in Japanese cuisine that has been influenced by western culinary techniques and ingredients.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.yakiniku",
    definition:
      "A food establishment specializing in yakiniku, a Japanese style of grilled meats.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanese.yakitori",
    definition:
      "A food establishment specializing in yakitori, a Japanese style of grilled chicken.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "japanesesweets",
    definition: "A business specializing in Japanese desserts and sweet goods.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "jewelry",
    definition:
      "A specialist shop selling jewelry. May offer custom made jewelry.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "jewelryrepair",
    definition:
      "A business or individual specialized in jewelry repair and restoration. Should not be applied to watch repair services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "jewish",
    definition:
      "A restaurant specializing in any of the diverse collection of cooking traditions of the Jewish diaspora worldwide. Restaurants and eateries serving kosher foods but not specialized in Jewish gastronomy should be listed with the kosher category instead.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "juicebar",
    definition:
      "Businesses that specialize in the sale of smoothies and fruit and vegetable juices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kaiseki",
    definition:
      "A restaurant serving meals in the style of kaiseki, a traditional multi-course Japanese dinner. Kaiseki is analogous to Western haute cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "karaoke",
    definition:
      "Karaoke is the singing of popular songs with prerecorded backing tracks, this may be in private rooms or in front of an audience",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kashmiri",
    definition:
      "Eateries serving Kashmiri food, characterized by mild spices and rich flavors with a variety of meat preparations. Popular dishes include Rogan Josh, Yakhni and Dum Aloo. Equally popular is the Kahwah - a green tea made with saffron, spices and walnuts.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kebab",
    definition:
      "Any restaurant or eatery specializing in kebabs, typically consisting of grilled meats prepared for a variety dishes of Middle East and Central Asian origin.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kidsactivities",
    definition:
      "Outdoor and indoor establishments offering play activities for children.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kimonos",
    definition:
      "A store that sells traditional Japanese garments called Kimonos.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kindergarten",
    definition:
      "A kindergarten is a preschool educational approach traditionally based on playing, singing, practical activities such as drawing, and social interaction as part of the transition from home to school. In Japan, it is governed by the Ministry of Education, Culture, Sports, Science and Technology is run 4 hours a day for children ages 3-6.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kiosk",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kiosk.food",
    definition:
      "A booth with an open window on one side selling small, inexpensive consumables.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kitchenandbath",
    definition:
      "A business that sells items related to kitchens and bathrooms. This includes fixtures and faucets, appliances and hardware, as well as items used in those two spaces.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kitchenincubator",
    definition:
      "Shared kitchen facilities available for rent and generally utilized by caterers and other food preparation and production companies that lack their own kitchen facilities.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "knifesharpening",
    definition: "A business or individual providing knife sharpening services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "knittingsupplies",
    definition:
      "A shop that specializes in all thing knitting: yarn, needles, sewing patterns",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kopitiam",
    definition:
      "A traditional coffee shop found in Southeast Asia and patronized for meals and beverages. Menus typically feature simple offerings: a variety of foods based on egg, toast, and kaya, plus coffee, tea, and Milo, a malted chocolate drink. The kopi (coffee) is the specialty and can be ordered in a variety of ways, including extra thick, extra thin or with condensed milk.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "korean",
    definition: "An establishment specializing in Korean cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kosher",
    definition:
      "An establishment serving food that is in line with Jewish food practices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "kurdish",
    definition:
      "A restaurant specializing in the cuisine prepared by the people of Kurdistan. Staples of Kurdish cuisine include berbesel, biryani, dokliw, kullerenaske, kutilk, kuki, birinç, and a variety of salads, pastries, and drinks specific to different parts of Kurdistan.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "laboratorytesting",
    definition:
      "Medical businesses that specialize in testing samples from people, such as of blood and urine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "landmark",
    definition:
      "Items in this category are spaces and places of significance and history.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "landmark",
    definition:
      "Models the presence and approximate point location of a recognizable or substantial natural or artificial feature that is useful for pedestrian navigation or orientation.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "landscaping",
    definition:
      "A licensed professional the designs and develops the landscapes of residential and/or commercial properties.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "languageschool",
    definition:
      "Schools that specialize in providing formal exposure to foreign languages, or in the refinement of native languages.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "laotian",
    definition: "A restaurant specializing in the cuisine of Laos.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "laotian",
    definition: "An establishment specializing in Laotian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lasereyesurgery",
    definition:
      "Doctors or medical practices that perform laser eye surgery (Lasik), a procedure that reshapes the cornea and reduces the need for glasses. Most often performed by an ophthalmologist.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lasertag",
    definition:
      "Businesses or facilities where laser tag is played, indoor and outdoor recreational activity where players attempt to score points by tagging targets with hand-held infrared devices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "latinamerican",
    definition: "An establishment specializing in Latin American cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "laundromat",
    definition:
      "A fully automated and coin-operated facility where clothes are washed and dried.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "laundryservices",
    definition:
      "Businesses or locations that offer dry cleaning and laundry services or have laundry machines available for individual use.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer",
    definition:
      "An individual or business that practices law. If possible please put the business in specialized sub categories rather than this generic category",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer.business",
    definition:
      "A lawyer or law firm with expertise in legal aspects of conducting business.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer.criminaldefense",
    definition: "A lawyer or law firm with expertise in criminal defense.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer.divorce",
    definition:
      "A lawyer or law firm with expertise in divorce proceedings and other family law areas",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer.estateplanning",
    definition:
      "A lawyer or law firm with expertise in estate planning, management and transfer when a party dies.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer.immigration",
    definition: "A lawyer or law firm with expertise in immigration law.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer.litigation",
    definition:
      "A lawyer or law firm with expertise in litigation. Not a category for lawyers who practice law across multiple fields.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer.personalinjury",
    definition: "A lawyer or law firm with expertise in personal injury law",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer.realestate",
    definition: "A lawyer or law firm with expertise in real estate law.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer.tax",
    definition: "A lawyer or law firm with expertise in tax law.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer.willtrustprobate",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lawyer.workerscomp",
    definition:
      "A law office or lawyer (barrister/attorney/solicitor) who advises and represents others in legal matters pertaining to workers compensation (e.g. on-the-job accidents and occupational diseases).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "leathergoods",
    definition: "A business specializing in items made from leather",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lebanese",
    definition: "An establishment specializing in Lebanese cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "legalservices",
    definition:
      "A business or organization who provide services related to legal matters, but are not lawyers themselves.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "library",
    definition:
      "A building or room where media is collected for people to read, borrow, and reference. Traditionally this is mostly books, but may also include other media too.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "library",
    definition:
      "Models the presence and physical extent of an enclosed area containing sources of information.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lifecoach",
    definition:
      "An individual who provides motivational guidance to improve client's lives",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lighting",
    definition:
      "A business with expertise in lighting systems, including their design, installation and repair.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "ligurian",
    definition:
      "A restaurant specializing in the cuisine of Liguria, a coastal region of northwestern Italy. Ligurian cuisine is characterized by a strong use of herbs, lack of tomatoes and red or black peppers, and preparations of seafood and stuffed vegetables.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "limo",
    definition:
      "A company that provides transportation services by limousines.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "limo",
    definition:
      "Models the presence and approximate point location of a limousine service.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "linens",
    definition:
      "A business that sells fabric goods such as bedding, tablecloths and towels.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lingerie",
    definition: "A business specializing in lingerie and related accessories",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "livestocksales",
    definition:
      "An open space where people regularly gather for the purchase and sale of provisions, livestock, and/or other goods.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "localservices",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "locksmith",
    definition:
      "Businesses that offer lock installation and repair services for both properties and autos.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "lotterystand",
    definition:
      "Primarily in Japan, lotteries are sold at designated lottery stands that only sell lotteries. Can be found in other Asian countries, too.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "loungebar",
    definition:
      "A relaxed social space usually filled with lounges. Typically fancier than your average bar and more relaxed than a nightclub.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "luggage",
    definition:
      "A business that specializes in the sale of travel items like suitcases.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "luggagestorage",
    definition:
      "A staffed location where one can temporarily store one's luggage so as to not have to carry it. These are often found inside or near airports.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "macaron",
    definition:
      "Food shops specializing in macarons, a pastry made with egg whites and almond powder; not to be confused with macaroons, which are made with coconuts.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "magicians",
    definition:
      "Groups or individuals that specialize in performing magic tricks.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mailboxcenter",
    definition:
      "Businesses and locations that have PO boxes available to customers and may also include other types of commercial mail receivers.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "makeupartist",
    definition:
      "Businesses or individuals who specialize in the application of makeup, such as lipstick, blush, and eye shadow.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "malaysian",
    definition: "An establishment specializing in Malaysian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mamak",
    definition:
      "Typically a type of stall or food vendor found in Malaysia serving Mamak food. Malaysian Mamak are Malaysians of Tamil Muslim origin and thus their ingredients and techniques are a fusion of these two regions and generally don't include pork. May also be used for restaurants inspired by Mamak culinary traditions.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "manicurists",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "marketing",
    definition:
      "A business or service designed to promote products or other businesses. This includes market research and advertising.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "martialarts",
    definition:
      "Individuals or organizations offering instruction or faciitlies for the practice of martial arts (e.g. karate, kung fu, ju-jitzu, taekwondo, judo).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "massageschool",
    definition:
      "Schools specializing in the instruction of medical and therapeutic body massage techniques.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "massagetherapist",
    definition:
      "Businesses or individuals who specialize in the rubbing and kneeding of muscles and joints of the body with the hands, especially to relieve tension and for the purpose of relaxation.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "massagetherapy",
    definition:
      "Businesses providing massage for strictly medical purposes (as opposed to general relaxation). Most treatments are for carpal tunnel, fibromyalgia, spinal injuries and muscle strain.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "maternitywear",
    definition: "A business selling clothing designed for pregnant women",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mattresses",
    definition:
      "A business that specializes in the sale of beds, bed frames and mattresses.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mauritian",
    definition:
      "A restaurant that specializes in Mauritius cuisine (regional food from the Republic of Mauritius), which has strong Indian, European, French, Creole, African, and Chinese influences and is typically spicy. Common dishes/foods include curry (cari), mine-frit, niouk nien, roti, gateau piment, fruit salad, millionarie's salad, rougaille, vindaye, dholl puris, and achard.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "meatballs",
    definition: "A restaurant specializing in the preparation of meatballs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "medicalcenter",
    definition:
      "Large facilities, slightly different than hospitals, though serving many of the same purposes, where medical care is administered, typically for continuing treatment and specialized care. Do not use for small medical practices or urgent care facilities.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "medicalspa",
    definition:
      "Businesses offering multiple high-quality personal care treatments, such as massage, facials, nail care and waxing, in a relaxing atmosphere. Can be used with MedSpas in special cases.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "medicalsupplies",
    definition:
      "A business that sells medical supplies, does not offer medication, treatment or diagnosis.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mediterranean",
    definition:
      "An establishment specializing in cuisine from the Mediterranean",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mexican",
    definition: "An establishment specializing in Mexican cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mexican.easternmexican",
    definition:
      "A restaurant specializing in the cuisine of the Gulf Coast of Eastern Mexico and primarily originating from the states of Veracruz and Tabasco.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mexican.jaliscan",
    definition:
      "A restaurant specializing in cuisine from the Mexican state of Jalisco, a state whose gastronomy is known for its pozole, sopitos, menudo, guacamole, cuachala, birria, pollo a la valenciana and tortas ahogadas",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mexican.modern",
    definition:
      '**Does not mean modern Mexican cuisine; refers to the regional cuisine from the US state of New Mexico** A food establishment specializing in New Mexican cuisine, a fusion of Spanish and Mediterranean, Mexican, Pueblo Native American, and Cowboy Chuckwagon influences with red and green chiles as defining ingredients. Popular dishes include carne adovada, posole, green chile stew, calabacitas, stuffed sopapilla, and biscochitos. (Note: New Mexican food is not the same as Mexican and Tex-Mex foods preferred in Texas and Arizona. New Mexico is the only state with an official question‚"red or green?"‚ referring to the choice of red or green chile.)',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mexican.northernmexican",
    definition:
      "A restaurant specializing in the gastronomy of Northern Mexico, including the serving of grilled meats, different cheeses, and wheat tortillas.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mexican.oaxacan",
    definition:
      'A restaurant specializing in cuisine from the Mexican state of Oaxaca, a state whose gastronomy is known for its "seven moles," chapulines, Oaxaca tamales in banana leaves, tasajo and mescal.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mexican.pueblan",
    definition:
      "A restaurant specializing in cuisine from the Mexican state of Puebla, a state whose gastronomy is best known for cemitas, mole poblano, chiles en nogada and chalupas.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mexican.yucatan",
    definition:
      "A restaurant specializing in cuisine from the Yucatán peninsula in southeastern Mexico.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "middleeastern",
    definition: "An establishment specializing in cuisine from the Middle East",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "militarybase",
    definition:
      "A place used as a center of operations by the armed forces or other military forces;",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "milkbar",
    definition:
      "A suburban local general store or café, common in Australia, where people pick up milk and newspapers, and fast-food like fish and chips and hamburgers, and where people can purchase milkshakes or lollies.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "milkshakes",
    definition:
      "A counter or place where a frothy drink made of cold milk, flavoring, and usually ice cream, shaken together or blended in a mixer are sold to customers.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "minigolf",
    definition:
      "Courses designated for the sport of miniature golf, novelty form of golf focusing on putting and obstacles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mobilephonerepair",
    definition:
      "A business that specializes in mobile phone repair and related services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mobilephones",
    definition:
      "A business that primarily sells mobile phones. May also offer servicing and sell mobile phone accessories as well.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "moneytransferservices",
    definition:
      "Business or entity that facilitates the transfer of funds between individuals or businesses.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mongolian",
    definition: "An establishment specializing in Mongolian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "moroccan",
    definition: "An establishment specializing in Moroccan cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mortgagebroker",
    definition:
      "A business that serves as an intermediary between financial borrowers and lenders. The work of specific brokers varies but includes task such as marketing of financial products and services, assessment of prospective borrowers, gathering documents and completing application forms, offering advice to clients and communicating legal disclosures.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "motorcyclingclothing",
    definition:
      "A business that sells all things associated with motorcycles. Items like helmets, clothing, equipment, etc. Not to be confused with motorcycle dealers who sell motorcycles",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "movierental.kiosk",
    definition: "A movie rentalservices kiosk/box.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "mughlai",
    definition:
      "A restaurant where the menu displays delicacies like biryani, haleem, kebabs and koftas.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "museum.art",
    definition:
      "A museum specifically for art; an institution that exhibits a collection of artworks such as paintings, photographs, and sculptures. Unlike art galleries, art museums usually have permanent collections or endowments, charge entrance admission, adhere to a mission statement set forth by its founders, and do not try to sell the artworks on a regular basis. Generally speaking, an art museum is a non-profit institution and may be private or public.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "museum.children",
    definition:
      "A museum specifically for children; an institution that provides exhibits and programs to stimulate informal learning experiences for children. In contrast with traditional museums that typically have a hands-off policy regarding exhibits, children's museums feature interactive exhibits that are designed to be manipulated by children. Most children's museums are nonprofit organizations.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "museum.history",
    definition:
      "An institution that cares for (conserves) a collection of artifacts and other objects of historical importance.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "musicalinstruments",
    definition:
      "A business specializing in the sale of musical instruments and may also offer musical lessons. note that there are also special categories for specialized stores like guitar stores or piano stores.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "musicalinstrumentservices",
    definition:
      "Businesses or individuals that do not sell but provide specialized services for instruments such as tuning, transport and restoration. Should not be applied to services related to pianos as there is also a piano services category.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "musicvenue",
    definition:
      "Businesses or facilities which primarily offer live music performances and concerts. Includes bars that offer live music performances the majority of operational nights.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "musicvideo",
    definition:
      "A store specializing in the sale of music and video media (e.g. movies and tv shows)",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "naga",
    definition:
      "Restaurants serving Naga fare are heavily reliant on non-vegetarian food items, Naga food items are either fried, boiled, smoked or fermented; bamboo shoots are a common element in almost all Naga dishes. Popular dishes at Naga restaurants include smoked pork stew, bamboo steamed fish which are served with a wide variety of spicy accompaniments such as crab chili sauce and ghost chili sauce.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "nasilemak",
    definition:
      "A restaurant specializing in a Malay fragrant rice dish cooked in coconut milk and pandan leaf.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "naturopathy",
    definition:
      "Doctors specializing in natural health, typically Eastern medicine. Do not use for practitioners without an MD license for practicing holistic treatments.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "nepalese",
    definition: "Cuisine from the country of Nepal.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "newspapersandmagazines",
    definition:
      "A business specializing in the sale of newspapers and magazines",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "newzealand",
    definition: "A restaurant specializing in cuisine from New Zealand.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "nicaraguan",
    definition:
      "A restaurant specializing in Nicaraguan cuisine. Well-known Nicaraguan dishes include nacatamal, vigor—n, indio viejo, quesillo, and sopa de mondongo. Due to its geography, Nicaraguan cuisine can also incorporate Caribbean flavors.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "nightfood",
    definition:
      "A restaurant or eatery known for for operating at late hours when most other establishments have closed or offer limited food selections.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "nonprofit",
    definition:
      "An organization whose purposes is other than making a profit and generally dedicated to furthering a particular social cause or advocating for a particular point of view.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "noodles",
    definition:
      "A food establishment specializing in serving noodles, a staple food in many cultures made from unleavened dough which is stretched, extruded, or rolled flat and cut into one of a variety of shapes (e.g. waves, helices, tubes, strings, or shells). Noodles can be cooked/served in variety of ways, such as pan-fried, deep-fried, served with an accompanying sauce, or in a soup.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "northamerican.traditional",
    definition:
      "An establishment specializing in traditional American (United States) cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "norwegian",
    definition: "A restaurant specializing in Norwegian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "notarypublic",
    definition:
      "A lawyer or individual with legal training who is licensed to perform acts in legal affairs, such as witnessing signatures on documents.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "nurseries.gardening",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "nyonya",
    definition:
      "A restaurant specializing in Peranakan or Nonya cuisine. Nonya cuisine comes from early Chinese migrants who settled in Penang, Malacca, Singapore and Indonesia and generally consists of Chinese ingredients with various distinct spices and cooking techniques used by the Malay/Indonesian community.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "obgyn",
    definition:
      "Doctors or practices specializing in female reproductive health.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "observatory",
    definition:
      "Facilities dedicated to the obesrvation of natural or astronmical phenomena.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "occupationaltherapy",
    definition:
      "Health care professionals specializing in treatments used to develop, recover, or maintain the daily life and work skills of patients with physical, mental, or developmental conditions.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "officebuilding",
    definition: "A single structure used to conduct business.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "officeequipmentandsupplies",
    definition:
      "A shop that specializes in items intended for everyday use by businesses. Pens, paper, printing, office equipment, etc.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "okinawan",
    definition:
      "A restaurant specializing in Okinawan cuisine. Also known as Ryukyuan cuisine, Okinawan cuisine differs from mainland Japanese cuisine in that it includes a stronger influence from Chinese and Southeast Asian cuisines.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "oliveoil",
    definition:
      "A store that primarily sells olive oil. OK to use for olive oil farms.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "opensandwiches",
    definition:
      "A food establishment that specializes in open face sandwiches, generally slices of bread with one or more food items on top.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "opera.ballet",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "opthamalogy",
    definition:
      "Medical doctors specializing in surgery and medical treatments of the eye, who have been trained in medical school and can perform eye surgery and provide advanced eye treatments (unlike optometrists).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "opticians",
    definition:
      "A business specializing in the sale of eyewear (glasses and contacts) and may also offer some eye assessment onsite as well.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "optometry",
    definition:
      "Doctors specializing in non-surgical care of the eye, typically with eyesight assessment, eyeglasses, and contact lenses.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "oralsurgery",
    definition:
      "Should be used exclusively for those dental professionals offering more complex surgical procedures, including dental implants and extraction of wisdom teeth.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "organicfood",
    definition:
      "Stores that specialize in the sale of organic food. They are typically smaller markets that exclusively sell local and organic products.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "oriental",
    definition:
      "A food establishment serving dishes that utilize a variety of the cooking practices and traditions found throughout Asia.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "orthodontics",
    definition:
      "A dental professional primarily focused on the diagnosis, prevention and correction of malpositioned teeth and the jaws, usually with the utilization of braces, retainers and related devices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "orthopedics",
    definition: "Doctors that specialize in the care of bones and joints.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "orthotics",
    definition:
      "Businesses that provide devices to externally modify the functional and structural characteristics of muscles and bones.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "osteopathy",
    definition:
      "Fully licensed physicians who practice in every medical specialty​.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "ottoman",
    definition:
      "Ottoman cuisine is the cuisine of Ottoman Turkey and is a fusion and refinement of Central Asian, Middle Eastern and Balkan cuisines. ÒPalace cuisineÓ is also a form of Ottoman cuisine. Some of the most prominent dishes include: HŸnkar be_endi (roasted eggplant puree), mahmudiye (eggs with onion), _eyhŸ-l muh_i (stuffed eggplant), el basan tava (lamb in bechamel sauce), chard with rice, stuffed okra, stuffed melon, grilled lamb meat, tutmaç soup (yogurt soup with lamb meatballs), dane-i saru pilavõ (pilaf made with saffron), dane-i ye_il pilavõ (pilaf made with spinach, mint, parsley, dill, celery stalks), kubuni pilavõ (rice with almond and raisins), †zbek pilav (rice with lamb meat, onion, tomato, carrot), oven-cooked fish, grilled turbot, olive oil stuffed grape leaves, olive oil stuffed green peppers, tarhana soup (made of tomatoes and pimentos), ezogelin soup (a spicy red lentil soup), boza (a malt drink, made from fermented wheat), a_ure (a wheat pudding), zerde (saffron-flavored rice pudding), and gŸllaç (a dessert made with milk, pomegranate and a special kind of pasta)",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "outdoorfurniture",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "outdoorgear",
    definition:
      "A business that specializes in the sale of clothing, footwear and equipment designed to be used in the great outdoors and for camping.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "outletmall",
    definition:
      "An outlet mall (or outlet center) is a type of shopping mall in which manufacturers sell their products directly to the public through their own stores. Other stores in outlet malls are operated by retailers selling returned goods and discontinued products, often at heavily reduced prices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "outletstore",
    definition:
      "A business offering cheaper than regular price goods. Typically these are factory seconds or clearance items.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "oxygenbar",
    definition:
      "A bar where their primary business is serving oxygen to the public rather than alcohol.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pachinko",
    definition:
      "A business specializing in a type of mechanical game originating in Japan, used as both a form of recreational arcade game and as a gambling device.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "packagelocker",
    definition:
      "Commercial self service lockers or booths for either receiving or dropping off parcels. Examples include Amazon Lockers and DHL Packstations.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "packing",
    definition:
      "A business or individual specializing in packing residential or commercial belongings in preparation for a client's move. They typically do not move the items for the client.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "packingsupplies",
    definition:
      "A business that primarily sells packing supplies (e.g. boxes, bubble wrap, packing tape, wine shippers, etc.)",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "paella",
    definition:
      "A food establishment that serves primarily rise based dishes of Spanish origin including Paella.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "painmanagement",
    definition:
      "A doctor/professional who specializes in pain management and prevention.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "paintandsip",
    definition:
      "Businesses or individuals that offer painting classes where students drink alcohol while they paint.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "painting",
    definition:
      "A business or individual that paints both the exterior and interior of buildings",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "paintstores",
    definition:
      "A retail location for commercial paints and painting supplies. Not to be confused with a store for artistic painting supplies.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "paintyourownpottery",
    definition:
      "A business where customers can purchase unpainted already-fired pottery and ceramic pieces (bisque) and paint them onsite. Typically, the business will have a selection of bisqueware to choose from and offer a workspace for customers to paint their selected pieces. After the customer is finished with painting, the business will then fire the bisqueware for completion and the customer can pick it up at a later time. Although most of these businesses will offer basic instruction on how to paint pottery pieces, they should not be categorized under Art Classes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pakistani",
    definition: "An establishment specializing in Indian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pakistani",
    definition: "An establishment specializing in Pakistani cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "parentingschool",
    definition:
      "Organizations that provide classes that teach techniques for raising children.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "parks",
    definition:
      "Public outdoor spaces for non-specific leisure activities such as picnics, hiking, and recreational sports.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "parma",
    definition:
      "A food establishment that serves chicken parmigiana or parma as one of the main dishes. Restaurants specializing in cuisine from the province of Parma in Italy should be listed under the Italian restaurant category Emilian.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "parsi",
    definition:
      "Heavily influenced by Iranian cuisine, Parsi restaurants are known for their non-vegetarian spread. Popular items include Dhansak, Berry Pulao, Patra ni Machi, Bun-Maska and chai.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "partycharacters",
    definition:
      "Individuals or businesses offering actors for hire to dress and impersonate popular characters for special events, e.g. birthday parties.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "partyequipment.rental",
    definition:
      "Businesses that rent party equipment for a fee, e.g. businesses that rent chairs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "partysupplies",
    definition:
      "Businesses that sell goods for celebrations, such as decorations, themed plates and silverware. Do not use for party equipment rentalservices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "passportvisaservices",
    definition:
      "A business or individual that specializes in passport and visa services such as applications, renewals, replacements, corrections, and so on.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pasta",
    definition:
      "Small shops where fresh pasta is made, e.g. ravioli, tortellini, as opposed to the dry boxed pasta found in supermarkets.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pathology",
    definition:
      "A doctor who specializes in the cause and development of diseases and facilitates diagnosis and treatment through examining tissues, checking the accuracy of and interpreting lab tests.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pawn",
    definition:
      "A store that accepts goods in exchange for a short term loan of cash. When the loan is not repaid back in time, the good maybe sold. As such these locations also sell items.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "paydayloan",
    definition:
      "Businesses providing short-term loans or check cashing services for a fee.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pediatrics",
    definition: "Doctors specializing in the care of children.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "performingarts",
    definition:
      "Art forms in which artists use their voices and/or the movements of their bodies, often in relation to other objects, to convey artistic expression. Examples include ballet, circus skills, clown, magic, dance, mime, opera, puppetry, speech, theatre, ventriloquism",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "perfume",
    definition:
      "A business that sells products consisting of a mixture of fragrant essential oils or aroma compounds.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "periodontics",
    definition:
      "A dental professional with expertise in the treatment of gum disease, oral inflammation, and the placement and maintenance of dental implants.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "permanentmakeup",
    definition:
      "Businesses or individuals specializing in the technique of tattooing pigment on the face to resemble makeup. Examples include eyelining and other permanent pigmentation to enhance the skin of the face, lips, and eyelids.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "persian",
    definition: "An establishment specializing in Iranian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "personalcare",
    definition:
      "A person or business offering services related to personal care (bathing, feedings, dressing, etc.) This is usually because the individuals themselves cannot perform these tasks on their own, either due to injury, sickness or age.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "personalshopper",
    definition: "A company or person who will do shopping for you",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "personaltrainer",
    definition:
      "Individuals offering one-on-one training through a gym or other sports facility. Also applies to outdoor and indoor bootcamps.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "peruvian",
    definition: "An establishment specializing in Peruvian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pets",
    definition:
      "Businesses that specialize in associated care and maintenance of pets",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pets",
    definition:
      "Businesses that trade in live animals for domesticated use or offer associated services",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pets.adoption",
    definition:
      "Businesses that advocates and facilitates the adoption of pets",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pets.boarding",
    definition: "An establishment offering temporary accommodations for pets.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pets.grooming",
    definition: "A business or service that washes and grooms pets",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pets.photography",
    definition:
      "A business or individual that specializes in photography for pets and animals.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pets.sitting",
    definition:
      "A service where someone can look after a pet while the owner is away. Boarding is a facility where the pets will stay. Pet Sitting is where the sitter comes to the pet's home to care for them.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pets.training",
    definition:
      "A business or service that offers either classes or services to help train pets",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pets.transportation",
    definition:
      "A business that specializes in providing transportation and travelling services for animals. Typical services include taxi services, pick-up from/drop-off at airports, obtaining necessary documents for travelling, shipping, moving, and so on.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "petstore",
    definition:
      "A business that sells pet products, like food, pens, cages, collars, etc. May also sell pets too",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "petstore.fish",
    definition:
      "Establishment that primarily sells fish as pets, often tropical fish. Not to be used for places that sell fish for food.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "petstore.reptile",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pharmacy",
    definition:
      'The scope of pharmacy practice includes more traditional roles such as compounding and dispensing of medications, and it also includes more modern services related to health care. Category not to be used for drugstore. A drugstore, may be set up as a "convenience store", and may sell cosmetics, toiletry items, first-aid supplies and patent medications, such as nonprescription cold medicines.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pharmacystore",
    definition:
      'A store that sells non-pharmacy medicines, chemicals, and cosmetics. Category not to be used for pharmacies. A drugstore, may be set up as a "convenience store", and may sell cosmetics, toiletry items, first-aid supplies and patent medications, such as nonprescription cold medicines.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "phonechargingstation",
    definition:
      "Station or kiosk in public areas for people to charge cell phones.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "photobooth.rental",
    definition: "Businesses that rent photo booths for use at events.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "photography",
    definition:
      "Businesses or individuals specializing in taking professional photos for events, personal use, or art.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "photography.event",
    definition:
      "Businesses providing photography for events such as weddings and engagements.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "photography.session",
    definition:
      "Businesses specializing in session photography, such as portrait sessions, engagement sessions, or headshots, typically at studios or a specific setting.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "photographyequipment",
    definition:
      "A store that sells cameras as well as film for cameras and may process and print photographs as well",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "photographystore",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "physicaltherapy",
    definition:
      "A facility that provides professional help with the treatment of disease, injury, or deformity by physical methods such as massage, heat treatment, and exercise rather than by drugs or surgery.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "physician",
    definition:
      "Medical doctors, also known as physicians. Also applies to group practices of doctors.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "piadina",
    definition:
      "A restaurant specializing in a thin Italian flatbread, usually made with white flour, lard or olive oil, salt and water.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pianobar",
    definition:
      "A venue with a performance space that features someone playing a piano or keyboard",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pianostore",
    definition: "A store specialized in piano sales and rentalservices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pictureframing",
    definition:
      "A business specializing in the sale of frames. May also offer framing services as well",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pilates",
    definition:
      'Individuals or organizations offering instruction in the practice of pilates. Businesses in this category are typically highly specialized and contain "Pilates" in their name.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pita",
    definition:
      "A food establishment, generally serving Mediterranean, Balkan or Middle Eastern cuisine, whose main dishes utilize pita bread, often as wraps or sandwiches.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pizza",
    definition: "An establishment specializing in pizza",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "placeofworship",
    definition:
      "A specially designed structure or consecrated space where individuals or a group of people such as a congregation come to perform acts of devotion, veneration, or religious study. Can include Abbey.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "placeofworship.church",
    definition:
      "A place where people of the Christian faith can congregate and worship",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "placeofworship.mosque",
    definition:
      "A place where people of the Muslim faith can congregate and worship",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "placeofworship.synagogue",
    definition:
      "A place where people of the Jewish faith can congregate and worship",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "placeofworship.unitarian",
    definition: "A Unitarian place of worship",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "planetarium",
    definition:
      "Dome-shaped facilities dedicated to education about outer space.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "plasticsurgery",
    definition:
      "A surgeon specialized in the restoration, reconstruction, or alteration of the human body. It can be divided into two categories: reconstructive surgery and cosmetic/aesthetic surgery.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "playcenter",
    definition:
      "An establishment located within a building that offers activities normally associated with recreational pleasure and enjoyment.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "playground",
    definition:
      "Outdoor venues for children's play, typically including equipment such as swings and seesaws. For businesses offering playgrounds for a fee, use active.kids_activities.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "playsets",
    definition:
      "A store that primarily sells playsets and swingsets. This can also be used for businesses that construct custom playsets.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "plaza",
    definition: "Urban space, such as a city square, open to the public.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "podiatrists",
    definition: "Doctors that specialize in the care of the feet.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "podiatry",
    definition:
      "A medical establishment specializing in evaluating and managing disorders of the lower leg, ankle and foot.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "poke",
    definition:
      "A food establishment that specializes in poke, a raw fish salad usually made with soy sauce, onions, green onions, and sesame oil. Traditional poke is mostly raw tuna or octopus, but adapations may feature various shellfish or other kinds of fish. Other poke seasonings include chili peper, seaweed, fish eggs, furikake, and wasabi.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "poledancingschool",
    definition: "Businesses that offer classes in pole dancing.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "policestation",
    definition: "Base of operations for the police force",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "policestation.koban",
    definition:
      'A kōban is typically a two-storied housing with a couple of rooms (although there is wide variation), with from one to more than ten police officers.[6] The officers in these buildings can keep watch, respond to emergencies, give directions, and otherwise interact with citizens on a more intimate basis than they could from a more distant station. Although often translated to English as "police box",the kōban bears little resemblance to the British police box.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "polish",
    definition: "An establishment specializing in Polish cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "polish.pierogis",
    definition:
      "A food establishment specializing in pierogis, filled dumplings of East European origin.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "poolcleaning",
    definition:
      "A business or individual that provides cleaning and general maintenance on pools or hot tubs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "poolhall",
    definition:
      "A venue with a number of pool tables for playing billiards, snooker, etc type games.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pooltablesupplies",
    definition:
      "A store that specializes in the sale of pool tables and associated supplies. Note that you cannot play pool or billiards in these locations",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "popcorn",
    definition: "Stores specializing in gourmet and flavored popcorns.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "popup",
    definition:
      'A temporary restaurant or food establishment, typically only available for a few nights, weeks, or months at various locations (from hotel courtyards and defunct restaurants to existing restaurants that are closed at night). Pop-up restaurants usually feature a specific chef/cusine and are an effective way for young professionals to gain exposure of their skills, providing a launching pad for chefs to attract investors and/or open full-time restaurants. Sometimes, businesses will even test the market out by opening a pop-up restaurant first. (Note: although often interchangeable with one another, Supper Clubs are usually less advertised, more exclusive (some are invite-only; "speakeasies" of restaurants) and feature different chefs/menus.)',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "popupshops",
    definition: "A permanent space for temporary retail businesses.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "portuguese",
    definition: "An establishment specializing in Portuguese cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "portuguese.alentejo",
    definition:
      "A restaurant serving cuisine from Alentejo, a region of south-central and southern Portugal.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "portuguese.algarve",
    definition:
      "A restaurant serving cuisine from Algarve, the southernmost region of continental Portugal",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "portuguese.azores",
    definition:
      "A restaurant serving cuisine from the Azorean islands of Portugal.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "portuguese.beira",
    definition:
      "A restaurant serving cuisine from the traditional Beira province of Portugal.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "portuguese.fadohouse",
    definition:
      "A restaurant specializing in Portuguese gastronomy and hosting performances of Fado, a traditional folk music made popular in the Lisbon area of Portugal.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "portuguese.madeira",
    definition:
      "A restaurant specializing in the cuisine from Madeira, a Portuguese archipelago located in the north Atlantic Ocean.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "portuguese.minho",
    definition:
      "A restaurant serving cuisine from the traditional Minho province of northwestern Portugal.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "portuguese.ribatejo",
    definition:
      "A restaurant serving cuisine from the traditional Ribatejo province of central Portugal.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "portuguese.trasosmontes",
    definition:
      "A restaurant serving cuisine from the traditional Trás-os-Montes e Alto Douro province of northeastern Portugal.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "postoffice",
    definition:
      "A public service responsible for mail services. Non government run operations should go in the shipping centers category",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "postoffice.authorizedagent",
    definition: "A licensed professional authorized to offer postal services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "potatoes",
    definition:
      "A food establishment specializing in baked or jacket potatoes and other potato based dishes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "poutineries",
    definition:
      "An establishment specialize in serving Poutine (hot chips, gravy and cheese curds).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "prenatal",
    definition:
      "A business or service that offers care and guidance to people through their pregnancy (prenatal) to caring for their new born (perinatal).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "preschool",
    definition:
      "Schools for children too young to attend elementary school. Should incorporate an element of learning, offering more than a typical daycare.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pretzels",
    definition:
      "Businesses that specialize in the sale of pretzels, a crisp biscuit baked in the form of a knot, or a stick, and flavored with salt.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "preventivemedicine",
    definition:
      "A doctor/professional who specializes in preventing diseases and illnesses (rather than treating them). Although many physicians practice preventive medicine, this category should only be used for specialists who DO NOT offer treatment.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "printmedia",
    definition:
      "A business or organization that creates media to be read. These include newspapers and magazine publishers.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "privateinvestigation",
    definition:
      "A business or organization who can be hired to perform private detective work, independent of law enforcement",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "privatejetcharter",
    definition: "A business that offers private transportation by jet.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "privateschool",
    definition:
      "Independent, non-governmental schools, that are not administered by local, state or national governments.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "privateshuttlebus",
    definition: "A private company offering bus transportation.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "professionalservices",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "professionalsportsteam",
    definition:
      "Sports teams on the national and professional level (e.g. football, baseball, basketball, hockey). Do not use for amateur sports leagues.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "propertymanagement",
    definition:
      "A business that manages the facilities of rentalservices properties including general upkeep and repairs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "psychiatrists",
    definition:
      "Doctors specializing in the treatment of emotional and mental disorders. Do not use for psychologists (psychiatrists have MDs and can proscribe medication).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "psychiatry",
    definition:
      "A business or clinic offering services in psychiatric care and mental health counseling.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "psychic",
    definition:
      "Individuals specializing in psychic advisory services, i.e. fortune-tellers. Do not use with medical professions.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "psychology",
    definition:
      "A professional (usually with a PhD or Doctor of Psychology) offering the diagnoses and treatment of mental disorders. Psychologists (as opposed to psychiatrists) lack medical degrees and are unable to prescribe medications.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pub",
    definition:
      "A bar that offers a casual setting and comfortable seating. Offers meals and more of a family atmosphere than a regular bar.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "publicart",
    definition:
      "Any art which is exhibited in a public space, usually outdoor and permanent/semi-permanent. Common locations include parks, city plazas, walls (murals), outside corporate buildings, and sidewalks. Unlike street art, public art is usually commissioned by an art gallery or other commisioning bodies and created by specifically picked artists.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "publiclibrary",
    definition:
      "A library that is accessible by the general public and is generally funded from public sources, such as taxes. Their mandate is to serve the general public's information needs and provide basic services without charge.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "publicservices.government",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "publictransport",
    definition:
      "Transportation owned or directly commissioned by governments in the interest of and available to the general public such as local buses, subways or ferry services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "puertorican",
    definition: "An establishment specializing in Puerto Rican cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "pulmonology",
    definition: "Doctors that specialize in pulmonary/respiratory problems.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "punjabi",
    definition: "Restaurant specializing in Punjabi cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "racetrack",
    definition: "Outdoor racing venues where spectators view and bet on races.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "radiology",
    definition:
      "Medical doctors that specialize in medical imaging, e.g. MRIs, CT scans, or PETs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "radiostation",
    definition:
      "A business or organization that broadcast radio signals, typically called radio stations",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "rawfood",
    definition:
      "An establishment specializing raw, uncooked fruits and vegetables, and grains, nuts and seeds. No cooking involved.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "realestate.agents",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "realestate.services",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "realestateagents",
    definition:
      "Businesses or individuals that work with property owners to coordinate the marketing and sale of their properties and residences.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "realestateagents.commercial",
    definition:
      "A company or organization that markets and manages the sale of commercial properties.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "realestateservices",
    definition:
      "Businesses or individuals offering services around real estate transactions, including home staging and escrow. They do not participate in the direct transaction of properties but often partner with agents or clients for the provision of specific services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "recordingstudio",
    definition:
      "A space where one can professionally record music and/or rehearse",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "recreation",
    definition: "Business or location related to recreational activities.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "recreation",
    definition:
      "Models the presence and approximate point location of a break room or recreational space.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "recreationcenter",
    definition:
      "Designated area/building housing multiple sporting activities. Usually found on a college/university campus (but not limited to).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "recyclingcenter",
    definition:
      "A business that accepts recycled items and processes them for reuse",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "reflexology",
    definition:
      "A person or business offering treatment via a style of massage used to relieve tension and treat illness, based on the theory that there are reflex points on the feet, hands, and head linked to every part of the body.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "religiousitems",
    definition:
      "A business that primarily sells religious items and gifts (items pertaining to a specific religion). Examples include religious books, music, jewelry and statues.tems",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "rental.videoandgame",
    definition:
      "A business that rents out videos, DVDs, blue rays, video games, etc.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "researchanddevelopment",
    definition:
      "A facility dedicated to the systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "residentialapartments",
    definition:
      "A complex or building with multiple housing units that can be either rented, leased, or sold on a long-term basis.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "restaurant",
    definition: "An establishment that serves food.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "retirementhome",
    definition:
      "A specially designed facility catering to the care of the elderly and infirm",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "reunionnese",
    definition:
      "A restaurant that specializes in R√É¬©unionnese cuisine (regional food from the island of Reunion of France), which has strong influences from Africa, Madagascar, India, China, and France. Reunion cuisine is known for its spices and its use of local fruits, vegetables, and seafood. Common dishes/foods include curry (cari), rougail, brèdes, samoussas, bouchons, and le Americain.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "reupholstery",
    definition:
      "A business or individual specialized in replacing or repairing the aged and damaged padding and coverings of furniture including that of homes, cars, boats and occasionally mattresses.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "riceshop",
    definition:
      "Food establishments specialized in the preparation of Pilaf and other rice dishes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "rideshare",
    definition:
      "Business or service that facilitates ride sharing or carpooling allowing multiple riders to share a car trip.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "rideshare",
    definition:
      "Models the presence and approximate point location of a ride-share pick-up spot or zone.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "robatayaki",
    definition:
      "A food establishment specializing in robatayaki, a Japanese method of cooking, similar to barbecue, in which items of food on skewers are slow-grilled over hot charcoal.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "rockclimbing",
    definition:
      "Businesses that support the activity of rock climbing or locations for rock climbing (indoor or outdoor).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "rodizio",
    definition: "All-you-can-eat style Brazilian restaurants.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "romanian",
    definition: "A restaurant specializing in Romanian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "roofing",
    definition:
      "A business or individual that constructs and/or repairs roofs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "rotisseriechicken",
    definition:
      "A restaurant that specializes in the preparation of chicken cooked on a rotisserie",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "rugs",
    definition: "A shop where one can buy rugs and carpet",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "russian",
    definition: "An establishment specializing in Russian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sakebar",
    definition:
      "An establishment that serves a Japanese fermented, mildly alcoholic beverage made from rice.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "salad",
    definition: "An establishment that sells salads",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "salvadoran",
    definition: "An establishment specializing in cuisine from El Salvador",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sandwiches",
    definition: "An establishment that sells sandwiches",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sauna",
    definition:
      "A facility where by one can experience a wet or dry heat for relaxation or therapeutic benfit",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "scandinavian",
    definition: "An establishment specializing in Scandinavian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "scandinaviandesign",
    definition:
      "A store specializing in the sale of items, usually furniture or homeware, that are characterized by the themes of Scandinavian Design. a design movement that emphasizes simplicity, minimalism and functionality and emerged in the Nordic countries during the 1950s.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "school",
    definition:
      "Represents an institution that is for the education of children, generally from K-12. Some countries refer to them as primary and secondary education.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "scottish",
    definition: "An establishment specializing in Scottish cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "screenprinting",
    definition:
      "A person or company that uses screen printing technique to create products like t-shirts and posters",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "screenprinting.tshirt",
    definition:
      "A person or company that uses screen printing technique to create products like t-shirts and posters",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "seafood",
    definition: "An establishment specializing in seafood",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "seafoodmarket",
    definition: "Markets specializing in seafood.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "securitysystems",
    definition:
      "A business or individual that specializes in the set-up and provision of home security systems.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "selfstorage",
    definition:
      "A business offering space to store items. Typically the customer can access their space at any time and provides their own locks.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "senegalese",
    definition: "An establishment specializing in Senegalese cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "seniorcenter",
    definition:
      "A facility where senior citizens can visit during the daytime for recreational and social activities. These locations may provide activities such as aerobics, field trips to local attractions, arts and crafts workshops, volunteering events, and so on. Senior centers do not involve residency and do not provide medical care.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "serbianandcroatian",
    definition:
      "A restaurant specializing in a subset of Balkan cuisine originating from the entire region where the Serbo-Croatian language is spoken.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sewingalterations",
    definition: "A service alters, repairs and tailors clothing",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sharedofficespace",
    definition:
      "A space available for companies and individuals to rent that offers the environment and amenities of a professional office space.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "shavedice",
    definition:
      "Businesses that specialize in serving shaved ice, a dessert made from ground ice and flavored with syrup. Also referred to as snow cones.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "shavedsnow",
    definition:
      "A food establishment that primarily serves shaved snow (or snow ice), an ice cream and shaved ice hybird dessert. Whereas traditional shaved ice is made by grinding plain ice then flavoring it with fruit syrups or condensed milk, shaved snow starts out closer to ice cream; flavorings are mixed into a base of milk and water then frozen into cylindrical blocks that look like giant candles. The blocks are mounted onto an ice shaver, which slices it off into sheets that look like snow and are thin enough that they melt in the mouth, much like cotton candy. Various toppings and sauces (e.g. mochi, red bean, chocolate syrup, fruits, condensed milk, etc.) are then added for serving.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "shippingcenters",
    definition:
      "Private companies (not government run) that offer services for shipping items by mail",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "shippingdropbox",
    definition:
      "Standalone box for dropping off or picking up letters and packages, typically operated by commercial companies.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "shoerepair",
    definition: "A company specializing in shoe repair",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "shoes",
    definition: "A business specializing in footwear.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "shoeshine",
    definition:
      "A business or individual who specializes in polishing leather shoes or boots to extend the footwear's life and to restore, maintain, and improve their appearance.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "shoestore",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "shopping",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "shoppingpassage",
    definition: "Shopping area along a street",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "shutterinstallation",
    definition:
      "A business or individual specializing in window shutter installation and repair. Shutters differ from blinds and shades in being rigid (generally a wooden or composite material) rather than flexible.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "signature",
    definition:
      "A restaurant highlighting the cuisine of a well-known and accomplished chef.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "signmaking",
    definition: "A business or organization who can be hired to create signs",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "silentdisco",
    definition:
      "An event where people dance to music broadcasted over wireless headphones, giving the effect of a room full of people dancing to nothing. Can be used for DJs who provide this service.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "singaporean",
    definition: "An establishment specializing in Singaporean cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "skatepark",
    definition:
      "Designated locations for skateboarding or rollerblading, typically including rails, ramps, and halfpipes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "skatingequipment",
    definition:
      "A business that specializes in the sale of equipment for street sports such as skateboards, roller blades and associated clothing, footwear and protective gear. Not to be confused with bike shops as they have their own category",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "skatingrink",
    definition:
      "Facilities designed for the recreational activities of ice skating or roller skating.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "skiequipment",
    definition:
      "Sales and rentalservices locations for ski, snowboards and snow gear.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "skincare",
    definition:
      "Businesses or individuals specializing in skin care treatments, such as skin peels, facials, or microderm abrasion treatment.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "skydiving",
    definition:
      "Businesses offering skydiving or parachute jumping, or schools or individuals offering skydiving instruction.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sleepwear",
    definition:
      "A store specializing in the sale of clothing designed to be worn while sleeping. Should emphasize the comfort and utility of sleepwear while stores focusing more primarily on alluring nightwear and undergarments should be listed under separate categories such as lingerie.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "slovakian",
    definition: "An establishment specializing in Slovakian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "soccer",
    definition:
      'Fields or venues dedicated to the sport of soccer (called "football" in the UK).',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "socialclub",
    definition:
      "Locations where groups gather around a common interest, occupation or activity (e.g. hunting, fishing, science, politics, charitable work).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "socialservices",
    definition:
      "Public services provided by the government, private, and non-profit organizations. These public services aim to create more effective organizations, build stronger communities, and promote equality and opportunity",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "softwaredevelopment",
    definition:
      "A business or service which helps design, create, develop software. This is covers everything from conception, design, programming and testing the software.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "solarinstallation",
    definition:
      "A business or individual that provides and maintains solar electrical systems and panels.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sommeliers",
    definition:
      "A trained wine professional who specializes in all aspects of wine service. Sommeliers, or wine stewards, are experts in wine and food pairing and in serving wine to patrons.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "soulfood",
    definition:
      "Similar to Southern food, this is a traditional African-American cuisine. Fried meats, cornbread, collared greens are typical dishes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "soup",
    definition: "An establishment specializing in soup",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "southafrican",
    definition: "An establishment specializing in South African cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "southernunitedstates",
    definition:
      "An establishment specializing in cuisine from Southern USA. This includes fried chicken, cornbread, grits, pie, mashed potato, pit barbecue, fried greens.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "southwestunitedstates",
    definition:
      "A food establishment specializing in the cuisine of the southwest United States. South Western cuisine is similar to Mexican cuisine but often involves larger cuts of meat, namely pork and beef, and less use of tripe, brain, and other parts not considered as desirable in the United States. Restaurants specializing in Tex-Mex, a type of South Western cuisine, should be listed under the Tex-Mex category instead.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "souvenirs",
    definition:
      "Business selling local items and mementos tied to the store's location.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "spanish",
    definition: "An establishment specializing in Spanish cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "spanish.andalusian",
    definition:
      "A restaurant specializing in the regional cuisine of Andalusia.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "spanish.basque",
    definition:
      "An establishment specializing in Basque cuisine, a region of Northern Spain.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "spanish.catalan",
    definition:
      "An establishment specializing in Catalonian cuisine (a region of Spain).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "spanish.galician",
    definition: "A restaurant specializing in Galician cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "specialtyfood",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "specialtyschool",
    definition:
      "Schools that provide classes in specialized fields. Use only when the businesses does not fit other specialized child-education categories.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "spinclass",
    definition:
      "A business that offers exercises involving using a special stationary exercise bicycle with a weighted flywheel in a classroom setting.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "spiritualproducts",
    definition:
      "Business specializing in new age and spiritual teachings. Items often for sale are books, rocks and crystals, tarot cards.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sportinggoods",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sportsbar",
    definition: "A bar that hosts multiple TVs showing sports games.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sportsclub",
    definition: "Facilities or organizations hosting recreational sports.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sportsequipment.rental",
    definition: "A business offering a variety of sporting goods for rent",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sportsgoods",
    definition: "A business offering sports apparel, footwear and equipment.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sportsmedicine",
    definition:
      "Doctors specializing in the treatment of injuries typically sustained while playing sports.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sportsschool",
    definition:
      "A type of educational institution for children that focuses on the training of a particular sports, often in a boarding school environment. This type of educational institution exists in Russian speaking countries (Russia, Ukraine, Central Asian countries, etc), some East Asian countries (China, Singapore, Malaysia) also Germany and Cuba.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sportswear",
    definition:
      "A business that specializes in the sale of clothing and footwear designed to be used during sport or at the gym.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "srilankan",
    definition: "An establishment specializing in Sri Lankan cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "stationery",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "steak",
    definition: "An establishment specializing in steak",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "stockings",
    definition:
      "A clothing store specializing in the sale of stockings and other close-fitting, elastic garments used to cover the leg.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "streetvendor",
    definition:
      "Businesses that sell food on the street, but are not food trucks. They are characterized by minimal equipment and lack of a fixed location. Do not use for food stands.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "structuralengineers",
    definition:
      "A business or professional with expertise in the design and construction of the structural components of buildings such as foundations, beams and supports.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "subwaystation",
    definition:
      'A railway station for a rapid transit system, often known by names such as "metro", "underground" and "subway".',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "supermarket",
    definition:
      "A larger grocery store, often part of a chain, that sells a large variety of produce and household goods. Eg. Safeway",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "supperclub",
    definition:
      "A traditional dining establishment that also functions as a social club",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "surfacerefinishing",
    definition:
      "A business or individual specializing in the restoration or repair of interior surfaces including bathtubs and stone countertops or floors.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "surfing",
    definition:
      "Businesses offering instruction in surfing, or locations where surfing is the main activity. Do not use for businesses selling surfing gear.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "surfingequipment",
    definition:
      "A business that specializes in the sale of equipment for surfing such as boards, wetsuits  and associated clothing. Not to be confused with swimwear as they have their own category",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "surgeon",
    definition: "Physicians that specialize in performing surgery on patients.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "sushi",
    definition: "An establishment specializing in sushi",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "swedish",
    definition: "A restaurant specializing in Swedish cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "swedish.traditional",
    definition:
      "A food establishment specializing in the preparation of traditional Swedish cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "swimminginstruction",
    definition:
      "Businesses or individuals that teach swimming or swimming improvement techniques.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "swimmingpool",
    definition: "Facilities where one can swim in a swimming pool.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "swimmingpool",
    definition:
      "Models the presence and approximate point location of a water feature that is intended for use by people.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "swimwear",
    definition: "A business specializing in swimming attire.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "swiss",
    definition: "A restaurant specializing in Swiss cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "syrian",
    definition:
      'A restaurant that specializes in Syrian cuisine, which is known for its small plates of appetizers known as "mezze". Common foods/dishes includes dishes like kibbeh bil sanieh, kebab halabi, waraq `inab, hummus, tabbouleh, fattoush, labneh, shawarma, mujaddara, shanklish, bastirma, sujuk, and baklava.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "taberna",
    definition:
      "A non-formal establishment serving drinks and modest food dished from Spain.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tabletopgames",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tableware",
    definition:
      "A business that sells the dishes or dishware used for setting a table, serving food and dining. It includes cutlery, glassware, serving dishes and other useful items for practical as well as decorative purposes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tacos",
    definition:
      "A restaurant that serves tacos, composed of a corn or wheat tortilla folded or rolled around a filling.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "taiwanese",
    definition: "An establishment specializing in Taiwanese cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "taiyaki",
    definition: "A business specializing in Japanese fish-shaped cakes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "talentagencies",
    definition:
      "A business who represents entertainment industry professionals, securing work for them as well as negotiating contracts and ensuring safe working conditions.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tamales",
    definition:
      "A restaurant that serves tamales, a traditional Mesoamerican dish made of masa (a starchy dough, usually corn-based), which is steamed in a corn husk or banana leaf.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tanningbeds",
    definition:
      "Businesses that provide tanning beds or booths, often with florescent lighting.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tanningservices",
    definition:
      "Businesses specializing in tanning through the use of tanning beds and spray tanning; can have physical location or be mobile.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tapas",
    definition:
      "A bar offering small plates of food, typically of Spanish origin. Not a restaurant",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tapas.smallplate",
    definition:
      "A restaurant offering small plates of food, typically of Spanish origin.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tattoo",
    definition: "Businesses specializing in body tattoo.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tattoo.removal",
    definition: "Doctors specializing in tattoo removal.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "taxi",
    definition:
      "A vehicle providing individualized transportation a location specified by the customer.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "taxi",
    definition:
      "Models the presence and approximate point location of a taxi waiting area or line-up.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "taxistand",
    definition: "An area where taxis park and wait for/pick up customers",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "taxoffice",
    definition: "An establishment that offers tax preparation services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "taxservices",
    definition:
      "Businesses that provide tax-related services for clients, such as annual filing preparation.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tea",
    definition:
      "Establishments specializing in serving tea and other refreshments in a formal seating area.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "teachersupplies",
    definition:
      "A store that primarily sell items for classroom use (generally catered to teachers), such as classroom furniture, educational toys and manipulatives, themed decorations, stickers, science fair/project supplies, arts & crafts supplies, workbooks, chalkboards, posters, awards/certificates/ribbons, etc. (Note: this shouldn't be used for stores that sell school supplies intended for students (e.g. binders, notebooks, paper, pens, etc.) - those should go under Office Equipment.)",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "teambuilding",
    definition:
      'A business or individual specializing in providing and/or organizing group activities intended to develop team bonding. Most activities will require patrons to work together as a team to achieve a common goal (e.g. solving a puzzle, getting through an obstacle course, guessing games, etc.) Please note this category should not be used as an attribute for an Active Life business that offers group packages or whose services are considered "good for groups"; this category should only be used for businesses whose core competency is providing/organizing team building activities or consultation.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "teethwhitening",
    definition:
      "Businesses that specialize in the whitening of teeth for cosmetic purposes.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "telecommunications",
    definition:
      "A business or organization that provides and services landline telephone systems.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "televisionserviceproviders",
    definition:
      "A business or organization providing television services and content.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "televisionstation",
    definition:
      "A business or organization that broadcast TV signals, typically called TV stations",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tennis.instruction",
    definition:
      "Tennis courts and businesses or individuals providing tennis lessons.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "terminal",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a terminal.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "terminal.bus",
    definition:
      "A terminal where buses arrive and depart. Bus stations can be outdoor or indoor and can be big and small. Businesses located inside bus terminals should have separate listings (e.g. coffee shop, convenience store, cafe, etc.) This should not be used for individual bus stops.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "testpreparationschool",
    definition:
      "Businesses or individuals specializing in preparing individuals for tests, such as the SATs, LSATs, and GMATs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "texmex",
    definition:
      "An establishment specializing in Tex-Mex cuisine, a cross between American and Mexican flavors and ingredients",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "thai",
    definition: "An establishment specializing in Thai cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "theater.drivein",
    definition:
      "An outdoor space (usually a parking lot) with a large movie screen where people can view movies from the privacy and comfort of their automobiles. There will often be a projector booth and concession stand at the drive-in theater.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "theater.movie",
    definition:
      "Venues where movies are shown, typically with light refreshments such as popcorn, candy, and soda available for purchase.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "themedcafe",
    definition:
      "A cafe in which the concept of the cafe takes priority over everything else, influencing the architecture, food, music, and overall 'feel' of the cafe. The food and drinks usually take a backseat to the presentation of the theme, and these cafes attract customers solely on the premise of the theme itself. Some popular themed cafes include cat cafes, dog cafes, robot cafes, library cafes, maid cafes, and even cafes based on popular novels/fairytales/cartoon characters like Alice in Wonderland, Hello Kitty, Harry Potter, etc.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "thriftstore",
    definition:
      "A retail location offering second hand goods, whose profit usually goes to charity.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tibetan",
    definition:
      "Eateries serving Tibetan fare are famous for dishes such as momos, thukpas and butter tea.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tickets",
    definition:
      "A business or location that sells, or makes available for pickup, tickets to local events and venues usually in the categories of arts, culture and entertainment.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tikibar",
    definition:
      'A tropical-themed drinking establishment that serves elaborate cocktails, especially rum-based mixed drinks such as the mai tai and zombie cocktail. Tiki bars are aesthetically defined by their tiki culture decor which is based upon a romanticized conception of tropical cultures, most commonly Polynesian. The interiors and exteriors of tiki bars often include "tiki god" masks and carvings, grasscloth, tapa cloth and tropical fabrics, torches, woven fish traps, and glass floats, bamboo, plants, lava stone, hula girl, palm tree motifs, tropical murals and other South Pacific-themed decorations. Indoor fountains, waterfalls or even lagoons are popular features. Some tiki bars also incorporate a stage for live entertainment such as exotica-style bands or Polynesian dance floor shows.',
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "titleloan",
    definition:
      "A business that provides title loans, a type of loan where borrowers can use their vehicle title as collateral. (Not to be confused with Auto Loan Providers, who provide loans for purchasing a vehicle.)",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tobaccoshop",
    definition:
      "A business that specialises tobacco, cigarettes, and related products. Not to be confused with Vape shops or Head Shops.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tobaccoshop",
    definition: "A shop licensed to sell tobacco products.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tofu",
    definition:
      "A business specializing in a soft, bland, white cheeselike food, high in protein content, made from curdled soybean milk.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "touristattraction",
    definition:
      "A place of interest to tourists typically for its inherent or exhibited natural or cultural value, historical significance, natural or built beauty, offering leisure, adventure and amusement.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tours",
    definition: "Businesses or organizations that offer guided tours.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tours.boat",
    definition:
      "A business or individual that provides short trips on a boat for tourist reasons, typically starting and ending in the same place, and normally of a duration less than a day. This contrasts with cruising in large ships for a number of days with accommodation in cabins. ttours",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tours.bus",
    definition:
      "A business or organization that provides tours where transportation to one or many areas of interest is provided by bus and integrated as part of the tour.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tours.scooter",
    definition:
      "A business or individual that offers tours by scooters, including self-balancing scooters like Segway and hoverboards, mopeds, and other light two-wheeled motor/electric vehicles.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tours.walking",
    definition:
      "Businesses or organizations that offer guided tours that include walking between places on interest. Walking tours organized for a particular theme, such as food or history, should fall under their respective theme categories rather than this walking tour category.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "towncarservice",
    definition:
      "A luxury sedan driven by a chauffeur that is available for hire. Town car service usually cater to businesspeople, typically for traveling between airports and hotels, offices, and venues. Unlike a taxi, town car service requires advance booking and does not charge by meter. Unlike limos, town cars typically are not hired for events (e.g. proms, weddings, bachelor parties, etc) and the cars do not have a lengthened wheelbase. Unlike airport shuttles, town cars are rarely share and do not drive exclusively to/from airports.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "toys",
    definition: "A business that sells toys and games",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "toystore",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "traditionalchinesemedicine",
    definition:
      "An alternative to western medicine, Traditional Chinese Medicine covers things like herbal medicine, massage and other alternate therapies.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "trainserviceprovider",
    definition: "A company providing transportation services by trains.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "trainstation",
    definition:
      "A location where one could expect to either board or alight from a train.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "trampolining",
    definition:
      "Venues with wall-to-wall trampolines for fitness and parties, generally located indoors.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "transitlounge",
    definition:
      "A lounge at a transit station (train/coach usually) accessible to passengers waiting for their scheduled departure. Wifi, refreshments, seating areas and other amenities are usually provided.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "translationservices",
    definition: "A business or individual who offer translation services",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "transportationservices",
    definition:
      "A business or organization a transportation service from one place to another. Should only be used if a more specific category is not available.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "trattoria",
    definition:
      "An Italian-style eating establishment, less formal than a ristorante, but more formal than an osteria. There are generally no printed menus, the service is casual, wine is sold by the decanter rather than the bottle, prices are low, and the emphasis is on a steady clientele rather than on grande cuisine. The food is modest but plentiful (mostly following regional and local recipes) and in some instances is even served family-style (i.e. at common tables).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "travelagent",
    definition:
      "A business or individual that provides travel and tourism related services to the customer on behalf of suppliers such as airlines, car rentalservicess, cruise lines, hotels, railways, and package tours.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "travelservices",
    definition:
      "A company that organizes and advises on travel arrangements and activities such as flights, hotels and tours.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "trinidadian",
    definition: "An establishment specializing in cuisine from Trinidad.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "trophyshops",
    definition:
      "An establishment offering the sale and personalization of trophies and awards",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "truckrental",
    definition:
      "Businessess that specialize in truck rentalservices, such as U-Haul.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tuina",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "turkish",
    definition: "An establishment specializing in Turkish cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "turkish.cheekufta",
    definition:
      "A food establishment specializing in the preparation of çiğ köfte, a raw meat dish in Turkish and Armenian cuisines",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "turkish.gozleme",
    definition:
      "A food establishment specializing in the preparation of Turkish gozleme. Gozleme is a traditional savory Turkish flatbread and pastry dish, made of leaves of yufka dough that are lightly brushed with butter and eggs, filled with various toppings, sealed, and cooked over a griddle.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "turkish.homemadefood",
    definition:
      "A food establishment that specializes in traditional Turkish cuisine that features recipes historically made at home by Turkish families.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "turkish.lahmacun",
    definition:
      "A restaurant or food establishment that specializes in the preparation of lahmacun, also known as Turkish or Armenian pizza. It consists of a round, thin piece of dough topped with minced meat, vegetables and herbs that is baked.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "turkish.ravioli",
    definition:
      "A restaurant or food establishment that specializes in the preparation of Turkish ravioli, also known as Manti or Turkish dumplings. Turkish ravioli usually consists of a spiced meat mixture in a dough wrapper that is either boiled or steamed.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "tutoring",
    definition:
      "Brick-and-mortar businesses offering private, secondary, remedial, or specialized instruction, usually for common school subjects such as language, math, and science.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "ukrainian",
    definition: "An establishment specializing in Ukrainian cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "uniforms",
    definition:
      "A business specializing in uniforms required for staff and students",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "urgentcare",
    definition:
      "An organization offering walk in medical care of an urgent nature. Urgent is considered a level below Emergency rooms but more immediate than that of primary care like a family doctor.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "usedbooks",
    definition:
      "A business or location that sells and/or exchanges used books. Not a library, which lends books on a membership basis.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "utilities",
    definition:
      "A private or public organization that provides local utility services to the general public including electricity, water, natural gas and/or sewage.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "uzbek",
    definition: "An establishment specializing in cuisine from Uzbekistan",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vacationhome",
    definition:
      "A property or residence that is available for vacation rentalservices and is not a hotel.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vacationhome.agent",
    definition:
      "A business or individual that markets and coordinates the rentalservices of vacation properties including condos and villas.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "valetservices",
    definition:
      "Businesses that park cars for clients, such as at a restaurant, club, or at private events.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vapeshops",
    definition:
      "A business that offers vape products, e-cigarettes, and related products.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vascularmedicine",
    definition:
      "A doctor who specializes in the diagnosis and treatment of disorders of the vascular/blood system.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vegan",
    definition:
      "An establishment specializing in food with no animal products in it. No meat, no egg, no dairy.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vegetarian",
    definition:
      "An establishment specializing in vegetarian food. No meat served.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vendingmachine",
    definition:
      "Automated machine that provides items using a payment system. Please use shopping.vendingmachine.refreshments for food related machines.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vendingmachine",
    definition:
      "Models the presence and approximate point location of an automated system that vends products/services that include, but are not limited to, electronics, cosmetics, food and beverage.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vendingmachine.beverage",
    definition:
      "Automated machine that provides items like snacks or beverages using a payment system.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "venezuelan",
    definition: "An establishment specializing in Venezuelan cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "venison",
    definition:
      "A restaurant that specializes in the preparation of venison, the meat of various species of deer.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "veteransorganization",
    definition:
      "An organization that advocates for and assist veterans in everyday life, such as ensuring they receive medical care and benefits, providing social support and counseling, helping them find jobs, organizing social events and volunteering opportunities, and getting them involved in the larger community. It is not uncommon for these organizations to have an office/facility where veterans can go to for assistance or socializing.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "veterinarian",
    definition: "Medical specialists for animals.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "videofilmproduction",
    definition:
      "A business or service that can help make video/film. This could be creating, capturing, editing film. This covers both creative and commercial film production service.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "videogamesandconsoles",
    definition:
      "A business specializing in the sale of video games, consoles and associated paraphernalia",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vietnamese",
    definition: "An establishment specializing in Vietnamese cuisine",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vintageclothing",
    definition:
      "A business specializing in the sale of used items, typically clothing. Often these items are older than regular second hand stores and still considered fashionable. Some stores may also offer other items besides clothing, like furniture or accessories.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vinylrecords",
    definition: "A business specializing in the sale of vinyl records",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "virtualreality",
    definition: "",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "visitorcenter",
    definition:
      "A physical location that provides tourist information to visitors who tour the place or area locally. Visitor centers sometimes carry souvenirs and gifts and they can be an actual building/office, a kiosk, a booth, or a counter usually located at a specific attraction, a place of interest, airports, major bus and train terminals, or in central parts of town.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vitaminssupplements",
    definition:
      "A business that offers vitamins, supplements and other health related products.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vocalcoach",
    definition: "A professional offering voice (singing) lessons.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "vocationalschool",
    definition:
      "Schools where students are trained in trades or skills to be pursued as a career.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "waffles",
    definition:
      "A restaurant that specializes in waffles, which are leavened batter or dough cooked between two plates, patterned to give a characteristic size, shape and surface impression.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "walkinclinic",
    definition: "Small medical clinics that do not require an appointment.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "warehouse",
    definition:
      "A large building where raw materials or manufactured goods may be stored before their export or distribution for sale.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "watches",
    definition: "A retailer that specializes in the sale of watches.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "watchrepair",
    definition: "A company specializing in watch repair",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "waterpark",
    definition:
      "Commercially operated parks featuring water amusement rides such as water slides and wave pools.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "waterpurification",
    definition:
      "A business or individual that specializes in the design, installation and maintenance of water purification systems.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "webdesign",
    definition:
      "A business or service that can help make websites. This could be designing, building, or maintaining websites.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "weddingchappel",
    definition: "Venues that specialize in hosting wedding ceremonies.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "weddingplanning",
    definition:
      "Businesses or individuals that specialize in wedding planning; can be used in conjunction with party and event planning if events other than weddings are planned.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "weightloss",
    definition:
      "A company that offers programs and assistance managing weight loss. Business in this category should not be gyms or cosmetic surgery POIs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "welsh",
    definition: "A restaurant specializing in Welsh cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "whiskeybar",
    definition: "A bar or lounge that primarily serves whiskey.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "wholesalemerchant",
    definition:
      "Companies that offer items in large quantities for sale and offer these at discounted prices.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "wholesaler",
    definition:
      "An intermediary business or individual that buys large quantity of goods from various producers or vendors, stores them, and resells to retailers rather than to consumers. Not to be confused with a distributor, who is the sales representative of a producer.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "wigs",
    definition: "A company specializing in the sale of wigs.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "windowinstallation",
    definition:
      "A business or individual providing window replacement or repair services.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "winebar",
    definition:
      "A venue where their primary business is serving wine to the public.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "winery",
    definition:
      "Businesses dedicated to the production of wine, from grape cultivation to bottling, often offering tours and selling directly to the public. For wine bars, use nightlife.bars.wine_bars. For tasting rooms, use food.wineries.winetastingroom.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "winetasting",
    definition:
      "Facilities dedicated to wine tasting. Does not include locations where wine is produced on-site, where there are grape vineyards, or where there is a bar-like setting.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "wok",
    definition:
      "An establishment specializing in food preparation utilizing woks. A wok is a large bowl-shaped pan originating in China but commonly used in many types of contemporary Asian cuisine.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "wraps",
    definition:
      "A food establishment offering in different types of wraps. Wraps consist of some type of filling rolled in a flatbread, such as a lavash or tortilla.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "yoga",
    definition:
      "Facilities providing space and instruction for the practice of yoga. Do not use for businesses not offering yoga as their core instruction (e.g. a gym offering yoga once a week should not receive this category).",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "youthclub",
    definition:
      "A place where young people can meet and participate in recreational activities.",
  },
  {
    collection: "occupant",
    venueType: "",
    feature: "occupant",
    category: "yugoslav",
    definition: "An establishment specializing in Yugoslav cuisine.",
  },
  {
    collection: "opening",
    venueType: "",
    feature: "opening",
    category: "automobile",
    definition:
      "Models the presence and physical width of an entrance/exit that is intended for use by vehicles.",
  },
  {
    collection: "opening",
    venueType: "",
    feature: "opening",
    category: "bicycle",
    definition:
      "Models the presence and physical width of an entrance/exit that is intended for use by persons with bicycles.",
  },
  {
    collection: "opening",
    venueType: "",
    feature: "opening",
    category: "emergencyexit",
    definition:
      "Describes an Opening that is specifically intended for emergency use by the Venue Organization.",
  },
  {
    collection: "opening",
    venueType: "",
    feature: "opening",
    category: "pedestrian",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening",
    venueType: "",
    feature: "opening",
    category: "pedestrian.principal",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening",
    venueType: "",
    feature: "opening",
    category: "pedestrian.transit",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening",
    venueType: "",
    feature: "opening",
    category: "service",
    definition:
      'Should be used to model the presence and approximate point location, or approximate thematic extent of an open or semi-enclosed area, of an service operation that cannot be classified using any other "service" category in the hierarchy.',
  },
  {
    collection: "opening/airport",
    venueType: "airport",
    feature: "opening",
    category: "automobile",
    definition:
      "Models the presence and physical width of an entrance/exit that is intended for use by vehicles.",
  },
  {
    collection: "opening/airport",
    venueType: "airport",
    feature: "opening",
    category: "pedestrian",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening/airport",
    venueType: "airport",
    feature: "opening",
    category: "pedestrian.principal",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening/airport",
    venueType: "airport",
    feature: "opening",
    category: "pedestrian.transit",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening/airport",
    venueType: "airport.intl",
    feature: "opening",
    category: "automobile",
    definition:
      "Models the presence and physical width of an entrance/exit that is intended for use by vehicles.",
  },
  {
    collection: "opening/airport",
    venueType: "airport.intl",
    feature: "opening",
    category: "pedestrian",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening/airport",
    venueType: "airport.intl",
    feature: "opening",
    category: "pedestrian.principal",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening/airport",
    venueType: "airport.intl",
    feature: "opening",
    category: "pedestrian.transit",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "opening",
    category: "automobile",
    definition:
      "Models the presence and physical width of an entrance/exit that is intended for use by vehicles.",
  },
  {
    collection: "opening/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "opening",
    category: "pedestrian",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "opening",
    category: "pedestrian.principal",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "opening",
    category: "pedestrian.transit",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening/trainstation",
    venueType: "trainstation",
    feature: "opening",
    category: "automobile",
    definition:
      "Models the presence and physical width of an entrance/exit that is intended for use by vehicles.",
  },
  {
    collection: "opening/trainstation",
    venueType: "trainstation",
    feature: "opening",
    category: "pedestrian",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening/trainstation",
    venueType: "trainstation",
    feature: "opening",
    category: "pedestrian.principal",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "opening/trainstation",
    venueType: "trainstation",
    feature: "opening",
    category: "pedestrian.transit",
    definition:
      "Models the presence and physical extent of an entrance with or without a physical door.",
  },
  {
    collection: "relationship",
    venueType: "",
    feature: "relationship",
    category: "elevator",
    definition:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
  },
  {
    collection: "relationship",
    venueType: "",
    feature: "relationship",
    category: "escalator",
    definition:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
  },
  {
    collection: "relationship",
    venueType: "",
    feature: "relationship",
    category: "movingwalkway",
    definition:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
  },
  {
    collection: "relationship",
    venueType: "",
    feature: "relationship",
    category: "ramp",
    definition:
      "Models the presence and approximate point location or physical extent of an incline plane.",
  },
  {
    collection: "relationship",
    venueType: "",
    feature: "relationship",
    category: "stairs",
    definition:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
  },
  {
    collection: "relationship",
    venueType: "",
    feature: "relationship",
    category: "traversal",
    definition: "",
  },
  {
    collection: "relationship",
    venueType: "",
    feature: "relationship",
    category: "traversal.path",
    definition: "",
  },
  {
    collection: "restriction",
    venueType: "",
    feature: "restriction",
    category: "employeesonly",
    definition:
      "Describes a space that is restricted to employees of the physical Venue.",
  },
  {
    collection: "restriction",
    venueType: "",
    feature: "restriction",
    category: "restricted",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "arcade",
    definition: "Facilities offering arcade games.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "baggageclaim",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a baggage claim operation.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "baggageclaim.intl",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a baggage claim operation dedicated to international flight operations.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "carrental",
    definition:
      "A business that rents and leases motor vehicles. Businesses that rent trucks for moving and related purposes should be categorized under truck rentalservices.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "carrental",
    definition:
      "Models the presence and approximate point location or thematic extent of an open or semi-enclosed environment of a space containing one or more car rental operation.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "carrental.dropoff",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a car rental drop-off operation.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "checkin",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a collection of check-in operations.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "concessions",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing concession operations.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "cubicle",
    definition:
      "Models the presence and approximate thematic extent of a partially enclosed office workspace.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "dutyfree",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment where a pedestrian may purchase duty free goods and services.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "eatingdrinking",
    definition:
      'Models the presence and approximate thematic extent of an open or semi-enclosed environment that is used as a "common" area for dining.',
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "entertainmentarea",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of entertainment.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "entertainmentarea.game",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of games, gambling, or some other playful/competitive pursuit.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "entertainmentarea.music",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of musical entertainment.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "entertainmentarea.performance",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of movie, theater or live performances.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "entertainmentarea.sport",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of a competitive physical activity.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "exhibit",
    definition:
      'Models the presence and approximate point location of "...an object, work of art, activity, artifact or poster designed to demonstrate a concept or show an example.", or the approximate thematic extent of an open or semi-enclosed environment containing an exhibit.',
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "exhibition",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing exhibits.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling",
    definition:
      "A business that offers placing a wager on a outcome such, such as a competitor in a sporting event or a number in a lottery.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.baccarat",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.bingo",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.blackjack",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.craps",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.keno",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.mahjong",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.medalgame",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.minibaccarat",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.offtrackbetting",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.pachinko",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.paigow",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.poker",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.poker.letitride",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.poker.paigow",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.poker.threecard",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.poker.video",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.roulette",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.rummy",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.sicbo",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.slotmachine",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gambling.slotmachine.highlimit",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gatearea",
    definition:
      "Models the presence and approximate extent of an open or semi-enclosed environment containing a collection of thematically related gate holding areas.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "gatearea.holding",
    definition:
      'Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a single gate holding area. The function of the gate holding area is to "hold" persons that are expected to pass through a single boarding gate.',
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "immigration",
    definition:
      'Models the presence and approximate point location of an immigration operation. (Also known as "Passport Control.")',
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "immigration.schengen",
    definition:
      'Models the presence and approximate thematic extent of an open or semi-enclosed environment containing an immigration operation that "processes" pedestrians from multiple different countries in accordance with a legal framework that allows for a common visa policy.\n\nAlthough "Schengen" describes a border control arrangement that exists in Europe, the same category can be used to describe a similar legal arrangement that exists amongst other countries around the world.',
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "information",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of information.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "paidarea",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a paid area.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "parkandride",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is to host a Park & Ride service.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "parking.bicycle",
    definition:
      "A business that offers parking spaces/services for bicycles only OR a large space specifically made for parking bicycles only, with or without a fee and may or may not have onsite pesonnel. OK to use for businesses that provide bike valet services as a core offering. Please note this should only be used for locations/businesses whose core competency is bike parking. Businesses that have bike racks at/outside of their space should not be categorized under Bike Parking (they should use the Bike Parking attribute, instead). Random bike racks located on public streets/areas are ineligible for a listing.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "parking.bicycle",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of bicycles.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "parking.compact",
    definition:
      'Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of vehicles defined in the automotive industry as being "compact.',
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "parking.ev",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of electric vehicles.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "parking.longterm",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment  whose intended purpose is the storage of vehicles for an extended period of time.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "parking.motorcycle",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed of an environment whose intended purpose is the storage of motorcycles.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "parking.shortterm",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of vehicles for a short period of time.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "parking.waitingarea",
    definition:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is use by a person (and their vehicle) to wait for the arrival of another person(s).",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "platform",
    definition:
      "Models the presence and approximate point location of an individually named (or numbered) train platform.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "platform",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed area of a railway platform that is distinct from another area of the same physical railway platform, or the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a platform.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "postsecurity",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as post-security.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "presecurity",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as pre-security.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "private",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment that is describable by the Venue Organization as private.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "recomposearea",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment where one can restore composure or calmness. Such as when one exits a security check-point.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "recreation",
    definition: "Business or location related to recreational activities.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "recreation",
    definition:
      "Models the presence and approximate point location of a break room or recreational space.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "rental",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "retail",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a retail operation.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "retaildepartment",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment that contains a particular category of products and/or services.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "road",
    definition:
      "Models the presence and physical extent of an enclosed area within a physical building that is used by moving vehicles, or an open or semi-enclosed environment used by moving vehicles.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "seating",
    definition:
      "models the presence and location of an open or semi-enclosed seating environment.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "seatingrow",
    definition: "Models the presence and physical extent of a row of seats.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "security",
    definition:
      "A business or organization who can be hired for private security",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "security",
    definition:
      "Models the presence and approximate point location of an area, or approximate thematic extent of an open or semi-enclosed area, containing a security operation.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "servicearea",
    definition: "",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "ticketing",
    definition:
      "Models the presence and approximate point location of an automated or manned ticketing operation, or the approximate thematic extent of an area containing ticketing operations and services.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "vegetation",
    definition:
      "Models the presence and physical extent of a natural or artificial vegetation feature or an open or semi-enclosed vegetative area that may or may not be prohibited from being used as a pedestrian pathway.",
  },
  {
    collection: "section",
    venueType: "",
    feature: "section",
    category: "walkway",
    definition:
      "Models the presence and physical extent of a pedestrian pathway.",
  },
  {
    collection: "section/airport",
    venueType: "airport",
    feature: "section",
    category: "baggageclaim",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a baggage claim operation.",
  },
  {
    collection: "section/airport",
    venueType: "airport",
    feature: "section",
    category: "checkin",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a collection of check-in operations.",
  },
  {
    collection: "section/airport",
    venueType: "airport",
    feature: "section",
    category: "gatearea",
    definition:
      "Models the presence and approximate extent of an open or semi-enclosed environment containing a collection of thematically related gate holding areas.",
  },
  {
    collection: "section/airport",
    venueType: "airport",
    feature: "section",
    category: "immigration",
    definition:
      'Models the presence and approximate point location of an immigration operation. (Also known as "Passport Control.")',
  },
  {
    collection: "section/airport",
    venueType: "airport",
    feature: "section",
    category: "security",
    definition:
      "A business or organization who can be hired for private security",
  },
  {
    collection: "section/airport",
    venueType: "airport",
    feature: "section",
    category: "security",
    definition:
      "Models the presence and approximate point location of an area, or approximate thematic extent of an open or semi-enclosed area, containing a security operation.",
  },
  {
    collection: "section/airport",
    venueType: "airport.intl",
    feature: "section",
    category: "baggageclaim",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a baggage claim operation.",
  },
  {
    collection: "section/airport",
    venueType: "airport.intl",
    feature: "section",
    category: "checkin",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a collection of check-in operations.",
  },
  {
    collection: "section/airport",
    venueType: "airport.intl",
    feature: "section",
    category: "gatearea",
    definition:
      "Models the presence and approximate extent of an open or semi-enclosed environment containing a collection of thematically related gate holding areas.",
  },
  {
    collection: "section/airport",
    venueType: "airport.intl",
    feature: "section",
    category: "immigration",
    definition:
      'Models the presence and approximate point location of an immigration operation. (Also known as "Passport Control.")',
  },
  {
    collection: "section/airport",
    venueType: "airport.intl",
    feature: "section",
    category: "security",
    definition:
      "A business or organization who can be hired for private security",
  },
  {
    collection: "section/airport",
    venueType: "airport.intl",
    feature: "section",
    category: "security",
    definition:
      "Models the presence and approximate point location of an area, or approximate thematic extent of an open or semi-enclosed area, containing a security operation.",
  },
  {
    collection: "section/trainstation",
    venueType: "trainstation",
    feature: "section",
    category: "immigration",
    definition:
      'Models the presence and approximate point location of an immigration operation. (Also known as "Passport Control.")',
  },
  {
    collection: "section/trainstation",
    venueType: "trainstation",
    feature: "section",
    category: "paidarea",
    definition:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a paid area.",
  },
  {
    collection: "section/trainstation",
    venueType: "trainstation",
    feature: "section",
    category: "security",
    definition:
      "A business or organization who can be hired for private security",
  },
  {
    collection: "section/trainstation",
    venueType: "trainstation",
    feature: "section",
    category: "security",
    definition:
      "Models the presence and approximate point location of an area, or approximate thematic extent of an open or semi-enclosed area, containing a security operation.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "auditorium",
    definition:
      "Models the presence and physical extent of an enclosed space that supports presentations, performances or learning.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "brick",
    definition: "",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "classroom",
    definition: "Models the presence and physical extent of a learning space.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "column",
    definition:
      "Models the presence and physical extent of a floor-to-ceiling standalone column.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "concrete",
    definition: "",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "conferenceroom",
    definition:
      "Models the following types of meeting space:\n\nSmall meeting space: An enclosed meeting space for two to four persons, suitable for both formal and informal interaction.\n\nLarge meeting space: An enclosed meeting space for five or more people, suitable for formal interaction.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "drywall",
    definition: "",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "elevator",
    definition:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "escalator",
    definition:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "fieldofplay",
    definition:
      "Intramural sports or recreational fields usually found on college/university campus.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "fieldofplay",
    definition:
      "Models the presence and approximate point location of a sports field.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "fieldofplay",
    definition:
      "Models the presence and physical extent of an area used to play sports.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "firstaid",
    definition:
      "Models the presence and approximate point location of: A medical support operation or First Aid, or the physical extent of a space containing a medical support operation..",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "fitnessroom",
    definition:
      "<odels the presence and physical extent of an exercise/training room.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "foodservice",
    definition:
      "Models the presence and approximate point location of a foodservice operation where a pedestrian can enjoy food and drink. The foodservice is offered by a foodservice company.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "footbridge",
    definition:
      "Models the presence and physical extent of an open, semi- or enclosed footbridge that connects Buildings.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "glass",
    definition: "",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "huddleroom",
    definition:
      "Models the presence and physical extent of an enclosed meeting space suitable for ad hoc, informal meetings.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "kitchen",
    definition: "",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "laboratory",
    definition:
      "Models the presence and physical extent of an enclosed space that provides controlled conditions in which scientific or technological research, experiments, and measurement may be performed.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "library",
    definition:
      "A building or room where media is collected for people to read, borrow, and reference. Traditionally this is mostly books, but may also include other media too.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "library",
    definition:
      "Models the presence and physical extent of an enclosed area containing sources of information.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "lobby",
    definition:
      "Models the presence and physical extent of an enclosed foyer or entrance hall.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "lounge",
    definition:
      "Models the presence and physical extent of a space where people can sit and relax.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "mailroom",
    definition:
      "Models the presence and physical extent of an enclosed space where: Incoming and outgoing mail is processed and sorted. Incoming/outgoing mail is dropped-off/picked up.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "mothersroom",
    definition:
      "Models the presence and approximate point or physical extent of an enclosed space where a woman may breastfeed or use a breast pump in private.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "movietheater",
    definition:
      "Models the presence and physical extent of a room used to view films.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "movingwalkway",
    definition:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "nonpublic",
    definition:
      "An area/space that contains operational, administrative, and/or management functions whose environments, if mapped, would have little or no relevance from a pedestrian standpoint.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "office",
    definition:
      'Models the presence and physical extent of an enclosed work space. "office" models:\n\nA private office: An enclosed work space for one person, suitable for activities which are confidential, demand a lot of concentration or include many small meetings.\n\nA shared office: An enclosed work space for two or three people, suitable for semi-concentrated work and collaborative work in small groups.\n\nA team room: An enclosed work space for four to ten people; suitable for teamwork which may be confidential and demands frequent internal communication.',
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "opentobelow",
    definition:
      'Models the presence and physical extent of a vertical "column" of air that is visible to a pedestrian, and which extends through one or more floor of a physical building.',
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "phoneroom",
    definition:
      "Models the presence and physical extent of a physically enclosed space intended for phone calls.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "platform",
    definition:
      "Models the presence and approximate point location of an individually named (or numbered) train platform.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "platform",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed area of a railway platform that is distinct from another area of the same physical railway platform, or the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a platform.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "privatelounge",
    definition:
      "Models the presence and physical extent of an enclosed space that is made available to authorized pedestrians.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "ramp",
    definition:
      "Models the presence and approximate point location or physical extent of an incline plane.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "recreation",
    definition: "Business or location related to recreational activities.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "recreation",
    definition:
      "Models the presence and approximate point location of a break room or recreational space.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single enclosed space, containing bathroom facilities.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.family",
    definition: "A bathroom intended for family use",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.family",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a family.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.female",
    definition: "A bathroom intended for female use",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.female",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a female.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.female.wheelchair",
    definition:
      "Models the presence and approximate point location of a female bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.male",
    definition: "A bathroom intended for male use",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.male",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a male.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.male.wheelchair",
    definition:
      "Models the presence and approximate point location of a male bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.transgender",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a person that identifies themselves as transgender.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.transgender.wheelchair",
    definition:
      "Models the presence and approximate point location of a transgender bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.unisex",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by any person.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.unisex",
    definition:
      "Restroom designed to be used by any person, regardless of gender.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.unisex.wheelchair",
    definition:
      "Models the presence and approximate point location of a unisex bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.wheelchair",
    definition:
      "Dedicated restroom designed to be accessible for those with physical disabilities.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "restroom.wheelchair",
    definition:
      "Models the presence and approximate point location of a bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "road",
    definition:
      "Models the presence and physical extent of an enclosed area within a physical building that is used by moving vehicles, or an open or semi-enclosed environment used by moving vehicles.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "room",
    definition:
      'Models a "...distinguishable space within a structure. Usually, a room is separated from other spaces or passageways by interior walls; moreover, it is separated from outdoor areas by an exterior wall, sometimes with a door.',
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "serverroom",
    definition:
      "Models the presence and physical extent of an enclosed space devoted to the operation of computer servers.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "shower",
    definition:
      "Models the presence and approximate point location of one or more neighboring shower facility and adjoining locker/changing area, or the physical extent of an enclosed space that provides shower facilities and adjoining locker/changing area.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "smokingarea",
    definition:
      "Models the presence and approximate point location, or physical extent of a space containing a smoking area or facility.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "stairs",
    definition:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "steps",
    definition:
      "Models the presence and physical extent of a series of steps that support vertical traversal on a physical floor of variable height. Despite the variable height, the physical floor is modeled as a single Level.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "storage",
    definition:
      "Models the presence and approximate point location of a storage facility.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "structure",
    definition:
      "Models the presence and physical extent of a network of floor-to-ceiling walls or an integrated system of walls and columns.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "terrace",
    definition: "",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "theater",
    definition:
      "Groups or locations featuring live performance arts in fields such as music, theater, and dance.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "unenclosedarea",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "unspecified",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "vegetation",
    definition:
      "Models the presence and physical extent of a natural or artificial vegetation feature or an open or semi-enclosed vegetative area that may or may not be prohibited from being used as a pedestrian pathway.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "waitingroom",
    definition: "",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "walkway",
    definition:
      "Models the presence and physical extent of a pedestrian pathway.",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "walkway.island",
    definition: "",
  },
  {
    collection: "unit",
    venueType: "",
    feature: "unit",
    category: "wood",
    definition: "",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "elevator",
    definition:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "escalator",
    definition:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "movingwalkway",
    definition:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "nonpublic",
    definition:
      "An area/space that contains operational, administrative, and/or management functions whose environments, if mapped, would have little or no relevance from a pedestrian standpoint.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "office",
    definition:
      'Models the presence and physical extent of an enclosed work space. "office" models:\n\nA private office: An enclosed work space for one person, suitable for activities which are confidential, demand a lot of concentration or include many small meetings.\n\nA shared office: An enclosed work space for two or three people, suitable for semi-concentrated work and collaborative work in small groups.\n\nA team room: An enclosed work space for four to ten people; suitable for teamwork which may be confidential and demands frequent internal communication.',
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "opentobelow",
    definition:
      'Models the presence and physical extent of a vertical "column" of air that is visible to a pedestrian, and which extends through one or more floor of a physical building.',
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "platform",
    definition:
      "Models the presence and approximate point location of an individually named (or numbered) train platform.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "platform",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed area of a railway platform that is distinct from another area of the same physical railway platform, or the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a platform.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "ramp",
    definition:
      "Models the presence and approximate point location or physical extent of an incline plane.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single enclosed space, containing bathroom facilities.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.family",
    definition: "A bathroom intended for family use",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.family",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a family.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.female",
    definition: "A bathroom intended for female use",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.female",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a female.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.female.wheelchair",
    definition:
      "Models the presence and approximate point location of a female bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.male",
    definition: "A bathroom intended for male use",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.male",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a male.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.male.wheelchair",
    definition:
      "Models the presence and approximate point location of a male bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.unisex",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by any person.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.unisex",
    definition:
      "Restroom designed to be used by any person, regardless of gender.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.wheelchair",
    definition:
      "Dedicated restroom designed to be accessible for those with physical disabilities.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "restroom.wheelchair",
    definition:
      "Models the presence and approximate point location of a bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "road",
    definition:
      "Models the presence and physical extent of an enclosed area within a physical building that is used by moving vehicles, or an open or semi-enclosed environment used by moving vehicles.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "room",
    definition:
      'Models a "...distinguishable space within a structure. Usually, a room is separated from other spaces or passageways by interior walls; moreover, it is separated from outdoor areas by an exterior wall, sometimes with a door.',
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "stairs",
    definition:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "steps",
    definition:
      "Models the presence and physical extent of a series of steps that support vertical traversal on a physical floor of variable height. Despite the variable height, the physical floor is modeled as a single Level.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "unenclosedarea",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "unit/airport",
    venueType: "airport",
    feature: "unit",
    category: "walkway",
    definition:
      "Models the presence and physical extent of a pedestrian pathway.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "elevator",
    definition:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "escalator",
    definition:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "movingwalkway",
    definition:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "nonpublic",
    definition:
      "An area/space that contains operational, administrative, and/or management functions whose environments, if mapped, would have little or no relevance from a pedestrian standpoint.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "office",
    definition:
      'Models the presence and physical extent of an enclosed work space. "office" models:\n\nA private office: An enclosed work space for one person, suitable for activities which are confidential, demand a lot of concentration or include many small meetings.\n\nA shared office: An enclosed work space for two or three people, suitable for semi-concentrated work and collaborative work in small groups.\n\nA team room: An enclosed work space for four to ten people; suitable for teamwork which may be confidential and demands frequent internal communication.',
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "opentobelow",
    definition:
      'Models the presence and physical extent of a vertical "column" of air that is visible to a pedestrian, and which extends through one or more floor of a physical building.',
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "platform",
    definition:
      "Models the presence and approximate point location of an individually named (or numbered) train platform.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "platform",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed area of a railway platform that is distinct from another area of the same physical railway platform, or the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a platform.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "ramp",
    definition:
      "Models the presence and approximate point location or physical extent of an incline plane.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single enclosed space, containing bathroom facilities.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.family",
    definition: "A bathroom intended for family use",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.family",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a family.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.female",
    definition: "A bathroom intended for female use",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.female",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a female.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.female.wheelchair",
    definition:
      "Models the presence and approximate point location of a female bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.male",
    definition: "A bathroom intended for male use",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.male",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a male.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.male.wheelchair",
    definition:
      "Models the presence and approximate point location of a male bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.unisex",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by any person.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.unisex",
    definition:
      "Restroom designed to be used by any person, regardless of gender.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.wheelchair",
    definition:
      "Dedicated restroom designed to be accessible for those with physical disabilities.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "restroom.wheelchair",
    definition:
      "Models the presence and approximate point location of a bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "road",
    definition:
      "Models the presence and physical extent of an enclosed area within a physical building that is used by moving vehicles, or an open or semi-enclosed environment used by moving vehicles.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "room",
    definition:
      'Models a "...distinguishable space within a structure. Usually, a room is separated from other spaces or passageways by interior walls; moreover, it is separated from outdoor areas by an exterior wall, sometimes with a door.',
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "stairs",
    definition:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "steps",
    definition:
      "Models the presence and physical extent of a series of steps that support vertical traversal on a physical floor of variable height. Despite the variable height, the physical floor is modeled as a single Level.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "unenclosedarea",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "unit/airport",
    venueType: "airport.intl",
    feature: "unit",
    category: "walkway",
    definition:
      "Models the presence and physical extent of a pedestrian pathway.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "elevator",
    definition:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "escalator",
    definition:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "movingwalkway",
    definition:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "nonpublic",
    definition:
      "An area/space that contains operational, administrative, and/or management functions whose environments, if mapped, would have little or no relevance from a pedestrian standpoint.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "office",
    definition:
      'Models the presence and physical extent of an enclosed work space. "office" models:\n\nA private office: An enclosed work space for one person, suitable for activities which are confidential, demand a lot of concentration or include many small meetings.\n\nA shared office: An enclosed work space for two or three people, suitable for semi-concentrated work and collaborative work in small groups.\n\nA team room: An enclosed work space for four to ten people; suitable for teamwork which may be confidential and demands frequent internal communication.',
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "opentobelow",
    definition:
      'Models the presence and physical extent of a vertical "column" of air that is visible to a pedestrian, and which extends through one or more floor of a physical building.',
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "ramp",
    definition:
      "Models the presence and approximate point location or physical extent of an incline plane.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single enclosed space, containing bathroom facilities.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.family",
    definition: "A bathroom intended for family use",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.family",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a family.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.female",
    definition: "A bathroom intended for female use",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.female",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a female.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.female.wheelchair",
    definition:
      "Models the presence and approximate point location of a female bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.male",
    definition: "A bathroom intended for male use",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.male",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a male.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.male.wheelchair",
    definition:
      "Models the presence and approximate point location of a male bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.unisex",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by any person.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.unisex",
    definition:
      "Restroom designed to be used by any person, regardless of gender.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.wheelchair",
    definition:
      "Dedicated restroom designed to be accessible for those with physical disabilities.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "restroom.wheelchair",
    definition:
      "Models the presence and approximate point location of a bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "road",
    definition:
      "Models the presence and physical extent of an enclosed area within a physical building that is used by moving vehicles, or an open or semi-enclosed environment used by moving vehicles.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "room",
    definition:
      'Models a "...distinguishable space within a structure. Usually, a room is separated from other spaces or passageways by interior walls; moreover, it is separated from outdoor areas by an exterior wall, sometimes with a door.',
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "stairs",
    definition:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "steps",
    definition:
      "Models the presence and physical extent of a series of steps that support vertical traversal on a physical floor of variable height. Despite the variable height, the physical floor is modeled as a single Level.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "unenclosedarea",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "unit/shoppingcenter",
    venueType: "shoppingcenter",
    feature: "unit",
    category: "walkway",
    definition:
      "Models the presence and physical extent of a pedestrian pathway.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "elevator",
    definition:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "escalator",
    definition:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "movingwalkway",
    definition:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "nonpublic",
    definition:
      "An area/space that contains operational, administrative, and/or management functions whose environments, if mapped, would have little or no relevance from a pedestrian standpoint.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "office",
    definition:
      'Models the presence and physical extent of an enclosed work space. "office" models:\n\nA private office: An enclosed work space for one person, suitable for activities which are confidential, demand a lot of concentration or include many small meetings.\n\nA shared office: An enclosed work space for two or three people, suitable for semi-concentrated work and collaborative work in small groups.\n\nA team room: An enclosed work space for four to ten people; suitable for teamwork which may be confidential and demands frequent internal communication.',
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "opentobelow",
    definition:
      'Models the presence and physical extent of a vertical "column" of air that is visible to a pedestrian, and which extends through one or more floor of a physical building.',
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "parking",
    definition:
      "Locations that provide office space to park vehicles, usually for a fee.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "parking",
    definition:
      "Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "platform",
    definition:
      "Models the presence and approximate point location of an individually named (or numbered) train platform.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "platform",
    definition:
      "Models the presence and approximate thematic extent of an open or semi-enclosed area of a railway platform that is distinct from another area of the same physical railway platform, or the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a platform.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "ramp",
    definition:
      "Models the presence and approximate point location or physical extent of an incline plane.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single enclosed space, containing bathroom facilities.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.family",
    definition: "A bathroom intended for family use",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.family",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a family.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.female",
    definition: "A bathroom intended for female use",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.female",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a female.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.female.wheelchair",
    definition:
      "Models the presence and approximate point location of a female bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.male",
    definition: "A bathroom intended for male use",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.male",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a male.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.male.wheelchair",
    definition:
      "Models the presence and approximate point location of a male bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.unisex",
    definition:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by any person.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.unisex",
    definition:
      "Restroom designed to be used by any person, regardless of gender.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.wheelchair",
    definition:
      "Dedicated restroom designed to be accessible for those with physical disabilities.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "restroom.wheelchair",
    definition:
      "Models the presence and approximate point location of a bathroom facility that is entirely dedicated to persons with a disability.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "road",
    definition:
      "Models the presence and physical extent of an enclosed area within a physical building that is used by moving vehicles, or an open or semi-enclosed environment used by moving vehicles.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "room",
    definition:
      'Models a "...distinguishable space within a structure. Usually, a room is separated from other spaces or passageways by interior walls; moreover, it is separated from outdoor areas by an exterior wall, sometimes with a door.',
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "stairs",
    definition:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "steps",
    definition:
      "Models the presence and physical extent of a series of steps that support vertical traversal on a physical floor of variable height. Despite the variable height, the physical floor is modeled as a single Level.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "unenclosedarea",
    definition:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
  },
  {
    collection: "unit/trainstation",
    venueType: "trainstation",
    feature: "unit",
    category: "walkway",
    definition:
      "Models the presence and physical extent of a pedestrian pathway.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "airport",
    definition:
      "A facility or complex where airplanes can regularly take off and land.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "airport",
    definition: "Models a Venue that services domestic airport locations",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "airport.intl",
    definition:
      "A  facility for the landing, takeoff, shelter, supply, and repair of aircrafts that offers customs and immigration facilities for passengers travelling between countries.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "airport.intl",
    definition: "Models a Venue that services international airport locations",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "aquarium",
    definition:
      "Facilities exhibiting aquatic enclosures of fish and marine life. Can be cross-categorized with Zoos.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "businesscampus",
    definition:
      "A collection of multiple commercial buildings where business is operated from them",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "casino",
    definition:
      "Venues hosting legalized gambling. Includes games of chance and sports betting.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "communitycenter",
    definition:
      "A space maintained by the local community, that is host to social, educational and recreational activities.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "conventioncenter",
    definition:
      "A convention center is a large building that is designed to hold a convention, where individuals and groups gather to promote and share common interests. Convention centers typically offer sufficient floor area to accommodate several thousand attendees. Synonym: exhibition center",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "governmentfacility",
    definition: "",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "healthcarefacility",
    definition: "",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "hotel",
    definition:
      "Businesses providing short-term lodging, that typically have a staff that cleans and maintains rooms for its guests.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "museum",
    definition:
      "Facilities dedicated to the collection, preservation, and display of items of historical, artisic, or scientic value.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "parkingfacility",
    definition: "Enclosed parking structure.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "resort",
    definition:
      "A self-contained commercial destination which provide for most of a guest's wants while remaining on the premises, such as food, drink, lodging, sports, entertainment, and shopping. Usually a resort is based around a particular purpose or theme that serves as the primary attraction for visitors.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "retailstore",
    definition: "",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "shoppingcenter",
    definition:
      "A complex containing several retail businesses. Usually accompanied with parking and food courts and or restaurants.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "stadium",
    definition:
      "A Sports Complex consists of more than one sports venue in the same general location sharing common grounds, parking, etc., and has a formal name.  The Meadowlands Sports Complex in New Jersey consists of Metlife Stadium, Izod Center, and Meadowlands Racetrack.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "stripmall",
    definition:
      "Suburban plaza or strip mall which contains a variety of local stores and / or branded stores.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "theater",
    definition:
      "Groups or locations featuring live performance arts in fields such as music, theater, and dance.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "themepark",
    definition: "",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "trainstation",
    definition:
      "A location where one could expect to either board or alight from a train.",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "transitstation",
    definition: "",
  },
  {
    collection: "venue",
    venueType: "",
    feature: "venue",
    category: "university",
    definition: "",
  },
] as imdfCategory[];

// dedupe by category; if multiple exists with the same category, merge the definitions
const dedupedImdfCategories = [] as imdfCategory[];
for (const category of imdfCategoriesRaw) {
  const existingCategory = dedupedImdfCategories.find(
    (c) => c.category === category.category && c.feature === category.feature,
  );
  if (existingCategory) {
    // check if definition is already listed
    if (existingCategory.definition.includes(category.definition)) {
      continue; // skip if definition already exists
    }
    existingCategory.definition += `\n\n${category.definition}`;
  } else {
    dedupedImdfCategories.push({ ...category });
  }
}

export const IMDF_CATEGORIES = dedupedImdfCategories;

export interface imdfCategory {
  collection: string;
  venueType: string;
  feature: string;
  category: string;
  definition: string;
}

export const IMDF_ACCESS_CONTROL_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "access-control",
) as (imdfCategory & { category: ACCESS_CONTROL_CATEGORY })[];

export const IMDF_ACCESSIBILITY_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "accessibility",
) as (imdfCategory & { category: ACCESSIBILITY_CATEGORY })[];

export const IMDF_AMENITY_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "amenity",
) as (imdfCategory & { category: AMENITY_CATEGORY })[];

export const IMDF_BUILDING_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "building",
) as (imdfCategory & { category: BUILDING_CATEGORY })[];

export const IMDF_DOOR_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "door",
) as (imdfCategory & { category: DOOR_TYPE })[];

export const IMDF_DOOR_MATERIAL_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "door-material",
) as (imdfCategory & { category: DOOR_MATERIAL_CATEGORY })[];

export const IMDF_FIXTURE_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "fixture",
) as (imdfCategory & { category: FIXTURE_CATEGORY })[];

export const IMDF_FOOTPRINT_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "footprint",
) as (imdfCategory & { category: FOOTPRINT_CATEGORY })[];

export const IMDF_GEOFENCE_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "geofence",
) as (imdfCategory & { category: GEOFENCE_CATEGORY })[];

export const IMDF_LEVEL_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "level",
) as (imdfCategory & { category: LEVEL_CATEGORY })[];

export const IMDF_OCCUPANT_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "occupant",
) as (imdfCategory & { category: OCCUPANT_CATEGORY })[];

export const IMDF_OPENING_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "opening",
) as (imdfCategory & { category: OPENING_CATEGORY })[];

export const IMDF_RELATIONSHIP_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "relationship",
) as (imdfCategory & { category: RELATIONSHIP_CATEGORY })[];

export const IMDF_RESTRICTION_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "restriction",
) as (imdfCategory & { category: RESTRICTION_CATEGORY })[];

export const IMDF_SECTION_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "section",
) as (imdfCategory & { category: SECTION_CATEGORY })[];

export const IMDF_UNIT_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "unit",
) as (imdfCategory & { category: UNIT_CATEGORY })[];

export const IMDF_VENUE_CATEGORIES = IMDF_CATEGORIES.filter(
  (type) => type.feature === "venue",
) as (imdfCategory & { category: VENUE_CATEGORY })[];
