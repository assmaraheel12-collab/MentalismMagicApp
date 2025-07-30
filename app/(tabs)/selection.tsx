import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Eye } from 'lucide-react-native';
import { categoryData } from '@/data/categories';

const { width, height } = Dimensions.get('window');

export default function Selection() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
  const items = categoryData[category as keyof typeof categoryData] || [];
  
  const getRandomPosition = (index: number) => {
    const seed = index * 9999; // Use index as seed for consistent positioning
    const pseudoRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    
    return {
      top: 100 + (pseudoRandom(seed) * (height - 400)), // Avoid header and footer
      left: 20 + (pseudoRandom(seed + 1) * (width - 200)), // Keep some margin
      rotation: -15 + (pseudoRandom(seed + 2) * 30), // Random rotation -15 to 15 degrees
    };
  };

  const handleItemSelect = (item: string) => {
    setSelectedItem(item);
    // Navigate to reveal screen after short delay
    setTimeout(() => {
      router.push({
        pathname: '/(tabs)/reveal',
        params: { category, selectedItem: item }
      });
    }, 500);
  };

  const getCategoryTitle = () => {
    return category?.charAt(0).toUpperCase() + category?.slice(1) || 'Items';
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
          <Text style={styles.title}>{getCategoryTitle()}</Text>
        </View>

        <View style={styles.instructionContainer}>
          <Eye size={20} color="#ffd700" />
          <Text style={styles.instruction}>
            Choose one item. Don't let the magician see your choice!
          </Text>
        </View>

        <ScrollView 
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.itemsContainer}
        >
          {items.map((item, index) => {
            const position = getRandomPosition(index);
            return (
              <TouchableOpacity
                key={item}
                style={[
                  styles.itemCard,
                  {
                    position: 'absolute',
                    top: position.top,
                    left: position.left,
                    transform: [{ rotate: `${position.rotation}deg` }],
                    opacity: selectedItem === item ? 0.5 : 1,
                  }
                ]}
                onPress={() => handleItemSelect(item)}
              >
                <LinearGradient
                  colors={['rgba(99, 102, 241, 0.8)', 'rgba(139, 92, 246, 0.8)']}
                  style={styles.cardGradient}
                >
                  <Text style={styles.itemText}>{item}</Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {selectedItem && (
          <View style={styles.selectedOverlay}>
            <Text style={styles.selectedText}>Choice made! Proceeding...</Text>
          </View>
        )}
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
    paddingBottom: 10,
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
  instructionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  instruction: {
    fontSize: 14,
    color: '#ffd700',
    marginLeft: 8,
    fontWeight: '500',
  },
  scrollContainer: {
    flex: 1,
  },
  itemsContainer: {
    height: height * 1.5, // Make it taller to accommodate scattered items
    position: 'relative',
  },
  itemCard: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  cardGradient: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minWidth: 120,
    maxWidth: 160,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  selectedOverlay: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(34, 197, 94, 0.9)',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});