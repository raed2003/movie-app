import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Exemple() {
    const [title,setTitle]=useState("")
  const [show, setShow] = useState(false);
  const [description,setDescription]=useState("")
  const [image,setImage]=useState("")
  const [rating,setRating]=useState(0)
  const [trailer,setTrailer]=useState("")

 const newmovie={title:title,description:description,poster:image,rating:rating,trailer:trailer}

console.log(newmovie)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Addmovie = () =>{
    localStorage.setItem("movie",JSON.stringify(newmovie))
    handleClose()
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie title</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your movie name "
                onChange={(event) => setTitle(event.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie description</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your movie description"
                onChange={(event) => setDescription(event.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie image</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your movie image"
                onChange={(event) => setImage(event.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="put your movie rating"
                onChange={(event) => setRating(event.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie trailer</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your movie trailer"
                onChange={(event) => setTrailer(event.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Addmovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Exemple;