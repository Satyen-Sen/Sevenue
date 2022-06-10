import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/components/Link';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography component="h1" gutterBottom variant="h4">
          Next.js example
        </Typography>
        <Button component={Link} href="/" noLinkStyle variant="contained">
          Go to the main page
        </Button>
      </Box>
    </Container>
  );
}
