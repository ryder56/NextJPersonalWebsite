import * as c from './constants';

/**
 * returns the size of the current tailwind container.
 *
 * @param currentWidth current width of window
 * @returns the tailwind container size
 */
export const getTailwindContainerWidth = (currentWidth: number): number => {
    if (currentWidth >= 1536) {
        return c.TWO_XL_TAILWIND_CONTAINER;
    } else if (currentWidth >= 1280) {
        return c.XL_TAILWIND_CONTAINER;
    } else if (currentWidth >= 1024) {
        return c.LG_TAILWIND_CONTAINER;
    } else if (currentWidth >= 768) {
        return c.MD_TAILWIND_CONTAINER;
    } else {
        return c.SM_TAILWIND_CONTAINER;
    }
};