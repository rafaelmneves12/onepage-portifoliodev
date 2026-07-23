export interface NavItem {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  shortBio: string;
  longBio: string;
  location: string;
  photoUrl: string;
  resumeUrl: string;
  nav: NavItem[];
}