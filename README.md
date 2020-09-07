# Recr👀t.io
![Twitter Follow](https://img.shields.io/twitter/follow/MendeleevSteve?style=social) ![GitHub followers](https://img.shields.io/github/followers/StiopaPopa?style=social) ![GitHub Release Date](https://img.shields.io/github/release-date/StiopaPopa/recroot.io?style=flat-square) 

Recroot is a simple and elegant tool that automates and simplifies the recruiting process using natural language processing

## Prerequisites

- Computer for best experience
- For speech recognition, either Chrome or Microsoft Edge webbrowsers
- Must already be logged into an AngelList account in advance, preferably a new/unused one (make an account [here](https://angel.co/join))

## Description

On the website, a user can **provide an input** via either their keyboard or speech-to-text conversion. The input details a particular profile of people they are looking for to gain **funding, expertise or help with their startup**. The query is then analysed with a **Natural Language Processing (NLP) model** that extracts certain **attributes** in the sentence using [Wit.ai](https://wit.ai/), such as *location*, *industry* and *number of years of professional experience*. The NLP model then returns these attributes with their corresponding values which are then used to **webscrape [AngelList](https://angel.co/)** and identify individuals who match the criteria. Finally, all user profiles that meet the parameters are returned back to the user on Recroot.io, each account with a profile picture, name, and link to the account.

## Purpose

The concept of Recroot.io revolves around the idea that it takes a lot of time, for both people working in HR and especially newly founded startups, to find potential employees. An example is the lengthy search process on sites like LinkedIn, where you have to apply several separate filters then search for the locations and keywords manually, which ultimately consumes a lot of precious time that could be spent further developing a product. Plus, the information people present online can be lengthy, yet computers enable you to extract only the important bits in a matter of seconds. Therefore, the rationale behind Recroot is to limit the time it takes to find such individuals, but also let people make more in-depth searches than what traditional filters and searchbars allow. Overall this helps make better well-informed decisions for who to hire quicker.

## Providing Input

Users can either type a description of a profile, or use the built-in speech recognition system on Recroot.io. Users can click on and enable the microphone, and as long as they haven't turned it off, Recroot will keep appending what they say in the search box with extremely high accuracy. As soon as the user is done, they can click onto the microphone icon once again to disable speech recognition. If a user is unsure what to write, they can click on "Try a random phrase" or use the voice command "random phrase" to generate an arbitrary example query in the searchbox. In addition, Recroot has implemented 3 separate search-functionality buttons, in order from left-to-right:

1. Reset button - sets the value of the searchbox to blank
2. Search button - an alternative to pressing the enter key to submit the query
3. Voice button - initiates speech recognition

## Attributes and Descriptions

Every suitable description has up to 8 unique attributes that, depending on the context, the NLP model extracts and stores along with their corresponding values:

### Built-In (input types for Angel.co's search filters)

- Location
  - current working location
- School
  - name of educational institution
- Industry
  - specific industries specialising in
- Company
  - previous or current enterprises worked for

### External (webscraper needs to calculate or identify alone)

- Min_Connections
  - minimum number of connections on AngelList
- Position
  - previous or current position in organization
- Has_Degree
  - checks if has secondary education degree
- Min_Years_Of_Experience
  - minimum years of professional experience collectively
  
### Sample Descriptions* 
**Quotation marks should not be used in actual queries on the site*

- "find somebody that operates from Silicon Valley, specialises in business development, systems and computer networks with at least 7 years of experience and a degree"

- "find somebody who has 50+ connections, lives in Dusseldorf, has/had a position as manager while working in customer service"

- "find somebody with 20 years of experience in impact investing, studied at ecole polytechnique and currently operates in marseille"

*Note:* it doesn't matter in what order you include keywords, whether the letters are upper or lowercase, commas or not, and what specific language you use (ie. specialise vs. work in, somebody from vs residing in, at least vs. minimum etc.) as long as the context and meaning is clear. You also don't need to specifiy that the quantities are minimum as the NLP model is trained to consider the values as minimums. The only features that should be consistently included are 1. the "find somebody" beginning phrase, 2. clear meaning, and 3. you can only use the trained attributes mentioned above (more to come in the future). 
  
### Example Query Analysis

```python
  query = "find somebody that lives in Europe, studied at Stanford, industries are marketing and software engineering, worked at Google or Amazon, has at least 50 connections, is a founder, and has a minimum of 10 years of experience"
  
  attributes_identified = ['location', 'school', 'industry', 'company', 'min_connections', 'position', 'min_years_of_experience']
  
  location = 'Europe'
  school = 'Stanford'
  industry = ['marketing', 'software engineering']
  company = ['Google', 'Amazon']
  min_connections = 50
  position = 'founder'
  min_years_of_experience = 10
```

These attributes and their respective values are returned and subsequently passed as paramaters to the webscraper.

## Training + Testing Data and Metrics

In order to save time, I developed a python script (dataGenerator.py) that would generate human-like descriptions, all of them including all 8 attributes to provide the most exposure. The way each sentence was built was by decomposing it by attributes, then generating random values from handmade lists of popular values and pairing this value with a randomized prefix (ei. who is living in vs. residing in) and suffix (*', '* or *' and '* or *', and '* or *' '*). The individual phrases would then be compiled together in a random order, and the suffix of the final phrase would be cut off. Then I would simply run the script and enter an amount of descriptions I want, and would provide them to Wit one-by-one, annotating unfamiliar terms when needed on the go.
-need to write the statistics part here

## Why AngelList

The primary reasons Recroot.io scrapes AngelList instead of the more popular LinkedIn database is threefold:

1. LinkedIn only allows you to view the profiles of users that are either first or second degree friends with you, whereas on AngelList all profiles are open and public

2. AngelList's individual sections of the profile are much more concise and strict which reduces the variety of different content people can include. This is relevant as it makes it easier for the webscraper to retrieve vital information in less time with a higher accuracy rate.

3. AngelList is intended for (tech) startups and angel investors, meaning that everybody on the site has a common interest of aiding or collaborating with startups. A more niche group of people also implies that majority of people on the site are willing to help, however on LinkedIn it is frequently the case that people aren't even looking for work at the moment. In addition, what many online job websites don't incorporate is a large population of angel investors yet AngelList does, meaning anybody using Recroot.io can take advantage of not only identifying individuals that are willing to help grow their startup with expertise and advice, but also those that will potentially supply them with financial resources too.

## AngelList Webscraper

## Contact for Support

Contact me through any of the following:
- [Twitter](https://twitter.com/SteveMendeleev) 
- [Github](https://github.com/StiopaPopa)
- [Email](mailto:smendeleev7@gmail.com)

## License
[MIT](https://github.com/StiopaPopa/recroot.io/blob/master/LICENSE)



