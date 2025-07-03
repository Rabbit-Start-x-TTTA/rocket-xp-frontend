type Event = {
  id: number;
  image: string;
  name: string;
  date: string;
  time: string;
  format: "Online" | "Offline" | "Hybrid";
  participants: number;
  xp: number;
  status: "Active" | "Upcoming" | "Completed"; // adjust as needed
  qrCode: string;
};

const events: Event[] = [
  {
    id: 1,
    image: "",
    name: "Tech Conference 2025",
    date: "2025-07-15",
    time: "09:00 AM",
    format: "Online",
    participants: 150,
    xp: 50,
    status: "Active",
    qrCode: "QR001",
  },
  {
    id: 2,
    image: "",
    name: "Marketing Workshop",
    date: "2025-07-20",
    time: "02:00 PM",
    format: "Offline",
    participants: 75,
    xp: 30,
    status: "Upcoming",
    qrCode: "QR002",
  },
  {
    id: 3,
    image: "",
    name: "Design Meetup",
    date: "2025-07-25",
    time: "06:00 PM",
    format: "Hybrid",
    participants: 200,
    xp: 40,
    status: "Active",
    qrCode: "QR003",
  },
];

export default events;
