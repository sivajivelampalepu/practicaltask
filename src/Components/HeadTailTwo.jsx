import React, { useState } from 'react';
import { Card, Dropdown, Button,  } from 'react-bootstrap';
import Swal from 'sweetalert2';

const HeadTailTwo = () => {
  const [selectedValue, setSelectedValue] = useState('select');
  const [columns, setColumns] = useState([]);

  const handleSubmit = () => {
    if (selectedValue === 'select') {
        Swal.fire({text:"Please select value from dropdown",icon:"info"})
      return;
    }

    setColumns((prevColumns) => {
      const lastSymbol = prevColumns.length > 0 ? prevColumns[prevColumns.length - 1][0] : null;

      if (prevColumns.length === 0) {
        return [[selectedValue]];
      } else if (prevColumns.length === 1 && selectedValue === 'T') {
        return [...prevColumns, [selectedValue]];
      } else if (selectedValue !== lastSymbol) {
        return [...prevColumns, [selectedValue]];
      } else {
        const newColumns = [...prevColumns];
        const targetColIndex = selectedValue === 'H' ? 0 : 1;
        if (newColumns[targetColIndex]) {
          newColumns[targetColIndex] = [...newColumns[targetColIndex], selectedValue];
        } else {
          newColumns[targetColIndex] = [selectedValue];
        }
        return newColumns;
      }
    });

    setSelectedValue('select');
  };



  return (
    <Card className="head-tail-card shadow-lg mx-auto" style={{ maxWidth: '800px' }}>
      <Card.Body className="p-5">
        <Card.Title as="h1" className="fs-2 fw-bold text-center mb-4">
          Head & Tail Two Add First H & T
        </Card.Title>
        <div className="d-flex justify-content-center mb-4">
          <Dropdown onSelect={(value) => setSelectedValue(value)} className="me-2 dropdown-wide">
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic" className="wide-toggle">
              {selectedValue === 'select' ? 'Select' : selectedValue === 'H' ? 'H' : 'T'}
            </Dropdown.Toggle>
            <Dropdown.Menu className="wide-menu">
              <Dropdown.Item eventKey="select">Select</Dropdown.Item>
              <Dropdown.Item eventKey="H">H</Dropdown.Item>
              <Dropdown.Item eventKey="T">T</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="warning" onClick={handleSubmit} className="submit-button wide-button">
            Submit
          </Button>
        </div>
        <div className="columns">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="column">
              {column.map((char, rowIndex) => (
                <div
                  key={`${colIndex}-${rowIndex}`}
                  className={`cell ${char === 'H' ? 'bg-blue' : 'bg-teal'}`}
                >
                  {char}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default HeadTailTwo;