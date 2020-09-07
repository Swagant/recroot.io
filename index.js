
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
    let randomPhrases = ['find somebody that specialises in backend development with at least 2 years of experience that lives in Benelux and has minimum 50 connections', 'find somebody that has 171+ connections, and specialized in Ecommerce who has worked as President, and that has at least 33 years of experience, who lives in Saudi Arabia, that has worked for Coca-Cola, that studied at indian institute of technology delhi', 'find somebody that works from madagascar, and that is working at Cisco, that is an executive assistant who has minimum 237 connections and who attended the University of Pennsylvania that specializes in Nonprofits and Life Sciences, Internet of Things', 'find somebody that studied at The University of Hong Kong who has a minimum of 44 connections and with minimum 46 years of experience, that has worked in Software Engineering and who worked at Starbucks, working as an Executive Assistant CMO, and residing in Argentina', 'find somebody that lives in Moldova, has 13 years of experience, has degree, at least 49 connections, and industries are personal finance and psychology', 'Find somebody who specializes in Risk Management has worked at JP Morgan and currently resides in Europe with over 15 years of experience', 'find somebody that has min 2 years experience, at least 170 connections, works in Palo Alto, has a university degree, and their industries are healthcare, web development, and accounting', 'find somebody who studied at Columbia University, has 30+ years of experience, operates from Germany', 'find somebody that worked for intel, pepsi working as Chief Technology Officer, and that has specialized in Medical Devices, who has more than 42 years of experience, has 37+ connections who is working in Singapore, and who has graduated from nus', 'find somebody that lives in Belgium, has 15 years experience, has a university degree, at least 65 connections, studied at MIT and industry is robotics and mechanical engineering', 'find somebody that works in Vienna, 20 years of experience, minimum 100 connections, works in high tech', 'find somebody working as a management consultant', 'find somebody that has a secondary education degree, currently resides in Europe, and has expertise in management consulting', 'find somebody who worked as Chief Technology Officer and Vice President, at least 203 connections that has studied in Oxford, who has worked in Cryptocurrency, that has degree who resides in Saint Pierre Miquelon, and who has been at Disney'];
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
  
 
 
