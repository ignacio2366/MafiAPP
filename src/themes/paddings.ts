import { ViewStyle } from "react-native";

export const padding = {
    paddingVertical_6px: {
        paddingVertical: 6
    },
    paddingVertical_14px: {
        paddingVertical: 14,
    },
    paddingVerical_32px: {
        paddingVertical: 32
    },
    paddingHorizontal_15px: {
        paddingHorizontal: 15,
    },
    paddingHorizontal_24px: {
        paddingHorizontal: 24,
    },
    paddingHorizontal_15: {
        paddingHorizontal: "15%",
    },
    paddingTop_50px:{
        paddingTop: 50,
        paddingBottom: 10,
    }
} as const satisfies Record<string, ViewStyle>;

export const margin = {
    margingVertical_14px: {
        marginVertical: 14,
    },
    marginHorizontal_15px: {
        marginHorizontal: 15,
    },
    marginVert_15: {
        marginVertical: "15%",
    },
    marginTop_15: {
        marginTop: "15%",
    },
    marginTop_25: {
        marginTop: "25%",
    }
} as const satisfies Record<string, ViewStyle>;