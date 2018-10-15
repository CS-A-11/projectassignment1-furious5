module.exports.homelist = function(req, res) {
  res.render("locations-list", {
    title: "Daraz - Products of quality.",
    pageHeader: {
      title: "Daraz",
      strapline: "Find the best products at reasonable cost here"
    },
    sidebars:[
      {Name:"Clothing\n", shughal: "Checking"},
      {Name:"Cosmetics\n", shughal: "Checking"},
      {Name:"Electronics\n", shughal: "Checking"}
	  
	  ]
	  ,
    locations: [
      {
        name: "Power Bank",
        rating: 3,
        facilities: ["10,000 MAh", "Anchor", "Black"],
        distance: "1900/- Rs",
        category: "E"
      },
      {
        name: "Android Cable",
        rating: 4,
        facilities: ["Supports fast charging", "Samsung", "White"],
        distance: "200/- Rs",
        category: "E"

      },
      {
        name: "Wall Clock",
        rating: 2,
        facilities: ["Analog and Digital","Rolex", "Golden"],
        distance: "25,000/- Rs",
        category: "C"
      }
    ]
  });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
  res.render("location-info", {
    title: "Power Bank",
    pageHeader: {
      title: "Power Bank"
    },
    sidebar: {
      context:
        "is on Daraz because it is cheap and excellent quality product. ",
      callToAction:
        "If you've used and you liked it - or if you haven't - please leave a review to help other people just like you."
    },
    location: {
      name: "Power Bank",
      rating: 3,
      facilities: ["10,000 MAh", "Anchor", "Black"],
      distance: "1900/- Rs",
      category: "E",
      openingTimes: [
        {
          days: "Charges devices",
          opening: "7 devices",
          closing: "10 devices",
          closed: false
        },
        {
          days: "Ampere",
          opening: "1 Amp",
          closing: "3 Amp",
          closed: false
        }
        
      ],
      reviews: [
        {
          author: "Saleena Gomez",
          rating: 4,
          timestamp: "16 July 2018",
          reviewText:
            "It was a great power bank, though the battery charge time isn't as written."
        },
        {
          author: "Chaudhry Shujaat",
          rating: 1,
          timestamp: "20 June 2018",
          reviewText: "Worst experience from Daraz."
        }
      ]
    }
  });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
  res.render("location-review-form", {
    title: "Review Power Bank on Daraz",
    pageHeader: {
      title: "Review Power Bank"
    }
  });
};
