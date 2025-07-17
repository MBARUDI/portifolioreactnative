import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SkillScreen() {
  const skills = [
    { name: 'React Native', level: 'Avançado' },
    { name: 'JavaScript', level: 'Intermediário' },
    { name: 'Node.js', level: 'Intermediário' },
    { name: 'TypeScript', level: 'Intermediário' },
    { name: 'HTML/CSS', level: 'Avançado' },
    { name: 'Git', level: 'Avançado' },
    { name: 'Figma', level: 'Básico' },
    { name: 'UI/UX Design', level: 'Básico' },
    { name: 'Agile Methodologies', level: 'Intermediário' },
    { name: 'SQL', level: 'Intermediário' },
    { name: 'Java', level: 'Intermediário' },
    { name: 'REST APIs', level: 'Avançado' },
    { name: 'Python', level: 'Intermediário' },
    



  ];

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://contents.bebee.com/users/id/nCNOQ6307c7124daff/_avatar-Lk5kp-400.png' }} style={styles.image} />
      <Text style={styles.name}>Marcelo David Barudi</Text>
      {skills.map((skill, index) => (
        <Text key={index} style={styles.skill}>{skill.name}: {skill.level}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#e0e0e0', // Cor de fundo mais suave
    borderRadius: 10, // Borda arredondada
    padding: 20,
    shadowColor: '#000', // Sombra para dar profundidade
    shadowOffset: { width: 0, height: 2 },
  },
  image: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 22, fontWeight: 'bold', marginVertical: 16 },
  skill: { fontSize: 18, marginVertical: 4 }
});
