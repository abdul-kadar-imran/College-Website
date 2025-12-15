export interface Club {
  contactLinks: any;
  id: string;
  name: string;
  category: 'Academic' | 'Cultural' | 'Sports & Fitness' | 'Social/Volunteer';
  logo: string;
  description: string;
  longDescription: string;
  coreTeam: TeamMember[];
  events: string[];
  gallery: string[];
  joinLink: string;
  memberCount: number;
  established: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  email: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  club: string;
  image: string;
  category: string;
  isUpcoming: boolean;
  registrationLink?: string;
  gallery?: string[];
  summary?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: 'Event' | 'Newsletter' | 'General';
  image?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  club: string;
  event: string;
  year: string;
  type: 'image' | 'video';
}