import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { colors } from "../config/constants";
import { Avatar } from 'react-native-elements';

const ContactRow = ({ name, subtitle, onPress, style, onLongPress, selected, showForwardIcon = true, subtitle2 }) => {
    return (
      <TouchableOpacity
        style={[styles.row, style]}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        {/* <View style={styles.avatar}> */}
          {/* <Text style={styles.avatarLabel}>
                    {name.trim().split(' ').reduce((prev, current) => `${prev}${current[0]}`, '')}
                </Text> */}
          <Avatar
            rounded
            size="medium"
            source={{
              uri: "https://i.pravatar.cc/300",
            }}
          />
        {/* </View> */}

        <View style={styles.textsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <View style={styles.textsContainer}>
          <Text style={styles.subtitle2}>{subtitle2}</Text>
        </View>

        {selected && (
          <View style={showForwardIcon ? styles.overlay : styles.overlay2}>
            <Ionicons name="checkmark-outline" size={16} color={"white"} />
          </View>
        )}
        {showForwardIcon && (
          <Ionicons name="chevron-forward-outline" size={20} />
        )}
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    subtitle: {
        marginTop: 2,
        color: '#565656',
        width: 200
    },
    subtitle2: {
        fontSize: 12,
        left: 90,
        color: '#565656',
    },
    textsContainer: {
        flex: 1,
        marginStart: 16,
        marginRight:10
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: colors.primary
    },
    avatarLabel: {
        fontSize: 20,
        color: 'white'
    },
    overlay: {
        width: 22,
        height: 22,
        backgroundColor: colors.teal,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1.5,
        top: 18,
        right: 278
    },
    overlay2: {
        width: 22,
        height: 22,
        backgroundColor: colors.teal,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1.5,
        top: 18,
        right: 298
    },
})

export default ContactRow;