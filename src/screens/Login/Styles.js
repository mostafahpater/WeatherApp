import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex:1
    },
    image: {
        height: 160,
        width: 170
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: 40,
        color: "red"
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5
    },
    sectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderRadius: 5,
    },
    imageStyle: {
        margin: 5,
        paddingTop: 5,
    },
    labelInput:{
        position: 'absolute',
        top: 0,
        left: 10,
        zIndex: 100,
        color: '#000',
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    input: {
        height: 50,
        width: '100%',
        color: '#000',
        paddingHorizontal: 20,
        borderRadius: 7
    },
    rememberView: {
        width: "100%",
        paddingHorizontal: 50,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 20
    },
    switch: {
        flexDirection: "row",
        gap: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    rememberText: {
        fontSize: 13
    },
    forgetText: {
        fontSize: 14,
        color: "#000"
    },
    button: {
        backgroundColor: "#5c4dbd",
        height: 55,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 50
    },
    optionsText: {
        textAlign: "center",
        paddingVertical: 10,
        color: "gray",
        fontSize: 13,
        marginBottom: 6
    },
    mediaIcons: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 23
    },
    icons: {
        width: 40,
        height: 40,
    },
    footerText: {
        textAlign: "center",
        color: "gray",
        marginBottom:20,
    },
    signup: {
        color: "#5c4dbd",
        fontWeight:'700',
        fontSize: 14
    },
    lineBesideTitles: {
        backgroundColor: '#d2d2d4',
        height: 1,
        flex: 1,
        alignSelf: 'center',
    },
    titleOr: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3a3a3d',
        paddingHorizontal: 8,
    },
    containerSocialIcon: {
        borderWidth: 1,
        borderColor: '#e8e8e8',
        padding: 10,
        borderRadius: 7
    },
    textInputContainer:{
        borderWidth: 1,
        borderColor: '#e1e8eb',
        flexDirection: 'row',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingTop: 5,
    }
})