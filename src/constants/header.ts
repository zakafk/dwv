import { PATH_NAMES } from './navigation';
import { THeaderType } from '../enums/THeaderType';

export const HEADER_TYPE_MAP = {
  [PATH_NAMES.HOME]: THeaderType.LIGHT,
  [PATH_NAMES.ABOUT_US]: THeaderType.DARK,
}
