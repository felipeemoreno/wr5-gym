import React, { ComponentProps } from "react"
import { Image } from "@gluestack-ui/themed"

type Props = ComponentProps<typeof Image>

const UserPhoto: React.FC<Props> = ({ ...rest }) => {
  return (
    <Image
      backgroundColor="$gray500"
      rounded="$full"
      borderColor="$gray400"
      borderWidth="$2"
      {...rest}
    />
  )
}

export default UserPhoto
