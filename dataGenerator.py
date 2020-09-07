import random
# attributes => location, school, industry, company, min_connections, min_years_of_experience, position, has_degree

def generateSuffix():
    #generate random suffix
    suffixes = [" ", ", ", " and ", ", and "]
    suffix = random.choice(suffixes)
    return suffix


def generateLocation():
    
    #generate random prefix
    base_prefixes = ["living in", "located at", "located in", "residing in", "operating in", "operating from", "working in", "working from", "in"]
    who_is_prefixes = ["who is living in", "who is located at", "who is located in", "who is residing in", "who is operating in", "who is operating from", "who is working in", "who is working from", "who is in"]
    that_is_prefixes = ["that is living in", "that is located at", "that is located in", "that is residing in", "that is operating in", "that is operating from", "that is working in", "that is working from", "that is in"]
    who_prefixes = ["who lives in", "who resides in", "who operates in", "who operates from", "who works in", "who works from"]
    that_prefixes = ["that lives in", "that resides in", "that operates in", "that operates from", "that works in", "that works from"]
    prefixes = base_prefixes + who_is_prefixes + that_is_prefixes + who_prefixes + that_prefixes
    prefix = random.choice(prefixes)
    
    #generate random country
    countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad Tobago","Tunisia","Turkey","Turkmenistan","Turks Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]
    country = random.choice(countries)

    #get suffix
    suffix = generateSuffix()

    #forming phrase
    phrase = prefix + " " + country + suffix
    #randomizing if all lowercase or stays the same
    n = random.randint(0, 2)
    if n == 1:
        phrase = phrase.lower()
    return phrase


def generateSchool():

    #generate random prefix
    base_prefixes = ["studied at", "studied in", "attended", "went to", "got a degree from", "learned at", "received a degree from", "graduated from", "graduated at"]
    who_has_prefixes = ["who has studied at", "who has studied in", "who has attended", "who has gone to", "who has went to" "who has got a degree from", "who has learned at", "who has received a degree from", "who has graduated from", "who has graduated at"]
    that_has_prefixes = ["that has studied at", "that has studied in", "that has attended", "that has gone to", "that has went to" "that has got a degree from", "that has learned at", "that has received a degree from", "that has graduated from", "that has graduated at"]
    who_prefixes = ["who studied at", "who studied in", "who attended", "who went to", "who got a degree from", "who learned at", "who received a degree from", "who graduated from", "who graduated at"]
    that_prefixes = ["that studied at", "that studied in", "that attended", "that went to", "that got a degree from", "that learned at", "that received a degree from", "that graduated from", "that graduated at"]
    prefixes = base_prefixes + who_has_prefixes + that_has_prefixes + who_prefixes + that_prefixes
    prefix = random.choice(prefixes)

    #generate random school (university database is top 30 of QS World University Rankings 2020 as well as top 10 of UniRank Indian Universities Rankings 2020 and their abbreviations, since they are named and structured differently)
    schools = ["Massachusetts Institute of Technology", "MIT", "Stanford", "Stanford University", "Harvard", "Harvard university", "Oxford", "University of Oxford", "California Institute of Technology", "Caltech", "ETH Zurich", "Cambridge", "University of Cambridge", "UCL", "Imperial College London", "University of Chicago", "Nanyang Technological University Singapore", "NTU", "National University of Singapore", "NUS", "Princeton", "Princeton University", "Cornell", "Cornell University", "University of Pennsylvania", "UPenn", "Tsinghua University", "Yale", "Yale University", "Columbia", "Columbia University", "EPFL", "The University of Edinburgh", "University of Michingan-Ann Arbor", "Peking University", "The University of Tokio", "Johns Hopkins", "Johns Hopkins University", "Duke", "Duke University", "University of Hong Kong", "The University of Hong Kong", "University of Manchester", "The University of Manchester", "University of California (Berkley)", "UCB", "Australian National University", "The Australian National University", "University of Toronto", "University of Delhi", "Indian Institute of Technology Bombay", "IITB", "Indian Institute of Technology Kanpur", "IITK", "Indian Institute of Technology Madras", "IIT", "Indian Institute of Technology Delhi", "IITD", "Indian Institute of Technology Kharagpur", "IITGP", "Narsee Monjee Institute of Management and Higher Studies", "Savitribai Phule Pune University", "VIT University", "Amity University"]
    school = random.choice(schools)
    
    #get suffix
    suffix = generateSuffix()

    #forming phrase
    phrase = prefix + " " + school + suffix
    #randomizing if all lowercase or stays the same
    n = random.randint(0, 2)
    if n == 1:
        phrase = phrase.lower()
    return phrase


def generateIndustry():

    #generate random prefix
    base_prefixes = ["working in", "operating in", "specialising in", "specializing in", "doing"]
    who_has_prefixes = ["who has worked in", "who has operated in", "who has specialized in"]
    that_has_prefixes = ["that has worked in", "that has operated in", "that has specialized in"]
    who_is_prefixes = ["who is working in", "who is operating in", "who is specialising in", "who is specializing in", "who is doing"]
    that_is_prefixes = ["that is working in", "that is operating in", "that is specialising in", "that is specializing in", "that is doing"]
    who_prefixes = ["who works in", "who operates in", "who specialises in", "who specializes in", "who does"]
    that_prefixes = ["that works in", "that operates in", "that specialises in", "that specializes in", "that does"]
    base_ed_prefixes = ["worked in", "operated in", "specialised in", "specialized in", "did"]
    who_ed_prefixes = ["who worked in", "who operated in", "who specialised in", "who specialized in", "who did"]
    that_ed_prefixes = ["that worked in", "that operated in", "that specialised in", "that specialized in", "that did"]
    prefixes = base_prefixes + who_has_prefixes + that_has_prefixes + who_is_prefixes + that_is_prefixes + who_prefixes + that_prefixes + base_ed_prefixes + who_ed_prefixes + that_ed_prefixes
    prefix = random.choice(prefixes)

    #generate random industry (top 72 most popular categories on AngelList including common abbreviations, subsectors and alternatives (angel.co/markets))
    industries = ['Information Technology', "IT", "Consumers", "Enterprises", "Finance", "Healthcare", "Media", "Education", "Health and Wellness", "Web Development", "Technology", "Mobile Appplication", "Platforms", "Design", "Retail", "Real Estate", "Life Sciences", "Automotive", "Fashion", "Digital Marketing", "Travel", "Startups", "Ecommerce", "Sports", "Fin Tech", "Fintech", "Venture Capital", "Clean Technology", "Travel and Tourism", "Internet of Things", "IoT", "Entertainment", "Entertainment Industry", "Demographics", "Energy", "Blockchains", "Education Technology", "Consulting", "Cryptocurrency", "Events", "Restaurants", "Manufacturing", "Hospitality", "Human Resources", "HR", "Construction", "Agriculture", "Organized Crime", "Website", "Beauty", "Logistics", "User Experience Design", "UX", "UX Design", "Social Network", "Social Media", "Art", "Software Engineering", "Medical Devices", "Legal", "Apps", "Applications", "Nonprofits", "Marketing", "Virtual Reality", "VR", "Mobile Health", "IT Management", "Online Shopping", "Aerospace", "Aerospace Engineering", "Aeronautics"]
    industry = random.choice(industries)
    industry2 = random.choice(industries)
    industry3 = random.choice(industries)
    x = random.randint(1, 4)
    if x == 2:
        industry += generateSuffix() + industry2
    elif x == 3:
        industry += generateSuffix() + industry2 + generateSuffix() + industry3

    #get suffix
    suffix = generateSuffix()

    #forming phrase
    phrase = prefix + " " + industry + suffix
    #randomizing if all lowercase or stays the same
    n = random.randint(0, 2)
    if n == 1:
        phrase = phrase.lower()
    return phrase


def generateCompany():

    #generate random prefix
    base_prefixes = ["working at", "working for", "at"]
    who_has_prefixes = ["who has worked at", "who has worked for", "who has been at"]
    that_has_prefixes = ["that has worked at", "that has worked for", "that has been at"]
    who_is_prefixes = ["who is working at", "who is working for", "who is at"]
    that_is_prefixes = ["that is working at", "that is working for", "that is at"]
    who_prefixes = ["who works at", "who works for"]
    that_prefixes = ["that works at", "that works for"]
    base_ed_prefixes = ["worked at", "worked for", "was at"]
    who_ed_prefixes = ["who worked at", "who worked for", "who was at"]
    that_ed_prefixes = ["that worked at", "that worked for", "that was at"]
    prefixes = base_prefixes + who_has_prefixes + that_has_prefixes + who_is_prefixes + that_is_prefixes + who_prefixes + that_prefixes + base_ed_prefixes + who_ed_prefixes + that_ed_prefixes
    prefix = random.choice(prefixes)

    #generate random company (top 50 of Forbes 2020 The World's Most Valued Brands + common abbreviations)
    companies = ["Apple", "Google", "Microsoft", "Amazon", "Facebook", "Coca-Cola", "Coca Cola", "Disney", "Samsung", "LV", "Louis Vuitton", "McDonald's", "McDonalds", "Toyota", "Intel", "Nike", "AT&T", "Cisco", "Oracle", "Verizon", "Visa", "Walmart", "GE", "Budweiser", "SAP", "Mercedes-Benz", "Mercedes", "IBM", "Marlboro", "Netflix", "BMW", "American Express", "AMEX", "Honda", "L'Oreal", "Gucci", "Hermes", "Nescafe", "Home Depot", "Pepsi", "Starbucks", "Mastercard", "Frito-Lay", "IKEA", "Zara", "Gilette", "HSBC", "Audi", "J.P. Morgan", "Deloitte", "Sony", "UPS", "Bank of America", "Chase"]
    company = random.choice(companies)
    company2 = random.choice(companies)
    company3 = random.choice(companies)
    x = random.randint(1, 4)
    if x == 2:
        company += generateSuffix() + company2
    elif x == 3:
        company += generateSuffix() + company2 + generateSuffix() + company3

    #get suffix
    suffix = generateSuffix()

    #forming phrase
    phrase = prefix + " " + company + suffix
    #randomizing if all lowercase or stays the same
    n = random.randint(0, 2)
    if n == 1:
        phrase = phrase.lower()
    return phrase


def generateMin_Connections():
    #generate random prefix
    base_prefixes = ["more than", "at least", "minimum", "minimum of", "a minimum of", "min", "has"]
    who_has_prefixes = ["who has more than", "who has at least", "who has minimum", "who has minimum of", "who has a minimum of", "who has min", "who has"]
    that_has_prefixes = ["that has more than", "that has at least", "that has minimum", "that has minimum of", "that has a minimum of", "that has min", "that has"]
    with_prefixes = ["with more than", "with at least", "with minimum", "with minimum of", "with a minimum of", "with min", "with"]
    prefixes = base_prefixes + who_has_prefixes + that_has_prefixes + with_prefixes
    prefix = random.choice(prefixes)

    #generate random number of connections
    connections = random.randint(10, 251)
    if (prefix == "has" or prefix == "who has") or (prefix == "that has" or prefix == "with"):
        connections = str(connections) + "+ connections"
    else:
        connections = str(connections) + " connections"

    #get suffix
    suffix = generateSuffix()

    #forming phrase
    phrase = prefix + " " + connections + suffix
    #randomizing if all lowercase or stays the same
    n = random.randint(0, 2)
    if n == 1:
        phrase = phrase.lower()
    return phrase


def generateMin_Years_Of_Experience():
    #generate random prefix
    base_prefixes = ["more than", "at least", "minimum", "minimum of", "a minimum of", "min", "has"]
    who_has_prefixes = ["who has more than", "who has at least", "who has minimum", "who has minimum of", "who has a minimum of", "who has min", "who has"]
    that_has_prefixes = ["that has more than", "that has at least", "that has minimum", "that has minimum of", "that has a minimum of", "that has min", "that has"]
    with_prefixes = ["with more than", "with at least", "with minimum", "with minimum of", "with a minimum of", "with min", "with"]
    prefixes = base_prefixes + who_has_prefixes + that_has_prefixes + with_prefixes
    prefix = random.choice(prefixes)

    #generate random number of connections
    years_of_experience = random.randint(1, 51)
    if (prefix == "has" or prefix == "who has") or (prefix == "that has" or prefix == "with"):
        years_of_experience = str(years_of_experience) + "+ years of experience"
    else:
        years_of_experience = str(years_of_experience) + " years of experience"

    #get suffix
    suffix = generateSuffix()

    #forming phrase
    phrase = prefix + " " + years_of_experience + suffix
    #randomizing if all lowercase or stays the same
    n = random.randint(0, 2)
    if n == 1:
        phrase = phrase.lower()
    return phrase


def generatePosition():
    #generate random prefix
    base_prefixes = ["working as", "is", "was"]
    who_has_prefixes = ["who has worked as", "who has been"] 
    that_has_prefixes = ["that has worked as", "that has been"] 
    who_is_prefixes = ["who is working as", "who is"]
    that_is_prefixes = ["that is working as", "that is"]
    who_prefixes = ["who works as", "who was"]
    that_prefixes = ["that works as", "that was"]
    base_ed_prefixes = ["worked as"]
    who_ed_prefixes = ["who worked as"]
    that_ed_prefixes = ["that worked as"]
    prefixes = base_prefixes + who_has_prefixes + that_has_prefixes + who_is_prefixes + that_is_prefixes + who_prefixes + that_prefixes + base_ed_prefixes + who_ed_prefixes + that_ed_prefixes
    prefix = random.choice(prefixes)
    x = random.randint(0, 2)
    if x == 1:
        prefix += " a" #add n if first letter of word is vowel

    #generate random position
    positions = ["Executive", "Manager", "Operations and Production", "Chief Executive Officer", "CEO", "Chief Operating Officer", "COO", "Chief Financial Officer", "CFO", "Chief Marketing Officer", "CMO", "Chief Technology Officer", "CTO", "President", "Vice President", "Executive Assistant", "Director"]
    position = random.choice(positions)
    position2 = random.choice(positions)
    position3 = random.choice(positions)
    if ((position[0].lower() == "e" or position[0].lower() == "a") or (position[0].lower() == "i" or position[0].lower() == "o") or position[0].lower() == "u") and prefix[-1] == "a":
        prefix += "n"
    y = random.randint(1, 4)
    if y == 2:
        position += generateSuffix() + position2
    elif x == 3:
        position += generateSuffix() + position2 + generateSuffix() + position3

    
    #get suffix
    suffix = generateSuffix()

    #forming phrase
    phrase = prefix + " " + position + suffix
    #randomizing if all lowercase or stays the same
    n = random.randint(0, 2)
    if n == 1:
        phrase = phrase.lower()
    return phrase


def generateHas_Degree():
    #generate random prefix
    base_prefixes = ["has degree", "has a degree", "got a degree", "got degree", "with degree", "with a degree"]
    has_prefixes = ["has got a degree", "has got degree"]   
    who_has_prefixes = ["who has got a degree", "who has got degree"]   
    that_has_prefixes = ["that has got a degree", "that has got degree"]   
    who_is_prefixes = ["who is with degree", "who is with a degree"]
    that_is_prefixes = ["that is with degree", "that is with a degree"]
    who_prefixes = ["who has degree", "who has a degree", "who got a degree", "who got degree"]
    that_prefixes = ["that has degree", "that has a degree", "that got a degree", "that got degree"]
    prefixes = base_prefixes + has_prefixes + who_has_prefixes + that_has_prefixes + who_is_prefixes + that_is_prefixes + who_prefixes + that_prefixes
    prefix = random.choice(prefixes)

    #no need for random degree

    #get suffix
    suffix = generateSuffix()

    #forming phrase
    phrase = prefix + suffix
    #randomizing if all lowercase or stays the same
    n = random.randint(0, 2)
    if n == 1:
        phrase = phrase.lower()
    return phrase


def checkEnding(string):
    #check ', and '
    if string[-6:] == ", and ":
        string = string[:-6]
    #chec ' and '
    elif string[-5:] == " and ":
        string = string[:-5]
    #check ', '
    elif string[-2:] == ", ":
        string = string[:-2]
    #check ' '
    else:
        string = string[:-1]
    return string


#compiling together phrases in random order
number_of_sentences = int(input("Number of sentences desired: "))
for i in range(number_of_sentences):
    #getting randomized data
    location = generateLocation()
    school = generateSchool()
    industry = generateIndustry()
    company = generateCompany()
    min_connections = generateMin_Connections()
    min_years_of_experience = generateMin_Years_Of_Experience()
    position = generatePosition()
    chance_degree = random.randint(0,2)
    has_degree = ''
    if chance_degree == 1:
        has_degree = generateHas_Degree()
    
    #storing attributes in list
    all_random_attributes = [location, school, industry, company, min_connections, min_years_of_experience, position, has_degree]   
    #shuffling list
    random.shuffle(all_random_attributes)
    #creating final sentence
    sentence = ''
    for attribute in all_random_attributes:
        sentence += attribute
    sentence = checkEnding(sentence)
    print("find somebody " + sentence + "\n")
    
    

    
