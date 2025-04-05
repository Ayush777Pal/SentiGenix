import { Stack, Box, Avatar, Typography } from "@mui/material";

const teamMembers = [
  {
    name: "Abhinav",
    contribution: "Frontend",
    branch: "CSE",
    rollNo: "31",
    image: "path-to-abhinav-image",
  },
  {
    name: "Aditya",
    contribution: "Backend",
    branch: "CSE",
    rollNo: "32",
    image: "path-to-aditya-image",
  },
  {
    name: "Ayush",
    contribution: "Full Stack",
    branch: "CSE",
    rollNo: "33",
    image: "path-to-ayush-image",
  },
  {
    name: "Rahul",
    contribution: "UI/UX",
    branch: "CSE",
    rollNo: "34",
    image: "path-to-rahul-image",
  },
];

export default function TeamSection() {
  return (
    <Stack direction="column" spacing={5}>
      {Array(1)
        .fill()
        .map((_, index) => (
          <Stack key={index} direction={{ lg: "row", xs: "column" }} spacing={{ lg: 20, xs: 5 }}>
            {teamMembers.map((member) => (
              <Box
                key={member.rollNo}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 200,
                  padding: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: "background.paper",
                }}
              >
                <Avatar src={member.image} alt={member.name} sx={{ width: 80, height: 80, marginBottom: 2 }} />
                <Typography variant="h6" fontWeight="bold">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contribution: {member.contribution}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Branch: {member.branch}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Roll No: {member.rollNo}
                </Typography>
              </Box>
            ))}
          </Stack>
        ))}
    </Stack>
  );
}
