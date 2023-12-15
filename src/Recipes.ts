import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";

interface meal {
    title: string;
    image: any;
    description: string;
  }


const meals: meal[] = [
    {
      title: "Sesame Noodles",
      image: img1,
      description:
        "Smooth peanut butter creates a swoon-worthy, creamy sauce. Pass the chili crisp at the table if you like a little extra spice. Sesame Noodles tossed in a fabulous Asian Sesame Peanut Dressing! Terrific served at room temperature or warm, this is a great side dish. Or turn it into a complete meal by adding shredded veggies like carrots, cabbage and bean sprouts, and how about some shredded chicken too?",
    },
    {
      title: "Gingery Spring Soup",
      image: img2,
      description:
        "Get double the plant-based protein with shelled edamame and silken tofu (the best kind for soaking up all that savory broth). Sliced ginger and jalapeño provide this plant-based soup with a pleasant, invigorating kick. Asparagus, mushrooms, edamame and silken tofu help bulk up the soup, but for more staying power, add brown rice ramen noodles to the pot during the last few minutes of cooking.",
    },
    {
      title: "Pepper Farro Salad",
      image: img3,
      description:
        "Grilling season doesn't have to be all burgers and dogs. Throw some peppers and scallions on the fire to add smoky flavor to this potluck-ready salad. Studded with juicy grape tomatoes and smoky, charred peppers and scallions, this punchy grain salad puts the incredible bounty of summer veggies front and center—and gives you another reason to fire up the grill. For an especially eye-catching dish, look for a variety of colors when selecting your peppers and tomatoes.",
    },
    {
      title: "Vegan Pumpkin Risotto with Crispy Sage",
      image: img4,
      description:
        "The starches released from cooking arborio rice provide plenty of creaminess — zero cream needed! No cheese, no problem! Vegetable broth, pumpkin puree, and nutritional yeast provide savory, earthy flavor, and crispy sage lends an aromatic touch that makes this creamy dish perfect for cozy autumn evenings. Plus, no standing and stirring required!",
    },
    {
      title: "Grilled Lemon-Lime Corn Salad",
      image: img5,
      description:
        "Employ the power of not one, but two citruses for a seriously flavor-loaded (and dairy-free) side. No cheese, no problem! Vegetable broth, pumpkin puree, and nutritional yeast provide savory, earthy flavor, and crispy sage lends an aromatic touch that makes this creamy dish perfect for cozy autumn evenings. Plus, no standing and stirring required!",
    },
    {
      title: "Green Tahini Dip",
      image: img6,
      description:
        "Full of bright, punchy herbs like basil and parsley, this makes a mean dip for veggies or sliced baguette.",
    },
    {
      title: "Sesame Noodles",
      image: img7,
      description:
        "Smooth peanut butter creates a swoon-worthy, creamy sauce. Pass the chili crisp at the table if you like a little extra spice. Sesame Noodles tossed in a fabulous Asian Sesame Peanut Dressing! Terrific served at room temperature or warm, this is a great side dish. Or turn it into a complete meal by adding shredded veggies like carrots, cabbage and bean sprouts, and how about some shredded chicken too?",
    },
    {
      title: "Sesame Noodles",
      image: img8,
      description:
        "Smooth peanut butter creates a swoon-worthy, creamy sauce. Pass the chili crisp at the table if you like a little extra spice. Sesame Noodles tossed in a fabulous Asian Sesame Peanut Dressing! Terrific served at room temperature or warm, this is a great side dish. Or turn it into a complete meal by adding shredded veggies like carrots, cabbage and bean sprouts, and how about some shredded chicken too?",
    },
  ];


  export default meals;