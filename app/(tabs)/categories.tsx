import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ArrowLeft, Palette, MapPin, Apple, Package, Star } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const categories = [
  { id: 'colors', name: 'Colors', icon: Palette, color: ['#ef4444', '#f97316'] },
  { id: 'cities', name: 'Cities', icon: MapPin, color: ['#3b82f6', '#1d4ed8'] },
  { id: 'fruits', name: 'Fruits', icon: Apple, color: ['#22c55e', '#16a34a'] },
  { id: 'objects', name: 'Objects', icon: Package, color: ['#a855f7', '#7c3aed'] },
  { id: 'celebrities', name: 'Celebrities', icon: Star, color: ['#f59e0b', '#d97706'] },
];

export default function Categories() {
  const selectCategory = (categoryId: string) => {
    router.push({
      pathname: '/(tabs)/selection',
      params: { category: categoryId }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton}
          >
            <ArrowLeft size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Choose a Category</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.instruction}>
            Select any category that speaks to your mind...
          </Text>

          <View style={styles.categoriesContainer}>
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryCard,
                    { 
                      marginTop: index % 2 === 0 ? 0 : 20,
                      transform: [{ rotate: `${(index % 2 === 0 ? -2 : 2) + (index * 0.5)}deg` }]
                    }
                  ]}
                  onPress={() => selectCategory(category.id)}
                >
                  <LinearGradient
                    colors={category.color}
                    style={styles.categoryGradient}
                  >
                    <IconComponent size={40} color="#fff" strokeWidth={1.5} />
                    <Text style={styles.categoryName}>{category.name}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.hint}>
            Remember: Think of your choice, don't let the magician see...
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    padding: 8,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  instruction: {
    fontSize: 16,
    color: '#d0d0d0',
    textAlign: 'center',
    marginBottom: 40,
    fontStyle: 'italic',
  },
  categoriesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingVertical: 20,
  },
  categoryCard: {
    width: width * 0.4,
    marginBottom: 30,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  categoryGradient: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginTop: 12,
    textAlign: 'center',
  },
  hint: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    fontStyle: 'italic',
    paddingBottom: 40,
  },
});