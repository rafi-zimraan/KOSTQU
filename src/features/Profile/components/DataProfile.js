import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {icons, images} from '../../../assets';
import {colors} from '../../../utils';

export default function DataProfile() {
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    // Fungsi untuk memeriksa apakah gambar pengguna tersedia di BE
    const checkUserImage = () => {
      const isUserImageAvailable = true; // Ganti dengan logika pemanggilan BE yang sesungguhnya
      if (isUserImageAvailable) {
        setUserImage(images.Img_Friends);
      } else {
        setUserImage(null);
      }
    };

    checkUserImage();
  }, []);

  return (
    <SafeAreaView style={styles.Container}>
      {/* Title Email & Name */}
      <View style={styles.bodyTitle}>
        {userImage ? (
          <Image source={userImage} style={styles.ImgProfile} />
        ) : (
          <Icon name="account-circle" size={80} />
        )}
        <View style={styles.ViewTextUser}>
          <Text style={styles.TextTitle}>Username</Text>
          <Text style={styles.TextEmail}>Example@gmail.com</Text>
        </View>
        <Image source={icons.IconRight} style={styles.iconRight} />
      </View>

      {/* Riwayat */}
      <View style={{margin: 15}}>
        <View style={styles.ContentRiwayat}>
          <Image source={icons.IconHistory} style={styles.IconHistory} />
          <View style={styles.ViewTextUser}>
            <Text style={styles.TxtRiwayatPengajuan}>
              Riwayat pengajuan sewa
            </Text>
          </View>
        </View>
        <View style={styles.ContentRiwayat}>
          <Image source={icons.IconHistory} style={styles.IconHistory} />
          <View style={styles.ViewTextUser}>
            <Text style={styles.TxtRiwayatPengajuan}>
              Riwayat kost terdahulu
            </Text>
          </View>
        </View>

        {/* Line */}
        <View style={styles.separator} />
        <View style={styles.ContentRiwayat}>
          <Image
            source={icons.IconRiwayat}
            style={styles.IconRiwayatTransaksi}
          />
          <View style={styles.ViewTextUser}>
            <Text style={styles.TxtRiwayatPengajuan}>Riwayat transaksi</Text>
          </View>
        </View>
        <View style={styles.ContentRiwayat}>
          <Image source={icons.IconPoin} style={styles.IconPoin} />
          <View style={styles.ViewTextUser}>
            <Text style={styles.TxtRiwayatPengajuan}>KampusPoin</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.ContentRiwayat}>
          <Image source={icons.IconVoucher} style={styles.IconHistory} />
          <View style={styles.ViewTextUser}>
            <Text style={styles.TxtRiwayatPengajuan}>Voucher saya</Text>
          </View>
        </View>
      </View>

      {/* Barang & Jasa */}
      <View style={styles.bodyTitle}>
        <Image source={icons.IconShop} style={styles.IconShop} />
        <View style={styles.ViewTextUser}>
          <Text style={styles.TxtRiwayatPengajuan}>Barang & jasa</Text>
        </View>
      </View>

      {/* Verifikasi Akun */}
      <View style={styles.bodyTitle}>
        <Image source={icons.IconUnion} style={styles.IconUnion} />
        <View style={styles.ViewTextUser}>
          <Text style={styles.TxtRiwayatPengajuan}>Verifikasi akun</Text>
        </View>
      </View>

      {/* Syarat & Help */}
      <View style={{margin: 15}}>
        <View style={styles.ContentRiwayat}>
          <Image source={icons.IconHeadphones} style={styles.IconHistory} />
          <View style={styles.ViewTextUser}>
            <Text style={styles.TxtRiwayatPengajuan}>Kampus Kos Help</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.ContentRiwayat}>
          <Image source={icons.IconShieldNetwork} style={styles.IconSyarat} />
          <View style={styles.ViewTextUser}>
            <Text style={styles.TxtRiwayatPengajuan}>Syarat dan ketentuan</Text>
          </View>
        </View>
      </View>

      {/* Logout */}
      <View style={styles.bodyTitle}>
        <Image source={icons.IconExit} style={styles.IconExit} />
        <View style={styles.ViewTextUser}>
          <Text style={styles.TxtRiwayatPengajuan}>Log Out </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  IconSyarat: {
    height: 34,
    width: 34,
  },
  IconRiwayatTransaksi: {
    height: 34,
    width: 34,
  },
  IconExit: {
    height: 34,
    width: 34,
  },
  IconUnion: {
    height: 34,
    width: 34,
  },
  IconShop: {
    height: 34,
    width: 34,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.DarkGray,
  },
  IconPoin: {
    height: 38,
    width: 38,
  },
  ImgProfile: {
    height: 70,
    width: 70,
    borderRadius: 40,
  },
  IconHistory: {
    height: 34,
    width: 34,
  },
  iconRight: {
    height: 30,
    width: 25,
  },
  TxtRiwayatPengajuan: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.black,
  },
  ContentRiwayat: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 100,
    // margin: 15,
    paddingHorizontal: 10,
  },
  TextEmail: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.DarkGray,
  },
  TextTitle: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.black,
  },
  ViewTextUser: {
    flex: 1,
    marginLeft: 10,
  },
  bodyTitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 100,
    margin: 15,
    paddingHorizontal: 10,
  },
  Container: {
    flex: 1,
  },
});
