type User = 
 {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite":string,
      "city": string,
      "zipcode":string,
      "geo": {
        "lat":string,
        "lng": string,
      }
    },
    "phone": string,
    "website":string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string,
    }
  }

  type Post = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string,
  }

  type Result= {
    extract: ReactNode
    pageid: string,
    title: string,
    extracted: string,
    thumbnail?:{
      source:string,
      width:number,
      height:number
    }
  }

  type SearchResult={
    query?:{
      pages?:Result[],
    }
  }

  type BlogPost = {
    id: string,
    title: string,
    date:  string,
  }