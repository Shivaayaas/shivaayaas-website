const productDetails = {
    "karuppu-kavuni": {
      name: "Karuppu Kavuni Arisi Laddu",
      category: "Laddus",
      price: "₹300",
      weight: "300g",
      expiry: "Best before 6 months",
      description: "Shivaayaas Karuppu Kavuni Arisi Laddu is made from heritage black rice, known for its deep purple hue and antioxidant richness. Traditionally consumed by royalty, this rice is packed with iron, fiber, and anthocyanins that aid in digestion and immunity. Our laddus are delicately crafted to retain the natural flavor and nutrients of the grain, sweetened with palm jaggery and blended with ghee to provide a wholesome treat. Ideal for elders, kids, and health-conscious individuals, these laddus boost stamina and gut health while satisfying sweet cravings naturally.",
      tags: ["GLUTEN FREE", "VEGAN", "No Preservatives"],
      benefits: ["Rich in Antioxidants", "Improves Digestion", "Boosts Energy"],
      imageFolder: "./Images/laddus/Karuppu Kavuni Arisi/"
      
    },
  
    "kambu": {
      name: "Kambu Laddu",
      category: "Laddus",
      price: "₹210",
      weight: "300g",
      expiry: "Best before 6 months",
      description: "Made from the ancient grain Pearl Millet (Kambu), this laddu is a nutritional powerhouse. High in fiber, magnesium, and iron, kambu supports digestive health and keeps energy levels steady throughout the day. Shivaayaas Kambu Laddu is handmade using traditional techniques, blended with jaggery and organic ghee. It helps reduce body heat, making it an excellent summer-friendly snack. These gluten-free laddus are ideal for diabetics, kids, and elders alike, offering a guilt-free treat that's as tasty as it is healthy.",
      tags: ["GLUTEN FREE", "VEGAN", "High in Fiber"],
      benefits: ["Cools the Body", "Aids Digestion", "Boosts Immunity"],
      imageFolder: "./Images/laddus/Kambu/"
    },
  
    "ragi": {
      name: "Ragi Laddu",
      category: "Laddus",
      price: "₹230",
      weight: "300g",
      expiry: "Best before 6 months",
      description: "Shivaayaas Ragi Laddu is crafted with premium Finger Millet, a grain rich in calcium, iron, and essential amino acids. It's known to strengthen bones, reduce cholesterol, and aid weight loss. Perfect for toddlers, pregnant women, and elders, Ragi supports long-term health without any artificial flavors. This laddu offers a natural sweetness from jaggery and the richness of ghee, making it an ideal snack or post-meal dessert. It’s both nutritious and delicious, supporting healthy bones and active lifestyles.",
      tags: ["GLUTEN FREE", "VEGAN", "Bone Strength"],
      benefits: ["Rich in Calcium", "Helps in Weight Loss", "Controls Diabetes"],
      imageFolder: "./Images/laddus/Ragi/"
    },
  
    "thinai": {
      name: "Thinai Arisi Laddu",
      category: "Laddus",
      price: "₹220",
      weight: "300g",
      expiry: "Best before 6 months",
      description: "Thinai (Foxtail Millet) is a superfood that's packed with dietary fiber, protein, and iron. Shivaayaas Thinai Arisi Laddu brings this nutrition in a delightful form that suits all age groups. With its low glycemic index, it supports blood sugar control and promotes heart health. Our laddus are handmade using traditional methods, combining foxtail millet flour, palm jaggery, and ghee for a naturally sweet, nourishing treat. Ideal for those who want sustained energy without refined sugar.",
      tags: ["GLUTEN FREE", "VEGAN", "Heart Friendly"],
      benefits: ["Helps Control Diabetes", "High in Protein", "Improves Digestion"],
      imageFolder: "./Images/laddus/Thinai/"
    },
  
    "sigappu-avul": {
      name: "Sigappu Aval Arisi Laddu",
      category: "Laddus",
      price: "₹210",
      weight: "300g",
      expiry: "Best before 6 months",
      description: "Crafted from red rice flakes (Sigappu Aval), these laddus are soft, flavorful, and highly nutritious. Red rice is known to improve oxygen circulation in the body and reduce cholesterol. Shivaayaas Sigappu Aval Laddu blends this ancient grain with jaggery and ghee, offering a chewy and hearty bite. It’s perfect for breakfast or as an evening energy booster. Rich in iron and antioxidants, it's also great for growing children, anemic individuals, and the elderly.",
      tags: ["GLUTEN FREE", "VEGAN", "Cholesterol Friendly"],
      benefits: ["Rich in Iron", "Improves Heart Health", "Boosts Hemoglobin"],
      imageFolder: "./Images/laddus/Sigappu Avul/"
    },
  
    "mapillai-samba": {
      name: "Mapillai Samba Arisi Laddu",
      category: "Laddus",
      price: "₹210",
      weight: "300g",
      expiry: "Best before 6 months",
      description: "Mapillai Samba, known as the 'Bridegroom's Rice', is a traditional red rice variety that enhances stamina and strengthens muscles. Shivaayaas Mapillai Samba Laddu is a delicious tribute to Tamil Nadu’s ancient grain culture. It is a great source of fiber and iron, helping maintain strong bones and reducing fatigue. These laddus are prepared without preservatives, making them a healthy snack for anyone looking to improve endurance and vitality naturally.",
      tags: ["GLUTEN FREE", "VEGAN", "Endurance Booster"],
      benefits: ["Boosts Stamina", "Improves Bone Strength", "Enhances Muscle Health"],
      imageFolder: "./Images/laddus/Mapillai Samba/"
    },
  
    "corn": {
      name: "Corn Laddu",
      category: "Laddus",
      price: "₹210",
      weight: "300g",
      expiry: "Best before 6 months",
      description: "Shivaayaas Corn Laddu is made from organic corn flour, packed with dietary fiber and B vitamins. This yellow grain is known for improving vision, promoting heart health, and aiding digestion. Our corn laddus offer a distinct taste, blending sweet corn flavor with the richness of traditional Indian laddus. This gluten-free and kid-friendly snack makes a great addition to lunchboxes, post-workout meals, and mid-morning hunger pangs.",
      tags: ["GLUTEN FREE", "VEGAN", "High Fiber"],
      benefits: ["Improves Vision", "Promotes Heart Health", "Supports Digestion"],
      imageFolder: "./Images/laddus/Corn/"
    },
  
    "varagu": {
      name: "Varagu Laddu",
      category: "Laddus",
      price: "₹220",
      weight: "300g",
      expiry: "Best before 6 months",
      description: "Varagu (Kodo Millet) is one of the finest grains for weight management and diabetic diets. Shivaayaas Varagu Laddu is a tasty and smart choice for people who seek low glycemic, high-protein foods. Varagu is rich in phytochemicals and antioxidants, and helps control cholesterol levels. Our laddus deliver traditional taste with modern health benefits, supporting metabolism, bone strength, and heart wellness. No sugar. No compromise.",
      tags: ["GLUTEN FREE", "VEGAN", "Diabetic Friendly"],
      benefits: ["Controls Blood Sugar", "Boosts Metabolism", "Strengthens Bones"],
      imageFolder: "./Images/laddus/Varagu/"
    },
  
    "ellu": {
      name: "Ellu Laddu",
      category: "Laddus",
      price: "₹260",
      weight: "300g",
      expiry: "Best before 6 months",
      description: "Ellu (Sesame) Laddu is a classic South Indian sweet that brings together roasted sesame seeds and jaggery in perfect harmony. Packed with healthy fats, calcium, and iron, ellu laddus boost bone density and provide warmth to the body during winter months. Shivaayaas Ellu Laddu is made using premium-grade black sesame seeds, offering rich flavor and powerful health benefits. These laddus are great for postnatal care and winter immunity.",
      tags: ["GLUTEN FREE", "VEGAN", "Winter Special"],
      benefits: ["Rich in Calcium", "Warms the Body", "Strengthens Hair & Skin"],
      imageFolder: "./Images/laddus/Ellu/"
    },
  
    "pachai-payiru": {
      name: "Pachai Payiru Laddu",
      category: "Laddus",
      price: "₹250",
      weight: "300g",
      expiry: "Best before 6 months",
      description: "Pachai Payiru (Green Gram) is a nutrient-rich pulse that is high in plant protein, folate, and antioxidants. Shivaayaas Pachai Payiru Laddu is carefully handcrafted to preserve the grain’s benefits, offering a healthy and satisfying snack. Great for kids and adults alike, this laddu promotes digestion, improves skin health, and boosts overall vitality. It's especially ideal during recovery periods or to maintain daily strength and immunity.",
      tags: ["GLUTEN FREE", "VEGAN", "Protein Rich"],
      benefits: ["High Protein", "Promotes Skin Health", "Supports Recovery"],
      imageFolder: "./Images/laddus/Pachai Payaru/"
    },
  
    "karuppu-ulunthu": {
      name: "Karuppu Ulundhu Laddu",
      category: "Laddus",
      price: "₹250",
      weight: "300g",
      expiry: "Best before 6 months",
      description: "Karuppu Ulundhu (Black Gram) is revered in Siddha and Ayurveda for strengthening bones, increasing vitality, and reducing joint pains. Shivaayaas Karuppu Ulundhu Laddu is made with roasted black gram, palm jaggery, and ghee, offering a nutrient-dense treat. It is especially beneficial for women’s health and postnatal care. Its earthy flavor and powerful ingredients make this laddu a must-have in every household looking for natural strength-building foods.",
      tags: ["GLUTEN FREE", "VEGAN", "Bone Strength"],
      benefits: ["Improves Bone Density", "Enhances Vitality", "Joint Pain Relief"],
      imageFolder: "./Images/laddus/Karuppu Ulunthu/"
    },
  
    "healthmix34": {
      name: "Health Mix 34 Ingredients",
      category: "Health Mix",
      price: "₹240",
      weight: "250g",
      expiry: "Best before 6 months",
      description: "A traditional Indian blend of 34 cereals, pulses, and nuts that makes it the most nutritious breakfast choice. Shivaayaas Health Mix is 100% natural, without preservatives or added sugar. This multigrain porridge contains proteins for strength, carbs for energy, and vitamins for immunity. Perfect for growing children, pregnant women, elders, and athletes.",
      tags: ["MULTIGRAIN", "100% NATURAL", "No Sugar Added"],
      benefits: ["Boosts Stamina", "Improves Bone Strength", "Highly Digestible"],
      imageFolder: "./Images/Healthmix34/"
    },
  
    "healthmix15": {
      name: "Health Mix 15 Ingredients",
      category: "Health Mix",
      price: "₹170",
      weight: "250g",
      expiry: "Best before 6 months",
      description: "Shivaayaas Health Mix 15 is a curated blend of 15 essential grains and pulses designed to provide everyday nourishment. Free from preservatives and artificial sweeteners, this mix supports immunity, strength, and digestive health. Ideal for daily breakfast or evening drink, this health mix helps you stay energetic and full for longer hours.",
      tags: ["NATURAL", "DAILY NUTRITION", "Preservative Free"],
      benefits: ["Supports Immunity", "Maintains Energy", "Improves Digestion"],
      imageFolder: "./Images/Healthmix15/"
    }
  };
  