---
slug: "intro-to-graphql"
date: "2022-05-17"
title: "Introduction to GraphQL"
tags: ["GraphQL", "Databases", "Learning"]
---

Given that I decided to create my website using Gatsby, learning how to use GraphQL was an absolute must. I have to say, I was honestly suprised at how intuitive the query language was. This write-up covers a bit about the background behind GraphQL and also how to query data from it from a client's perspective. I decided not to include too much detail about servers and implementation since I myself am still in the process of learning.

# Bringing it back to REST
I have to admit, I don't think I truly appreciated the capabilities of GraphQL until it was put into perspective to me just what problem it solves. In most of my past personal projects, REST was always the go-to system to send data between client and server applications. I have a specific piece of information to provide to the client? Just create an endpoint. Got some more information? Another endpoint...and so on. Because my own creations are often test environments, experimentations or small-scale projects, I never gave it much thought for just how complex a fully scaled REST API could become.

With REST, you can choose to have endpoints that expose large amount of data back to the client. While this approach allows the client to manage and pick the data they want to use, it can send redundant information that may just get discarded.

In contract, you can choose to create endpoints that return specific data that your client needs, this is a more efficient use of bandwidth. However, by specifically tailoring your API to specific requirements, there would need to be more endpoints and therefore more complexity to the API.

So let's recap: with REST applications:
* adding endpoints that expose a lot of data provides clients more flexibility to choose what data they use, but can send information they may not need
* adding endpoints that expose specific data just adds complexity to your API. This can make development and maintenance of the API itself more difficult as applications scale.

Now we can introduce GraphQL. What if instead of multiple endpoints, we have just one? What if instead of dumping massive amounts of data onto clients, we allow them to specifically pick and choose what data they want. Once I wrapped my head around the value proposition of GraphQL and what advantages it offered, I was hooked.

# Querying Data
Let's get into a small demonstration of the fun stuff.

### 1. Setting the story

Let's introduce you to this fun little scenario. This is Luna. She's a librarian who wants to provide an API so that open source developers can create applications about her library catalogue and books.

Charles is a developer who wants to use this new API to create a reading list app. He wants to allow people to track exactly what books they want to read from Luna's library.

### 2. REST

Lets say Charles is trying to create his main app view. He wants to provide his users with a list of books they are interested in reading. This view would show the specific books in their reading list, but also book details like author and genre.

To query for a specific book, he may send a GET request to this endpoint:

```
www.lunaslibrary.ca/api/books?id=123243
```

The endpoint may then respond with a data payload that look like this:

```
{
	"id": "123243"
	"name": "IT",
	"author": "Stephen King", 
	"written": 1976, 
	"awards": [
		"British Fantasy Award", "World Fantasy Award"
	]
	"publisher": "Viking", 
	"genre": [
		"horror", 
		"thriller", 
		"dark fantasy", 
	], 
	"pages": 1138
	"ISBN": "0-670-81302-8"
	"type": "print"
}
```

That's a lot of information returned with one REST request. But Charles stated before that for each book, he just needed the author and genre. A lot of this data wouldn't even be used. Now imagine for the average user, a reading list may contain over a dozen books. This adds up to a lot of unnecessary data transfer. Luna can help address this by modifying her endpoint to provide just the data Charles needs, but what about the other developers who need data about the publisher or ISBN? There would need to more other endpoints to provide that data for each book.

As the API grows and more options are added, it gets difficult for Luna to manage all the endpoints and documentation. What if she needs to provide endpoints on movies, audiobooks, or newspapers as well:

```
www.lunaslibrary.com/api/books/id=?
www.lunaslibrary.com/api/movies/id=?
www.lunaslibary.com/api/audiobooks/id=?
```

Is there an easier to way provide all the developers access to the data they need?

### 3. GraphQL

Let's say in an alternate timeline, Luna implements a GraphQL server instead. Using one endpoint, she exposes all her data at:

```
www.lunaslibrary.com/api/
```

In this case, Charles just needs to send one request to that endpoint. In GraphQL fashion, he crafts a query to target the specific information that he needs:

```
query {
	books(id="123243") {
		name
		author
		genre
	}
}
```

In this case, the response he would get is:

```
data {
	books {
		name:"IT",
		author: "Stephen King",
		genre: ["horror", "thriller", "dark fantasy"]
	}
}
```

Charles and any other developer can now target the exact data they require from Luna's server. Luna just needs to document what the underlying schema and structure of her data is. A more complex query that includes different types of media may look like this:

```
query {
	books(id="123243") {
		name
		author
		genre
	}
	audiobooks(id="123432") {
		name
		author
		genre
	}
	movies(id="123543") {
		name
		director
		genre
	}
}
```

# Conclusion

Hopefully with the short scenario presented, the value proposition of using something like GraphQL is more apparent. There are various benefits to using it as a query language and server-side runtime. My next exploration into GraphQL will most likely be looking into setting up a server. It will be interesting to see how one has to structure and plan data to enable a successful GraphQL API.

As always, hope this post was helpful in explaining GraphQL. If you notice any errors with my write up, please let me know so that I can learn! Send me an email at — <a href="mailto:louieweng@outlook.com">louieweng@outlook.com.</a>