import { PATH_NAMES } from './navigation';
import { EHeaderType } from '../enums/EHeaderType';

export const HEADER_TYPE_MAP = {
  [PATH_NAMES.HOME]: EHeaderType.LIGHT,
  [PATH_NAMES.ABOUT_US]: EHeaderType.DARK,
  [PATH_NAMES.PROJECTS]: EHeaderType.DARK,
  [PATH_NAMES.PARTNERS]: EHeaderType.DARK,
}
