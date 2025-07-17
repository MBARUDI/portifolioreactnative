import React from 'react';
import { View, Text, Image, Linking, Button, StyleSheet, Dimensions } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://contents.bebee.com/users/id/nCNOQ6307c7124daff/_avatar-Lk5kp-400.png' }} style={styles.image} />
      <Text style={styles.name}>Marcelo David Barudi</Text>
      <Button style={styles.button} title="LinkedIn" onPress={() => Linking.openURL('https://www.linkedin.com/in/marcelo-barudi')} />
      <View style={styles.space} />
      <Button style={styles.button} title="GitHub" onPress={() => Linking.openURL('https://github.com/MBARUDI')} />
      <View style={styles.space} />
      <Button style={styles.button} title="Email" onPress={() => Linking.openURL('mailto:mdbarudi@gmail.com')} />
      <View style={styles.space} />
      <Button title="Ver Habilidades" onPress={() => navigation.navigate('Skill')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', 
  backgroundColor: '#e0e0e0', // Cor de fundo mais suave
  borderRadius: 10, // Borda arredondada
  padding: 20,
  shadowColor: '#000', // Sombra para dar profundidade
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5, },
  image: { width: 150, height: 150, borderRadius: 75, },
  name: { fontSize: 24, fontWeight: 'bold', marginVertical: 16 },
  button: { width: Dimensions.get('window').width - 40, // Largura da tela menos a margem do container
    marginVertical: 5,  },
  space: { height: 10, },

});
