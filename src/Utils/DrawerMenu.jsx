import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Search from "../Components/Search";
import { process } from "../../env";

function DrawerMenu({ setWeatherData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lat, setLat] = React.useState("");
  const [lng, setLng] = React.useState("");
  const btnRef = React.useRef();

  async function getWeather() {
    localStorage.setItem('lat', lat);
    localStorage.setItem('lng', lng);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.API_KEY}`)
        .then((response) => (response.json()))
        .then(response => setWeatherData(response))
  }
  
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme={"#6E707A"}
        onClick={onOpen}
        className="bg-[#6E707A] font-raleway shadow-searchBtn"
      >
        Search for places
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"#1E213A"}>
          <DrawerCloseButton color={"whiteAlpha.900"} />
          <DrawerHeader></DrawerHeader>

          <DrawerBody
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
            marginTop={"20px"}
          >
            <Search setLat={setLat} setLng={setLng} />
            <Button backgroundColor={'#3C47E9'} color={'#E7E7EB'} colorScheme={'#E7E7EB'} borderRadius={'2px'} marginLeft={'1rem'} padding={'1.3rem'} className="font-raleway" onClick={() => {
              getWeather()
              onClose()
            }}>Search</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
