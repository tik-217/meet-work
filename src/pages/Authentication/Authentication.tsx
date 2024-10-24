import {
  Container,
  Title,
  Text,
  Anchor,
  Paper,
  PasswordInput,
  Group,
  TextInput,
  Checkbox,
  Button,
} from "@mantine/core";

import styles from "./Authentication.module.scss";

export const Authentication = () => {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={styles.title}>
        Приветствую!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Нет аккаунта?{" "}
        <Anchor size="sm" component="button">
          Создать аккаунт
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Зпомнить меня" />
          <Anchor component="button" size="sm">
            Зыбали пароль?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Войти
        </Button>
      </Paper>
    </Container>
  );
};
