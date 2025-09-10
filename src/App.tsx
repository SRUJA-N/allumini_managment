// @ts-nocheck
import React, { useState } from 'react';
import './index.css';
import './App.css';
import {
  User,
  Users,
  Calendar,
  Briefcase,
  MessageSquare,
  Award,
  Target,
  Camera,
  BarChart3,
  Settings,
  Bell,
  Search,
  Plus,
  Star,
  Trophy,
  Shield,
  Brain,
  Gamepad2,
  CheckCircle,
  Clock,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  TrendingUp,
  Activity,
  Heart,
  Zap,
  Crown,
  Medal,
  ArrowRight,
  BookOpen,
  Code,
  Lightbulb,
  ChevronRight,
  Home,
  LogOut
} from 'lucide-react';

// Dummy JSON Data
const dummyData = {
  users: {
    student: {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@university.edu",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face",
      role: "student",
      verified: true,
      year: "3rd Year",
      major: "Computer Science",
      points: 2450,
      level: "Gold",
      badges: 8
    },
    alumni: {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@techcorp.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      role: "alumni",
      verified: true,
      graduationYear: "2019",
      company: "TechCorp Inc.",
      position: "Senior Software Engineer",
      points: 4200,
      level: "Platinum",
      badges: 15
    },
    employee: {
      id: 3,
      name: "Dr. Emily Rodriguez",
      email: "emily.rodriguez@university.edu",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      role: "employee",
      department: "Career Services",
      position: "Director"
    },
    admin: {
      id: 4,
      name: "James Wilson",
      email: "james.wilson@university.edu",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      role: "admin",
      department: "IT Administration"
    }
  },
  events: [
    {
      id: 1,
      title: "Tech Career Fair 2025",
      date: "2025-10-15",
      time: "10:00 AM - 4:00 PM",
      location: "University Convention Center",
      description: "Connect with top tech companies and explore career opportunities.",
      attendees: 245,
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Alumni Networking Mixer",
      date: "2025-09-28",
      time: "6:00 PM - 9:00 PM",
      location: "Downtown Hotel Ballroom",
      description: "Reconnect with fellow alumni and expand your professional network.",
      attendees: 180,
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Entrepreneurship Workshop",
      date: "2025-11-02",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Hub",
      description: "Learn from successful alumni entrepreneurs about starting your own business.",
      attendees: 89,
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop"
    }
  ],
  jobs: [
    {
      id: 1,
      title: "Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$95,000 - $120,000",
      posted: "2 days ago",
      description: "Join our innovative team building next-generation web applications.",
      requirements: ["React", "Node.js", "Python", "AWS"],
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=60&h=60&fit=crop"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Remote",
      type: "Full-time",
      salary: "$85,000 - $110,000",
      posted: "1 week ago",
      description: "Lead product strategy and work with cross-functional teams.",
      requirements: ["Product Strategy", "Agile", "Analytics", "Leadership"],
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=60&h=60&fit=crop"
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio",
      location: "New York, NY",
      type: "Contract",
      salary: "$70 - $90/hour",
      posted: "3 days ago",
      description: "Create beautiful and intuitive user experiences for mobile apps.",
      requirements: ["Figma", "Sketch", "User Research", "Prototyping"],
      logo: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=60&h=60&fit=crop"
    }
  ],
  mentors: [
    {
      id: 1,
      name: "David Park",
      title: "Senior Data Scientist",
      company: "Google",
      expertise: ["Machine Learning", "Python", "Statistics"],
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      sessions: 47
    },
    {
      id: 2,
      name: "Lisa Thompson",
      title: "Marketing Director",
      company: "Meta",
      expertise: ["Digital Marketing", "Brand Strategy", "Analytics"],
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      sessions: 32
    },
    {
      id: 3,
      name: "Robert Kim",
      title: "VP of Engineering",
      company: "Netflix",
      expertise: ["Leadership", "System Architecture", "Team Building"],
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
      sessions: 28
    }
  ],
  complaints: [
    {
      id: 1,
      title: "Career Fair Registration Issues",
      description: "Unable to register for the upcoming tech career fair. The form keeps showing an error.",
      status: "pending",
      date: "2025-09-08",
      priority: "medium"
    },
    {
      id: 2,
      title: "Alumni Directory Access",
      description: "Cannot access the alumni directory despite being a verified student.",
      status: "resolved",
      date: "2025-09-05",
      priority: "low"
    }
  ],
  badges: [
    { id: 1, name: "Event Enthusiast", description: "Attended 10+ events", icon: "🎉", earned: true },
    { id: 2, name: "Networking Pro", description: "Connected with 25+ alumni", icon: "🤝", earned: true },
    { id: 3, name: "Job Hunter", description: "Applied to 15+ positions", icon: "💼", earned: false },
    { id: 4, name: "Mentor", description: "Mentored 5+ students", icon: "🎯", earned: true },
    { id: 5, name: "Community Leader", description: "Hosted 3+ events", icon: "👑", earned: false }
  ],
  memories: [
    {
      id: 1,
      title: "Graduation Ceremony 2019",
      date: "2019-05-15",
      type: "photo",
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Alumni Basketball Game",
      date: "2020-03-10",
      type: "photo",
      url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Class Reunion 2021",
      date: "2021-06-20",
      type: "video",
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=200&fit=crop"
    }
  ],
  careerPaths: {
    "Software Engineer": [
      { title: "Learn Programming Fundamentals", status: "completed", weeks: 4 },
      { title: "Master Data Structures & Algorithms", status: "in-progress", weeks: 6 },
      { title: "Build Portfolio Projects", status: "upcoming", weeks: 8 },
      { title: "Practice System Design", status: "upcoming", weeks: 4 },
      { title: "Apply to Companies", status: "upcoming", weeks: 2 }
    ],
    "Product Manager": [
      { title: "Understand Product Lifecycle", status: "completed", weeks: 3 },
      { title: "Learn Analytics & Metrics", status: "in-progress", weeks: 4 },
      { title: "Practice User Research", status: "upcoming", weeks: 5 },
      { title: "Build Product Roadmaps", status: "upcoming", weeks: 3 },
      { title: "Master Stakeholder Management", status: "upcoming", weeks: 4 }
    ]
  }
};

// Login Component
const LoginPage = ({ userType, onLogin, setUserType }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(userType);
  };

  const userTypeColors = {
    student: 'from-cyan-400 to-blue-600',
    alumni: 'from-lime-400 to-green-600',
    employee: 'from-orange-400 to-red-600',
    admin: 'from-purple-400 to-pink-600'
  };

  const userTypeIcons = {
    student: BookOpen,
    alumni: Users,
    employee: Briefcase,
    admin: Shield
  };

  const Icon = userTypeIcons[userType];

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className={`login-icon-container bg-gradient-to-r ${userTypeColors[userType]}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h2 className="login-title">
            {userType.charAt(0).toUpperCase() + userType.slice(1)} Login
          </h2>
          <p className="login-subtitle">Welcome back! Please sign in to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label htmlFor="email" className="login-input-group">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              className="login-input"
              placeholder="Enter your email"
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="login-input-group">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="login-input"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className={`login-button bg-gradient-to-r ${userTypeColors[userType]}`}
          >
            Sign In
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Or for demo:</p>
            <button
              type="button"
              onClick={() => onLogin(userType)}
              className="login-demo-button"
            >
              Quick Demo Login
            </button>
          </div>
        </form>

        <div className="login-footer">
          <p className="login-footer-text">Switch login type:</p>
          <div className="login-type-buttons">
            {['student', 'alumni', 'employee', 'admin'].map((type) => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`login-type-button ${
                  type === userType
                    ? 'login-type-button-active'
                    : 'login-type-button-inactive'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ userRole, activeTab, setActiveTab, onLogout }) => {
  const menuItems = {
    student: [
      { id: 'overview', label: 'Overview', icon: Home },
      { id: 'events', label: 'Events', icon: Calendar },
      { id: 'jobs', label: 'Jobs', icon: Briefcase },
      { id: 'mentorship', label: 'Mentorship', icon: Users },
      { id: 'complaints', label: 'Complaints', icon: MessageSquare },
      { id: 'ai-advisor', label: 'AI Career Advisor', icon: Brain },
      { id: 'gamification', label: 'Gamification', icon: Gamepad2 },
      { id: 'blockchain', label: 'Blockchain', icon: Shield }
    ],
    alumni: [
      { id: 'overview', label: 'Overview', icon: Home },
      { id: 'events', label: 'Events', icon: Calendar },
      { id: 'referrals', label: 'Job Referrals', icon: Briefcase },
      { id: 'mentorship', label: 'Mentorship', icon: Users },
      { id: 'memories', label: 'Memories', icon: Camera },
      { id: 'ai-advisor', label: 'AI Career Advisor', icon: Brain },
      { id: 'gamification', label: 'Gamification', icon: Gamepad2 },
      { id: 'blockchain', label: 'Blockchain', icon: Shield }
    ],
    employee: [
      { id: 'overview', label: 'Overview', icon: Home },
      { id: 'jobs', label: 'Job Management', icon: Briefcase },
      { id: 'complaints', label: 'Complaints', icon: MessageSquare },
      { id: 'events', label: 'Event Management', icon: Calendar }
    ],
    admin: [
      { id: 'overview', label: 'Overview', icon: Home },
      { id: 'approvals', label: 'Approvals', icon: UserCheck },
      { id: 'analytics', label: 'Analytics', icon: BarChart3 },
      { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
    ]
  };

  return (
    <div className="dashboard-sidebar glass-effect modern-scrollbar">
      <div className="dashboard-sidebar-header">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="dashboard-sidebar-title text-white font-bold">Alumni Platform</h1>
              <p className="dashboard-sidebar-subtitle text-cyan-100 capitalize">{userRole} Dashboard</p>
            </div>
          </div>
      </div>

      <nav className="dashboard-sidebar-nav space-y-2">
        {menuItems[userRole].map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`dashboard-sidebar-nav-button modern-hover group relative overflow-hidden ${
                isActive
                  ? 'dashboard-sidebar-nav-button-active bg-white/20 text-white shadow-lg'
                  : 'dashboard-sidebar-nav-button-inactive text-blue-100 hover:text-white hover:bg-white/10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? 'opacity-100' : ''}`}></div>
              <Icon className={`w-5 h-5 relative z-10 transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-blue-300' : ''}`} />
              <span className="font-medium relative z-10">{item.label}</span>
              {isActive && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-l-full"></div>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/20 mt-auto">
        <button
          onClick={onLogout}
          className="dashboard-sidebar-logout w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-blue-100 hover:text-white hover:bg-red-500/20 transition-all duration-200 group"
        >
          <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

const Header = ({ user }) => {
  return (
    <div className="dashboard-header glass-effect border-b border-white/20 backdrop-blur-xl">
      <div className="dashboard-header-content">
        <div className="dashboard-header-search">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-cyan-300" />
            </div>
            <input
              type="text"
              placeholder="Search platform..."
              className="input-modern pl-10 pr-4 py-2 w-80 bg-white/10 border-white/20 text-white placeholder-cyan-200 focus:bg-white/20 focus:border-cyan-300/50 transition-all duration-200"
            />
          </div>
        </div>

        <div className="dashboard-header-actions flex items-center space-x-3">
          <button className="p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group relative">
            <Bell className="w-5 h-5 text-cyan-200 group-hover:text-white transition-colors" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white/20"></div>
          </button>
          <button className="p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group">
            <Settings className="w-5 h-5 text-cyan-200 group-hover:text-white transition-colors" />
          </button>

          <div className="dashboard-header-user flex items-center space-x-3 bg-white/10 rounded-xl px-4 py-2 hover:bg-white/20 transition-all duration-200 cursor-pointer group">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors"
              />
              {(user.role === 'student' || user.role === 'alumni') && user.verified && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white/20 flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <div className="dashboard-header-user-info">
              <p className="dashboard-header-user-name text-white font-semibold group-hover:text-blue-100 transition-colors">{user.name}</p>
              <p className="dashboard-header-user-role text-cyan-200 text-sm capitalize group-hover:text-cyan-100 transition-colors">{user.role}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-cyan-300 group-hover:text-white transition-all duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, icon: Icon, color, trend }) => {
  return (
    <div className="card-modern group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="stats-card-content relative z-10">
        <div className="flex-1">
          <p className="stats-card-info text-gray-600 group-hover:text-gray-800 transition-colors">{title}</p>
          <p className="stats-card-value text-gray-900 font-bold group-hover:scale-105 transition-transform duration-200">{value}</p>
          {trend && (
            <p className={`stats-card-trend flex items-center text-sm font-medium ${
              trend > 0
                ? 'stats-card-trend-positive text-green-600'
                : 'stats-card-trend-negative text-red-600'
            }`}>
              <TrendingUp className={`w-4 h-4 mr-1 transition-transform duration-200 ${trend > 0 ? 'group-hover:rotate-12' : 'group-hover:-rotate-12'}`} />
              {trend > 0 ? '+' : ''}{trend}% from last month
            </p>
          )}
        </div>
        <div className={`stats-card-icon-container ${color} group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
          <Icon className="w-6 h-6 text-white drop-shadow-sm" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

const EventCard = ({ event, showRegister = true, showEdit = false }) => {
  return (
    <div className="card-modern group relative overflow-hidden">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={event.image}
          alt={event.title}
          className="event-card-image w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800">
          {event.status}
        </div>
      </div>
      <div className="event-card-content p-6">
        <h3 className="event-card-title text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{event.title}</h3>
        <p className="event-card-description text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        <div className="event-card-details space-y-2 mb-4">
          <div className="event-card-detail flex items-center text-sm text-gray-600">
            <Calendar className="event-card-detail-icon w-4 h-4 mr-2 text-blue-500" />
            {event.date} at {event.time}
          </div>
          <div className="event-card-detail flex items-center text-sm text-gray-600">
            <MapPin className="event-card-detail-icon w-4 h-4 mr-2 text-red-500" />
            {event.location}
          </div>
          <div className="event-card-detail flex items-center text-sm text-gray-600">
            <Users className="event-card-detail-icon w-4 h-4 mr-2 text-green-500" />
            {event.attendees} attendees
          </div>
        </div>
        <div className="event-card-actions flex space-x-3">
          {showRegister && (
            <button className="btn-modern flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105">
              Register
            </button>
          )}
          {showEdit && (
            <>
              <button className="btn-modern flex-1 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105">
                Approve
              </button>
              <button className="btn-modern flex-1 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105">
                Reject
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ job, showApply = true, showEdit = false }: { job: Job; showApply?: boolean; showEdit?: boolean }) => {
  return (
    <div className="job-card card-hover-lift">
      <div className="job-card-header">
        <img src={job.logo} alt={job.company} className="job-card-logo" />
        <div className="job-card-info">
          <h3 className="job-card-title">{job.title}</h3>
          <p className="job-card-company">{job.company}</p>
          <div className="job-card-details">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </span>
            <span>{job.type}</span>
            <span>{job.posted}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="job-card-salary">{job.salary}</p>
        </div>
      </div>
      <p className="job-card-description">{job.description}</p>
      <div className="job-card-requirements">
        {job.requirements.map((req, index) => (
          <span
            key={index}
            className="job-card-requirement"
          >
            {req}
          </span>
        ))}
      </div>
      <div className="job-card-actions">
        {showApply && (
          <button className="job-card-apply">
            Apply Now
          </button>
        )}
        {showEdit && (
          <>
            <button className="job-card-view">
              View Applicants
            </button>
            <button className="job-card-edit">
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// Mentor Card Component
type Mentor = {
  id: number;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  avatar: string;
  rating: number;
  sessions: number;
};

const MentorCard: React.FC<{ mentor: Mentor }> = ({ mentor }) => {
  return (
    <div className="card-modern group relative overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="mentor-card-content relative z-10 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="mentor-card-avatar w-16 h-16 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-200"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="mentor-card-name text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{mentor.name}</h3>
            <p className="mentor-card-title text-gray-600 font-medium">{mentor.title}</p>
            <p className="mentor-card-company text-gray-500 text-sm">{mentor.company}</p>
          </div>
        </div>

        <div className="mentor-card-rating flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="mentor-card-rating-value font-bold text-gray-900">{mentor.rating}</span>
          </div>
          <span className="mentor-card-sessions text-gray-500 text-sm">({mentor.sessions} sessions)</span>
          <div className="flex items-center space-x-1 ml-auto">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{mentor.sessions}</span>
          </div>
        </div>

        <div className="mentor-card-expertise mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Expertise:</p>
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.map((skill, index) => (
              <span
                key={index}
                className="mentor-card-skill px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          <button className="mentor-card-button flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105">
            Request Mentorship
          </button>
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group">
            <Mail className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};



// Badge Component
interface Badge {
  icon: React.ReactNode;
  name: string;
  description: string;
  earned: boolean;
}

interface BadgeCardProps {
  badge: Badge;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge }) => {
  return (
    <div className={`badge-card card-hover-lift ${badge.earned ? "badge-card-earned" : "badge-card-locked"}`}>
      <div className="badge-card-content">
        <div className="badge-card-icon">{badge.icon}</div>
        <h3 className="badge-card-name">{badge.name}</h3>
        <p className="badge-card-description">{badge.description}</p>
        {badge.earned && (
          <div className="badge-card-earned-badge">
            <Trophy className="w-4 h-4 mr-1" />
            Earned
          </div>
        )}
      </div>
    </div>
  );
};




// Career Path Component
interface CareerStep {
  title: string;
  status: string;
  weeks: number;
}

const CareerPathViewer = ({ path }: { path: CareerStep[] }) => {
  return (
    <div className="career-path-container">
      {path.map((step: CareerStep, index: number) => (
        <div key={index} className="career-path-step">
          <div className="career-path-step-content">
            <div className={`career-path-step-icon ${
              step.status === 'completed' ? 'career-path-step-icon-completed' :
              step.status === 'in-progress' ? 'career-path-step-icon-progress' :
              'career-path-step-icon-upcoming'
            }`}>
              {step.status === 'completed' ? (
                <CheckCircle className="w-5 h-5" />
              ) : step.status === 'in-progress' ? (
                <Clock className="w-5 h-5" />
              ) : (
                <span className="text-sm font-bold">{index + 1}</span>
              )}
            </div>
            <div className="career-path-step-info">
              <h3 className="career-path-step-title">{step.title}</h3>
              <p className="career-path-step-duration">{step.weeks} weeks</p>
            </div>
            <div className="career-path-step-status">
              <span className={`career-path-step-status-badge ${
                step.status === 'completed' ? 'career-path-step-status-completed' :
                step.status === 'in-progress' ? 'career-path-step-status-progress' :
                'career-path-step-status-upcoming'
              }`}>
                {step.status.replace('-', ' ').toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Dashboard Components
const OverviewTab = ({ user, userRole }) => {
  const getStatsForRole = (role) => {
    switch (role) {
      case 'student':
        return [
          { title: 'Events Joined', value: '12', icon: Calendar, color: 'bg-gradient-to-r from-blue-500 to-blue-600', trend: 15 },
          { title: 'Jobs Applied', value: '8', icon: Briefcase, color: 'bg-gradient-to-r from-green-500 to-green-600', trend: 25 },
          { title: 'Mentorship Requests', value: '3', icon: Users, color: 'bg-gradient-to-r from-purple-500 to-purple-600', trend: -5 },
          { title: 'Points Earned', value: user.points?.toLocaleString() || '2,450', icon: Trophy, color: 'bg-gradient-to-r from-yellow-500 to-orange-500', trend: 12 }
        ];
      case 'alumni':
        return [
          { title: 'Mentorship Sessions', value: '47', icon: Users, color: 'bg-gradient-to-r from-purple-500 to-purple-600', trend: 18 },
          { title: 'Events Attended', value: '23', icon: Calendar, color: 'bg-gradient-to-r from-blue-500 to-blue-600', trend: 8 },
          { title: 'Jobs Referred', value: '15', icon: Briefcase, color: 'bg-gradient-to-r from-green-500 to-green-600', trend: 22 },
          { title: 'Points Earned', value: user.points?.toLocaleString() || '4,200', icon: Trophy, color: 'bg-gradient-to-r from-yellow-500 to-orange-500', trend: 15 }
        ];
      case 'employee':
        return [
          { title: 'Complaints Handled', value: '34', icon: MessageSquare, color: 'bg-gradient-to-r from-red-500 to-red-600', trend: -8 },
          { title: 'Approvals Pending', value: '7', icon: Clock, color: 'bg-gradient-to-r from-orange-500 to-orange-600', trend: 12 },
          { title: 'Jobs Posted', value: '12', icon: Briefcase, color: 'bg-gradient-to-r from-green-500 to-green-600', trend: 25 }
        ];
      case 'admin':
        return [
          { title: 'Total Students', value: '2,847', icon: Users, color: 'bg-gradient-to-r from-blue-500 to-blue-600', trend: 8 },
          { title: 'Total Alumni', value: '12,450', icon: Users, color: 'bg-gradient-to-r from-green-500 to-green-600', trend: 5 },
          { title: 'Active Events', value: '23', icon: Calendar, color: 'bg-gradient-to-r from-purple-500 to-purple-600', trend: 15 },
          { title: 'Job Postings', value: '156', icon: Briefcase, color: 'bg-gradient-to-r from-yellow-500 to-orange-500', trend: 22 }
        ];
      default:
        return [];
    }
  };

  const stats = getStatsForRole(userRole);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}! 👋</h1>
            <p className="text-gray-600 text-lg">Here's what's happening in your {userRole} dashboard today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Current Level</p>
              <p className="text-2xl font-bold text-blue-600">{user.level || 'Gold'}</p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          {[
            { action: 'Registered for Tech Career Fair 2025', time: '2 hours ago', icon: Calendar, type: 'event' },
            { action: 'Applied to Software Engineer position', time: '1 day ago', icon: Briefcase, type: 'job' },
            { action: 'Completed AI Career Assessment', time: '3 days ago', icon: Brain, type: 'achievement' },
            { action: 'Earned "Networking Pro" badge', time: '1 week ago', icon: Trophy, type: 'badge' }
          ].map((activity, index) => {
            const Icon = activity.icon;
            const getActivityColor = (type) => {
              switch (type) {
                case 'event': return 'bg-blue-100 text-blue-600';
                case 'job': return 'bg-green-100 text-green-600';
                case 'achievement': return 'bg-purple-100 text-purple-600';
                case 'badge': return 'bg-yellow-100 text-yellow-600';
                default: return 'bg-gray-100 text-gray-600';
              }
            };

            return (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                <div className={`p-3 rounded-xl ${getActivityColor(activity.type)}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const EventsTab = ({ userRole }) => {
  const showEdit = userRole === 'employee' || userRole === 'admin';
  
  return (
    <div className="space-y-6">
      <div className="tab-header flex items-center justify-between">
        <h2 className="tab-title">Events</h2>
        {(userRole === 'alumni' || showEdit) && (
          <button
            className="tab-action-button flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg"
            onClick={() => alert('Host Event button clicked!')}
          >
            <Plus className="w-4 h-4" />
            <span>{showEdit ? 'Create Event' : 'Host Event'}</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {dummyData.events.map((event) => (
          <EventCard 
            key={event.id} 
            event={event} 
            showRegister={!showEdit} 
            showEdit={showEdit}
          />
        ))}
      </div>
    </div>
  );
};

const JobsTab = ({ userRole }) => {
  const showEdit = userRole === 'employee';
  
  return (
    <div className="space-y-6">
      <div className="tab-header">
        <h2 className="tab-title">
          {showEdit ? 'Job Management' : 'Job Opportunities'}
        </h2>
        {showEdit && (
          <button className="tab-action-button">
            <Plus className="w-4 h-4" />
            <span>Post New Job</span>
          </button>
        )}
      </div>

      <div className="space-y-4">
        {dummyData.jobs.map((job) => (
          <JobCard 
            key={job.id} 
            job={job} 
            showApply={!showEdit} 
            showEdit={showEdit}
          />
        ))}
      </div>
    </div>
  );
};

const MentorshipTab = ({ userRole }) => {
  if (userRole === 'alumni') {
    return (
      <div className="space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Mentorship Dashboard</h1>
              <p className="text-gray-600">Manage your mentees and track your mentoring impact</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">3</p>
                <p className="text-sm text-gray-500">Active Mentees</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600">Sessions This Month</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">4.9</p>
            <p className="text-sm text-gray-600">Average Rating</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">8</p>
            <p className="text-sm text-gray-600">Hours This Week</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">47</p>
            <p className="text-sm text-gray-600">Total Sessions</p>
          </div>
        </div>

        {/* Your Mentees */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Mentees</h2>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-colors font-medium">
              Schedule New Session
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "John Doe", major: "Computer Science", year: "2nd Year", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face", lastSession: "2 days ago", nextSession: "Tomorrow", progress: 75 },
              { name: "Jane Smith", major: "Business", year: "3rd Year", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=80&h=80&fit=crop&crop=face", lastSession: "1 week ago", nextSession: "Next Friday", progress: 60 },
              { name: "Mike Johnson", major: "Engineering", year: "1st Year", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face", lastSession: "3 days ago", nextSession: "This Wednesday", progress: 40 }
            ].map((mentee, index) => (
              <div key={index} className="card-modern group relative overflow-hidden p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={mentee.avatar} alt={mentee.name} className="w-16 h-16 rounded-full border-2 border-gray-200" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{mentee.name}</h4>
                      <p className="text-gray-600">{mentee.major}</p>
                      <p className="text-sm text-gray-500">{mentee.year}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Last Session:</span>
                      <span className="font-medium">{mentee.lastSession}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Next Session:</span>
                      <span className="font-medium">{mentee.nextSession}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress:</span>
                        <span className="font-medium">{mentee.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full" style={{ width: `${mentee.progress}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg">
                      Message
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: "Completed session with John Doe", time: "2 hours ago", type: "session" },
              { action: "Jane Smith requested feedback on resume", time: "1 day ago", type: "request" },
              { action: "Mike Johnson achieved milestone", time: "3 days ago", type: "achievement" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className={`p-3 rounded-xl ${
                  activity.type === 'session' ? 'bg-green-100 text-green-600' :
                  activity.type === 'request' ? 'bg-blue-100 text-blue-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {activity.type === 'session' ? <Calendar className="w-5 h-5" /> :
                   activity.type === 'request' ? <Mail className="w-5 h-5" /> :
                   <Award className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Mentor</h1>
            <p className="text-gray-600">Connect with experienced alumni who can guide your career journey</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{dummyData.mentors.length}</p>
              <p className="text-sm text-gray-500">Available Mentors</p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 min-w-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, company, or expertise..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white">
              <option>All Industries</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Consulting</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white">
              <option>All Experience Levels</option>
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
              <option>Executive</option>
            </select>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium whitespace-nowrap">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">47</p>
          <p className="text-sm text-gray-600">Active Sessions</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Star className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">4.8</p>
          <p className="text-sm text-gray-600">Avg Rating</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Briefcase className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">89</p>
          <p className="text-sm text-gray-600">Companies</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Award className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">156</p>
          <p className="text-sm text-gray-600">Success Stories</p>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyData.mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Connect with experienced mentors who can provide personalized guidance and help you achieve your career goals.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Browse All Mentors
        </button>
      </div>
    </div>
  );
};

const ComplaintsTab = ({ userRole }) => {
  const showManagement = userRole === 'employee';
  
  if (showManagement) {
    return (
      <div className="space-y-6">
        <h2 className="tab-title">Complaint Management</h2>
        
        <div className="space-y-4">
          {dummyData.complaints.map((complaint) => (
            <div key={complaint.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{complaint.title}</h3>
                  <p className="text-gray-600 mb-4">{complaint.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Submitted: {complaint.date}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      complaint.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      complaint.status === 'resolved' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {complaint.status.toUpperCase()}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      complaint.priority === 'high' ? 'bg-red-100 text-red-800' :
                      complaint.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {complaint.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                    Resolve
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="tab-title">Submit a Complaint</h2>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Issue Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Brief description of the issue"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Technical Issue</option>
              <option>Account Problem</option>
              <option>Event Registration</option>
              <option>Job Portal</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Detailed description of the issue..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Submit Complaint
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Your Complaints</h3>
        <div className="space-y-4">
          {dummyData.complaints.map((complaint) => (
            <div key={complaint.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{complaint.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{complaint.description}</p>
                  <p className="text-xs text-gray-500 mt-2">Submitted: {complaint.date}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  complaint.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {complaint.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AIAdvisorTab = () => {
  const [goal, setGoal] = useState('');
  const [showPath, setShowPath] = useState(false);
  const [selectedPath, setSelectedPath] = useState('Software Engineer');

  const handleGeneratePath = (e) => {
    e.preventDefault();
    setShowPath(true);
  };

  return (
    <div className="space-y-6">
      <div className="ai-advisor-header">
        <div className="ai-advisor-icon">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <h2 className="ai-advisor-title">AI Career Path Advisor</h2>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Get Personalized Career Guidance</h3>
        <form onSubmit={handleGeneratePath} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What's your career goal?
            </label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="e.g., Become a Software Engineer at Google"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all"
          >
            Generate Career Path
          </button>
        </form>
      </div>

      {showPath && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Your Personalized Career Path</h3>
          <CareerPathViewer path={dummyData.careerPaths[selectedPath]} />
        </div>
      )}
    </div>
  );
};

const GamificationTab = ({ user }) => {
  return (
    <div className="space-y-6">
      <div className="gamification-header">
        <div className="gamification-icon">
          <Gamepad2 className="w-6 h-6 text-white" />
        </div>
        <h2 className="gamification-title">Gamification Hub</h2>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Level {user.level}</h3>
            <p className="text-gray-600">{user.points?.toLocaleString() || '2,450'} Points</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <Crown className="w-6 h-6 text-yellow-500" />
              <span className="text-lg font-bold text-yellow-600">{user.level}</span>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-4 rounded-full" style={{ width: '75%' }}></div>
        </div>
        
        <p className="text-sm text-gray-600">750 points to next level (Platinum)</p>
      </div>

      {/* Badges */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Achievement Badges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyData.badges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Leaderboard</h3>
        <div className="space-y-4">
          {[
            { rank: 1, name: "Michael Chen", points: 4200, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
            { rank: 2, name: "Sarah Johnson", points: 2450, avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=40&h=40&fit=crop&crop=face" },
            { rank: 3, name: "David Park", points: 2100, avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face" }
          ].map((player) => (
            <div key={player.rank} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                player.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                player.rank === 2 ? 'bg-gray-100 text-gray-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                {player.rank}
              </div>
              <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{player.name}</p>
                <p className="text-sm text-gray-600">{player.points.toLocaleString()} points</p>
              </div>
              {player.rank <= 3 && (
                <Medal className={`w-6 h-6 ${
                  player.rank === 1 ? 'text-yellow-500' :
                  player.rank === 2 ? 'text-gray-500' :
                  'text-orange-500'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlockchainTab = ({ user }) => {
  return (
    <div className="space-y-6">
      <div className="blockchain-header">
        <div className="blockchain-icon">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <h2 className="blockchain-title">Blockchain Verification</h2>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-4 bg-white rounded-full shadow-sm">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Verified {user.role === 'student' ? 'Student' : 'Alumni'}</h3>
            <p className="text-gray-600">Your identity has been verified on the blockchain</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h4 className="text-lg font-bold text-gray-900 mb-4">Verification Details</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="font-semibold text-green-600">Verified ✅</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Blockchain ID:</span>
              <span className="font-mono text-sm text-gray-900">0x4f2a...8b1c</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Verification Date:</span>
              <span className="text-gray-900">September 1, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Network:</span>
              <span className="text-gray-900">EduChain</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Verification Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Trusted Identity</h4>
              <p className="text-sm text-gray-600">Employers and institutions can verify your credentials instantly</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Instant Verification</h4>
              <p className="text-sm text-gray-600">No need for manual document verification processes</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Credential Security</h4>
              <p className="text-sm text-gray-600">Your achievements are permanently recorded and tamper-proof</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <ExternalLink className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Global Recognition</h4>
              <p className="text-sm text-gray-600">Verified credentials recognized worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Additional Dashboard Components for Employee and Admin
const JobReferralsTab = () => {
  return (
    <div className="space-y-6">
      <div className="tab-header">
        <h2 className="tab-title">Job Referrals</h2>
        <button className="tab-action-button">
          Add Company
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=60&h=60&fit=crop", openings: 15 },
          { name: "Microsoft", logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=60&h=60&fit=crop", openings: 8 },
          { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=60&h=60&fit=crop", openings: 12 }
        ].map((company, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-center">
              <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-lg mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h3>
              <p className="text-gray-600 mb-4">{company.openings} open positions</p>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Refer Students
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MemoriesTab = () => {
  return (
    <div className="space-y-6">
      <div className="tab-header">
        <h2 className="tab-title">Alumni Memories</h2>
        <button className="tab-action-button">
          <Plus className="w-4 h-4" />
          <span>Add Memory</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyData.memories.map((memory) => (
          <div key={memory.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="relative">
              <img src={memory.url} alt={memory.title} className="w-full h-48 object-cover" />
              {memory.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-3 bg-black bg-opacity-50 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.5 5.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0V7.707l4.146 4.147a.75.75 0 101.061-1.061L8.5 5.5z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{memory.title}</h3>
              <p className="text-sm text-gray-500">{memory.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ApprovalsTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Pending Approvals</h2>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Alumni Verifications</h3>
        <div className="space-y-4">
          {[
            { name: "John Smith", graduationYear: "2020", major: "Computer Science", documents: "Verified" },
            { name: "Emily Davis", graduationYear: "2019", major: "Business", documents: "Pending Review" },
            { name: "Robert Chen", graduationYear: "2021", major: "Engineering", documents: "Verified" }
          ].map((alumni, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">{alumni.name}</h4>
                <p className="text-sm text-gray-600">{alumni.major} - Class of {alumni.graduationYear}</p>
                <p className="text-sm text-gray-500">Documents: {alumni.documents}</p>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  Approve
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Event Approvals</h3>
        <div className="space-y-4">
          {dummyData.events.slice(0, 2).map((event) => (
            <div key={event.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">{event.title}</h4>
                <p className="text-sm text-gray-600">{event.date} at {event.location}</p>
                <p className="text-sm text-gray-500">{event.attendees} expected attendees</p>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  Approve
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnalyticsTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Engagement Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Active Users" value="1,247" icon={Users} color="bg-blue-500" trend={12} />
        <StatsCard title="Events This Month" value="23" icon={Calendar} color="bg-green-500" trend={18} />
        <StatsCard title="Job Applications" value="456" icon={Briefcase} color="bg-purple-500" trend={8} />
        <StatsCard title="Mentorship Sessions" value="89" icon={Heart} color="bg-pink-500" trend={25} />
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Platform Usage Trends</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Chart visualization would go here</p>
            <p className="text-sm text-gray-500">Integration with charting library needed</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Top Events</h3>
          <div className="space-y-3">
            {dummyData.events.map((event, index) => (
              <div key={event.id} className="flex items-center justify-between">
                <span className="text-gray-900">{event.title}</span>
                <span className="text-sm text-gray-500">{event.attendees} attendees</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Job Categories</h3>
          <div className="space-y-3">
            {[
              { category: "Software Engineering", applications: 156 },
              { category: "Product Management", applications: 89 },
              { category: "Data Science", applications: 67 },
              { category: "Design", applications: 45 }
            ].map((job, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-900">{job.category}</span>
                <span className="text-sm text-gray-500">{job.applications} applications</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LeaderboardTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Community Leaderboard</h2>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Top Contributors</h3>
        <div className="space-y-4">
          {[
            { rank: 1, name: "Michael Chen", role: "Alumni", points: 4200, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face", activity: "Mentoring" },
            { rank: 2, name: "Sarah Johnson", role: "Student", points: 2450, avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=50&h=50&fit=crop&crop=face", activity: "Events" },
            { rank: 3, name: "David Park", role: "Alumni", points: 2100, avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face", activity: "Job Referrals" },
            { rank: 4, name: "Lisa Thompson", role: "Alumni", points: 1890, avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop&crop=face", activity: "Mentoring" },
            { rank: 5, name: "Robert Kim", role: "Alumni", points: 1750, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=50&h=50&fit=crop&crop=face", activity: "Events" }
          ].map((user) => (
            <div key={user.rank} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                user.rank === 3 ? 'bg-orange-100 text-orange-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {user.rank}
              </div>
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {user.role}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Specialty: {user.activity}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">{user.points.toLocaleString()}</p>
                <p className="text-sm text-gray-500">points</p>
              </div>
              {user.rank <= 3 && (
                <Medal className={`w-8 h-8 ${
                  user.rank === 1 ? 'text-yellow-500' :
                  user.rank === 2 ? 'text-gray-500' :
                  'text-orange-500'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = ({ user, userRole, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab user={user} userRole={userRole} />;
      case 'events':
        return <EventsTab userRole={userRole} />;
      case 'jobs':
        return <JobsTab userRole={userRole} />;
      case 'mentorship':
        return <MentorshipTab userRole={userRole} />;
      case 'complaints':
        return <ComplaintsTab userRole={userRole} />;
      case 'ai-advisor':
        return <AIAdvisorTab />;
      case 'gamification':
        return <GamificationTab user={user} />;
      case 'blockchain':
        return <BlockchainTab user={user} />;
      case 'referrals':
        return <JobReferralsTab />;
      case 'memories':
        return <MemoriesTab />;
      case 'approvals':
        return <ApprovalsTab />;
      case 'analytics':
        return <AnalyticsTab />;
      case 'leaderboard':
        return <LeaderboardTab />;
      default:
        return <OverviewTab user={user} userRole={userRole} />;
    }
  };

  return (
    <div className="dashboard-container min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
      <Sidebar
        userRole={userRole}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={onLogout}
      />
      <div className="dashboard-main flex-1 flex flex-col min-h-screen">
        <Header user={user} />
        <main className="dashboard-content flex-1 p-8 max-w-7xl mx-auto w-full">
          <div className="animate-fadeInUp">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('student');
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (type) => {
    setCurrentUser(dummyData.users[type]);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  if (!isLoggedIn) {
    return (
      <LoginPage 
        userType={userType}
        onLogin={handleLogin}
        setUserType={setUserType}
      />
    );
  }

  return (
    <Dashboard 
      user={currentUser}
      userRole={currentUser.role}
      onLogout={handleLogout}
    />
  );
};

export default App;
