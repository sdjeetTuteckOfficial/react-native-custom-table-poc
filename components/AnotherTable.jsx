import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';

const Table = () => {
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
    <View style={styles.row}>
      <TextInput style={styles.cell1} value={item.sl} editable={false} />
      <TextInput
        style={styles.cell1}
        value={item.category_of_staff}
        onChangeText={(text) =>
          handleInputChange(text, index, 'category_of_staff')
        }
      />
      <TextInput
        style={styles.cell1}
        value={item.no_of_days_worked}
        onChangeText={(text) =>
          handleInputChange(text, index, 'no_of_days_worked')
        }
        keyboardType='numeric'
      />
      <TextInput
        style={styles.cell1}
        value={item.total_number_of_persons_worked}
        onChangeText={(text) =>
          handleInputChange(text, index, 'total_number_of_persons_worked')
        }
        keyboardType='numeric'
      />
      <TextInput
        style={styles.cell1}
        value={item.total_wages}
        onChangeText={(text) => handleInputChange(text, index, 'total_wages')}
        keyboardType='numeric'
      />
    </View>
  );

  return (
    <ScrollView style={styles.container} horizontal={true}>
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.cell1}>i</Text>
          <Text style={styles.cell2}>Number of working days</Text>
          <Text style={styles.cell1}>245</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.cell1}>Sl No.</Text>
          <Text style={styles.cell1}>Category of staff</Text>
          <Text style={styles.cell1}>Number of days worked</Text>
          <Text style={styles.cell1}>Total number of persons worked</Text>
          <Text style={styles.cell1}>Total wages/ salaries</Text>
        </View>
        <FlatList
          data={rows}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={true}
          contentContainerStyle={styles.listContent} // Ensure the list content has proper styling
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
  },
  table: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  cell1: {
    width: 100,
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  cell2: {
    width: 300,
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  listContent: {
    flexGrow: 1,
  },
});

export default Table;
