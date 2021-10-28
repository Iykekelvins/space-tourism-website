import { useState } from "react";
import { destinations } from "../../public/data";
import Image from "next/image";

const Destination = () => {
  const [value, setValue] = useState(0);
  const { name, image, description, distance, travel } = destinations[value];
  return (
    <div className="container destination--container">
      <h4>
        <span>01</span> Pick your destination
      </h4>
      <div className="destination--info">
        <Image
          src={image}
          height={445}
          width={445}
          alt={`picture of ${name}`}
        />
        <div className="destination--info--right">
          <ul className="flex-ac">
            {destinations.map((destination, index) => (
              <li
                onClick={() => setValue(index)}
                className={value === index ? "destination--active" : ""}
                key={index}
              >
                {destination.name}
              </li>
            ))}
          </ul>
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="destination--border"></div>
            <div className="destination--distance flex-ac">
              <div>
                <h6>Avg. distance</h6>
                <h5>{distance}</h5>
              </div>
              <div>
                <h6>Est. travel time</h6>
                <h5>{travel}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
