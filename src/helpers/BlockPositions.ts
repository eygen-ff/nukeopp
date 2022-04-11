import { ScrollRelationProps } from "../interfaces/AppState";

interface CssFilter {
  filter: string
}
interface FilterProps {
  grayscale: number;
  brightness: number;
  contrast: number;
  blur: number;
  sepia: number;
}
interface HistoryProps {
  marginTop: number,
  position: string,
  top: number
}


class BlockPositions {
    position: number;
    mainClass: string;
    headBlock: string;
    bgFilter: {
      filter: string
    };
    history: {
      marginTop: string,
      position: string,
      top: string
    };
    weaponSlider: {
      number: number
    };
    portraits: {
      opacity: number
    };
    portraitClassName: string;

    constructor(scroll: number) {
      this.position = scroll;
      this.mainClass = this.getMainClass(scroll);
      this.bgFilter = this.getBgFilter(scroll);
      this.headBlock = (20 - (scroll < 700 ? scroll * 0.024 : 19)) + '%';
      this.history = this.getHistoryPosition(scroll);
      this.weaponSlider = this.getWeaponSlider(scroll);
      this.portraits = this.getPortraitsStyle(scroll);
      this.portraitClassName = this.getPortraitsClass(scroll);
    };
    getScrollProps(): ScrollRelationProps {
      return {
        position: this.position,
        class: this.mainClass,
        style: {
          bgFilter: this.bgFilter,
          headBlock: {
            marginTop: this.headBlock
          },
          history: this.history
        },
        weaponSlider: this.weaponSlider,
        portraits: {
          style: this.portraits,
          className: this.portraitClassName
        }
      }
    };
    getMainClass(scroll: number) {
      if (scroll >= 0 && scroll < 100) {
        return 'scroll-01';
      } else if (scroll >= 100 && scroll < 800) {
        return 'scroll-02';
      } else if (scroll >= 800 && scroll < 1700) {
        return 'scroll-03';
      } else if (scroll >= 1700) {
        return 'scroll-04';
      } else {
        return '';
      }
    };
    getBgFilter(scroll: number): CssFilter {
      const x: FilterProps = {
        grayscale: 100,
        brightness: 200,
        contrast: 0,
        blur: 0,
        sepia: 0
      }
      x.brightness = (scroll * 0.1) + 200;
      x.sepia = (scroll * 0.01) ;
      return {filter: `grayscale(${x.grayscale}%) brightness(${x.brightness}%) sepia(${x.sepia}%)`};
    };
    getHistoryPosition(scroll: number) {
      const x: HistoryProps = {
        marginTop: 0,
        position: 'relative',
        top: 0
      }
      if (scroll > 0 ) {
        x.marginTop = 60 - (scroll < 700 ? scroll * 0.08 : 60);
      }
      return {
        marginTop: `${x.marginTop}%`,
        position: `${x.position}`,
        top: `${x.top}px`
      };
    };
    getWeaponSlider(scroll: number) {
      /*if (scroll < 3200) {
        top = ((1500 - (scroll - 1700)) + 'px');
      }*/
      const opacity = (scroll - 1700) * 0.002;
      let leftW1 = '0%';
      if (scroll > 4000) {
        leftW1 = ((4000 - scroll)*0.1) + '%';
      }
      let top = '1vh';
      if (scroll > 4800) {
        top = ((4800 - scroll) * 0.05) + 'vh';
      }
      return {
        isEnable: scroll > 1700,
        number: Math.round((scroll - 2700) * 0.005),
        styleHead: {
          opacity: opacity > 0 ? (opacity <= 1 ? opacity : 1) : 0,
          top: top
        },
        styleW1: {
          opacity: opacity > 0 ? (opacity <= 1 ? opacity : 1) : 0,
          left: leftW1
        },
        styleW2: {
          opacity: opacity > 0 ? (opacity <= 1 ? opacity : 1) : 0,
          left: leftW1
        }
      }
    };
    getPortraitsStyle(scroll: number) {
      let opacity = 0;
      if (scroll > 4900 && scroll < 5500) {
        opacity = (scroll - 4900) * 0.002;
      } else if (scroll >= 5500 && scroll < 5700) {
        opacity = (5700 - scroll) * 0.01;
      }
      if (opacity > 1) {
        opacity = 1;
      }
      if (opacity < 0) {
        opacity = 0;
      }
      return {
        opacity: opacity
      }
    }
    getPortraitsClass(scroll: number) {
      if (scroll > 5500) {
        return 'items rotate';
      }
      return 'items';
    }
  }

export default BlockPositions;