const suppliers = [
  "5 VALLEYS GmbH",
  "A.W. Faber Castell Vertrieb GmbH",
  "ABBACINO",
  "Action Sports GmbH",
  "Adolf Riedl GmbH & Co. KG",
  "Affari AB",
  "Agentur Anna Upleger 17;30 Home",
  "Agentur Brigitte Döpgen",
  "Agentur König",
  "Agnes Bernrieder GmbH",
  "Agresti S.r.l.",
  "AHRI Fashion e.K.",
  "Albert L.",
  "Alfred Sternjakob GmbH & Co. KG",
  "Alpargatas",
  "Alpenfee Trachten GmbH",
  "AlpenHerz GmbH",
  "alpha Tonträger Vertriebs GmbH",
  "Alraune Lapidaries Edelstein Handels GmbH",
  "Alveus GmbH",
  "Alzhaus-Media",
  "Amarcords S.r.l.",
  "Amazon",
  "Ambiente Europe B.V.",
  "American Heritage GmbH & Co. KG",
  "Amigo Spiel & Freizeit GmbH",
  "Amor Gmbh",
  "Amscan Europe GmbH",
  "Andersson Import GmbH",
  "Andersson Supply ApS",
  "Andreas Ruf",
  "Andreola",
  "Anita Dr.Helbig GmbH",
  "ANKORSTORE SAS",
  "Another me",
  "Antonio Viani Importe GmbH",
  "Apu Kuntur GmbH",
  "Armedangels",
  "Arteco Christine Eichhorn",
  "Arthouse GmbH",
  "Artitec",
  "ARTY FETES FACTORY Z.A. de la Mesnilliere",
  "ASA Selection GmbH",
  "Atelier Gardeur GmbH",
  "Augenstolz",
  "Aunts & uncles",
  "Avery Zweckform",
  "Baby King Kong GmbH",
  "Babyface",
  "Bag Boys",
  "Bags for Living Warenhandels-GmbH",
  "Baier & Schneider GmbH & Co. KG",
  "Bardealer.de",
  "Barth GmbH",
  "Barts",
  "Bassalo Sport",
  "Bastion Collections B.V.",
  "BAVANDLE",
  "Bayerische Glaswerke GmbH",
  "bb Klostermann GmbH",
  "Beard-Pirate",
  "Beauty Scents Ltd.",
  "Becker & Becker Vertrieb GmbH & Co KG",
  "Becker Joest Volk Verlag",
  "Bedole GmbH",
  "Beheim International Brands",
  "Bella Tavola",
  "Benanna Records",
  "Berliner Brandstifter GmbH",
  "Bernd Wigger Markenvertrieb",
  "Berwin & Wolff AG",
  "Bestseller Textilhandels GmbH",
  "Better be Bold GmbH",
  "Beverage Concierge GmbH & Co. KG",
  "Beyerle Verlagsvertretungen GbR",
  "Beyond Living",
  "Biba B.V.",
  "Billiet-Vanlaere",
  "Bindewerk GmbH & Co. KG",
  "Blackfire",
  "Blankenburger Spielwarenhandels GmbH",
  "Blaumann Jeans",
  "blomus GmbH",
  "Bloomboxer GmbH",
  "Bloomingville A/S",
  "Blossify",
  "Blue de Genes",
  "Blush Indigo Jewellery",
  "Blutsgeschwister GmbH",
  "Bodenschatz Fashion GmbH",
  "Böker Manufaktur",
  "Boldking B.V.",
  "Boley",
  "Boltze Gruppe GmbH",
  "Bonnier Media Deutschland GmbH",
  "Bosch Schmuckwaren GbR",
  "Boxine Sales DAB GmbH",
  "BRAINSTREAM GmbH",
  "Brandit Textil GmbH",
  "Brands Fashion GmbH",
  "Brands4Kids A/S",
  "Brandstätter Verlag",
  "Breimeir GmbH",
  "Bremer Spirituosen Contor GmbH",
  "Brennerei Schnitzer GmbH",
  "Brockhaus Kommissionsgesellschaft GmbH",
  "Bruder",
  "B-Tex Fashion GmbH",
  "Buadep GmbH",
  "Bücherwege Vertrieb GmbH",
  "Büffel Bill Deutschland GmbH",
  "Bullyworld GmbH",
  "Buntbox GmbH",
  "Buntpapierfabrik Ludwig Bähr GmbH & Co. KG",
  "Butzon & Bercker GmbH",
  "Butzon & Bercker GmbH",
  "bv handel",
  "by Riese GmbH & Co. KG",
  "By room",
  "by Vivi",
  "byEloise AB",
  "C. Josef Lamy GmbH",
  "C. Jul. Herbertz GmbH",
  "C.C. Crönert",
  "Caimano GbR",
  "Calao",
  "Camano GmbH & Co. KG",
  "Candle guy",
  "CARAN dARCHE Vertriebs GmbH",
  "Carl H. Demuß",
  "Carl Hoernecke Chem. Fabrik GmbH & Co. KG",
  "Carletto Deutschland GmbH",
  "Cartamundi Deutschland GmbH",
  "Cawö Textil GmbH & Co. KG",
  "CEDON MuseumShops GmbH",
  "Cericola Oleificio",
  "Charly Therapie",
  "Chic.Mic GmbH",
  "Chiemgau Ketterl",
  "Chiemgauer Seifenmanufaktur",
  "Chiemgauer Verlagshaus",
  "Chiemgauer-Schmankerl GmbH",
  "Chiemsee GmbH & Co.KG",
  "Chiemsee Premium Gin UG",
  "Cilio Tisch-Accessoires GmbH",
  "CityLife GbR",
  "Claro Handels- GmbH",
  "Claudius E. Kreidler",
  "Clevere Kids GmbH",
  "Cluse",
  "CMMA Gartmann GmbH",
  "CNB Oriental HV-Seifert",
  "Codello GmbH",
  "Confiserie Dengel",
  "Continenta GmbH",
  "Coppenrath Verlag GmbH & Co. KG",
  "Cornelsen Verlagskonto GmbH",
  "Cowboysbag Wholesale BV",
  "Craftbites",
  "Creamy GmbH",
  "Creation de Hanninger GmbH & Co. KG",
  "Culinaro Mortale",
  "Curameo AG",
  "Czap",
  "D & N Lederwaren",
  "D&R Denkriesen UG",
  "Damrich Bekleidungs-GmbH",
  "Daniel Wellington",
  "Dante Accessories",
  "Dantesse",
  "DBI Germany GmbH",
  "DEFET Gmbh",
  "DELIGREECE GmbH",
  "DelikatessenWinkel GbR",
  "Deluxe Homeart ApS",
  "Demmel Handels GmbH",
  "Denk Keramische Werkstätten",
  "Depesche Vertriebs GmbH & Co. KG",
  "Der Fellhof VertriebsGmbH",
  "der kleine MUC",
  "Design Letters GmbH",
  "DF Models",
  "DFP Dr. Falkenthal & Co GmbH",
  "Die Blechfabrik e.K.",
  "Die Gestalten Verlag GmbH & Co. KG",
  "Die Gräfin GmbH",
  "Die Lebkuchenglocke GmbH",
  "Die Werkstatt Verlagsauslieferung GmbH",
  "Dies & Jenes München",
  "Dies und Jenes",
  "Dinnerware & Co. B.V.",
  "Distilleria Marzadro S.p.A.",
  "Dittmar GmbH & Co. KG",
  "Dolddachswerk Dittmar GmbH",
  "Donkey Products GmbH & Co. KG",
  "Dorling Kidersley Verlag GmbH",
  "Dornschild KG",
  "Dorothee Lehnen GmbH",
  "Dovo Stahlwaren",
  "Dr. P. Lacebo",
  "dtv Verlagsgesellschaft mbH & Co. KG",
  "Durable Hunke & Jochheim GmbH & Co. KG",
  "Durchgeknallt Top Media",
  "EASTPAK VF Germany",
  "Ebarrito Srl",
  "edding Vertrieb GmbH",
  "Edel Germany GmbH",
  "Edelman B.V.",
  "Edelranz GmbH",
  "Edition Michael Fischer GmbH",
  "Egan",
  "Egmont Verlagsgesellschaft mbH",
  "Eicie GmbH",
  "Eisend Kids e.K.",
  "EJA International ApS",
  "EK/servicegroup eG",
  "Elbfreunde oHG",
  "ELECTRO CIRKEL",
  "ElectronicPartner Handel SE",
  "Elements Lighting",
  "Ella in Love HQ",
  "Emil Vertriebs-GmbH",
  "Emons Verlag GmbH",
  "EPOCH T räumwiesen GmbH",
  "Erzi",
  "Esbit Compagnie GmbH",
  "Escapulario OHG",
  "ESGE-Textilwerk Maag GmbH & Co. KG",
  "Esprit Wholesale GmbH",
  "Essenza Home",
  "Eulenschnitt",
  "Eulenspiegel GmbH",
  "Eurographics",
  "Eusamex France sarl",
  "Eva Haupts",
  "Ewers Strümpfe GmbH",
  "ExaClair GmbH",
  "Expert24 / Reisenhofer Getränke GmbH",
  "EYDL OG",
  "F&H Group GmbH",
  "F&M Technology GmbH",
  "F1-Generation GmbH",
  "Faire Großhandel BV",
  "Falke KGaA",
  "Fancy Food Lifestyle e. K.",
  "Fashion Account",
  "Fashy GmbH",
  "Feinkost Machado",
  "Feinkost Spina GmbH & Co. KG",
  "Fiftyeight Products",
  "Filotea Experience Società Cooperativa",
  "Finest Buy - Exquisite Goods",
  "Fineste Beverages GmbH",
  "fischertechnik GmbH",
  "Fitz and Huxley GmbH",
  "Fjällräven Sportartikelhandels GmbH",
  "Flashpoint AG",
  "FLSK Products GmbH",
  "Flux Design Products GmbH",
  "Flyeralarm GmbH",
  "Folkmanis",
  "FOND OF GmbH",
  "Formselect GmbH",
  "Forrest & Love Gbr",
  "Frager GmbH, Paplebag",
  "Franckh Kosmos Verlag",
  "Franz Schneider GmbH & Co. KG",
  "Franz Stettner & Sohn GmbH",
  "frechverlag GmbH",
  "Friedrich Lederwaren GmbH",
  "Friedrich W. Schneider GmbH & Co. KG",
  "Fritz Fries & Söhne GmbH & Co. KG",
  "Fritzi GmbH",
  "FUJIFILM Europe GmbH",
  "Fun Trading GmbH",
  "Fürnis",
  "G.Wurm GmbH + Co. KG",
  "Gabi Seidl",
  "Gallmayer",
  "Ganssmüller GmbH",
  "Gate One Fashion GmbH",
  "Gaudiknopf Schwinghammer GmbH",
  "Gebr.Schröder GmbH",
  "Gebrüder Haasis GmbH & Co. KG",
  "GEFU GmbH",
  "geobra Brandstätter Stiftung GmbH & Co.KG",
  "Georg A. Steinmann Lederwarenfabrik GmbH & Co. KG",
  "Georg D. W. Callwey GmbH & Co. KG",
  "Georg Haupt Bekleidungswerke GmbH",
  "Geranova Bruckmann Verlagshaus",
  "Gerd Haas",
  "Gerlinde Hofer - Florex GmbH",
  "Gerstenberg Verlag",
  "Gerth Medien GmbH",
  "Gift Company Geschenke Vertriebsgesellschaft mbH",
  "Gilde Handwerk Macrander",
  "Ginn",
  "Glanz & Zauber",
  "glaskoch B. Koch",
  "Globos Luftballon GmbH",
  "Globus Warenhandel GmbH",
  "Gmeiner Confiserie und Kaffeehausunternehmen",
  "Gmeiner Verlag GmbH",
  "Go Dutch Label",
  "GO Europe GmbH",
  "Golddachswerk Dittmar GmbH",
  "Goldline GmbH",
  "Goldnadel Design",
  "Gollnest & Kiesel",
  "Good old Friends",
  "Goodlife Fashion GmbH & Co. KG",
  "Gorimo-tex GmbH",
  "GOT BAG GmbH",
  "GRÄFE UND UNZER VERLAG GmbH",
  "Graphik Design & Illustration, Anna Schöll",
  "grappashop.de",
  "Grätz Verlag GmbH",
  "GreenGate Europe A/S",
  "Greenlife Value GmbH",
  "Greenomic Delikatessen",
  "Grizzly Foods UG",
  "GROH Vertag GmbH",
  "Grün & Form",
  "Guardenza",
  "Günter Hartmann Tabakvertrieb",
  "Gunz Warenhandels GmbH",
  "GVA - Gemeinsame Verlagsauslieferung",
  "Gweih & Silk Leder Fantastico GmbH",
  "H. Truttenbach Zierbandfabrik",
  "H. Würflingsdobler GmbH",
  "H.C.A. Collection Handels-GmbH",
  "HABA GmbH & Co. KG",
  "Häfft-Verlag GmbH",
  "Hajostrick GmbH",
  "Hama",
  "Hama GmbH & Co.KG",
  "Handed By",
  "Handelsagentur CDH",
  "Handelsagentur Schur GbR",
  "handgemacht mit Liebe",
  "hannes roether gmbh",
  "Hans Dill KG",
  "Hans und Gitti Riedl - Freilandei",
  "Hanser Carl Verlag GmbH & Co.KG",
  "Hans-Jürgen Müller GmbH & Co.KG",
  "Happy People",
  "Happy Rain",
  "Happy Socks Germany GmbH",
  "Hartley & Marks Publishers Ltd.",
  "Hartung GmbH & Co. KG",
  "Haslinger Seifen & Kosmetik GmbH",
  "Haus der Trends",
  "HEIMAT GbR",
  "Heimatliebe",
  "Hein Event GmbH",
  "Heinrich Bauer GmbH & Co. KG",
  "Heinrich Sieber & Co GmbH + Co KG",
  "Helmut Wermut GbR",
  "Henrik Steen A/S",
  "HEPCO GmbH",
  "HERE`S THE THING WE LIKE",
  "Hergo Creation",
  "Heritage Trade Company s.r.l",
  "Heritage Trade Company s.r.l.",
  "Hermann Bauer GmbH",
  "Herold Einfuhr GmbH",
  "HESTRA Handschuhe GmbH",
  "HGV",
  "Highlight Company",
  "Himalaya Produkte",
  "HJP Pfeifle Kleinlederwaren e.K.",
  "Höfats GmbH",
  "Hoff Interieur GmbH & Co. KG",
  "Holla und Hui",
  "holy shocolate",
  "Holzkern Deutschland",
  "Homescapes Europa Ltd",
  "Horl 1993 GmbH",
  "House of Emotions GmbH",
  "Huber Bodywear GmbH",
  "Huber Mode & Tracht GmbH",
  "Hulker Europe Distribution s.r.o.",
  "Hutter Trade GmbH + Co KG",
  "Ib Laursen ApS",
  "IBU Jewels",
  "ICP Transaction Solutions GmbH",
  "IDEAS Denmark A/S",
  "Iden Nürnberg GmbH",
  "IHR Ideal Home Range GmbH",
  "Il Nuraghe GmbH",
  "ILG Germany GmbH",
  "Ilse Jacobsen",
  "Imkerei Claus Steger",
  "Independent Spirit",
  "INFANTINO B KIDS B.V.",
  "Innkaufhaus Schuhmacher KG",
  "interTee",
  "Invantino B Kids",
  "INVENTO Products & Services GmbH",
  "Irene Kristen-Deliano",
  "Isabelle Rose Home d.o.o",
  "Isar Trachten Max Eder GmbH",
  "Isco Textilwerk Gebr. Ammann GmbH & Co. KG",
  "Isi/Contigo/Berndes/Peugeot",
  "ISP ISAR SALES PARTNER GMBH",
  "Isybe",
  "ITALBEV GmbH",
  "J.G. Cotta´sche Buchhandlung",
  "Jacobson Group",
  "Jalal D'or GmbH",
  "Jamara e. K.",
  "Ja-Unendlich GbR",
  "Jellycat Limited",
  "Jens Nolte GmbH",
  "JH-Products",
  "JJs Manöver Schluck UG",
  "Jofrika Cosmetics GmbH",
  "JOJO-Handelsagentur Joachim Kürz e.K.",
  "Jonathan O Reilly e.K",
  "Josef Grätz e. K.",
  "Josef Grätz e.K.",
  "JOYVITA",
  "Julia Trentini (Bedole GmbH)",
  "Jumbo Spiele GmbH",
  "Jupiter Sportswear GmbH",
  "Jurassic Light",
  "Juratoys GmbH",
  "Juri Piscitello GmbH",
  "Kaemingk GmbH",
  "Kaheku",
  "KAMAR S.r.l.",
  "Kampfhummel Spiele GmbH",
  "Kapla",
  "Kapten & Son Vertriebs GmbH",
  "Karl Conzelmann GmbH & Co. KG (Nina von C)",
  "Karl Erlwein GmbH & Co.KG",
  "Katadyn Deutschland GmbH",
  "Kaufmann Verlag",
  "Kaweco h & m Gutberlet GmbH",
  "Kaz Europe Sarl",
  "KCG Kawlath Creativ GmbH",
  "Kela",
  "Kerlin KG",
  "KF Design GmbH",
  "Kids Fashion Group GmbH & Co. KG",
  "Kikkerland",
  "Kila-photography",
  "KISS & Co.",
  "KK Krulick & Kaiser GbR",
  "KKS Fashion Group GmbH",
  "Klangundkleid.de GmbH",
  "Klar Seifen GmbH",
  "Klaus Hanfstingl Verlag GmbH Hanra",
  "Kleine Flitzer",
  "Knit Factory",
  "Kolbe Alfred GmbH",
  "Konplott S.a.r.l.",
  "Koriolis GmbH",
  "Korsch-Verlag",
  "Kosmaten GbR",
  "Kosmetik - R. Neuner",
  "Kostbar Handel & Vertrieb",
  "Krüger Dirndl GmbH",
  "Küchenprofi GmbH",
  "Kuhn Rikon AG",
  "Kunert Fashion GmbH",
  "L. L. Design GmbH",
  "La Case de Cousin Paul",
  "La Siesta GmbH",
  "La Vida GmbH",
  "Ladelle GmbH",
  "Lake Distribution GmbH",
  "Lakrids by Johan Bülow GmbH",
  "Lana Grossa GmbH",
  "Lantenhammer GmbH",
  "Lars Müller Publishers GmbH",
  "Lascana",
  "LÄSSIG  GmbH",
  "LAUX GmbH",
  "Le Creuset GmbH",
  "Le Foodink GesmbH",
  "Leatherman Europe GmbH",
  "Legami S.p.A. Società Benefit",
  "Legler OHG",
  "LEGO System A/S",
  "Leo & Lilo GmbH",
  "leo & ugo Paris",
  "Lerros Moden GmbH",
  "Leuchtturm Gruppe",
  "Lifetime Brands Europe Ltd",
  "Light and Living",
  "Ligna Arts OHG",
  "Lilliputiens s.a.",
  "Linde AG",
  "Lingadore",
  "Little-t®",
  "Lizas",
  "LKG mbH",
  "Loewe",
  "Loopblapp BV",
  "LOT83",
  "Louis N. Kuenen GmbH",
  "LTB",
  "Lua Accessories MMA GmbH & Co. KG",
  "Luckies of London Ltd",
  "Lucky de Luca",
  "Lumani",
  "Lurch AG",
  "Lutz Mauder",
  "Luxor BV",
  "Lyra-Bleistift-Fabrik GmbH & Co. KG",
  "LYZENSE Bags & Accessoires GmbH",
  "M I L K - Agentur für nachhaltige Mode",
  "MA Portugal Terracota, LDA",
  "MACVAD Europa GmbH",
  "Madleys",
  "Magellan GmbH & Co.KG",
  "Magilano",
  "MAGS Vertriebs GmbH",
  "MAGU GmbH",
  "Mahlgrad GmbH",
  "Maica GmbH",
  "Maier & Pitzer OG Lederwaren Im & Export",
  "MAIRDUMONT GmbH & Co. KG",
  "Maison Berger Paris – Durance",
  "manger trouvé",
  "Manufaktur Jörg Geiger GmbH",
  "Manufaktur Schaut",
  "Many Mornings sp. k.",
  "MARCATO S.r.l.",
  "Marcus Hecht-Hartrey",
  "Margit Neef",
  "Maritime Zeitkapseln",
  "Mark's Europe",
  "Marmeladenherz",
  "Marta du chateu",
  "MASCH AGENCY GmbH & Co. KG",
  "Mattel GmbH",
  "Melissa & Doug",
  "meori GmbH & Co. KG",
  "Mepal Deutschland",
  "Mercader s.r.o.",
  "Merz b. Schwanen",
  "Mey GmbH & Co. KG",
  "MG1 Bodywear H. Render",
  "MGA Entertainment",
  "MGM Design e.K.",
  "Microplane",
  "Mikamax B.V.",
  "Milestone Sportwear Handels GmbH",
  "Mimi's Glow Accessoires",
  "minouki",
  "Miss June",
  "Mister33",
  "MN-TRENDS",
  "Mode Monte Carlo",
  "Monjolibol",
  "Montana Cans",
  "Monti",
  "Moover Toys Deutschland",
  "more is more UG",
  "Moses Verlag GmbH",
  "Mottoland",
  "MTC world of fashion GmbH",
  "Murmelprinz",
  "mywalit.com srl",
  "N8SChicht GmbH",
  "Nastrovje P. GmbH & Co. KG",
  "Neuhaus Lederwaren",
  "New Edition",
  "NG Buchverlag GmbH",
  "Nici GmbH",
  "Niemand Dry Gin UG",
  "NIMO with Love",
  "Nintendo of Europe",
  "NOI home & fashion",
  "Noorlys GmbH",
  "Norbert Woll GmbH",
  "Nordlicht",
  "Nudies Jeans",
  "Nukag BV",
  "Nümph",
  "Nuts Innovation AG",
  "Obermeyer GmbH & Co. KG",
  "ODonnell Moonshine GmbH",
  "Oesiwein",
  "Olivenholz erleben",
  "ONIine Klaus Koch GmbH",
  "ONLINE Schreibgeräte GmbH",
  "Only Natural V.O.F",
  "Onskinery GmbH & Co. KG",
  "OOZOO Germany Schaubel GmbH",
  "Opus - Casa e Decori",
  "Orbitkey Pty Ltd",
  "Orderchamp B.V.",
  "ORTLIEB Sportartikel GmbH",
  "Otto Christoffel",
  "Otto Office GmbH",
  "Otto Simon Deutschland",
  "Otto Zill & Co. GmbH",
  "pad home design concept gmbh",
  "PAGNA gmbH & Co.KG",
  "Pako bags GmbH",
  "Pampuschen KG",
  "Pan Lederwaren & Textila Grosshandel GmbH",
  "Panorama Distribution",
  "Paperbox",
  "PaperHouseCompany UG",
  "Paperproducts Design",
  "PARIS FASHION SHOPS",
  "Party X People GmbH",
  "PartyDeco sp. z o.o. ul.",
  "Passionata Chantelle Lingerie GmbH",
  "Pastafino",
  "Pasterkamp - Schönes aus Olivenholz",
  "Paul Günther Spielwarenfabrik",
  "Paul Pietsch Verlag GmbH & Co.KG",
  "PBS Deutschland GmbH & Co. KG",
  "Pearlwood Trading GmbH",
  "Pegasus Spiele GmbH",
  "Pelikan Vertriebsgesellschaft mbH & Co. KG",
  "Perola GmbH",
  "Peter Riegel Weinimport GmbH",
  "Petites Pommes ApS",
  "Petromax GmbH",
  "Phanine B.V.",
  "Philos GmbH",
  "Picard Lederwaren GmbH & Co. KG",
  "Pickmotion UG",
  "Pierelli Group",
  "Pike Brothers GmbH",
  "Pilgrim",
  "Pintinox GmbH",
  "Place du Soleil",
  "Plusdesign AB",
  "PM ModeAgentur - Kids De Luxe",
  "PMI WW BRANDS B.V.",
  "Pölitz",
  "Ponycycle GmbH",
  "Powder Design Ltd.",
  "PP-Berlin GmbH",
  "ppd Papberproducts Design GmbH",
  "Pragal SRLS",
  "Premioloon",
  "Presse-Vertrieb Hermann Trunk GmbH & Co.KG",
  "Primetta GmbH & Co.KG",
  "Principessas",
  "PROFINO GmbH & Co KG",
  "projectshop bv",
  "Prolit Verlagsauslieferung GmbH",
  "Property of...",
  "PROTEST",
  "Prym Consumer Europe GmbH",
  "PT Group B.V. Present Time",
  "PUKY GmbH & Co. KG",
  "PUMA SE",
  "pure and green e.U.",
  "Pure Pepper Projects",
  "Pure Whobertus",
  "Puresigns GmbH",
  "puzzle & play GmbH",
  "Puzzlewelt Leipzig GmbH",
  "PWT Germany GmbH",
  "quecke-Verlag e.K.",
  "Räder GmbH",
  "Ragman Textilhandel GmbH",
  "Rainbow",
  "Rainkiss",
  "Ramar s.n.c.- Marone Hats",
  "Raum der Lichtspezialist",
  "Ravensburger Spieleverlag",
  "RBV Birkmann",
  "Rebel and Rose B.V.",
  "Red Bull Media House GmbH",
  "Red Hot and Blue GmbH",
  "Reidemeister & Ulrichs",
  "Reisedepeschen Verlag M. Hillmer und J. Klaus GbR",
  "Reisenhofer Getränke GmbH",
  "Reisenthel Accessoires GmbH & Co.KG",
  "Relaxound GmbH",
  "Revell",
  "Rheinland Distillers",
  "Rice A/S",
  "RIESS Kelomat GmbH",
  "Riffelmacher & Weinberger",
  "Rijis Textiles B.V.",
  "Rip Curl Europe S.A.S.",
  "Robert Herder GmbH & Co. KG",
  "Romanowski Design GmbH",
  "Rosefield Watches EV",
  "Rosemunde ApS",
  "ROSSI 1931 s.r.l.",
  "Rössler Papier GmbH",
  "Roy Robson",
  "Rubies Deutschland GmbH",
  "Rüdiger Gerhardt",
  "Ruta Fashion Group",
  "Ruta Fashion Group srl",
  "S.Oliver Bernd Freier GmbH & Co. KG",
  "S.Oliver RED LABEL Baby",
  "s.Oliver Sales GmbH & Co. KG",
  "Saffer Wein GmbH",
  "saint sass GmbH",
  "Samsonite",
  "San Rocco s.r.l.",
  "Sanetta, Gebrüder Ammann GmbH & Co. KG",
  "SAS CADES DESIGN",
  "SASAtrend GmbH",
  "SCHIESSER AG",
  "Schiesser Revival",
  "Schilbach GmbH",
  "Schleich GmbH",
  "Schmidt Spiele GmbH",
  "Schmincke & Co.",
  "Schmuckkollektiv GmbH",
  "Schneider Korbwaren AG",
  "Schneider Novus Vertriebs GmbH",
  "Schöning GmbH & Co.KG",
  "Schrödel GmbH",
  "Scs finesse GmbH",
  "Seattle S.N.C",
  "Sebra Interiør ApS",
  "Secret Season GmbH",
  "Secrid B.V.",
  "Seidel Ledermode KG",
  "Seldom Strickmanufaktur",
  "SES Deutschland GmbH",
  "SF GmbH 1896",
  "Shirt and More",
  "Shockly",
  "Shoe-Com GmbH, Jaimie Jacobs",
  "shucube GmbH",
  "Sieper GmbH",
  "Sierra Madre",
  "SIGG Deutschland GmbH",
  "sigikid, H.Scharrer & Koch GmbH & Co. KG",
  "Sigor Licht GmbH",
  "Simba Dickie Vertriebs GmbH",
  "Simm Spielwaren GmbH",
  "Sislo Fashion GmbH",
  "Skin Gin GmbH",
  "SKINY bodywear GmbH",
  "sl Eisblock",
  "Slyrs Destillerie GmbH & Co.KG",
  "Smeg Deutschland GmbH",
  "SMV  Spielwaren Marketing Vertrieb",
  "Snazzy Santa",
  "Snocks GmbH",
  "SOCIEDADE AGRÍCOLA DA HERDADE DO CEBOLAL",
  "SolarCosa",
  "Soldan Marketing GmbH",
  "SOMPEX GmbH & CO. KG",
  "Sonnenglas",
  "Sorbet Bracelets",
  "Spanien-Shop",
  "Spa-Vivent Vertriebs GmbH",
  "Sports Nuts GmbH",
  "SportsPartners GmbH & Co. KG",
  "Stabilo International GmbH",
  "Stadtarchiv Wasserburg",
  "Staedtler Mars Deutschland GmbH",
  "Stance Ltd.",
  "Stauffenberg Edelbrand",
  "Stelton A/S",
  "Stephan Helbig",
  "Sterntaler GmbH",
  "Stewo International AG",
  "stichd bv",
  "STIN OG",
  "Stopperka GmbH",
  "Storefactory AB",
  "Stratic Lederwaren Jacob Bonifer GmbH",
  "STREET HandelsgmbH",
  "Strobl Walter & C.",
  "Ströter GmbH",
  "Strumpf Dirks GmbH",
  "STRUWA Vertriebs- und Service GmbH",
  "STS Stumpf GmbH",
  "Stuco Taschentücher Stuchlik GmbH",
  "SUCOs DO BRASIL-Productos Latino GmbH",
  "SueBeeker Interiors",
  "SUHG",
  "Sunflex Sport GmbH",
  "Super Gem",
  "Supersec",
  "Surijeet Handicraft GmbH",
  "Surkamp Verlag AG",
  "SURPLUS Import GmbH",
  "Süßwaren Albrecht GmbH",
  "sympatico product GmbH",
  "TAC Verlag",
  "Tafelgut",
  "Take2 Design",
  "TAMIYA-CARSON Modellbau",
  "Tante Tomate",
  "TAPIR WACHSWAREN GmbH",
  "Taschen GmbH",
  "Teddy Hermann GmbH",
  "teNeues Media GmbH & Co. KG",
  "Tesch",
  "Tesloff Verlag",
  "Testlieferant für Bestellungen",
  "Testlieferant WMS",
  "The Black Forest BOAR Distillery GbR",
  "The Chesterfield Brand",
  "THE DUKE Destillerie",
  "The Illusionist Distillery - Muggenthaler und Steglich GbR",
  "The Swatch Group GmbH",
  "Theo Klein GmbH",
  "Thermopad GmbH",
  "Thofra Handels GmbH & Co KG",
  "THOFRA Handels-GmbH & Co.KG",
  "Thorka GmbH",
  "Tiger Media Deutschland GmbH",
  "Tinti GmbH",
  "Tipp-Kick GmbH",
  "TIS - Kodak Komplettsystem",
  "Tony´s Chocolonely",
  "TOP-TEAM Collection Vertriebsges. m.b.H.",
  "Toscana Gourmet Since 1957 Srl",
  "to-stock GmbH",
  "Tourismusverein Wasserburg",
  "Toynamics Europe GmbH",
  "Tradegap Ltd70746",
  "Trademark AS",
  "Trading Pool GmbH",
  "Travel Blue GmbH",
  "travelite GmbH + Co.KG",
  "Traveller Sedona GmbH",
  "Tree Distribution GmbH",
  "TrendAlliance GmbH",
  "Trendhaus GmbH",
  "T-Rex Sauces",
  "Triumph International AG",
  "Troika Germany GmbH",
  "Trousselier SAS",
  "Trudi",
  "TY (UK) LTD",
  "TY Deutschland GmbH",
  "Unique Time GmbH",
  "Unitable",
  "Urban Hippies",
  "V. Milano GmbH",
  "VALTEX SAS - CABAÏA",
  "van Berkel Deutschland GmbH",
  "van Deurs Danmark",
  "Van Gennip Textiles B.V.",
  "Vedes Großhandel GmbH",
  "Velvety Manufactur GmbH",
  "VENO GmbH",
  "Verena Trax Bioland Imkerei",
  "Verival - Tiroler Biomanufaktur",
  "Verlag P. Galle",
  "Verlagsgruppe Droemer Kanur",
  "Verlagsgruppe Oetinger Service GmbH",
  "Verlagsgruppe Random House GmbH",
  "Verlagsvertretung Dolles",
  "Vianina",
  "Vicentina GmbH & Co.KG",
  "Victorinox AG",
  "Vignetti di Ettore",
  "VILLAGE COSMETICS GmbH & Co KG",
  "VITTOZZI",
  "voi leather design GmbH & Co.KG.",
  "Volker Lang",
  "Vom Reiter",
  "von dem Knesebeck GmbH & Co. KG Verlag",
  "Vossen GmbH",
  "V-tech",
  "WACOAL EMEA LTD",
  "Wahl International Consumer Group B.V.",
  "walther design GmbH & Co.KG",
  "Wappen Men´s Fashion GmbH",
  "waves and woods Verlag",
  "Wax Design, S.L.",
  "we.supply",
  "WEAT GmbH",
  "Wegter Home B.V.",
  "Weingut Winfried Seeber",
  "Werbeverlag Gorzinski",
  "Werkhaus Design + Produktion GmbH",
  "Westmark GmbH",
  "White Stuff Ltd.",
  "Wigglesteps Atel Tekstil GmbH",
  "Wild and Soft BV",
  "Wildfleisch und Honig M. Bonath",
  "Wilhelm Johann Meier GmbH",
  "Wilox Strumpfwaren GmbH",
  "Wimmer GmbH",
  "Windspiel Manufaktur GmbH",
  "Winefactory Saar GmbH",
  "Winning Moves",
  "WINZZ GmbH",
  "Witzgall",
  "Wolford Deutschland GmbH",
  "Wolke 3 UG",
  "Woll-Oase",
  "Wondercandle",
  "Work-n-Fun GmbH",
  "xanadoo gifts and presents GmbH",
  "Yankee Candle Deutschland GmbH",
  "Yolotl Sabor de Mexico",
  "Zag Bijoux",
  "Zapf Creation AG",
  "Zassenhaus",
  "Zaza'z",
  "Zeha Berlin Schuh Design GmbH & Co.KG",
  "Zenker Baumpflege",
  "Zusen Zomer"
];