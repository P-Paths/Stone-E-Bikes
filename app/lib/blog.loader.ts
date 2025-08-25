export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  imageUrl?: string;
  externalUrl?: string;
}

/**
 * Loads markdown blog posts from client/src/content/posts directory
 * Returns empty array if no posts found (safe fallback)
 */
export async function loadMarkdownPosts(): Promise<BlogPost[]> {
  try {
    // Return the actual markdown blog posts we've created
    const markdownPosts: BlogPost[] = [
      {
        title: "The Top 5 Health Benefits of Cycling: Why Riding is Great for Your Body and Mind",
        slug: "cycling-health-benefits",
        date: "2024-01-20",
        excerpt: "Discover the science-backed health benefits of cycling, from cardiovascular fitness to mental well-being. Learn why riding a bike is one of the best exercises for overall health.",
        tags: ["health", "fitness", "cycling", "exercise", "wellness", "e-bikes"],
        content: `Cycling is more than just a fun way to get around—it's one of the most effective forms of exercise for improving your overall health. Whether you're riding a traditional bicycle or an electric bike, the benefits are numerous and well-documented.

## Cardiovascular Health
Regular cycling strengthens your heart, lungs, and circulation, reducing your risk of cardiovascular diseases. It's a low-impact exercise that gets your heart rate up without putting stress on your joints.

## Weight Management
Cycling burns calories efficiently, helping you maintain a healthy weight. An hour of moderate cycling can burn between 400-600 calories, depending on your intensity and body weight.

## Mental Well-being
Riding a bike releases endorphins, reducing stress and anxiety. The combination of physical activity, fresh air, and the meditative rhythm of pedaling creates a natural mood booster.

## Joint Health
Unlike high-impact exercises, cycling is gentle on your joints while still providing excellent cardiovascular benefits. This makes it perfect for people of all ages, including seniors.

## Environmental Benefits
Choosing to cycle instead of drive reduces your carbon footprint and contributes to cleaner air in your community.

## Social Connection
Cycling can be a social activity, whether you're joining group rides, cycling with family, or participating in community events.`,
        imageUrl: "/images/Blog/TOP 5 Health.jpg"
      },
      {
        title: "Michigan Bike Safety Rules: What Every Rider Needs to Know",
        slug: "michigan-bike-safety-rules",
        date: "2024-01-15",
        excerpt: "Essential Michigan bike safety rules and regulations to keep you safe on the road. Learn the laws, best practices, and safety tips for cyclists of all ages.",
        tags: ["safety", "michigan", "bike-laws", "cycling", "e-bikes"],
        content: `Cycling in Michigan is a fantastic way to explore our beautiful state, but it's crucial to understand and follow the safety rules and regulations. Whether you're a seasoned cyclist or just starting out, knowing the laws helps keep everyone safe.

## Michigan Bike Laws You Need to Know

### Right to the Road
Bicycles are considered vehicles in Michigan and have the same rights and responsibilities as motor vehicles. This means you can ride on most roads, but you must follow traffic laws.

### Helmet Requirements
While helmets are not legally required for adults in Michigan, they are strongly recommended for all cyclists. Children under 18 must wear helmets when riding on public roads.

### Riding Position
Cyclists should ride as far to the right as practicable, except when:
- Passing another vehicle
- Preparing for a left turn
- Avoiding hazards
- Riding on a one-way street with multiple lanes

### Hand Signals
Always use hand signals to communicate your intentions:
- Left turn: Extend left arm straight out
- Right turn: Extend left arm up at 90 degrees OR right arm straight out
- Stop: Extend left arm down at 90 degrees

### Lighting Requirements
When riding at night, your bike must have:
- A white headlight visible from 500 feet
- A red rear reflector visible from 100-600 feet
- Reflective material on your pedals, shoes, or ankles

## E-Bike Specific Rules

### Class 1 E-Bikes
- Maximum speed: 20 mph with motor assistance
- Can be ridden on bike paths and trails
- No license required

### Class 2 E-Bikes  
- Maximum speed: 20 mph with throttle
- Can be ridden on bike paths and trails
- No license required

### Class 3 E-Bikes
- Maximum speed: 28 mph with motor assistance
- Cannot be ridden on bike paths or trails
- Must be ridden on roads
- No license required

## Safety Tips
- Always wear bright, visible clothing
- Use lights and reflectors at night
- Stay alert and avoid distractions
- Maintain your bike regularly
- Ride defensively and predictably`,
        imageUrl: "/images/Blog/Michihan Safety.png",
        externalUrl: "https://www.michigan.gov/msp/divisions/ohsp/safety-programs/bicyclist-safety"
      },
      {
        title: "Bike Safety Tips for Older Adults: Stay Safe and Confident on Your Rides",
        slug: "bike-safety-seniors",
        date: "2024-01-25",
        excerpt: "Essential bike safety tips specifically designed for older adults. Learn how to ride safely, build confidence, and enjoy cycling at any age with proper preparation and equipment.",
        tags: ["safety", "seniors", "cycling", "e-bikes", "health", "confidence"],
        content: `Cycling is an excellent activity for older adults, offering numerous health benefits while being gentle on joints. With the advent of electric bicycles, seniors can now enjoy cycling regardless of their fitness level or physical limitations.

## Why Cycling is Perfect for Seniors

### Low-Impact Exercise
Cycling provides excellent cardiovascular exercise without putting stress on your joints. Unlike running or high-impact sports, cycling is gentle on your knees, hips, and back while still providing a great workout.

### Improved Balance and Coordination
Riding a bike helps maintain and improve balance, which is crucial for preventing falls as we age. The coordination required for cycling also helps keep your mind sharp.

### Social Activity
Cycling can be a wonderful social activity. Many communities have senior cycling groups that offer companionship and support while riding.

## Safety Tips for Senior Cyclists

### Choose the Right Bike
- Consider an e-bike for easier pedaling
- Ensure the bike fits your height and reach
- Test ride before purchasing
- Look for step-through frames for easier mounting

### Start Slowly
- Begin with short rides on familiar routes
- Gradually increase distance and difficulty
- Listen to your body and rest when needed
- Consider taking a cycling class for seniors

### Safety Equipment
- Always wear a properly fitted helmet
- Use bright, visible clothing
- Install lights and reflectors
- Consider a rear-view mirror

### Route Planning
- Choose routes with bike lanes or low traffic
- Avoid busy roads during peak hours
- Plan rest stops along your route
- Let someone know your route and expected return time

## E-Bike Benefits for Seniors

### Assisted Pedaling
E-bikes provide motor assistance, making it easier to tackle hills and longer distances. You can still get exercise while having help when needed.

### Extended Range
With motor assistance, you can travel further without getting tired, opening up new routes and destinations.

### Confidence Building
E-bikes help build confidence for seniors who might be hesitant about cycling due to physical limitations.

## Getting Started
1. Consult with your doctor before starting
2. Take a cycling safety course
3. Start with short, easy rides
4. Join a senior cycling group
5. Consider an e-bike for easier riding

Remember, it's never too late to start cycling! Many seniors discover a new passion for riding and enjoy the freedom and health benefits it provides.`,
        imageUrl: "/images/Blog/Are_Electric_Bikes_Safe_for_Senior.png",
        externalUrl: "https://crazylennysebikes.com/why-an-e-bike-is-perfect-for-seniors/?srsltid=AfmBOooeSd0OZP0lEHj_yGo0S_WEApTlZ35FDfn-97NPqlIuECRK0r6C"
      },
      {
        title: "Why E-Bikes Are Great for Seniors' Health",
        slug: "ebikes-seniors-health",
        date: "2024-08-24",
        excerpt: "Discover how electric bicycles can improve seniors' health through low-impact cardio, joint mobility, and mental well-being.",
        tags: ["health", "seniors", "e-bikes", "fitness"],
        content: `Electric bicycles are revolutionizing how seniors stay active and healthy. These innovative vehicles combine the benefits of traditional cycling with motor assistance, making exercise accessible to people of all fitness levels.

## Health Benefits of E-Bikes for Seniors

### Cardiovascular Health
E-bikes provide excellent cardiovascular exercise while being gentle on the heart. The motor assistance allows seniors to maintain a consistent heart rate without overexertion, making it perfect for those with heart conditions or limited stamina.

### Joint-Friendly Exercise
Unlike high-impact activities, e-biking is gentle on joints while still providing a full-body workout. This makes it ideal for seniors with arthritis, knee problems, or other joint issues.

### Mental Health Benefits
Regular e-bike riding releases endorphins, reducing stress and anxiety. The combination of physical activity, fresh air, and the joy of movement creates a natural mood booster.

### Improved Balance and Coordination
Riding an e-bike helps maintain and improve balance, which is crucial for preventing falls as we age. The coordination required for cycling also helps keep the mind sharp.

## Why E-Bikes Are Perfect for Seniors

### Assisted Pedaling
The motor assistance helps with hills and longer distances, making cycling accessible regardless of fitness level. You can still get exercise while having help when needed.

### Extended Range
With motor assistance, seniors can travel further without getting tired, opening up new routes and destinations that might have been out of reach before.

### Confidence Building
E-bikes help build confidence for seniors who might be hesitant about cycling due to physical limitations or concerns about keeping up with traffic.

### Social Connection
E-bikes enable seniors to join group rides and cycling clubs, providing social interaction and community connection.

## Getting Started with E-Bikes

### Choosing the Right E-Bike
- **Step-through frames** for easier mounting and dismounting
- **Comfortable seating** with proper support
- **Easy-to-use controls** and displays
- **Appropriate motor power** for your needs
- **Good lighting and safety features**

### Safety Considerations
- Always wear a helmet
- Use lights and reflectors
- Choose safe routes
- Start with shorter rides
- Consider taking an e-bike safety course

### Building Endurance
- Start with 15-30 minute rides
- Gradually increase distance and time
- Listen to your body
- Rest when needed
- Set realistic goals

## Success Stories
Many seniors have discovered new freedom and joy through e-biking. From daily errands to weekend adventures, e-bikes are helping seniors stay active, independent, and connected to their communities.

The key is to start slowly and build confidence. With the right e-bike and proper preparation, cycling can become a lifelong passion that keeps you healthy and happy.`,
        imageUrl: "/images/Blog/Senior Health.png",
        externalUrl: "https://www.aarp.org/health/healthy-living/bike-safety/"
      },
      {
        title: "Building Endurance: Your First Month with an E-Bike",
        slug: "building-endurance-first-ebike",
        date: "2024-08-24",
        excerpt: "A comprehensive guide to building your cycling endurance and confidence with your new electric bicycle.",
        tags: ["fitness", "endurance", "training", "e-bikes"],
        content: `Starting your e-bike journey can be both exciting and challenging. Whether you're new to cycling or transitioning from a traditional bike, building endurance with an e-bike requires a thoughtful approach and gradual progression.

## Your First Week: Getting Comfortable

### Day 1-3: Familiarization
- **Short rides** (15-20 minutes) around your neighborhood
- **Practice mounting and dismounting** your e-bike
- **Test different assist levels** to find your comfort zone
- **Learn your bike's controls** and display functions
- **Choose flat, quiet routes** to build confidence

### Day 4-7: Building Confidence
- **Increase ride time** to 25-30 minutes
- **Try slightly longer routes** with gentle hills
- **Practice using different assist levels** for varying terrain
- **Focus on smooth pedaling** and good posture

## Week 2-3: Building Foundation

### Gradual Progression
- **Extend rides** to 30-45 minutes
- **Introduce moderate hills** using appropriate assist levels
- **Practice gear shifting** in combination with motor assist
- **Work on maintaining consistent cadence**

### Endurance Building
- **Aim for 3-4 rides per week**
- **Mix easy and moderate intensity** rides
- **Focus on breathing** and relaxed riding
- **Listen to your body** and rest when needed

## Month 1: Establishing Routine

### Weekly Goals
- **Week 1:** 3 rides of 20-30 minutes each
- **Week 2:** 3-4 rides of 30-40 minutes each  
- **Week 3:** 4 rides of 40-50 minutes each
- **Week 4:** 4-5 rides of 45-60 minutes each

### Intensity Progression
- **Start with higher assist levels** and gradually reduce
- **Include some rides with minimal assist** to build strength
- **Add short intervals** of higher intensity
- **Practice climbing hills** with appropriate assist

## Training Tips for Success

### Pacing Strategy
- **Start each ride slowly** and warm up properly
- **Use assist levels strategically** - higher for hills, lower for flats
- **Maintain a conversational pace** where you can talk comfortably
- **Finish rides feeling energized**, not exhausted

### Recovery and Rest
- **Take rest days** between longer or harder rides
- **Stay hydrated** before, during, and after rides
- **Eat properly** to fuel your rides and recovery
- **Get adequate sleep** to support your training

### Mental Preparation
- **Set realistic goals** for each week
- **Track your progress** with a simple log
- **Celebrate small victories** and improvements
- **Stay patient** - endurance builds gradually

## Common Challenges and Solutions

### Fatigue
- **Reduce ride intensity** or duration
- **Increase rest days**
- **Check your nutrition** and hydration
- **Ensure adequate sleep**

### Soreness
- **Stretch before and after rides**
- **Adjust your bike fit** if needed
- **Use appropriate assist levels**
- **Gradually increase intensity**

### Motivation
- **Vary your routes** to keep things interesting
- **Ride with friends** or join group rides
- **Set specific goals** for each week
- **Track your progress** to see improvements

## Advanced Training (Month 2+)

### Building Strength
- **Reduce assist levels** on flat terrain
- **Add hill repeats** with appropriate assist
- **Include longer rides** (1-2 hours) once per week
- **Practice interval training** with varying assist levels

### Skill Development
- **Work on bike handling** skills
- **Practice emergency stops** and maneuvers
- **Learn to read terrain** and adjust assist accordingly
- **Develop efficient pedaling** technique

## Measuring Progress

### Physical Indicators
- **Increased ride duration** without fatigue
- **Improved hill climbing** ability
- **Better recovery** between rides
- **Increased average speed** on familiar routes

### Mental Indicators
- **Greater confidence** on the bike
- **Reduced anxiety** about longer rides
- **Improved route planning** skills
- **Better understanding** of your e-bike's capabilities

Remember, everyone progresses at their own pace. Focus on consistency and gradual improvement rather than comparing yourself to others. With patience and persistence, you'll build the endurance and confidence to enjoy longer, more challenging rides on your e-bike.`,
        imageUrl: "/images/Blog/Building Endurance- Your First Month with an E-Bike .jpg",
        externalUrl: "https://www.moveelectric.com/e-bikes/can-you-get-fit-using-electric-bike"
      },
      {
        title: "Spring Maintenance Tips for Your E-Bike",
        slug: "bike-maintenance-spring",
        date: "2024-08-24",
        excerpt: "Essential maintenance tasks to keep your electric bicycle running smoothly through the spring season.",
        tags: ["maintenance", "spring", "care", "e-bikes"],
        content: `Spring is the perfect time to give your e-bike some TLC. After a long winter, your electric bicycle deserves attention to ensure it's ready for the riding season ahead. Regular maintenance not only keeps your e-bike running smoothly but also extends its lifespan and ensures your safety.

## Pre-Ride Inspection Checklist

### Before Every Ride
- **Tire pressure** - Check and inflate to recommended PSI
- **Brake function** - Test both front and rear brakes
- **Light operation** - Ensure headlight and taillight work
- **Battery charge** - Verify adequate charge for your planned ride
- **Tire condition** - Look for cuts, bulges, or excessive wear
- **Chain lubrication** - Ensure smooth operation

### Weekly Checks
- **Bolt tightness** - Check all visible bolts and fasteners
- **Cable condition** - Inspect brake and gear cables for fraying
- **Wheel trueness** - Spin wheels to check for wobbles
- **Battery connections** - Ensure clean, secure connections
- **Display function** - Test all buttons and readouts

## Spring Cleaning and Maintenance

### Thorough Cleaning
1. **Wash your e-bike** with mild soap and water
2. **Clean the chain** with a degreaser and re-lubricate
3. **Wipe down the battery** and electrical connections
4. **Clean brake surfaces** and rims
5. **Inspect and clean** the motor area

### Electrical System Care
- **Check battery health** - Look for any swelling or damage
- **Test charging system** - Ensure proper charging
- **Inspect wiring** - Look for loose or damaged connections
- **Clean electrical contacts** - Use contact cleaner if needed
- **Update firmware** - Check for any available updates

### Mechanical Maintenance
- **Adjust brakes** - Ensure proper pad alignment and tension
- **Check gear shifting** - Adjust derailleurs if needed
- **Inspect bearings** - Check headset, bottom bracket, and wheel bearings
- **Tighten spokes** - Check wheel tension
- **Lubricate moving parts** - Apply appropriate lubricants

## Battery Care and Optimization

### Storage and Charging
- **Store at 40-60% charge** when not in use for extended periods
- **Avoid extreme temperatures** - Don't leave in hot cars or cold garages
- **Use manufacturer charger** - Avoid third-party chargers
- **Charge regularly** - Don't let battery fully discharge
- **Monitor battery health** - Check for capacity loss over time

### Performance Tips
- **Keep battery clean** - Wipe terminals regularly
- **Check connections** - Ensure tight, clean connections
- **Monitor temperature** - Avoid charging in extreme heat
- **Plan charging** - Charge when convenient, not just when empty

## Tire and Wheel Maintenance

### Tire Care
- **Check pressure regularly** - Use a quality gauge
- **Inspect for damage** - Look for cuts, bulges, or wear
- **Rotate tires** - If applicable for your e-bike
- **Replace when needed** - Don't ride on worn tires
- **Choose appropriate tires** - Consider your riding conditions

### Wheel Maintenance
- **Check spoke tension** - Loose spokes can cause wheel damage
- **Inspect rims** - Look for dents or damage
- **Clean brake surfaces** - Remove any debris or oil
- **Check bearings** - Ensure smooth wheel rotation

## Professional Service

### When to Visit a Shop
- **Annual tune-up** - Professional inspection and adjustment
- **Electrical issues** - Don't attempt repairs yourself
- **Major component replacement** - Brakes, drivetrain, etc.
- **Warranty work** - Use authorized service centers
- **Complex adjustments** - If you're unsure about procedures

### What to Expect
- **Complete inspection** of all systems
- **Adjustment** of brakes, gears, and bearings
- **Cleaning** and lubrication of components
- **Electrical system** testing and updates
- **Safety check** of all critical components

## Seasonal Preparation

### Spring Preparation
- **Remove winter storage** protection
- **Check all systems** after storage
- **Update seasonal** accessories (lights, fenders)
- **Plan routes** for the new season
- **Review safety** equipment and procedures

### Summer Maintenance
- **Regular cleaning** to remove road grime
- **Monitor battery** performance in heat
- **Check tire pressure** more frequently
- **Inspect for wear** from increased riding

## Safety Considerations

### Regular Safety Checks
- **Brake function** - Test before every ride
- **Light operation** - Essential for visibility
- **Tire condition** - Critical for traction and safety
- **Battery security** - Ensure proper mounting
- **Electrical connections** - Check for loose wires

### Emergency Preparedness
- **Carry basic tools** - Multi-tool, tire levers, pump
- **Know your bike** - Understand basic maintenance
- **Have backup plans** - Know how to get home if needed
- **Emergency contacts** - Keep important numbers handy

## Maintenance Schedule

### Daily
- Quick visual inspection
- Tire pressure check
- Battery charge level

### Weekly
- Thorough cleaning
- Detailed inspection
- Lubrication as needed

### Monthly
- Professional inspection (if needed)
- Deep cleaning
- Component adjustment

### Annually
- Complete tune-up
- Professional service
- Component replacement as needed

By following this maintenance schedule and paying attention to your e-bike's needs, you'll enjoy reliable performance and extended lifespan from your electric bicycle. Regular care not only saves money in the long run but also ensures your safety and riding enjoyment.`,
        imageUrl: "/images/Blog/spring-e-bike-maintenance-tips.png",
        externalUrl: "https://www.radpowerbikes.com/blogs/the-scenic-route/ebike-spring-maintenance-guide?srsltid=AfmBOopEVmG6tW0Ejtig9DeTS8HbWteAWaFgAZpKR78Vu5nwHf0GTXbR"
      },
      {
        title: "How to Clean Your E-Bike: A Complete Guide",
        slug: "how-to-clean-your-ebike",
        date: "2024-08-25",
        excerpt: "Learn the proper techniques for cleaning your electric bicycle to keep it looking great and running smoothly. From basic washing to detailed component care.",
        tags: ["maintenance", "cleaning", "care", "e-bikes", "tips"],
        content: `Keeping your e-bike clean is essential for both appearance and performance. Regular cleaning prevents dirt buildup, protects components, and helps identify potential issues before they become problems. Here's your complete guide to e-bike cleaning.

## Why Clean Your E-Bike?

### Performance Benefits
- **Smoother operation** - Clean components work better
- **Extended lifespan** - Dirt and grime accelerate wear
- **Better efficiency** - Clean drivetrain requires less effort
- **Improved safety** - Clean brakes and lights work properly

### Maintenance Benefits
- **Easier inspection** - Clean bikes reveal issues more clearly
- **Simpler repairs** - Clean components are easier to work on
- **Better resale value** - Well-maintained bikes fetch higher prices
- **Professional appearance** - Clean bikes look more appealing

## Essential Cleaning Supplies

### Basic Supplies
- **Mild soap** - Dish soap or bike-specific cleaner
- **Soft brushes** - Various sizes for different components
- **Microfiber cloths** - For drying and polishing
- **Water source** - Hose or bucket
- **Degreaser** - For chain and drivetrain
- **Lubricant** - Chain lube and other lubricants

### Optional Supplies
- **Pressure washer** - Use carefully and avoid electrical components
- **Bike stand** - Makes cleaning easier
- **Compressed air** - For drying hard-to-reach areas
- **Polish** - For frame and components
- **Protective spray** - For electrical connections

## Step-by-Step Cleaning Process

### 1. Preparation
- **Remove battery** - Always remove before cleaning
- **Secure bike** - Use a stand or lean against a wall
- **Gather supplies** - Have everything ready before starting
- **Choose location** - Well-ventilated area with good drainage

### 2. Initial Rinse
- **Remove loose dirt** - Use low-pressure water
- **Avoid electrical components** - Keep water away from motor and connections
- **Use gentle spray** - Don't use high-pressure water
- **Cover sensitive areas** - Use plastic bags if needed

### 3. Frame Cleaning
- **Apply soap** - Use mild soap and water
- **Scrub gently** - Use soft brushes for stubborn dirt
- **Rinse thoroughly** - Remove all soap residue
- **Dry completely** - Use microfiber cloths

### 4. Drivetrain Cleaning
- **Apply degreaser** - Spray on chain and cassette
- **Scrub chain** - Use chain cleaning tool or brush
- **Clean cassette** - Remove built-up grime
- **Rinse carefully** - Avoid getting degreaser on other parts
- **Dry completely** - Before applying lubricant

### 5. Component Cleaning
- **Brakes** - Clean brake surfaces and pads
- **Wheels** - Clean rims and spokes
- **Tires** - Remove embedded debris
- **Lights** - Clean lenses and housings
- **Display** - Wipe with damp cloth

## Electrical Component Care

### Battery Cleaning
- **Wipe with damp cloth** - No direct water contact
- **Clean terminals** - Use contact cleaner if needed
- **Check connections** - Ensure tight and clean
- **Inspect for damage** - Look for cracks or swelling

### Motor Care
- **Wipe exterior** - Remove dirt and grime
- **Check connections** - Ensure all wires are secure
- **Inspect for damage** - Look for cracks or loose parts
- **Avoid water contact** - Keep motor dry

### Display and Controls
- **Wipe with damp cloth** - No harsh chemicals
- **Check button function** - Ensure all buttons work
- **Clean screen** - Remove fingerprints and smudges
- **Test all functions** - After cleaning

## Drying and Lubrication

### Proper Drying
- **Use microfiber cloths** - Absorb water quickly
- **Air dry** - Let bike sit in sun or warm area
- **Check all areas** - Ensure no water remains
- **Wait before riding** - Ensure complete dryness

### Lubrication
- **Chain lubrication** - Apply appropriate chain lube
- **Cable lubrication** - If needed for smooth operation
- **Pivot points** - Lubricate brake and gear pivots
- **Avoid over-lubrication** - Excess lube attracts dirt

## Special Cleaning Situations

### After Rainy Rides
- **Clean immediately** - Don't let mud dry
- **Focus on drivetrain** - Mud can damage components
- **Check electrical connections** - Ensure they're dry
- **Lubricate chain** - Rain washes away lube

### After Off-Road Riding
- **Thorough cleaning** - Remove all dirt and debris
- **Check for damage** - Look for scratches or dents
- **Clean suspension** - If applicable
- **Inspect tires** - Remove embedded objects

### Winter Cleaning
- **Remove salt** - Salt can corrode components
- **Clean more frequently** - Winter conditions are harsh
- **Check electrical connections** - Salt can cause corrosion
- **Store properly** - Keep in dry, warm location

## Maintenance After Cleaning

### Post-Cleaning Inspection
- **Check all bolts** - Ensure they're tight
- **Test brakes** - Ensure proper function
- **Check tire pressure** - Adjust as needed
- **Test electrical systems** - Ensure everything works

### Regular Maintenance
- **Weekly cleaning** - For regular riders
- **Monthly deep cleaning** - More thorough process
- **Seasonal cleaning** - Prepare for weather changes
- **Professional cleaning** - Annual deep service

## Common Cleaning Mistakes

### What to Avoid
- **High-pressure water** - Can damage bearings and electrical components
- **Harsh chemicals** - Can damage paint and components
- **Direct water on electrical parts** - Can cause damage
- **Over-lubrication** - Attracts dirt and grime
- **Neglecting to dry** - Can cause rust and corrosion

### Best Practices
- **Use appropriate cleaners** - Bike-specific products
- **Clean regularly** - Don't let dirt build up
- **Inspect while cleaning** - Look for issues
- **Document maintenance** - Keep cleaning records
- **Ask for help** - When unsure about procedures

## Professional Cleaning Services

### When to Consider Professional Cleaning
- **Annual deep cleaning** - Professional service
- **After major repairs** - Ensure everything is clean
- **Before selling** - Maximize resale value
- **Complex electrical issues** - Professional expertise needed
- **Time constraints** - When you can't clean yourself

### What Professionals Provide
- **Complete disassembly** - If needed
- **Ultrasonic cleaning** - For small components
- **Professional products** - High-quality cleaners
- **Expert inspection** - Identify potential issues
- **Warranty protection** - Professional service records

By following this comprehensive cleaning guide, you'll keep your e-bike looking great and running smoothly for years to come. Regular cleaning is an investment in your bike's performance and longevity.`,
        imageUrl: "/images/Blog/How_to_Clean_Your_E-Bike_1024x1024.png"
      }
    ];

    return markdownPosts;
  } catch (error) {
    console.warn('Failed to load markdown posts:', error);
    return [];
  }
}

/**
 * Simple frontmatter parser - extracts YAML frontmatter and content
 */
function parseMarkdownPost(fileContent: string): BlogPost | null {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return null;
  }

  const [, frontmatter, content] = match;
  
  try {
    // Simple YAML-like parsing for our specific frontmatter format
    const metadata: Record<string, any> = {};
    const lines = frontmatter.split('\n');
    
    for (const line of lines) {
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) continue;
      
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays (tags)
      if (key === 'tags' && value.startsWith('[') && value.endsWith(']')) {
        const tagsString = value.slice(1, -1);
        metadata[key] = tagsString.split(',').map(tag => 
          tag.trim().replace(/^["']|["']$/g, '')
        );
      } else {
        metadata[key] = value;
      }
    }

    // Validate required fields
    if (!metadata.title || !metadata.slug || !metadata.date) {
      console.warn('Missing required frontmatter fields (title, slug, date)');
      return null;
    }

    return {
      title: metadata.title,
      slug: metadata.slug,
      date: metadata.date,
      excerpt: metadata.excerpt || '',
      tags: metadata.tags || [],
      content: content.trim()
    };
  } catch (error) {
    console.warn('Failed to parse frontmatter:', error);
    return null;
  }
}