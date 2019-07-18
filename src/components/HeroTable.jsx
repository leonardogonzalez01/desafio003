import React, { useState } from 'react';
import characters from '../assets/js/heroes';
import Hero from './Hero';
import { Row, Col, Form, Button } from 'react-bootstrap';

function HeroTable() {

    const dataDefault = {
        name: '',
        age: '',
        weapon: '',
        race: ''
    };

    const [heroForm, setText] = useState(dataDefault);

    const [arrayCharacters, setArrayCharacters] = useState(characters);

    const handlerOnChange = event => {
        setText({
            ...heroForm,
            [event.target.name]: event.target.value
        })
    };

    const handlerOnClick = event => {
        event.preventDefault();
        setArrayCharacters(arrayCharacters.concat(heroForm));
        setText(dataDefault);
    };

    const handlderClickKill = indice => {

        const currentItem = arrayCharacters[indice];
        currentItem.useKill = true;
        const arrayNuevo = arrayCharacters.filter((item, idx) => idx !== indice)
            .concat(currentItem);
        setArrayCharacters(arrayNuevo);
    };

    const handlerClickRing = name => {
        const filterArray = arrayCharacters.map(item => {
            return { ...item, useRing: true, useKill: false }
        });
        const newArray = filterArray.filter(item => {
            return item.name !== name
        });
        setArrayCharacters(newArray);
    };

    return (
        <div>
            <Row>
                <Col>
                    <table className={'characters-table'} style={{ lineThrough: '' }}>
                        <thead>
                            <tr className={'character-row'}>
                                <th>Name</th>
                                <th>Race</th>
                                <th>Age</th>
                                <th>Weapon</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arrayCharacters.map((objeto, indice) => {
                                    return <Hero onClickKill={handlderClickKill} onClickRing={handlerClickRing} key={indice} objeto={objeto} indice={indice} />;
                                })
                            }
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <br></br>
                    <br></br>
                    <h2>Formulario de Inscripcion para Heroes</h2>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Nombre</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text"
                                    onChange={handlerOnChange}
                                    name={'name'}
                                    value={heroForm.name}
                                    placeholder="Ingresar Nombre Heroe" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Raza</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text"
                                    onChange={handlerOnChange}
                                    name={'race'}
                                    value={heroForm.race}
                                    placeholder="Ingresar Raza Heroe" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Edad</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text"
                                    onChange={handlerOnChange}
                                    name={'age'}
                                    value={heroForm.afe}
                                    placeholder="Ingresar Edad Heroe" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Arma</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text"
                                    onChange={handlerOnChange}
                                    name={'weapon'}
                                    value={heroForm.weapon}
                                    placeholder="Ingresar Arma Heroe" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button className='btn btn-primary' onClick={handlerOnClick}>Agregar Heroe</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>

    );

}

export default HeroTable