
window.onload = function() {
    
    //declare important tabs
    const tab = document.getElementById("errorAndQueryTab");
    const jobDescriptionTab = document.getElementById('jobDescriptionTab');
    // speech recognition system
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const searchFunctionButtons = document.getElementById('search-function-buttons');
    //only show mic button if speech recognition is supported
    if(SpeechRecognition) {
        var html = searchFunctionButtons.innerHTML;
        html += '<button class="search-function-button fa fa-microphone-slash" id="microphone-button"></button>';
        searchFunctionButtons.innerHTML = html;
        const microphoneButton = document.getElementById("microphone-button");  
         const recognition = new SpeechRecognition();
        recognition.continuous = true;
         // after mic is clicked
        microphoneButton.addEventListener('click', (e) => {
            e.preventDefault();
            // check icon of mic
            if(microphoneButton.classList.contains('fa-microphone-slash')) { // Start speech recognition
                recognition.start();
            }
            else { // Stop speech recognition
                recognition.stop();
            }
        });
         // listen for start of speech recognition
        recognition.addEventListener("start", startSpeechRecognition);
        function startSpeechRecognition() {
            // change mic icon
            microphoneButton.classList.remove("fa-microphone-slash");
            microphoneButton.classList.add("fa-microphone");
            searchbox.focus();
        }
         //listen for end of speech recognition
        recognition.addEventListener("end", endSpeechRecognition);
        function endSpeechRecognition() {
            //change mic icon
            microphoneButton.classList.remove("fa-microphone");
            microphoneButton.classList.add("fa-microphone-slash");
            searchbox.focus();
        }
         // listen for result of speech recognition
        recognition.addEventListener("result", resultOfSpeechRecognition);
        function resultOfSpeechRecognition(event) {
            const currentResultIndex = event.resultIndex;
            const transcript = event.results[currentResultIndex][0].transcript;
           
            if(transcript.toLowerCase().trim() == "random phrase") {
                searchbox.value = randomPhrases[Math.floor(Math.random() * (randomPhrases.length-1))];
                recognition.stop();
            }
            else {
                searchbox.value += transcript;
            }
        }
  
    }
    else {
        console.log("Your Browser doesn't support speech recognition");
    }
   
  
  
  
    //Retrieving Wit API response
    function search(query) {
        sendRequestToWit(query).then(response => {
            //updating tab
            tab.innerHTML = "<p id='tabText'>" + " 👉 " + response["text"] + "</p>";
            const tabText = document.getElementById("tabText");
            tabText.style.color = "rgb(66, 66, 66)";
            var attributesRecorded = response['entities'];
            
            //storing entities' values
            var location = 'undefined';
            var school = 'undefined';
            var industry = [];
            var company = [];
            var min_years_of_experience = 'undefined';
            var position = [];
            var has_degree = 'undefined';
            var quality = [];
            var skill = [];
    
            if(attributesRecorded['wit$location:location']) {
                location = attributesRecorded["wit$location:location"][0]['body'];
            }
            if(attributesRecorded["school:school"]) {
                school = attributesRecorded["school:school"][0]['body'];
            }
            if(attributesRecorded["industry:industry"]) {
                var industries = attributesRecorded["industry:industry"];
                for(var z=0; z<industries.length; z++) {
                    industry.push(industries[z]['body']);
                }
            }
            if(attributesRecorded["company:company"]) {
                var companies = attributesRecorded["company:company"];
                for(var z=0; z<companies.length; z++) {
                    company.push(companies[z]['body']);
                }
            }
            if(attributesRecorded["min_years_of_experience:min_years_of_experience"]) {
                min_years_of_experience = attributesRecorded["min_years_of_experience:min_years_of_experience"][0]['body'];
            }
            if(attributesRecorded["position:position"]) {
                var positions = attributesRecorded["position:position"];
                for(var z=0; z<positions.length; z++) {
                    position.push(positions[z]['body']);
                }
            }
            if(attributesRecorded["has_degree:has_degree"]) {
                has_degree = attributesRecorded["has_degree:has_degree"][0]['body'];
            }
            if(attributesRecorded["quality:quality"]) {
                var qualities = attributesRecorded["quality:quality"];
                for(var z=0; z<qualities.length; z++) {
                    quality.push(qualities[z]['body']);
                }
            }
            if(attributesRecorded["skill:skill"]) {
                var skills = attributesRecorded["skill:skill"];
                for(var z=0; z<skills.length; z++) {
                    skill.push(skills[z]['body']);
                }
            }
            var attributesList = [location, school, industry, company, min_years_of_experience, position, has_degree, quality, skill];         
            
            //highlighting keywords in tab
            var html = tab.innerHTML;
            for(var i = 0; i<attributesList.length; i++) {
                var attribute = attributesList[i];
                    
                    //choosing color
                if(attribute==location) {
                    color = 'lime';
                }
                else if(attribute==school) {
                    color = 'aqua';
                }
                else if(attribute==industry) {
                    color = 'fuchsia';
                }
                else if(attribute==company) {
                    color = 'orange';
                }
                else if(attribute==min_years_of_experience) {
                    color = 'rgb(255, 0, 123)';
                }
                else if(attribute==position) {
                    color = 'red';
                }
                else if(attribute==quality) {
                    color = 'rgb(147,89,42)';
                }
                else if(attribute==skill) {
                    color = 'rgb(142, 10, 250)';
                }
                else {
                    color = 'yellow';
                }
                    
                    //actually highlighting keywords    
                if(html.includes(attribute) && (((attribute!=industry && attribute!=company) && (attribute!=position && attribute!=quality)) && attribute!=skill)) {
                    var attributeIndex = html.indexOf(attribute);
                    var attributeLength = attribute.length;
                    var substring = html.slice(attributeIndex, attributeIndex + attributeLength);
                    var replacingHTML = '<span style="color: rgb(66, 66, 66); background-color: ' + color + '">' + substring + '</span>';
                    html = html.replace(attribute, replacingHTML);
                }
                else if(((attribute==industry || attribute==company) || (attribute==position || attribute==quality)) || attribute==skill) {
                    for(var x = 0; x<attribute.length; x++) {
                        var subAttribute = attribute[x];
                        if(html.includes(subAttribute)) {
                            var attributeIndex = html.indexOf(subAttribute);
                            var attributeLength = subAttribute.length;
                            var substring = html.slice(attributeIndex, attributeIndex + attributeLength);
                            var replacingHTML = '<span style="color: rgb(66, 66, 66); background-color: ' + color + '">' + substring + '</span>';
                            html = html.replace(subAttribute, replacingHTML);
                        }
                    }
                }
            }
            tab.innerHTML = html;

            //generating formal job description
            identifyAttributes(location, school, industry, company, min_years_of_experience, position, has_degree, quality, skill);

        });
    }
    
    //Connecting to Wit API
    function sendRequestToWit(query) {
        
        if(query.length<20) {
            tab.innerHTML = "<p id='tabText'>🚫 description too short (min 20 characters)</p>";
            const tabText = document.getElementById("tabText");
            tabText.style.color = "red";
        }
        else if(query.length>280) {
            tab.innerHTML = "<p id='tabText'>🚫 description too long (max 280 characters)</p>";
            const tabText = document.getElementById("tabText");
            tabText.style.color = "red";
        }
        else {
            const url = "https://api.wit.ai/message?q=";
            const params = {
                headers: {
                    Authorization: "Bearer SCDE4JD3D4HR6NBUWGJJU5PG26WTGPKJ"
                }
            };
            var fullRequest = url + query;
            return fetch(fullRequest, params).then(response => response.json());        
        }
    }
  
  
    // on search via enter key
    const searchbox = document.getElementById('searchbox');
    searchbox.addEventListener('keyup', (e) => {
        if(e.keyCode == 13) {
            e.preventDefault();
            search(searchbox.value);
            searchbox.value = '';
            // call search function here, same for when 'search' button clicked
        }
    });
  
    // random phrase generator
    let randomPhrases = ['find somebody with 43 years of experience in supermarkets, who worked at Asda and Tesco, currently living in Blackpool', 'find somebody that is located at Malaysia, got degree, who worked as a Chief Technology Officer, was at samsung and mcdonalds and oreal, who has studied in tsinghua university, and who is specialising in travel & tourism, and medical devices', 'find somebody that has received a degree from Princeton University, who worked at ge, pepsi, and starbucks and that works from Azerbaijan and was CMO, and that has minimum 37 years of experience working in Software Engineering', 'find somebody specialising in biological computing in San Jose for the last 5 years', 'find somebody that has graduated at Cornell, and who is located in Guernsey with a minimum of 27 years of experience, and who is working in Aeronautics and Sports, and Websites, that has worked at deloitte, and that is working as an Executive of Operations and Production', 'find somebody that is operating in Bhutan, and worked as Chief Operating Officer for Amazon and Intel and who attended NTU, and that specialises in VR and Digital Marketing Retail and with a minimum of 46 years of experience', 'find somebody who graduated from Caltech was an Executive Assistant, who works for American Express and in Peru more than 30 years of experience that has worked in Digital Marketing, knows SQL and how to read balance sheets and is diligent and focused', 'find somebody that is very knowledgeable and charismatic who knows how to lead and develop advertisements', 'find somebody that specialises in systems engineering and knows how to write assembly code and has 15  years of experience and is dedicated and capable', 'knows how to develop an efficient algorithm, implement finance in algorithms, and who is persistent and motivated', 'find somebody who is at IBM that has more than 6 years of experience, and worked as CMO, who does Web Development and entertainment industry, who has went to University of Pennsylvania and who operates from bosnia herzegovina', 'find somebody working in Croatia, and that has more than 24 years of experience, and who has graduated from iitgp and is good at critical thinking and mathematical calculations that does Aerospace, and who is working for hsbc, that was CFO'];
    const randomPhraseButton = document.getElementById("random-phrase-button");
    randomPhraseButton.addEventListener('click', () => {
        searchbox.value = randomPhrases[Math.floor(Math.random() * (randomPhrases.length-1))];
    });
     // reset search bar button
    const resetButton = document.getElementById("reset-search-button");
    resetButton.addEventListener('click', (e) => {
        e.preventDefault();
        searchbox.value = '';
    });
     // on search via search button
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        search(searchbox.value);
        searchbox.value = '';
        // call search function here, same for when search is performed via enter key
    });
 };
  
 
 
