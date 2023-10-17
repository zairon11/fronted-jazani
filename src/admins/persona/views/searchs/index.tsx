import { useEffect, useState } from "react"
import { type PeriocityResponse } from "../../domain";
import { findAll } from "../../infrastructure/PersonaRepository"
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const index = (): JSX.Element => {

  const [personas, setPersonas] = useState<PeriocityResponse[]>()

  useEffect(() => {
    findAll().then(({ data }) => {
      setPersonas(data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Row className="pt-2">
        <Col xs={12}>
          <Card>
            <Card.Header>Listado de Periocities</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    personas?.map(persona => (
                      <tr key={persona.id}>
                        <td>{persona.id}</td>
                        <td>{persona.name}</td>
                        <td>{persona.description}</td>
                        <td>
                          <Badge pill bg={persona.state ? 'success' : 'danger'}>
                            {persona.state ? 'Activo' : 'Eliminado'}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default index