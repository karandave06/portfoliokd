import '../assets/Style/timelineItem.scss'
const data = [
  {
    name: "MERN STACK",
    id:1
  },

  {
    name: "HTML",
    id:2
  },
  {
    name: "GITHUB",
    id:3
  },
  {
    name: "TAILWIND",
    id:4
  },
  {
    name: "SASS",
    id:5
  },

  {
    name: "C++",
    id:6
  },
  {
    name: "CSS",
    id:7
  },
  {
    name: "JAVA SCRIPT",
    id:7
  },


  

  
];

const TimeLineitem = ({ heading, text,index   }) => {
  return (
    <div className='timelineitem'>
      {
        data.map((i,index) =>(
            <div
            key={index}
          className={`timelineItem ${
           index % 2 === 0 ? "leftTimeline" : "rightTimeline"}`}
        >
        <div>
        <h2>{i.name}</h2>
          <p>{i.date}</p>
        </div>
        </div>
        ))
        
      }
    </div>
  );
};

export default TimeLineitem;
