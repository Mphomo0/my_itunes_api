import { Card, Col, Button } from "react-bootstrap"; // Import Button from react-bootstrap

const Result = ({ result, isFavorite, toggleFavorite }) => {
    return (
        <div id="resultcontainer">
            <Col>
                <Card className="mb-5 ml-2 mr-2">
                    <Card.Img
                        variant="top"
                        src={result.artworkUrl100.replace("100x100", "250x250")}
                    />
                    <Card.Body>
                        <Card.Title>{result.trackName}</Card.Title>
                        <Card.Text>{result.artistName}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={toggleFavorite}>
                            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Result;
