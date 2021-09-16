import React, {useState, useRef} from 'react'
import { View, StyleSheet, FlatList, SafeAreaView, Animated, Button } from 'react-native'
import data from '../data'
import ButtonProceed from './Button'
import OnboardingItem from './OnboardingItem'
import Paginator from './Paginator'
 
export default function Onboarding() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const slideRef = useRef(null)
    const scrollX = useRef(new Animated.Value(0)).current

    const viewableItemsChanged = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

    return (
        <SafeAreaView style={styles.container}>
            
            <FlatList
                bounces={false}
                data={data}
                style={styles.list}
                pagingEnabled={true}
                renderItem={({item})=>(
                    <OnboardingItem
                        Illustration={item.illustration}
                        description={item.description}
                        title={item.title}
                    />
                )}
                keyExtractor={item=>item.id}
                horizontal={true}
                scrollEventThrottle={32}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slideRef}
            />

            <Paginator 
                data={data}
                scrollX={scrollX}
            />

            <ButtonProceed />

        </SafeAreaView>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20
    },
    itemWrapper: {
        height: 100,
        width: 100,
    },
    list: {
        flex: 3,
    }
})