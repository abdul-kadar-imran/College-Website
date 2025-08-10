import { Club } from '../types';

export const clubs: Club[] = [
  // 
  {

   
      id: 'Student Council',
    name: 'Student Council',
    category: 'Academic',
    logo: "/img src/logos/sc logo.jpg",
    description: 'The Student Council is the voice of the students, bridging communication.It leads initiatives, supports student welfare, and fosters leadership across campus.',
    longDescription: 'The Student Council serves as the official representative of the student community, ensuring their voices are heard in key decisions.It organizes events, addresses concerns, and works hand-in-hand with faculty and management for a better campus experience.Through leadership, teamwork, and advocacy, the council empowers students to be active contributors to university life.',
    coreTeam: [
      { name: 'Azeez', position: 'Head', image: '/img src/logos/sc logo.jpg', email: 'alex@example.com' },
      { name: 'Harshitha', position: 'Co Head', image: '/img src/logos/sc logo.jpg', email: 'sarah@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/sc logo.jpg', email: 'sarah@example.com' },

    ],
    events: ['Tech Hackathon 2024', 'Python Workshop', 'Code Review Session'],
    gallery: [
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/studentcouncil_crescent/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },
  {
    id: 'Crescent Club of Finance',
    name: 'Crescent Club of Finance',
    category: 'Academic',
    logo: "/img src/logos/ccf logo.jpg",
    description: 'The Crescent Club of Finance empowers students with financial literacy through seminars, workshops, and startup insights.',
    longDescription: 'Crescent Club of Finance aims to bridge the gap between academic knowledge and real-world financial practices.It conducts seminars on investment, personal finance, stock markets, and startup strategies.By inviting industry experts and hosting interactive sessions, the club nurtures financial confidence and entrepreneurial thinking.',
    coreTeam: [
      { name: 'Pathma Priya', position: 'Head', image: '/img src/logos/ccf logo.jpg', email: 'alex@example.com' },
      { name: 'Sumetha', position: 'Co Head', image: '/img src/logos/ccf logo.jpg', email: 'sarah@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/ccf logo.jpg', email: 'sarah@example.com' },

    ],
    events: ['', 'Python Workshop', 'Code Review Session'],
    gallery: [
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/ccf.2k25/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },{
    id: 'Readers Club',
    name: 'Readers Club',
    category: 'Academic',
    logo: "/img src/logos/readers club logo.jpg",
    description: 'The Readers Club promotes a love for reading and language through weekly magazines, discussions, and literary activities.',
    longDescription: 'The Readers Club is a hub for book lovers, writers, and language enthusiasts to engage in thoughtful discussions and creative pursuits.The club publishes weekly magazines featuring student articles, poems, and stories that reflect diverse perspectives.It conducts linguistic games, storytelling sessions, and literary contests to enhance vocabulary and communication skills.',
    coreTeam: [
      { name: 'Alex Johnson', position: 'Head', image: '/img src/logos/readers club logo.jpg', email: 'alex@example.com' },
      { name: 'Sarah Chen', position: 'Co Head', image: '/img src/logos/readers club logo.jpg', email: 'sarah@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/readers club logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Tech Hackathon 2024', 'Python Workshop', 'Code Review Session'],
    gallery: [
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescentreadersclub/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },
  {
    id: 'Crescent Innovationand Startup Club',
    name: 'Crescent Innovationand Startup Club',
    category: 'Academic',
    logo: "/img src/logos/cisc logo.jpg",
    description: 'The Innovation and Startup Club fuels creative thinking and technical exploration through project-based learning and ideation.',
    longDescription: 'The Innovation and Startup Club is a launchpad for students to transform ideas into impactful projects and ventures.It fosters a culture of creativity, design thinking, and problem-solving through regular brainstorming sessions and hackathons.Students are guided in building prototypes, exploring tech trends, and developing business models around their ideas.',
    coreTeam: [
      { name: 'Alex Johnson', position: 'Head', image: '/img src/logos/cisc logo.jpg', email: 'alex@example.com' },
      { name: 'Sarah Chen', position: 'Co Head', image: '/img src/logos/cisc logo.jpg', email: 'sarah@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/cisc logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Tech Hackathon 2024', 'Python Workshop', 'Code Review Session'],
    gallery: [
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/cisc_buildclub/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },
  {
    id: 'Literarian Hub',
    name: 'Literarian Hub',
    category: 'Academic',
    logo: "/img src/logos/lh logo.jpg",
    description: 'Literarian Hub is a creative platform for English literature enthusiasts to explore classic and contemporary works.',
    longDescription: 'Literarian Hub brings together students of the English department to celebrate literature through events like Shakespeare Day, debates, and dramatizations.It encourages critical analysis, public speaking, and artistic expression through poetry slams, book readings, and quizzes.The club fosters a deeper appreciation for English language and literary heritage, both classic and modern.',
    coreTeam: [
      { name: 'Alex Johnson', position: 'Head', image: '/img src/logos/lh logo.jpg', email: 'alex@example.com' },
      { name: 'Sarah Chen', position: 'Co Head', image: '/img src/logos/lh logo.jpg', email: 'sarah@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/lh logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Tech Hackathon 2024', 'Python Workshop', 'Code Review Session'],
    gallery: [
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescent.literarian.hub/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },
  {
    id: 'Cres MUN',
    name: 'Cres MUN',
    category: 'Academic',
    logo: "/img src/logos/cresmun logo.jpg",
    description: 'CRESMUN is the official Model United Nations club of Crescent, nurturing diplomacy, debate, and leadership.',
    longDescription: 'Established in February 2019, CRESMUN is Crescent’s gateway to the international MUN community, promoting global awareness and negotiation skills.The club simulates real-world UN committees, allowing students to represent nations, draft resolutions, and debate pressing global challenges.It develops public speaking, research, and leadership qualities essential for future diplomats and changemakers.',
    coreTeam: [
      { name: 'Alex Johnson', position: 'Head', image: '/img src/logos/cresmun logo.jpg', email: 'alex@example.com' },
      { name: 'Sarah Chen', position: 'Co Head', image: '/img src/logos/cresmun logo.jpg', email: 'sarah@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/cresmun logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Tech Hackathon 2024', 'Python Workshop', 'Code Review Session'],
    gallery: [
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/cres.mun/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },
  {
    id: 'Crescent Technocrats Club',
    name: 'Crescent Technocrats Club',
    category: 'Academic',
    logo: "/img src/logos/ctc logo.jpg",
    description: 'Crescent Technocrats Club was established as the technical club of B S Abdur Rahman Crescent Institute of Science and Technology.',
    longDescription: 'Crescent Technocrats Club was established as the technical club of B S Abdur Rahman Crescent Institute of Science and Technology. The main focus of the club is to get students on board for technical skill improvement through various kind of programs. Within a span of three months Crescent Technocrats Club contributed and conducted various activities.',
    coreTeam: [
      { name: 'Alex Johnson', position: 'Head', image: '/img src/logos/ctc logo.jpg', email: 'alex@example.com' },
      { name: 'Sarah Chen', position: 'Co Head', image: '/img src/logos/ctc logo.jpg', email: 'sarah@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/ctc logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Tech Hackathon 2024', 'Python Workshop', 'Code Review Session'],
    gallery: [
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescent_technocrats/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },
  
  
  // ************************************************cultural cards***********************************************//
  {
    id: 'ISTD-C',
    name: 'ISTD-C',
    category: 'Cultural',
    logo: "/img src/logos/ISTDC logo.jpg",
    description: 'ISTDC is the apex body of all cultural clubs, uniting student talents under one community.It nurtures leadership through its core team.',
    longDescription: 'ISTD-C serves as the central governing body of all cultural activities on campus.With roles like  President, and Vice President, Cultural Secretary and the core team coordinates major events, including the university iconic cultural fest, Orion.ISTDC provides a structured platform for talent management, collaboration, and inter-club synergy.It stands as a symbol of creativity, leadership, and legacy in the university cultural ecosystem.',
    coreTeam: [
      { name: 'Sophie Brown', position: 'President', image: '/img src/logos/ISTDC logo.jpg', email: 'sophie@example.com' },
      { name: 'Michael Davis', position: 'Vice President', image: '/img src/logos/ISTDC logo.jpg', email: 'michael@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/ISTDC logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Blood Donation Drive', 'Beach Cleanup', 'Education Support Program'],
    gallery: [
      'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/istd_crescent/',
    memberCount: 95,
    established: '2019',
    contactLinks: undefined
  },
  {
    id: 'Crescent-Tamil-Mandram',
    name: 'Crescent Tamil Mandram',
    category: 'Cultural',
    logo: "/img src/logos/Ctm logo.jpg",
    description: 'We aim to promote Tamil language and culture among students through debates,oration, poetry, story, essays, and cultural events.',
    longDescription: 'Crescent Tamil Mandram, believe in celebrating the pride of our mother tongue, Tamil. Through debates, poetry,essays, story and cultural events, we strive to create a space where students can explore, express, and embrace the richness of Tamil language, literature, and traditions with passion and purpose.',
    coreTeam: [
      { name: 'Fathima Firdhouse', position: 'Head', image: '/img src/logos/Ctm logo.jpg', email: '@.com' },
      { name: 'Bilal Benzuma', position: 'Co Head', image: '/img src/logos/Ctm logo.jpg', email: '@.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/Ctm logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Sangamam (Intra college)', 'Yaazh (Inter college)','Ilaingar Ilakya Vizha','Vaasippai Nesippom'],
    gallery: [
      'img src/images C/yaazh.jpg',
      'img src/images C/sangamam.jpg',
    ],
    joinLink: 'https://www.instagram.com/crescent_tamil_mandram/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },
  {
    id: 'Crescentian Voice Channel',
    name: 'Crescentian Voice Channel',
    category: 'Cultural',
    logo: "/img src/logos/cvc logo.jpg",
    description: 'Voice Channel is the university’s platform for aspiring RJs and VJs to host shows, podcasts, and campus broadcasts.',
    longDescription: 'Voice Channel Club gives students a stage to explore the world of radio jockeying, video hosting, and live show production.From hosting talk shows and music sessions to podcast series, it builds confidence and communication flair.Its signature event, Retronova, is a vibrant celebration of voice, media, and nostalgia-driven performances.The club cultivates creativity, spontaneity, and charisma through interactive broadcasting and media experiences.',
    coreTeam: [
      { name: 'Maya Patel', position: 'Head', image: '/img src/logos/cvc logo.jpg', email: 'maya@example.com' },
      { name: 'David Kim', position: 'Co Head', image: '/img src/logos/cvc logo.jpg', email: 'david@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/cvc logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Annual Dance Competition', 'Cultural Night Performance', 'Dance Workshop'],
    gallery: [
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1646920/pexels-photo-1646920.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescentian_voice_channel/',
    memberCount: 85,
    established: '2019',
    contactLinks: undefined
  },
  {
    id: 'Crescent Silambam Club',
    name: 'Crescent Silambam Club',
    category: 'Cultural',
    logo: "/img src/logos/Csc logo.jpg",
    description: 'The Silambam Club preserves and promotes the ancient Tamil martial art through training, demos, and competitions.',
    longDescription: 'The Silambam Club is dedicated to reviving and celebrating the traditional martial art form rooted in Tamil heritage.With regular training sessions and stage performances, the club instills discipline, agility, and cultural pride among students.In a historic achievement, the club secured a Nobel World Record, marking global recognition of its passion and prowess.It stands as a symbol of strength, tradition, and student excellence in preserving cultural legacy.',
    coreTeam: [
      { name: 'Maya Patel', position: 'Head', image: '/img src/logos/Csc logo.jpg', email: 'maya@example.com' },
      { name: 'David Kim', position: 'Co Head', image: '/img src/logos/Csc logo.jpg', email: 'david@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/Csc logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Annual Dance Competition', 'Cultural Night Performance', 'Dance Workshop'],
    gallery: [
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1646920/pexels-photo-1646920.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescent_silambam_club/',
    memberCount: 85,
    established: '2019',
    contactLinks: undefined
  },
  {
    id: 'Crescent Team Dramatix',
    name: 'Crescent Team Dramatix',
    category: 'Cultural',
    logo: "/img src/logos/ctd logo.jpg",
    description: 'Crescent Team Dramatrix, the university’s oldest cultural club, brings stories to life through drama, mime, and stagecraft.',
    longDescription: 'Crescent Team Dramatrix is the pioneer of performing arts on campus, known for its rich legacy in drama, mime, and theatrical expression.From thought-provoking street plays to captivating stage acts, the club has been a pillar of the university’s cultural identity.It actively participates in intercollege competitions, spreading social messages through compelling performances.Theatrefest, its flagship event, celebrates the spirit of theatre and creative storytelling.',
    coreTeam: [
      { name: 'Maya Patel', position: 'Head', image: '/img src/logos/ctd logo.jpg', email: 'maya@example.com' },
      { name: 'David Kim', position: 'Co Head', image: '/img src/logos/ctd logo.jpg', email: 'david@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/ctd logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Annual Dance Competition', 'Cultural Night Performance', 'Dance Workshop'],
    gallery: [
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1646920/pexels-photo-1646920.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescent_team_dramatix/',
    memberCount: 85,
    established: '2019',
    contactLinks: undefined
  },{
    id: 'Cres Crew',
    name: 'Cres Crew',
    category: 'Cultural',
    logo: "/img src/logos/cc logo.jpg",
    description: 'Cres Crew is the university’s official dance club, mastering both classical elegance and western flair.',
    longDescription: 'Cres Crew brings together students who express themselves through the powerful language of dance—be it classical, western, or fusion.The club is known for its high-energy performances, creative choreography, and stage presence in campus and national events.Last year, Cres Crew proudly secured an international award, shining a global spotlight on their talent and teamwork.It continues to inspire, entertain, and uplift through rhythm, passion, and cultural pride.',
    coreTeam: [
      { name: 'Maya Patel', position: 'Head', image: '/img src/logos/cc logo.jpg', email: 'maya@example.com' },
      { name: 'David Kim', position: 'Co Head', image: '/img src/logos/cc logo.jpg', email: 'david@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/cc logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Annual Dance Competition', 'Cultural Night Performance', 'Dance Workshop'],
    gallery: [
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1646920/pexels-photo-1646920.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/_cres_crew_/',
    memberCount: 85,
    established: '2019',
    contactLinks: undefined
  },{
    id: 'Crescent Media Club',
    name: 'Crescent Media Club',
    category: 'Cultural',
    logo: "/img src/logos/mcc logo.jpg",
    description: 'The Media Club is the visual powerhouse of the university, designing posters, promos, and cinematic content for all events.',
    longDescription: 'The Media Club brings together visionary editors, designers, and filmmakers who shape the university’s visual and cinematic identity.From designing posters to crafting high-impact promotional videos, the club supports every cultural and academic initiative on campus.Its members are passionate filmmakers, having directed short films and documentaries that won several prestigious awards last year.The club’s flagship event, Cinetrix, is a celebration of visual storytelling, filmmaking, and digital media innovation.',
    coreTeam: [
      { name: 'Maya Patel', position: 'Head', image: '/img src/logos/mcc logo.jpg', email: 'maya@example.com' },
      { name: 'David Kim', position: 'Co Head', image: '/img src/logos/mcc logo.jpg', email: 'david@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/mcc logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Annual Dance Competition', 'Cultural Night Performance', 'Dance Workshop'],
    gallery: [
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1646920/pexels-photo-1646920.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/mediaclubcrescent/',
    memberCount: 85,
    established: '2019',
    contactLinks: undefined
  },{
    id: 'Crescent Philately Club',
    name: 'Crescent Philately Club',
    category: 'Cultural',
    logo: "/img src/logos/cpc logo.jpg",
    description: 'The Philately Club nurtures the timeless hobbies of stamp and coin collecting, connecting history with curiosity.',
    longDescription: 'The Philately Club invites students to explore the rich world of philately and numismatics through stamp and coin collection activities.It preserves heritage, history, and global cultures through curated displays, exhibitions, and interactive sessions.Crescivore, the club’s legacy event, showcases rare collections and fosters appreciation for these classic hobbies.',
    coreTeam: [
      { name: 'Maya Patel', position: 'Head', image: '/img src/logos/cpc logo.jpg', email: 'maya@example.com' },
      { name: 'David Kim', position: 'Co Head', image: '/img src/logos/cpc logo.jpg', email: 'david@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/cpc logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Annual Dance Competition', 'Cultural Night Performance', 'Dance Workshop'],
    gallery: [
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1646920/pexels-photo-1646920.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescent_philately_club/',
    memberCount: 85,
    established: '2019',
    contactLinks: undefined
  },{
    id: 'Crescent Club Of Photographers',
    name: 'Crescent Club Of Photographers',
    category: 'Cultural',
    logo: "/img src/logos/ccp logo.jpg",
    description: 'The Photography Club captures the essence of campus life, nature, and culture through diverse lenses.',
    longDescription: 'The Photography Club is a collective of passionate visual storytellers who specialize in event, wildlife, portrait, and conceptual photography.They document university events, explore outdoor shoots, and experiment with creative techniques across genres.The club conducts photo walks, editing workshops, and exhibitions to enhance both technical and artistic skills.It’s a space where moments are frozen into memories, and creativity is captured one click at a time.',
    coreTeam: [
      { name: 'Maya Patel', position: 'Head', image: '/img src/logos/ccp logo.jpg', email: 'maya@example.com' },
      { name: 'David Kim', position: 'Co Head', image: '/img src/logos/ccp logo.jpg', email: 'david@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/ccp logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Annual Dance Competition', 'Cultural Night Performance', 'Dance Workshop'],
    gallery: [
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1646920/pexels-photo-1646920.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescent.club.of.photographers/',
    memberCount: 85,
    established: '2019',
    contactLinks: undefined
  },{
    id: 'Crescent Art Club',
    name: 'Crescent Art Club',
    category: 'Cultural',
    logo: "/img src/logos/cac logo.jpg",
    description: 'The Art Club is a creative haven for students passionate about painting, sketching, doodling, and crafts.',
    longDescription: 'The Art Club encourages artistic expression across mediums like acrylic, watercolor, pencil sketching, and mixed media.Members collaborate on campus beautification projects, event decor, and themed exhibitions showcasing student talent.The club hosts workshops, competitions, and live art battles to inspire and engage budding artists.It’s where imagination meets canvas, turning ideas into visual masterpieces.',
    coreTeam: [
      { name: 'Maya Patel', position: 'Head', image: '/img src/logos/cac logo.jpg', email: 'maya@example.com' },
      { name: 'David Kim', position: 'Co Head', image: '/img src/logos/cac logo.jpg', email: 'david@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/cac logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Annual Dance Competition', 'Cultural Night Performance', 'Dance Workshop'],
    gallery: [
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1646920/pexels-photo-1646920.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescent_art_club/',
    memberCount: 85,
    established: '2019',
    contactLinks: undefined
  },{
    id: 'Crescent Creative Strokes',
    name: 'Crescent Creative Strokes',
    category: 'Cultural',
    logo: "/img src/logos/crea stro logo.jpg",
    description: 'Crescent Creative Strokes is an art-focused club that nurtures creativity, imagination, and self-expression.',
    longDescription: 'Crescent Creative Strokes is a vibrant space where students are inspired to unlock their full creative potential through art.The club conducts enjoyable, imaginative, and educational activities while offering professional training from experienced artists.It promotes innovation by challenging conventional thinking and encouraging fresh, bold ideas across various art forms',
    coreTeam: [
      { name: 'Maya Patel', position: 'Head', image: '/img src/logos/crea stro logo.jpg', email: 'maya@example.com' },
      { name: 'David Kim', position: 'Co Head', image: '/img src/logos/crea stro logo.jpg', email: 'david@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/crea stro logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Annual Dance Competition', 'Cultural Night Performance', 'Dance Workshop'],
    gallery: [
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1646920/pexels-photo-1646920.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescreativestrokes/',
    memberCount: 85,
    established: '2019',
    contactLinks: undefined
  },
  {
    id: 'Crescent Music Team',
    name: 'Crescent Music Team',
    category: 'Cultural',
    logo: "/img src/logos/Cmt logo.jpg",
    description: 'The Music Club is a soulful community of singers, instrumentalists, and composers across genres.',
    longDescription: 'The Music Club unites students who share a passion for vocal and instrumental music—ranging from classical to contemporary.Members perform at campus events, intercollege fests, and open mic nights, creating memorable musical experiences.The club encourages original compositions, collaborations, and technical skill-building through regular practice and mentorship.',
    coreTeam: [
      { name: 'Alex Johnson', position: 'Head', image: '/img src/logos/Cmt logo.jpg', email: 'alex@example.com' },
      { name: 'Sarah Chen', position: 'Co Head', image: '/img src/logos/Cmt logo.jpg', email: 'sarah@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/cmt logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Tech Hackathon 2024', 'Python Workshop', 'Code Review Session'],
    gallery: [
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescent_music_team/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },
  
  {
    id: 'Crescent Fashion Team',
    name: 'Crescent Fashion Team',
    category: 'Cultural',
    logo: "/img src/logos/Cft logo.jpg",
    description: 'The Fashion Team is a dynamic group of designers, models, and stylists who redefine style on campus.',
    longDescription: 'The Fashion Team brings together students passionate about design, modeling, and personal style to express creativity through fashion.From choreographed ramp walks to innovative costume design, the team lights up the stage at college fests and intercollege events.They conduct styling workshops, photoshoots, and concept-based fashion showcases that reflect diverse cultures and trends.',
    coreTeam: [
      { name: 'Alex Johnson', position: 'Head', image: '/img src/logos/Cft logo.jpg', email: 'alex@example.com' },
      { name: 'Sarah Chen', position: 'Co Head', image: '/img src/logos/Cft logo.jpg', email: 'sarah@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/Cft logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Tech Hackathon 2024', 'Python Workshop', 'Code Review Session'],
    gallery: [
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescentfashionteam/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },
  {
    id: 'sports-club',
    name: 'Sports Club',
    category: 'Sports & Fitness',
    logo: "/img src/logos/cft logo.jpg",
    description: 'Stay fit and compete in various sports tournaments and fitness challenges.',
    longDescription: 'The Sports Club promotes physical fitness and sportsmanship through various activities including cricket, football, basketball, badminton, and fitness training sessions.',
    coreTeam: [
      { name: 'Ryan Martinez', position: 'Head', image: '/img src/logos/cft logo.jpg', email: 'ryan@example.com' },
      { name: 'Lisa Anderson', position: 'Co Head', image: '/img src/logos/cft logo.jpg', email: 'lisa@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/Cft logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Annual Sports Meet', 'Cricket Tournament', 'Fitness Challenge'],
    gallery: [
      'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1618918/pexels-photo-1618918.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://forms.google.com/sports-club',
    memberCount: 150,
    established: '2017',
    contactLinks: undefined
  },
  {
    id: 'Crescent Islamic Club',
    name: 'Crescent Islamic Club',
    category: 'Social/Volunteer',
    logo: "/img src/logos/islamic logo.jpg",
    description: 'The Islamic Club is a spiritual and cultural forum promoting Islamic values through learning, unity, and service.',
    longDescription: 'The Islamic Club provides a welcoming space for students to engage with Islamic teachings, values, and traditions in a meaningful way. It hosts Qur’an study circles, motivational talks, and events during Ramadan and other significant occasions.The club encourages personal growth, community service, and respectful interfaith dialogue rooted in compassion and knowledge.',
    coreTeam: [
      { name: 'Alex Johnson', position: 'Head', image: '/img src/logos/islamic logo.jpg', email: 'alex@example.com' },
      { name: 'Sarah Chen', position: 'Co Head', image: '/img src/logos/islamic logo.jpg', email: 'sarah@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/islamic logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Tech Hackathon 2024', 'Python Workshop', 'Code Review Session'],
    gallery: [
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescent_islamic_club/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },
  {
    id: 'Crescent Blood Donars',
    name: 'Crescent Blood Donars',
    category: 'Social/Volunteer',
    logo: "/img src/logos/blood logo.jpg",
    description: 'The Blood Donors Club is a life-saving initiative that promotes voluntary blood donation and health awareness.',
    longDescription: 'The Blood Donors Club is committed to creating a compassionate and responsible student community through regular blood donation camps.It collaborates with hospitals and NGOs to ensure timely support for emergency and medical needs.The club maintains a donor database and responds to urgent requests, serving as a vital link between donors and recipients.',
    coreTeam: [
      { name: 'Alex Johnson', position: 'Head', image: '/img src/logos/blood logo.jpg', email: 'alex@example.com' },
      { name: 'Sarah Chen', position: 'Co Head', image: '/img src/logos/blood logo.jpg', email: 'sarah@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/blood logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Tech Hackathon 2024', 'Python Workshop', 'Code Review Session'],
    gallery: [
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescentblooddonors/',
    memberCount: 120,
    established: '2020',
    contactLinks: undefined
  },
  {
    id: 'Crescent Discipline Force',
    name: 'Crescent Discipline Force',
    category: 'Social/Volunteer',
    logo: "/img src/logos/cdfs logo.jpg",
    description: 'The Discipline Force ensures smooth and peaceful conduct of campus events by maintaining order and student safety.',
    longDescription: 'The Discipline Force is a dedicated team of student volunteers responsible for upholding discipline during university events and gatherings.They coordinate entry, maintain queues, resolve conflicts, and ensure a safe and respectful environment for all participants.Trained in communication and crowd management, the team plays a key role in preventing disruptions and promoting unity.',
    coreTeam: [
      { name: 'Sophie Brown', position: 'Head', image: '/img src/logos/cdfs logo.jpg', email: 'sophie@example.com' },
      { name: 'Michael Davis', position: 'Co Head', image: '/img src/logos/cdfs logo.jpg', email: 'michael@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/cdfs logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Blood Donation Drive', 'Beach Cleanup', 'Education Support Program'],
    gallery: [
      'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/crescent_discipline_force/',
    memberCount: 95,
    established: '2019',
    contactLinks: undefined
  },{
    id: 'Rotract Club Crescent',
    name: 'Rotract Club Crescent',
    category: 'Social/Volunteer',
    logo: "/img src/logos/rotract logo.jpg",
    description: 'The Rotaract Club empowers students to create positive social impact through leadership, service, and community outreach.',
    longDescription: 'The Rotaract Club is part of a global movement that encourages students to engage in community service, professional development, and cultural exchange.Through blood donation drives, cleanliness campaigns, education initiatives, and fundraisers, members work towards real-world impact.The club also focuses on building leadership, teamwork, and ethical values through hands-on volunteering experiences.',
    coreTeam: [
      { name: 'Sophie Brown', position: 'Head', image: '/img src/logos/rotract logo.jpg', email: 'sophie@example.com' },
      { name: 'Michael Davis', position: 'Co Head', image: '/img src/logos/rotract logo.jpg', email: 'michael@example.com' },
      { name: 'Harshitha', position: 'Club Coordinator', image: '/img src/logos/rotract logo.jpg', email: 'sarah@example.com' },
    ],
    events: ['Blood Donation Drive', 'Beach Cleanup', 'Education Support Program'],
    gallery: [
      'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    ],
    joinLink: 'https://www.instagram.com/rac_crescent_university/',
    memberCount: 95,
    established: '2019',
    contactLinks: undefined
  },
];