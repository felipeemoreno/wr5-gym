import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import {
  VStack,
  Center,
  Image,
  Text,
  Heading,
  ScrollView,
  useToast,
} from "@gluestack-ui/themed"
import { useAuth } from "@hooks/useAuth"

import { useNavigation } from "@react-navigation/native"

import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Input } from "@components/Input"
import Button from "@components/Button"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"
import { AppError } from "@utils/AppError"
import { ToastMessage } from "@components/ToastMessage"
import { useState } from "react"

type FormDataProps = {
  email: string
  password: string
}

const signInSchema = yup.object({
  email: yup.string().required("E-mail é obrigatório."),
  password: yup.string().required("Senha é obrigatória."),
})

export const SignIn: React.FC = () => {
  const { signIn } = useAuth()
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const toast = useToast()

  const [isLoading, setIsLoading] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  })

  const handleSignIn = async ({ email, password }: FormDataProps) => {
    try {
      setIsLoading(true)
      await signIn(email, password)
      // setIsLoading(false) testar quando tiver a mudança de rota
    } catch (error) {
      const isAppError = error instanceof AppError

      const title = isAppError
        ? error.message
        : "Não foi possível entrar, tente novamente mais tarde."

      setIsLoading(false)

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="error"
            title={title}
            description=""
            onClose={() => toast.close(id)}
          />
        ),
      })
    }
  }

  const handleNewAccount = async () => {
    navigation.navigate("SignUp")
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          w="$full"
          h={624}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />

            <Text color="$gray100" fontSize="$sm">
              Treine sua mente e o seu corpo.
            </Text>
          </Center>

          <Center gap="$2">
            <Heading color="$gray100">Acesse a conta</Heading>

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            ></Controller>

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            ></Controller>

            <Button
              title="Acessar"
              onPress={handleSubmit(handleSignIn)}
              isLoading={isLoading}
            />
          </Center>

          <Center flex={1} justifyContent="flex-end" mt="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem acesso?
            </Text>
            <Button
              title="Criar Conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
