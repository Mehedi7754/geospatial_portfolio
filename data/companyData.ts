export interface Project {
  id: number;
  title: string;
  client: string;
  category: 'Survey & GNSS' | 'GIS & Remote Sensing' | 'Engineering & Infrastructure' | 'Hydrographic & Bathymetry' | 'Urban & Modernization';
  year?: string;
  location?: string;
  description: string;
  highlight?: boolean;
  image?: string;
  metrics?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  capabilities: string[];
  deliverables: string[];
  featuredImage: string;
  badge: string;
}

export interface Equipment {
  name: string;
  category: 'GNSS & Positioning' | 'UAV & Drones' | 'Optical & Survey' | 'Hydrography' | 'High-Performance Computing';
  model: string;
  quantity: string;
  keySpecs: string[];
  origin: string;
  image: string;
}

export interface Milestone {
  year: string;
  stat: string;
  title: string;
  client: string;
  description: string;
}

export const companyProfile = {
  name: "Geospatial Works",
  tagline: "Where Engineering Meets Precision",
  role: "Consultancy | IT | Survey | 1st Class Contractor and Supplier",
  aboutShort: "Geospatial Works is an engineering, geospatial, and precision surveying consultancy delivering integrated technical solutions for infrastructure development, spatial planning, and sustainable resource management.",
  aboutFull: "Combining engineering expertise with advanced geospatial technologies, modern surveying instruments, and digital design capabilities, we support projects from field data acquisition and spatial analysis to engineering design and 3D visualization. Our multidisciplinary approach emphasizes technical precision, innovative solutions, efficient workflows, and timely delivery—helping clients make informed decisions and achieve reliable project outcomes.",
  vision: "To be marked as global excellency in engineering and geospatial consultancy services, recognized for technical brilliance, innovative solutions, and sustainable infrastructure development.",
  mission: "Helping our clients make informed decisions and achieve sustainable project outcomes by providing sustainable engineering solutions, precise, efficient, and research oriented geospatial, and surveying results through technical expertise, advanced technology, and a commitment to quality and timely data delivery.",
  contact: {
    address: "Plot 14, Road 02, Aram Housing, 40ft, Bosila, Mohammadpur, Dhaka-1207",
    phone: "+880 1713 90 777 9",
    email: "md.geospatialworks@gmail.com",
    website: "www.geospatialworks.com.bd",
    officeHours: "Sunday – Thursday: 9:00 AM – 6:00 PM",
  },
  stats: [
    { value: "208.37+", label: "km² Area Mapped", detail: "23 unions & 260 mouzas in agricultural zoning" },
    { value: "800+", label: "km Precision Road Surveys", detail: "RTK survey & TBM setup under LGED & DTCA" },
    { value: "100k+", label: "Power Poles Surveyed", detail: "1 Lac LT & HT poles for BPDB / CEGIS" },
    { value: "10,000+", label: "GCPs Established", detail: "64 districts National Land Zoning Network" },
    { value: "35+", label: "Major National Projects", detail: "Government, Railway, City Corps & International" },
    { value: "8 Units", label: "CHCNAV i83 GNSS", detail: "1,408 channels with up to 30 km GSM range" },
  ],
  coreValues: [
    {
      title: "Respect for the Individual",
      description: "Emphasizes treating everyone with dignity and respect, valuing unique contributions, and fostering a positive, inclusive work environment.",
      color: "from-blue-600 to-indigo-700"
    },
    {
      title: "Excellence",
      description: "We uphold the rigorous standards of accuracy, reliability, and professional integrity in every facet of field survey and engineering analysis.",
      color: "from-cyan-600 to-blue-700"
    },
    {
      title: "Customer-Centricity",
      description: "Dedicated to understanding and addressing the unique needs of each client, delivering tailored solutions that add tangible, measurable value.",
      color: "from-teal-600 to-emerald-700"
    },
    {
      title: "Collaboration",
      description: "Fostering collaborative partnerships with government authorities, industry stakeholders, and specialists to achieve shared goals.",
      color: "from-blue-700 to-indigo-900"
    }
  ],
  whyChooseUs: [
    {
      title: "Best Teamwork",
      subtitle: "People, Technology, A Smarter Tomorrow",
      description: "Synergistic collaboration between experienced engineers, GIS specialists, certified UAV pilots, and field surveyors.",
      icon: "Users"
    },
    {
      title: "Research-Oriented Precision",
      subtitle: "Methodical & Science-Backed",
      description: "Strict geodetic controls, multi-temporal remote sensing, and calibrated instrumentation ensuring sub-centimeter reliability.",
      icon: "Search"
    },
    {
      title: "Speed & Agile Mobilization",
      subtitle: "Rapid Deployment Across Bangladesh",
      description: "Equipped to deploy 8 GNSS crews and 3 enterprise UAV units simultaneously to remote field sites within 24 hours.",
      icon: "Zap"
    },
    {
      title: "Complete Transparency",
      subtitle: "Verifiable Raw & Processed Data",
      description: "Open communication, verifiable QA/QC reports, and deliverable compliance matching international engineering codes.",
      icon: "ShieldCheck"
    },
    {
      title: "On-Time Delivery",
      subtitle: "Disciplined Milestone Adherence",
      description: "Proven record delivering fast-track bypasses, terminal redesigns, and emergency surveys strictly on schedule.",
      icon: "Clock"
    }
  ]
};

export const servicesData: Service[] = [
  {
    id: "uav-drone-surveys",
    title: "Airborne UAV & Drone Surveys",
    shortDesc: "High-resolution orthomosaics, photogrammetric 3D modeling, DSM/DEM/DTM terrain generation with RTK precision.",
    fullDesc: "Geospatial Works deploys advanced enterprise drones (DJI Mavic 3 Enterprise, Mavic 3 Multispectral, and Matrice 4 Enterprise) equipped with 7 high-capacity batteries per unit. We deliver centimeter-level topographic mapping, digital elevation models, multispectral crop health indices, and high-density 3D meshes for civil corridors, railway bypasses, and urban development.",
    iconName: "Plane",
    badge: "UAV Photogrammetry",
    featuredImage: "/assets/showcase/drone-uav-field-operation.png",
    capabilities: [
      "Digital Surface, Elevation & Terrain Modeling (DSM / DEM / DTM) with full contour lines",
      "High-resolution geo-referenced orthophoto mosaic generation in GeoTIFF and GIS-ready formats",
      "Multi-temporal site monitoring, cut/fill earthwork and stockpile volume computations",
      "Multispectral imaging for NDVI vegetative health analysis and crop stress mapping",
      "Ground Control Point (GCP) establishment and pre/post-marking for photogrammetry"
    ],
    deliverables: [
      "GeoTIFF Orthomosaics (GSD < 2cm/px)",
      "High-density 3D Point Clouds (.LAS / .LAZ)",
      "Digital Elevation Models (DEM/DTM)",
      "Contour Shapefiles (.SHP / .DXF / .DWG)",
      "Volumetric Calculation Reports"
    ]
  },
  {
    id: "topographic-cadastral",
    title: "Topographic & Cadastral Land Surveys",
    shortDesc: "Centimeter-level boundary demarcation, cadastral parcel mapping, GNSS control networks, and terrain analysis.",
    fullDesc: "Operating 8 units of CHCNAV i83 RTK GNSS receivers with 1,408-channel satellite tracking, we execute comprehensive geodetic surveys across municipal and rural terrains. We establish primary geodetic control networks, temporary benchmarks (TBMs), and land parcel demarcations compliant with national survey standards.",
    iconName: "MapPin",
    badge: "Geodetic & Land",
    featuredImage: "/assets/showcase/chcnav-i83-rtk-gnss.jpg",
    capabilities: [
      "Real-Time Kinematic (RTK) positioning and static GNSS geodetic control baseline surveying",
      "Cadastral boundary demarcation, land parcel surveying, and mouza map digitization",
      "Urban governance and municipal pourashava topographic surveys across multiple districts",
      "Establishment, transfer, and mathematical adjustment of Temporary Benchmarks (TBM)",
      "Feature and attribute data collection for land management and municipal taxation"
    ],
    deliverables: [
      "Topographic Base Maps (AutoCAD / GIS)",
      "Boundary Demarcation Schedules",
      "TBM & Control Point Coordinate Ledgers",
      "Mouza Georeferenced Overlays",
      "Comprehensive Field Survey Reports"
    ]
  },
  {
    id: "engineering-construction",
    title: "Engineering & Construction Surveys",
    shortDesc: "Setting out of structures, precision leveling, as-built documentation, and Building Information Modeling (BIM).",
    fullDesc: "We provide high-precision survey support throughout the construction lifecycle. From initial site investigations, road alignment corridors, and bridge centerlines to setting out structural foundations, palisades, drainage alignments, and as-built verification using Sokkia, Topcon, and CHCNAV total stations and optical levels.",
    iconName: "Compass",
    badge: "Civil & Structural",
    featuredImage: "/assets/showcase/engineering-site-investigation.png",
    capabilities: [
      "Precision structural setting-out for buildings, bridges, waiting shelters, and ticket counters",
      "Road and highway corridor alignment, curve setting, cross-sections, and longitudinal profiles",
      "Precision optical leveling and benchmark transfer for drainage invert levels and medians",
      "As-built surveys, structural deformation checks, and dimensional compliance verification",
      "Integration of field survey geometry into Building Information Modeling (BIM) platforms"
    ],
    deliverables: [
      "As-Built Engineering Drawings (CAD)",
      "Road Alignment & Longitudinal Profiles",
      "Drainage & Palisade Cross-Sections",
      "Structural Setting-Out Verification Sheets",
      "3D Architectural & BIM Models"
    ]
  },
  {
    id: "hydrographic-bathymetry",
    title: "Hydrographic & Bathymetric Surveys",
    shortDesc: "Underwater riverbed profiling, echo sounding depth measurement, lake/seabed mapping, and water-level monitoring.",
    fullDesc: "Utilizing CHCNAV D270 single-beam echo sounders integrated with differential GNSS positioning, Geospatial Works delivers underwater bathymetry and hydrographic documentation. We map riverbed profiles for bridge construction (Brahmaputra, Jhopjhopia, Guiyer Canal), assess siltation, monitor scour depth, and install automated river gauge readers.",
    iconName: "Waves",
    badge: "Bathymetry & Waterways",
    featuredImage: "/assets/showcase/river-bathymetry-sounding.jpg",
    capabilities: [
      "River, lake, canal, and coastal seabed depth measurement using CHCNAV D270 echo sounder",
      "Integrated GNSS hydrographic positioning for accurate 3D georeferenced bathymetric surfaces",
      "Cross-sectional riverbed profiling for bridge feasibility studies and hydraulic modeling",
      "Installation, adjustment, and calibration of river water-level gauge readers",
      "Current velocity assessment and hydrological discharge monitoring"
    ],
    deliverables: [
      "Bathymetric Contour Charts",
      "Underwater 3D Riverbed Surface Models",
      "River Cross-Sections & Channel Profiles",
      "Water-Level Gauge Calibration Data",
      "Hydraulic & Scour Depth Reports"
    ]
  },
  {
    id: "gis-remote-sensing",
    title: "GIS, Remote Sensing & Application Development",
    shortDesc: "High-resolution satellite analysis, NDVI vegetation health, spatial databases, and custom Web-GIS systems.",
    fullDesc: "From multi-temporal satellite imagery analysis to customized Web-GIS application development, Geospatial Works empowers data-driven infrastructure and agricultural decisions. Our team has delivered national GIS database systems, such as the BADC Web-Based Agricultural Information System (WEB-AIS) and National Digital Land Zoning.",
    iconName: "Layers",
    badge: "Spatial Intelligence",
    featuredImage: "/assets/showcase/gis-mapping-analysis.png",
    capabilities: [
      "High-resolution satellite imagery acquisition, orthorectification, and change detection",
      "Normalized Difference Vegetation Index (NDVI) and remote sensing crop health diagnostics",
      "Custom Web-GIS application development for real-time spatial decision support",
      "Enterprise geodatabase design, spatial data conversion, vectorization, and attribute structuring",
      "Asset inventory and mapping for power distribution poles (BPDB 1 Lac+ poles) and utility networks"
    ],
    deliverables: [
      "Interactive Web-GIS Portals (WEB-AIS)",
      "Enterprise Geodatabases (.gdb / PostGIS)",
      "Multi-Temporal Change Detection Maps",
      "Vegetation Health & NDVI Thematic Maps",
      "Infrastructure Asset Inventories"
    ]
  },
  {
    id: "feasibility-infrastructure-design",
    title: "Feasibility, Design & Infrastructure Engineering",
    shortDesc: "Highway route corridor design, architectural drawings, solid waste landfill engineering, and BOQ/BOM preparation.",
    fullDesc: "Our engineering division delivers comprehensive feasibility studies, detailed concept designs, and execution documentation. Key achievements include the structural design and drawings for the Moheshkhali Sanitary Landfill (LTP SWM), the passenger facilities modernization for Gabtoli and Mohakhali Inter-District Bus Terminals, and the Gulshan-1 to Progati Sarani link road.",
    iconName: "Building2",
    badge: "Design & Feasibility",
    featuredImage: "/assets/showcase/feasibility-cad-engineering.png",
    capabilities: [
      "Road and highway route alignment, interchange geometry, access roads, and haul road design",
      "Architectural planning, 3D visualization, interior space layout, and passenger terminal upgrades",
      "Civil, structural, and environmental engineering for municipal solid waste sanitary landfills",
      "Comprehensive drainage network layout, storm sewer sizing, and palisading protection design",
      "Preparation of detailed Bills of Quantities (BOQ), Material Output Quantities (MOQ), and BOM"
    ],
    deliverables: [
      "Architectural & Structural Construction Sets",
      "Comprehensive BOQ, MOQ & BOM Cost Estimates",
      "Scheme Plans, Concept Plans & Subdivisions",
      "Environmental & Feasibility Study Reports",
      "Interchange & Junction Geometric Plans"
    ]
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance & Survey Verification",
    shortDesc: "Rigorous standards compliance, independent accuracy audits, coordinate checks, and positional verification.",
    fullDesc: "Every survey deliverable produced or vetted by Geospatial Works adheres strictly to international geodetic standards and national client specifications. We carry out independent survey accuracy verification, network closed-loop traverses, elevation closure checks, and deliverable audits for major infrastructure projects.",
    iconName: "CheckCircle2",
    badge: "QA / QC Audits",
    featuredImage: "/assets/showcase/drone-flight-monitoring.png",
    capabilities: [
      "Independent positional and elevation accuracy verification against statutory geodetic benchmarks",
      "Closed-loop control traverse adjustment and root-mean-square error (RMSE) verification",
      "Ground Control Point (GCP) quality audits for aerial photogrammetry and satellite orthorectification",
      "Review and validation of contractor field books, raw RINEX data, and CAD deliverables",
      "Compliance verification against LGED, RHD, Bangladesh Railway, and DTCA technical specifications"
    ],
    deliverables: [
      "Geodetic Accuracy Certification Letters",
      "Traverse & Level Closure Audit Reports",
      "RMSE & Positional Error Assessment Sheets",
      "Raw RINEX & Static Data Validation Logs",
      "Standard Operating Procedure (SOP) Audits"
    ]
  }
];

export const equipmentData: Equipment[] = [
  {
    name: "CHCNAV i83 RTK GNSS Receivers",
    category: "GNSS & Positioning",
    model: "i83 GNSS Smart Antenna",
    quantity: "8 Active Fleet Units",
    keySpecs: [
      "1,408 Channels multi-constellation satellite tracking (GPS, GLONASS, Galileo, BeiDou, QZSS)",
      "Static GNSS & Real-Time Kinematic (RTK) positioning modes",
      "GSM-based RTK operation with internal UHF radio",
      "Stated operating range up to 30 km in GSM network mode",
      "Sub-centimeter horizontal & vertical positional accuracy"
    ],
    origin: "CHCNAV, China",
    image: "/assets/showcase/chcnav-i83-rtk-gnss.jpg"
  },
  {
    name: "DJI Enterprise UAV Fleet",
    category: "UAV & Drones",
    model: "Mavic 3 Enterprise, Mavic 3 Multispectral, Matrice 4 Enterprise",
    quantity: "3 Specialized UAV Platforms (7 Batteries each)",
    keySpecs: [
      "High-resolution mechanical shutter cameras for blur-free photogrammetry at high speed",
      "Multispectral sensors (Green, Red, Red Edge, Near-IR) for precision NDVI analysis",
      "RTK module integration for direct geotagging without heavy GCP density",
      "Omnidirectional obstacle sensing and wind resistance up to 12 m/s",
      "Provision of 7 intelligent flight batteries per unit for uninterrupted all-day field surveys"
    ],
    origin: "DJI, Global Leader",
    image: "/assets/showcase/drone-uav-field-operation.png"
  },
  {
    name: "Precision Total Stations",
    category: "Optical & Survey",
    model: "Topcon, Sokkia, CHCNAV, Kolida Multi-Brand Arsenal",
    quantity: "Multiple Operational Sets",
    keySpecs: [
      "High-accuracy angle measurement (1\" to 2\" arc seconds)",
      "Reflectorless Electronic Distance Measurement (EDM) up to 1,000 meters",
      "Dual-axis compensation for precise structural and building alignment",
      "Onboard coordinate geometry (COGO) and stakeout programs",
      "Rugged IP66 water and dust protection for rigorous construction environments"
    ],
    origin: "Japan & Global",
    image: "/assets/showcase/total-station-instrument.png"
  },
  {
    name: "Automatic Optical Levels",
    category: "Optical & Survey",
    model: "Sokkia B20A & Topcon AT-B3",
    quantity: "Dedicated Benchmarking Sets",
    keySpecs: [
      "High-precision magnetically dampened automatic compensators",
      "Standard deviation for 1 km double-run leveling down to 0.7 mm",
      "32x magnification high-contrast optical telescope",
      "Benchmark establishment, transfer, and invert level measurements for roads & drainage",
      "Proven reliability on major infrastructure corridors across Bangladesh"
    ],
    origin: "Sokkia & Topcon, Japan",
    image: "/assets/showcase/optical-level-instrument.png"
  },
  {
    name: "Hydrographic Echo Sounder",
    category: "Hydrography",
    model: "CHCNAV D270 Single-Beam Echo Sounder",
    quantity: "1 High-Performance Hydrographic System",
    keySpecs: [
      "High-frequency acoustic depth transducer for shallow and deep inland waterways",
      "Direct integration with RTK GNSS for centimeter-accurate 3D bathymetry",
      "Digital sound velocity calibration and automated heave/tide compensation",
      "Sub-surface profile generation for river crossings, bridge foundations, and dredging",
      "Deployed on major river projects including Brahmaputra River at Islampur"
    ],
    origin: "CHCNAV, China",
    image: "/assets/showcase/echo-sounder-d270.png"
  },
  {
    name: "High-Performance Processing Cluster",
    category: "High-Performance Computing",
    model: "Intel Core i9 / Core Ultra 7 K-Series Processing Workstations",
    quantity: "4 Workstations + 40TB Enterprise NAS",
    keySpecs: [
      "Workstation 1 & 2: Intel Core i9 14th Gen K-Series, 64 GB DDR5, NVIDIA RTX 4060 Ti",
      "Workstation 3: Intel Core Ultra 7 K-Series, 64 GB DDR5, NVIDIA RTX 5060 Ti",
      "Workstation 4: Intel Core i7 14th Gen K-Series, 32 GB DDR5 RAM",
      "Centralized 40TB Network Attached Storage (NAS) for massive point-cloud & orthomosaic archives",
      "Dedicated software suite: ArcGIS Pro, QGIS, Agisoft Metashape, Pix4D, Civil 3D, MicroStation"
    ],
    origin: "Custom Engineered Workstations",
    image: "/assets/showcase/spatial-data-analytics.png"
  }
];

export const milestoneProjects: Milestone[] = [
  {
    year: "2026",
    stat: "208.37 km²",
    title: "Pilot Research Project for Irrigation Water Management (WEB-AIS)",
    client: "Bangladesh Agricultural Development Corporation (BADC)",
    description: "Conducted high-density spatial data collection across 23 unions and 260 mouzas. Established primary and secondary canal networks, TBM/GCP grids, river water-level gauge monitoring (Jhopjhopia River & Guiyer Canal), and developed a Web-Based Agricultural Information System with NDVI vegetation health analysis."
  },
  {
    year: "2026",
    stat: "71.64 Acres",
    title: "Modernization of Gabtoli Inter-District Bus Terminal",
    client: "Dhaka North City Corporation (DNCC)",
    description: "Executed high-precision digital survey, 3D architectural modeling, and comprehensive engineering drawings for passenger facilities, modernized ticket counters, passenger waiting lounges, drainage system redesign, and access corridors."
  },
  {
    year: "2026",
    stat: "58.52 Acres",
    title: "Gulshan-1 to Progati Sarani Link Road & Road 130/134 Improvement",
    client: "Dhaka North City Corporation (DNCC)",
    description: "Detailed topographical survey, longitudinal profiles, RCC median design, passenger waiting shelter 3D models, and storm drainage layouts along the critical Gulshan-Badda commercial connector."
  },
  {
    year: "2025",
    stat: "800+ km",
    title: "SIRTP / Climate Smart Rural Transport Project (CSmaRT)",
    client: "Local Government Engineering Department (LGED) / PRC-IMAGE",
    description: "Over 800 kilometers of detailed road network survey, centerline profiling, and establishment of geodetic Temporary Benchmarks (TBMs) using RTK GNSS for climate-resilient rural transport corridors."
  },
  {
    year: "2024",
    stat: "100,000+ Poles",
    title: "National LT & HT Power Distribution Pole Survey (Phases 1 & 2)",
    client: "Bangladesh Power Development Board (BPDB) / CEGIS",
    description: "Surveyed approximately 1 Lac low-tension and high-tension electrical distribution poles using RTK GNSS across multiple districts including Ghatura, Datiara, Trishal, Gafargaon, Bhaluka, and Phulpur."
  },
  {
    year: "2024",
    stat: "10,000+ GCPs",
    title: "Mouza & Plot Based National Digital Land Zoning Project",
    client: "Ministry of Land / CEGIS",
    description: "Established more than 10,000 Ground Control Points (GCPs) using static and RTK GNSS positioning across all 64 districts of Bangladesh for national digital land zoning and GIS cadastral integration."
  }
];

export const completedProjectsCatalog: Project[] = [
  {
    id: 1,
    title: "Improving Urban Governance & Infrastructure Project",
    client: "LGED (Client: IMAGE)",
    category: "Urban & Modernization",
    location: "Shibganj Pourashava, Chapai Nawabganj",
    description: "Comprehensive municipal urban infrastructure and topographic mapping for pourashava governance enhancement.",
    highlight: false
  },
  {
    id: 2,
    title: "Chhatak Ropeway Transportation Survey Project",
    client: "MEC",
    category: "Survey & GNSS",
    location: "Chhatak, Sunamganj",
    description: "Precision alignment and topographic investigation for industrial ropeway transportation infrastructure.",
    highlight: false
  },
  {
    id: 3,
    title: "GCP Data Collection for 4 Upazilas in Pirojpur",
    client: "Urban Development Directorate (UDD) / PlanTED",
    category: "Survey & GNSS",
    location: "Pirojpur District",
    description: "Geodetic Ground Control Point network establishment and static GPS baseline measurements.",
    highlight: false
  },
  {
    id: 4,
    title: "Mouza & Plot Based National Digital Land Zoning Project (Phases 1 & 2)",
    client: "Ministry of Land (Client: CEGIS)",
    category: "GIS & Remote Sensing",
    location: "Nationwide (64 Districts)",
    description: "National flagship land zoning initiative: GCP collection, spatial data analysis, and geodatabase structuring.",
    highlight: true,
    metrics: "10,000+ GCPs"
  },
  {
    id: 5,
    title: "TBM Verification & Establishment",
    client: "Bangabandhu Sheikh Mujibur Rahman Maritime University (General Survey)",
    category: "Survey & GNSS",
    location: "BSMRMU Campus",
    description: "High-precision vertical benchmark network establishment and mathematical closure verification.",
    highlight: false
  },
  {
    id: 6,
    title: "TBM Establishment in Char Kolatoli & Char Jahiruddin",
    client: "Bangladesh Water Development Board (BWDB) Bhola",
    category: "Hydrographic & Bathymetry",
    location: "Bhola Coastal Islands",
    description: "Island geodetic benchmark transfer and shoreline topographic control network.",
    highlight: false
  },
  {
    id: 7,
    title: "Tejgaon Truck Terminal Modernization Project",
    client: "Dhaka North City Corporation (DNCC) / BETS Consulting",
    category: "Urban & Modernization",
    location: "Tejgaon, Dhaka",
    description: "Topographic survey, traffic circulation layout, and engineering base mapping.",
    highlight: false
  },
  {
    id: 8,
    title: "ECB-Jahiruddin Detail Road Survey Project",
    client: "24 Engineering Construction Brigade, Bangladesh Army (Geo-Static)",
    category: "Engineering & Infrastructure",
    location: "Strategic Road Corridors",
    description: "Rigorous military-grade road centerline survey, cross-sections, and alignment verification.",
    highlight: true
  },
  {
    id: 9,
    title: "Road Improvement Project for Gangni Pourashava",
    client: "LGED",
    category: "Engineering & Infrastructure",
    location: "Gangni, Meherpur",
    description: "Road corridor surveys, pavement condition mapping, and drainage improvement alignments.",
    highlight: false
  },
  {
    id: 10,
    title: "Road Improvement Project for Meherpur Pourashava",
    client: "LGED",
    category: "Engineering & Infrastructure",
    location: "Meherpur",
    description: "Municipal road network survey, leveling, and structural alignment verification.",
    highlight: false
  },
  {
    id: 11,
    title: "Bathymetry and RTK Survey for Proposed Islampur Bridge on Brahmaputra River",
    client: "LGED (Client: EQMS)",
    category: "Hydrographic & Bathymetry",
    location: "Brahmaputra River, Jamalpur",
    description: "Hydrographic single-beam echo sounding, riverbed profile mapping, and riverbank RTK topographic surveys.",
    highlight: true,
    image: "/assets/showcase/river-bathymetry-sounding.jpg"
  },
  {
    id: 12,
    title: "Sustainable & Integrated Rural Transport Project (SIRTP/CSmaRT)",
    client: "LGED (Client: PRC-IMAGE)",
    category: "Engineering & Infrastructure",
    location: "Multiple Rural Districts",
    description: "Over 800 km of road network mapping, TBM establishment, and geometric alignment.",
    highlight: true,
    metrics: "800+ km Surveyed"
  },
  {
    id: 13,
    title: "PDB HT Pole Survey at Ghatura & Datiara Sub-Stations",
    client: "Bangladesh Power Development Board (BPDB) / CEGIS",
    category: "GIS & Remote Sensing",
    location: "Brahmanbaria Region",
    description: "High-tension transmission and distribution asset spatial mapping with RTK precision.",
    highlight: false
  },
  {
    id: 14,
    title: "PDB LT Pole Survey in Trishal, Gafargaon, Bhaluka & Phulpur S&D",
    client: "Bangladesh Power Development Board (BPDB) / CEGIS",
    category: "GIS & Remote Sensing",
    location: "Mymensingh District",
    description: "Low-tension electrical pole asset inventory, electrical connectivity attributes, and geodatabase integration.",
    highlight: false
  },
  {
    id: 15,
    title: "GCP Collection for Gopalganj Economic Zone 1 Project",
    client: "Bangladesh Economic Zones Authority (BEZA) / CEGIS",
    category: "Survey & GNSS",
    location: "Gopalganj EZ-1",
    description: "High-order static GNSS control establishment for major industrial economic zone master plan.",
    highlight: true
  },
  {
    id: 16,
    title: "Bathymetry and RTK Survey for Proposed Khoksha Bridge",
    client: "LGED (Client: EQMS)",
    category: "Hydrographic & Bathymetry",
    location: "Khoksha, Kushtia",
    description: "Riverbed elevation contours, scour analysis, and bridge abutment topographic tie-ins.",
    highlight: false
  },
  {
    id: 17,
    title: "Bathymetry and RTK Survey for Proposed Doara Bazar Bridge",
    client: "LGED (Client: EQMS)",
    category: "Hydrographic & Bathymetry",
    location: "Doara Bazar, Sunamganj",
    description: "Underwater river cross-sections, waterway clearance calculation, and hydrological profiling.",
    highlight: false
  },
  {
    id: 18,
    title: "Bathymetry and RTK Survey for Proposed Rangabali Bridge",
    client: "LGED (Client: EQMS)",
    category: "Hydrographic & Bathymetry",
    location: "Rangabali, Patuakhali",
    description: "Coastal tidal river bathymetric sounding and approach road topographic surveying.",
    highlight: false
  },
  {
    id: 19,
    title: "Static Survey GCP Collection in BREB Substations (Dhaka Zone)",
    client: "Bangladesh Rural Electrification Board (BREB) / IMAGE",
    category: "Survey & GNSS",
    location: "Dhaka Zone Substations",
    description: "Substation spatial georeferencing using dual-frequency static GNSS baselines.",
    highlight: false
  },
  {
    id: 20,
    title: "Bathymetry and RTK Survey for LGED Deep Nagar – Silicon City Bridge",
    client: "LGED (Client: EQMS)",
    category: "Hydrographic & Bathymetry",
    location: "Silicon City Channel",
    description: "Waterway channel profiling and high-precision bridge alignment surveying.",
    highlight: false
  },
  {
    id: 21,
    title: "Long-Term Plan (LTP) of Sanitary Landfill at Moheshkhali SWM",
    client: "LGED (Client: OSMO Corporation)",
    category: "Engineering & Infrastructure",
    location: "Moheshkhali, Cox's Bazar",
    description: "Structural design, leachate drainage modeling, engineering drawings, and BOQ for modern Solid Waste Management.",
    highlight: true
  },
  {
    id: 22,
    title: "Survey & Assessment of Newly Accreted Land in Coastal Mangroves",
    client: "Bangladesh Forest Department (Client: Bondhu Foundation)",
    category: "GIS & Remote Sensing",
    location: "Coastal Mangrove Belts",
    description: "UAV aerial survey using RTK-enabled drone, vegetation density classification, and newly formed char accretion mapping.",
    highlight: true,
    metrics: "Coastal Drone Survey"
  },
  {
    id: 23,
    title: "Multi-Pourashava Urban Surveys across Southwestern Districts",
    client: "Pourashava Authorities",
    category: "Urban & Modernization",
    location: "Meherpur, Chuadanga, Kushtia, Jhenaidah, Jashore",
    description: "Continuous municipal boundary, road, drainage, and property infrastructure surveying.",
    highlight: false
  },
  {
    id: 24,
    title: "Reinstallation & Adjustment of River Water-Level Gauge Readers",
    client: "BADC (WEB-AIS Project)",
    category: "Hydrographic & Bathymetry",
    location: "Krishnapur, Chailla Burundi & Uttar Jamsha, Manikganj",
    description: "Geodetic leveling, river gauge sensor calibration, and continuous hydrological stage monitoring.",
    highlight: false
  },
  {
    id: 25,
    title: "Topographic Surveying & Gauge Readers Installation at Gangarampur",
    client: "BADC (WEB-AIS Project)",
    category: "Hydrographic & Bathymetry",
    location: "Gangarampur, Manikganj",
    description: "Channel cross-sections and real-time water elevation baseline calibrations.",
    highlight: false
  },
  {
    id: 26,
    title: "NDVI Calculation & Multi-Temporal Remote Sensing Analysis",
    client: "BADC (WEB-AIS Project)",
    category: "GIS & Remote Sensing",
    location: "Agricultural Pilot Zones",
    description: "Sentinel-2 and drone multispectral NDVI imagery processing for crop health, irrigation scheduling, and yield modeling.",
    highlight: true
  },
  {
    id: 27,
    title: "Modernization of Passenger Facilities at Mohakhali Inter-District Bus Terminal",
    client: "Dhaka North City Corporation (DNCC)",
    category: "Urban & Modernization",
    location: "Mohakhali, Dhaka",
    description: "Digital survey, AC waiting lounge architecture, ticket counter modernization, passenger flow optimization, and 3D models.",
    highlight: true,
    image: "/assets/showcase/mohakhali-terminal-project.jpg"
  },
  {
    id: 28,
    title: "RCIPF Detail Topographic Survey at Pahartoli GER Shop",
    client: "Bangladesh Railway / Oriental Consultants Global (OCG Japan)",
    category: "Engineering & Infrastructure",
    location: "Pahartoli Railway Workshop, Chattogram",
    description: "RTK and RTK-enabled UAV drone survey, digital terrain modeling, and track alignment for major railway workshop modernization.",
    highlight: true,
    image: "/assets/showcase/pahartoli-railway-workshop.jpg"
  },
  {
    id: 29,
    title: "RCIPF Topographic Survey at Abdulpur Railway Bypass",
    client: "Bangladesh Railway / Oriental Consultants Global (OCG Japan)",
    category: "Engineering & Infrastructure",
    location: "Abdulpur Station Corridor",
    description: "Drone photogrammetry, Digital Surface Model (DSM), DTM, and railway bypass corridor alignment under Subproject 2.",
    highlight: true,
    image: "/assets/showcase/abdulpur-railway-bypass-dsm.jpg"
  },
  {
    id: 30,
    title: "Detail Road Survey under DSCC Jurisdiction",
    client: "Dhaka Transport Coordination Authority (DTCA) / IMAGE",
    category: "Survey & GNSS",
    location: "Dhaka South City Corporation",
    description: "Approximately 200 km high-density road network survey using RTK GNSS and RTK-enabled UAVs in dense urban corridors.",
    highlight: true,
    metrics: "200 km Urban Survey"
  },
  {
    id: 31,
    title: "Detail Road Survey using RTK under LGED",
    client: "LGED (Client: IMAGE)",
    category: "Survey & GNSS",
    location: "Regional Road Corridors",
    description: "Approximately 450 km of comprehensive road alignment, pavement edge, and culvert survey.",
    highlight: true,
    metrics: "450 km Detail Survey"
  }
];

export const clientLogos = [
  { name: "Local Government Engineering Department (LGED)", code: "LGED" },
  { name: "Dhaka North City Corporation (DNCC)", code: "DNCC" },
  { name: "Dhaka South City Corporation (DSCC)", code: "DSCC" },
  { name: "Bangladesh Railway", code: "BR" },
  { name: "Bangladesh Agricultural Development Corporation (BADC)", code: "BADC" },
  { name: "Bangladesh Power Development Board (BPDB)", code: "BPDB" },
  { name: "Bangladesh Rural Electrification Board (BREB)", code: "BREB" },
  { name: "Bangladesh Water Development Board (BWDB)", code: "BWDB" },
  { name: "Ministry of Land", code: "MinLand" },
  { name: "Bangladesh Economic Zones Authority (BEZA)", code: "BEZA" },
  { name: "24 Engineering Division, Bangladesh Army", code: "Army 24" },
  { name: "Oriental Consultants Global Co., Ltd. (OCG Japan)", code: "OCG Japan" },
  { name: "Center for Environmental & Geographic Information Services (CEGIS)", code: "CEGIS" },
  { name: "Dhaka Transport Coordination Authority (DTCA)", code: "DTCA" },
];

export const multidisciplinaryExperts = [
  "Roads & Highways Engineering",
  "Railway Infrastructure & Track Design",
  "Bridges & Culverts Structural Engineering",
  "Architectural & Urban Planning",
  "Resort & Commercial Developments",
  "Water Resources & River Hydraulics",
  "Urban Drainage & Stormwater Modeling",
  "Agricultural GIS & Irrigation Networks",
  "Environmental Impact & Solid Waste Management",
  "Geodetic Surveying & Satellite Remote Sensing",
  "Quality Assurance & Quantity Surveying (BOQ/BOM)"
];

