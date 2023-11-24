//Setup of map
var map = L.map('map').setView([37.780508, -122.183204
], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 15,
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); 

    //Put picture over mills area
    var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
    var altText = 'Image of Newark, N.J. in 1922. Source: The University of Texas at Austin, UT Libraries Map Collection.';
    var latLngBounds = L.latLngBounds([[37.784131, -122.188051], [37.775506, -122.175466]]);

    var imageOverlay = L.imageOverlay('static/images/campus.png', latLngBounds, {
    opacity: 1,
    errorOverlayUrl: errorOverlayUrl,
    alt: altText,
    interactive: true
}).addTo(map);

    var markers = [
    ["Mary Atkins Legacy Lounge", "Mary Atkins is the student leadership building named after the original founder of Mills.", "SGA meetings have been held in Mary Atkins since the inception of the college.", 37.781116, -122.180928, "MA"],
    ["El Campanil (Clock Tower)", "Designed by renowned architect Julia Morgans, this over 115-year-old clock tower oversees the college and informs the students of a new hour.", "Due to its innovative use of reinforced concrete, the clock tower was the only building in Mills to survive the San Francisco earthquake.", 37.778683, -122.182452, "EC"],
    ["The Oval", "A roundabout with a wonderful view of Mills Hall.", "It is said that the founder of Mills buried her small pooches under here. When dogs frolic around the Oval alone, it seems like they are playing with others, perhaps with the pups buried beneath.", 37.77923, -122.182311, "O"],
    ["Solidarity Lounge", "A safe place for students of all backgrounds to study and meet with other students.", "This is where MillsPedia was developed!", 37.78065, -122.18111, "SL"],
    ["F. W. Olin Library", "The focal point for academic research, a repository for information, and a gateway to other research collections. It has the Special Collections in the Heller Rare Book Room. The collections include printed books, archives, and manuscripts from the 15th century to the present including the Mills College archive.", "The library houses one of the oldest Bibles in the world and it had the original copies of Romeo and Juliet.", 37.781308, -122.182278, "FWOL"],
    ["Mary Morse", "This residence hall on the top of Prospect Hill.", "There are intriguing ghost stories associated here, specifically about a horse and carriage.", 37.779281, -122.184791, "MM"],
    ["Orchard Meadow Residence Hall", "A residence hall with large common rooms.", "It is rumored that the ghost of Susan Mills roams around there.", 37.782323, -122.182914, "OM"],
    ["Warren Olney Residence Hall", "This residence hall houses many students and has large common rooms.", "There is a room where suitors used to wait while their dates were getting ready.", 37.782689, -122.182151, "WO"],
    ["Littlefield Concert Hall", "The Jeannik Méquet Littlefield Conceert Hall was renovated in 2009 and named after a Mills alumna. It has 414 seats and acoustic upgrades.", "The hall features gold-accented frescoes by artist Raymond Boynton depicting mythological scenes. The focal point is Boynton's mural above the stage, showcasing the California Mother Lode on sliding panels that conceal a choir loft.", 37.781613, -122.184749, "L"],
    ["Lucie Stern Hall", "Designed to be a lecture hall split into four seminar rooms.", "Mills became the first women's college to teach computer science and digital humanities, which they received funding from all around the world. The classes were taught here.", 37.780011, -122.183192, "LS"],
    ["Lisser Hall", "This building is a performing-arts facility that has had major renovations.", "Lisser Hall originally faced a different direction before undergoing remodeling. Remnants of this can still be observed in the ceiling of the main theater.", 37.780681, -122.182838, "LH"],
    ["Rothwell Center", "This complex was designed to house the Student Union. It also contains The Center for Leadership, Equity, and Excellence.", "There used to be a pool under here before the road and Tea Shop was built.", 37.781104, -122.181624, "RC"],
    ["Art Museum", "The art museum has been in the wing of the Aron Art Center since the mid-2000s.", "There used to be a third entrance here. This museum also housed Frida Kahlo paintings.", 37.783104, -122.181861, "AM"],
    ["Rothwell Theater", "The complex used to contain a gymnasium and pool which were damaged by an earthquake. They replaced those structures with the Suzanne M. Adams Plaza, Tea Shop, Cafe Suzie, and the Mail and Copy Center.", "This used to be the college's bookstore and there is a locker room underneath.", 37.781095, -122.181282, "RT"],
    ["Lorry I. Lokey Graduate School of Business", "The Lorry I. Lokey Graduate School of Business has several modern classrooms, common areas, suites, and offices.", "If you look up to the second floor, there is a study room that looks like it's floating.", 37.781773, -122.182955, "GSB"],
    ["Moore Natural Science Building", "The Betty Irene Moore Natural Sciences Building has many classrooms, labs, and research facilities. It has a rainwater reuse system.", "Once inside, there is a room above filled with all sorts of plants.", 37.780206, -122.180744, "NSB"],
    ["Carnegie Hall", "Originally built as the college library but is now used for administrative purposes. It houses many support offices like the registrar and the writing and tutoring center.", "Delegates of the 1945 San Francisco conference, which efforts led to the creation of the United Nations, utilized Carnegie Hall as their official library.", 37.779045, -122.181581, "CH"],
    ["Sage Hall", "Sage Hall was the college's first freestanding library for 15 years until it was replaced by a new administrative building. Now it contains many administrative offices such as Husky Card Services.", "The sole surviving original feature of Sage Hall, built in the late 19th century, is a portion of the vaulted roof, now situated above the cashier's office. Sage Hall served as the College's inaugural freestanding library.", 37.779502, -122.181409, "SH"],
    ["Chemistry, Physics, Math (CPM)", "Named after the chemistry, physics, and math departments. Even though chemistry and physics have moved to NSB, it still has many classrooms and offices used by the Department of Public Safety and book art program.", "Mills was one of the only schools to teach book art and it even had a book art major. The classes were held here.", 37.77857, -122.182848, "CPM"],
    ["Cowell Building", "This building contains the Dean of Students and other student services such as Career Design.", "Originally constructed as a health center, the facility includes a still functional industrial kitchen that was designed to feed patients.", 37.780697, -122.183653, "CB"],
    ["The Chapel", "Built in 1967, the Chapel is a nondenominational space for all.", "Inside you will find the first organs in California. In satellite view, you can see the symbol of a woman on top of the chapel.", 37.782179, -122.185736, "C"],
    ["President's House", "This building was initially faculty housing until it was redesigned to serve as a home.", "It has been relocated twice in its lifespan.", 37.782859, -122.183363, "PH"],
    ["Haas Pavilion", "The pavilion opened in 1971 and contains a large auditorium, studios, and offices for the Recreation center.", "The biggest backup generator is here. Haas is also where the entire school would gather at during emergencies and natural disasters.", 37.78257, -122.18464, "HP"],
    ["Julia Morgan School for Girls", "The Julia Morgan School has a long term lease on this building since 2004.", "It once served as a refuge for Chinese immigrants and Korean refugees.", 37.783596, -122.187484, "JMS"],
    ["Education Complex/Children’s School", "A progressive independent school employing a constructivist model of education. Its approach involves hands-on experiential learning across Toddler through Fifth Grade classrooms.", "Its Spanish Revival style matches the rest of the campus and the kids today speak Spanish.", 37.781359, -122.181378, "CS"],
    ["Vera M. Long Building for the Social Sciences", "An academic building used for social sciences.", "This building used to be a health clinic.", 37.781639, -122.180711, "VL"],
    ["Mills Community Farm","The campus farm provides and teaches students how to grow their own food.","The community of Oakland is more than welcome to enroll and purchase the farm's foods.",37.780724,-122.186336,"MF"],
    ["Mills Hall", "The oldest building on campus and is named after Susan Mills. This building is currently used for administrative offices, classes, and residence for some faculty.", "The hall is home to a collection of tea kettles from all over the world that one of the former presidents used to collect.", 37.779612, -122.182107, "MH"],
];

    //Marker setup
    for(const i of markers){
        var marker = L.marker([i[3], i[4]]).addTo(map);
        marker.bindPopup("<img class ='image' src=static/images/" + i[5] + ".jpg> <h2>" + i[0] + "</h2>" + i[1]+ "<br><br><b>Fun fact: </b>" + i[2] + "<br><br><a href=" + i[5] + ".html>Read more here!</a>").openPopup();
        
    }

    // //Popup setup
    // var popup = L.popup();
    // function onMapClick(e) {
    // popup
    //     .setLatLng(e.latlng)
    //     .setContent(e.latlng.toString())
    //     .openOn(map);
    // }
    // map.on('click', onMapClick);