import React from "react";
import {
    Button,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label
} from "reactstrap";

const MyForm = ({
  title,
  description,
  options,
  errors,
  buttonValue,
  handleChange,
  handleSubmit,
  handleOptionChange,
  createOption,
  deleteOption,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
          invalid={errors.title ? true : false}
        />
        {errors.title && <FormFeedback>{errors.title}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          name="description"
          id="description"
          placeholder="description"
          value={description}
          onChange={handleChange}
          invalid={errors.description ? true : false}
        />
        {errors.description && (
          <FormFeedback>{errors.description}</FormFeedback>
        )}
      </FormGroup>

      <FormGroup>
        <Label for="description">
          Enter Options
          <span className="btn btn-primary" onClick={createOption}>
            Add Options
          </span>
        </Label>

        {options.map((opt, index) => (
          <div key={opt.id} className="d-flex my-2">
            <input
              value={opt.value }
              onChange={(e) => handleOptionChange(e, index)}
              invalid={errors.options && errors.options[index] ? true : false}
            />
            {console.log(errors.options[index])}
            <Button
              color="danger"
              disabled={options.length <= 2}
              className="ml-2"
              onClick={() => deleteOption(index)}
            >
              Delete
            </Button>
          </div>
        ))}
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
};

export default MyForm;
