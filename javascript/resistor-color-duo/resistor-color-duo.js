const COLORS = "black brown red orange yellow green blue violet grey white".split(' ')

export const decodedValue = (colors) => {
  return colors
    .map( i => COLORS.indexOf(i) ) // ['brown','green','orange'] => ['1','5','3']
    .join('')                      // ['1','5','3'] => '153'
    .substring(0,2)                // '153' => '15' 
    * 1;                           // '15' => 15
}