const homes = [
  {
    id:"1",
    image: "https://example.com/homes/1.jpg",
    name: "Luxury Villa",
    price: 1500,
    location: "Los Angeles"
  },
  {
    id:"2",
    image: "https://example.com/homes/2.jpg",
    name: "Beach House",
    price: 1000,
    location: "Miami"
  },
  {
    id:"3",
    image: "https://example.com/homes/3.jpg",
    name: "Mountain Retreat",
    price: 7800,
    location: "Aspen"
  },
  {
    id:"4",
    thumblian:"https://example.com/homes/4.jpg",
    image:[
      "https://example.com/homes/4.jpg",
      "https://example.com/homes/4.jpg",
      "https://example.com/homes/4.jpg",
    ],
    name: "Mountain Retreat",
    price: 1200,
    location: "Aspen"
  },
  {
    id:"5",
    image: "https://example.com/homes/4.jpg",
    name: "Mountain Retreat",
    price: 1800,
    location: "Aspen"
  },
  {
    id:"6",
    image: "https://example.com/homes/4.jpg",
    name: "Mountain Retreat",
    price: 950,
    location: "Aspen"
  }
  
];

export default function handel(req, res){
 res.status(200).json(homes);
}

// app.listen(3000, () => {
//   console.log("Home rental API is running on port 3000");
// });
