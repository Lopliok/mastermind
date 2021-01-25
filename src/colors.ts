
export enum COLORS {
    GREEN,
    RED,
    BLUE,
    YELLOW,
    BROWN,
    PURPLE,
    ORANGE,
    BLACK,
    PINK
}

export const colorTranslations = {
    [COLORS.BLACK]: '#000',
    [COLORS.GREEN]: 'green',
    [COLORS.RED]: 'red',
    [COLORS.YELLOW]: 'yellow',
    [COLORS.BROWN]: 'brown',
    [COLORS.PURPLE]: 'purple',
    [COLORS.ORANGE]: 'orange',
    [COLORS.PINK]: 'pink',
    [COLORS.BLUE]: 'blue'

}

export const translateEnum = (en: any, key: any) => {

    if (en[key]) {
        return en[key]
    } else {
        return undefined
    }
}