import React from "react";
import { Button, Form, FormLabel } from "react-bootstrap";

const ReviewForm=({handleSubmit,revText,labelText,defaultValue})=>{
    return(
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <FormLabel>{labelText}</FormLabel>
            <Form.Control ref={revText} as="textArea" row={3} defaultValue={defaultValue}/>
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
    )
}

export default ReviewForm