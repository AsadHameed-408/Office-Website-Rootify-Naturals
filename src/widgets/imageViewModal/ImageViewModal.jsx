import React from 'react';
import {
    Modal,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const ImageViewerModal = ({ visible, imageUrl, onClose }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                {/* Close Button at the top right */}
                <SafeAreaView style={styles.header}>
                    <TouchableOpacity
                        style={styles.closeCircle}
                        onPress={onClose}
                        activeOpacity={0.7}
                    >
                        <MaterialIcons name="close" size={24} color="white" />
                    </TouchableOpacity>
                </SafeAreaView>

                {/* Image Container */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.fullImage}
                        resizeMode="contain" // Ensures the whole image is visible
                    />
                </View>

                {/* Bottom Bar (Optional - adds a premium look) */}
                <View style={styles.footer}>
                    <View style={styles.indicator} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.92)', // Darker backdrop for focus
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 10,
    },
    closeCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: width,
        height: height * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImage: {
        width: '95%',
        height: '100%',
        borderRadius: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        alignItems: 'center',
        width: '100%',
    },
    indicator: {
        width: 40,
        height: 5,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    }
});

export default ImageViewerModal;