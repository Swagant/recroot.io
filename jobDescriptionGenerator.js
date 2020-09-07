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

    //sections stored in array
    jobDescriptionTab.innerHTML = '<p>Job Description</p>';
    var sections = [locationText, schoolText, industryText, companyText, positionText, min_years_of_experienceText, qualityText, skillText];
    for(var x = 0; x < sections.length; x++) {
        if(sections[x]!='undefined' && sections[x]!=null) {
            jobDescriptionTab.innerHTML += '<p>' + sections[x] + '</p><br>';
        }
    }

}

