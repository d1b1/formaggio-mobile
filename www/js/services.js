angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Anna Bells', 
      description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.',
      image: 'http://www.finecheese.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/montogomery-cut_b_.jpg',
      city: 'Boston',
      state: 'MA',
      country: 'United States',
      maker: 'Shy Brothers Farm'
    },
    { id: 1, 
      title: 'Sage Farm Madonna', 
      description: 'Lovable. Loyal almost to a fault. Smarter than they let on.',
      image: 'http://www.thecheeseshed.com/content/img/lib/product/1616.jpg',
      city: 'Sweet Water',
      state: 'GA',
      country: 'United States',
      maker: 'Sweet Water Farm'
    },
    { id: 2, 
      title: 'Sage Farm Blue', 
      description: 'Everyone likes turtles.',
      image: 'https://nodeloader.s3.amazonaws.com/scratch/0569e27e11feeeb4f45dd932914b7665',
      city: 'Upland',
      state: 'VT',
      country: 'United States',
      maker: 'Shy Brothers Farm'
    },
    { id: 3, 
      title: 'Sharpsberg Cheddar', 
      description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.',
      image: 'https://nodeloader.s3.amazonaws.com/scratch/997026080329cfe5d6b0e9bf19a523d9',
      city: 'Middleand Center',
      state: 'Essex',
      country: 'England',
      maker: 'Middlelands Cheese Co.'
    }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
