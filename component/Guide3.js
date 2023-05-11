import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SwiperView from "react-native-swiper-view";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const Guide3 = () => {
  return (
    //Here is Guide 1
    <SafeAreaView>
      <SwiperView>
        <View style={styles.welcome1}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.groupChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.groupItem, styles.textPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={styles.groupInner}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/vector-1.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View style={[styles.rectangleView, styles.rectangleLayout]} />
              <Text
                style={[styles.text, styles.textPosition]}
              >{`간단한 일상 대화만으로
원하는 시설 정보만 확인하기`}</Text>
            </View>
          </View>
          <View style={styles.textbox1Parent}>
            <View style={styles.textbox1}>
              <View style={[styles.textbox11, styles.textboxShadowBox]}>
                <Text
                  style={[styles.textExample, styles.pmTypo]}
                >{`목동의 실내 놀이시설을
인기순으로 보여드릴게요!`}</Text>
              </View>
              <Text style={[styles.pm, styles.pmTypo]}>10:30 pm</Text>
            </View>
            <View style={[styles.textbox2, styles.textPosition]}>
              <View style={[styles.textbox12, styles.textboxShadowBox]}>
                <Text style={[styles.hiText, styles.hiTextClr]}>
                  목동 아이들 실내 놀이 공간
                </Text>
              </View>
              <Text style={[styles.pm, styles.pmTypo]}>10:30 pm</Text>
            </View>
          </View>
          <View style={styles.imgFrame}>
            <View style={[styles.facilityImgBox, styles.facilityLayout]}>
              <Image
                style={[styles.imageTrayIcon, styles.imageIconPosition]}
                resizeMode="cover"
                source={require("../assets/image-tray.png")}
              />
              <Image
                style={styles.facilityImageIcon}
                resizeMode="cover"
                source={require("../assets/facility-image.png")}
              />
              <Text
                style={[styles.nameOfFacility, styles.hiTextClr]}
              >{`똑똑블럭 이마트
목동점`}</Text>
            </View>
            <View style={[styles.facilityImgBox1, styles.facilityLayout]}>
              <Image
                style={[styles.imageTrayIcon, styles.imageIconPosition]}
                resizeMode="cover"
                source={require("../assets/image-tray.png")}
              />
              <Image
                style={styles.facilityImageIcon}
                resizeMode="cover"
                source={require("../assets/facility-image1.png")}
              />
              <Text style={[styles.nameOfFacility, styles.hiTextClr]}>
                리틀마운틴 행복한 백화점 목동점
              </Text>
            </View>
            <View style={[styles.facilityImgBox2, styles.facilityLayout]}>
              <Image
                style={[styles.imageTrayIcon2, styles.imageIconPosition]}
                resizeMode="cover"
                source={require("../assets/image-tray.png")}
              />
              <Image
                style={styles.facilityImageIcon}
                resizeMode="cover"
                source={require("../assets/facility-image2.png")}
              />
              <Text style={[styles.nameOfFacility, styles.hiTextClr]}>
                플레이타임 현대백화점 목동점
              </Text>
            </View>
          </View>
        </View>
        {/* //Here is Guide 2 */}
        <View style={styles.welcome2}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.groupChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={styles.groupItem}
              resizeMode="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={styles.groupInner}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <View style={[styles.vectorParent, styles.vectorLayout]}>
              <Image
                style={[styles.vectorIcon, styles.textPosition]}
                resizeMode="cover"
                source={require("../assets/vector-11.png")}
              />
              <View style={styles.rectangleParent}>
                <View style={styles.rectangleView} />
                <Text
                  style={[styles.text, styles.textPosition]}
                >{`자세한 코멘트 선택으로
아이에게 딱 맞는 장소 찾기`}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.textbox1Parent, styles.textbox1Position]}>
            <View style={styles.textbox1}>
              <View style={styles.textboxShadowBox1}>
                <Text style={[styles.textExample, styles.textTypo]}>
                  자녀의 연령대를 선택해주세요.
                </Text>
              </View>
              <Text style={styles.pm}>10:30 pm</Text>
            </View>
            <View style={[styles.textbox2, styles.textboxFlexBox]}>
              <View style={[styles.textbox12, styles.textboxShadowBox]}>
                <Text style={[styles.hiText, styles.textTypo]}>
                  5-7세 초등학생
                </Text>
              </View>
              <Text style={styles.pm}>10:30 pm</Text>
            </View>
            <View style={[styles.selectBox, styles.selectShadowBox]}>
              <Text style={[styles.textExample, styles.textTypo]}>
                5-7세 어린이
              </Text>
            </View>
            <View style={[styles.selectBox1, styles.selectShadowBox]}>
              <Text style={styles.textOfChoice1}>8-13세 초등학생</Text>
            </View>
          </View>
          <View style={[styles.textbox1Group, styles.textbox1Position]}>
            <View style={styles.textbox1}>
              <View style={styles.textboxShadowBox1}>
                <Text style={[styles.textExample, styles.textTypo]}>
                  아이와 가장 맞는 키워드를 선택해주세요.
                </Text>
              </View>
              <Text style={styles.pm}>10:30 pm</Text>
            </View>
            <View style={[styles.textbox21, styles.textboxFlexBox]}>
              <View style={[styles.textbox15, styles.textboxShadowBox]}>
                <Text style={[styles.hiText, styles.textTypo]}>
                  운동을 좋아하는
                </Text>
              </View>
              <Text style={styles.pm}>10:30 pm</Text>
            </View>
            <View style={[styles.selectBox2, styles.selectShadowBox]}>
              <Text style={[styles.textExample, styles.textTypo]}>
                책을 좋아하는
              </Text>
            </View>
            <View style={[styles.selectBox3, styles.selectShadowBox]}>
              <Text style={[styles.textExample, styles.textTypo]}>
                그림 그리기를 좋아하는
              </Text>
            </View>
            <View style={[styles.selectBox4, styles.selectShadowBox]}>
              <Text style={[styles.textExample, styles.textTypo]}>
                운동을 좋아하는
              </Text>
            </View>
            <View style={[styles.selectBox5, styles.selectShadowBox]}>
              <Text style={[styles.textExample, styles.textTypo]}>
                숲을 좋아하는
              </Text>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.text1}>시작하기</Text>
          </View>
        </View>

        {/* Here is Starting Page */}
        <View style={styles.startpage}>
          <Image
            style={[styles.startpageChild, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector-1.png")}
          />
          <Image
            style={[styles.startpageItem, styles.startpagePosition]}
            resizeMode="cover"
            source={require("../assets/vector-2.png")}
          />
          <Image
            style={[styles.startpageInner, styles.startpagePosition]}
            resizeMode="cover"
            source={require("../assets/vector-4.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector-3.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>{`채팅 전송 한 번으로
아이를 위한
최적의 선택을
얻어 보세요.`}</Text>
          <View style={[styles.wrapper, styles.textFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>지금 시작하기</Text>
          </View>
        </View>
      </SwiperView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    left: 0,
    position: "absolute",
  },
  startpagePosition: {
    width: 360,
    top: 0,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  startpageChild: {
    top: 570,
    width: 513,
    height: 395,
  },
  startpageItem: {
    height: 131,
  },
  startpageInner: {
    height: 170,
  },
  vectorIcon: {
    top: 588,
    width: 437,
    height: 403,
  },
  text: {
    top: 278,
    left: 82,
    fontSize: 24,
    color: Color.black,
    display: "flex",
    alignItems: "flex-end",
    width: 196,
    height: 134,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  text1: {
    fontSize: FontSize.size_xl,
    color: Color.white,
  },
  wrapper: {
    top: 439,
    left: 102,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.basePrimary,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 49,
    paddingHorizontal: 20,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
  startpage: {
    backgroundColor: Color.tutoback,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 122,
    position: "absolute",
  },
  rectangleLayout: {
    width: 282,
    position: "absolute",
  },
  textboxShadowBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
  },
  pmTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  hiTextClr: {
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
  },
  facilityLayout: {
    width: 136,
    height: 180,
    top: 0,
    position: "absolute",
  },
  imageIconPosition: {
    opacity: 0.8,
    left: "-12.5%",
    bottom: "-11.48%",
    top: "-8.89%",
    height: "120.37%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 184,
    left: 195,
    width: 185,
    height: 185,
    position: "absolute",
  },
  groupItem: {
    left: 153,
    width: 99,
    height: 99,
  },
  groupInner: {
    top: 17,
    left: 277,
    width: 248,
    height: 248,
    position: "absolute",
  },
  ellipseIcon: {
    top: 28,
    width: 220,
    height: 220,
  },
  vectorIcon: {
    top: 301,
    width: 513,
    height: 395,
  },
  rectangleView: {
    top: 40,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.green_100,
    height: 23,
    left: 0,
  },
  text: {
    left: 25,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    textAlign: "center",
    color: Color.black,
  },
  rectangleParent: {
    top: 449,
    left: 161,
    height: 63,
  },
  ellipseParent: {
    top: 147,
    left: -122,
    width: 603,
    height: 696,
    position: "absolute",
  },
  textExample: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
    color: Color.black,
  },
  textbox11: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.baseLight,
    flexDirection: "row",
    alignItems: "center",
  },
  pm: {
    fontSize: FontSize.size_8xs,
    color: Color.baseDark,
    display: "none",
    marginTop: 1,
    textAlign: "left",
  },
  textbox1: {
    top: 52,
    width: 161,
    height: 43,
    justifyContent: "center",
    left: 0,
    position: "absolute",
  },
  hiText: {
    textAlign: "right",
    fontSize: FontSize.size_mini,
  },
  textbox12: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: Color.basePrimary,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textbox2: {
    left: 69,
    width: 193,
    height: 31,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textbox1Parent: {
    top: 139,
    width: 262,
    height: 95,
    left: 49,
    position: "absolute",
  },
  imageTrayIcon: {
    width: "125%",
    right: "-12.5%",
  },
  facilityImageIcon: {
    height: "100%",
    width: "99.26%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nameOfFacility: {
    width: "88.24%",
    top: "73.89%",
    left: "5.88%",
    fontSize: FontSize.size_sm,
    display: "flex",
    alignItems: "flex-end",
    textAlign: "left",
    position: "absolute",
  },
  facilityImgBox: {
    left: 0,
  },
  facilityImgBox1: {
    left: 148,
  },
  imageTrayIcon2: {
    width: "102.94%",
    right: "9.56%",
  },
  facilityImgBox2: {
    left: 296,
  },
  imgFrame: {
    top: 257,
    width: 297,
    height: 180,
    left: 49,
    position: "absolute",
  },
  welcome1: {
    backgroundColor: Color.tutoback,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  vectorLayout: {
    height: 395,
    width: 513,
  },
  textPosition: {
    left: 32,
    top: 0,
    position: "absolute",
  },
  textbox1Position: {
    width: 262,
    left: 49,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
  },
  textboxFlexBox: {
    alignItems: "flex-end",
    height: 31,
    width: 166,
    left: 96,
    justifyContent: "center",
    position: "absolute",
  },
  textboxShadowBox: {
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.basePrimary,
    alignItems: "flex-end",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    justifyContent: "center",
  },
  selectShadowBox: {
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  groupChild: {
    top: 184,
    left: 195,
    width: 185,
    height: 185,
    position: "absolute",
  },
  groupItem: {
    left: 153,
    width: 99,
    height: 99,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    top: 17,
    left: 277,
    width: 248,
    height: 248,
    position: "absolute",
  },
  ellipseIcon: {
    top: 28,
    left: 122,
    width: 220,
    height: 220,
    position: "absolute",
  },
  vectorIcon: {
    height: 395,
    width: 513,
  },
  rectangleView: {
    top: 40,
    backgroundColor: Color.green_100,
    height: 23,
    borderRadius: Border.br_11xl,
    left: 0,
    width: 282,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    textAlign: "center",
    color: Color.black,
  },
  rectangleParent: {
    top: 148,
    left: 71,
    height: 63,
    width: 282,
    position: "absolute",
  },
  vectorParent: {
    top: 301,
    left: 90,
    width: 513,
    position: "absolute",
  },
  ellipseParent: {
    top: 147,
    left: -122,
    width: 603,
    height: 696,
    position: "absolute",
  },
  textExample: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
  },
  textboxShadowBox1: {
    alignItems: "center",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.baseLight,
    borderBottomLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    flexDirection: "row",
  },
  pm: {
    fontSize: FontSize.size_8xs,
    color: Color.baseDark,
    display: "none",
    marginTop: 1,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  textbox1: {
    width: 161,
    height: 43,
    justifyContent: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  hiText: {
    textAlign: "right",
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
  },
  textbox12: {
    backgroundColor: Color.basePrimary,
  },
  textbox2: {
    top: 95,
  },
  selectBox: {
    top: 46,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  textOfChoice1: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
  },
  selectBox1: {
    top: 47,
    left: 113,
  },
  textbox1Parent: {
    top: 131,
    height: 126,
  },
  textbox15: {
    backgroundColor: Color.basePrimary,
  },
  textbox21: {
    top: 191,
  },
  selectBox2: {
    top: 46,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  selectBox3: {
    top: 95,
    left: 0,
  },
  selectBox4: {
    left: 115,
    top: 46,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  selectBox5: {
    top: 144,
    left: 0,
  },
  textbox1Group: {
    top: 271,
    height: 222,
  },
  text1: {
    fontSize: 25,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "left",
  },
  wrapper: {
    top: 691,
    paddingHorizontal: 38,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.basePrimary,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    left: 90,
    position: "absolute",
    overflow: "hidden",
  },
  welcome2: {
    backgroundColor: Color.tutoback,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Guide3;
