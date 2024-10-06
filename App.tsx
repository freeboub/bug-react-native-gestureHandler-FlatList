import { FlatList, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";

const data = new Array(50).fill(0).map((_, index) => ({ id: index }))

export const AnimatedFlatList = () => {
  return (
      <FlatList
        data={data}
        renderItem={() => {
          return <View style={{
                        height: 80,
                        width: 80,
                        backgroundColor: '#78CAD2',
                        alignSelf: 'center',
                        margin: 20,
                }}
            />
        }}
      />
  )
}

const App = () => {
  const panGesture = Gesture.Pan()
  // const nativeGesture = Gesture.Native();
  // const gesture = Gesture.Simultaneous(panGesture, nativeGesture);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={panGesture}>
        <AnimatedFlatList/>
      </GestureDetector>
    </GestureHandlerRootView>
  )
}

export default App