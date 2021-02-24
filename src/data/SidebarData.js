import MessageIcon from "@material-ui/icons/Message";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleIcon from "@material-ui/icons/People";
import AppsIcon from "@material-ui/icons/Apps";

export const sidebarItems = [
  {
    text: "Thread",
    icon: <MessageIcon />,
  },
  {
    text: "All DMs",
    icon: <InboxIcon />,
  },
  {
    text: "Mentions & Reactions",
    icon: <DraftsIcon />,
  },
  {
    text: "Save Items",
    icon: <BookmarkBorderIcon />,
  },
  {
    text: "Peoples & Groups",
    icon: <PeopleIcon />,
  },
  {
    text: "More",
    icon: <AppsIcon />,
  },
];

export const channels = [
  {
    text: "welcome",
  },
  {
    text: "general",
  },
  {
    text: "introduce",
  },
  {
    text: "announcements",
  },
];
