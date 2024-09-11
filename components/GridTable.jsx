import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { TextInput } from 'react-native-paper';

const TableComponent = () => {
  const [rows, setRows] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      sl: (index + 1).toString(),
      category_of_staff: '',
      no_of_days_worked: '',
      total_number_of_persons_worked: '',
      total_wages: '',
    }))
  );

  const handleInputChange = (text, index, field) => {
    const newRows = [...rows];
    newRows[index][field] = text;
    setRows(newRows);
  };

  const renderItem = ({ item, index }) => (
    <Row style={styles.row}>
      <Col style={styles.cell}>
        <TextInput
          mode='outlined'
          value={item.sl}
          editable={false}
          style={styles.textInput}
          contentStyle={styles.textCenter}
        />
      </Col>
      <Col style={styles.cell}>
        <TextInput
          mode='outlined'
          value={item.category_of_staff}
          onChangeText={(text) =>
            handleInputChange(text, index, 'category_of_staff')
          }
          style={styles.textInput}
          contentStyle={styles.textCenter}
        />
      </Col>
      <Col style={styles.cell}>
        <TextInput
          mode='outlined'
          value={item.no_of_days_worked}
          onChangeText={(text) =>
            handleInputChange(text, index, 'no_of_days_worked')
          }
          keyboardType='numeric'
          style={styles.textInput}
          contentStyle={styles.textCenter}
        />
      </Col>
      <Col style={styles.cell}>
        <TextInput
          mode='outlined'
          value={item.total_number_of_persons_worked}
          onChangeText={(text) =>
            handleInputChange(text, index, 'total_number_of_persons_worked')
          }
          keyboardType='numeric'
          style={styles.textInput}
          contentStyle={styles.textCenter}
        />
      </Col>
      <Col style={styles.cell}>
        <TextInput
          mode='outlined'
          value={item.total_wages}
          onChangeText={(text) => handleInputChange(text, index, 'total_wages')}
          keyboardType='numeric'
          style={styles.textInput}
          contentStyle={styles.textCenter}
        />
      </Col>
    </Row>
  );

  return (
    <ScrollView horizontal={true} style={styles.container}>
      <Grid>
        {/* Header Rows */}
        <Row style={styles.headerRow}>
          <Col style={{ ...styles.headerCell, width: 200 }}>
            <Text style={styles.headerText}>i</Text>
          </Col>
          <Col style={{ ...styles.headerCell, width: 600 }}>
            <Text style={styles.headerText}>Number of working days</Text>
          </Col>
          <Col style={styles.headerCell}>
            <Text style={{ ...styles.headerText, width: 200 }}>245</Text>
          </Col>
        </Row>
        <Row style={styles.headerRow}>
          <Col style={{ ...styles.headerCell, width: 200 }}>
            <Text style={styles.headerText}>Sl No.</Text>
          </Col>
          <Col style={{ ...styles.headerCell, width: 200 }}>
            <Text style={styles.headerText}>Category of staff</Text>
          </Col>
          <Col style={{ ...styles.headerCell, width: 200 }}>
            <Text style={styles.headerText}>Number of days worked</Text>
          </Col>
          <Col style={{ ...styles.headerCell, width: 200 }}>
            <Text style={styles.headerText}>
              Total number of persons worked
            </Text>
          </Col>
          <Col style={{ ...styles.headerCell, width: 200 }}>
            <Text style={styles.headerText}>Total wages/ salaries</Text>
          </Col>
        </Row>
        {/* Data Rows */}
        <FlatList
          data={rows}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={true}
        />
      </Grid>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 70,
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  textInput: {
    width: 100,
    backgroundColor: 'white',
  },
  textCenter: {
    textAlign: 'center',
  },
  headerRow: {
    backgroundColor: '#f0f0f0',
    height: 50,
    borderColor: '#ccc',
  },
  headerCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TableComponent;
