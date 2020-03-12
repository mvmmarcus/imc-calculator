import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleCalcular () {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      alert('vc está abaixo do peso!' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc <24.9) {
      alert ('Seu peso é normal!' + imc.toFixed(2))
    } else if (imc > 24.9) {
      alert('vc está acima do peso!' + imc.toFixed(2))
    }

  }

  return (

    <View style={styles.container} >
      <Text style={styles.title} >Calcule seu imc</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={peso => setPeso(peso)}
        placeholder="Peso em kg"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={altura => setAltura(altura)}
        placeholder="Altura (Ex: 1.80)"
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleCalcular} style={styles.button} >
        <Text style={styles.buttonText} >Calcular</Text>
      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#666",
  },
  title: {
    fontSize: 30,
    marginTop: 25,
    textAlign: "center"
  },
  input: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    fontSize: 20
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    margin: 15

  }
});