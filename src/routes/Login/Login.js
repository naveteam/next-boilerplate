import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

import { Column, Row, Button, Text } from 'components'
import { useAuth } from 'hooks'

const defaultValues = { email: '', password: '' }

const Login = () => {
  const { register, control, handleSubmit, formState } = useForm({ defaultValues })
  const { login } = useAuth()

  return (
    <form onSubmit={handleSubmit(login)}>
      <Row alignItems='center'>
        <Column>
          <Text as='label' variant='big' htmlFor='email'>
            Email
          </Text>
          <input type='text' id='email' name='email' placeholder='Insira seu email' ref={register} />
        </Column>
        <Column>
          <Text as='label' variant='big' htmlFor='email'>
            Senha
          </Text>
          <input type='password' id='password' name='password' placeholder='Insira sua senha' ref={register} />
        </Column>
        <Button type='submit' disabled={formState.isSubmitting} p={8} px={16}>
          ENTRAR
        </Button>
      </Row>
      <DevTool control={control} />
    </form>
  )
}

export default Login
