import {
  Stack,
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
  Container,
} from "@mui/material"
import { FormEvent, useState } from "react"

const Mina = ({ name = "Madis" }) => {
  const hobbies = [
    "Magan"
    
  ]

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h3">{name}</Typography>
            <CTA />
            <Typography variant="h3">My hobbies are: </Typography>
            <List>
              {hobbies.map(hobby => (
                <ListItem>{hobby}</ListItem>
              ))}
            </List>
            <ContactForm />
          </Stack>
        </Box>
      </Container>
    </>
  )
}

const CTA = () => {
  return (
    <Container maxWidth="sm">
      <Button
        variant="contained"
        type="submit"
        onClick={() => alert("You have joined our ...")}
      >
        Join Now!
      </Button>
    </Container>
  )
}
const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(contactForm)
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactForm(prevContactForm => ({
      ...prevContactForm,
      [event.target.name]: event.target.value,
    }))
  }
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {/* <Typography variant="h5">Name</Typography> */}

          <TextField
            variant="outlined"
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          {/* <Typography variant="h5">Email</Typography> */}
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
          />

          {/* <Typography variant="h5">Message</Typography> */}
          <TextField
            variant="outlined"
            label="Message"
            placeholder="Enter your message"
            multiline
            rows={6}
            name="message"
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="outlined"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  )
}

export default Mina
