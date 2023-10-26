import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import ExploreBar from '../../components/ExploreBar/ExploreBar';
import {ScrollView, View} from 'react-native';
import ExploreList from '../../components/ExploreList/ExploreList';
import {IExploreData, IPromotedData} from '../../dto/ListsDto';
import {SafeAreaView} from 'react-native-safe-area-context';
import PromotedList from '../../components/PromotedList/PromotedList';
const AppreciationAward = () => {
  const PromotedArray: IPromotedData[] = [
    {
      status: 'Selling fast',
      name: 'DJ Max - Live 2023!',
      description:
        'Don’t miss the chance to hear DJ Max and his new album ‘Rock the stage’. ',
      preSaleData: 'Presale ends on 02/02/2023',
      contentData: '',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/aa64/7a38/1fd0294b26b7808aa2e210fc8b70a985?Expires=1699228800&Signature=SKmmxjjItLx4mK-Krv9Wcs3J9ps2e2YjWgvGVo-t3trQoHy0b58m2TDH0XZcHnzly~ZsO4rNxFetHbzyWawCOADsGf2L1BOLAYBP1yRkHkcG-FlTAyEygZeXbjf9S1~hLlyOl-egpgagvyC83z2doL5kWdiwHp7QnqhXLePsbAjZc-ZzTc5RIn2ItB9rMwgmOhnRjE9MLWFloNGuGuoTfbwMJ3zNgQZ9DdrVW1kOflo-X882OvUf4Led7K~sc4Bx34atMkyv8zXb1Z9hWyIviRu0EPPbrbdpsfKqk-z3FmSGLXpaatJwEiKtGxnRslu4fN~hD5R5TdlbUpGVeBu6FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];
  const ExploreArray: IExploreData[] = [
    {
      name: 'Andy Pitcher',
      preSaleData: 'Presale ends on 04/02/2023',
      place: 'Riyadh',
      date: '02/04/2023',
      time: '20:00',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/aa64/7a38/1fd0294b26b7808aa2e210fc8b70a985?Expires=1699228800&Signature=SKmmxjjItLx4mK-Krv9Wcs3J9ps2e2YjWgvGVo-t3trQoHy0b58m2TDH0XZcHnzly~ZsO4rNxFetHbzyWawCOADsGf2L1BOLAYBP1yRkHkcG-FlTAyEygZeXbjf9S1~hLlyOl-egpgagvyC83z2doL5kWdiwHp7QnqhXLePsbAjZc-ZzTc5RIn2ItB9rMwgmOhnRjE9MLWFloNGuGuoTfbwMJ3zNgQZ9DdrVW1kOflo-X882OvUf4Led7K~sc4Bx34atMkyv8zXb1Z9hWyIviRu0EPPbrbdpsfKqk-z3FmSGLXpaatJwEiKtGxnRslu4fN~hD5R5TdlbUpGVeBu6FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: ' Pitcher',
      preSaleData: 'Presale ends on 04/02/2023',
      place: 'Riyadh',
      date: '02/04/2023',
      time: '20:00',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/aa64/7a38/1fd0294b26b7808aa2e210fc8b70a985?Expires=1699228800&Signature=SKmmxjjItLx4mK-Krv9Wcs3J9ps2e2YjWgvGVo-t3trQoHy0b58m2TDH0XZcHnzly~ZsO4rNxFetHbzyWawCOADsGf2L1BOLAYBP1yRkHkcG-FlTAyEygZeXbjf9S1~hLlyOl-egpgagvyC83z2doL5kWdiwHp7QnqhXLePsbAjZc-ZzTc5RIn2ItB9rMwgmOhnRjE9MLWFloNGuGuoTfbwMJ3zNgQZ9DdrVW1kOflo-X882OvUf4Led7K~sc4Bx34atMkyv8zXb1Z9hWyIviRu0EPPbrbdpsfKqk-z3FmSGLXpaatJwEiKtGxnRslu4fN~hD5R5TdlbUpGVeBu6FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: ' Andy',
      preSaleData: 'Presale ends on 04/02/2023',
      place: 'Riyadh',
      date: '02/04/2023',
      time: '20:00',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/aa64/7a38/1fd0294b26b7808aa2e210fc8b70a985?Expires=1699228800&Signature=SKmmxjjItLx4mK-Krv9Wcs3J9ps2e2YjWgvGVo-t3trQoHy0b58m2TDH0XZcHnzly~ZsO4rNxFetHbzyWawCOADsGf2L1BOLAYBP1yRkHkcG-FlTAyEygZeXbjf9S1~hLlyOl-egpgagvyC83z2doL5kWdiwHp7QnqhXLePsbAjZc-ZzTc5RIn2ItB9rMwgmOhnRjE9MLWFloNGuGuoTfbwMJ3zNgQZ9DdrVW1kOflo-X882OvUf4Led7K~sc4Bx34atMkyv8zXb1Z9hWyIviRu0EPPbrbdpsfKqk-z3FmSGLXpaatJwEiKtGxnRslu4fN~hD5R5TdlbUpGVeBu6FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <ExploreBar headerText="Promoted" hideFilter />
        <PromotedList promotedList={PromotedArray} />
        <ExploreBar headerText="Explore" />
        <ExploreList exploreList={ExploreArray} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default AppreciationAward;
