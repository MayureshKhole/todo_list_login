import React from "react";
import { Container, Heading, Button } from "@chakra-ui/react";
import { AddTodo } from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import VisibilityFilter from "../../components/VisibilityFilter";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/");
  };

  return (
    <Container maxW="container.sm">
      <Heading my="4">TodoList</Heading>
      <AddTodo></AddTodo>
      <TodoList />
      <VisibilityFilter></VisibilityFilter>
      <Container centerContent>
        <Button colorScheme="red" onClick={logoutHandler} my="4">
          Log Out
        </Button>
      </Container>
    </Container>
  );
}

export default Home;
