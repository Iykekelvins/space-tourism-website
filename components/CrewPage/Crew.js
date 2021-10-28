import { useState } from "react";
import { crew } from "../../public/data";
import Image from "next/image";

const Crew = () => {
  const [value, setValue] = useState(0);
  const { name, image, role, bio } = crew[value];
  return (
    <div className="container crew--container">
      <h4>
        <span>02</span> Meet your crew
      </h4>
      <div className="crew--info flex-ac">
        <div className="crew--info--left">
          <h4>{role}</h4>
          <h2>{name}</h2>
          <p>{bio}</p>
          <ul className="crew--tabs flex-ac">
            {crew.map((member, index) => (
              <li
                className={index === value ? "crew--active" : ""}
                onClick={() => setValue(index)}
                key={index}
              ></li>
            ))}
          </ul>
        </div>
        <div className="crew--info--right">
          <Image
            src={image}
            height={500}
            width={500}
            alt={`image of ${name}`}
          />
          <div className="crew--border"></div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
