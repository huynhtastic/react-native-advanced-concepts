import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Deck } from "./src/Deck";
import { CardData } from "./src/types";
import { Card, Button, Text } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

const DATA: CardData[] = [
  {
    id: 1,
    text: "Card #1",
    uri: "https://lh4.googleusercontent.com/LKnKwUjNKpE8KhULr6-P56HxH3AB9ur7i2l22NcG5e_QDQ6tZ3RrjXmJ1t6ChcPXC3h7VOlh6Qttl4SvaCDcEG7ixx8-Zx-D6_PIRNAZtyG999aVi4ALc4ZCxtNxAV8VawF6d_rW",
  },
  {
    id: 2,
    text: "Card #2",
    uri: "https://lh5.googleusercontent.com/5k0C-CT0Syq_pPNK3_wzZ1zBSv4BPGtVXL1R3yiOR5N2ScDetnad_En2Miu01Ifv5e2TjqrzNMkeW4oBZpNGiEraE4XftQocm6sbNtPKJpNLKecj7h8_BIW2x6Xwby1MQQ8CUAPm",
  },
  {
    id: 3,
    text: "Card #3",
    uri: "https://lh5.googleusercontent.com/9aGMIxHlc3Fdnd90jpEnV_mRJz-W6r_ADojYFYvRt95yQzPMdPqM42GsmHhMLVtlo_Bz7B3Y-D8vyqR5G3n-peQoPEaD3dSZ2tTz6VXsTi1wzf0g21gHBK8V07MTvMbl0JnG6V9h",
  },
  {
    id: 4,
    text: "Card #4",
    uri: "https://lh3.googleusercontent.com/4aDhdvYIBC3mFCa27lq4HVcBmC0_bOZ1dPmc3zspIjiwCUFlC8L9jVNcZZZNNSIw47Y4co61y2ALen53sYZCyMFmSRe43GC5vuVMGaJkcow0OjSFtsJ-OGJjrlHanfcb-e_-GZSU",
  },
  {
    id: 5,
    text: "Card #5",
    uri: "https://lh3.googleusercontent.com/Id55S9A2u_YeVUF8lz9boMSqGC3a6PaybxSWyo_Nbb0OdEWzbiRj3y-KSr-yWAD76cx6Hvze7KiGGfHVX4EN5gb-GcKbi18QhUEini8DY2tkr_1hkOqLpYBHsJpzSakitAw__RXE",
  },
  {
    id: 6,
    text: "Card #6",
    uri: "https://lh6.googleusercontent.com/v0jnjo7zkp4tapvfeNdqmNLwlfn0BEi01IxBor43_0_l21VuNK9oGvGjrIai64LepRQjpQrSmU8M_ojRJRv77gOolkHC8S_wRWrzBkvgZM7O8ymJTBThxKhoLb_n2nr2T-Acqkgk",
  },
  {
    id: 7,
    text: "Card #7",
    uri: "https://lh6.googleusercontent.com/RAeLfpVTuhoyAKaoVJZklDa5iOhzjtVQ8zxKihAomBNFSeNb3EbSFdectt-U9lLhLcmeENO52F0JH9wLZxLUklSOqSTSOw9t_GhzxNeEwQy_6FCt0LtqevU01zxrMnPhiiEW-Wdq",
  },
  {
    id: 8,
    text: "Card #8",
    uri: "https://lh3.googleusercontent.com/nrY5poEuRGlCVoJ7ecwW9E5l1JsuRNRQLVuwyiYaURvKN6R3ZC_VFc6eKqYSWgMiQJyZW94ZOYV-OS6n892zJDcRhn9vuBfC22Fa0MrlIt3Pdg132Y2hTkHLTyeTn8LI9f51Q6aG",
  },
];

const renderItem = (item: CardData) => {
  return (
    <Card key={item.id}>
      <Card.Image source={{ uri: item.uri }} />
      <Card.Title>{item.text}</Card.Title>
      <Text>I can customize the Card further.</Text>
      <Button
        icon={{ color: "#fff", name: "code" }}
        buttonStyle={{ backgroundColor: "#03A9F4" }}
        title="View Now!"
      />
    </Card>
  );
};

const renderNoMoreCards = () => {
  return (
    <Card>
      <Card.Title>All Done!</Card.Title>
      <Text style={{ marginBottom: 10 }}>There&apos;s no more cards!</Text>
      <Button title="Get More" />
    </Card>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderItem={renderItem}
          renderNoMoreCards={renderNoMoreCards}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
