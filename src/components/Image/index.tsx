import { useMemo } from "react";
import { useTokenForTheme } from "../../theming/ThemeProvider";

type ImageProps = {
     src: string;
     width?: number | string;
     height?: number | string;
     fit: 'cover' | 'contain' | 'fill';
     corner: 'rounded' | 'circle' | 'default';
}

const Image = ({
     width,
     height, 
     src, 
     fit,
     corner
}: ImageProps)=>{

     const theme = useTokenForTheme();
     const borderRadius = useMemo(()=>{
          if(corner === 'rounded'){
               return theme.borderRadiusMedium
          }
          if(corner === 'circle'){
               return theme.borderRadiusCircle
          }

          return 0
     }, [theme, corner])

     return <img
     src={src}
     style={{
          width,
          height,
          objectFit: fit,
          borderRadius
     }}
     ></img>
}

export default Image;