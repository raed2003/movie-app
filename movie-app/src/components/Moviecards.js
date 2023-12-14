import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';


function Moviecard2({movie}) {
    console.log(movie)
  return (
    <div style={{display:"flex" , gap:"100px"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=  {movie.poster} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <ReactStars
      count={10}
     value={movie.rating} 
     size={24}
     color2={'red'} />
      </Card.Body>
    </Card>
    <iframe height="500" width="500" src={movie.trailer}></iframe>
    </div>
  );
}

export default Moviecard2; 