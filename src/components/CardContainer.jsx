import { data } from "../helpers/data";
import { Container, Row, Col } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <Container>
      <Row>
        {data.map((player, i) => {
          return (
            <Col key={i}>
              <PlayerCard {...player} />
            </Col>
          );
        })}
      </Row>

      <PlayerCard />
    </Container>
  );
};

export default CardContainer;
