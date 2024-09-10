import React, { useState } from 'react';
import { DataTable } from 'react-native-paper';

const MyComponent = () => {
  const [items] = useState([
    { key: 1, name: 'Cupcake', calories: 356, fat: 16 },
    { key: 2, name: 'Eclair', calories: 262, fat: 16 },
    { key: 3, name: 'Frozen yogurt', calories: 159, fat: 6 },
    { key: 4, name: 'Gingerbread', calories: 305, fat: 3.7 },
  ]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title
          style={{
            backgroundColor: '#81DAE3',
            margin: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
          colSpan={2}
        >
          i
        </DataTable.Title>
        <DataTable.Title
          style={{ backgroundColor: '#81DAE3', margin: 1 }}
          colSpan={2}
        >
          Number of working days bla bla bla....
        </DataTable.Title>
        <DataTable.Title
          numeric
          style={{
            backgroundColor: '#D7C3F1',
            display: 'flex',
            justifyContent: 'center',
            margin: 1,
            width: 20,
          }}
        >
          245
        </DataTable.Title>
      </DataTable.Header>

      {items.map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
          <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default MyComponent;
