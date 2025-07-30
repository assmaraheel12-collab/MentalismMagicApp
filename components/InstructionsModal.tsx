import React from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { X, Eye, Target, Brain } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

interface InstructionsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function InstructionsModal({ visible, onClose }: InstructionsModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="formSheet"
      onRequestClose={onClose}
    >
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.container}
      >
        <View style={styles.header}>
          <Eye size={32} color="#ffd700" />
          <Text style={styles.title}>Magician's Instructions</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Target size={24} color="#6366f1" />
              <Text style={styles.sectionTitle}>The Secret</Text>
            </View>
            <Text style={styles.text}>
              This trick relies on the classification of letters as either "STRAIGHT" or "CURVED" based on their first letter.
            </Text>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Brain size={24} color="#8b5cf6" />
              <Text style={styles.sectionTitle}>Letter Classification</Text>
            </View>
            <View style={styles.letterGrid}>
              <View style={styles.letterColumn}>
                <Text style={styles.columnTitle}>STRAIGHT LETTERS:</Text>
                <Text style={styles.letters}>A, E, F, H, I, K, L, M, N, T, V, W, X, Y, Z</Text>
              </View>
              <View style={styles.letterColumn}>
                <Text style={styles.columnTitle}>CURVED LETTERS:</Text>
                <Text style={styles.letters}>B, C, D, G, J, O, P, Q, R, S, U</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>How It Works:</Text>
            <View style={styles.step}>
              <Text style={styles.stepNumber}>1.</Text>
              <Text style={styles.stepText}>
                The spectator chooses from 100+ items in each category
              </Text>
            </View>
            <View style={styles.step}>
              <Text style={styles.stepNumber}>2.</Text>
              <Text style={styles.stepText}>
                Each category has exactly 50 items starting with STRAIGHT letters and 50 with CURVED letters
              </Text>
            </View>
            <View style={styles.step}>
              <Text style={styles.stepNumber}>3.</Text>
              <Text style={styles.stepText}>
                When the final 10 items appear, 9 will start with one type and their choice will be the opposite type
              </Text>
            </View>
            <View style={styles.step}>
              <Text style={styles.stepNumber}>4.</Text>
              <Text style={styles.stepText}>
                Simply identify which item is the "odd one out" based on its first letter classification
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Performance Tips:</Text>
            <Text style={styles.text}>
              • Let the spectator read all 10 items aloud{'\n'}
              • Act like you're concentrating deeply{'\n'}
              • Build suspense before revealing your answer{'\n'}
              • The magic happens automatically - just identify the different letter type!
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Text style={styles.warningText}>
              ⚠️ Keep this information secret! The magic depends on the spectator not knowing the method.
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    marginLeft: -24, // Compensate for close button
  },
  closeButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    color: '#d0d0d0',
    lineHeight: 24,
  },
  letterGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  letterColumn: {
    flex: 1,
    marginRight: 10,
  },
  columnTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffd700',
    marginBottom: 8,
  },
  letters: {
    fontSize: 14,
    color: '#d0d0d0',
    lineHeight: 20,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6366f1',
    marginRight: 12,
    minWidth: 20,
  },
  stepText: {
    fontSize: 16,
    color: '#d0d0d0',
    lineHeight: 22,
    flex: 1,
  },
  warningBox: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderWidth: 1,
    borderColor: '#ef4444',
    borderRadius: 8,
    padding: 16,
    marginTop: 20,
  },
  warningText: {
    color: '#fca5a5',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
});