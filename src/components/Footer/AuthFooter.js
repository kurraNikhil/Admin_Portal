/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function AuthFooter(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
      }}
      alignItems={{
        base: "center",
      }}
      justifyContent="space-between"
      pb="20px"
      fontSize="sm"
    >
      <Text
        color="white"
        textAlign={{
          base: "center",
        }}
        mb={{ base: "20px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span" mx="2px">
          {document.documentElement.dir === "rtl" ? "" : "Made with ❤️ by "}
        </Text>
        <Link target="_blank">
          {document.documentElement.dir === "rtl"
            ? " توقيت الإبداعية"
            : "Ekip "}
        </Link>
        &
        <Link target="_blank">
          {document.documentElement.dir === "rtl"
            ? "سيممبل "
            : " Creative Team"}
        </Link>
        {document.documentElement.dir === "rtl"
          ? "للحصول على ويب أفضل"
          : " for a better web"}
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
          }}
        >
          <Link color="white" fontSize="sm">
            {document.documentElement.dir === "rtl"
              ? "توقيت الإبداعية"
              : "EKIPIT"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
