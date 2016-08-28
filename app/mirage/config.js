export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  this.get('/posts', function() {
    return { "posts": [{ 
      id: 1,
      title: 'Paris, mon amour. ♥',
      excerpt: 'Yadda',
      text: 'Yadda yadda yadda.',
      date: '2016-05-25T16:46:28Z',
      location: 'Paris, France' },
    { id: 2,
      title: 'Back home for Christmas.',
      text: 'Yeah yeah yeah.',
      excerpt: 'Yeah',
      date: '2016-12-18T16:46:28Z',
      image: 'http://lorempixel.com/400/200/sports',
      location: 'Leipzig, Germany' }]
    };
  });

 this.get('/posts/1', function() {
    return { "post": [{ 
      id: 1,
      title: 'Paris, mon amour. ♥',
      excerpt: 'Yadda',
      text: 'Yadda yadda yadda.',
      date: '2016-05-25T16:46:28Z',
      location: 'Paris, France' }]
    };
  });

 this.get('/posts/2', function() {
    return { "post": [{ 
      id: 2,
      title: 'Back home for Christmas.',
      excerpt: 'Yeah',
      text: 'Yeah yeah yeah.',
      date: '2016-08-18T16:46:28Z',
      image: 'http://lorempixel.com/400/200/sports',
      location: 'Leipzig, Germany' }]
    };
  });


  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
