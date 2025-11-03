import {
  IconAngle,
  IconBabyBottle,
  IconBabyCarriageFilled,
  IconBallBasketball,
  IconBath,
  IconBedFilled,
  IconBike,
  IconBoltFilled,
  IconBookFilled,
  IconBriefcase2Filled,
  IconBriefcaseFilled,
  IconBuildingMonument,
  IconBusFilled,
  IconCarFilled,
  IconCash,
  IconDisabled2,
  IconDropletFilled,
  IconElevator,
  IconEscalator,
  IconFerryFilled,
  IconFlameFilled,
  IconGenderFemale,
  IconGenderMale,
  IconHeartFilled,
  IconInfoCircle,
  IconLetterP,
  IconLogin2,
  IconMailFilled,
  IconMapPin,
  IconMasksTheater,
  IconMedicalCross,
  IconPawFilled,
  IconPhone,
  IconPhoneFilled,
  IconPhoto,
  IconPlaneDeparture,
  IconPray,
  IconPrinter,
  IconPuzzleFilled,
  IconShieldHalfFilled,
  IconShoppingBag,
  IconSmoking,
  IconSofa,
  IconStairs,
  IconSwimming,
  IconTicket,
  IconToiletPaper,
  IconToolsKitchen3,
  IconTrain,
  IconTrainFilled,
  IconUserFilled,
  IconWalk,
  IconWifi,
  IconYoga,
} from "@tabler/icons-react";
import { RadixColor } from "./radix";

export const newImdfCategories = [
  {
    group: "amenity",
    category: "mobilityrescue",
    description:
      "Models the presence and approximate point location of an assembly area where persons that experience disabilities may be assisted during an emergency event.",
    icon: IconDisabled2,
    subcategory: "emergency",
    defaultName: "PWD Holding Point",
  },
  {
    group: "amenity",
    category: "firealarmpullstation",
    description:
      "Models the presence and approximate point location of a fire protection device which, when activated, initiates an alarm on a fire alarm system.",
    icon: IconFlameFilled,
    subcategory: "emergency",
    defaultName: "Fire Alarm Pull Station",
  },
  {
    group: "amenity",
    category: "fireextinguisher",
    description:
      "Models the presence and approximate point location of a fire protection device.",
    icon: IconFlameFilled,
    subcategory: "emergency",
    defaultName: "Fire Extinguisher",
  },
  {
    group: "amenity",
    category: "emergencyshelter",
    description:
      "Models the presence and approximate point location of a room designed to provide shelter. e.g., protection from severe weather conditions.",
    icon: IconHeartFilled,
    subcategory: "emergency",
    defaultName: "Emergency Shelter",
  },
  {
    group: "amenity",
    category: "defibrillator",
    description:
      "Models the presence and approximate point location of an Automated External Defibrillator (AED).",
    icon: IconMedicalCross,
    subcategory: "emergency",
    defaultName: "Automated External Defibrillator (AED)",
  },
  {
    group: "amenity",
    category: "firstaid",
    description:
      "Models the presence and approximate point location of: A medical support operation or First Aid, or the physical extent of a space containing a medical support operation..",
    icon: IconMedicalCross,
    subcategory: "emergency",
    defaultName: "First Aid Station",
  },
  {
    group: "amenity",
    category: "phone.emergency",
    description:
      "Models the presence and approximate point location of an emergency telephone service.",
    icon: IconPhone,
    subcategory: "emergency",
    defaultName: "Emergency Phone",
  },
  {
    group: "amenity",
    category: "eatingdrinking",
    description:
      'Models the presence and approximate thematic extent of an open or semi-enclosed environment that is used as a "common" area for dining.',
    icon: IconToolsKitchen3,
    subcategory: "fnb",
    defaultName: "Dining Area",
  },
  {
    group: "amenity",
    category: "foodservice",
    description:
      "Models the presence and approximate point location of a foodservice operation where a pedestrian can enjoy food and drink. The foodservice is offered by a foodservice company.",
    icon: IconToolsKitchen3,
    subcategory: "fnb",
    defaultName: "Food Service",
  },
  {
    group: "amenity",
    category: "baggagecarousel",
    description:
      "Models the presence and approximate point location of an individual Baggage Carousel.",
    icon: IconBriefcase2Filled,
    subcategory: "generic",
    defaultName: "Baggage Carousel",
  },
  {
    group: "amenity",
    category: "baggagecarousel.intl",
    description:
      "Models the presence and approximate point location of an individual Baggage Carousel that is either dedicated or timed to support international arrival operations.",
    icon: IconBriefcase2Filled,
    subcategory: "generic",
    defaultName: "International Baggage Carousel",
  },
  {
    group: "amenity",
    category: "baggagecarts",
    description:
      "Models the presence and approximate point location of a baggage/luggage trolley system.",
    icon: IconBriefcase2Filled,
    subcategory: "generic",
    defaultName: "Baggage Carts",
  },
  {
    group: "amenity",
    category: "baggageclaim",
    description:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a baggage claim operation.",
    icon: IconBriefcase2Filled,
    subcategory: "generic",
    defaultName: "Baggage Claim",
  },
  {
    group: "amenity",
    category: "baggageclaim.oversize",
    description:
      "Models the presence and approximate point location of a baggage claim area, desk, or service where special or oversized baggage may be re-claimed. Examples of oversized items include: Golf clubs, skis, lacrosse/hockey sticks and other sporting equipment. Also, pets traveling in crates.",
    icon: IconBriefcase2Filled,
    subcategory: "generic",
    defaultName: "Oversize Baggage Claim",
  },
  {
    group: "amenity",
    category: "baggagerecheck",
    description:
      "Models the presence and approximate point location of a baggage recheck service.",
    icon: IconBriefcase2Filled,
    subcategory: "generic",
    defaultName: "Baggage Recheck",
  },
  {
    group: "amenity",
    category: "baggagestorage",
    description:
      "Models the presence and approximate point location of a baggage service or facility where baggage may be temporarily stored.",
    icon: IconBriefcase2Filled,
    subcategory: "generic",
    defaultName: "Baggage Storage",
  },
  {
    group: "amenity",
    category: "checkin.desk.oversizebaggage",
    description:
      "Models the presence and approximate point location of a check-in area, desk, or service where special or oversized baggage may be checked in.",
    icon: IconBriefcase2Filled,
    subcategory: "generic",
    defaultName: "Oversize Baggage Check-In",
  },
  {
    group: "amenity",
    category: "coinlocker",
    description: "",
    icon: IconBriefcase2Filled,
    subcategory: "generic",
    defaultName: "Coin Locker",
  },
  {
    group: "amenity",
    category: "storage",
    description:
      "Models the presence and approximate point location of a storage facility.",
    icon: IconBriefcase2Filled,
    subcategory: "generic",
    defaultName: "Storage Facility",
  },
  {
    group: "amenity",
    category: "atm",
    description: "",
    icon: IconCash,
    subcategory: "generic",
    defaultName: "ATM",
  },
  {
    group: "amenity",
    category: "cashier",
    description:
      "Models the presence and approximate point location of a cashier operation.",
    icon: IconCash,
    subcategory: "generic",
    defaultName: "Cashier",
  },
  {
    group: "amenity",
    category: "changemachine",
    description:
      "Models the presence and approximate point location of a service that accepts large denominations of currency and returns an equal amount in smaller denominations.",
    icon: IconCash,
    subcategory: "generic",
    defaultName: "Change Machine",
  },
  {
    group: "amenity",
    category: "paidarea",
    description:
      "Models the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a paid area.",
    icon: IconCash,
    subcategory: "generic",
    defaultName: "Paid Area",
  },
  {
    group: "amenity",
    category: "drinkingfountain",
    description:
      "Models the presence and approximate point location of drinking water.",
    icon: IconDropletFilled,
    subcategory: "generic",
    defaultName: "Drinking Fountain",
  },
  {
    group: "amenity",
    category: "handsanitizerstation",
    description:
      "Models the presence and approximate point location of a hand sanitizer dispensing station.",
    icon: IconHeartFilled,
    subcategory: "generic",
    defaultName: "Hand Sanitizer Station",
  },
  {
    group: "amenity",
    category: "healthscreening",
    description:
      "Models the presence and approximate point location of personnel/equipment that supports a health screening operation.",
    icon: IconHeartFilled,
    subcategory: "generic",
    defaultName: "Health Screening",
  },
  {
    group: "amenity",
    category: "boardinggate",
    description:
      "Models the presence and approximate point location of a boarding gate operation. `boardinggate` should be used when a location cannot be classified using any other category in the hierarchy. `boardinggate` is not further defined in IMDF.",
    icon: IconLogin2,
    subcategory: "generic",
    defaultName: "Boarding Gate",
  },
  {
    group: "amenity",
    category: "entry",
    description:
      "Models the presence and approximate point location of an entrance to a physical building.",
    icon: IconLogin2,
    subcategory: "generic",
    defaultName: "Entrance",
  },
  {
    group: "amenity",
    category: "mailbox",
    description:
      "A physical box into which members of the public can deposit outgoing mail intended for collection by the agents of a country's postal service.",
    icon: IconMailFilled,
    subcategory: "generic",
    defaultName: "Mailbox",
  },
  {
    group: "amenity",
    category: "cabin",
    description: "",
    icon: IconMapPin,
    subcategory: "generic",
    defaultName: "Cabin",
  },
  {
    group: "amenity",
    category: "meetingpoint",
    description:
      "Models the presence and approximate point location of a defined place where people can meet.",
    icon: IconMapPin,
    subcategory: "generic",
    defaultName: "Meeting Point",
  },
  {
    group: "amenity",
    category: "unspecified",
    description:
      "Models the presence and approximate point location of a physical object or service that cannot be classified using any other category, or whose utilization is unknown.",
    icon: IconMapPin,
    subcategory: "generic",
    defaultName: "Unspecified Amenity",
  },
  {
    group: "amenity",
    category: "phone",
    description:
      'Models the presence and approximate point location of a telephone or a "bank" of telephones.',
    icon: IconPhone,
    subcategory: "generic",
    defaultName: "Public Phone",
  },
  {
    group: "amenity",
    category: "payphone",
    description: "",
    icon: IconPhone,
    subcategory: "generic",
    defaultName: "Payphone",
  },
  {
    group: "amenity",
    category: "arrivalgate",
    description:
      "Models the presence and approximate point location of an arrivals gate operation. In certain airports around the world, arrival gates are separately sign-posted from boarding gates.",
    icon: IconPlaneDeparture,
    subcategory: "generic",
    defaultName: "Arrival Gate",
  },
  {
    group: "amenity",
    category: "boardinggate.aircraft",
    description:
      "Models the presence and approximate point location of an aircraft boarding gate operation.",
    icon: IconPlaneDeparture,
    subcategory: "generic",
    defaultName: "Aircraft Boarding Gate",
  },
  {
    group: "amenity",
    category: "copymachine",
    description:
      "Models the presence and approximate point location of a copy machine service.",
    icon: IconPrinter,
    subcategory: "generic",
    defaultName: "Copy Machine",
  },
  {
    group: "amenity",
    category: "immigration",
    description:
      'Models the presence and approximate point location of an immigration operation. (Also known as "Passport Control.")',
    icon: IconShieldHalfFilled,
    subcategory: "generic",
    defaultName: "Immigration",
  },
  {
    group: "amenity",
    category: "police",
    description:
      "Models the presence and approximate point location of a police sub-station, office or desk that is permanently staffed by police.",
    icon: IconShieldHalfFilled,
    subcategory: "generic",
    defaultName: "Police Station",
  },
  {
    group: "amenity",
    category: "security",
    description:
      "A business or organization who can be hired for private security\n \n\n Models the presence and approximate point location of an area, or approximate thematic extent of an open or semi-enclosed area, containing a security operation.",
    icon: IconShieldHalfFilled,
    subcategory: "generic",
    defaultName: "Security",
  },
  {
    group: "amenity",
    category: "security.checkpoint",
    description:
      "Models the presence and approximate point location of personnel/equipment that supports a security operation.",
    icon: IconShieldHalfFilled,
    subcategory: "generic",
    defaultName: "Security Checkpoint",
  },
  {
    group: "amenity",
    category: "security.inspection",
    description:
      "Models the presence and approximate point location of an inspection operation. Customs Inspection (International Travel) National/Federal Inspection (Domestic Travel)",
    icon: IconShieldHalfFilled,
    subcategory: "generic",
    defaultName: "Security Inspection",
  },
  {
    group: "amenity",
    category: "checkin",
    description:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment containing a collection of check-in operations.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Check-In Area",
  },
  {
    group: "amenity",
    category: "checkin.desk",
    description:
      "Models the presence and approximate point location or physical extent of furniture that supports one or more check-in desk operations.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Check-In Desk",
  },
  {
    group: "amenity",
    category: "checkin.desk.transfer",
    description:
      "Models the presence and approximate point location of a manned transfer desk operation whose purpose is to facilitate a traveler's transfer to another outbound connection.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Transfer Check-In Desk",
  },
  {
    group: "amenity",
    category: "checkin.selfservice",
    description:
      "Models the presence and approximate point location of furniture/equipment that supports full or semi-automated check-in operations.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Self-Service Check-In",
  },
  {
    group: "amenity",
    category: "faregate",
    description:
      "Models the presence and approximate point location of equipment that supports a fully automated or manned fare gate operation.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Fare Gate",
  },
  {
    group: "amenity",
    category: "faregate.oversized",
    description:
      'Models the presence and approximate point location of a fare gate operation that is specifically designed for a pedestrian that requires an entrance whose width is greater than the "standard" fare gate.',
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Oversized Fare Gate",
  },
  {
    group: "amenity",
    category: "gatearea",
    description:
      "Models the presence and approximate extent of an open or semi-enclosed environment containing a collection of thematically related gate holding areas.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Gate Area",
  },
  {
    group: "amenity",
    category: "ticketing",
    description:
      "Models the presence and approximate point location of an automated or manned ticketing operation, or the approximate thematic extent of an area containing ticketing operations and services.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Ticketing",
  },
  {
    group: "amenity",
    category: "ticketing.airline",
    description:
      "Models the presence and approximate point location of a manned airline ticketing operation.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Airline Ticketing",
  },
  {
    group: "amenity",
    category: "ticketing.bus",
    description: "",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Bus Ticketing",
  },
  {
    group: "amenity",
    category: "ticketing.bus.muni",
    description:
      "Models the presence and approximate point location of an automated or manned bus ticketing operation that is provided by a local transit authority.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Local Bus Ticketing",
  },
  {
    group: "amenity",
    category: "ticketing.bus.national",
    description:
      "Models the presence and approximate point location of an automated or manned bus ticketing operation that is provided by a national transit authority.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "National Bus Ticketing",
  },
  {
    group: "amenity",
    category: "ticketing.rail",
    description: "",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Rail Ticketing",
  },
  {
    group: "amenity",
    category: "ticketing.rail.muni",
    description:
      "Models the presence and approximate point location of an automated or manned rail ticketing operation that is provided by a national transit authority.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Local Rail Ticketing",
  },
  {
    group: "amenity",
    category: "ticketing.rail.national",
    description:
      "Models the presence and approximate point location of an automated or manned rail ticketing operation that is provided by a national transit authority.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "National Rail Ticketing",
  },
  {
    group: "amenity",
    category: "ticketing.shuttle",
    description:
      "Models the presence and approximate point location of an automated or manned private ticketing operation that is provided by a private enterprise, not a national or local transit authority.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Shuttle Ticketing",
  },
  {
    group: "amenity",
    category: "vendingmachine.trainticket",
    description:
      "Models the presence and approximate point location of an automated system that vends train tickets.",
    icon: IconTicket,
    subcategory: "generic",
    defaultName: "Train Ticket Vending Machine",
  },
  {
    group: "amenity",
    category: "platform",
    description:
      "Models the presence and approximate point location of an individually named (or numbered) train platform.\n \n\n Models the presence and approximate thematic extent of an open or semi-enclosed area of a railway platform that is distinct from another area of the same physical railway platform, or the extent of a geofence whose area encompasses a physical environment that is describable by the Venue Organization as a platform.",
    icon: IconTrainFilled,
    subcategory: "generic",
    defaultName: "Train Platform",
  },
  {
    group: "amenity",
    category: "boardinggate.train",
    description:
      "Models the presence and approximate point location of a train boarding gate operation.",
    icon: IconTrainFilled,
    subcategory: "generic",
    defaultName: "Train Boarding Gate",
  },
  {
    group: "amenity",
    category: "traintrack",
    description:
      "Models the presence and approximate point location of an individually named (or numbered) train track or physical portion of a train platform.",
    icon: IconTrainFilled,
    subcategory: "generic",
    defaultName: "Train Track",
  },
  {
    group: "amenity",
    category: "seat",
    description:
      "Models the presence and approximate point location of a seat.",
    icon: IconUserFilled,
    subcategory: "generic",
    defaultName: "Seat",
  },
  {
    group: "amenity",
    category: "seating",
    description:
      "models the presence and location of an open or semi-enclosed seating environment.",
    icon: IconUserFilled,
    subcategory: "generic",
    defaultName: "Seating Area",
  },
  {
    group: "amenity",
    category: "pedestriancrossing",
    description:
      "Models the presence and approximate point location of a pedestrian crossing.",
    icon: IconWalk,
    subcategory: "generic",
    defaultName: "Pedestrian Crossing",
  },
  {
    group: "amenity",
    category: "ramp",
    description:
      "Models the presence and approximate point location or physical extent of an incline plane.",
    icon: IconAngle,
    subcategory: "mobility",
    defaultName: "Ramp",
  },
  {
    group: "amenity",
    category: "elevator",
    description:
      "Models the presence and approximate point location of one or more elevator that offers vertical traversal capabilities.",
    icon: IconElevator,
    subcategory: "mobility",
    defaultName: "Elevator",
  },
  {
    group: "amenity",
    category: "escalator",
    description:
      "Models the presence and physical extent of a single escalator that offers vertical traversal capabilities.",
    icon: IconEscalator,
    subcategory: "mobility",
    defaultName: "Escalator",
  },
  {
    group: "amenity",
    category: "stairs",
    description:
      "Models the presence and approximate point location of one or more neighboring staircase, or the physical extent of a single staircase, that supports vertical traversal to a physically different floor that may or may not be eligible for capture as a Level.",
    icon: IconStairs,
    subcategory: "mobility",
    defaultName: "Stairs",
  },
  {
    group: "amenity",
    category: "movingwalkway",
    description:
      "Models the presence and approximate point location or physical extent of one or more neighboring moving conveyor mechanism that transports pedestrians across a horizontal or inclined plane over a short to medium distance.",
    icon: IconWalk,
    subcategory: "mobility",
    defaultName: "Travelator",
  },
  {
    group: "amenity",
    category: "restroom.female.wheelchair",
    description:
      "Models the presence and approximate point location of a female bathroom facility that is entirely dedicated to persons with a disability.",
    icon: IconDisabled2,
    subcategory: "restroom",
    defaultName: "Accessible Toilet (Female)",
  },
  {
    group: "amenity",
    category: "restroom.male.wheelchair",
    description:
      "Models the presence and approximate point location of a male bathroom facility that is entirely dedicated to persons with a disability.",
    icon: IconDisabled2,
    subcategory: "restroom",
    defaultName: "Accessible Toilet (Male)",
  },
  {
    group: "amenity",
    category: "restroom.unisex.wheelchair",
    description:
      "Models the presence and approximate point location of a unisex bathroom facility that is entirely dedicated to persons with a disability.",
    icon: IconDisabled2,
    subcategory: "restroom",
    defaultName: "Accessible Toilet",
  },
  {
    group: "amenity",
    category: "restroom.wheelchair",
    description:
      "Dedicated restroom designed to be accessible for those with physical disabilities.\n \n\n Models the presence and approximate point location of a bathroom facility that is entirely dedicated to persons with a disability.",
    icon: IconDisabled2,
    subcategory: "restroom",
    defaultName: "Accessible Toilet",
  },
  {
    group: "amenity",
    category: "restroom.female",
    description:
      "A bathroom intended for female use\n \n\n Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a female.",
    icon: IconGenderFemale,
    subcategory: "restroom",
    defaultName: "Toilet (Female)",
  },
  {
    group: "amenity",
    category: "restroom.male",
    description:
      "A bathroom intended for male use\n \n\n Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a male.",
    icon: IconGenderMale,
    subcategory: "restroom",
    defaultName: "Toilet (Male)",
  },
  {
    group: "amenity",
    category: "restroom",
    description:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single enclosed space, containing bathroom facilities.",
    icon: IconToiletPaper,
    subcategory: "restroom",
    defaultName: "Toilet",
  },
  {
    group: "amenity",
    category: "restroom.family",
    description:
      "A bathroom intended for family use\n \n\n Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a family.",
    icon: IconToiletPaper,
    subcategory: "restroom",
    defaultName: "Family Toilet",
  },
  {
    group: "amenity",
    category: "restroom.transgender",
    description:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by a person that identifies themselves as transgender.",
    icon: IconToiletPaper,
    subcategory: "restroom",
    defaultName: "Toilet (Transgender)",
  },
  {
    group: "amenity",
    category: "restroom.transgender.wheelchair",
    description:
      "Models the presence and approximate point location of a transgender bathroom facility that is entirely dedicated to persons with a disability.",
    icon: IconToiletPaper,
    subcategory: "restroom",
    defaultName: "Accessible Toilet (Transgender)",
  },
  {
    group: "amenity",
    category: "restroom.unisex",
    description:
      "Models the presence and approximate point location of one or more neighboring spaces, or the physical extent of a single space, containing bathroom facilities that are intended for use by any person.\n \n\n Restroom designed to be used by any person, regardless of gender.",
    icon: IconToiletPaper,
    subcategory: "restroom",
    defaultName: "Toilet",
  },
  {
    group: "amenity",
    category: "hoteling",
    description:
      "Models the presence and approximate point location of: * A reservation-based unassigned work surface.",
    icon: IconBedFilled,
    subcategory: "service",
    defaultName: "Hoteling Workspace",
  },
  {
    group: "amenity",
    category: "sleepbox",
    description:
      "Models the presence and approximate point location of one or more service that offers a bed and an associated set of facilities in a limited space.",
    icon: IconBedFilled,
    subcategory: "service",
    defaultName: "Sleep Box",
  },
  {
    group: "amenity",
    category: "powerchargingstation",
    description: "",
    icon: IconBoltFilled,
    subcategory: "service",
    defaultName: "Power Charging Station",
  },
  {
    group: "amenity",
    category: "library",
    description:
      "A building or room where media is collected for people to read, borrow, and reference. Traditionally this is mostly books, but may also include other media too.\n \n\n Models the presence and physical extent of an enclosed area containing sources of information.",
    icon: IconBookFilled,
    subcategory: "service",
    defaultName: "Library",
  },
  {
    group: "amenity",
    category: "businesscenter",
    description:
      "Models the presence and approximate point location of a space that provides office facilities and services to the public.",
    icon: IconBriefcaseFilled,
    subcategory: "service",
    defaultName: "Business Center",
  },
  {
    group: "amenity",
    category: "landmark",
    description:
      "Items in this category are spaces and places of significance and history.\n \n\n Models the presence and approximate point location of a recognizable or substantial natural or artificial feature that is useful for pedestrian navigation or orientation.",
    icon: IconBuildingMonument,
    subcategory: "service",
    defaultName: "Landmark",
  },
  {
    group: "amenity",
    category: "wheelchairassist",
    description:
      "Models the presence and approximate point location of a wheelchair assistance service.",
    icon: IconDisabled2,
    subcategory: "service",
    defaultName: "Wheelchair Assistance Service",
  },
  {
    group: "amenity",
    category: "caregiver",
    description:
      "Models the presence and approximate point location of a service that provides caregiving services, especially to persons that experience disabilities.",
    icon: IconHeartFilled,
    subcategory: "service",
    defaultName: "Caregiver Service",
  },
  {
    group: "amenity",
    category: "fittingroom",
    description:
      "Models the presence and approximate point location of one or more fitting room where a person may try on clothes or change clothes.",
    icon: IconHeartFilled,
    subcategory: "service",
    defaultName: "Fitting Room",
  },
  {
    group: "amenity",
    category: "reception.desk",
    description:
      "Models the presence and approximate point location of a reception desk.",
    icon: IconHeartFilled,
    subcategory: "service",
    defaultName: "Reception",
  },
  {
    group: "amenity",
    category: "service",
    description:
      'Should be used to model the presence and approximate point location, or approximate thematic extent of an open or semi-enclosed area, of an service operation that cannot be classified using any other "service" category in the hierarchy.',
    icon: IconHeartFilled,
    subcategory: "service",
    defaultName: "Service",
  },
  {
    group: "amenity",
    category: "guestservices",
    description:
      "Models the presence and approximate point location of a guest service operation.",
    icon: IconInfoCircle,
    subcategory: "service",
    defaultName: "Guest Services",
  },
  {
    group: "amenity",
    category: "information",
    description:
      "Models the presence and approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the offering of information.",
    icon: IconInfoCircle,
    subcategory: "service",
    defaultName: "Information",
  },
  {
    group: "amenity",
    category: "information.bid",
    description:
      "Models the presence and approximate point location of a Baggage Information Display (BID) system that displays baggage claim information.",
    icon: IconInfoCircle,
    subcategory: "service",
    defaultName: "Baggage Information Display",
  },
  {
    group: "amenity",
    category: "information.carrental",
    description:
      "Models the presence and approximate point location of a manned desk or an automated information kiosk that: May exist in support of a particular brand name or is brand agnostic. Is not concerned with delivering other information types (e.g., tourism, hotel or airline information).",
    icon: IconInfoCircle,
    subcategory: "service",
    defaultName: "Car Rental Information",
  },
  {
    group: "amenity",
    category: "information.hotel",
    description: "",
    icon: IconInfoCircle,
    subcategory: "service",
    defaultName: "Hotel Information",
  },
  {
    group: "amenity",
    category: "information.mufid",
    description:
      "Models the presence and approximate point location of a Multiple User Flight Information Display system that displays flight information to passengers and patrons by destination city, airline, arrival and departure times, gate, and status of the flight (on-time, delayed, cancelled, boarding, or landed).",
    icon: IconInfoCircle,
    subcategory: "service",
    defaultName: "Flight Information Board",
  },
  {
    group: "amenity",
    category: "information.mufid.arrivals",
    description:
      "Models the presence and approximate point location of a Multiple User Flight Information Display system that displays flight information to passengers and patrons by arrival city, airline, arrival times, gate, and status of the flight (on-time, delayed, cancelled, boarding, or landed).",
    icon: IconInfoCircle,
    subcategory: "service",
    defaultName: "Arrival Information Board",
  },
  {
    group: "amenity",
    category: "information.mufid.departures",
    description:
      "Models the presence and approximate point location of a Multiple User Flight Information Display system that displays flight information to passengers and patrons by departure city, airline, arrival times, gate, and status of the flight (on-time, delayed, cancelled, or boarding).",
    icon: IconInfoCircle,
    subcategory: "service",
    defaultName: "Departure Information Board",
  },
  {
    group: "amenity",
    category: "information.transit",
    description:
      "Models the presence and approximate point location of a manned desk or an automated information kiosk that: May exist in support of a particular brand name or is brand agnostic. Is not concerned with delivering other information types (e.g., tourism information, hotel.).",
    icon: IconInfoCircle,
    subcategory: "service",
    defaultName: "Transit Information",
  },
  {
    group: "amenity",
    category: "lostandfound",
    description:
      "Models the presence and approximate point location of a service where a pedestrian may retrieve personal belongings.",
    icon: IconInfoCircle,
    subcategory: "service",
    defaultName: "Lost and Found",
  },
  {
    group: "amenity",
    category: "exhibit",
    description:
      'Models the presence and approximate point location of "...an object, work of art, activity, artifact or poster designed to demonstrate a concept or show an example.", or the approximate thematic extent of an open or semi-enclosed environment containing an exhibit.',
    icon: IconPhoto,
    subcategory: "service",
    defaultName: "Exhibit",
  },
  {
    group: "amenity",
    category: "photobooth",
    description: "",
    icon: IconPhoto,
    subcategory: "service",
    defaultName: "Photo Booth",
  },
  {
    group: "amenity",
    category: "childplayarea",
    description:
      "Models the presence and approximate point location of a child's play area.",
    icon: IconPuzzleFilled,
    subcategory: "service",
    defaultName: "Child Play Area",
  },
  {
    group: "amenity",
    category: "recreation",
    description:
      "Business or location related to recreational activities.\n \n\n Models the presence and approximate point location of a break room or recreational space.",
    icon: IconPuzzleFilled,
    subcategory: "service",
    defaultName: "Recreation Area",
  },
  {
    group: "amenity",
    category: "productreturn",
    description:
      "Models the presence and approximate point location of a product return service operation.",
    icon: IconShoppingBag,
    subcategory: "service",
    defaultName: "Product Returns",
  },
  {
    group: "amenity",
    category: "vendingmachine",
    description:
      "Automated machine that provides items using a payment system. Please use shopping.vendingmachine.refreshments for food related machines.\n \n\n Models the presence and approximate point location of an automated system that vends products/services that include, but are not limited to, electronics, cosmetics, food and beverage.",
    icon: IconShoppingBag,
    subcategory: "service",
    defaultName: "Vending Machine",
  },
  {
    group: "amenity",
    category: "privatelounge",
    description:
      "Models the presence and physical extent of an enclosed space that is made available to authorized pedestrians.",
    icon: IconSofa,
    subcategory: "service",
    defaultName: "Private Lounge",
  },
  {
    group: "amenity",
    category: "studentadmissions",
    description:
      "Models the presence and approximate point location of a student admissions operation.",
    icon: IconUserFilled,
    subcategory: "service",
    defaultName: "Student Admissions",
  },
  {
    group: "amenity",
    category: "studentservices",
    description:
      "Models the presence and approximate point location of a student services operation.",
    icon: IconUserFilled,
    subcategory: "service",
    defaultName: "Student Services",
  },
  {
    group: "amenity",
    category: "wifi",
    description:
      'Models the presence and approximate point location of a designated zone/area/"hot spot" where Wi-Fi service is available.',
    icon: IconWifi,
    subcategory: "service",
    defaultName: "Wi-Fi",
  },
  {
    group: "amenity",
    category: "fieldofplay",
    description:
      "Intramural sports or recreational fields usually found on college/university campus.\n \n\n Models the presence and approximate point location of a sports field.\n \n\n Models the presence and physical extent of an area used to play sports.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "Field",
  },
  {
    group: "amenity",
    category: "fieldofplay.americanfootball",
    description:
      "Models the presence and approximate point location of an American football pitch.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "American Football Field",
  },
  {
    group: "amenity",
    category: "fieldofplay.baseball",
    description:
      "Models the presence and approximate point location of a baseball field.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "Baseball Field",
  },
  {
    group: "amenity",
    category: "fieldofplay.basketball",
    description:
      "Models the presence and approximate point location of a basketball court.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "Basketball Court",
  },
  {
    group: "amenity",
    category: "fieldofplay.fieldhockey",
    description:
      "Models the presence and approximate point location of a field hockey pitch.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "Field Hockey Pitch",
  },
  {
    group: "amenity",
    category: "fieldofplay.icehockey",
    description:
      "Models the presence and approximate point location of an ice hockey rink.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "Ice Hockey Rink",
  },
  {
    group: "amenity",
    category: "fieldofplay.rugby",
    description:
      "Models the presence and approximate point location of a rugby pitch.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "Rugby Pitch",
  },
  {
    group: "amenity",
    category: "fieldofplay.soccer",
    description:
      "Models the presence and approximate point location of a soccer pitch.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "Soccer Field",
  },
  {
    group: "amenity",
    category: "fieldofplay.softball",
    description:
      "Models the presence and approximate point location of a softball field.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "Softball Field",
  },
  {
    group: "amenity",
    category: "fieldofplay.tennis",
    description:
      "Models the presence and approximate point location of a tennis court.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "Tennis Court",
  },
  {
    group: "amenity",
    category: "fieldofplay.trackfield",
    description:
      "Models the presence and approximate point location of a track and field arena.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "Track and Field Arena",
  },
  {
    group: "amenity",
    category: "fieldofplay.volleyball",
    description:
      "Models the presence and approximate point location of a volleyball court.",
    icon: IconBallBasketball,
    subcategory: "sports",
    defaultName: "Volleyball Court",
  },
  {
    group: "amenity",
    category: "swimmingpool",
    description:
      "Facilities where one can swim in a swimming pool.\n \n\n Models the presence and approximate point location of a water feature that is intended for use by people.",
    icon: IconSwimming,
    subcategory: "sports",
    defaultName: "Swimming Pool",
  },
  {
    group: "amenity",
    category: "swimmingpool.children",
    description: "",
    icon: IconSwimming,
    subcategory: "sports",
    defaultName: "Children's Swimming Pool",
  },
  {
    group: "amenity",
    category: "swimmingpool.family",
    description: "",
    icon: IconSwimming,
    subcategory: "sports",
    defaultName: "Family Swimming Pool",
  },
  {
    group: "amenity",
    category: "amphitheater",
    description:
      "Models the presence and approximate point location of an amphitheater.",
    icon: IconMasksTheater,
    subcategory: "theater",
    defaultName: "Amphitheater",
  },
  {
    group: "amenity",
    category: "parking.bicycle",
    description:
      "A business that offers parking spaces/services for bicycles only OR a large space specifically made for parking bicycles only, with or without a fee and may or may not have onsite pesonnel. OK to use for businesses that provide bike valet services as a core offering. Please note this should only be used for locations/businesses whose core competency is bike parking. Businesses that have bike racks at/outside of their space should not be categorized under Bike Parking (they should use the Bike Parking attribute, instead). Random bike racks located on public streets/areas are ineligible for a listing.\n \n\n Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of bicycles.",
    icon: IconBike,
    subcategory: "transport",
    defaultName: "Bicycle Parking",
  },
  {
    group: "amenity",
    category: "boardinggate.bus",
    description:
      "Models the presence and approximate point location of a bus boarding gate operation.",
    icon: IconBusFilled,
    subcategory: "transport",
    defaultName: "Bus Boarding Point",
  },
  {
    group: "amenity",
    category: "bus",
    description:
      "Models the presence and approximate point location of one or more bus stop.",
    icon: IconBusFilled,
    subcategory: "transport",
    defaultName: "Bus Stop",
  },
  {
    group: "amenity",
    category: "bus.muni",
    description:
      "Models the presence and approximate point location of one or more bus stop that is serviced by a local transit authority.",
    icon: IconBusFilled,
    subcategory: "transport",
    defaultName: "Local Bus Stop",
  },
  {
    group: "amenity",
    category: "bus.national",
    description:
      "Models the presence and approximate point location of one or more bus stop that is serviced by a national transit authority.",
    icon: IconBusFilled,
    subcategory: "transport",
    defaultName: "National Bus Stop",
  },
  {
    group: "amenity",
    category: "groundtransportation",
    description:
      "Models the presence and approximate point location of an area where a general set of ground transportation services exist.",
    icon: IconBusFilled,
    subcategory: "transport",
    defaultName: "Transport Hub",
  },
  {
    group: "amenity",
    category: "shuttle",
    description:
      "Models the presence and approximate point location of one or more bus stop that is serviced by a private enterprise, not a national or local transit authority.",
    icon: IconBusFilled,
    subcategory: "transport",
    defaultName: "Shuttle Bus Stop",
  },
  {
    group: "amenity",
    category: "carrental",
    description:
      "A business that rents and leases motor vehicles. Businesses that rent trucks for moving and related purposes should be categorized under truck rentalservices.\n \n\n Models the presence and approximate point location or thematic extent of an open or semi-enclosed environment of a space containing one or more car rental operation.",
    icon: IconCarFilled,
    subcategory: "transport",
    defaultName: "Car Rental Service",
  },
  {
    group: "amenity",
    category: "limo",
    description:
      "A company that provides transportation services by limousines.\n \n\n Models the presence and approximate point location of a limousine service.",
    icon: IconCarFilled,
    subcategory: "transport",
    defaultName: "Limousine Service",
  },
  {
    group: "amenity",
    category: "rideshare",
    description:
      "Business or service that facilitates ride sharing or carpooling allowing multiple riders to share a car trip.\n \n\n Models the presence and approximate point location of a ride-share pick-up spot or zone.",
    icon: IconCarFilled,
    subcategory: "transport",
    defaultName: "Ride Sharing",
  },
  {
    group: "amenity",
    category: "taxi",
    description:
      "A vehicle providing individualized transportation a location specified by the customer.\n \n\n Models the presence and approximate point location of a taxi waiting area or line-up.",
    icon: IconCarFilled,
    subcategory: "transport",
    defaultName: "Taxi Stand",
  },
  {
    group: "amenity",
    category: "valet",
    description:
      "Models the presence and approximate point location of a valet parking service.",
    icon: IconCarFilled,
    subcategory: "transport",
    defaultName: "Valet Parking Service",
  },
  {
    group: "amenity",
    category: "boardinggate.ferry",
    description:
      "Models the presence and approximate point location of a ferry boarding gate operation.",
    icon: IconFerryFilled,
    subcategory: "transport",
    defaultName: "Ferry Boarding Point",
  },
  {
    group: "amenity",
    category: "parkandride",
    description:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is to host a Park & Ride service.",
    icon: IconLetterP,
    subcategory: "transport",
    defaultName: "Park and Ride",
  },
  {
    group: "amenity",
    category: "parking",
    description:
      "Locations that provide office space to park vehicles, usually for a fee.\n \n\n Models the presence and physical extent of a floor whose intended purpose is the storage of vehicles.",
    icon: IconLetterP,
    subcategory: "transport",
    defaultName: "Parking",
  },
  {
    group: "amenity",
    category: "parking.compact",
    description:
      'Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of vehicles defined in the automotive industry as being "compact.',
    icon: IconLetterP,
    subcategory: "transport",
    defaultName: "Compact Car Parking",
  },
  {
    group: "amenity",
    category: "parking.ev",
    description:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of electric vehicles.",
    icon: IconLetterP,
    subcategory: "transport",
    defaultName: "Electric Vehicle Parking",
  },
  {
    group: "amenity",
    category: "parking.longterm",
    description:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of vehicles for an extended period of time.",
    icon: IconLetterP,
    subcategory: "transport",
    defaultName: "Long-term Parking",
  },
  {
    group: "amenity",
    category: "parking.motorcycle",
    description:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed of an environment whose intended purpose is the storage of motorcycles.",
    icon: IconLetterP,
    subcategory: "transport",
    defaultName: "Motorcycle Parking",
  },
  {
    group: "amenity",
    category: "parking.shortterm",
    description:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is the storage of vehicles for a short period of time.",
    icon: IconLetterP,
    subcategory: "transport",
    defaultName: "Short-term Parking",
  },
  {
    group: "amenity",
    category: "parking.waitingarea",
    description:
      "Models the presence and approximate point location or approximate thematic extent of an open or semi-enclosed environment whose intended purpose is use by a person (and their vehicle) to wait for the arrival of another person(s).",
    icon: IconLetterP,
    subcategory: "transport",
    defaultName: "Parking Waiting Area",
  },
  {
    group: "amenity",
    category: "rail.muni",
    description:
      "Models the presence and approximate point location of one or more rail stop that is serviced by a local transit authority.",
    icon: IconTrainFilled,
    subcategory: "transport",
    defaultName: "Local Rail Stop",
  },
  {
    group: "amenity",
    category: "rail.national",
    description:
      "Models the presence and approximate point location of one or more rail stop that is serviced by a national transit authority.",
    icon: IconTrainFilled,
    subcategory: "transport",
    defaultName: "National Rail Stop",
  },
  {
    group: "amenity",
    category: "peoplemover",
    description:
      "Models the presence and approximate point location of a transit stop that is associated with a transportation system describable as an Automated People Mover.",
    icon: IconTrainFilled,
    subcategory: "transport",
    defaultName: "People Mover Station",
  },
  {
    group: "amenity",
    category: "transit",
    description:
      "Describes a physical structure whose sole operational purpose is to provide transportation services.\n \n\n Models the presence and physical extent of a floor of a physical building whose intended purpose is to support the movement of pedestrians: Within or among different parts of the same Venue (inter-venue transit). Within, among and beyond the Venue.",
    icon: IconTrainFilled,
    subcategory: "transport",
    defaultName: "Transit Facility",
  },
  {
    group: "amenity",
    category: "babychanging",
    description:
      "Location for the specific purpose of changing a baby, does not contain bathroom facilities.",
    icon: IconBabyBottle,
    subcategory: "wellbeing",
    defaultName: "Baby Changing Facility",
  },
  {
    group: "amenity",
    category: "mothersroom",
    description:
      "Models the presence and approximate point or physical extent of an enclosed space where a woman may breastfeed or use a breast pump in private.",
    icon: IconBabyBottle,
    subcategory: "wellbeing",
    defaultName: "Mother's Room",
  },
  {
    group: "amenity",
    category: "strollerrental",
    description:
      "Models the presence and approximate point location of a stroller rental service.",
    icon: IconBabyCarriageFilled,
    subcategory: "wellbeing",
    defaultName: "Stroller Rental Service",
  },
  {
    group: "amenity",
    category: "shower",
    description:
      "Models the presence and approximate point location of one or more neighboring shower facility and adjoining locker/changing area, or the physical extent of an enclosed space that provides shower facilities and adjoining locker/changing area.",
    icon: IconBath,
    subcategory: "wellbeing",
    defaultName: "Shower",
  },
  {
    group: "amenity",
    category: "animalreliefarea",
    description:
      "A convenience area for service animal relief, often be equipped with water bowls and animal toiletries\n \n\n Models the presence and approximate point location of a Service Animal Relief Area (SARA) or domestic pet relief area.",
    icon: IconPawFilled,
    subcategory: "wellbeing",
    defaultName: "Animal Relief Area",
  },
  {
    group: "amenity",
    category: "meditation",
    description: "Facilities dedicated to the practice of meditation.",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Meditation Room",
  },
  {
    group: "amenity",
    category: "prayerroom",
    description:
      "Models the presence and approximate point location of a place for religious prayer or meditation. Inter-faith (non-denominational) is assumed.",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Prayer Room",
  },
  {
    group: "amenity",
    category: "prayerroom.buddhism",
    description: "",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Buddhist Prayer Room",
  },
  {
    group: "amenity",
    category: "prayerroom.christianity",
    description: "",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Christian Prayer Room",
  },
  {
    group: "amenity",
    category: "prayerroom.hinduism",
    description: "",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Hindu Prayer Room",
  },
  {
    group: "amenity",
    category: "prayerroom.islam",
    description: "",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Muslim Prayer Room",
  },
  {
    group: "amenity",
    category: "prayerroom.islam.female",
    description: "",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Female Muslim Prayer Room",
  },
  {
    group: "amenity",
    category: "prayerroom.islam.male",
    description: "",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Male Muslim Prayer Room",
  },
  {
    group: "amenity",
    category: "prayerroom.judaism",
    description: "",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Jewish Prayer Room",
  },
  {
    group: "amenity",
    category: "prayerroom.shintoism",
    description: "",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Shinto Prayer Room",
  },
  {
    group: "amenity",
    category: "prayerroom.sikh",
    description: "",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Sikh Prayer Room",
  },
  {
    group: "amenity",
    category: "prayerroom.taoic",
    description: "",
    icon: IconPray,
    subcategory: "wellbeing",
    defaultName: "Taoist Prayer Room",
  },
  {
    group: "amenity",
    category: "smokingarea",
    description:
      "Models the presence and approximate point location, or physical extent of a space containing a smoking area or facility.",
    icon: IconSmoking,
    subcategory: "wellbeing",
    defaultName: "Smoking Area",
  },
  {
    group: "amenity",
    category: "yoga",
    description:
      "Facilities providing space and instruction for the practice of yoga. Do not use for businesses not offering yoga as their core instruction (e.g. a gym offering yoga once a week should not receive this category).",
    icon: IconYoga,
    subcategory: "wellbeing",
    defaultName: "Yoga Studio",
  },
];

export const newImdfCategoriesColors: {
  subcategory: string;
  color: RadixColor;
}[] = [
  {
    subcategory: "emergency",
    color: "red",
  },
  {
    subcategory: "fnb",
    color: "yellow",
  },
  {
    subcategory: "generic",
    color: "gray",
  },
  {
    subcategory: "mobility",
    color: "cyan",
  },
  {
    subcategory: "restroom",
    color: "violet",
  },
  {
    subcategory: "service",
    color: "indigo",
  },
  {
    subcategory: "sports",
    color: "grass",
  },
  {
    subcategory: "theater",
    color: "orange",
  },
  {
    subcategory: "transport",
    color: "blue",
  },
  {
    subcategory: "wellbeing",
    color: "crimson",
  },
];

//  let backgroundColor;
//       switch (subcategory) {
//         case "emergency":
//           backgroundColor = redDark.red9;
//           break;
//         case "fnb":
//           backgroundColor = yellowDark.yellow9;
//           break;
//         case "generic":
//           backgroundColor = grayDark.gray9;

//           break;
//         case "mobility":
//           backgroundColor = cyanDark.cyan9;
//           break;
//         case "restroom":
//           backgroundColor = violetDark.violet9;
//           break;
//         case "service":
//           backgroundColor = indigoDark.indigo9;
//           break;
//         case "sports":
//           backgroundColor = grassDark.grass9;
//           break;
//         case "theater":
//           backgroundColor = orangeDark.orange9;
//           break;
//         case "transport":
//           backgroundColor = blueDark.blue9;
//           break;
//         case "wellbeing":
//           backgroundColor = crimsonDark.crimson9;
//           break;
//         default:
//           backgroundColor = grayDark.gray9;
//           break;
//       }

// F&R query:
// "(Icon.*?)",
// $1,
