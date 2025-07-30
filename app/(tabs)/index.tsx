import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Eye, Sparkles } from 'lucide-react-native';
import InstructionsModal from '@/components/InstructionsModal';

const { width, height } = Dimensions.get('window');

export default function Dashboard() {
  const [showInstructions, setShowInstructions] = useState(false);
  const opacity = useSharedValue(1);

  const showInstructionsModal = () => {
    setShowInstructions(true);
  };

  // Two-finger swipe down gesture
  const panGesture = Gesture.Pan()
    .minPointers(2)
    .onEnd((event) => {
      if (event.translationY > 100) {
        runOnJS(showInstructionsModal)();
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const startTrick = () => {
    opacity.value = withTiming(0.7, { duration: 200 });
    setTimeout(() => {
      router.push('/(tabs)/categories');
      opacity.value = withTiming(1, { duration: 200 });
    }, 200);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <GestureDetector gesture={panGesture}>
        <View style={styles.container}>
          <LinearGradient
            colors={['#1a1a2e', '#16213e', '#0f3460']}
            style={styles.gradient}
          >
            <Animated.View style={[styles.content, animatedStyle]}>
              <View style={styles.header}>
                <Eye size={60} color="#fff" strokeWidth={1} />
                <Text style={styles.title}>Mind Reader</Text>
                <Text style={styles.subtitle}>The Art of Mentalism</Text>
              </View>

              <View style={styles.centerContent}>
                <View style={styles.sparkleContainer}>
                  <Sparkles size={40} color="#ffd700" />
                  <Text style={styles.description}>
                    Prepare to witness the impossible...
                  </Text>
                  <Sparkles size={30} color="#ffd700" />
                </View>

                <TouchableOpacity style={styles.startButton} onPress={startTrick}>
                  <LinearGradient
                    colors={['#6366f1', '#8b5cf6', '#a855f7']}
                    style={styles.buttonGradient}
                  >
                    <Text style={styles.buttonText}>Begin the Experience</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <View style={styles.footer}>
                <Text style={styles.hintText}>
                  Magician's secret entrance awaits...
                </Text>
              </View>
            </Animated.View>
          </LinearGradient>

          <InstructionsModal 
            visible={showInstructions}
            onClose={() => setShowInstructions(false)}
          />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#a0a0a0',
    marginTop: 8,
    fontStyle: 'italic',
  },
  centerContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  sparkleContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  description: {
    fontSize: 16,
    color: '#d0d0d0',
    textAlign: 'center',
    marginVertical: 20,
    lineHeight: 24,
  },
  startButton: {
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonGradient: {
    paddingHorizontal: 40,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 1,
  },
  footer: {
    alignItems: 'center',
  },
  hintText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
});