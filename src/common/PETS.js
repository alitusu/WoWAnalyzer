import indexById from './indexById';

// courtesy of @wopr on WoWAnalyzer Discord

const PETS = {
  WILDIMP_ON_DREADSTALKER: {
    id: 99737,
    name: 'Wild Imp riding Dreadstalker',
    baseDuration: 12,
  },
  GRIMOIRE_FELGUARD: {
    id: 17252,
    name: 'Grimoire: Felguard',
    baseDuration: 25,
  },
  WILDIMP: {
    id: 55659,
    name: 'Wild Imp',
    baseDuration: 12,
  },
  DREADSTALKER: {
    id: 98035,
    name: 'Dreadstalker',
    baseDuration: 12,
  },
  DOOMGUARD: {
    id: 11859,
    name: 'Doomguard',
    baseDuration: 25,
  },
  INFERNAL: {
    id: 89,
    name: 'Infernal',
    baseDuration: 25,
  },
  DARKGLARE: {
    id: 103673,
    name: 'Darkglare',
    baseDuration: 12,
  },

  // priest:
  SHADOWFIEND: {
    id: 19668,
    name: 'Shadowfiend',
  },
  SHADOWFIEND_SHA_GLYPH: {
    id: 67235,
    name: 'Shadowfiend',
  },
  MINDBENDER: {
    id: 62982,
    name: 'Mindbender',
  },
  VOID_TENDRIL: {
    id: 98167,
    name: 'Void Tendril',
  },
};

export default indexById(PETS);
