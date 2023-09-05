import { Accordion } from "react-bootstrap";
import { cityDetails } from "../../constans";

const CityAccordians = () => {
    
  return (
    <>
      <Accordion defaultActiveKey={0}>
        {cityDetails.map((value, index) => {
          return (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                {index + 1}) {value.cityName}
              </Accordion.Header>
              <Accordion.Body>{value.description}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
};

export default CityAccordians;
