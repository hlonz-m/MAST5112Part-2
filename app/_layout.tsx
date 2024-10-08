import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function App() {
  
  const [itemTitle, setItemTitle] = useState('');
  const [itemInfo, setItemInfo] = useState('');
  const [category, setCategory] = useState('');
  const [cost, setCost] = useState('');
  const [menuEntries, setMenuEntries] = useState<any[]>([]);

  const handleAddEntry = () => {
    const newEntry = { name: itemTitle, description: itemInfo, course: category, price: cost };
    setMenuEntries([...menuEntries, newEntry]);

    setItemTitle('');
    setItemInfo('');
    setCategory('');
    setCost('');
    Alert.alert('Menu Item Added');
  };

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Private Chef's Menu</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Item Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter item name"
            placeholderTextColor="#94A3B8"
            onChangeText={(text) => setItemTitle(text)}
            value={itemTitle}
          />

          <Text style={styles.label}>Details:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter details"
            placeholderTextColor="#94A3B8"
            onChangeText={(text) => setItemInfo(text)}
            value={itemInfo}
          />

          <Text style={styles.label}>Category:</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
              style={styles.dropdown}
            >
              <Picker.Item label="Choose a Category" value="" />
              <Picker.Item label="Starter" value="Starterr" />
              <Picker.Item label="Main" value="Main" />
              <Picker.Item label="Dessert" value="Dessert" />
            </Picker>
          </View>

          <Text style={styles.label}>Cost:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter cost"
            placeholderTextColor="#94A3B8"
            keyboardType="numeric"
            onChangeText={(text) => setCost(text)}
            value={cost}
          />
        </View>

        <Button
          title="Add Item"
          color="#1E40AF"
          onPress={handleAddEntry}
        />

        <View style={styles.menuListContainer}>
          <Text style={styles.itemCount}>Total Items: {menuEntries.length}</Text>
          {menuEntries.map((entry, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.entryLabel}>Name:</Text>
              <Text style={styles.entryText}>{entry.name}</Text>
              <Text style={styles.entryLabel}>Details:</Text>
              <Text style={styles.entryText}>{entry.description}</Text>
              <Text style={styles.entryLabel}>Category:</Text>
              <Text style={styles.entryText}>{entry.course}</Text>
              <Text style={styles.entryLabel}>Cost:</Text>
              <Text style={styles.entryText}>R{entry.price}</Text>
            </View>
          ))}
        </View>

        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#cfc4ca', 
  },
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#cfc4ca',
  },
  headerContainer: {
    marginBottom: 20,
    marginTop: 30, 
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E40AF', 
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    color: '#1E40AF', 
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#1E40AF',
    backgroundColor: '#1E40AF', 
    padding: 10,
    marginVertical: 5,
    color: '#E0F2FE', 
    width: '100%',
    borderRadius: 8,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#1E40AF',
    backgroundColor: '#1E40AF',
    marginBottom: 10,
    borderRadius: 8,
  },
  dropdown: {
    color: '#E0F2FE', 
  },
  menuListContainer: {
    marginTop: 20,
    width: '100%',
  },
  itemCount: {
    color: '#1E40AF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: '#1E40AF', 
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  entryLabel: {
    color: '#E0F2FE', 
    fontSize: 14,
    fontWeight: '600',
  },
  entryText: {
    color: '#E0F2FE', 
    fontSize: 14,
    marginBottom: 5,
  },
});





