import "../assets/Style/Work.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
 

const projects = [
  {
    date: "12/04/2023",
    title: "GYM",
    description:
      "I Created a simple Gym website using react, sass and i also use a AOS for animation",
    url: "https://gymkd.netlify.app/",
    imgSrc:"https://github.com/karandave06/images/blob/main/gymimg.png?raw=true",
    id: 1,
  },

  {
    date: "25/04/2023",
    title: "SNAKE GAME",
    description:
      "Classic Snake Game Play and remember old day's.",
    url: "https://snakegamekd.netlify.app/",
    imgSrc:  "https://www.friv5online.com/files/images/1e/1e020d80dd3ea57aa7aa12e4569596e6.png",
    id: 2,
  },

  {
    date: "01/05/2023",
    title: "Port Foliyo",
    description:
      "This is my first portfolio that i created using react",
    url: "https://kd-portfoliyo.vercel.app/",
    imgSrc:" https://github.com/karandave06/images/blob/main/Screenshot%20(58).png?raw=true",
    id: 3,
  },

  {
    date: "10/05/2023",
    title: "Video Hub",
    description:
      "This is my first project on Chakra UI",
    url: "https://video-huub.netlify.app/",
    imgSrc:"https://github.com/karandave06/images/blob/main/videohub.png?raw=true",
    id: 4,
  },
  {
    date: "25/05/2023",
    title: "Tailwind Web",
    description:
      "Power of React-Tailwind",
    url: "https://karandave06.netlify.app/",
    imgSrc:"https://github.com/karandave06/images/blob/main/tailwind.png?raw=true",
    id: 5,
  },

  {
    date: "01/06/2023",
    title: "Gpt 3",
    description:
      "Ai is future of Humans",
    url: "https://gpt3kd.netlify.app/   ",
    imgSrc:"https://github.com/karandave06/images/blob/main/Screenshot%20(59).png?raw=true",
    id: 6,
  },


  // 
];

const Work = () => {
  return (
    <div id="work">
      <h2> WORK </h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {projects.map((i) => (
              <div key={i.id} className="workItem">
              <img src={i.imgSrc} alt="image is hear" />
              <aside>
              <h3>{i.title}</h3>
                <p>{i.description}</p>
                <a href={i.url} target={"blank"}>Visit Now  </a>
              </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
