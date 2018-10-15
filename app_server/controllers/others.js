/* GET 'about us' page */
module.exports.about = function(req, res) {
  res.render("generic-text", {
    title: "Customer Care",
    content:
      "Oops sorry... For facing any issue with Daraz. You can submit your complaint to the nearest head office."
  });
};
module.exports.cart = function(req, res) {
  res.render("generic-text", {
    title: "Cart",
    content:
      "This page is under maintenance. It will be completed after linking database. Thankyou!"
  });
};
module.exports.Prod = function(req, res) {
  res.render("electronics", {
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
        category: "Cl"

      },
      {
        name: "Wall Clock",
        rating: 2,
        facilities: ["Analog and Digital","Rolex", "Golden"],
        distance: "25,000/- Rs",
        category: "E"
      }
    ]
  });
};