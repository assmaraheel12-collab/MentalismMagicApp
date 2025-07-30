import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Chrome as Home, Brain, Sparkles } from 'lucide-react-native';
import { generateRevealList, isLetterStraight } from '@/data/categories';

const { width } = Dimensions.get('window');

export default function Reveal() {
  const { category, selectedItem } = useLocalSearchParams<{ 
    category: string; 
    selectedItem: string; 
  }>();
  
  const [revealList, setRevealList] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (category && selectedItem) {
      const list = generateRevealList(selectedItem, category as any);
      setRevealList(list);
    }
  }, [category, selectedItem]);

  const getCategoryTitle = () => {
    return category?.charAt(0).toUpperCase() + category?.slice(1) || 'Items';
  };

  const getSelectedItemType = () => {
    return isLetterStraight(selectedItem?.[0] || '') ? 'STRAIGHT' : 'CURVED';
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.listItem}>
      <View style={styles.numberCircle}>
        <Text style={styles.numberText}>{index + 1}</Text>
      </View>
      <Text style={[
        styles.itemText,
        item === selectedItem && styles.selectedItemText
      ]}>
        {item}
      </Text>
      {item === selectedItem && (
        <Sparkles size={16} color="#ffd700" style={styles.sparkle} />
      )}
    </View>
  );

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
          <Text style={styles.title}>The Reveal</Text>
          <TouchableOpacity 
            onPress={() => router.push('/(tabs)')} 
            style={styles.homeButton}
          >
            <Home size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.instructionBox}>
            <Brain size={24} color="#6366f1" />
            <Text style={styles.instructionText}>
              Read these {revealList.length} {getCategoryTitle().toLowerCase()} aloud to the magician:
            </Text>
          </View>

          <FlatList
            data={revealList}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            style={styles.list}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.actionContainer}>
            <TouchableOpacity 
              style={styles.hintButton}
              onPress={() => setShowHint(!showHint)}
            >
              <LinearGradient
                colors={['rgba(139, 92, 246, 0.8)', 'rgba(99, 102, 241, 0.8)']}
                style={styles.hintButtonGradient}
              >
                <Text style={styles.hintButtonText}>
                  {showHint ? 'Hide Hint' : 'Show Magician Hint'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {showHint && (
              <View style={styles.hintBox}>
                <Text style={styles.hintTitle}>🎯 Magician's Secret:</Text>
                <Text style={styles.hintText}>
                  The selected item "{selectedItem}" starts with a {getSelectedItemType()} letter.
                </Text>
                <Text style={styles.hintText}>
                  Look for the item that's different from the other 9!
                </Text>
              </View>
            )}

            <TouchableOpacity 
              style={styles.resetButton}
              onPress={() => router.push('/(tabs)')}
            >
              <LinearGradient
                colors={['#22c55e', '#16a34a']}
                style={styles.resetButtonGradient}
              >
                <Text style={styles.resetButtonText}>Perform Another Trick</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
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
  homeButton: {
    padding: 8,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  instructionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  instructionText: {
    flex: 1,
    fontSize: 16,
    color: '#d0d0d0',
    marginLeft: 12,
    fontWeight: '500',
  },
  list: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
  },
  numberCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#6366f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  numberText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
    flex: 1,
    fontWeight: '500',
  },
  selectedItemText: {
    color: '#ffd700',
    fontWeight: 'bold',
  },
  sparkle: {
    marginLeft: 8,
  },
  actionContainer: {
    paddingVertical: 20,
  },
  hintButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 15,
  },
  hintButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  hintButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  hintBox: {
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#ffd700',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
  },
  hintTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 8,
  },
  hintText: {
    fontSize: 14,
    color: '#ffd700',
    lineHeight: 20,
    marginBottom: 4,
  },
  resetButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  resetButtonGradient: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});