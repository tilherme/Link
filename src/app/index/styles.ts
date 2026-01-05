
import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export  const styles = StyleSheet.create({
  container : {
    paddingTop: 62,
    flex: 1,
    // flexDirection: "row",
  },
  header : {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 38,
    height: 32,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],

  },
  linksContent: {
    gap: 20,
    padding:24,
    paddingBottom: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.gray[800],
    borderTopWidth: 1,
    borderTopColor: colors.gray[900],
    paddingBottom: 42,
    padding:24
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[400],
  },
  modalTitleLink: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[200],
  },
  modalUrlLink: {
    fontSize: 14,
    color: colors.gray[400],
  },
  modalOption:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 32,
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingVertical: 14
  }
})