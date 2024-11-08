// Problem no - 6:

// Defining interface
interface Profile {
  name: string;
  age: number;
  email: string;
}

// Updating and returning a Profile based on parameter
function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
  return { ...profile, ...updates };
}
