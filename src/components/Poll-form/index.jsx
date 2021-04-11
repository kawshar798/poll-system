import React, { Component } from "react";
import shortid from 'shortid';
import MyForm from "./form";
const defaultOptions = [
    {
        id:shortid.generate(),
        value:'',
        vote:0
    },
    {
        id:shortid.generate(),
        value:'',
        vote:0
    }
]



class  PollForm extends Component {
    state = {

        title:'',
        description:'',
        options:defaultOptions,
        errors: {},
    }

    //get data from input field
    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value}
            )
    }

    //get Data from options Input field

    handleOptionChange = (event,index) =>{

        const{options} = this.state;
        options[index] = event.target.value;
        this.setState({options})

    }

    createOption = () =>{
        const{options} = this.state;
    
        if(options.length < 5){
            options.push({
                id:shortid.generate(),
                value:'',
                vote:0
            });
            this.setState({options})
        }else{
            alert('You can create max 5 options')
        }
    }

    deleteOption = index =>{
        const{options} = this.state;
        if(options.length > 2){
            options.splice(index,1)
            this.setState({options})
        }else{
            alert('You must have at least tow options')
        }
    }



    handleSubmit = event =>{
        event.preventDefault();

        const {isValid,errors} = this.validate()
        if(isValid){
                const {title,description,options} = this.state
                this.props.submit({
                    title,description,options
                })

                event.target.reset()

                this.setState({
                    title:'',
                    description:'',
                    options:defaultOptions,
                    errors: {},
                })
        }else{
            this.setState({errors})
        }
    }

    // Validation  form

    validate = () => {
        const errors = {}
        const {title,description,options} = this.state

        if(!title){
            errors.title = 'Please Provide a Title'
        }else if(title.length < 20){
                errors.title = 'Title Too Short'
        }else if(title.length >100){
            errors.title = 'Title Too Long'
        }

        if(!description){
            errors.description = 'Prease Provide a Description'
        }else if(description.length > 500){
            errors.description = 'Description is too long'
        }

        const optionErros = []

        options.forEach((opt,index) => {
           
            if(!opt.value){
                optionErros[index] = 'Option is Empty'

            }else if(opt.value.length > 100){
                optionErros[index] = 'Option Text is too Long'
            }
        })

        if(optionErros.length>0){
            errors.options = optionErros
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0,
          };
    }



    


    render(){
        const {title,description,options,errors} = this.state
        return(
            <div>
                <MyForm 
                    title={title}
                    description={description}
                    options={options}
                    errors={errors}
                    handleChange={this.handleChange}
                    handleOptionChange={this.handleOptionChange}
                    createOption={this.createOption}
                    deleteOption={this.deleteOption}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default PollForm;