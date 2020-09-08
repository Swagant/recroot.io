
//generate main desciption function
function generateDescription(location, school, industry, company, min_years_of_experience, position, has_degree, quality, skill) {
    var text = "We are currently looking for potential candidates for a job at our organization. ";
    if(location!='undefined') {
        text += "They must be working or located in " + location + ". ";
    }    
    if(school!='undefined') {
        text += "We are particularly searching for people that have either graduated or are currently attending " + school + ". ";
    }
    if(industry.length > 0) {
        text += "Preferred industries for a candidate include having worked in ";
        for(var i = 0; i<industry.length; i++) {
            if(i!=industry.length-1) {
                text += industry[i] + ", ";
            }
            else if(industry.length > 1) {
                text += "and " + industry[i] + ". ";
            }
            else {
                text += industry[i] + ". ";
            }
        }        
    }
    if(company.length > 0) {
        text += "We are especially interested in working with former or present employees of ";
        for(var i = 0; i<company.length; i++) {
            if(i!=company.length-1) {
                text += company[i] + ", ";
            }
            else if(company.length > 1) {
                text += "and " + company[i] + ". ";
            }
            else {
                text += company[i] + ". ";
            }
        }        
    }
    if(min_years_of_experience!='undefined') {
        text += "The suggested minimum number of years of prior professional experience is around " + min_years_of_experience + ". ";
    }
    if(position.length > 0) {
        text += "In addition, we are specifically searching for folks that have been ";
        for(var i = 0; i<position.length; i++) {
            if(i!=position.length-1) {
                text += position[i] + ", ";
            }
            else if(position.length > 1) {
                text += "or " + position[i] + ". ";
            }
            else {
                text += position[i] + ". ";
            }
        }        
    }
    if(has_degree!="undefined") {
        text += "It is crucial that you have at least an undergraduate degree. ";
    }
    if(quality.length > 0) {
        text += "Ideal candidates should demonstrate that they are ";
        for(var i = 0; i<quality.length; i++) {
            if(i!=quality.length-1) {
                if(quality[i]=="experience") {
                    text += quality[i] + 'd, ';
                }
                else {
                    text += quality[i] + ", ";
                }
            }
            else if(quality.length > 1) {
                if(quality[i]=='experience') {
                    text += 'and' + quality[i] + 'd. ';
                }
                else {
                    text += "and " + quality[i] + ". ";
                }
            }
            else {
                if(quality[i]=="experience") {
                    text += quality[i] + "d. ";
                }
                else {
                    text += quality[i] + ". ";
                }
            }
        }        
    }
    if(skill.length>0) {
        text += "Recommended skills to have under your belt include but are definitely not limited to ";
        for(var i = 0; i<skill.length; i++) {
            if(i!=skill.length-1) {
                text += skill[i] + ", ";
            }
            else if(skill.length > 1) {
                text += "and " + skill[i] + ". ";
            }
            else {
                text += skill[i] + ". ";
            }
        }     
    }
    return text;

}

//declaring functions that generate individual sections
function generateLocationText(location) {
    
    var locationText = '<u>📍 Location:</u> ' + location.charAt(0).toUpperCase() + location.slice(1);
    return locationText;
}

function generateSchoolText(school) {
    var schoolText = '<u>🏫 Education:</u> ' + school.charAt(0).toUpperCase() + school.slice(1);
    return schoolText;
}

function generateIndustryText(industry) {
    var industryText = '<u>👨‍💻 Industries:</u> ';
    for(var i = 0; i<industry.length; i++) {
        industryText += industry[i].charAt(0).toUpperCase() + industry[i].slice(1);
        if(i!=industry.length-1) {
            industryText += ', ';
        }

    }
    return industryText;
}

function generateCompanyText(company) {
    var companyText = '<u>💼 Previous Companies:</u> ';
    for(var i = 0; i<company.length; i++) {
        companyText += company[i].charAt(0).toUpperCase() + company[i].slice(1);
        if(i!=company.length-1) {
            companyText += ', ';
        }

    }
    return companyText;
}

function generateMin_Years_Of_ExperienceText(min_years_of_experience) {
    var min_years_of_experienceText = '<u>📆 Preferred Years of Experience:</u> ' + min_years_of_experience;
    return min_years_of_experienceText;
}

function generatePositionText(position) {
    var positionText = '<u>👔 Prior Positions:</u> ';
    for(var i = 0; i<position.length; i++) {
        positionText += position[i].charAt(0).toUpperCase() + position[i].slice(1);
        if(i!=position.length-1) {
            positionText += ', ';
        }

    }
    return positionText;
}

function generateQualityText(quality) {
    var header = '<u>👨‍💼 Desired Qualities</u>\n';
    var list = '<ul>';
    for(var i = 0; i<quality.length; i++) {
        list += '<li>⚫ ' + quality[i] + '</li>';
    }
    list += '</ul>'
    return header + list;
}

function generateSkillText(skill) {
    var header = '<u>🔨 Handy Skills</u>\n';
    var list = '<ul>';
    for(var i = 0; i<skill.length; i++) {
        list += '<li>⚫ ' + skill[i] + '</li>';
    }
    list += '</ul>'
    return header + list;
}

//identifying attributes
function identifyAttributes(location, school, industry, company, min_years_of_experience, position, has_degree, quality, skill) {
    //declaring variables
    var locationText;
    var schoolText; //degree will be mentioned in description if needed
    var industryText;
    var companyText;
    var min_years_of_experienceText;
    var positionText;
    var qualityText;
    var skillText;
    
    //setting values
    if(location!='undefined') {
        locationText = generateLocationText(location);
    }
    
    if(school!='undefined') {
        schoolText = generateSchoolText(school);
    }

    if(industry.length > 0) {
        industryText = generateIndustryText(industry);
    }
    
    if(company.length > 0) {
        companyText = generateCompanyText(company);
    }
    
    if(min_years_of_experience!='undefined') {
        min_years_of_experienceText = generateMin_Years_Of_ExperienceText(min_years_of_experience);
    }
    
    if(position.length > 0) {
        positionText = generatePositionText(position);
    }
    
    if(quality.length > 0) {
        qualityText = generateQualityText(quality);
    }

    if(skill.length > 0) {
        skillText = generateSkillText(skill);
    }

    //calling description generator function
    var description = "<p>📝" + generateDescription(location, school, industry, company, min_years_of_experience, position, has_degree, quality, skill) + "</p>";

    //sections stored in array
    jobDescriptionTab.innerHTML = '<p id="jobDescriptionText">Job Brief</p>';
    var sections = [locationText, schoolText, industryText, companyText, positionText, min_years_of_experienceText, qualityText, skillText];
    for(var x = 0; x < sections.length; x++) {
        if(sections[x]!='undefined' && sections[x]!=null) {
            jobDescriptionTab.innerHTML += '<p>' + sections[x] + '</p><br>';
        }
    }
    jobDescriptionTab.innerHTML += "<hr>" + description;

}

