 // ============================================================================
// XP HISTORY FEATURE - MOCKUP DATA STRUCTURE
// ============================================================================
// Complete mockup data structure for testing XP History feature
// Based on the provided database schema

// ============================================================================
// 1. USERS & AUTHENTICATION
// ============================================================================

const mockUsers = [
    // Regular Users
    {
      id: "u1111111-1111-1111-1111-111111111111",
      email: "john.doe@email.com",
      phone: "+66812345678",
      email_verified_at: "2024-01-15T10:00:00+07:00",
      last_sign_in_at: "2024-12-28T09:15:00+07:00",
      created_at: "2024-01-15T10:00:00+07:00",
      updated_at: "2024-12-28T09:15:00+07:00"
    },
    {
      id: "u2222222-2222-2222-2222-222222222222",
      email: "jane.smith@email.com", 
      phone: "+66823456789",
      email_verified_at: "2024-02-20T14:30:00+07:00",
      last_sign_in_at: "2024-12-27T16:45:00+07:00",
      created_at: "2024-02-20T14:30:00+07:00",
      updated_at: "2024-12-27T16:45:00+07:00"
    },
    {
      id: "u3333333-3333-3333-3333-333333333333",
      email: "mike.johnson@email.com",
      phone: "+66834567890", 
      email_verified_at: "2024-03-10T11:20:00+07:00",
      last_sign_in_at: "2024-12-26T08:30:00+07:00",
      created_at: "2024-03-10T11:20:00+07:00",
      updated_at: "2024-12-26T08:30:00+07:00"
    },
    {
      id: "u4444444-4444-4444-4444-444444444444",
      email: "sara.wilson@email.com",
      phone: "+66845678901",
      email_verified_at: "2024-04-05T16:45:00+07:00", 
      last_sign_in_at: "2024-12-25T12:20:00+07:00",
      created_at: "2024-04-05T16:45:00+07:00",
      updated_at: "2024-12-25T12:20:00+07:00"
    },
    {
      id: "u5555555-5555-5555-5555-555555555555",
      email: "alex.brown@email.com",
      phone: "+66856789012",
      email_verified_at: "2024-05-12T13:15:00+07:00",
      last_sign_in_at: "2024-12-24T19:10:00+07:00", 
      created_at: "2024-05-12T13:15:00+07:00",
      updated_at: "2024-12-24T19:10:00+07:00"
    },
    // Admin Users
    {
      id: "a1111111-1111-1111-1111-111111111111",
      email: "admin.user@company.com",
      phone: "+66867890123",
      email_verified_at: "2024-01-01T09:00:00+07:00",
      last_sign_in_at: "2024-12-28T10:30:00+07:00",
      created_at: "2024-01-01T09:00:00+07:00", 
      updated_at: "2024-12-28T10:30:00+07:00"
    },
    {
      id: "a2222222-2222-2222-2222-222222222222",
      email: "super.admin@company.com", 
      phone: "+66878901234",
      email_verified_at: "2024-01-01T09:00:00+07:00",
      last_sign_in_at: "2024-12-28T11:45:00+07:00",
      created_at: "2024-01-01T09:00:00+07:00",
      updated_at: "2024-12-28T11:45:00+07:00"
    }
  ];
  
  // ============================================================================
  // 2. USER PROFILES 
  // ============================================================================
  
  const mockUserProfiles = [
    {
      id: "p1111111-1111-1111-1111-111111111111",
      user_id: "u1111111-1111-1111-1111-111111111111", 
      public_id: "john_doe_2024",
      display_name: "John Doe",
      avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      birthday: "1990-05-15",
      organization: "Thammasat University",
      department: "Computer Science",
      spendable_xp: 8250, // Current available XP
      total_xp: 15750,    // Total XP ever earned
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-01-15T10:00:00+07:00",
      updated_at: "2024-12-28T09:15:00+07:00"
    },
    {
      id: "p2222222-2222-2222-2222-222222222222", 
      user_id: "u2222222-2222-2222-2222-222222222222",
      public_id: "jane_smith_2024",
      display_name: "Jane Smith",
      avatar_url: "https://images.unsplash.com/photo-1494790108755-2616b612b1e4?w=150",
      birthday: "1995-08-22",
      organization: "Thammasat University", 
      department: "Business Administration",
      spendable_xp: 12300,
      total_xp: 23800,
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-02-20T14:30:00+07:00",
      updated_at: "2024-12-27T16:45:00+07:00"
    },
    {
      id: "p3333333-3333-3333-3333-333333333333",
      user_id: "u3333333-3333-3333-3333-333333333333",
      public_id: "mike_johnson_2024", 
      display_name: "Mike Johnson",
      avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      birthday: "1988-12-03",
      organization: "Thammasat University",
      department: "Computer Science", 
      spendable_xp: 4650,
      total_xp: 9200,
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-03-10T11:20:00+07:00",
      updated_at: "2024-12-26T08:30:00+07:00"
    },
    {
      id: "p4444444-4444-4444-4444-444444444444",
      user_id: "u4444444-4444-4444-4444-444444444444",
      public_id: "sara_wilson_2024",
      display_name: "Sara Wilson", 
      avatar_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      birthday: "1992-07-18",
      organization: "Thammasat University",
      department: "Engineering",
      spendable_xp: 950,  // Low XP user
      total_xp: 3200,
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-04-05T16:45:00+07:00",
      updated_at: "2024-12-25T12:20:00+07:00"
    },
    {
      id: "p5555555-5555-5555-5555-555555555555",
      user_id: "u5555555-5555-5555-5555-555555555555",
      public_id: "alex_brown_2024",
      display_name: "Alex Brown",
      avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150", 
      birthday: "1993-11-09",
      organization: "Thammasat University",
      department: "Computer Science",
      spendable_xp: 18750, // High XP user
      total_xp: 31250,
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-05-12T13:15:00+07:00",
      updated_at: "2024-12-24T19:10:00+07:00"
    },
    // Admin Profiles
    {
      id: "pa111111-1111-1111-1111-111111111111",
      user_id: "a1111111-1111-1111-1111-111111111111",
      public_id: "admin_user",
      display_name: "Admin User",
      avatar_url: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150",
      birthday: "1985-03-12",
      organization: "Company Admin",
      department: "System Administration",
      spendable_xp: 0,
      total_xp: 0,
      created_by: "a2222222-2222-2222-2222-222222222222",
      created_at: "2024-01-01T09:00:00+07:00",
      updated_at: "2024-12-28T10:30:00+07:00"
    },
    {
      id: "pa222222-2222-2222-2222-222222222222",
      user_id: "a2222222-2222-2222-2222-222222222222",
      public_id: "super_admin",
      display_name: "Super Admin",
      avatar_url: "https://images.unsplash.com/photo-1507120878965-54b2d3939100?w=150",
      birthday: "1982-01-25",
      organization: "Company Admin", 
      department: "System Administration",
      spendable_xp: 0,
      total_xp: 0,
      created_by: "a2222222-2222-2222-2222-222222222222",
      created_at: "2024-01-01T09:00:00+07:00",
      updated_at: "2024-12-28T11:45:00+07:00"
    }
  ];
  
  // ============================================================================
  // 3. ROLES & PERMISSIONS
  // ============================================================================
  
  const mockRoles = [
    {
      id: "r1111111-1111-1111-1111-111111111111",
      name: "user",
      description: "Regular user with basic permissions",
      created_by: "a2222222-2222-2222-2222-222222222222",
      created_at: "2024-01-01T09:00:00+07:00",
      updated_at: "2024-01-01T09:00:00+07:00"
    },
    {
      id: "r2222222-2222-2222-2222-222222222222", 
      name: "admin",
      description: "Administrator with full system access",
      created_by: "a2222222-2222-2222-2222-222222222222",
      created_at: "2024-01-01T09:00:00+07:00",
      updated_at: "2024-01-01T09:00:00+07:00"
    }
  ];
  
  const mockUserRoles = [
    // Regular users
    { user_id: "p1111111-1111-1111-1111-111111111111", role_id: "r1111111-1111-1111-1111-111111111111", created_at: "2024-01-15T10:00:00+07:00" },
    { user_id: "p2222222-2222-2222-2222-222222222222", role_id: "r1111111-1111-1111-1111-111111111111", created_at: "2024-02-20T14:30:00+07:00" },
    { user_id: "p3333333-3333-3333-3333-333333333333", role_id: "r1111111-1111-1111-1111-111111111111", created_at: "2024-03-10T11:20:00+07:00" },
    { user_id: "p4444444-4444-4444-4444-444444444444", role_id: "r1111111-1111-1111-1111-111111111111", created_at: "2024-04-05T16:45:00+07:00" },
    { user_id: "p5555555-5555-5555-5555-555555555555", role_id: "r1111111-1111-1111-1111-111111111111", created_at: "2024-05-12T13:15:00+07:00" },
    // Admin users
    { user_id: "pa111111-1111-1111-1111-111111111111", role_id: "r2222222-2222-2222-2222-222222222222", created_at: "2024-01-01T09:00:00+07:00" },
    { user_id: "pa222222-2222-2222-2222-222222222222", role_id: "r2222222-2222-2222-2222-222222222222", created_at: "2024-01-01T09:00:00+07:00" }
  ];
  
  // ============================================================================
  // 4. CONTENT SOURCES (for XP earning)
  // ============================================================================
  
  const mockArticles = [
    {
      id: "art11111-1111-1111-1111-111111111111",
      author_id: "a1111111-1111-1111-1111-111111111111",
      title: "Introduction to Machine Learning",
      slug: "intro-machine-learning",
      content: "Complete guide to ML fundamentals...",
      cover_image_url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400",
      status: "published",
      published_at: "2024-01-20T10:00:00+07:00",
      created_at: "2024-01-18T14:30:00+07:00",
      updated_at: "2024-01-20T10:00:00+07:00"
    },
    {
      id: "art22222-2222-2222-2222-222222222222",
      author_id: "a1111111-1111-1111-1111-111111111111", 
      title: "Advanced Database Design",
      slug: "advanced-database-design",
      content: "Deep dive into database architecture...",
      cover_image_url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400",
      status: "published",
      published_at: "2024-03-15T09:30:00+07:00",
      created_at: "2024-03-12T11:20:00+07:00",
      updated_at: "2024-03-15T09:30:00+07:00"
    },
    {
      id: "art33333-3333-3333-3333-333333333333",
      author_id: "a1111111-1111-1111-1111-111111111111",
      title: "Cloud Computing Fundamentals", 
      slug: "cloud-computing-fundamentals",
      content: "Understanding cloud architecture...",
      cover_image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
      status: "published", 
      published_at: "2024-06-10T14:00:00+07:00",
      created_at: "2024-06-08T16:45:00+07:00",
      updated_at: "2024-06-10T14:00:00+07:00"
    }
  ];
  
  const mockQuizzes = [
    {
      id: "quiz1111-1111-1111-1111-111111111111",
      title: "Python Basics Quiz",
      description: "Test your knowledge of Python fundamentals",
      frequency: "weekly",
      xp_reward_amount: 100,
      status: "published",
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-02-01T10:00:00+07:00",
      updated_at: "2024-02-01T10:00:00+07:00"
    },
    {
      id: "quiz2222-2222-2222-2222-222222222222",
      title: "JavaScript Advanced Quiz",
      description: "Advanced JavaScript concepts and patterns",
      frequency: "monthly", 
      xp_reward_amount: 200,
      status: "published",
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-04-15T14:30:00+07:00",
      updated_at: "2024-04-15T14:30:00+07:00"
    },
    {
      id: "quiz3333-3333-3333-3333-333333333333",
      title: "Daily Coding Challenge",
      description: "Daily programming problem solving",
      frequency: "daily",
      xp_reward_amount: 50,
      status: "published",
      created_by: "a1111111-1111-1111-1111-111111111111", 
      created_at: "2024-06-01T08:00:00+07:00",
      updated_at: "2024-06-01T08:00:00+07:00"
    }
  ];
  
  const mockEvents = [
    {
      id: "evt11111-1111-1111-1111-111111111111",
      name: "Tech Conference 2024",
      description: "Annual technology conference with industry leaders",
      cover_image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      event_type: "hybrid",
      entry_type: "free",
      location_details: "Thammasat University, Main Auditorium",
      start_time: "2024-03-20T09:00:00+07:00",
      end_time: "2024-03-20T17:00:00+07:00",
      max_attendees: 500,
      status: "published",
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-02-15T10:00:00+07:00",
      updated_at: "2024-03-20T17:00:00+07:00"
    },
    {
      id: "evt22222-2222-2222-2222-222222222222",
      name: "AI Workshop Series",
      description: "Hands-on artificial intelligence workshop",
      cover_image_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
      event_type: "onsite",
      entry_type: "paid",
      price_amount: 1500.00,
      price_currency: "THB",
      location_details: "Computer Lab Building, Floor 3",
      start_time: "2024-05-25T13:00:00+07:00",
      end_time: "2024-05-25T18:00:00+07:00",
      max_attendees: 50,
      status: "published",
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-04-20T14:30:00+07:00",
      updated_at: "2024-05-25T18:00:00+07:00"
    },
    {
      id: "evt33333-3333-3333-3333-333333333333",
      name: "Blockchain Seminar",
      description: "Understanding blockchain technology and applications",
      cover_image_url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400",
      event_type: "online",
      entry_type: "xp_redeemable",
      xp_cost_to_redeem: 500,
      location_details: "Zoom Meeting Room",
      start_time: "2024-08-15T19:00:00+07:00",
      end_time: "2024-08-15T21:00:00+07:00",
      max_attendees: 200,
      status: "published",
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-07-10T16:45:00+07:00",
      updated_at: "2024-08-15T21:00:00+07:00"
    }
  ];
  
  const mockProducts = [
    {
      id: "prod1111-1111-1111-1111-111111111111",
      name: "Programming T-Shirt",
      slug: "programming-tshirt",
      description: "Cool coding-themed t-shirt for developers",
      cover_image_url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      product_type: "physical",
      status: "published",
      price_amount: 590.00,
      price_currency: "THB",
      max_xp_discount: 200,
      stock_quantity: 50,
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-02-10T11:30:00+07:00",
      updated_at: "2024-12-20T14:15:00+07:00"
    },
    {
      id: "prod2222-2222-2222-2222-222222222222",
      name: "Online Course: React Mastery",
      slug: "react-mastery-course",
      description: "Complete React.js course with hands-on projects",
      cover_image_url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      product_type: "digital",
      status: "published",
      price_amount: 2500.00,
      price_currency: "THB",
      max_xp_discount: 1000,
      digital_content_url: "https://courses.example.com/react-mastery",
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-03-05T09:20:00+07:00",
      updated_at: "2024-12-15T10:30:00+07:00"
    },
    {
      id: "prod3333-3333-3333-3333-333333333333",
      name: "Developer Sticker Pack",
      slug: "developer-sticker-pack",
      description: "Collection of programming language stickers",
      cover_image_url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
      product_type: "physical",
      status: "published",
      xp_cost_to_redeem: 800,
      is_redeemable_only: true,
      stock_quantity: 100,
      created_by: "a1111111-1111-1111-1111-111111111111",
      created_at: "2024-04-12T15:45:00+07:00",
      updated_at: "2024-12-10T08:20:00+07:00"
    }
  ];
  
  // ============================================================================
  // 5. XP TRANSACTIONS (MAIN DATA FOR XP HISTORY)
  // ============================================================================
  
  const mockXPTransactions = [
    // === JOHN DOE (u1111111) XP HISTORY ===
    // Started with article reading (Jan 2024)
    {
      id: "xp111111-1111-1111-1111-111111111111",
      user_id: "p1111111-1111-1111-1111-111111111111",
      amount: 250,
      source_type: "ARTICLE_READ",
      source_id: "art11111-1111-1111-1111-111111111111",
      description: "Read: Introduction to Machine Learning",
      expires_at: "2025-01-21T10:00:00+07:00", // 1 year expiry
      created_at: "2024-01-21T10:00:00+07:00"
    },
    // Quiz completion
    {
      id: "xp111112-1111-1111-1111-111111111111",
      user_id: "p1111111-1111-1111-1111-111111111111",
      amount: 100,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz1111-1111-1111-1111-111111111111",
      description: "Completed: Python Basics Quiz (Score: 85%)",
      expires_at: "2025-02-05T14:30:00+07:00",
      created_at: "2024-02-05T14:30:00+07:00"
    },
    // Event check-in
    {
      id: "xp111113-1111-1111-1111-111111111111", 
      user_id: "p1111111-1111-1111-1111-111111111111",
      amount: 500,
      source_type: "EVENT_CHECK_IN",
      source_id: "evt11111-1111-1111-1111-111111111111",
      description: "Attended: Tech Conference 2024",
      expires_at: "2025-03-20T09:00:00+07:00",
      created_at: "2024-03-20T09:00:00+07:00"
    },
    // Article interaction 
    {
      id: "xp111114-1111-1111-1111-111111111111",
      user_id: "p1111111-1111-1111-1111-111111111111",
      amount: 150,
      source_type: "ARTICLE_INTERACTION",
      source_id: "art22222-2222-2222-2222-222222222222",
      description: "Read: Advanced Database Design + Quiz completed",
      expires_at: "2025-03-22T11:15:00+07:00",
      created_at: "2024-03-22T11:15:00+07:00"
    },
    // Product purchase with XP discount (spent XP)
    {
      id: "xp111115-1111-1111-1111-111111111111",
      user_id: "p1111111-1111-1111-1111-111111111111",
      amount: -200,
      source_type: "PURCHASE_CASHBACK",
      source_id: "prod1111-1111-1111-1111-111111111111",
      description: "XP Discount: Programming T-Shirt purchase",
      created_at: "2024-04-15T16:20:00+07:00"
    },
    // More quiz completions
    {
      id: "xp111116-1111-1111-1111-111111111111",
      user_id: "p1111111-1111-1111-1111-111111111111",
      amount: 200,
      source_type: "QUIZ_COMPLETION", 
      source_id: "quiz2222-2222-2222-2222-222222222222",
      description: "Completed: JavaScript Advanced Quiz (Score: 92%)",
      expires_at: "2025-04-20T10:45:00+07:00",
      created_at: "2024-04-20T10:45:00+07:00"
    },
    // Daily quiz streak
    {
      id: "xp111117-1111-1111-1111-111111111111",
      user_id: "p1111111-1111-1111-1111-111111111111",
      amount: 350,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz3333-3333-3333-3333-333333333333",
      description: "Daily Coding Challenge - 7 day streak bonus!",
      expires_at: "2025-06-15T08:30:00+07:00",
      created_at: "2024-06-15T08:30:00+07:00"
    },
    // Event registration with XP  
    {
      id: "xp111118-1111-1111-1111-111111111111",
      user_id: "p1111111-1111-1111-1111-111111111111",
      amount: -500,
      source_type: "EVENT_CHECK_IN",
      source_id: "evt33333-3333-3333-3333-333333333333",
      description: "Redeemed entry: Blockchain Seminar",
      created_at: "2024-08-15T18:45:00+07:00"
    },
    // Recent article reading
    {
      id: "xp111119-1111-1111-1111-111111111111",
      user_id: "p1111111-1111-1111-1111-111111111111",
      amount: 300,
      source_type: "ARTICLE_READ",
      source_id: "art33333-3333-3333-3333-333333333333",
      description: "Read: Cloud Computing Fundamentals",
      expires_at: "2025-12-20T14:00:00+07:00",
      created_at: "2024-12-20T14:00:00+07:00"
    },
    // Recent XP that will expire soon (for testing)
    {
      id: "xp11111a-1111-1111-1111-111111111111",
      user_id: "p1111111-1111-1111-1111-111111111111",
      amount: 150,
      source_type: "MANUAL_ADJUSTMENT",
      source_id: "manual-001",
      description: "Bonus XP for community contribution",
      expires_at: "2025-01-10T10:00:00+07:00", // Expires soon!
      created_at: "2024-12-25T10:00:00+07:00"
    },
  
    // === JANE SMITH (u2222222) XP HISTORY ===
    // Very active user with lots of transactions
    {
      id: "xp222221-2222-2222-2222-222222222222",
      user_id: "p2222222-2222-2222-2222-222222222222",
      amount: 250,
      source_type: "ARTICLE_READ",
      source_id: "art11111-1111-1111-1111-111111111111",
      description: "Read: Introduction to Machine Learning",
      expires_at: "2025-02-25T14:30:00+07:00",
      created_at: "2024-02-25T14:30:00+07:00"
    },
    {
      id: "xp222222-2222-2222-2222-222222222222",
      user_id: "p2222222-2222-2222-2222-222222222222",
      amount: 100,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz1111-1111-1111-1111-111111111111", 
      description: "Completed: Python Basics Quiz (Score: 78%)",
      expires_at: "2025-03-10T09:15:00+07:00",
      created_at: "2024-03-10T09:15:00+07:00"
    },
    {
      id: "xp222223-2222-2222-2222-222222222222",
      user_id: "p2222222-2222-2222-2222-222222222222",
      amount: 500,
      source_type: "EVENT_CHECK_IN",
      source_id: "evt11111-1111-1111-1111-111111111111",
      description: "Attended: Tech Conference 2024",
      expires_at: "2025-03-21T09:00:00+07:00",
      created_at: "2024-03-21T09:00:00+07:00"
    },
    // Large purchase with XP
    {
      id: "xp222224-2222-2222-2222-222222222222",
      user_id: "p2222222-2222-2222-2222-222222222222",
      amount: -1000,
      source_type: "PURCHASE_CASHBACK",
      source_id: "prod2222-2222-2222-2222-222222222222",
      description: "XP Discount: Online Course: React Mastery",
      created_at: "2024-04-10T11:30:00+07:00"
    },
    // More earnings
    {
      id: "xp222225-2222-2222-2222-222222222222",
      user_id: "p2222222-2222-2222-2222-222222222222",
      amount: 200,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz2222-2222-2222-2222-222222222222",
      description: "Completed: JavaScript Advanced Quiz (Score: 95%)",
      expires_at: "2025-04-25T15:20:00+07:00",
      created_at: "2024-04-25T15:20:00+07:00"
    },
    // Daily streaks
    {
      id: "xp222226-2222-2222-2222-222222222222",
      user_id: "p2222222-2222-2222-2222-222222222222",
      amount: 750,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz3333-3333-3333-3333-333333333333",
      description: "Daily Coding Challenge - 15 day streak! Bonus multiplier",
      expires_at: "2025-06-20T08:00:00+07:00",
      created_at: "2024-06-20T08:00:00+07:00"
    },
    // Event participation
    {
      id: "xp222227-2222-2222-2222-222222222222",
      user_id: "p2222222-2222-2222-2222-222222222222",
      amount: 400,
      source_type: "EVENT_CHECK_IN",
      source_id: "evt22222-2222-2222-2222-222222222222",
      description: "Attended: AI Workshop Series",
      expires_at: "2025-05-25T13:00:00+07:00",
      created_at: "2024-05-25T13:00:00+07:00"
    },
    // Reward redemption
    {
      id: "xp222228-2222-2222-2222-222222222222",
      user_id: "p2222222-2222-2222-2222-222222222222",
      amount: -800,
      source_type: "REWARD_REDEMPTION",
      source_id: "prod3333-3333-3333-3333-333333333333",
      description: "Redeemed: Developer Sticker Pack",
      created_at: "2024-07-15T10:45:00+07:00"
    },
    // Recent activity
    {
      id: "xp222229-2222-2222-2222-222222222222",
      user_id: "p2222222-2222-2222-2222-222222222222",
      amount: 300,
      source_type: "ARTICLE_READ",
      source_id: "art33333-3333-3333-3333-333333333333",
      description: "Read: Cloud Computing Fundamentals + shared article",
      expires_at: "2025-12-25T16:30:00+07:00",
      created_at: "2024-12-25T16:30:00+07:00"
    },
    // XP that expired
    {
      id: "xp22222a-2222-2222-2222-222222222222",
      user_id: "p2222222-2222-2222-2222-222222222222",
      amount: -400,
      source_type: "XP_EXPIRATION",
      source_id: "xp222221-2222-2222-2222-222222222222",
      description: "Expired XP: Introduction to Machine Learning reading reward",
      created_at: "2024-12-15T00:00:00+07:00"
    },
  
    // === MIKE JOHNSON (u3333333) XP HISTORY ===
    // Moderate user with some expired XP
    {
      id: "xp333331-3333-3333-3333-333333333333",
      user_id: "p3333333-3333-3333-3333-333333333333",
      amount: 150,
      source_type: "ARTICLE_READ",
      source_id: "art22222-2222-2222-2222-222222222222",
      description: "Read: Advanced Database Design",
      expires_at: "2025-03-25T11:20:00+07:00",
      created_at: "2024-03-25T11:20:00+07:00"
    },
    {
      id: "xp333332-3333-3333-3333-333333333333",
      user_id: "p3333333-3333-3333-3333-333333333333",
      amount: 100,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz1111-1111-1111-1111-111111111111",
      description: "Completed: Python Basics Quiz (Score: 82%)",
      expires_at: "2025-04-15T16:45:00+07:00",
      created_at: "2024-04-15T16:45:00+07:00"
    },
    // Product purchase
    {
      id: "xp333333-3333-3333-3333-333333333333",
      user_id: "p3333333-3333-3333-3333-333333333333",
      amount: -200,
      source_type: "PURCHASE_CASHBACK",
      source_id: "prod1111-1111-1111-1111-111111111111",
      description: "XP Discount: Programming T-Shirt purchase",
      created_at: "2024-05-10T14:30:00+07:00"
    },
    // Some expired XP
    {
      id: "xp333334-3333-3333-3333-333333333333",
      user_id: "p3333333-3333-3333-3333-333333333333",
      amount: -150,
      source_type: "XP_EXPIRATION", 
      source_id: "xp333331-3333-3333-3333-333333333333",
      description: "Expired XP: Advanced Database Design reading reward",
      created_at: "2024-11-20T00:00:00+07:00"
    },
    // Recent earnings
    {
      id: "xp333335-3333-3333-3333-333333333333",
      user_id: "p3333333-3333-3333-3333-333333333333",
      amount: 250,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz3333-3333-3333-3333-333333333333",
      description: "Daily Coding Challenge - 5 day streak",
      expires_at: "2025-12-15T08:00:00+07:00",
      created_at: "2024-12-15T08:00:00+07:00"
    },
    // Admin adjustment (positive)
    {
      id: "xp333336-3333-3333-3333-333333333333",
      user_id: "p3333333-3333-3333-3333-333333333333",
      amount: 500,
      source_type: "MANUAL_ADJUSTMENT",
      source_id: "admin-bonus-001",
      description: "Admin Bonus: Outstanding community help",
      expires_at: "2025-12-20T10:00:00+07:00",
      created_at: "2024-12-20T10:00:00+07:00"
    },
  
    // === SARA WILSON (u4444444) XP HISTORY ===
    // New user with limited activity
    {
      id: "xp444441-4444-4444-4444-444444444444",
      user_id: "p4444444-4444-4444-4444-444444444444",
      amount: 100,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz1111-1111-1111-1111-111111111111",
      description: "Completed: Python Basics Quiz (Score: 72%)",
      expires_at: "2025-04-20T16:45:00+07:00",
      created_at: "2024-04-20T16:45:00+07:00"
    },
    {
      id: "xp444442-4444-4444-4444-444444444444",
      user_id: "p4444444-4444-4444-4444-444444444444",
      amount: 150,
      source_type: "ARTICLE_READ",
      source_id: "art33333-3333-3333-3333-333333333333",
      description: "Read: Cloud Computing Fundamentals",
      expires_at: "2025-06-25T12:20:00+07:00",
      created_at: "2024-06-25T12:20:00+07:00"
    },
    // Recent activity
    {
      id: "xp444443-4444-4444-4444-444444444444",
      user_id: "p4444444-4444-4444-4444-444444444444",
      amount: 50,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz3333-3333-3333-3333-333333333333",
      description: "Daily Coding Challenge completed",
      expires_at: "2025-12-22T08:00:00+07:00",
      created_at: "2024-12-22T08:00:00+07:00"
    },
  
    // === ALEX BROWN (u5555555) XP HISTORY ===
    // Power user with extensive history
    {
      id: "xp555551-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555", 
      amount: 250,
      source_type: "ARTICLE_READ",
      source_id: "art11111-1111-1111-1111-111111111111",
      description: "Read: Introduction to Machine Learning",
      expires_at: "2025-05-20T13:15:00+07:00",
      created_at: "2024-05-20T13:15:00+07:00"
    },
    {
      id: "xp555552-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: 150,
      source_type: "ARTICLE_READ",
      source_id: "art22222-2222-2222-2222-222222222222",
      description: "Read: Advanced Database Design", 
      expires_at: "2025-05-25T10:30:00+07:00",
      created_at: "2024-05-25T10:30:00+07:00"
    },
    {
      id: "xp555553-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: 300,
      source_type: "ARTICLE_READ",
      source_id: "art33333-3333-3333-3333-333333333333",
      description: "Read: Cloud Computing Fundamentals",
      expires_at: "2025-06-15T14:45:00+07:00",
      created_at: "2024-06-15T14:45:00+07:00"
    },
    // Multiple quiz completions
    {
      id: "xp555554-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: 100,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz1111-1111-1111-1111-111111111111",
      description: "Completed: Python Basics Quiz (Score: 98%)",
      expires_at: "2025-06-01T11:00:00+07:00",
      created_at: "2024-06-01T11:00:00+07:00"
    },
    {
      id: "xp555555-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: 200,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz2222-2222-2222-2222-222222222222",
      description: "Completed: JavaScript Advanced Quiz (Score: 100%)",
      expires_at: "2025-06-10T09:30:00+07:00",
      created_at: "2024-06-10T09:30:00+07:00"
    },
    // Event activities
    {
      id: "xp555556-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: 500,
      source_type: "EVENT_CHECK_IN",
      source_id: "evt11111-1111-1111-1111-111111111111",
      description: "Attended: Tech Conference 2024",
      expires_at: "2025-03-20T09:00:00+07:00",
      created_at: "2024-03-20T09:00:00+07:00"
    },
    {
      id: "xp555557-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: 400,
      source_type: "EVENT_CHECK_IN",
      source_id: "evt22222-2222-2222-2222-222222222222",
      description: "Attended: AI Workshop Series",
      expires_at: "2025-05-25T13:00:00+07:00", 
      created_at: "2024-05-25T13:00:00+07:00"
    },
    // Major daily streak bonus
    {
      id: "xp555558-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: 1250,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz3333-3333-3333-3333-333333333333",
      description: "Daily Coding Challenge - 30 day streak! Ultimate bonus",
      expires_at: "2025-07-30T08:00:00+07:00",
      created_at: "2024-07-30T08:00:00+07:00"
    },
    // Large purchase
    {
      id: "xp555559-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: -1000,
      source_type: "PURCHASE_CASHBACK",
      source_id: "prod2222-2222-2222-2222-222222222222",
      description: "XP Discount: Online Course: React Mastery",
      created_at: "2024-08-05T15:20:00+07:00"
    },
    // Multiple reward redemptions
    {
      id: "xp55555a-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: -800,
      source_type: "REWARD_REDEMPTION",
      source_id: "prod3333-3333-3333-3333-333333333333",
      description: "Redeemed: Developer Sticker Pack",
      created_at: "2024-08-20T12:30:00+07:00"
    },
    {
      id: "xp55555b-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: -200,
      source_type: "PURCHASE_CASHBACK",
      source_id: "prod1111-1111-1111-1111-111111111111",
      description: "XP Discount: Programming T-Shirt purchase",
      created_at: "2024-09-15T14:45:00+07:00"
    },
    // Recent continued activity
    {
      id: "xp55555c-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: 450,
      source_type: "QUIZ_COMPLETION",
      source_id: "quiz3333-3333-3333-3333-333333333333",
      description: "Daily Coding Challenge - Continued streak bonus",
      expires_at: "2025-12-28T08:00:00+07:00",
      created_at: "2024-12-28T08:00:00+07:00"
    },
    // Admin cancellation example  
    {
      id: "xp55555d-5555-5555-5555-555555555555",
      user_id: "p5555555-5555-5555-5555-555555555555",
      amount: -100,
      source_type: "MANUAL_ADJUSTMENT",
      source_id: "cancel-001",
      description: "Cancelled: Duplicate quiz completion (Admin correction)",
      created_at: "2024-12-20T16:30:00+07:00"
    }
  ];
  
  // ============================================================================
  // 6. ADMIN ACTIONS AUDIT LOG
  // ============================================================================
  
  const mockAdminActions = [
    {
      id: "audit111-1111-1111-1111-111111111111",
      admin_user_id: "a1111111-1111-1111-1111-111111111111",
      action_type: "XP_MANUAL_ADJUSTMENT",
      target_entity_type: "xp_transaction",
      target_entity_id: "xp333336-3333-3333-3333-333333333333",
      details: {
        user_id: "p3333333-3333-3333-3333-333333333333",
        amount: 500,
        reason: "Outstanding community help - helping other students",
        previous_balance: 4150,
        new_balance: 4650
      },
      created_at: "2024-12-20T10:00:00+07:00"
    },
    {
      id: "audit222-2222-2222-2222-222222222222",
      admin_user_id: "a1111111-1111-1111-1111-111111111111",
      action_type: "XP_TRANSACTION_CANCEL",
      target_entity_type: "xp_transaction", 
      target_entity_id: "xp55555d-5555-5555-5555-555555555555",
      details: {
        user_id: "p5555555-5555-5555-5555-555555555555",
        original_transaction_id: "duplicate-quiz-completion",
        amount: -100,
        reason: "Duplicate quiz completion detected by system audit"
      },
      created_at: "2024-12-20T16:30:00+07:00"
    },
    {
      id: "audit333-3333-3333-3333-333333333333",
      admin_user_id: "a2222222-2222-2222-2222-222222222222",
      action_type: "XP_HISTORY_EXPORT",
      target_entity_type: "user_profile",
      target_entity_id: null,
      details: {
        export_type: "csv",
        filters: {
          date_from: "2024-12-01",
          date_to: "2024-12-31",
          user_count: 5,
          transaction_count: 47
        },
        file_size: "15.2KB"
      },
      created_at: "2024-12-28T11:45:00+07:00"
    }
  ];
  
  // ============================================================================
  // 7. SUMMARY STATISTICS FOR TESTING
  // ============================================================================
  
  const mockDataSummary = {
    users: {
      total: 7,
      regular_users: 5,
      admin_users: 2,
      active_users: 5, // Users with recent activity
    },
    xp_transactions: {
      total: 47,
      by_type: {
        earned: 35,      // Positive amounts
        spent: 10,       // Negative amounts (purchases/redemptions)
        expired: 2,      // XP_EXPIRATION type
        cancelled: 1     // MANUAL_ADJUSTMENT negative
      },
      by_source: {
        ARTICLE_READ: 8,
        ARTICLE_INTERACTION: 1,
        QUIZ_COMPLETION: 16,
        EVENT_CHECK_IN: 6,
        PURCHASE_CASHBACK: 6,
        REWARD_REDEMPTION: 2,
        XP_EXPIRATION: 2,
        MANUAL_ADJUSTMENT: 3
      },
      total_xp: {
        earned: 12850,
        spent: 6100,
        expired: 550,
        cancelled: 100,
        net_available: 6100
      }
    },
    date_ranges: {
      earliest_transaction: "2024-01-21T10:00:00+07:00",
      latest_transaction: "2024-12-28T08:00:00+07:00",
      transactions_per_month: {
        "2024-01": 1,
        "2024-02": 3,
        "2024-03": 8,
        "2024-04": 6,
        "2024-05": 7,
        "2024-06": 8,
        "2024-07": 2,
        "2024-08": 4,
        "2024-09": 1,
        "2024-11": 1,
        "2024-12": 6
      }
    },
    expiring_soon: {
      within_7_days: 1,    // xp11111a expires 2025-01-10
      within_30_days: 3,   // Multiple transactions expiring in Jan 2025
      total_expiring_value: 650
    }
  };
  
  // ============================================================================
  // 8. EXPORT FOR USE IN APPLICATION
  // ============================================================================
  
  export const XPHistoryMockData = {
    users: mockUsers,
    userProfiles: mockUserProfiles,
    roles: mockRoles,
    userRoles: mockUserRoles,
    articles: mockArticles,
    quizzes: mockQuizzes,
    events: mockEvents,
    products: mockProducts,
    xpTransactions: mockXPTransactions,
    adminActions: mockAdminActions,
    summary: mockDataSummary
  };
  
  // Quick access helpers for testing
  export const getTransactionsByUser = (userId: string) => {
    return mockXPTransactions.filter(tx => tx.user_id === userId);
  };
  
  export const getTransactionsByType = (sourceType: string) => {
    return mockXPTransactions.filter(tx => tx.source_type === sourceType);
  };
  
  export const getTransactionsByDateRange = (startDate: string, endDate: string) => {
    return mockXPTransactions.filter(tx => 
      tx.created_at >= startDate && tx.created_at <= endDate
    );
  };
  
  export const getUserXPSummary = (userId: string) => {
    const userTx = getTransactionsByUser(userId);
    const earned = userTx.filter(tx => tx.amount > 0).reduce((sum, tx) => sum + tx.amount, 0);
    const spent = userTx.filter(tx => tx.amount < 0 && tx.source_type !== 'XP_EXPIRATION').reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
    const expired = userTx.filter(tx => tx.source_type === 'XP_EXPIRATION').reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
    
    return {
      total_earned: earned,
      total_spent: spent,
      total_expired: expired,
      current_balance: earned - spent - expired,
      transaction_count: userTx.length
    };
  };
  
  // ============================================================================
  // 9. USAGE EXAMPLES FOR TESTING
  // ============================================================================
  
  /* 
  // Example usage in your components:
  
  // Get John Doe's transaction history
  const johnTransactions = getTransactionsByUser("p1111111-1111-1111-1111-111111111111");
  
  // Get all quiz completion transactions
  const quizTransactions = getTransactionsByType("QUIZ_COMPLETION");
  
  // Get December 2024 transactions
  const decemberTx = getTransactionsByDateRange("2024-12-01", "2024-12-31");
  
  // Get user summary
  const johnSummary = getUserXPSummary("p1111111-1111-1111-1111-111111111111");
  console.log(johnSummary);
  // Output: { total_earned: 1850, total_spent: 700, total_expired: 0, current_balance: 1150, transaction_count: 10 }
  
  // Filter for expiring transactions
  const expiringSoon = mockXPTransactions.filter(tx => 
    tx.expires_at && new Date(tx.expires_at) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  );
  
  // Get admin actions
  const recentAdminActions = mockAdminActions.filter(action => 
    action.created_at >= "2024-12-01T00:00:00+07:00"
  );
  */