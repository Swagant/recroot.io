# Recr👀t.io
![Twitter Follow](https://img.shields.io/twitter/follow/MendeleevSteve?style=social) ![GitHub followers](https://img.shields.io/github/followers/StiopaPopa?style=social)  

Recroot is a simple and elegant tool that automates and simplifies the recruiting process using natural language processing

## Prerequisites

- Computer for best experience
- For speech recognition, either Chrome or Microsoft Edge webbrowsers

## Description

On the website, a user can **provide an input** via either their keyboard or speech-to-text conversion. The input details a particular profile of people they are looking for to potentially hire. The query is then analysed with a **Natural Language Processing (NLP) model** that extracts certain **attributes** in the sentence using [Wit.ai](https://wit.ai/), such as *location*, *industry* and *number of years of professional experience*. The NLP model then returns these attributes with their corresponding values which are then used to **generate a full job description** which is then returned to the user.

## Purpose

The concept of Recroot.io revolves around the idea that it takes a lot of time, for both people working in HR and especially newly founded startups, to generate job descriptions because of the time it takes as well as not knowing what to start with. With Recroot, in seconds you can have a great job description by only providing one sentence that describes the ideal employee and their requirements, and letting Recroot do the rest of the work.

## Providing Input

Users can either type a description of a profile, or use the built-in speech recognition system on Recroot.io. Users can click on and enable the microphone, and as long as they haven't turned it off, Recroot will keep appending what they say in the search box with extremely high accuracy. As soon as the user is done, they can click onto the microphone icon once again to disable speech recognition. If a user is unsure what to write, they can click on "Try a random phrase" or use the voice command "random phrase" to generate an arbitrary example query in the searchbox. In addition, Recroot has implemented 3 separate search-functionality buttons, in order from left-to-right:

1. Reset button - sets the value of the searchbox to blank
2. Search button - an alternative to pressing the enter key to submit the query
3. Voice button - initiates speech recognition

## Attributes and Descriptions

Every suitable description has up to 9 unique attributes that, depending on the context, the NLP model extracts and stores along with their corresponding values:

- Location
  - current working location
- School
  - name of educational institution
- Industry
  - specific industries specialising in
- Company
  - previous or current enterprises worked for
- Position
  - previous or current position in organization
- Has_Degree
  - checks if has secondary education degree
- Min_Years_Of_Experience
  - minimum years of professional experience collectively
- Quality
  - qualities the employee should exhibit
- Skill
  - skills or capabilities proficient in
  
### Sample Descriptions* 
**Quotation marks should not be used in actual queries on the site*

- "find somebody that operates from Silicon Valley, specialises in business development, systems and computer networks with at least 7 years of experience and a degree"

- "find somebody who lives in Dusseldorf, has/had a position as manager while working in customer service, who knows how to operate a restaurant and is patient and analutical"

- "find somebody with 20 years of experience in impact investing, studied at ecole polytechnique and currently operates in marseille"

*Note:* it doesn't matter in what order you include keywords, whether the letters are upper or lowercase, commas or not, and what specific language you use (ie. specialise vs. work in, somebody from vs residing in, at least vs. minimum etc.) as long as the context and meaning is clear. You also don't need to specifiy that the quantities are minimum as the NLP model is trained to consider the values as minimums. The only features that should be consistently included are 1. the "find somebody" beginning phrase, 2. clear meaning, and 3. you can only use the trained attributes mentioned above (more to come in the future). 
  
### Example Query Analysis

```python
  query = "find somebody that lives in Europe, studied at Stanford, industries are marketing and software engineering, worked at Google or Amazon, is a founder, knows sql and tensorflow and is mathematically-oriented, creative and hardworking, and has a minimum of 10 years of experience"
  
  attributes_identified = ['location', 'school', 'industry', 'company', 'position', 'skill', 'quality', 'min_years_of_experience']
  
  location = 'Europe'
  school = 'Stanford'
  industry = ['marketing', 'software engineering']
  company = ['Google', 'Amazon']
  min_connections = 50
  skill = ['sql', 'tensorflow']
  quality = ['mathematically-oriented', 'creative', 'hardworking']
  position = 'founder'
  min_years_of_experience = 10
```

These attributes and their respective values are returned and subsequently passed as paramaters to the job description generator.

## Training + Testing Data and Metrics

In order to save time, I developed a python script (dataGenerator.py) that would generate human-like descriptions, all of them including all 8 (original, now a few swapped) attributes to provide the most exposure. The way each sentence was built was by decomposing it by attributes, then generating random values from handmade lists of popular values and pairing this value with a randomized prefix (ei. who is living in vs. residing in) and suffix (*', '* or *' and '* or *', and '* or *' '*). The individual phrases would then be compiled together in a random order, and the suffix of the final phrase would be cut off. Then I would simply run the script and enter an amount of descriptions I want, and would provide them to Wit one-by-one, annotating unfamiliar terms when needed on the go. After a test of best of 10 computer-generated phrases, the accuracy rate was 100% on 8/10 of the sentences, making the overall success rate ~94%. Regarding the all attributes, the data generator was programmed with the old attributes in mind that would be used for webscraping; therefore, when I began training the NLP model on the 2 new attributes, quality and skill, I had to manually insert a few keywords from those attributes every now and then.


## Contact for Support

Contact me through any of the following:
- [Twitter](https://twitter.com/SteveMendeleev) 
- [Github](https://github.com/StiopaPopa)
- [Email](mailto:smendeleev7@gmail.com)

## License
[GPL-3.0](https://github.com/StiopaPopa/recroot.io/blob/master/LICENSE)



