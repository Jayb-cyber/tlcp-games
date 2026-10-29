// ===================================================
// 0. PROCEDURAL TEXTURE GENERATOR
// ===================================================
function generateCustomTextures(scene) {
// --- 1. STICKMAN TEXTURES (IDLE + 2 WALKING STRIDE FRAMES) ---
  const drawStickmanVariant = (key, stride = 0) => {
    if (scene.textures.exists(key)) return;
    const stick = scene.make.graphics({ x: 0, y: 0, add: false });
    const tailLift = stride === 0 ? 0 : (stride === 1 ? -2 : 2);
    // Red headband tails fluttering behind
    stick.fillStyle(0xe74c3c, 1);
    stick.fillTriangle(12, 10, 3, 6 + tailLift, 6, 14 + tailLift);
    stick.fillTriangle(12, 12, 4, 15 - tailLift, 9, 19 - tailLift);

    // Animated legs & cute red sneakers
    stick.lineStyle(4.5, 0x2d3436, 1);
    if (stride === 0) {
      stick.lineBetween(21, 42, 16, 57);
      stick.lineBetween(27, 42, 32, 57);
      stick.fillStyle(0xe74c3c, 1);
      stick.fillRoundedRect(10, 55, 11, 7, 3);
      stick.fillRoundedRect(28, 55, 11, 7, 3);
      stick.fillStyle(0xffffff, 1);
      stick.fillRect(10, 60, 11, 2);
      stick.fillRect(28, 60, 11, 2);
    } else if (stride === 1) {
      // Stride 1: left foot forward & lifted, right foot back
      stick.lineBetween(21, 42, 11, 53);
      stick.lineBetween(27, 42, 36, 56);
      stick.fillStyle(0xe74c3c, 1);
      stick.fillRoundedRect(5, 50, 11, 7, 3);
      stick.fillRoundedRect(31, 54, 11, 7, 3);
      stick.fillStyle(0xffffff, 1);
      stick.fillRect(5, 55, 11, 2);
      stick.fillRect(31, 59, 11, 2);
    } else {
      // Stride 2: left foot tucked, right foot stepping high
      stick.lineBetween(21, 42, 23, 56);
      stick.lineBetween(27, 42, 35, 49);
      stick.fillStyle(0xe74c3c, 1);
      stick.fillRoundedRect(17, 54, 11, 7, 3);
      stick.fillRoundedRect(30, 47, 11, 7, 3);
      stick.fillStyle(0xffffff, 1);
      stick.fillRect(17, 59, 11, 2);
      stick.fillRect(30, 52, 11, 2);
    }

    // Rounded blue hoodie torso
    stick.fillStyle(0x0984e3, 1);
    stick.fillRoundedRect(16, 25, 16, 20, 6);
    stick.lineStyle(2, 0x2d3436, 1);
    stick.strokeRoundedRect(16, 25, 16, 20, 6);
    // Lighter blue belly pocket
    stick.fillStyle(0x74b9ff, 1);
    stick.fillRoundedRect(19, 34, 10, 8, 3);

    // Animated swinging arms & cute round hands
    const armSwing = stride === 0 ? 0 : (stride === 1 ? -4 : 4);
    stick.lineStyle(4, 0x0984e3, 1);
    stick.lineBetween(17, 28, 9, 37 + armSwing);
    stick.lineBetween(31, 28, 39, 37 - armSwing);
    stick.fillStyle(0xffeaa7, 1);
    stick.fillCircle(9, 38 + armSwing, 3.5);
    stick.fillCircle(39, 38 - armSwing, 3.5);
    stick.lineStyle(1.5, 0x2d3436, 1);
    stick.strokeCircle(9, 38 + armSwing, 3.5);
    stick.strokeCircle(39, 38 - armSwing, 3.5);

    // Head
    stick.fillStyle(0xffeaa7, 1);
    stick.fillCircle(24, 14, 11.5);
    stick.lineStyle(2.2, 0x2d3436, 1);
    stick.strokeCircle(24, 14, 11.5);
    // Red adventurer headband across forehead
    stick.fillStyle(0xe74c3c, 1);
    stick.fillRoundedRect(13, 6, 22, 4.5, 2);
    // Big glossy eyes with white catchlights
    stick.fillStyle(0x2d3436, 1);
    stick.fillCircle(20, 14, 2.3);
    stick.fillCircle(28, 14, 2.3);
    stick.fillStyle(0xffffff, 1);
    stick.fillCircle(19.3, 13.2, 0.9);
    stick.fillCircle(27.3, 13.2, 0.9);
    // Rosy cheeks & happy smile
    stick.fillStyle(0xff7675, 0.75);
    stick.fillEllipse(16, 17, 4, 2.5);
    stick.fillEllipse(32, 17, 4, 2.5);
    stick.lineStyle(1.8, 0x2d3436, 1);
    stick.beginPath();
    stick.arc(24, 16, 3.5, 0.15, Math.PI - 0.15, false);
    stick.strokePath();
    stick.generateTexture(key, 48, 64);
    stick.destroy();
  };
  drawStickmanVariant('tex_stickman', 0);
  drawStickmanVariant('tex_stickman_walk1', 1);
  drawStickmanVariant('tex_stickman_walk2', 2);

  // --- 2. CAT TEXTURES (IDLE + 2 PAW-STEPPING FRAMES) ---
  const drawCatVariant = (key, stride = 0) => {
    if (scene.textures.exists(key)) return;
    const cat = scene.make.graphics({ x: 0, y: 0, add: false });
    const tailWag = stride === 0 ? 0 : (stride === 1 ? -2 : 2);
    // Fluffy curved tail
    cat.lineStyle(6, 0xe67e22, 1);
    cat.lineBetween(15, 31, 6, 23 + tailWag);
    cat.lineBetween(6, 23 + tailWag, 8, 12 + tailWag);
    cat.fillStyle(0xffeaa7, 1);
    cat.fillCircle(8, 12 + tailWag, 3);
    // Plump body & cream belly patch
    cat.fillStyle(0xf39c12, 1);
    cat.fillRoundedRect(13, 18, 33, 24, 11);
    cat.lineStyle(2, 0xba6b0c, 1);
    cat.strokeRoundedRect(13, 18, 33, 24, 11);
    cat.fillStyle(0xfff5d6, 1);
    cat.fillEllipse(29, 33, 18, 12);
    // Tabby back stripes
    cat.fillStyle(0xd35400, 1);
    cat.fillTriangle(20, 18, 24, 18, 22, 25);
    cat.fillTriangle(26, 18, 30, 18, 28, 25);
    // Ears (outer & pink inner)
    cat.fillStyle(0xf39c12, 1);
    cat.fillTriangle(28, 11, 33, 1, 38, 9);
    cat.fillTriangle(39, 9, 45, 1, 48, 11);
    cat.fillStyle(0xff9ff3, 1);
    cat.fillTriangle(30, 10, 33, 3.5, 36.5, 9);
    cat.fillTriangle(40.5, 9, 44.5, 3.5, 46.5, 10);
    // Round head & fluffy cheek tufts
    cat.fillStyle(0xf39c12, 1);
    cat.fillCircle(38, 18, 12.5);
    cat.fillTriangle(25, 18, 28, 14, 28, 22);
    cat.fillTriangle(51, 18, 48, 14, 48, 22);
    // Forehead tabby stripes
    cat.fillStyle(0xd35400, 1);
    cat.fillRect(37, 7, 2, 4);
    cat.fillRect(34, 8, 1.5, 3);
    cat.fillRect(40.5, 8, 1.5, 3);
    // Red collar & gold bell
    cat.fillStyle(0xe74c3c, 1);
    cat.fillRoundedRect(31, 27, 14, 4, 2);
    cat.fillStyle(0xf1c40f, 1);
    cat.fillCircle(39, 31, 3);
    cat.lineStyle(1, 0xb7791f, 1);
    cat.strokeCircle(39, 31, 3);
    // Big sparkling kawaii eyes
    cat.fillStyle(0x2d3436, 1);
    cat.fillCircle(34.5, 16.5, 2.8);
    cat.fillCircle(42.5, 16.5, 2.8);
    cat.fillStyle(0xffffff, 1);
    cat.fillCircle(33.7, 15.5, 1.1);
    cat.fillCircle(41.7, 15.5, 1.1);
    cat.fillCircle(35.3, 17.5, 0.5);
    cat.fillCircle(43.3, 17.5, 0.5);
    // Rosy cheeks, pink nose & cute 'w' mouth
    cat.fillStyle(0xff7675, 0.7);
    cat.fillEllipse(30.5, 19.5, 4, 2.5);
    cat.fillEllipse(46, 19.5, 4, 2.5);
    cat.fillStyle(0xff6b81, 1);
    cat.fillTriangle(37, 18.5, 40, 18.5, 38.5, 20.5);
    cat.lineStyle(1.4, 0x2d3436, 1);
    cat.beginPath();
    cat.arc(37, 21, 1.6, 0, Math.PI, false);
    cat.arc(40, 21, 1.6, 0, Math.PI, false);
    cat.strokePath();
    // Whiskers
    cat.lineStyle(1.2, 0xffffff, 0.95);
    cat.lineBetween(44, 19, 53, 17);
    cat.lineBetween(44, 21, 53, 22);
    cat.lineBetween(32, 19, 23, 17);
    cat.lineBetween(32, 21, 23, 22);
    // Animated white paws
    const p1x = stride === 0 ? 19 : (stride === 1 ? 14 : 23);
    const p1y = stride === 0 ? 42 : (stride === 1 ? 39 : 43);
    const p2x = stride === 0 ? 39 : (stride === 1 ? 43 : 35);
    const p2y = stride === 0 ? 42 : (stride === 1 ? 43 : 39);
    cat.fillStyle(0xffffff, 1);
    cat.fillEllipse(p1x, p1y, 9, 6);
    cat.fillEllipse(p2x, p2y, 9, 6);
    cat.lineStyle(1.2, 0xba6b0c, 1);
    cat.strokeEllipse(p1x, p1y, 9, 6);
    cat.strokeEllipse(p2x, p2y, 9, 6);
    cat.generateTexture(key, 56, 48);
    cat.destroy();
  };
  drawCatVariant('tex_cat', 0);
  drawCatVariant('tex_cat_walk1', 1);
  drawCatVariant('tex_cat_walk2', 2);

  // --- 3. DOG TEXTURES (IDLE + 2 PAW-STEPPING FRAMES) ---
  const drawDogVariant = (key, stride = 0) => {
    if (scene.textures.exists(key)) return;
    const dog = scene.make.graphics({ x: 0, y: 0, add: false });
    const tailWag = stride === 0 ? 0 : (stride === 1 ? -2 : 2);
    // Fluffy curled puppy tail
    dog.fillStyle(0xd35400, 1);
    dog.fillCircle(10, 20 + tailWag, 6);
    dog.fillStyle(0xfff3d1, 1);
    dog.fillCircle(8, 18 + tailWag, 3.5);
    // Warm golden-caramel body & cream chest
    dog.fillStyle(0xe58e26, 1);
    dog.fillRoundedRect(12, 18, 35, 24, 11);
    dog.lineStyle(2, 0xa05a12, 1);
    dog.strokeRoundedRect(12, 18, 35, 24, 11);
    dog.fillStyle(0xfff3d1, 1);
    dog.fillEllipse(31, 33, 20, 13);
    // Round head
    dog.fillStyle(0xe58e26, 1);
    dog.fillCircle(38, 17, 13);
    // Cream lower face / cheeks & cute Shiba eyebrow dots
    dog.fillStyle(0xfff3d1, 1);
    dog.fillEllipse(38, 21, 18, 11);
    dog.fillEllipse(34, 11, 3.5, 2.2);
    dog.fillEllipse(42.5, 11, 3.5, 2.2);
    // Floppy chocolate-brown ears
    dog.fillStyle(0x5c3826, 1);
    dog.fillRoundedRect(23, 9, 7, 15, 3.5);
    dog.fillRoundedRect(46, 9, 7, 15, 3.5);
    // Blue collar & gold medal tag
    dog.fillStyle(0x0984e3, 1);
    dog.fillRoundedRect(30, 27, 15, 4, 2);
    dog.fillStyle(0xf1c40f, 1);
    dog.fillCircle(39, 31.5, 3);
    // Big sparkling puppy eyes
    dog.fillStyle(0x1e272e, 1);
    dog.fillCircle(34, 15.5, 2.8);
    dog.fillCircle(42.5, 15.5, 2.8);
    dog.fillStyle(0xffffff, 1);
    dog.fillCircle(33.2, 14.6, 1.1);
    dog.fillCircle(41.7, 14.6, 1.1);
    // Rosy cheeks, shiny black nose & happy pink tongue
    dog.fillStyle(0xff7675, 0.65);
    dog.fillEllipse(30, 19, 4, 2.5);
    dog.fillEllipse(46, 19, 4, 2.5);
    dog.fillStyle(0xff6b81, 1);
    dog.fillRoundedRect(36.5, 21.5, 4.5, 6, 2);
    dog.fillStyle(0x2d3436, 1);
    dog.fillEllipse(38.5, 18.5, 5.5, 4);
    dog.fillStyle(0xffffff, 0.8);
    dog.fillCircle(37.5, 17.8, 0.8);
    // Animated cream paws
    const p1x = stride === 0 ? 19 : (stride === 1 ? 14 : 23);
    const p1y = stride === 0 ? 42 : (stride === 1 ? 39 : 43);
    const p2x = stride === 0 ? 39 : (stride === 1 ? 43 : 35);
    const p2y = stride === 0 ? 42 : (stride === 1 ? 43 : 39);
    dog.fillStyle(0xfff3d1, 1);
    dog.fillEllipse(p1x, p1y, 9.5, 6);
    dog.fillEllipse(p2x, p2y, 9.5, 6);
    dog.lineStyle(1.2, 0xa05a12, 1);
    dog.strokeEllipse(p1x, p1y, 9.5, 6);
    dog.strokeEllipse(p2x, p2y, 9.5, 6);
    dog.generateTexture(key, 56, 48);
    dog.destroy();
  };
  drawDogVariant('tex_dog', 0);
  drawDogVariant('tex_dog_walk1', 1);
  drawDogVariant('tex_dog_walk2', 2);

  // --- 4. ENVIRONMENT & ITEMS ---
  if (!scene.textures.exists('tex_ground')) {
    const grnd = scene.make.graphics({ x: 0, y: 0, add: false });
    grnd.fillStyle(0x8b4513, 1);
    grnd.fillRect(0, 0, 64, 64);
    grnd.fillStyle(0x70380f, 1);
    grnd.fillRect(10, 20, 8, 4); grnd.fillRect(40, 40, 10, 4); grnd.fillRect(20, 50, 6, 4);
    grnd.fillStyle(0x2ecc71, 1);
    grnd.fillRect(0, 0, 64, 14);
    grnd.fillStyle(0x27ae60, 1);
    grnd.fillRect(0, 14, 64, 4);
    grnd.generateTexture('tex_ground', 64, 64);
    grnd.destroy();
  }

  if (!scene.textures.exists('tex_cloud')) {
    const cld = scene.make.graphics({ x: 0, y: 0, add: false });
    cld.fillStyle(0xffffff, 0.85);
    cld.fillCircle(30, 30, 20);
    cld.fillCircle(55, 20, 30);
    cld.fillCircle(85, 25, 25);
    cld.fillCircle(110, 35, 15);
    cld.fillCircle(60, 40, 20);
    cld.generateTexture('tex_cloud', 140, 60);
    cld.destroy();
  }

  // UPGRADED: 3D Wooden Crate with Recessed Slats & Corner Rivets
  if (!scene.textures.exists('tex_crate')) {
    const crate = scene.make.graphics({ x: 0, y: 0, add: false });
    // Outer dark wood base
    crate.fillStyle(0x6e4116, 1);
    crate.fillRoundedRect(0, 0, 40, 40, 4);
    // Main warm wood frame
    crate.fillStyle(0xcd8442, 1);
    crate.fillRoundedRect(2, 2, 36, 36, 3);
    // Recessed inner plank panel
    crate.fillStyle(0x9c642d, 1);
    crate.fillRect(7, 7, 26, 26);
    // Horizontal wood plank seams inside panel
    crate.lineStyle(1.5, 0x6e4116, 0.85);
    crate.lineBetween(7, 15, 33, 15);
    crate.lineBetween(7, 25, 33, 25);
    // Diagonal wooden cross-braces
    crate.lineStyle(5, 0xb87736, 1);
    crate.lineBetween(7, 7, 33, 33);
    crate.lineBetween(33, 7, 7, 33);
    crate.lineStyle(1.5, 0x6e4116, 0.9);
    crate.strokeRect(7, 7, 26, 26);
    // Top & left 3D highlight bevel
    crate.lineStyle(2, 0xf5b041, 0.8);
    crate.lineBetween(3, 3, 37, 3);
    crate.lineBetween(3, 3, 3, 37);
    // Iron corner bolts
    crate.fillStyle(0xbdc3c7, 1);
    [[5, 5], [35, 5], [5, 35], [35, 35]].forEach(([bx, by]) => {
      crate.fillCircle(bx, by, 2);
    });
    crate.generateTexture('tex_crate', 40, 40);
    crate.destroy();
  }

  // UPGRADED: Glossy 3D Golden Question Box
  if (!scene.textures.exists('tex_qblock')) {
    const qb = scene.make.graphics({ x: 0, y: 0, add: false });
    // Deep bronze outer border
    qb.fillStyle(0x9c640c, 1);
    qb.fillRoundedRect(0, 0, 44, 44, 7);
    // Bright gold main body
    qb.fillStyle(0xf1c40f, 1);
    qb.fillRoundedRect(2, 2, 40, 40, 6);
    // Rich amber inner bevel panel
    qb.fillStyle(0xf39c12, 1);
    qb.fillRoundedRect(6, 6, 32, 32, 4);
    qb.lineStyle(1.5, 0xb7791f, 0.9);
    qb.strokeRoundedRect(6, 6, 32, 32, 4);
    // Glossy top-left shine
    qb.fillStyle(0xfff9c4, 0.85);
    qb.fillRoundedRect(5, 4, 34, 4, 2);
    qb.fillRoundedRect(4, 5, 4, 20, 2);
    // 4 Corner golden rivets
    [[6, 6], [38, 6], [6, 38], [38, 38]].forEach(([rx, ry]) => {
      qb.fillStyle(0x9c640c, 1);
      qb.fillCircle(rx, ry, 2.3);
      qb.fillStyle(0xffeaa7, 1);
      qb.fillCircle(rx - 0.5, ry - 0.5, 1);
    });
    qb.generateTexture('tex_qblock', 44, 44);
    qb.destroy();
  }

  // UPGRADED: Fiery Crimson & Amber 3D Red Power Box
  if (!scene.textures.exists('tex_redblock')) {
    const rb = scene.make.graphics({ x: 0, y: 0, add: false });
    // Dark crimson outer border
    rb.fillStyle(0x78281f, 1);
    rb.fillRoundedRect(0, 0, 44, 44, 7);
    // Bright crimson main body
    rb.fillStyle(0xe74c3c, 1);
    rb.fillRoundedRect(2, 2, 40, 40, 6);
    // Inner glowing ember panel
    rb.fillStyle(0xc0392b, 1);
    rb.fillRoundedRect(6, 6, 32, 32, 4);
    // Subtle flame crown accents along bottom of inner panel
    rb.fillStyle(0xf39c12, 0.85);
    rb.fillTriangle(8, 37, 14, 27, 20, 37);
    rb.fillTriangle(16, 37, 22, 24, 28, 37);
    rb.fillTriangle(24, 37, 30, 27, 36, 37);
    rb.fillStyle(0xf1c40f, 0.9);
    rb.fillTriangle(12, 37, 16, 31, 20, 37);
    rb.fillTriangle(20, 37, 24, 29, 28, 37);
    rb.lineStyle(1.5, 0xf39c12, 0.9);
    rb.strokeRoundedRect(6, 6, 32, 32, 4);
    // Glossy top shine
    rb.fillStyle(0xffb8b8, 0.75);
    rb.fillRoundedRect(5, 4, 34, 4, 2);
    // 4 Corner brass rivets
    [[6, 6], [38, 6], [6, 38], [38, 38]].forEach(([rx, ry]) => {
      rb.fillStyle(0x78281f, 1);
      rb.fillCircle(rx, ry, 2.3);
      rb.fillStyle(0xf1c40f, 1);
      rb.fillCircle(rx - 0.5, ry - 0.5, 1.2);
    });
    rb.generateTexture('tex_redblock', 44, 44);
    rb.destroy();
  }

  // NEW: Tileable Upper Catwalk / Sky-Bridge Texture (Attached to Box Towers)
  if (!scene.textures.exists('tex_catwalk')) {
    const cw = scene.make.graphics({ x: 0, y: 0, add: false });
    // Sturdy stone-slate lower support beam
    cw.fillStyle(0x2c3e50, 1);
    cw.fillRect(0, 8, 64, 16);
    cw.fillStyle(0x34495e, 1);
    cw.fillRect(2, 10, 28, 12);
    cw.fillRect(34, 10, 28, 12);
    // Truss cross-bracing & golden bolts on lower beam
    cw.lineStyle(1.5, 0x1a252f, 0.9);
    cw.lineBetween(0, 23, 64, 23);
    cw.lineBetween(32, 9, 32, 24);
    cw.fillStyle(0xf1c40f, 0.9);
    cw.fillCircle(8, 16, 1.8);
    cw.fillCircle(24, 16, 1.8);
    cw.fillCircle(40, 16, 1.8);
    cw.fillCircle(56, 16, 1.8);
    // Warm timber top walkway deck
    cw.fillStyle(0xd35400, 1);
    cw.fillRect(0, 0, 64, 9);
    cw.fillStyle(0xe67e22, 1);
    cw.fillRect(0, 1, 64, 6);
    cw.fillStyle(0xf8c471, 0.85);
    cw.fillRect(0, 1, 64, 2);
    // Plank joints & small moss/vine accents
    cw.lineStyle(1.5, 0x873600, 1);
    cw.lineBetween(16, 0, 16, 9);
    cw.lineBetween(48, 0, 48, 9);
    cw.fillStyle(0x2ecc71, 1);
    cw.fillTriangle(12, 8, 16, 14, 20, 8);
    cw.fillTriangle(44, 8, 48, 13, 52, 8);
    cw.generateTexture('tex_catwalk', 64, 24);
    cw.destroy();
  }

  if (!scene.textures.exists('tex_trap')) {
    const trap = scene.make.graphics({ x: 0, y: 0, add: false });
    trap.fillStyle(0x8e44ad, 1); trap.fillRect(0, 0, 200, 30);
    trap.fillStyle(0x9b59b6, 1);
    for (let i = 10; i < 200; i += 20) { trap.fillTriangle(i, 30, i + 10, 5, i + 20, 30); }
    trap.generateTexture('tex_trap', 200, 30); trap.destroy();
  }

  // UPGRADED: Outdoor-Themed Wooden Plank & Grass Foliage Moving Platform
  if (!scene.textures.exists('tex_plat')) {
    const plat = scene.make.graphics({ x: 0, y: 0, add: false });
    // Main wooden beam body
    plat.fillStyle(0x8b5a2b, 1);
    plat.fillRoundedRect(2, 5, 126, 20, 5);
    // Darker lower wood shadow
    plat.fillStyle(0x6e4720, 1);
    plat.fillRoundedRect(4, 17, 122, 8, 4);
    // Wood grain & plank seams
    plat.lineStyle(1.5, 0x5c3a1a, 0.85);
    plat.strokeRoundedRect(2, 5, 126, 20, 5);
    plat.lineBetween(42, 7, 42, 24);
    plat.lineBetween(88, 7, 88, 24);
    plat.lineBetween(8, 15, 122, 15);
    // Iron bolts on planks
    plat.fillStyle(0xbdc3c7, 1);
    [12, 36, 48, 82, 94, 118].forEach(bx => {
      plat.fillCircle(bx, 19, 1.6);
    });
    // Lush grass top layer
    plat.fillStyle(0x2ecc71, 1);
    plat.fillRoundedRect(0, 0, 130, 9, 4);
    // Overhanging foliage & grass blades
    plat.fillStyle(0x27ae60, 1);
    for (let gx = 4; gx < 124; gx += 10) {
      plat.fillTriangle(gx, 7, gx + 5, 14, gx + 9, 7);
    }
    // Bright grass highlights & tiny flowers
    plat.fillStyle(0x55efc4, 0.8);
    plat.fillRect(8, 2, 24, 2);
    plat.fillRect(52, 2, 30, 2);
    plat.fillRect(96, 2, 22, 2);
    plat.fillStyle(0xf1c40f, 1);
    plat.fillCircle(28, 3, 2);
    plat.fillCircle(104, 3, 2);
    plat.generateTexture('tex_plat', 130, 26);
    plat.destroy();
  }

  if (!scene.textures.exists('tex_redball')) {
    const ball = scene.make.graphics({ x: 0, y: 0, add: false });
    ball.fillStyle(0xff7675, 1); ball.fillCircle(12, 12, 12);
    ball.fillStyle(0xd63031, 1); ball.fillCircle(12, 12, 8);
    ball.fillStyle(0xffffff, 1); ball.fillCircle(8, 8, 3);
    ball.generateTexture('tex_redball', 24, 24); ball.destroy();
  }

  if (!scene.textures.exists('tex_fireball')) {
    const fb = scene.make.graphics({ x: 0, y: 0, add: false });
    fb.fillStyle(0xf39c12, 1); fb.fillCircle(16, 16, 16);
    fb.fillStyle(0xe74c3c, 1); fb.fillCircle(16, 16, 10);
    fb.fillStyle(0xffffff, 1); fb.fillCircle(12, 12, 4);
    fb.generateTexture('tex_fireball', 32, 32); fb.destroy();
  }

  // Regular small crab monster (kept unchanged)
  if (!scene.textures.exists('tex_crab')) {
    const crab = scene.make.graphics({ x: 0, y: 0, add: false });
    crab.fillStyle(0xe74c3c, 1);
    crab.fillEllipse(20, 20, 36, 20);
    crab.lineStyle(3, 0xc0392b, 1);
    crab.lineBetween(8, 16, 6, 10);
    crab.lineBetween(32, 16, 34, 10);
    crab.fillStyle(0xc0392b, 1);
    crab.fillTriangle(2, 4, 8, 10, 4, 11);
    crab.fillTriangle(9, 4, 8, 10, 5, 11);
    crab.fillTriangle(31, 4, 32, 10, 35, 11);
    crab.fillTriangle(38, 4, 32, 10, 36, 11);
    crab.fillStyle(0xffffff, 1);
    crab.fillCircle(15, 16, 3.5); crab.fillCircle(25, 16, 3.5);
    crab.fillStyle(0x000000, 1);
    crab.fillCircle(15, 16, 1.5); crab.fillCircle(25, 16, 1.5);
    crab.generateTexture('tex_crab', 40, 30); crab.destroy();
  }

  // UPGRADED: High-Resolution Level 3 Boss Crab (Open & Clamped Pincers)
  const drawBossCrabTexture = (key, pincersOpen) => {
    if (scene.textures.exists(key)) return;
    const bc = scene.make.graphics({ x: 0, y: 0, add: false });
    const cx = 85;
    const cy = 62;

    // 1. Segmented Walking Legs (3 pairs on left and right)
    const legOffsets = [-12, 0, 12];
    legOffsets.forEach((ly, i) => {
      const spread = (i - 1) * 8;
      // Left leg segments (femur -> tibia -> sharp dactyl tip)
      bc.lineStyle(6, 0xa93226, 1);
      bc.lineBetween(cx - 38, cy + ly, cx - 64, cy + ly - 6 + spread);
      bc.lineStyle(5, 0xc0392b, 1);
      bc.lineBetween(cx - 64, cy + ly - 6 + spread, cx - 78, cy + 24 + i * 5);
      bc.fillStyle(0xf39c12, 1);
      bc.fillCircle(cx - 64, cy + ly - 6 + spread, 3.5);
      bc.fillStyle(0x78281f, 1);
      bc.fillTriangle(cx - 76, cy + 22 + i * 5, cx - 83, cy + 34 + i * 4, cx - 72, cy + 28 + i * 5);

      // Right leg segments
      bc.lineStyle(6, 0xa93226, 1);
      bc.lineBetween(cx + 38, cy + ly, cx + 64, cy + ly - 6 + spread);
      bc.lineStyle(5, 0xc0392b, 1);
      bc.lineBetween(cx + 64, cy + ly - 6 + spread, cx + 78, cy + 24 + i * 5);
      bc.fillStyle(0xf39c12, 1);
      bc.fillCircle(cx + 64, cy + ly - 6 + spread, 3.5);
      bc.fillStyle(0x78281f, 1);
      bc.fillTriangle(cx + 76, cy + 22 + i * 5, cx + 83, cy + 34 + i * 4, cx + 72, cy + 28 + i * 5);
    });

    // 2. Heavy Segmented Chelae Arms (Merus & Carpus)
    bc.lineStyle(9, 0x922b21, 1);
    bc.lineBetween(cx - 32, cy - 12, cx - 54, cy - 32);
    bc.lineBetween(cx + 32, cy - 12, cx + 54, cy - 32);
    bc.fillStyle(0xe67e22, 1);
    bc.fillCircle(cx - 44, cy - 23, 5);
    bc.fillCircle(cx + 44, cy - 23, 5);

    // 3. Prominent Open / Closing Pincers (Chelae)
    bc.fillStyle(0xd63031, 1);
    bc.lineStyle(2.5, 0x641e16, 1);
    if (pincersOpen) {
      // Left Open Pincer
      bc.fillTriangle(cx - 54, cy - 28, cx - 78, cy - 48, cx - 58, cy - 52);
      bc.strokeTriangle(cx - 54, cy - 28, cx - 78, cy - 48, cx - 58, cy - 52);
      bc.fillTriangle(cx - 54, cy - 28, cx - 44, cy - 56, cx - 32, cy - 42);
      bc.strokeTriangle(cx - 54, cy - 28, cx - 44, cy - 56, cx - 32, cy - 42);
      // White serrated pincer teeth
      bc.fillStyle(0xffffff, 1);
      bc.fillTriangle(cx - 62, cy - 46, cx - 57, cy - 42, cx - 55, cy - 48);
      bc.fillTriangle(cx - 45, cy - 46, cx - 49, cy - 41, cx - 41, cy - 42);

      // Right Open Pincer
      bc.fillStyle(0xd63031, 1);
      bc.fillTriangle(cx + 54, cy - 28, cx + 78, cy - 48, cx + 58, cy - 52);
      bc.strokeTriangle(cx + 54, cy - 28, cx + 78, cy - 48, cx + 58, cy - 52);
      bc.fillTriangle(cx + 54, cy - 28, cx + 44, cy - 56, cx + 32, cy - 42);
      bc.strokeTriangle(cx + 54, cy - 28, cx + 44, cy - 56, cx + 32, cy - 42);
      bc.fillStyle(0xffffff, 1);
      bc.fillTriangle(cx + 62, cy - 46, cx + 57, cy - 42, cx + 55, cy - 48);
      bc.fillTriangle(cx + 45, cy - 46, cx + 49, cy - 41, cx + 41, cy - 42);
    } else {
      // Clamped / Snapping Pincers
      bc.fillEllipse(cx - 55, cy - 44, 28, 22);
      bc.strokeEllipse(cx - 55, cy - 44, 28, 22);
      bc.lineStyle(2, 0xffffff, 0.9);
      bc.lineBetween(cx - 64, cy - 50, cx - 46, cy - 38);

      bc.lineStyle(2.5, 0x641e16, 1);
      bc.fillEllipse(cx + 55, cy - 44, 28, 22);
      bc.strokeEllipse(cx + 55, cy - 44, 28, 22);
      bc.lineStyle(2, 0xffffff, 0.9);
      bc.lineBetween(cx + 64, cy - 50, cx + 46, cy - 38);
    }

    // 4. Wide Armored Carapace with Marginal Spines
    bc.fillStyle(0xc0392b, 1);
    bc.fillPoints([
      { x: cx - 52, y: cy - 4 },
      { x: cx - 38, y: cy - 24 },
      { x: cx, y: cy - 28 },
      { x: cx + 38, y: cy - 24 },
      { x: cx + 52, y: cy - 4 },
      { x: cx + 40, y: cy + 20 },
      { x: cx - 40, y: cy + 20 }
    ], true);
    bc.lineStyle(3, 0x78281f, 1);
    bc.strokePoints([
      { x: cx - 52, y: cy - 4 },
      { x: cx - 38, y: cy - 24 },
      { x: cx, y: cy - 28 },
      { x: cx + 38, y: cy - 24 },
      { x: cx + 52, y: cy - 4 },
      { x: cx + 40, y: cy + 20 },
      { x: cx - 40, y: cy + 20 }
    ], true);

    // Inner carapace dorsal ridges & sheen
    bc.fillStyle(0xe74c3c, 1);
    bc.fillEllipse(cx, cy - 3, 82, 34);
    bc.fillStyle(0xff7675, 0.55);
    bc.fillEllipse(cx, cy - 10, 56, 14);
    bc.lineStyle(2, 0x922b21, 0.8);
    bc.arc(cx, cy + 4, 22, Math.PI * 1.15, Math.PI * 1.85, false);
    bc.strokePath();

    // 5. Tall Articulated Eye Stalks & Compound Eyes
    bc.lineStyle(4.5, 0x922b21, 1);
    bc.lineBetween(cx - 16, cy - 22, cx - 20, cy - 40);
    bc.lineBetween(cx + 16, cy - 22, cx + 20, cy - 40);
    bc.fillStyle(0xf1c40f, 1);
    bc.fillCircle(cx - 20, cy - 42, 7);
    bc.fillCircle(cx + 20, cy - 42, 7);
    bc.lineStyle(2, 0x78281f, 1);
    bc.strokeCircle(cx - 20, cy - 42, 7);
    bc.strokeCircle(cx + 20, cy - 42, 7);
    bc.fillStyle(0x111111, 1);
    bc.fillCircle(cx - 20, cy - 42, 3.5);
    bc.fillCircle(cx + 20, cy - 42, 3.5);
    bc.fillStyle(0xffffff, 1);
    bc.fillCircle(cx - 21.5, cy - 43.5, 1.3);
    bc.fillCircle(cx + 18.5, cy - 43.5, 1.3);

    // 6. Armored Mandibles / Mouthparts
    bc.fillStyle(0x78281f, 1);
    bc.fillRoundedRect(cx - 16, cy + 5, 32, 9, 4);
    bc.lineStyle(1.5, 0xf39c12, 0.9);
    bc.lineBetween(cx - 10, cy + 9, cx + 10, cy + 9);
    bc.lineBetween(cx, cy + 5, cx, cy + 14);

    bc.generateTexture(key, 170, 105);
    bc.destroy();
  };
  drawBossCrabTexture('tex_boss_crab', true);
  drawBossCrabTexture('tex_boss_crab_snap', false);

  // Impact Spike / Debris Texture for Boss Ground Pounds & Shell Impact
  if (!scene.textures.exists('tex_debris')) {
    const deb = scene.make.graphics({ x: 0, y: 0, add: false });
    deb.fillStyle(0x8e44ad, 1);
    deb.fillTriangle(10, 0, 20, 18, 0, 18);
    deb.lineStyle(2, 0xf1c40f, 1);
    deb.strokeTriangle(10, 0, 20, 18, 0, 18);
    deb.generateTexture('tex_debris', 20, 20);
    deb.destroy();
  }

  if (!scene.textures.exists('tex_flag')) {
    const flag = scene.make.graphics({ x: 0, y: 0, add: false });
    flag.fillStyle(0xbdc3c7, 1); flag.fillRect(8, 0, 6, 240);
    flag.fillStyle(0xffffff, 1); flag.fillRect(14, 6, 30, 24);
    flag.fillStyle(0x2c3e50, 1); flag.fillRect(14, 6, 15, 12);
    flag.fillRect(29, 18, 15, 12);
    flag.generateTexture('tex_flag', 50, 240); flag.destroy();
  }

  if (!scene.textures.exists('tex_gate_wall')) {
    const wall = scene.make.graphics({ x: 0, y: 0, add: false });
    wall.fillStyle(0xe74c3c, 0.8); wall.fillRoundedRect(3, 0, 20, 400, 6);
    wall.lineStyle(2, 0xff7675, 1); wall.strokeRoundedRect(3, 0, 20, 400, 6);
    wall.lineStyle(2, 0xffffff, 0.7);
    for (let y = 20; y < 400; y += 30) { wall.lineBetween(5, y, 21, y); }
    wall.generateTexture('tex_gate_wall', 26, 400); wall.destroy();
  }

  if (!scene.textures.exists('tex_hoop')) {
    const hoop = scene.make.graphics({ x: 0, y: 0, add: false });
    hoop.lineStyle(10, 0xf1c40f, 1);
    hoop.strokeEllipse(25, 100, 42, 180);
    hoop.lineStyle(3, 0xffffff, 0.9);
    hoop.strokeEllipse(25, 100, 42, 180);
    hoop.generateTexture('tex_hoop', 50, 200);
    hoop.destroy();
  }

  if (!scene.textures.exists('tex_tank')) {
    const tank = scene.make.graphics({ x: 0, y: 0, add: false });
    tank.fillStyle(0x1e824c, 1);
    tank.lineStyle(3, 0x145a32, 1);
    tank.fillPoints([{ x: 50, y: 38 }, { x: 104, y: -2 }, { x: 114, y: 9 }, { x: 60, y: 49 }], true);
    tank.strokePoints([{ x: 50, y: 38 }, { x: 104, y: -2 }, { x: 114, y: 9 }, { x: 60, y: 49 }], true);
    tank.fillStyle(0xf1c40f, 1); tank.fillCircle(109, 3, 7);
    tank.fillStyle(0x2c3e50, 1); tank.fillRoundedRect(2, 50, 115, 32, 8);
    tank.lineStyle(3, 0x1a252f, 1); tank.strokeRoundedRect(2, 50, 115, 32, 8);
    tank.fillStyle(0x95a5a6, 1); tank.fillCircle(20, 66, 9); tank.fillCircle(45, 66, 9); tank.fillCircle(70, 66, 9); tank.fillCircle(95, 66, 9);
    tank.fillStyle(0x27ae60, 1); tank.fillRoundedRect(12, 28, 92, 26, 6);
    tank.fillStyle(0x2ecc71, 1); tank.fillCircle(50, 30, 20);
    tank.generateTexture('tex_tank', 130, 85);
    tank.destroy();
  }

  // --- 5. COBRA SNAKE BOSS TEXTURE ---
  if (!scene.textures.exists('tex_snake')) {
    const s = scene.make.graphics({ x: 0, y: 0, add: false });
    s.fillStyle(0x1e824c, 1);
    s.fillEllipse(50, 68, 70, 22);
    s.fillStyle(0x27ae60, 1);
    s.fillEllipse(50, 66, 56, 16);
    s.fillStyle(0xf1c40f, 1);
    s.fillCircle(30, 68, 4); s.fillCircle(50, 68, 4); s.fillCircle(70, 68, 4);
    s.fillStyle(0x145a32, 1);
    s.fillEllipse(78, 38, 44, 48);
    s.fillStyle(0x27ae60, 1);
    s.fillEllipse(78, 38, 34, 40);
    s.fillStyle(0xf1c40f, 1);
    s.fillCircle(68, 36, 5); s.fillCircle(88, 36, 5);
    s.fillStyle(0x000000, 1);
    s.fillCircle(68, 36, 2.5); s.fillCircle(88, 36, 2.5);
    s.fillStyle(0x1e824c, 1);
    s.fillRect(72, 32, 14, 38);
    s.fillStyle(0xf1c40f, 1);
    for (let by = 38; by <= 64; by += 7) { s.fillRect(75, by, 8, 3); }
    s.fillStyle(0x27ae60, 1);
    s.fillRoundedRect(72, 12, 38, 22, 8);
    s.fillStyle(0x1e824c, 1);
    s.fillTriangle(104, 14, 118, 23, 104, 32);
    s.fillStyle(0xe74c3c, 1);
    s.fillCircle(96, 20, 4.5);
    s.fillStyle(0xf1c40f, 1);
    s.fillRect(95.5, 17, 1.5, 6);
    s.fillStyle(0xffffff, 1);
    s.fillTriangle(106, 26, 110, 26, 108, 31);
    s.fillStyle(0xe74c3c, 1);
    s.fillRect(116, 23, 12, 2.5);
    s.fillTriangle(128, 21, 134, 19, 128, 24);
    s.fillTriangle(128, 24, 134, 27, 128, 27);
    s.generateTexture('tex_snake', 140, 85);
    s.destroy();
  }

  // --- 6. SNAKE BEAM TEXTURE ---
  if (!scene.textures.exists('tex_snake_beam')) {
    const beam = scene.make.graphics({ x: 0, y: 0, add: false });
    beam.fillStyle(0x00d2d3, 1);
    beam.fillRoundedRect(0, 4, 52, 18, 9);
    beam.fillStyle(0xffffff, 0.95);
    beam.fillRoundedRect(8, 7, 36, 12, 6);
    beam.generateTexture('tex_snake_beam', 52, 26);
    beam.destroy();
  }

  // --- 7. TURTLE BOSS TEXTURE ---
  if (!scene.textures.exists('tex_turtle')) {
    const turtle = scene.make.graphics({ x: 0, y: 0, add: false });
    turtle.fillStyle(0x8e44ad, 1);
    turtle.fillRoundedRect(24, 14, 32, 38, 12);
    turtle.lineStyle(3, 0x5e2a77, 1);
    turtle.strokeRoundedRect(24, 14, 32, 38, 12);
    turtle.fillStyle(0x9b59b6, 1);
    turtle.fillCircle(38, 26, 5.5); turtle.fillCircle(38, 39, 5.5); turtle.fillCircle(48, 32, 4.5);
    turtle.fillStyle(0x27ae60, 1);
    turtle.fillRoundedRect(14, 18, 18, 32, 7);
    turtle.fillStyle(0x229954, 1);
    turtle.fillRoundedRect(16, 46, 10, 16, 4); turtle.fillRoundedRect(32, 46, 10, 16, 4);
    turtle.fillStyle(0xf1c40f, 1);
    turtle.fillRect(16, 60, 10, 3); turtle.fillRect(32, 60, 10, 3);
    turtle.fillStyle(0x2ecc71, 1); turtle.fillCircle(14, 16, 11);
    turtle.fillStyle(0x27ae60, 1); turtle.fillTriangle(2, 17, 12, 12, 12, 22);
    turtle.fillStyle(0x2c3e50, 1); turtle.fillCircle(10, 13, 2.5);
    turtle.fillStyle(0xffffff, 1); turtle.fillCircle(9, 12, 1);
    turtle.fillStyle(0x2ecc71, 1); turtle.fillRoundedRect(4, 26, 18, 8, 4);
    turtle.fillStyle(0xf1c40f, 1); turtle.fillCircle(4, 30, 3.5);
    turtle.generateTexture('tex_turtle', 64, 66);
    turtle.destroy();
  }

  // --- 8. HEART ICONS ---
  if (!scene.textures.exists('tex_heart')) {
    const heart = scene.make.graphics({ x: 0, y: 0, add: false });
    heart.fillStyle(0xe74c3c, 1);
    heart.fillCircle(7, 7, 6); heart.fillCircle(17, 7, 6); heart.fillTriangle(1, 9, 23, 9, 12, 22);
    heart.generateTexture('tex_heart', 24, 24); heart.destroy();
  }

  if (!scene.textures.exists('tex_heart_empty')) {
    const heartEmpty = scene.make.graphics({ x: 0, y: 0, add: false });
    heartEmpty.fillStyle(0x576574, 0.6);
    heartEmpty.fillCircle(7, 7, 6); heartEmpty.fillCircle(17, 7, 6); heartEmpty.fillTriangle(1, 9, 23, 9, 12, 22);
    heartEmpty.generateTexture('tex_heart_empty', 24, 24); heartEmpty.destroy();
  }

  // --- 9. TURTLE FIREBALL TEXTURE ---
  if (!scene.textures.exists('tex_turtle_fb')) {
    const fb = scene.make.graphics({ x: 0, y: 0, add: false });
    fb.fillStyle(0x9b59b6, 1); fb.fillCircle(14, 14, 14);
    fb.fillStyle(0xe74c3c, 1); fb.fillCircle(14, 14, 9);
    fb.fillStyle(0xf1c40f, 1); fb.fillCircle(14, 14, 4);
    fb.generateTexture('tex_turtle_fb', 28, 28); fb.destroy();
  }
}

// ===================================================
// 0.5 PROCEDURAL SOUND SYNTHESIZER & ORIGINAL COMPOSER
// ===================================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.isBgmPlaying = false;
    this.bgmTimer = null;
    this.bgmStep = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playJump() {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain); gain.connect(this.ctx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(380, now + 0.06);
    osc.frequency.linearRampToValueAtTime(320, now + 0.12);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.start(now); osc.stop(now + 0.12);
  }

  playDash() {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain); gain.connect(this.ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(190, now + 0.11);
    gain.gain.setValueAtTime(0.16, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
    osc.start(now); osc.stop(now + 0.11);
  }

  playStar() {
    this.init();
    const now = this.ctx.currentTime;
    const freqs = [587.33, 880.00, 1318.51, 1760.00];
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain); gain.connect(this.ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);
      gain.gain.setValueAtTime(0.12, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.18);
      osc.start(now + idx * 0.05); osc.stop(now + idx * 0.05 + 0.18);
    });
  }

  playSuper() {
    this.init();
    const now = this.ctx.currentTime;
    const notes = [293.66, 440.00, 587.33, 880.00, 1174.66];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain); gain.connect(this.ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + i * 0.04);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + i * 0.04 + 0.3);
      gain.gain.setValueAtTime(0.08, now + i * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.04 + 0.35);
      osc.start(now + i * 0.04); osc.stop(now + i * 0.04 + 0.35);
    });
  }

  playFireball() {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain); gain.connect(this.ctx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(620, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.15);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
    osc.start(now); osc.stop(now + 0.15);
  }

  playSnakeBeam() {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain); gain.connect(this.ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(950, now);
    osc.frequency.linearRampToValueAtTime(220, now + 0.28);
    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.28);
    osc.start(now); osc.stop(now + 0.28);
  }

  playHit() {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain); gain.connect(this.ctx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.2);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.start(now); osc.stop(now + 0.2);
  }

  startBGM(isBoss = false) {
    this.init();
    this.stopBGM();
    this.isBgmPlaying = true;
    this.bgmStep = 0;

    const stageLead = [293.66, 0, 369.99, 440.0, 587.33, 440.0, 369.99, 0, 329.63, 0, 392.0, 493.88, 440.0, 369.99, 329.63, 293.66];
    const stageBass = [146.83, 146.83, 146.83, 146.83, 196.0, 196.0, 196.0, 196.0, 220.0, 220.0, 220.0, 220.0, 146.83, 146.83, 146.83, 146.83];

    const bossLead = [493.88, 493.88, 0, 587.33, 554.37, 0, 440.0, 493.88, 0, 659.25, 587.33, 0, 554.37, 493.88, 440.0, 466.16];
    const bossBass = [123.47, 123.47, 164.81, 123.47, 146.83, 146.83, 174.61, 146.83, 110.0, 110.0, 146.83, 110.0, 123.47, 123.47, 123.47, 123.47];

    const leadSeq = isBoss ? bossLead : stageLead;
    const bassSeq = isBoss ? bossBass : stageBass;
    const tempo = isBoss ? 160 : 210;

    this.bgmTimer = setInterval(() => {
      if (!this.isBgmPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const stepIdx = this.bgmStep % leadSeq.length;

      const leadFreq = leadSeq[stepIdx];
      if (leadFreq > 0) {
        const leadOsc = this.ctx.createOscillator();
        const leadGain = this.ctx.createGain();
        leadOsc.connect(leadGain); leadGain.connect(this.ctx.destination);
        leadOsc.type = isBoss ? 'sawtooth' : 'sine';
        leadOsc.frequency.setValueAtTime(leadFreq, now);
        leadGain.gain.setValueAtTime(isBoss ? 0.03 : 0.05, now);
        leadGain.gain.exponentialRampToValueAtTime(0.001, now + (tempo / 1000) * 0.85);
        leadOsc.start(now); leadOsc.stop(now + (tempo / 1000) * 0.85);
      }

      const bassFreq = bassSeq[stepIdx];
      if (bassFreq > 0) {
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bassOsc.connect(bassGain); bassGain.connect(this.ctx.destination);
        bassOsc.type = 'triangle';
        bassOsc.frequency.setValueAtTime(bassFreq, now);
        bassGain.gain.setValueAtTime(0.06, now);
        bassGain.gain.exponentialRampToValueAtTime(0.001, now + (tempo / 1000) * 0.95);
        bassOsc.start(now); bassOsc.stop(now + (tempo / 1000) * 0.95);
      }
      this.bgmStep++;
    }, tempo);
  }

  stopBGM() {
    this.isBgmPlaying = false;
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
}

const sfx = new SoundFX();

// ===================================================
// 0.8 TIER PROGRESS & CERTIFICATE GENERATOR
// ===================================================
const TierProgress = {
  // Deterministic question box count per stage (Stages 1 to 15)
  stageBoxCounts: {
    1: 2, 2: 1, 3: 1, 4: 1, 5: 2,
    6: 1, 7: 1, 8: 2, 9: 1, 10: 2,
    11: 3, 12: 3, 13: 3, 14: 3, 15: 3
  },
  clearedByTier: {
    A1: new Set(), A2: new Set(), B1: new Set(),
    B2: new Set(), C1: new Set(), C2: new Set()
  },
  unlockedCertificates: {
    A1: false, A2: false, B1: false,
    B2: false, C1: false, C2: false
  },

  recordBoxCleared(tier, stage, boxId) {
    if (!this.clearedByTier[tier]) this.clearedByTier[tier] = new Set();
    this.clearedByTier[tier].add(`S${stage}_B${boxId}`);
  },

  unlockTier(tier) {
    this.unlockedCertificates[tier] = true;
  },

  getTierBoxStats(tier) {
    const maxStages = (tier === 'C1' || tier === 'C2') ? 12 : 15;
    let total = 0;
    for (let s = 1; s <= maxStages; s++) {
      total += (this.stageBoxCounts[s] || 1);
    }
    const cleared = this.clearedByTier[tier] ? this.clearedByTier[tier].size : 0;
    return { cleared: Math.min(cleared, total), total };
  },

  getTierTitle(tier) {
    const titles = {
      A1: 'A1 Elementary / Beginner English',
      A2: 'A2 Elementary English',
      B1: 'B1 Intermediate English',
      B2: 'B2 Upper-Intermediate English',
      C1: 'C1 Advanced English',
      C2: 'C2 Mastery English'
    };
    return titles[tier] || `${tier} English Proficiency`;
  }
};

class CertificateManager {
  static ensureModalDOM() {
    let modal = document.getElementById('certificate-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'certificate-modal';
      modal.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:9999;flex-direction:column;justify-content:center;align-items:center;padding:20px;box-sizing:border-box;';
      modal.innerHTML = `
        <div class="cert-modal-card" style="background:#1e272e;border:3px solid #f1c40f;border-radius:12px;padding:18px 24px;max-width:860px;width:100%;display:flex;flex-direction:column;align-items:center;">
          <div class="cert-controls" style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;margin-bottom:14px;width:100%;">
            <label for="cert-student-name" style="color:#fff;font-weight:bold;font-size:14px;">Student Name / 學生姓名:</label>
            <input id="cert-student-name" type="text" value="English Adventurer" maxlength="32" style="padding:8px 12px;border-radius:6px;border:2px solid #00d2d3;background:#2f3640;color:#fff;font-size:15px;font-weight:bold;width:220px;" />
            <button id="cert-download-png" class="cert-btn cert-btn-png" style="padding:9px 16px;border:none;border-radius:6px;font-weight:bold;cursor:pointer;color:#fff;background:#00b894;">💾 Save PNG / 下載圖片</button>
            <button id="cert-print-pdf" class="cert-btn cert-btn-print" style="padding:9px 16px;border:none;border-radius:6px;font-weight:bold;cursor:pointer;color:#fff;background:#0984e3;">🖨️ Print / Save PDF</button>
            <button id="cert-close-btn" class="cert-btn cert-btn-close" style="padding:9px 16px;border:none;border-radius:6px;font-weight:bold;cursor:pointer;color:#fff;background:#d63031;">✖ Close / 關閉</button>
          </div>
          <img id="certificate-preview-img" alt="Certificate of Completion" style="max-width:100%;max-height:70vh;border-radius:6px;border:2px solid #f1c40f;background:#fff;" />
        </div>
      `;
      document.body.appendChild(modal);
    }

    let printArea = document.getElementById('certificate-print-area');
    if (!printArea) {
      printArea = document.createElement('div');
      printArea.id = 'certificate-print-area';
      printArea.style.display = 'none';
      document.body.appendChild(printArea);
    }
    return { modal, printArea };
  }

  static renderCertificateDataURL(tier, skill, studentName) {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 850;
    const ctx = canvas.getContext('2d');

    const stats = TierProgress.getTierBoxStats(tier);
    const tierTitle = TierProgress.getTierTitle(tier);
    const cleanName = (studentName || 'English Adventurer').trim() || 'English Adventurer';

    // 1. Parchment Ivory Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 850);
    bgGrad.addColorStop(0, '#fffdf7');
    bgGrad.addColorStop(0.5, '#f9f3e3');
    bgGrad.addColorStop(1, '#f3ead3');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 850);

    // 2. Ornate Outer & Inner Borders
    ctx.strokeStyle = '#1e3799';
    ctx.lineWidth = 14;
    ctx.strokeRect(32, 32, 1136, 786);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 5;
    ctx.strokeRect(48, 48, 1104, 754);

    ctx.strokeStyle = '#1e3799';
    ctx.lineWidth = 2;
    ctx.strokeRect(58, 58, 1084, 734);

    // Corner Flourish Ornaments
    const corners = [
      [58, 58, 1, 1],
      [1142, 58, -1, 1],
      [58, 792, 1, -1],
      [1142, 792, -1, -1]
    ];
    corners.forEach(([cx, cy, dx, dy]) => {
      ctx.fillStyle = '#d4af37';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + dx * 45, cy);
      ctx.lineTo(cx, cy + dy * 45);
      ctx.closePath();
      ctx.fill();
    });

    // 3. Header Banner & Title
    ctx.fillStyle = '#1e3799';
    ctx.font = 'bold 46px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICATE OF COMPLETION', 600, 145);

    ctx.fillStyle = '#b78826';
    ctx.font = 'bold 20px "Segoe UI", sans-serif';
    ctx.fillText('OG English — CEFR INTERACTIVE PROFICIENCY ACADEMY', 600, 185);

    // Decorative Divider Line
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(320, 205);
    ctx.lineTo(880, 205);
    ctx.stroke();

    // 4. Student Presentation Line
    ctx.fillStyle = '#576574';
    ctx.font = 'italic 24px Georgia, serif';
    ctx.fillText('This official certificate is proudly presented to', 600, 260);

    // Student Name
    ctx.fillStyle = '#2d3436';
    ctx.font = 'bold 52px Georgia, serif';
    ctx.fillText(cleanName, 600, 335);

    ctx.strokeStyle = '#1e3799';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, 352);
    ctx.lineTo(900, 352);
    ctx.stroke();

    // 5. Completed CEFR Tier & Skill Details
    ctx.fillStyle = '#576574';
    ctx.font = '24px "Segoe UI", sans-serif';
    ctx.fillText('for successfully conquering all stages and bosses in', 600, 405);

    ctx.fillStyle = '#0984e3';
    ctx.font = 'bold 38px "Segoe UI", sans-serif';
    ctx.fillText(tierTitle, 600, 460);

    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 22px "Segoe UI", sans-serif';
    ctx.fillText(`Focus Skill Track: ${skill}`, 600, 502);

    // 6. Question Boxes Cleared Tally Badge
    ctx.fillStyle = '#1e272e';
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(350, 535, 500, 68, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#f1c40f';
    ctx.font = 'bold 26px "Segoe UI", sans-serif';
    ctx.fillText(`Question Boxes Cleared: ${stats.cleared} / ${stats.total}`, 600, 578);

    // 7. Official Gold Seal (Bottom Center)
    const sealX = 600;
    const sealY = 700;
    // Ribbons
    ctx.fillStyle = '#c0392b';
    ctx.beginPath();
    ctx.moveTo(sealX - 25, sealY + 35);
    ctx.lineTo(sealX - 55, sealY + 95);
    ctx.lineTo(sealX - 30, sealY + 82);
    ctx.lineTo(sealX - 12, sealY + 98);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(sealX + 25, sealY + 35);
    ctx.lineTo(sealX + 55, sealY + 95);
    ctx.lineTo(sealX + 30, sealY + 82);
    ctx.lineTo(sealX + 12, sealY + 98);
    ctx.closePath();
    ctx.fill();

    // Starburst Serrated Gold Seal
    ctx.fillStyle = '#d4af37';
    ctx.beginPath();
    const spikes = 28;
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? 62 : 53;
      const angle = (i * Math.PI) / spikes;
      const sx = sealX + Math.cos(angle) * r;
      const sy = sealY + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#f1c40f';
    ctx.beginPath();
    ctx.arc(sealX, sealY, 44, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#9a7b1c';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.fillStyle = '#1e272e';
    ctx.font = 'bold 28px Georgia, serif';
    ctx.fillText(tier, sealX, sealY + 4);
    ctx.font = 'bold 11px "Segoe UI", sans-serif';
    ctx.fillText('VERIFIED SEAL', sealX, sealY + 22);

    // 8. Date & Signature Lines
    const dateStr = new Date().toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    ctx.fillStyle = '#2d3436';
    ctx.font = 'bold 20px "Segoe UI", sans-serif';
    ctx.fillText(dateStr, 250, 710);
    ctx.fillText('OG English Guild', 950, 710);

    ctx.strokeStyle = '#7f8c8d';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(130, 722);
    ctx.lineTo(370, 722);
    ctx.moveTo(830, 722);
    ctx.lineTo(1070, 722);
    ctx.stroke();

    ctx.fillStyle = '#636e72';
    ctx.font = '16px "Segoe UI", sans-serif';
    ctx.fillText('Date of Completion', 250, 748);
    ctx.fillText('Certification Authority', 950, 748);

    return canvas.toDataURL('image/png');
  }

static openModal(tier, skill) {
    const { modal, printArea } = this.ensureModalDOM();
    const nameInput = document.getElementById('cert-student-name');
    const previewImg = document.getElementById('certificate-preview-img');
    const btnPng = document.getElementById('cert-download-png');
    const btnPrint = document.getElementById('cert-print-pdf');
    const btnClose = document.getElementById('cert-close-btn');

    let currentDataUrl = '';
    const refreshPreview = () => {
      currentDataUrl = this.renderCertificateDataURL(tier, skill, nameInput ? nameInput.value : 'English Adventurer');
      if (previewImg) previewImg.src = currentDataUrl;
      if (printArea) {
        printArea.innerHTML = `<img src="${currentDataUrl}" alt="Certificate Print" />`;
      }
    };

    refreshPreview();
    modal.style.display = 'flex';

    if (nameInput) {
      // Prevent Phaser from capturing 'a', 'w', 's', 'd', 'f', or Space while typing
      ['keydown', 'keyup', 'keypress'].forEach((evtType) => {
        nameInput[`on${evtType}`] = (e) => {
          e.stopPropagation();
        };
      });
      nameInput.oninput = refreshPreview;
      setTimeout(() => nameInput.focus(), 50);
    }

    if (btnPng) {
      btnPng.onclick = () => {
        refreshPreview();
        const link = document.createElement('a');
        link.download = `English_Quest_${tier}_${skill}_Certificate.png`;
        link.href = currentDataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    }

    if (btnPrint) {
      btnPrint.onclick = () => {
        refreshPreview();
        window.print();
      };
    }

    if (btnClose) {
      btnClose.onclick = () => {
        modal.style.display = 'none';
      };
    }
  }
}

// ===================================================
// 1. EXPANDED CEFR QUESTION BANK (PHASE 2 - 440 QUESTIONS)
// ===================================================
const questionBank = {
  // =================================================
  // A1: BEGINNER (20 Questions per Skill + Mandarin Hints)
  // =================================================
  A1: {
    reading: [
      { t: "text", p: "An apple is a sweet, red _____.", c: "fruit", w: "vegetable", hintZh: "蘋果是一種甜的紅色「水果」(fruit)，不是蔬菜。" },
      { t: "text", p: "I write notes with a blue _____.", c: "pen", w: "spoon", hintZh: "我們用藍色的「筆」(pen) 寫筆記，不是湯匙。" },
      { t: "text", p: "A dog has four _____ and a tail.", c: "legs", w: "wings", hintZh: "狗狗有四條「腿」(legs) 和一條尾巴，不是翅膀。" },
      { t: "text", p: "The sky is bright _____ today.", c: "blue", w: "green", hintZh: "晴朗的天空是「藍色的」(blue)。" },
      { t: "text", p: "I go to sleep in my _____.", c: "bedroom", w: "kitchen", hintZh: "我們在「臥室」(bedroom) 睡覺，不是廚房。" },
      { t: "text", p: "I ride my _____ to school.", c: "bike", w: "chair", hintZh: "我們騎「腳踏車」(bike) 上學，不是椅子。" },
      { t: "text", p: "We play music on the _____.", c: "piano", w: "shoe", hintZh: "我們用「鋼琴」(piano) 彈奏音樂。" },
      { t: "text", p: "Summer days are very _____.", c: "hot", w: "cold", hintZh: "夏天的天氣非常「炎熱」(hot)。" },
      { t: "text", p: "I buy fresh bread at the _____.", c: "bakery", w: "park", hintZh: "我們在「麵包店」(bakery) 買新鮮麵包。" },
      { t: "text", p: "I call my parents on my _____.", c: "phone", w: "plate", hintZh: "我們用「電話/手機」(phone) 打給父母。" },
      { t: "text", p: "Monkeys love to eat yellow _____.", c: "bananas", w: "socks", hintZh: "猴子喜歡吃黃色的「香蕉」(bananas)。" },
      { t: "text", p: "I wash my hands with water and _____.", c: "soap", w: "soup", hintZh: "洗手要用「肥皂」(soap)，soup 是湯。" },
      { t: "text", p: "We read stories in a _____.", c: "book", w: "clock", hintZh: "我們在「書本」(book) 裡讀故事。" },
      { t: "text", p: "A bird uses its _____ to fly high.", c: "wings", w: "wheels", hintZh: "鳥用「翅膀」(wings) 飛翔，不是輪子。" },
      { t: "text", p: "In winter, white _____ falls from the sky.", c: "snow", w: "sand", hintZh: "冬天時天上會下白色的「雪」(snow)。" },
      { t: "text", p: "My mother's brother is my _____.", c: "uncle", w: "aunt", hintZh: "媽媽的兄弟是「舅舅/叔叔」(uncle)。" },
      { t: "text", p: "I eat hot soup with a _____.", c: "spoon", w: "fork", hintZh: "喝湯要用「湯匙」(spoon)，不是叉子。" },
      { t: "text", p: "Rabbits have two long _____.", c: "ears", w: "noses", hintZh: "兔子有兩隻長長的「耳朵」(ears)。" },
      { t: "text", p: "We wear _____ on our feet.", c: "shoes", w: "gloves", hintZh: "我們在腳上穿「鞋子」(shoes)，gloves 是手套。" },
      { t: "text", p: "The sun rises in the _____.", c: "morning", w: "night", hintZh: "太陽在「早上」(morning) 升起。" }
    ],
    listening: [
      { t: "listen", audio: "I like red apples.", p: "What fruit did you hear?", c: "Apples", w: "Bananas", hintZh: "語音中提到喜歡紅色的「蘋果」(Apples)。" },
      { t: "listen", audio: "Open your blue book.", p: "What color is the book?", c: "Blue", w: "Red", hintZh: "語音中說打開你的「藍色」(Blue) 書本。" },
      { t: "listen", audio: "The cat is sleeping.", p: "What is the cat doing?", c: "Sleeping", w: "Running", hintZh: "語音中說貓咪正在「睡覺」(Sleeping)。" },
      { t: "listen", audio: "She wears a yellow hat.", p: "What color is the hat?", c: "Yellow", w: "Green", hintZh: "語音中說她戴著「黃色的」(Yellow) 帽子。" },
      { t: "listen", audio: "Welcome to my home.", p: "Where are you welcomed?", c: "Home", w: "School", hintZh: "語音中說歡迎來到我的「家」(Home)。" },
      { t: "listen", audio: "The bus is coming.", p: "What is coming?", c: "Bus", w: "Train", hintZh: "語音中說「公車」(Bus) 快來了。" },
      { t: "listen", audio: "We listen to happy music.", p: "What do they listen to?", c: "Music", w: "Rain", hintZh: "語音中說我們聽快樂的「音樂」(Music)。" },
      { t: "listen", audio: "It is very cold outside.", p: "How is the weather?", c: "Cold", w: "Hot", hintZh: "語音中說外面非常「寒冷」(Cold)。" },
      { t: "listen", audio: "I have five silver coins.", p: "How many coins?", c: "Five", w: "Two", hintZh: "語音中提到有「五枚」(Five) 銀幣。" },
      { t: "listen", audio: "Turn on the computer.", p: "What should be turned on?", c: "Computer", w: "Lamp", hintZh: "語音中說打開「電腦」(Computer)。" },
      { t: "listen", audio: "My father cooks dinner in the kitchen.", p: "Who cooks dinner?", c: "Father", w: "Sister", hintZh: "語音中說「爸爸」(Father) 在廚房煮晚餐。" },
      { t: "listen", audio: "I drink warm milk every morning.", p: "What do I drink?", c: "Milk", w: "Juice", hintZh: "語音中說每天早上喝溫「牛奶」(Milk)。" },
      { t: "listen", audio: "The little bird sings in the tree.", p: "Where is the bird?", c: "In the tree", w: "Under the bed", hintZh: "語音中說小鳥在「樹上」(In the tree) 唱歌。" },
      { t: "listen", audio: "Please sit down on the chair.", p: "Where should you sit?", c: "Chair", w: "Table", hintZh: "語音中說請坐在「椅子」(Chair) 上。" },
      { t: "listen", audio: "I brush my teeth at night.", p: "What do I brush?", c: "Teeth", w: "Shoes", hintZh: "語音中說晚上刷「牙齒」(Teeth)。" },
      { t: "listen", audio: "There are seven days in a week.", p: "How many days in a week?", c: "Seven", w: "Ten", hintZh: "語音中說一週有「七」(Seven) 天。" },
      { t: "listen", audio: "The frog jumps into the pond.", p: "What animal jumps?", c: "Frog", w: "Tiger", hintZh: "語音中說「青蛙」(Frog) 跳進池塘。" },
      { t: "listen", audio: "Put on your coat, it is windy.", p: "What should you put on?", c: "Coat", w: "Glasses", hintZh: "語音中說風很大，請穿上「外套」(Coat)。" },
      { t: "listen", audio: "My favorite subject is art.", p: "What is the favorite subject?", c: "Art", w: "Math", hintZh: "語音中說最喜歡的科目是「美術」(Art)。" },
      { t: "listen", audio: "The baby is smiling happily.", p: "What is the baby doing?", c: "Smiling", w: "Crying", hintZh: "語音中說小寶寶開心地「微笑」(Smiling)。" }
    ],
    writing: [
      { t: "write", p: "Type the English word for '麵包' (b____):", ans: ["bread"], hintZh: "「麵包」的英文拼法是 b-r-e-a-d。" },
      { t: "write", p: "Type the English word for '書本' (b___):", ans: ["book"], hintZh: "「書本」的英文拼法是 b-o-o-k。" },
      { t: "write", p: "Type the English word for '牛奶' (m___):", ans: ["milk"], hintZh: "「牛奶」的英文拼法是 m-i-l-k。" },
      { t: "write", p: "Complete the sentence: 'I drink _____ (水).'", ans: ["water"], hintZh: "「水」的英文拼法是 w-a-t-e-r。" },
      { t: "write", p: "Type the English word for '朋友' (f_____):", ans: ["friend"], hintZh: "「朋友」的英文拼法是 f-r-i-e-n-d。" },
      { t: "write", p: "Type the English word for '學校' (s_____):", ans: ["school"], hintZh: "「學校」的英文拼法是 s-c-h-o-o-l。" },
      { t: "write", p: "Type the English word for '紅色' (r__):", ans: ["red"], hintZh: "「紅色」的英文拼法是 r-e-d。" },
      { t: "write", p: "Complete the sentence: 'I see a _____ (小狗).'", ans: ["dog"], hintZh: "「狗」的英文拼法是 d-o-g。" },
      { t: "write", p: "Type the English greeting for '早安' (2 words):", ans: ["good morning"], hintZh: "「早安」的英文是 good morning。" },
      { t: "write", p: "Type the English word for '音樂' (m____):", ans: ["music"], hintZh: "「音樂」的英文拼法是 m-u-s-i-c。" },
      { t: "write", p: "Type the English word for '蘋果' (a____):", ans: ["apple"], hintZh: "「蘋果」的英文拼法是 a-p-p-l-e。" },
      { t: "write", p: "Type the English word for '貓咪' (c__):", ans: ["cat"], hintZh: "「貓」的英文拼法是 c-a-t。" },
      { t: "write", p: "Type the English word for '太陽' (s__):", ans: ["sun"], hintZh: "「太陽」的英文拼法是 s-u-n。" },
      { t: "write", p: "Type the English word for '快樂的' (h____):", ans: ["happy"], hintZh: "「快樂的」英文拼法是 h-a-p-p-y。" },
      { t: "write", p: "Type the English word for '魚' (f___):", ans: ["fish"], hintZh: "「魚」的英文拼法是 f-i-s-h。" },
      { t: "write", p: "Type the English word for '樹' (t___):", ans: ["tree"], hintZh: "「樹」的英文拼法是 t-r-e-e。" },
      { t: "write", p: "Type the English word for '床' (b__):", ans: ["bed"], hintZh: "「床」的英文拼法是 b-e-d。" },
      { t: "write", p: "Type the English word for '門' (d___):", ans: ["door"], hintZh: "「門」的英文拼法是 d-o-o-r。" },
      { t: "write", p: "Type the English word for '雞蛋' (e__):", ans: ["egg"], hintZh: "「雞蛋」的英文拼法是 e-g-g。" },
      { t: "write", p: "Type the English word for '手' (h___):", ans: ["hand"], hintZh: "「手」的英文拼法是 h-a-n-d。" }
    ],
    speaking: [
      { t: "speak", p: "What is 蘋果 in English?", ans: ["apple"], hintZh: "請對著麥克風說出「apple」。" },
      { t: "speak", p: "How do you say 謝謝 in English?", ans: ["thank you", "thanks"], hintZh: "請對著麥克風說出「thank you」或「thanks」。" },
      { t: "speak", p: "What is 貓 in English?", ans: ["cat"], hintZh: "請對著麥克風說出「cat」。" },
      { t: "speak", p: "What is 水 in English?", ans: ["water"], hintZh: "請對著麥克風說出「water」。" },
      { t: "speak", p: "How do you say 再見 in English?", ans: ["goodbye", "bye"], hintZh: "請對著麥克風說出「goodbye」或「bye」。" },
      { t: "speak", p: "What is 狗 in English?", ans: ["dog"], hintZh: "請對著麥克風說出「dog」。" },
      { t: "speak", p: "What color is grass? (Say in English)", ans: ["green"], hintZh: "草地是綠色的，請說出「green」。" },
      { t: "speak", p: "What is 書 in English?", ans: ["book"], hintZh: "請對著麥克風說出「book」。" },
      { t: "speak", p: "What is 學校 in English?", ans: ["school"], hintZh: "請對著麥克風說出「school」。" },
      { t: "speak", p: "What is 1 + 1 in English?", ans: ["two", "2"], hintZh: "1 加 1 等於 2，請說出「two」。" },
      { t: "speak", p: "What is 太陽 in English?", ans: ["sun"], hintZh: "請對著麥克風說出「sun」。" },
      { t: "speak", p: "What is 月亮 in English?", ans: ["moon"], hintZh: "請對著麥克風說出「moon」。" },
      { t: "speak", p: "How do you say 哈囉 / 你好 in English?", ans: ["hello", "hi"], hintZh: "請對著麥克風說出「hello」或「hi」。" },
      { t: "speak", p: "What is 鳥 in English?", ans: ["bird"], hintZh: "請對著麥克風說出「bird」。" },
      { t: "speak", p: "What is 牛奶 in English?", ans: ["milk"], hintZh: "請對著麥克風說出「milk」。" },
      { t: "speak", p: "What color is the sky on a sunny day?", ans: ["blue"], hintZh: "晴朗的天空是藍色的，請說出「blue」。" },
      { t: "speak", p: "What is 老師 in English?", ans: ["teacher"], hintZh: "請對著麥克風說出「teacher」。" },
      { t: "speak", p: "What is 朋友 in English?", ans: ["friend"], hintZh: "請對著麥克風說出「friend」。" },
      { t: "speak", p: "What is 香蕉 in English?", ans: ["banana"], hintZh: "請對著麥克風說出「banana」。" },
      { t: "speak", p: "What is 5 in English?", ans: ["five", "5"], hintZh: "數字 5 的英文，請說出「five」。" }
    ]
  },

  // =================================================
  // A2: ELEMENTARY (20 Questions per Skill)
  // =================================================
  A2: {
    reading: [
      { t: "text", p: "I ordered a fresh fruit _____ for lunch.", c: "salad", w: "carpet" },
      { t: "text", p: "The teacher wrote notes on the classroom _____.", c: "board", w: "pillow" },
      { t: "text", p: "Fish live in rivers and can _____ fast.", c: "swim", w: "fly" },
      { t: "text", p: "She wears a warm _____ in winter.", c: "jacket", w: "spoon" },
      { t: "text", p: "Our apartment balcony has green _____.", c: "plants", w: "engines" },
      { t: "text", p: "We waited for the train at the _____.", c: "station", w: "bedroom" },
      { t: "text", p: "He plays songs on his acoustic _____.", c: "guitar", w: "sofa" },
      { t: "text", p: "Dark clouds brought heavy _____.", c: "rain", w: "books" },
      { t: "text", p: "The cashier gave me a printed _____.", c: "receipt", w: "blanket" },
      { t: "text", p: "I type my homework on a _____.", c: "laptop", w: "cupboard" },
      { t: "text", p: "You need a _____ to borrow books from the library.", c: "card", w: "fork" },
      { t: "text", p: "The plane took off from the _____ on time.", c: "airport", w: "kitchen" },
      { t: "text", p: "Please put the cold milk back in the _____.", c: "fridge", w: "oven" },
      { t: "text", p: "He went to the _____ because he had a toothache.", c: "dentist", w: "baker" },
      { t: "text", p: "We walked across the stone _____ over the river.", c: "bridge", w: "mirror" },
      { t: "text", p: "Don't forget to bring an _____ in case it rains.", c: "umbrella", w: "envelope" },
      { t: "text", p: "She bought a stamp at the _____ office.", c: "post", w: "fire" },
      { t: "text", p: "We pitched a tent at the mountain _____.", c: "campsite", w: "supermarket" },
      { t: "text", p: "The waiter brought the _____ so we could order dinner.", c: "menu", w: "ticket" },
      { t: "text", p: "I set my alarm _____ for six thirty every morning.", c: "clock", w: "plate" }
    ],
    listening: [
      { t: "listen", audio: "We bought sweet strawberries at the supermarket.", p: "What was bought?", c: "Strawberries", w: "Pineapples" },
      { t: "listen", audio: "Hand in your homework before lunch.", p: "When is homework due?", c: "Before lunch", w: "Tonight" },
      { t: "listen", audio: "The friendly puppy ran in the park.", p: "What did the puppy do?", c: "Ran in park", w: "Slept in car" },
      { t: "listen", audio: "He bought a dark blue jacket.", p: "What color jacket?", c: "Dark blue", w: "Light green" },
      { t: "listen", audio: "We live in a quiet two-story house.", p: "What kind of home?", c: "House", w: "Hotel" },
      { t: "listen", audio: "Please show your boarding ticket at the gate.", p: "What should you show?", c: "Ticket", w: "Blanket" },
      { t: "listen", audio: "The music concert starts at seven tonight.", p: "What time does it start?", c: "Seven", w: "Nine" },
      { t: "listen", audio: "The forecast predicts rain and strong winds.", p: "What weather is predicted?", c: "Rain and wind", w: "Sunshine" },
      { t: "listen", audio: "This store offers a student discount.", p: "What does the store offer?", c: "Discount", w: "Free bicycle" },
      { t: "listen", audio: "Look at the map on your smartphone.", p: "What should you look at?", c: "Map", w: "Mirror" },
      { t: "listen", audio: "Take the elevator to the fifth floor.", p: "Which floor should you go to?", c: "Fifth floor", w: "Second floor" },
      { t: "listen", audio: "She practices badminton every Tuesday afternoon.", p: "What sport does she play?", c: "Badminton", w: "Basketball" },
      { t: "listen", audio: "The museum is closed on Mondays.", p: "When is the museum closed?", c: "Mondays", w: "Fridays" },
      { t: "listen", audio: "Please turn off your mobile phone during the movie.", p: "What should you turn off?", c: "Mobile phone", w: "Television" },
      { t: "listen", audio: "He takes the subway to work every morning.", p: "How does he go to work?", c: "By subway", w: "By boat" },
      { t: "listen", audio: "Would you like some sugar in your coffee?", p: "What is offered for the coffee?", c: "Sugar", w: "Salt" },
      { t: "listen", audio: "Our family visited the night market last weekend.", p: "Where did the family go?", c: "Night market", w: "Department store" },
      { t: "listen", audio: "Remember to lock the front door before leaving.", p: "What should you lock?", c: "Front door", w: "Kitchen window" },
      { t: "listen", audio: "The library books must be returned by Friday.", p: "When must books be returned?", c: "By Friday", w: "By Sunday" },
      { t: "listen", audio: "She baked a chocolate cake for her brother's birthday.", p: "What did she bake?", c: "Chocolate cake", w: "Apple pie" }
    ],
    writing: [
      { t: "write", p: "Type the English word for '醫生' (d_____):", ans: ["doctor"] },
      { t: "write", p: "Type the opposite of 'hot':", ans: ["cold"] },
      { t: "write", p: "Type the English word for '車站' (s______):", ans: ["station"] },
      { t: "write", p: "Type the plural form of 'child':", ans: ["children"] },
      { t: "write", p: "Type the English word for '天氣' (w______):", ans: ["weather"] },
      { t: "write", p: "Type the opposite of 'slow' (f___):", ans: ["fast", "quick"] },
      { t: "write", p: "Type the English word for '市場' (m_____):", ans: ["market"] },
      { t: "write", p: "Type the tool used to take photos (c_____):", ans: ["camera"] },
      { t: "write", p: "Type the opposite of 'expensive' (c____):", ans: ["cheap"] },
      { t: "write", p: "Type the travel document needed abroad (p_______):", ans: ["passport"] },
      { t: "write", p: "Type the English word for '圖書館' (l______):", ans: ["library"] },
      { t: "write", p: "Type the past tense of 'go' (w___):", ans: ["went"] },
      { t: "write", p: "Type the English word for '廚房' (k______):", ans: ["kitchen"] },
      { t: "write", p: "Type the opposite of 'heavy' (l____):", ans: ["light"] },
      { t: "write", p: "Type the English word for '雨傘' (u_______):", ans: ["umbrella"] },
      { t: "write", p: "Type the meal eaten in the middle of the day (l____):", ans: ["lunch"] },
      { t: "write", p: "Type the English word for '機場' (a______):", ans: ["airport"] },
      { t: "write", p: "Type the opposite of 'early' (l___):", ans: ["late"] },
      { t: "write", p: "Type the English word for '禮物' (p______ or g___):", ans: ["present", "gift"] },
      { t: "write", p: "Type the English word for '護士' (n____):", ans: ["nurse"] }
    ],
    speaking: [
      { t: "speak", p: "What is the first meal of the day?", ans: ["breakfast"] },
      { t: "speak", p: "What is 圖書館 in English?", ans: ["library"] },
      { t: "speak", p: "What pet animal says meow?", ans: ["cat"] },
      { t: "speak", p: "What color is a lemon?", ans: ["yellow"] },
      { t: "speak", p: "What is 廚房 in English?", ans: ["kitchen"] },
      { t: "speak", p: "What vehicle flies in the sky?", ans: ["airplane", "plane"] },
      { t: "speak", p: "What musical instrument has six strings?", ans: ["guitar"] },
      { t: "speak", p: "What falls from dark clouds on a rainy day?", ans: ["rain", "water"] },
      { t: "speak", p: "What is 醫生 in English?", ans: ["doctor"] },
      { t: "speak", p: "What is the opposite of easy?", ans: ["hard", "difficult"] },
      { t: "speak", p: "What month comes right after December?", ans: ["january"] },
      { t: "speak", p: "What is 超級市場 in English?", ans: ["supermarket"] },
      { t: "speak", p: "Where do you go to catch a train?", ans: ["station", "train station"] },
      { t: "speak", p: "What season comes after autumn?", ans: ["winter"] },
      { t: "speak", p: "What do you wear on your eyes to see clearly?", ans: ["glasses", "eyeglasses"] },
      { t: "speak", p: "What day comes after Friday?", ans: ["saturday"] },
      { t: "speak", p: "What is 警察 in English?", ans: ["police", "police officer", "policeman"] },
      { t: "speak", p: "What is the opposite of young?", ans: ["old"] },
      { t: "speak", p: "What room do you take a shower in?", ans: ["bathroom"] },
      { t: "speak", p: "What is 電影院 in English?", ans: ["cinema", "movie theater", "theater"] }
    ]
  },

  // =================================================
  // B1: INTERMEDIATE (20 Questions per Skill)
  // =================================================
  B1: {
    reading: [
      { t: "text", p: "We booked a beachfront room for our summer _____.", c: "vacation", w: "appliance" },
      { t: "text", p: "The chef added garlic to improve the dish's _____.", c: "flavor", w: "traffic" },
      { t: "text", p: "She sent her resume to apply for the open _____.", c: "position", w: "blanket" },
      { t: "text", p: "We watched an exciting nature _____ about oceans.", c: "documentary", w: "corridor" },
      { t: "text", p: "Sorting paper and plastic helps with _____.", c: "recycling", w: "hesitation" },
      { t: "text", p: "Check the bus _____ on your mobile app.", c: "schedule", w: "furniture" },
      { t: "text", p: "Daily running improves your overall physical _____.", c: "fitness", w: "silence" },
      { t: "text", p: "The shop sells warm clothing for the winter _____.", c: "season", w: "station" },
      { t: "text", p: "He took scenic photos with his digital _____.", c: "camera", w: "wallet" },
      { t: "text", p: "The subway makes traveling across the city very _____.", c: "convenient", w: "delicious" },
      { t: "text", p: "Passengers must fasten their _____ during takeoff.", c: "seatbelts", w: "curtains" },
      { t: "text", p: "She received a scholarship because of her high _____.", c: "grades", w: "receipts" },
      { t: "text", p: "Regularly backing up data prevents accidental file _____.", c: "loss", w: "growth" },
      { t: "text", p: "The local community center organizes charity _____.", c: "events", w: "engines" },
      { t: "text", p: "Drinking plenty of water prevents _____ in hot weather.", c: "dehydration", w: "transportation" },
      { t: "text", p: "The company launched a new advertising _____ online.", c: "campaign", w: "luggage" },
      { t: "text", p: "Please lower your _____ when speaking inside the library.", c: "voice", w: "pocket" },
      { t: "text", p: "Solar panels convert sunlight directly into _____.", c: "electricity", w: "concrete" },
      { t: "text", p: "He apologized for the _____ caused by the train delay.", c: "inconvenience", w: "ingredient" },
      { t: "text", p: "Learning a foreign language requires daily _____.", c: "practice", w: "scenery" }
    ],
    listening: [
      { t: "listen", audio: "Please check your flight reservation online.", p: "What should you check?", c: "Flight reservation", w: "Hotel kitchen" },
      { t: "listen", audio: "Add olive oil and fresh garlic to the pan.", p: "What ingredients were mentioned?", c: "Olive oil and garlic", w: "Butter and sugar" },
      { t: "listen", audio: "The team scheduled a meeting about the project.", p: "Why was a meeting scheduled?", c: "About the project", w: "For a birthday party" },
      { t: "listen", audio: "The film focuses on protecting wild animals.", p: "What is the film about?", c: "Protecting animals", w: "Modern skyscrapers" },
      { t: "listen", audio: "Using reusable cups reduces plastic waste.", p: "What reduces waste?", c: "Reusable cups", w: "Paper napkins" },
      { t: "listen", audio: "Save your files on cloud storage for safety.", p: "Where should files be saved?", c: "Cloud storage", w: "Paper folders" },
      { t: "listen", audio: "Stretching after running prevents muscle stiffness.", p: "What does stretching prevent?", c: "Muscle stiffness", w: "Headaches" },
      { t: "listen", audio: "Keep your receipt in case you want an exchange.", p: "Why keep the receipt?", c: "For an exchange", w: "For free parking" },
      { t: "listen", audio: "The art gallery opens a modern painting show today.", p: "What opens today?", c: "Painting show", w: "Book store" },
      { t: "listen", audio: "The express train goes directly to the airport.", p: "Where does the train go?", c: "To the airport", w: "To the beach" },
      { t: "listen", audio: "Applicants should submit their resumes before Friday.", p: "What should applicants submit?", c: "Resumes", w: "Medical records" },
      { t: "listen", audio: "Heavy traffic on the highway delayed our arrival.", p: "What caused the delay?", c: "Heavy traffic", w: "Engine trouble" },
      { t: "listen", audio: "The hotel offers complimentary breakfast for all guests.", p: "What is included for guests?", c: "Free breakfast", w: "Airport shuttle" },
      { t: "listen", audio: "Please update your account password every three months.", p: "What should be updated?", c: "Account password", w: "Home address" },
      { t: "listen", audio: "Volunteers planted fifty trees along the riverbank.", p: "What did the volunteers do?", c: "Planted trees", w: "Built a bridge" },
      { t: "listen", audio: "The seminar on digital marketing will be held in Room 302.", p: "What is the seminar about?", c: "Digital marketing", w: "Financial accounting" },
      { t: "listen", audio: "Remember to warm up before lifting heavy weights.", p: "What should you do first?", c: "Warm up", w: "Eat dinner" },
      { t: "listen", audio: "Customers can track their delivery status using the app.", p: "What can customers track?", c: "Delivery status", w: "Weather forecast" },
      { t: "listen", audio: "The outdoor concert was postponed due to a thunderstorm.", p: "Why was the concert postponed?", c: "Thunderstorm", w: "Power outage" },
      { t: "listen", audio: "She prefers working remotely from a quiet coffee shop.", p: "Where does she like to work?", c: "Coffee shop", w: "Public library" }
    ],
    writing: [
      { t: "write", p: "Type the noun for a person who reports news (j_________):", ans: ["journalist"] },
      { t: "write", p: "Type the opposite of 'increase' (d_______):", ans: ["decrease"] },
      { t: "write", p: "Type the word for a planned travel route or schedule (i________):", ans: ["itinerary"] },
      { t: "write", p: "Type the English word for '環境保護/保育' (c___________):", ans: ["conservation"] },
      { t: "write", p: "Type the noun form of the verb 'decide':", ans: ["decision"] },
      { t: "write", p: "Type the word for instructions used to cook a meal (r_____):", ans: ["recipe"] },
      { t: "write", p: "Type the monthly money earned from a job (s_____):", ans: ["salary"] },
      { t: "write", p: "Type the opposite of 'lend' (b_____):", ans: ["borrow"] },
      { t: "write", p: "Type the English word for '同事' (c________):", ans: ["colleague", "coworker"] },
      { t: "write", p: "Type the word for an art showroom (g______):", ans: ["gallery"] },
      { t: "write", p: "Type the noun form of 'inform' (i__________):", ans: ["information"] },
      { t: "write", p: "Type the word for someone who works without pay to help others (v________):", ans: ["volunteer"] },
      { t: "write", p: "Type the word for bags and suitcases taken on a trip (l______):", ans: ["luggage", "baggage"] },
      { t: "write", p: "Type the noun form of 'educate' (e________):", ans: ["education"] },
      { t: "write", p: "Type the word for a person traveling on a bus, train, or plane (p________):", ans: ["passenger"] },
      { t: "write", p: "Type the opposite of 'artificial' (n______):", ans: ["natural"] },
      { t: "write", p: "Type the word for an arrangement to meet or visit a doctor (a__________):", ans: ["appointment"] },
      { t: "write", p: "Type the noun form of 'improve' (i__________):", ans: ["improvement"] },
      { t: "write", p: "Type the word for the air, water, and land around us (e__________):", ans: ["environment"] },
      { t: "write", p: "Type the adjective meaning 'able to be trusted or depended on' (r_______):", ans: ["reliable"] }
    ],
    speaking: [
      { t: "speak", p: "What official booklet is used for international travel?", ans: ["passport"] },
      { t: "speak", p: "What do you call a professional kitchen cook?", ans: ["chef", "cook"] },
      { t: "speak", p: "A formal conversation when applying for a job is an?", ans: ["interview"] },
      { t: "speak", p: "What genre describes a funny movie?", ans: ["comedy"] },
      { t: "speak", p: "What outdoor activity involves walking on mountain trails?", ans: ["hiking"] },
      { t: "speak", p: "What energy comes directly from the sun?", ans: ["solar", "solar power", "solar energy"] },
      { t: "speak", p: "What is a person who competes in sports called?", ans: ["athlete"] },
      { t: "speak", p: "What is a 42-kilometer long-distance running race called?", ans: ["marathon"] },
      { t: "speak", p: "Where are historical paintings and artifacts displayed?", ans: ["museum", "gallery"] },
      { t: "speak", p: "Daily travel between home and work is called a?", ans: ["commute"] },
      { t: "speak", p: "What document summarizes your work experience and skills?", ans: ["resume", "cv"] },
      { t: "speak", p: "What do you call a price reduction in a store?", ans: ["discount", "sale"] },
      { t: "speak", p: "What is the processing of used materials into new products called?", ans: ["recycling", "recycle"] },
      { t: "speak", p: "What do you call a university student who has not graduated yet?", ans: ["undergraduate"] },
      { t: "speak", p: "What instrument measures body temperature?", ans: ["thermometer"] },
      { t: "speak", p: "What do we call a movie based on real-life facts and history?", ans: ["documentary"] },
      { t: "speak", p: "What word means a final date or time by which a task must be finished?", ans: ["deadline"] },
      { t: "speak", p: "What do you call the money returned when you give back an item?", ans: ["refund"] },
      { t: "speak", p: "What is a person who starts their own business called?", ans: ["entrepreneur", "founder"] },
      { t: "speak", p: "What word describes food grown without synthetic chemicals?", ans: ["organic"] }
    ]
  },

  // =================================================
  // B2: UPPER-INTERMEDIATE (20 Questions per Skill)
  // =================================================
  B2: {
    reading: [
      { t: "text", p: "Our vacation _____ includes museum tours and a boat trip.", c: "itinerary", w: "hesitation" },
      { t: "text", p: "The restaurant is famous for its delicious _____ traditions.", c: "culinary", w: "mechanical" },
      { t: "text", p: "Good _____ between coworkers helped finish the project early.", c: "collaboration", w: "negligence" },
      { t: "text", p: "The indie movie was praised for its creative visual _____.", c: "style", w: "stagnation" },
      { t: "text", p: "Planting native trees supports regional wildlife _____.", c: "conservation", w: "pollution" },
      { t: "text", p: "The mobile app has a simple and clean user _____.", c: "interface", w: "appetite" },
      { t: "text", p: "Running long distances requires patience and physical _____.", c: "endurance", w: "confusion" },
      { t: "text", p: "The brand uses organic cotton in its seasonal _____ line.", c: "apparel", w: "appliance" },
      { t: "text", p: "Reading diverse authors gives you a broader _____.", c: "perspective", w: "furniture" },
      { t: "text", p: "The rapidly growing city needs public transit _____.", c: "infrastructure", w: "recipes" },
      { t: "text", p: "Flexible working hours have boosted employee _____.", c: "productivity", w: "obscurity" },
      { t: "text", p: "The research team published their _____ in a scientific journal.", c: "findings", w: "luggage" },
      { t: "text", p: "High inflation has reduced household purchasing _____.", c: "power", w: "posture" },
      { t: "text", p: "We need a _____ solution rather than a temporary fix.", c: "sustainable", w: "superficial" },
      { t: "text", p: "The keynote speaker gave a very _____ presentation.", c: "compelling", w: "edible" },
      { t: "text", p: "Strict safety _____ are enforced inside the laboratory.", c: "protocols", w: "ornaments" },
      { t: "text", p: "Two-factor authentication helps prevent unauthorized _____.", c: "access", w: "harvest" },
      { t: "text", p: "The company diversified its suppliers to minimize supply chain _____.", c: "disruption", w: "hospitality" },
      { t: "text", p: "Regular feedback is _____ for professional growth.", c: "essential", w: "redundant" },
      { t: "text", p: "The architect incorporated natural light to reduce energy _____.", c: "consumption", w: "affection" }
    ],
    listening: [
      { t: "listen", audio: "We confirmed our weekend hotel booking online.", p: "What was confirmed?", c: "Hotel booking", w: "Flight time" },
      { t: "listen", audio: "The food reviewer loved the chocolate dessert presentation.", p: "What did the reviewer love?", c: "Dessert presentation", w: "Table decoration" },
      { t: "listen", audio: "Her hard work earned her a promotion to manager.", p: "What did she receive?", c: "Promotion", w: "Transfer" },
      { t: "listen", audio: "The documentary traces the history of popular jazz music.", p: "What music genre was covered?", c: "Jazz music", w: "Classical opera" },
      { t: "listen", audio: "Solar panels provide clean and reliable electricity.", p: "What type of power is provided?", c: "Clean electricity", w: "Coal power" },
      { t: "listen", audio: "You can change your notification settings in the menu.", p: "What can be changed?", c: "Notifications", w: "Screen size" },
      { t: "listen", audio: "Regular cardio exercises improve overall heart health.", p: "What improves heart health?", c: "Cardio exercise", w: "Extra television" },
      { t: "listen", audio: "The clothing brand launched a new autumn collection.", p: "What was launched?", c: "Autumn collection", w: "Shoe repair shop" },
      { t: "listen", audio: "The museum opened an exhibition of modern sculptures.", p: "What is exhibited?", c: "Modern sculptures", w: "Rare coins" },
      { t: "listen", audio: "The subway system added new express night trains.", p: "What was added?", c: "Express night trains", w: "Ferry boats" },
      { t: "listen", audio: "The board approved the budget for renewable energy projects.", p: "What was the budget approved for?", c: "Renewable energy", w: "Office furniture" },
      { t: "listen", audio: "Participants must register at least forty-eight hours in advance.", p: "When must participants register?", c: "48 hours in advance", w: "At the door" },
      { t: "listen", audio: "Upgrading the server significantly reduced website loading times.", p: "What was the result of the upgrade?", c: "Faster loading times", w: "Higher subscription fees" },
      { t: "listen", audio: "The panel discussed strategies for reducing urban carbon emissions.", p: "What did the panel discuss?", c: "Reducing carbon emissions", w: "Building shopping malls" },
      { t: "listen", audio: "Our quarterly revenue exceeded analysts' expectations by ten percent.", p: "How did quarterly revenue perform?", c: "Exceeded expectations", w: "Fell sharply" },
      { t: "listen", audio: "A balanced diet combined with adequate sleep strengthens immunity.", p: "What strengthens immunity?", c: "Balanced diet and sleep", w: "Skipping breakfast" },
      { t: "listen", audio: "The software update patches several critical security vulnerabilities.", p: "What does the update fix?", c: "Security vulnerabilities", w: "Battery capacity" },
      { t: "listen", audio: "Automated sorting machines have streamlined warehouse logistics.", p: "What improved warehouse logistics?", c: "Automated sorting machines", w: "Manual paperwork" },
      { t: "listen", audio: "The fellowship supports graduate students conducting field research.", p: "Who does the fellowship support?", c: "Graduate researchers", w: "High school athletes" },
      { t: "listen", audio: "Clear communication is vital when managing cross-cultural teams.", p: "What is vital for cross-cultural teams?", c: "Clear communication", w: "Strict dress codes" }
    ],
    writing: [
      { t: "write", p: "Type the noun form of 'collaborate':", ans: ["collaboration"] },
      { t: "write", p: "What does the tech acronym 'AI' stand for? (Type 2 words):", ans: ["artificial intelligence"] },
      { t: "write", p: "Type the word for the natural home of an animal or plant (h______):", ans: ["habitat"] },
      { t: "write", p: "Type the word for practices that don't harm nature (s__________):", ans: ["sustainable"] },
      { t: "write", p: "Type the noun form of 'innovate':", ans: ["innovation"] },
      { t: "write", p: "Type the job title of someone in charge of museum exhibits (c______):", ans: ["curator"] },
      { t: "write", p: "Type the word for an event that happens once a year (a_____):", ans: ["annual"] },
      { t: "write", p: "Type the noun form of 'analyze':", ans: ["analysis"] },
      { t: "write", p: "Type the opposite of 'mandatory' (v________):", ans: ["voluntary", "optional"] },
      { t: "write", p: "What does 'VIP' stand for? (Type 3 words):", ans: ["very important person"] },
      { t: "write", p: "Type the noun form of 'efficient' (e_________):", ans: ["efficiency"] },
      { t: "write", p: "Type the word for the variety of plant and animal life (b___________):", ans: ["biodiversity"] },
      { t: "write", p: "Type the adjective meaning 'able to recover quickly from difficulties' (r________):", ans: ["resilient"] },
      { t: "write", p: "Type the noun for basic physical systems of a nation like roads and power (i_____________):", ans: ["infrastructure"] },
      { t: "write", p: "Type the word for a formal poll or questionnaire (s_____):", ans: ["survey"] },
      { t: "write", p: "Type the noun form of 'consume' (c__________):", ans: ["consumption"] },
      { t: "write", p: "Type the word for a spoken or written piece of feedback or evaluation (r_____):", ans: ["review", "critique"] },
      { t: "write", p: "Type the opposite of 'temporary' (p________):", ans: ["permanent"] },
      { t: "write", p: "Type the word for a person's point of view or outlook (p__________):", ans: ["perspective"] },
      { t: "write", p: "Type the noun form of 'diverse' (d________):", ans: ["diversity"] }
    ],
    speaking: [
      { t: "speak", p: "What word describes fine cooking and cuisine?", ans: ["culinary", "gourmet"] },
      { t: "speak", p: "What is moving up to a higher position at work called?", ans: ["promotion"] },
      { t: "speak", p: "What do you call a factual movie about real events?", ans: ["documentary"] },
      { t: "speak", p: "What adjective describes clean energy from sun or wind?", ans: ["renewable", "sustainable"] },
      { t: "speak", p: "What is a pop-up alert sent by a mobile app called?", ans: ["notification"] },
      { t: "speak", p: "The ability to recover quickly from difficulties is?", ans: ["resilience"] },
      { t: "speak", p: "What word means a person's collection of clothes?", ans: ["wardrobe"] },
      { t: "speak", p: "A public display of art or objects in a gallery is an?", ans: ["exhibition", "exhibit"] },
      { t: "speak", p: "The variety of living species in an ecosystem is?", ans: ["biodiversity"] },
      { t: "speak", p: "A planned list or schedule of a journey is an?", ans: ["itinerary"] },
      { t: "speak", p: "What word means working together toward a shared goal?", ans: ["collaboration", "teamwork"] },
      { t: "speak", p: "What do we call the rise in general prices over time?", ans: ["inflation"] },
      { t: "speak", p: "What is the visual screen layout through which a user interacts with software?", ans: ["interface", "user interface"] },
      { t: "speak", p: "What word describes the physical stamina needed for a marathon?", ans: ["endurance", "stamina"] },
      { t: "speak", p: "What do you call a preliminary version or model of a product?", ans: ["prototype"] },
      { t: "speak", p: "What word refers to the basic roads, bridges, and power grids of a city?", ans: ["infrastructure"] },
      { t: "speak", p: "What do we call the total greenhouse gases produced by human activities?", ans: ["carbon footprint", "emissions"] },
      { t: "speak", p: "What is a company's recognizable symbol or design called?", ans: ["logo", "brand"] },
      { t: "speak", p: "What word means the rate of output per unit of input at work?", ans: ["productivity", "efficiency"] },
      { t: "speak", p: "What do you call an agreement where both sides make concessions?", ans: ["compromise"] }
    ]
  },

  // =================================================
  // C1: ADVANCED (15 Questions per Skill)
  // =================================================
  C1: {
    reading: [
      { t: "text", p: "The food critic appreciated the dish's balanced flavor _____.", c: "harmony", w: "stagnation" },
      { t: "text", p: "The author used subtle symbols to develop the character's _____.", c: "arc", w: "appliance" },
      { t: "text", p: "Modern architecture blends useful function with clean _____.", c: "aesthetics", w: "negligence" },
      { t: "text", p: "Transparent communication builds enduring customer _____.", c: "loyalty", w: "indifference" },
      { t: "text", p: "Wildlife corridors protect natural habitats and species _____.", c: "diversity", w: "friction" },
      { t: "text", p: "Diplomatic discussions aim to reach a mutual _____.", c: "consensus", w: "frivolity" },
      { t: "text", p: "Skilled photographers use natural lighting to add visual _____.", c: "depth", w: "hesitation" },
      { t: "text", p: "Cultural traditions are passed down to future _____.", c: "generations", w: "decorations" },
      { t: "text", p: "Good user design makes complex software intuitive to _____.", c: "navigate", w: "evaporate" },
      { t: "text", p: "Daily reflection helps maintain mental focus and _____.", c: "clarity", w: "appetite" },
      { t: "text", p: "The central bank adjusted interest rates to curb _____ pressures.", c: "inflationary", w: "culinary" },
      { t: "text", p: "Empirical evidence is required to _____ the researcher's hypothesis.", c: "substantiate", w: "fabricate" },
      { t: "text", p: "Diversifying trade partners enhances national economic _____.", c: "resilience", w: "complacency" },
      { t: "text", p: "The treaty established a multilateral _____ for resolving disputes.", c: "framework", w: "garment" },
      { t: "text", p: "Automation has triggered a fundamental _____ in manufacturing workflows.", c: "transformation", w: "hesitation" }
    ],
    listening: [
      { t: "listen", audio: "The tasting menu highlights local ingredients with seasonal pairings.", p: "What does the menu highlight?", c: "Local ingredients", w: "Packaged snacks" },
      { t: "listen", audio: "The director used non-linear storytelling to build suspense.", p: "What storytelling method was used?", c: "Non-linear", w: "Predictable" },
      { t: "listen", audio: "Green spaces and walking paths improve city living quality.", p: "What improves living quality?", c: "Green spaces and paths", w: "Bigger highways" },
      { t: "listen", audio: "Brand authenticity builds stronger consumer trust.", p: "What builds trust?", c: "Brand authenticity", w: "Aggressive pop-ups" },
      { t: "listen", audio: "Marine reserves helped restore coral reef ecosystems.", p: "What helped coral reefs?", c: "Marine reserves", w: "Commercial trawling" },
      { t: "listen", audio: "The business summit ended with a positive partnership agreement.", p: "How did the summit end?", c: "Partnership agreement", w: "Trade dispute" },
      { t: "listen", audio: "The photo exhibition celebrated the beauty of natural light.", p: "What was celebrated?", c: "Natural light", w: "Digital filters" },
      { t: "listen", audio: "Oral storytelling preserves ancient cultural heritage.", p: "What preserves cultural heritage?", c: "Oral storytelling", w: "Accounting ledgers" },
      { t: "listen", audio: "Cloud sync allows team members to collaborate in real time.", p: "What does cloud sync enable?", c: "Real-time collaboration", w: "Hardware repair" },
      { t: "listen", audio: "Balancing work and rest prevents occupational burnout.", p: "What prevents burnout?", c: "Work-life balance", w: "Working overtime" },
      { t: "listen", audio: "Cross-disciplinary research fosters innovative solutions to climate challenges.", p: "What fosters innovative climate solutions?", c: "Cross-disciplinary research", w: "Isolated departments" },
      { t: "listen", audio: "Fiscal incentives encouraged firms to invest in domestic semiconductor fabrication.", p: "What encouraged domestic investment?", c: "Fiscal incentives", w: "Import quotas" },
      { t: "listen", audio: "The longitudinal study tracked career mobility over two decades.", p: "What did the study track?", c: "Career mobility", w: "Seasonal weather" },
      { t: "listen", audio: "Algorithmic transparency is essential for ethical artificial intelligence deployment.", p: "What is essential for ethical AI?", c: "Algorithmic transparency", w: "Proprietary hardware" },
      { t: "listen", audio: "Decentralized energy grids reduce vulnerability to regional blackouts.", p: "What do decentralized grids reduce?", c: "Blackout vulnerability", w: "Solar panel efficiency" }
    ],
    writing: [
      { t: "write", p: "What does 'CEO' stand for? (Type 3 words):", ans: ["chief executive officer"] },
      { t: "write", p: "Type the word meaning 'a state of balance and stability' (e__________):", ans: ["equilibrium"] },
      { t: "write", p: "Type the word for 'the quality of being genuine and real' (a___________):", ans: ["authenticity"] },
      { t: "write", p: "Type the adjective for things happening at the exact same time (s___________):", ans: ["simultaneous"] },
      { t: "write", p: "Type the noun for the artistic appreciation of beauty (a_________):", ans: ["aesthetics", "aesthetic"] },
      { t: "write", p: "What does 'DIY' stand for? (Type 3 words):", ans: ["do it yourself"] },
      { t: "write", p: "Type the word for a biological community of interacting organisms (e________):", ans: ["ecosystem"] },
      { t: "write", p: "Type the noun form of 'pragmatic' (p_________):", ans: ["pragmatism"] },
      { t: "write", p: "Type the word for a subtle difference in meaning or expression (n_____):", ans: ["nuance"] },
      { t: "write", p: "Type the term for a sequence of processes in a job (w_______):", ans: ["workflow"] },
      { t: "write", p: "Type the word for general agreement among a group (c________):", ans: ["consensus"] },
      { t: "write", p: "Type the noun for traditions and artifacts inherited from past generations (h_______):", ans: ["heritage"] },
      { t: "write", p: "Type the adjective meaning 'based on observation or experiment rather than theory' (e________):", ans: ["empirical"] },
      { t: "write", p: "Type the noun meaning 'the ability to understand and share the feelings of another' (e______):", ans: ["empathy"] },
      { t: "write", p: "Type the word for a proposed explanation made as a starting point for investigation (h_________):", ans: ["hypothesis"] }
    ],
    speaking: [
      { t: "speak", p: "What word refers to the art and science of fine food and eating?", ans: ["gastronomy"] },
      { t: "speak", p: "What word describes the philosophical appreciation of beauty and art?", ans: ["aesthetics", "aesthetic"] },
      { t: "speak", p: "Creating a distinct, recognized company identity is called?", ans: ["branding"] },
      { t: "speak", p: "A general agreement reached by a whole group is a?", ans: ["consensus"] },
      { t: "speak", p: "The visual arrangement of elements inside a photograph or painting is?", ans: ["composition"] },
      { t: "speak", p: "Cultural traditions and monuments inherited from the past form our?", ans: ["heritage"] },
      { t: "speak", p: "The point where human users interact with a computer system is an?", ans: ["interface"] },
      { t: "speak", p: "Being calmly and consciously present in the moment is called?", ans: ["mindfulness"] },
      { t: "speak", p: "A narrative with a hidden moral or political meaning is an?", ans: ["allegory"] },
      { t: "speak", p: "A state of physical or economic balance between opposing forces is?", ans: ["equilibrium"] },
      { t: "speak", p: "What word describes a testable scientific supposition or explanation?", ans: ["hypothesis"] },
      { t: "speak", p: "What noun refers to subtle shades of meaning or expression?", ans: ["nuance"] },
      { t: "speak", p: "What adjective describes a practical, realistic approach to problems?", ans: ["pragmatic"] },
      { t: "speak", p: "What term describes severe physical and mental exhaustion from overwork?", ans: ["burnout"] },
      { t: "speak", p: "What word means the legal right of self-government or independence?", ans: ["autonomy", "sovereignty"] }
    ]
  },

  // =================================================
  // C2: MASTERY (15 Questions per Skill)
  // =================================================
  C2: {
    reading: [
      { t: "text", p: "The food connoisseur demonstrated a remarkably refined sensory _____.", c: "palate", w: "stagnation" },
      { t: "text", p: "The classic novel serves as a compelling _____ on human ambition.", c: "allegory", w: "appliance" },
      { t: "text", p: "The theatre's limestone _____ showcases classical architectural beauty.", c: "facade", w: "hesitation" },
      { t: "text", p: "Subtle store design choices quietly influence consumer _____.", c: "behavior", w: "appliances" },
      { t: "text", p: "Protected ancient forests shelter diverse endemic plant _____.", c: "species", w: "furnishings" },
      { t: "text", p: "Experienced ambassadors handle delicate negotiations with great _____.", c: "tact", w: "frivolity" },
      { t: "text", p: "Baroque painters used deep shadows to create dramatic visual _____.", c: "chiaroscuro", w: "stagnation" },
      { t: "text", p: "The excavation uncovered pottery relics from ancient _____.", c: "antiquity", w: "decorations" },
      { t: "text", p: "Modern econometric models forecast trade flows with remarkable _____.", c: "precision", w: "hesitation" },
      { t: "text", p: "Achieving inner serenity requires honest self-_____.", c: "introspection", w: "indifference" },
      { t: "text", p: "Smartphones have become virtually _____ in contemporary urban life.", c: "ubiquitous", w: "obsolete" },
      { t: "text", p: "The policy shift acted as a _____ for institutional reform.", c: "catalyst", w: "detriment" },
      { t: "text", p: "Her speech was praised for its lucidity and rhetorical _____.", c: "eloquence", w: "redundancy" },
      { t: "text", p: "Asymmetric dependencies can be leveraged as instruments of economic _____.", c: "coercion", w: "benevolence" },
      { t: "text", p: "Despite the crisis, the chairwoman maintained admirable _____.", c: "equanimity", w: "volatility" }
    ],
    listening: [
      { t: "listen", audio: "The pastry chef balanced tart lemon cream with smooth textures.", p: "What did the chef balance?", c: "Lemon cream and smooth textures", w: "Salty crusts and herbs" },
      { t: "listen", audio: "Critics praised the author's rich use of metaphors and imagery.", p: "What did critics praise?", c: "Metaphors and imagery", w: "Minimalist punctuation" },
      { t: "listen", audio: "The building restoration blended historic stone with modern glass.", p: "What materials were blended?", c: "Stone and glass", w: "Timber and plastic" },
      { t: "listen", audio: "Advertising campaigns use psychological insights to connect with audiences.", p: "What is used in the campaigns?", c: "Psychological insights", w: "Clearance rebates" },
      { t: "listen", audio: "Protecting wetlands helps sustain healthy migratory bird populations.", p: "What does protecting wetlands do?", c: "Sustains bird populations", w: "Expands industrial zones" },
      { t: "listen", audio: "International diplomacy requires patience and careful communication.", p: "What does diplomacy require?", c: "Patience and communication", w: "Unilateral tariffs" },
      { t: "listen", audio: "The photo gallery captured the ephemeral colors of dawn light.", p: "What did the gallery capture?", c: "Dawn light colors", w: "Rush hour traffic" },
      { t: "listen", audio: "Archival research helps reconstruct ancient community traditions.", p: "What does the research reconstruct?", c: "Community traditions", w: "Corporate tax rates" },
      { t: "listen", audio: "New software algorithms accelerate real-time 3D graphics rendering.", p: "What is accelerated by the algorithms?", c: "3D graphics rendering", w: "Disk formatting" },
      { t: "listen", audio: "Developing personal resilience helps professionals navigate career ambiguity.", p: "What helps handle career ambiguity?", c: "Personal resilience", w: "Rigid hierarchies" },
      { t: "listen", audio: "The monograph examines how supply chain concentration creates strategic vulnerabilities.", p: "What creates strategic vulnerabilities?", c: "Supply chain concentration", w: "Surplus inventory" },
      { t: "listen", audio: "Planned obsolescence accelerates electronic waste accumulation globally.", p: "What accelerates electronic waste?", c: "Planned obsolescence", w: "Modular repairability" },
      { t: "listen", audio: "Interdisciplinary synthesis bridges the divide between humanities and natural sciences.", p: "What bridges the academic divide?", c: "Interdisciplinary synthesis", w: "Standardized testing" },
      { t: "listen", audio: "The conductor's nuanced interpretation brought fresh vitality to the symphony.", p: "What revitalized the symphony?", c: "Nuanced interpretation", w: "Electronic amplification" },
      { t: "listen", audio: "Epistemological debates center on the nature and scope of human knowledge.", p: "What do epistemological debates examine?", c: "Nature of knowledge", w: "Monetary policy" }
    ],
    writing: [
      { t: "write", p: "What does the genetic acronym 'DNA' stand for? (Type 3 words):", ans: ["deoxyribonucleic acid"] },
      { t: "write", p: "Type the word for a person who deeply appreciates gourmet food (e______):", ans: ["epicure", "epicurean"] },
      { t: "write", p: "Type the philosophical study of the nature of being and existence (o_______):", ans: ["ontology"] },
      { t: "write", p: "Type the word for a substance or event that precipitates a rapid change (c_______):", ans: ["catalyst"] },
      { t: "write", p: "Type the adjective meaning 'present or found everywhere simultaneously' (u_________):", ans: ["ubiquitous"] },
      { t: "write", p: "Type the noun for 'the process of becoming outdated or no longer used' (o___________):", ans: ["obsolescence"] },
      { t: "write", p: "Type the word for a sudden, profound realization or insight (e_______):", ans: ["epiphany"] },
      { t: "write", p: "What does 'FAQ' stand for? (Type 3 words):", ans: ["frequently asked questions"] },
      { t: "write", p: "Type the word meaning the highest peak or culmination of achievement (p_______ or z_____):", ans: ["pinnacle", "zenith", "apex"] },
      { t: "write", p: "Type the noun meaning 'mental calmness and composure in a crisis' (e_________):", ans: ["equanimity"] },
      { t: "write", p: "Type the adjective meaning 'lasting for a very short time; transitory' (e________):", ans: ["ephemeral"] },
      { t: "write", p: "Type the noun for a typical example, model, or conceptual framework (p_______):", ans: ["paradigm"] },
      { t: "write", p: "Type the word for political or economic predominance of one state over others (h_______):", ans: ["hegemony"] },
      { t: "write", p: "Type the noun meaning 'the decorative front exterior of a building' (f_____):", ans: ["facade"] },
      { t: "write", p: "Type the adjective meaning 'open to more than one interpretation' (a________):", ans: ["ambiguous"] }
    ],
    speaking: [
      { t: "speak", p: "What word describes the decorative front exterior of a building?", ans: ["facade"] },
      { t: "speak", p: "What is a narrative with a deeper symbolic or moral meaning called?", ans: ["allegory"] },
      { t: "speak", p: "What word describes a person's refined sense of taste in food?", ans: ["palate"] },
      { t: "speak", p: "What word refers to the ancient past before the Middle Ages?", ans: ["antiquity"] },
      { t: "speak", p: "What is the art of conducting international relations with tact called?", ans: ["diplomacy"] },
      { t: "speak", p: "What word means a conceptual model, pattern, or framework of thought?", ans: ["paradigm"] },
      { t: "speak", p: "What word describes a state of perplexity or difficult dilemma?", ans: ["quandary", "dilemma"] },
      { t: "speak", p: "What word describes evenness of temper and composure under stress?", ans: ["equanimity", "serenity"] },
      { t: "speak", p: "What term describes the dominant influence of one state or group over others?", ans: ["hegemony"] },
      { t: "speak", p: "What word describes speeds exceeding five times the speed of sound?", ans: ["hypersonic"] },
      { t: "speak", p: "What adjective means existing or appearing everywhere at the same time?", ans: ["ubiquitous"] },
      { t: "speak", p: "What noun refers to a sudden, striking realization or insight?", ans: ["epiphany"] },
      { t: "speak", p: "What adjective describes something fleeting that lasts for a very short time?", ans: ["ephemeral", "transient"] },
      { t: "speak", p: "What word means an agent that provokes or speeds up significant change?", ans: ["catalyst"] },
      { t: "speak", p: "What word means fluent, forcible, and persuasive speaking or writing?", ans: ["eloquence"] }
    ]
  }
};

// Backwards-compatible alias for GameScene
const LevelData = questionBank;

function normalizeSpeech(text) {
  return text.toLowerCase().replace(/[.,!?]/g, "").trim();
}

// ===================================================
// 1.5 PERSISTENT QUESTION DECK MANAGER (WHOLE-PLAYTHROUGH 2-APPEARANCE CAP)
// ===================================================
if (!window.__ogPlaythroughQuestionStore) {
  window.__ogPlaythroughQuestionStore = {};
}

const QuestionDeckManager = {
  maxAppearances: 2,
  storageKey: 'og_english_playthrough_question_store_v2',
  trackers: window.__ogPlaythroughQuestionStore,
  levelOrder: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],

  getKey(level, skill) {
    return `${(level || 'A1').toUpperCase()}_${(skill || 'reading').toLowerCase()}`;
  },

  // Unbiased Fisher-Yates shuffle using crypto RNG when available
  shuffleArray(items) {
    const arr = items.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      let randInt;
      if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
        const buf = new Uint32Array(1);
        window.crypto.getRandomValues(buf);
        randInt = buf[0] % (i + 1);
      } else {
        randInt = Math.floor(Math.random() * (i + 1));
      }
      const tmp = arr[i];
      arr[i] = arr[randInt];
      arr[randInt] = tmp;
    }
    return arr;
  },

  saveState() {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.setItem(this.storageKey, JSON.stringify(this.trackers));
      }
    } catch (e) {
      // Ignore storage quota or privacy-mode errors
    }
  },

  loadState() {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        const raw = window.sessionStorage.getItem(this.storageKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object') {
            Object.keys(parsed).forEach((k) => {
              if (!this.trackers[k]) {
                this.trackers[k] = parsed[k];
              }
            });
          }
        }
      }
    } catch (e) {
      // Ignore storage errors
    }
  },

  resetTrack(level, skill) {
    this.loadState();
    const key = this.getKey(level, skill);
    delete this.trackers[key];
    this.saveState();
  },

  extractSkillArray(lvlCode, skill) {
    const lvlObj = questionBank[lvlCode];
    if (!lvlObj) return [];
    const skillLower = (skill || 'reading').toLowerCase();
    const skillTitle = skillLower.charAt(0).toUpperCase() + skillLower.slice(1);
    const skillObj = lvlObj[skillLower] || lvlObj[skillTitle] || lvlObj['reading'] || lvlObj['Reading'] || [];

    let list = [];
    if (Array.isArray(skillObj)) {
      list = skillObj;
    } else if (typeof skillObj === 'object' && skillObj !== null) {
      list = Object.values(skillObj).flat();
    }

    return list.map((q, idx) => {
      const promptKey = String(q.p || q.audio || idx).trim().toLowerCase();
      return {
        ...q,
        _qid: `${lvlCode}_${skillLower}_${idx}_${promptKey}`,
        _sourceLevel: lvlCode
      };
    });
  },

  getPrimaryPool(level, skill) {
    const targetLevel = (level || 'A1').toUpperCase();
    const pool = this.extractSkillArray(targetLevel, skill);
    if (pool.length > 0) return pool;
    const fallbackPool = this.extractSkillArray('A1', skill);
    if (fallbackPool.length > 0) return fallbackPool;
    return [{ t: "text", p: "OG English Adventure!", c: "Start", w: "Stop", _qid: "fallback_0", _sourceLevel: targetLevel }];
  },

  // Ordered adjacent-level reserve pools of the same skill, used only if all 20 primary questions
  // have already appeared twice (40 quizzes) and been permanently dropped from consideration
  getOverflowPools(level, skill) {
    const targetLevel = (level || 'A1').toUpperCase();
    const startIdx = Math.max(0, this.levelOrder.indexOf(targetLevel));
    const adjacentLevels = this.levelOrder
      .filter((lvl) => lvl !== targetLevel)
      .sort((a, b) => {
        const distA = Math.abs(this.levelOrder.indexOf(a) - startIdx);
        const distB = Math.abs(this.levelOrder.indexOf(b) - startIdx);
        return distA !== distB ? distA - distB : this.levelOrder.indexOf(a) - this.levelOrder.indexOf(b);
      });

    return adjacentLevels.map((lvl) => this.extractSkillArray(lvl, skill)).filter((arr) => arr.length > 0);
  },

  ensureTracker(level, skill) {
    this.loadState();
    const key = this.getKey(level, skill);
    if (!this.trackers[key]) {
      this.trackers[key] = {
        counts: {},
        dropped: {},
        deck: [],
        recentHistory: [],
        lastAskedId: null
      };
    } else {
      if (!this.trackers[key].counts) this.trackers[key].counts = {};
      if (!this.trackers[key].dropped) this.trackers[key].dropped = {};
      if (!Array.isArray(this.trackers[key].deck)) this.trackers[key].deck = [];
      if (!Array.isArray(this.trackers[key].recentHistory)) this.trackers[key].recentHistory = [];
    }
    return this.trackers[key];
  },

  isQuestionEligible(tracker, q) {
    if (!q || !q._qid) return false;
    if (tracker.dropped[q._qid]) return false;
    return (tracker.counts[q._qid] || 0) < this.maxAppearances;
  },

  buildAntiClusteredDeck(candidates, tracker) {
    if (candidates.length <= 1) {
      return candidates.slice();
    }

    // Half-deck cooldown window prevents questions seen in the back half of Pass 1
    // from clustering at the front half of Pass 2
    const cooldownWindowSize = Math.max(1, Math.min(10, Math.floor(candidates.length / 2)));
    const recentSlice = tracker.recentHistory.slice(-cooldownWindowSize);
    const recentSet = new Set(recentSlice);

    const cooledDown = candidates.filter((q) => !recentSet.has(q._qid));
    const recentlySeen = candidates.filter((q) => recentSet.has(q._qid));

    const shuffledCooled = this.shuffleArray(cooledDown);
    const shuffledRecent = this.shuffleArray(recentlySeen);

    // Because drawNextQuestion() pops from the end of tracker.deck:
    // place shuffledCooled at the END of the array so cooled-down questions are popped FIRST,
    // and shuffledRecent at the START of the array so recently seen questions are popped LAST.
    const combined = shuffledRecent.concat(shuffledCooled);

    // Ensure the very first question to be popped (combined[combined.length - 1]) is never lastAskedId
    if (combined.length > 1 && combined[combined.length - 1]._qid === tracker.lastAskedId) {
      const swapIdx = combined.findIndex((q) => q._qid !== tracker.lastAskedId);
      if (swapIdx >= 0) {
        const temp = combined[combined.length - 1];
        combined[combined.length - 1] = combined[swapIdx];
        combined[swapIdx] = temp;
      }
    }

    return combined;
  },

  refillDeck(level, skill) {
    const tracker = this.ensureTracker(level, skill);
    const primaryPool = this.getPrimaryPool(level, skill);

    // 1. Filter primary pool: drop any question that has reached maxAppearances (2)
    let eligiblePrimary = primaryPool.filter((q) => this.isQuestionEligible(tracker, q));

    if (eligiblePrimary.length > 0) {
      // Strictly serve all 0-seen questions (Pass 1) before any 1-seen question (Pass 2) can appear
      const minCount = Math.min(...eligiblePrimary.map((q) => tracker.counts[q._qid] || 0));
      const currentPassCandidates = eligiblePrimary.filter((q) => (tracker.counts[q._qid] || 0) === minCount);
      tracker.deck = this.buildAntiClusteredDeck(currentPassCandidates, tracker);
      this.saveState();
      return;
    }

    // 2. If all 20 primary questions have appeared 2 times and been dropped from consideration,
    // pull from adjacent-level same-skill reserve pools (also strictly capped at 2 appearances)
    const overflowPools = this.getOverflowPools(level, skill);
    for (let i = 0; i < overflowPools.length; i++) {
      const eligibleOverflow = overflowPools[i].filter((q) => this.isQuestionEligible(tracker, q));
      if (eligibleOverflow.length > 0) {
        const minCount = Math.min(...eligibleOverflow.map((q) => tracker.counts[q._qid] || 0));
        const currentPassCandidates = eligibleOverflow.filter((q) => (tracker.counts[q._qid] || 0) === minCount);
        tracker.deck = this.buildAntiClusteredDeck(currentPassCandidates, tracker);
        this.saveState();
        return;
      }
    }

    // 3. Ultimate safety fallback only if every same-skill question across all 6 CEFR tiers is exhausted (220+ quizzes)
    tracker.counts = {};
    tracker.dropped = {};
    tracker.recentHistory = [];
    tracker.deck = this.buildAntiClusteredDeck(primaryPool, tracker);
    this.saveState();
  },

  drawNextQuestion(level, skill) {
    const tracker = this.ensureTracker(level, skill);

    // Remove any already-dropped questions that might still sit in the deck
    tracker.deck = tracker.deck.filter((q) => this.isQuestionEligible(tracker, q));

    if (tracker.deck.length === 0) {
      this.refillDeck(level, skill);
    }

    while (tracker.deck.length > 0) {
      const candidate = tracker.deck.pop();
      if (this.isQuestionEligible(tracker, candidate)) {
        const newCount = (tracker.counts[candidate._qid] || 0) + 1;
        tracker.counts[candidate._qid] = newCount;
        if (newCount >= this.maxAppearances) {
          tracker.dropped[candidate._qid] = true;
        }
        tracker.lastAskedId = candidate._qid;
        tracker.recentHistory.push(candidate._qid);
        if (tracker.recentHistory.length > 40) {
          tracker.recentHistory.shift();
        }
        this.saveState();
        return { ...candidate, _failedAttempts: 0 };
      }
    }

    this.refillDeck(level, skill);
    const fallback = tracker.deck.pop();
    const fallbackCount = (tracker.counts[fallback._qid] || 0) + 1;
    tracker.counts[fallback._qid] = fallbackCount;
    if (fallbackCount >= this.maxAppearances) {
      tracker.dropped[fallback._qid] = true;
    }
    tracker.lastAskedId = fallback._qid;
    tracker.recentHistory.push(fallback._qid);
    this.saveState();
    return { ...fallback, _failedAttempts: 0 };
  }
};

// ===================================================
// 2. MENU SCENE
// ===================================================
class MenuScene extends Phaser.Scene {
  constructor() { super('MenuScene'); }

  create() {
    generateCustomTextures(this);
    this.cameras.main.setBackgroundColor('#74b9ff');
    sfx.startBGM(false);

    for (let i = 0; i < 8; i++) {
      const cx = Phaser.Math.Between(-100, 900);
      const cy = Phaser.Math.Between(20, 350);
      const cld = this.add.image(cx, cy, 'tex_cloud').setScale(Phaser.Math.FloatBetween(0.8, 1.5)).setAlpha(0.6);
      this.tweens.add({
        targets: cld, x: 950,
        duration: Phaser.Math.Between(40000, 80000),
        repeat: -1, yoyo: false
      });
    }

    this.userData = { level: null, skill: null, avatar: null, stage: 1, stars: 0 };
    this.screens = {};
    this.createTitleScreen();
    this.createLevelScreen();
    this.createSkillScreen();
    this.createAvatarScreen();
    this.showScreen('title');
  }

  showScreen(screenName) {
    Object.keys(this.screens).forEach((key) => { this.screens[key].setVisible(key === screenName); });
  }

  createTitleScreen() {
    const container = this.add.container(0, 0);
    const shadow = this.add.rectangle(405, 135, 500, 140, 0x000000, 0.2);
    const card = this.add.rectangle(400, 130, 500, 140, 0xffffff).setStrokeStyle(4, 0x00d2d3);
    const title = this.add.text(400, 110, 'OG ENGLISH', { fontSize: '44px', fontWeight: 'bold', color: '#0984e3' }).setOrigin(0.5);
    const subtitle = this.add.text(400, 165, 'Interactive Language Learning', { fontSize: '18px', color: '#636e72', fontWeight: 'bold' }).setOrigin(0.5);

    const startBtn = this.createButton(400, 280, 'Start Game / 開始遊戲', '#00b894', '#00cec9', () => { this.showScreen('level'); }, 280, 65, '18px');
    container.add([shadow, card, title, subtitle, startBtn]);
    this.screens['title'] = container;
  }

  createLevelScreen() {
    const container = this.add.container(0, 0);
    const backBtn = this.createBackButton(() => this.showScreen('title'));

    const shadow = this.add.rectangle(403, 68, 400, 50, 0x000000, 0.2);
    const bgCard = this.add.rectangle(400, 65, 400, 50, 0xffffff).setStrokeStyle(3, 0x0984e3);
    const header = this.add.text(400, 65, 'Select Your CEFR Level', { fontSize: '24px', fontWeight: 'bold', color: '#2d3436' }).setOrigin(0.5);
    container.add([backBtn, shadow, bgCard, header]);

    const levels = [
      { code: 'A1', name: 'Beginner', stages: '(15 Stages)' },
      { code: 'A2', name: 'Elementary', stages: '(15 Stages)' },
      { code: 'B1', name: 'Intermediate', stages: '(15 Stages)' },
      { code: 'B2', name: 'Upper-Intermediate', stages: '(15 Stages)' },
      { code: 'C1', name: 'Advanced', stages: '(12 Stages)' },
      { code: 'C2', name: 'Mastery', stages: '(12 Stages)' }
    ];
    levels.forEach((lvl, idx) => {
      const col = idx % 3;
      const row = Math.floor(idx / 3);
      const x = 150 + col * 250;
      const y = 175 + row * 115;
      const unlockedBadge = TierProgress.unlockedCertificates[lvl.code] ? ' 🏅' : '';
      const btn = this.createButton(
        x,
        y,
        `${lvl.code}${unlockedBadge}\n${lvl.name}\n${lvl.stages}`,
        '#6c5ce7',
        '#a29bfe',
        () => {
          this.userData.level = lvl.code;
          this.showScreen('skill');
        },
        232,
        86,
        '14px'
      );
      container.add(btn);
    });
    this.screens['level'] = container;
  }

  createSkillScreen() {
    const container = this.add.container(0, 0);
    const backBtn = this.createBackButton(() => this.showScreen('level'));

    const shadow = this.add.rectangle(403, 68, 400, 50, 0x000000, 0.2);
    const bgCard = this.add.rectangle(400, 65, 400, 50, 0xffffff).setStrokeStyle(3, 0x0984e3);
    const header = this.add.text(400, 65, 'Choose a Focus Skill', { fontSize: '24px', fontWeight: 'bold', color: '#2d3436' }).setOrigin(0.5);
    container.add([backBtn, shadow, bgCard, header]);

    const skills = [
      { en: 'Listening', zh: '聽力測驗' },
      { en: 'Speaking', zh: '口說練習' },
      { en: 'Reading', zh: '閱讀理解' },
      { en: 'Writing', zh: '寫作訓練' }
    ];
    skills.forEach((skill, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const x = 260 + col * 280;
      const y = 185 + row * 110;
      const btn = this.createButton(x, y, `${skill.en}\n${skill.zh}`, '#e17055', '#ff7675', () => {
        this.userData.skill = skill.en;
        this.showScreen('avatar');
      }, 240, 80, '18px');
      container.add(btn);
    });
    this.screens['skill'] = container;
  }

  createAvatarScreen() {
    const container = this.add.container(0, 0);
    const backBtn = this.createBackButton(() => this.showScreen('skill'));

    const shadow = this.add.rectangle(403, 68, 400, 50, 0x000000, 0.2);
    const bgCard = this.add.rectangle(400, 65, 400, 50, 0xffffff).setStrokeStyle(3, 0x0984e3);
    const header = this.add.text(400, 65, 'Choose Your Avatar', { fontSize: '24px', fontWeight: 'bold', color: '#2d3436' }).setOrigin(0.5);
    container.add([backBtn, shadow, bgCard, header]);

    const avatars = [
      { id: 'cat', key: 'tex_cat', label: 'Cat\n貓咪', color: '#f39c12' },
      { id: 'dog', key: 'tex_dog', label: 'Dog\n狗狗', color: '#d35400' },
      { id: 'stickman', key: 'tex_stickman', label: 'Stickman\n火柴人', color: '#0984e3' }
    ];
    avatars.forEach((av, idx) => {
      const x = 180 + idx * 220;
      const y = 240;
      const card = this.createAvatarCard(x, y, av, () => {
        this.userData.avatar = av.id;
        QuestionDeckManager.resetTrack(this.userData.level, this.userData.skill);
        this.scene.start('GameScene', this.userData);
      });
      container.add(card);
    });
    this.screens['avatar'] = container;
  }

  createBackButton(onClick) {
    return this.createButton(90, 45, '← Back', '#2d3436', '#636e72', onClick, 140, 40, '13px');
  }

  createButton(x, y, text, baseColor, hoverColor, onClick, width = 240, height = 60, fontSize = '16px') {
    const container = this.add.container(x, y);
    const parsedBase = Phaser.Display.Color.HexStringToColor(baseColor).color;
    const parsedHover = Phaser.Display.Color.HexStringToColor(hoverColor).color;

    const shadow = this.add.rectangle(3, 4, width, height, 0x000000, 0.25);
    const bg = this.add.rectangle(0, 0, width, height, parsedBase).setStrokeStyle(2, 0xffffff, 0.8).setInteractive({ useHandCursor: true });
    const label = this.add.text(0, 0, text, { fontSize: fontSize, color: '#ffffff', align: 'center', fontWeight: 'bold', lineSpacing: 4 }).setOrigin(0.5);

    container.add([shadow, bg, label]);

    bg.on('pointerover', () => { bg.fillColor = parsedBase === parsedHover ? parsedBase : parsedHover; this.tweens.add({ targets: container, scale: 1.05, duration: 90 }); });
    bg.on('pointerout', () => { bg.fillColor = parsedBase; this.tweens.add({ targets: container, scale: 1.0, duration: 90 }); });
    bg.on('pointerdown', () => onClick());
    return container;
  }

  createAvatarCard(x, y, avatarData, onClick) {
    const container = this.add.container(x, y);
    const shadow = this.add.rectangle(4, 5, 180, 190, 0x000000, 0.2);
    const bg = this.add.rectangle(0, 0, 180, 190, 0xffffff).setStrokeStyle(4, Phaser.Display.Color.HexStringToColor(avatarData.color).color, 1).setInteractive({ useHandCursor: true });
    const sprite = this.add.image(0, -25, avatarData.key).setScale(1.4);
    const label = this.add.text(0, 50, avatarData.label, { fontSize: '18px', color: '#2d3436', align: 'center', fontWeight: 'bold', lineSpacing: 4 }).setOrigin(0.5);

    container.add([shadow, bg, sprite, label]);
    bg.on('pointerover', () => {
      bg.fillColor = 0xf5f6fa;
      this.tweens.add({ targets: container, scale: 1.06, duration: 90 });
      this.tweens.add({ targets: sprite, y: -30, yoyo: true, duration: 200, repeat: -1 });
    });
    bg.on('pointerout', () => {
      bg.fillColor = 0xffffff;
      this.tweens.add({ targets: container, scale: 1.0, duration: 90 });
      this.tweens.killTweensOf(sprite);
      sprite.y = -25;
    });
    bg.on('pointerdown', () => onClick());
    return container;
  }
}

// ===================================================
// 3. GAME SCENE (SMARTER BOSS AI, WALL JUMP & MAPS)
// ===================================================
class GameScene extends Phaser.Scene {
  constructor() { super('GameScene'); }

  init(data) {
    this.level = data.level || 'A1';
    this.skill = data.skill || 'Reading';
    this.avatar = data.avatar || 'stickman';
    this.stage = data.stage || 1;
    this.isBossFight = data.isBossFight || false;
    this.bossType = data.bossType || 'turtle';
    this.stars = data.stars || 0;

    this.maxStages = (this.level === 'C1' || this.level === 'C2') ? 12 : 15;


    this.isQuizActive = false;
    this.levelCompleted = false;
    this.hasFireball = false;
    this.isSuper = false;

    this.superBtn = null;
    this.fireBtn = null;
    this.certHudBtn = null;
    this.modalElements = [];

    // True Back-and-Forth Wall Jump state
    this.wallJumpTimer = 0;
    this.lastWallSide = null;

    // Responsive Movement, Feet Animation & Double-Dash State
    this.walkAnimTimer = 0;
    this.walkFrame = 0;
    this.dashTimer = 0;
    this.dashDir = 1;
    this.dashGhostTimer = 0;
    this.lastTapLeftTime = 0;
    this.lastTapRightTime = 0;
    this.softPopups = [];

    this.bossHeartContainer = null;
    this.bossHearts = [];
    this.auraGraphics = null;
    this.auraTimer = 0;

    // Smarter Boss AI State Machine
    this.boss = null;
    this.bossActive = false;
    this.bossHp = this.bossType === 'turtle' ? 3 : 2;
    this.bossMaxHp = this.bossHp;
    this.bossState = 'patrol';
    this.bossStateTimer = 0;
    this.bossAttackTimer = 0;
    this.bossPincerTimer = 0;
    this.bossPincerOpen = true;
    this.bossWasAirborne = false;
    this.bossIsComplimenting = false;

    this.stageBoxCounter = 0;
    this.finishFlag = null;
    this.spawnX = 80;
    this.spawnY = 320;
  }

  buildShuffledDeck() {
    QuestionDeckManager.refillDeck(this.level, this.skill);
    const tracker = QuestionDeckManager.ensureTracker(this.level, this.skill);
    return tracker.deck;
  }

  create() {
    generateCustomTextures(this);
    this.cameras.main.setBackgroundColor('#81ecec');

    this.clouds = [];
    for (let i = 0; i < 20; i++) {
      const cx = Phaser.Math.Between(0, 3800);
      const cy = Phaser.Math.Between(20, 250);
      const scale = Phaser.Math.FloatBetween(0.6, 1.2);
      const cloud = this.add.image(cx, cy, 'tex_cloud').setScale(scale).setScrollFactor(scale * 0.3);
      this.clouds.push(cloud);
    }

    this.platforms = this.physics.add.staticGroup();
    this.crates = this.physics.add.staticGroup();
    this.traps = this.physics.add.staticGroup();
    this.movingPlats = this.physics.add.group({ allowGravity: false, immovable: true });
    this.qBlocks = this.physics.add.staticGroup();
    this.redBlocks = this.physics.add.staticGroup();
    this.gateWalls = this.physics.add.staticGroup();
    this.crabs = this.physics.add.group();
    this.crabBounds = this.physics.add.staticGroup();
    this.hoops = this.physics.add.staticGroup();
    this.tankZones = this.physics.add.staticGroup();
    this.bossProjectiles = this.physics.add.group({ allowGravity: false });

    sfx.startBGM(this.isBossFight);

    if (this.isBossFight) {
      this.buildDedicatedBossArena();
    } else {
      this.buildStageLayout();
    }

    this.player = this.physics.add.sprite(this.spawnX, this.spawnY, `tex_${this.avatar}`);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(1.15);
    this.player.body.setSize(30, 48);
    this.player.body.setOffset(9, 8);

    this.auraGraphics = this.add.graphics({ x: 0, y: 0 }).setDepth(150);

    this.setupCollisions();

    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    this.createFixedUI();
    this.checkSuperButton();

    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      shift: Phaser.Input.Keyboard.KeyCodes.SHIFT
    });

    // Create walking animations for each avatar
    ['stickman', 'cat', 'dog'].forEach((av) => {
      const animKey = `walk_${av}`;
      if (!this.anims.exists(animKey)) {
        this.anims.create({
          key: animKey,
          frames: [
            { key: `tex_${av}_walk1` },
            { key: `tex_${av}` },
            { key: `tex_${av}_walk2` },
            { key: `tex_${av}` }
          ],
          frameRate: 12,
          repeat: -1
        });
      }
    });
  }

  getQuestion() {
    return QuestionDeckManager.drawNextQuestion(this.level, this.skill);
  }

  buildDedicatedBossArena() {
    const addGround = (x, w) => {
      const g = this.add.tileSprite(x + w / 2, 425, w, 50, 'tex_ground');
      this.physics.add.existing(g, true);
      this.platforms.add(g);
      return x + w;
    };
    addGround(0, 800);

    for (let y = 380; y >= 20; y -= 40) {
      this.add.image(20, y, 'tex_crate');
      this.add.image(780, y, 'tex_crate');
    }

    const leftWall = this.add.rectangle(20, 200, 40, 400, 0x000000, 0);
    this.physics.add.existing(leftWall, true);
    this.platforms.add(leftWall);

    const rightWall = this.add.rectangle(780, 200, 40, 400, 0x000000, 0);
    this.physics.add.existing(rightWall, true);
    this.platforms.add(rightWall);

const addElevatedCatwalk = (x, y, w) => {
      const p = this.add.tileSprite(x + w / 2, y, w, 24, 'tex_catwalk');
      this.physics.add.existing(p, true);
      this.platforms.add(p);
      return p;
    };
    addElevatedCatwalk(140, 290, 180);
    addElevatedCatwalk(480, 180, 220);

    if (this.bossType === 'crab') {
      // Uses custom sharp anatomical boss texture
      this.boss = this.physics.add.sprite(620, 330, 'tex_boss_crab');
      this.boss.setScale(1.0);
      this.boss.body.setSize(118, 66).setOffset(26, 28);
      this.bossHp = 2;
      this.bossMaxHp = 2;
    } else if (this.bossType === 'snake') {
      this.boss = this.physics.add.sprite(620, 335, 'tex_snake');
      this.boss.setScale(1.4);
      this.boss.body.setSize(110, 60).setOffset(15, 15);
      this.bossHp = 2;
      this.bossMaxHp = 2;
    } else {
      this.boss = this.physics.add.sprite(620, 340, 'tex_turtle');
      this.boss.setScale(1.35);
      this.boss.body.setSize(48, 56).setOffset(8, 6);
      this.bossHp = 3;
      this.bossMaxHp = 3;
    }

    this.boss.setCollideWorldBounds(true);
    this.boss.setBounce(0.05);
    this.boss.qData = null;
    this.boss.arenaLeft = 75;
    this.boss.arenaRight = 725;
    this.bossActive = true;
    this.bossState = 'patrol';
    this.bossStateTimer = 0;

    this.createBossHeartUI();
    this.updateBossHeartUI();

    this.spawnX = 80;
    this.spawnY = 320;

    const totalLevelWidth = 800;
    this.physics.world.setBounds(0, 0, totalLevelWidth, 600);
    this.physics.world.setBoundsCollision(true, true, true, false);
    this.cameras.main.setBounds(0, 0, totalLevelWidth, 450);
  }

  buildStageLayout() {
    this.stageBoxCounter = 0;
    

    const addGround = (x, w) => {
      const g = this.add.tileSprite(x + w / 2, 425, w, 50, 'tex_ground');
      this.physics.add.existing(g, true);
      this.platforms.add(g);
      return x + w;
    };

    const addTrap = (x, w) => {
      const t = this.add.sprite(x + w / 2, 430, 'tex_trap');
      t.displayWidth = w;
      this.physics.add.existing(t, true);
      this.traps.add(t);
      return x + w;
    };

    const addElevatedCatwalk = (x, y, w) => {
      const p = this.add.tileSprite(x + w / 2, y, w, 24, 'tex_catwalk');
      this.physics.add.existing(p, true);
      this.platforms.add(p);
      return p;
    };

    const addBlock = (x, y, isRed = false) => {
      this.stageBoxCounter++;
      const b = isRed ? this.redBlocks.create(x, y, 'tex_redblock') : this.qBlocks.create(x, y, 'tex_qblock');
      b.qData = null;
      b.boxId = this.stageBoxCounter;
      b.label = this.add.text(x, y, '?', { fontSize: '24px', fontWeight: 'bold', color: '#ffffff' }).setOrigin(0.5);
      b.isSolved = false;
      return b;
    };

    const addCrab = (x, y, wallX) => {
      const c = this.crabs.create(x, y, 'tex_crab');
      c.body.setSize(34, 24).setOffset(3, 6);
      c.setVelocityX(-60);
      c.setBounceX(1);
      c.qData = null;

      this.crabBounds.create(x - 120, y, 'tex_crate').setVisible(false);
      this.crabBounds.create(wallX - 30, y, 'tex_crate').setVisible(false);

      const gate = this.gateWalls.create(wallX, 200, 'tex_gate_wall');
      gate.refreshBody();
      c.linkedGate = gate;
      return c;
    };

    const addTankAndHoop = (x, tankY = 345, landingWidth = 520) => {
      this.add.image(x + 70, tankY, 'tex_tank').setOrigin(0, 0);

      const tankZone = this.add.rectangle(x + 120, tankY + 35, 95, 55, 0x000000, 0);
      this.physics.add.existing(tankZone, true);
      this.tankZones.add(tankZone);

      const hoop = this.hoops.create(x + 360, 220, 'tex_hoop');
      hoop.qData = null;
      hoop.passed = false;

      const landingStartX = x + 600;
      return addGround(landingStartX, landingWidth);
    };

    const addWallJumpShaft = (x) => {
      // Left wall column: y = 300 down to 100 (seamless vertical collider)
      for (let y = 300; y >= 100; y -= 40) {
        const c = this.crates.create(x, y, 'tex_crate');
        c.refreshBody();
        if (y > 100) c.body.checkCollision.up = false;
        if (y < 300) c.body.checkCollision.down = false;
      }
      // Right wall column: y = 380 up to 140 (top surface at y = 120, flush with catwalk!)
      for (let y = 380; y >= 140; y -= 40) {
        const c = this.crates.create(x + 180, y, 'tex_crate');
        c.refreshBody();
        if (y > 140) c.body.checkCollision.up = false;
        if (y < 380) c.body.checkCollision.down = false;
      }
      // Catwalk top surface sits at y = 120 (center y = 132, height = 24), flush with the right crate column
      addElevatedCatwalk(x + 160, 132, 470);
      addBlock(x + 350, 32);
    };

    const addSoftPopup = (triggerX, y, titleText, subText) => {
      const container = this.add.container(triggerX, y).setDepth(180).setAlpha(0);
      const t1 = this.add.text(0, -13, titleText, {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#f1c40f',
        align: 'center',
        wordWrap: { width: 350 }
      }).setOrigin(0.5);
      const t2 = this.add.text(0, 12, subText, {
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#ffffff',
        align: 'center',
        wordWrap: { width: 350 }
      }).setOrigin(0.5);

      const boxWidth = Math.max(360, Math.ceil(Math.max(t1.width, t2.width)) + 44);
      const boxHeight = Math.max(74, Math.ceil(t1.height + t2.height) + 32);

      const shadow = this.add.rectangle(4, 5, boxWidth, boxHeight, 0x000000, 0.28);
      const bg = this.add.rectangle(0, 0, boxWidth, boxHeight, 0x1e272e, 0.94).setStrokeStyle(2.5, 0x00d2d3, 0.98);
      const pointer = this.add.triangle(0, boxHeight / 2 + 5, -9, 0, 9, 0, 0, 11, 0x00d2d3, 0.98);

      container.add([shadow, bg, pointer, t1, t2]);

      this.tweens.add({
        targets: container,
        y: y - 6,
        duration: 1100,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
      });

      this.softPopups.push({ container, triggerX, shown: false });
    };

    let cx = 0;

    if (this.stage === 1) {
      // Level 1 keeps its comfortable starting space + soft pop-up hints along the way
      addSoftPopup(
        195,
        245,
        '🏃 Move & Double-Dash!',
        'Use ◀ ▶ or A / D  •  Double-tap or SHIFT to Dash'
      );
      addSoftPopup(
        615,
        180,
        '⬆️ Jump & Hit [?] Blocks!',
        'Press ▲ or W to jump over crates & unlock gates'
      );
      addSoftPopup(
        1130,
        180,
        '⚡ Tip: Collect 3 Stars!',
        'Solve [?] blocks to earn ⭐ Stars & Super Flight'
      );

      cx = addGround(cx, 450);
      this.crates.create(cx + 60, 380, 'tex_crate').refreshBody();
      this.crates.create(cx + 60, 340, 'tex_crate').refreshBody();
      const b1 = addBlock(cx + 180, 260);
      const g1 = this.gateWalls.create(cx + 320, 200, 'tex_gate_wall');
      g1.refreshBody();
      b1.linkedGate = g1;
      cx = addGround(cx, 450);

      this.crates.create(cx + 80, 380, 'tex_crate').refreshBody();
      const b2 = addBlock(cx + 260, 260);
      const g2 = this.gateWalls.create(cx + 400, 200, 'tex_gate_wall');
      g2.refreshBody();
      b2.linkedGate = g2;
      cx = addGround(cx, 500);
      cx = addGround(cx, 400);
    }
    else if (this.stage === 2) {
      // Starts right away with stepping crates & an overhead question block
      cx = addGround(cx, 170);
      this.crates.create(cx - 20, 380, 'tex_crate').refreshBody();
      this.crates.create(cx + 35, 380, 'tex_crate').refreshBody();
      this.crates.create(cx + 35, 340, 'tex_crate').refreshBody();
      const b1 = addBlock(cx + 135, 255);
      const g1 = this.gateWalls.create(cx + 260, 200, 'tex_gate_wall');
      g1.refreshBody();
      b1.linkedGate = g1;
      cx = addGround(cx, 380);

      addCrab(cx + 150, 380, cx + 360);
      cx = addGround(cx, 500);

      this.crates.create(cx + 60, 380, 'tex_crate').refreshBody();
      addCrab(cx + 200, 380, cx + 420);
      cx = addGround(cx, 550);
      cx = addGround(cx, 400);
    }
    else if (this.stage === 3) {
      // Immediate spike hazard & stepping crate right out of spawn
      cx = addGround(cx, 175);
      this.crates.create(cx - 25, 380, 'tex_crate').refreshBody();
      cx = addTrap(cx, 150);
      cx = addGround(cx, 320);

      addCrab(cx + 140, 380, cx + 320);
      cx = addGround(cx, 450);

      cx = addTrap(cx, 180);
      this.crates.create(cx - 90, 360, 'tex_crate').refreshBody();
      cx = addGround(cx, 350);

      const b1 = addBlock(cx + 160, 260);
      const g1 = this.gateWalls.create(cx + 300, 200, 'tex_gate_wall');
      g1.refreshBody();
      b1.linkedGate = g1;
      cx = addGround(cx, 450);
      cx = addGround(cx, 400);
    }
    else if (this.stage === 4) {
      // Moving platform & stepping crate begin immediately after spawn
      cx = addGround(cx, 175);
      this.crates.create(cx - 25, 380, 'tex_crate').refreshBody();

      const p1 = this.add.sprite(cx + 95, 360, 'tex_plat');
      this.movingPlats.add(p1);
      this.tweens.add({ targets: p1, x: p1.x + 130, duration: 1850, yoyo: true, repeat: -1 });
      cx += 285;
      cx = addGround(cx, 340);

      addCrab(cx + 150, 380, cx + 340);
      cx = addGround(cx, 450);

      const p2 = this.add.sprite(cx + 110, 355, 'tex_plat');
      this.movingPlats.add(p2);
      this.tweens.add({ targets: p2, x: p2.x + 140, duration: 2200, yoyo: true, repeat: -1 });
      cx += 320;
      cx = addGround(cx, 350);

      const b1 = addBlock(cx + 150, 260);
      const g1 = this.gateWalls.create(cx + 300, 200, 'tex_gate_wall');
      g1.refreshBody();
      b1.linkedGate = g1;
      cx = addGround(cx, 450);
      cx = addGround(cx, 400);
    }
    else if (this.stage === 5) {
      // Immediate crate step up to an elevated catwalk with red power block & crab
      cx = addGround(cx, 165);
      this.crates.create(cx - 15, 380, 'tex_crate').refreshBody();
      addElevatedCatwalk(cx + 25, 330, 480);
      addBlock(cx + 165, 220, true);
      addCrab(cx + 345, 295, cx + 505);
      cx = addGround(cx, 535);

      cx = addTrap(cx, 180);
      cx = addGround(cx, 450);

      addBlock(cx + 120, 260, true);
      addCrab(cx + 260, 380, cx + 450);
      cx = addGround(cx, 550);
      cx = addGround(cx, 400);
    }
    else if (this.stage === 6) {
      // Fast start into crate jump, question block & gate before the tank launch
      cx = addGround(cx, 170);
      this.crates.create(cx + 20, 380, 'tex_crate').refreshBody();
      const b1 = addBlock(cx + 120, 260);
      const g1 = this.gateWalls.create(cx + 250, 200, 'tex_gate_wall');
      g1.refreshBody();
      b1.linkedGate = g1;
      cx = addGround(cx, 320);

      cx = addTankAndHoop(cx);
      cx = addGround(cx, 400);
    }
    else if (this.stage === 7) {
      // Immediate catwalk ambush right out of the starting gate
      cx = addGround(cx, 165);
      this.crates.create(cx - 15, 380, 'tex_crate').refreshBody();
      addElevatedCatwalk(cx + 25, 340, 400);
      addBlock(cx + 125, 220, false);
      addCrab(cx + 210, 305, cx + 365);
      cx = addGround(cx, 430);

      const p1 = this.add.sprite(cx + 110, 360, 'tex_plat');
      this.movingPlats.add(p1);
      this.tweens.add({ targets: p1, x: p1.x + 130, duration: 2000, yoyo: true, repeat: -1 });
      cx += 300;
      cx = addGround(cx, 350);

      cx = addTankAndHoop(cx);
      cx = addGround(cx, 400);
    }
    else if (this.stage === 8) {
      // Immediate Red Powerup Block & Wall-Jump Shaft right near spawn
      cx = addGround(cx, 165);
      this.crates.create(cx - 10, 380, 'tex_crate').refreshBody();
      addBlock(cx + 85, 260, true);

      addWallJumpShaft(cx + 190);
      cx = addGround(cx, 520);

      cx = addTrap(cx, 200);
      cx = addGround(cx, 350);

      addCrab(cx + 160, 380, cx + 360);
      cx = addGround(cx, 500);
      cx = addGround(cx, 400);
    }
    else if (this.stage === 9) {
      // Fast entry into crates & wall-jump tower
      cx = addGround(cx, 165);
      this.crates.create(cx + 15, 380, 'tex_crate').refreshBody();
      addWallJumpShaft(cx + 120);
      cx = addGround(cx, 440);

      cx = addTrap(cx, 200);
      cx = addGround(cx, 350);

      addCrab(cx + 160, 380, cx + 360);
      cx = addGround(cx, 400);

      cx = addTankAndHoop(cx);
      cx = addGround(cx, 400);
    }
    else if (this.stage === 10) {
      // Fast entry into crates & wall-jump tower + immediate action
      cx = addGround(cx, 165);
      this.crates.create(cx + 15, 380, 'tex_crate').refreshBody();
      addWallJumpShaft(cx + 120);
      cx = addGround(cx, 440);

      addBlock(cx + 100, 260, true);
      addCrab(cx + 200, 380, cx + 400);
      cx = addGround(cx, 450);

      const p1 = this.add.sprite(cx + 110, 360, 'tex_plat');
      this.movingPlats.add(p1);
      this.tweens.add({ targets: p1, x: p1.x + 140, duration: 2000, yoyo: true, repeat: -1 });
      cx += 300;
      cx = addGround(cx, 350);

      cx = addTankAndHoop(cx);
      cx = addGround(cx, 400);
    }
    else if (this.stage === 11) {
      // Immediate multi-tier catwalk & crab encounter right after spawn
      cx = addGround(cx, 165);
      this.crates.create(cx - 15, 380, 'tex_crate').refreshBody();
      addElevatedCatwalk(cx + 25, 330, 480);
      addBlock(cx + 185, 220, true);
      addCrab(cx + 325, 295, cx + 505);
      cx = addGround(cx, 535);

      const p1 = this.add.sprite(cx + 120, 355, 'tex_plat');
      this.movingPlats.add(p1);
      this.tweens.add({ targets: p1, x: p1.x + 160, duration: 2100, yoyo: true, repeat: -1 });
      cx += 360;
      cx = addGround(cx, 400);

      cx = addTrap(cx, 220);
      cx = addGround(cx, 450);

      addWallJumpShaft(cx + 200);
      cx = addGround(cx, 600);

      cx = addTankAndHoop(cx);
      cx = addGround(cx, 450);

      addElevatedCatwalk(cx + 40, 330, 400);
      addBlock(cx + 160, 220, false);
      addCrab(cx + 280, 295, cx + 460);
      cx = addGround(cx, 550);

      const p2 = this.add.sprite(cx + 100, 350, 'tex_plat');
      this.movingPlats.add(p2);
      this.tweens.add({ targets: p2, x: p2.x + 140, duration: 1900, yoyo: true, repeat: -1 });
      cx += 340;
      cx = addGround(cx, 500);
    }
    else if (this.stage >= 12) {
      // UPGRADED LEVELS 12–15: Fast start right into stepping crate & wall-jump shaft
      cx = addGround(cx, 165);
      this.crates.create(cx + 15, 380, 'tex_crate').refreshBody();
      addWallJumpShaft(cx + 115);
      cx = addGround(cx, 480);

      cx = addTrap(cx, 200);
      cx = addGround(cx, 450);

      addElevatedCatwalk(cx + 40, 330, 480);
      addBlock(cx + 180, 220, true);
      addCrab(cx + 320, 295, cx + 520);
      cx = addGround(cx, 550);

      const p1 = this.add.sprite(cx + 110, 350, 'tex_plat');
      this.movingPlats.add(p1);
      this.tweens.add({ targets: p1, x: p1.x + 160, duration: 2000, yoyo: true, repeat: -1 });
      cx += 360;
      cx = addGround(cx, 400);

      // Tank & Hoop launches player onto a populated landing zone
      const landingStart = cx + 600;
      cx = addTankAndHoop(cx, 345, 500);

      // Populate the landing zone right after the safe touchdown spot
      this.crates.create(landingStart + 220, 380, 'tex_crate').refreshBody();
      this.crates.create(landingStart + 220, 340, 'tex_crate').refreshBody();
      addCrab(landingStart + 350, 380, landingStart + 470);

      // Spike trap + outdoor moving platform crossing
      cx = addTrap(cx, 180);
      const p2 = this.add.sprite(cx - 140, 315, 'tex_plat');
      this.movingPlats.add(p2);
      this.tweens.add({ targets: p2, x: p2.x + 110, duration: 1650, yoyo: true, repeat: -1 });

      // Final populated gauntlet leading directly to the red fire question box & flagpole
      const finalStretchStart = cx;
      cx = addGround(cx, 620);

      // Crate step & elevated catwalk leading to the final red fire box
      this.crates.create(finalStretchStart + 70, 380, 'tex_crate').refreshBody();
      addElevatedCatwalk(finalStretchStart + 130, 320, 240);

      // Final Red Fire Question Box perched above the catwalk
      addBlock(finalStretchStart + 250, 205, true);

// Final Crab guardian patrolling right in front of the gate wall
      addCrab(finalStretchStart + 340, 380, finalStretchStart + 460);
    }

    // Eliminate internal horizontal seam collisions on any vertically stacked crates so players never snag or stick
    const allCrates = this.crates.getChildren();
    allCrates.forEach((c1) => {
      allCrates.forEach((c2) => {
        if (c1 !== c2 && Math.abs(c1.x - c2.x) < 8 && Math.abs((c1.y - 40) - c2.y) < 8) {
          // c2 is directly on top of c1
          if (c1.body) c1.body.checkCollision.up = false;
          if (c2.body) c2.body.checkCollision.down = false;
        }
      });
    });

    // Always spawn a fresh flagpole on every stage right before the level ends
    this.finishFlag = this.physics.add.sprite(cx - 85, 280, 'tex_flag').setImmovable(true);
    this.finishFlag.body.setAllowGravity(false);

    // Record exact box count for this stage in TierProgress
    TierProgress.stageBoxCounts[this.stage] = Math.max(1, this.stageBoxCounter);

    // Clamp world and camera bounds tightly to the actual stage end (cx)
    const totalLevelWidth = Math.max(cx, 800);
    this.physics.world.setBounds(0, 0, totalLevelWidth, 600);
    this.physics.world.setBoundsCollision(true, true, true, false);
    this.cameras.main.setBounds(0, 0, totalLevelWidth, 450);
  }

  triggerBossCutscene(bossType = 'turtle') {
    this.player.setVelocity(0, 0);
    if (this.player.body) this.player.body.allowGravity = false;

    const overlay = this.add.rectangle(400, 225, 800, 450, 0x000000, 0).setScrollFactor(0).setDepth(600);
    this.tweens.add({ targets: overlay, alpha: 0.88, duration: 400 });

    let bossName = '🐢 The Ancient Turtle Boss awakens!';
    if (bossType === 'crab') bossName = '🦀 A GIANT ARMORED CRAB EMERGES FROM THE DEEP!';
    if (bossType === 'snake') bossName = '🐍 A VENOMOUS KING COBRA BLOCKS YOUR PATH!';

    const text1 = this.add.text(400, 150, `🏆 STAGE ${this.stage} COMPLETE! 🏆`, {
      fontSize: '24px', fontWeight: 'bold', color: '#2ecc71', align: 'center'
    }).setOrigin(0.5).setScrollFactor(0).setDepth(601).setAlpha(0);

    const text2 = this.add.text(400, 210, 'Wait... a massive rumble shakes the arena!', {
      fontSize: '18px', fontWeight: 'bold', color: '#f1c40f', align: 'center'
    }).setOrigin(0.5).setScrollFactor(0).setDepth(601).setAlpha(0);

    const text3 = this.add.text(400, 270, bossName, {
      fontSize: '16px', fontWeight: 'bold', color: '#ffffff', align: 'center'
    }).setOrigin(0.5).setScrollFactor(0).setDepth(601).setAlpha(0);

    this.tweens.add({ targets: text1, alpha: 1, duration: 400, delay: 200 });
    this.tweens.add({ targets: text2, alpha: 1, duration: 400, delay: 1600 });
    this.tweens.add({ targets: text3, alpha: 1, duration: 400, delay: 3000 });

    this.time.delayedCall(5000, () => {
      this.scene.restart({
        level: this.level,
        skill: this.skill,
        avatar: this.avatar,
        stage: this.stage,
        isBossFight: true,
        bossType: bossType,
        stars: this.stars
      });
    });
  }

  createBossHeartUI() {
    this.bossHeartContainer = this.add.container(710, 80).setScrollFactor(0).setDepth(250);
    this.bossHearts = [];

    const badgeBg = this.add.rectangle(0, 0, 130, 44, 0x1e272e, 0.92)
      .setStrokeStyle(1.5, 0xf1c40f, 0.8);

    let labelText = '🐢 TURTLE HP';
    if (this.bossType === 'crab') labelText = '🦀 CRAB HP';
    if (this.bossType === 'snake') labelText = '🐍 SNAKE HP';

    const label = this.add.text(0, -11, labelText, {
      fontSize: '10px', fontWeight: 'bold', color: '#f1c40f'
    }).setOrigin(0.5);

    this.bossHeartContainer.add([badgeBg, label]);

    const startX = this.bossMaxHp === 2 ? -15 : -30;
    for (let i = 0; i < this.bossMaxHp; i++) {
      const heart = this.add.image(startX + i * 30, 9, 'tex_heart').setScale(0.9);
      this.bossHearts.push(heart);
      this.bossHeartContainer.add(heart);
    }
  }

  updateBossHeartUI() {
    if (!this.bossHearts || this.bossHearts.length === 0) return;
    for (let i = 0; i < this.bossMaxHp; i++) {
      if (this.bossHearts[i]) {
        if (i < this.bossHp) {
          this.bossHearts[i].setTexture('tex_heart');
        } else {
          this.bossHearts[i].setTexture('tex_heart_empty');
        }
      }
    }
  }

  createFireworkExplosion(x, y) {
    const colors = [0xf1c40f, 0xe74c3c, 0xff7675, 0x00d2d3, 0xffffff, 0xf39c12, 0x2ecc71, 0x9b59b6];
    const particleCount = 30;

    const ring = this.add.circle(x, y, 8);
    ring.setStrokeStyle(3, 0xffffff, 1);
    this.tweens.add({
      targets: ring, radius: 55, alpha: 0, duration: 500, ease: 'Cubic.easeOut',
      onComplete: () => ring.destroy()
    });

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2 + (Math.random() * 0.3 - 0.15);
      const speed = Phaser.Math.Between(90, 220);
      const color = Phaser.Utils.Array.GetRandom(colors);
      const spark = this.add.circle(x, y, Phaser.Math.Between(3, 7), color);

      this.tweens.add({
        targets: spark,
        x: x + Math.cos(angle) * speed,
        y: y + Math.sin(angle) * speed + 30,
        scale: { start: 1.2, end: 0.1 },
        alpha: { start: 1, end: 0 },
        duration: Phaser.Math.Between(550, 850),
        ease: 'Quad.easeOut',
        onComplete: () => spark.destroy()
      });
    }
  }

  spawnImpactDebris(x, y, count = 4) {
    const velocities = [
      { vx: -220, vy: -260 },
      { vx: -110, vy: -320 },
      { vx: 110, vy: -320 },
      { vx: 220, vy: -260 }
    ];
    for (let i = 0; i < Math.min(count, velocities.length); i++) {
      const shard = this.bossProjectiles.create(x, y - 8, 'tex_debris');
      shard.body.allowGravity = true;
      shard.setVelocity(velocities[i].vx, velocities[i].vy);
      shard.setAngularVelocity(360);
      this.time.delayedCall(2200, () => {
        if (shard && shard.active) shard.destroy();
      });
    }
  }

  setupCollisions() {
    this.physics.add.collider(this.player, this.platforms, () => { this.player.isLaunched = false; });
    this.physics.add.collider(this.player, this.crates, () => { this.player.isLaunched = false; });
    this.physics.add.collider(this.player, this.gateWalls);
    this.physics.add.collider(this.crabs, this.platforms);
    this.physics.add.collider(this.crabs, this.crates);
    this.physics.add.collider(this.crabs, this.crabBounds);

    if (this.boss) {
      this.physics.add.collider(this.boss, this.platforms);
      this.physics.add.collider(this.boss, this.crates);
      this.physics.add.collider(this.boss, this.crabBounds);
    }

    this.physics.add.collider(this.player, this.movingPlats, (player, plat) => {
      if (player.body.touching.down && plat.body.touching.up) {
        player.x += (plat.body.position.x - plat.body.prev.x);
        player.isLaunched = false;
      }
    });

    this.physics.add.overlap(this.player, this.traps, () => this.resetPlayer());

    // Yellow Q-Blocks -> Awards 1 Star & tallies cleared Question Box
    this.physics.add.collider(this.player, this.qBlocks, (player, block) => {
      if (player.body.touching.up && block.body.touching.down && !block.isSolved) {
        this.triggerQuiz(block, () => {
          TierProgress.recordBoxCleared(this.level, this.stage, block.boxId || 1);
          this.unlockGate(block);
          this.addStar();
        });
      }
    });

    // Red Powerup Blocks -> Tallies cleared Question Box & spawns Fireball Orb
    this.physics.add.collider(this.player, this.redBlocks, (player, block) => {
      if (player.body.touching.up && block.body.touching.down && !block.isSolved) {
        this.triggerQuiz(block, () => {
          TierProgress.recordBoxCleared(this.level, this.stage, block.boxId || 99);
          block.isSolved = true;
          if (block.label) block.label.destroy();
          block.destroy();

          const orb = this.physics.add.sprite(block.x, block.y - 30, 'tex_redball');
          this.physics.add.collider(orb, this.platforms);
          this.physics.add.overlap(this.player, orb, () => {
            orb.destroy();
            this.grantFireballPower();
          });
        });
      }
    });

    // Crab Stomp Combat
    this.physics.add.collider(this.player, this.crabs, (player, crab) => {
      if (crab.isDying || this.isQuizActive) return;
      if (player.body.touching.down && crab.body.touching.up) {
        this.triggerQuiz(crab,
          () => {
            crab.isDying = true;
            crab.destroy();
            if (crab.linkedGate) this.unlockGate(crab);
            player.setVelocityY(-330);
          },
          () => {
            player.setVelocityY(-260);
            player.setVelocityX(player.x < crab.x ? -180 : 180);
          }
        );
      } else {
        this.resetPlayer();
      }
    });

    // Boss Stomp Combat
    if (this.boss) {
      this.physics.add.collider(this.player, this.boss, (player, boss) => {
        if (!this.bossActive || this.bossHp <= 0 || this.isQuizActive || this.bossIsComplimenting) return;
        if (this.bossState === 'burrow') return;
        if (player.body.touching.down && boss.body.touching.up) {
          this.handleBossHit();
        } else {
          this.resetPlayer();
        }
      });
    }

    // Boss Projectile Collision with Player
    this.physics.add.overlap(this.player, this.bossProjectiles, (player, projectile) => {
      projectile.destroy();
      this.resetPlayer();
    });

    // Tank Launch Overlap
    this.physics.add.overlap(this.player, this.tankZones, (player, zone) => {
      if (!player.isLaunched && !this.isQuizActive) {
        player.isLaunched = true;
        player.setVelocity(0, 0);
        player.setVisible(false);
        if (player.body) player.body.allowGravity = false;

        const flash = this.add.circle(zone.x + 45, zone.y - 30, 16, 0xf1c40f);
        this.tweens.add({
          targets: flash, scale: 2.2, alpha: 0, duration: 200,
          onComplete: () => flash.destroy()
        });

        this.time.delayedCall(220, () => {
          if (this.isQuizActive) return;
          player.setPosition(zone.x + 50, zone.y - 35);
          player.setVisible(true);
          if (player.body) player.body.allowGravity = true;
          player.setVelocity(520, -340);
        });
      }
    });

    // In-Flight Hoop Trigger
    this.physics.add.overlap(this.player, this.hoops, (player, hoop) => {
      if (!hoop.passed && !this.isQuizActive) {
        player.setVelocity(0, 0);
        if (player.body) player.body.allowGravity = false;

        this.triggerQuiz(hoop,
          () => {
            hoop.passed = true;
            if (player.body) player.body.allowGravity = true;
            player.setVelocity(520, -220);
          },
          () => {
            hoop.passed = false;
            if (player.body) player.body.allowGravity = true;
            this.resetPlayer();
          }
        );
      }
    });

    // Finish Line Flag
    if (this.finishFlag) {
      this.physics.add.overlap(this.player, this.finishFlag, () => {
        if (!this.levelCompleted) {
          this.levelCompleted = true;
          if (this.stage === 3 && !this.isBossFight) {
            this.triggerBossCutscene('crab');
          } else if (this.stage === 8 && !this.isBossFight) {
            this.triggerBossCutscene('snake');
          } else if (this.stage === this.maxStages && !this.isBossFight) {
            this.triggerBossCutscene('turtle');
          } else {
            this.showLevelCompleteModal();
          }
        }
      });
    }
  }

  addStar() {
    this.stars++;
    sfx.playStar();
    this.updateFixedUIStars();

    const starToast = this.add.text(this.player.x, this.player.y - 40, '⭐ +1 STAR!', {
      fontSize: '18px', fontWeight: 'bold', color: '#f1c40f'
    }).setOrigin(0.5).setDepth(210);

    this.tweens.add({
      targets: starToast,
      y: starToast.y - 30,
      alpha: 0,
      duration: 1000,
      onComplete: () => starToast.destroy()
    });

    this.checkSuperButton();
  }

  checkSuperButton() {
    if (this.stars >= 3 && !this.superBtn && !this.isSuper) {
      this.grantSuperButton();
    }
  }

  grantSuperButton() {
    if (this.superBtn) this.superBtn.destroy();

    const btnX = 85;
    const btnY = 160;

    const container = this.add.container(btnX, btnY).setScrollFactor(0).setDepth(300);

    const bg = this.add.rectangle(0, 0, 130, 44, 0xf39c12)
      .setStrokeStyle(2.5, 0xffffff, 1)
      .setInteractive({ useHandCursor: true });

    const txt = this.add.text(0, 0, '⚡ SUPER (S)', {
      fontSize: '15px', fontWeight: 'bold', color: '#ffffff'
    }).setOrigin(0.5);

    container.add([bg, txt]);
    this.superBtn = container;

    const activateSuper = () => {
      if (this.stars < 3 || this.isSuper || this.isQuizActive) return;
      this.stars -= 3;
      this.updateFixedUIStars();

      if (this.superBtn) {
        this.superBtn.destroy();
        this.superBtn = null;
      }
      this.activateSuper();
    };

    bg.on('pointerdown', activateSuper);
    bg.on('pointerover', () => { bg.fillColor = 0xf1c40f; container.setScale(1.05); });
    bg.on('pointerout', () => { bg.fillColor = 0xf39c12; container.setScale(1.0); });

    this.input.keyboard.on('keydown-S', () => {
      if (this.stars >= 3 && !this.isSuper) activateSuper();
    });
  }

  activateSuper() {
    this.isSuper = true;
    sfx.playSuper();
    if (this.player.body) this.player.body.allowGravity = false;

    this.player.setTint(0xf1c40f);
    this.cameras.main.flash(350, 255, 220, 0);

    const auraToast = this.add.text(400, 80, '⚡ SUPER MODE! FLY AROUND FOR 10 SECONDS! ⚡', {
      fontSize: '15px', fontWeight: 'bold', color: '#f1c40f', backgroundColor: '#1e272e', padding: { x: 14, y: 7 }
    }).setOrigin(0.5).setScrollFactor(0).setDepth(300);

    this.time.delayedCall(10000, () => {
      if (auraToast) auraToast.destroy();
      this.player.setScale(1.15);
      this.player.clearTint();
      this.isSuper = false;
      if (this.auraGraphics) this.auraGraphics.clear();
      if (this.player.body) this.player.body.allowGravity = true;
      this.checkSuperButton();
    });
  }

  renderSuperAura() {
    if (!this.auraGraphics) return;
    this.auraGraphics.clear();
    this.auraTimer += 0.08;

    const px = this.player.x;
    const py = this.player.y;
    const radius = 38 + Math.sin(this.auraTimer * 4) * 4;

    this.auraGraphics.lineStyle(3.5, 0xf1c40f, 0.85);
    this.auraGraphics.strokeCircle(px, py, radius);

    this.auraGraphics.lineStyle(2, 0xffffff, 0.9);
    this.auraGraphics.strokeCircle(px, py, radius - 4);

    this.auraGraphics.fillStyle(0xf39c12, 0.25);
    this.auraGraphics.fillCircle(px, py, radius);

    for (let i = 0; i < 4; i++) {
      const angle = this.auraTimer * 3 + (i * Math.PI / 2);
      const sparkDist = radius + Phaser.Math.Between(-6, 12);
      const sx = px + Math.cos(angle) * sparkDist;
      const sy = py + Math.sin(angle) * sparkDist;
      this.auraGraphics.fillStyle(0x00d2d3, 0.9);
      this.auraGraphics.fillCircle(sx, sy, Phaser.Math.Between(2, 4));
    }
  }

  handleBossHit() {
    this.player.setVelocityY(-340);
    this.boss.qData = null;
    sfx.playHit();

    this.triggerQuiz(this.boss,
      () => {
        this.bossHp--;
        this.updateBossHeartUI();
        this.createFireworkExplosion(this.boss.x, this.boss.y);

        if (this.bossHp <= 0) {
          this.bossHp = 0;
          this.updateBossHeartUI();
          if (this.stage >= this.maxStages) {
            TierProgress.unlockTier(this.level);
            this.refreshCertificateHudButton();
          }
          this.showBossDialogue("🏆 Boss Defeated! Incredible English Mastery!", () => {
            this.boss.destroy();
            this.triggerVictoryFireworksSequence();
          });
        } else {
          let dialogue = "🐢 Turtle: 'Watch out for my shell-spin and shockwave hops!'";
          if (this.bossType === 'crab') dialogue = "🦀 Giant Crab: 'Burrowing reposition! Beware my pincer slam!'";
          if (this.bossType === 'snake') dialogue = "🐍 King Cobra: 'Coiling up... aimed venom strike incoming!'";

          this.showBossDialogue(dialogue, () => {
            if (!this.boss || !this.boss.active) return;
            if (this.bossType === 'crab') {
              // Quick burrow & reposition away from the player when damaged
              this.bossState = 'burrow';
              this.bossStateTimer = 0;
              this.boss.setTint(0x8b4513);
              this.tweens.add({
                targets: this.boss,
                scaleY: 0.25,
                alpha: 0.5,
                duration: 240,
                yoyo: true,
                onYoyo: () => {
                  if (!this.boss || !this.boss.active) return;
                  const targetX = this.player.x < 400 ? Phaser.Math.Between(540, 700) : Phaser.Math.Between(100, 260);
                  this.boss.x = targetX;
                  this.boss.setVelocityY(-360);
                },
                onComplete: () => {
                  if (!this.boss || !this.boss.active) return;
                  this.boss.clearTint();
                  this.boss.setScale(1.0);
                  this.boss.setAlpha(1);
                  this.bossState = 'patrol';
                  this.bossStateTimer = 0;
                }
              });
            } else if (this.bossType === 'snake') {
              this.bossState = 'coil';
              this.bossStateTimer = 0;
            } else {
              this.bossState = 'spin_charge';
              this.bossStateTimer = 0;
              this.boss.setTint(0xf1c40f);
              const dir = this.player.x < this.boss.x ? -1 : 1;
              this.boss.setVelocityX(dir * 420);
            }
          });
        }
      },
      () => {
        this.player.setVelocityY(-250);
        this.player.setVelocityX(this.player.x < this.boss.x ? -180 : 180);
      }
    );
  }

  showBossDialogue(text, onDone) {
    this.bossIsComplimenting = true;
    const toastBg = this.add.rectangle(400, 70, 680, 50, 0x1e272e, 0.95).setStrokeStyle(2, 0x2ecc71, 1).setScrollFactor(0).setDepth(300);
    const toastTxt = this.add.text(400, 70, text, { fontSize: '15px', fontWeight: 'bold', color: '#2ecc71', align: 'center' }).setOrigin(0.5).setScrollFactor(0).setDepth(301);

    this.time.delayedCall(2000, () => {
      this.tweens.add({
        targets: [toastBg, toastTxt],
        alpha: 0,
        duration: 350,
        onComplete: () => {
          toastBg.destroy();
          toastTxt.destroy();
          this.bossIsComplimenting = false;
          if (onDone) onDone();
        }
      });
    });
  }

  triggerVictoryFireworksSequence() {
    this.levelCompleted = true;
    for (let i = 0; i < 16; i++) {
      this.time.delayedCall(i * 180, () => {
        const rx = Phaser.Math.Between(100, 700);
        const ry = Phaser.Math.Between(80, 360);
        this.createFireworkExplosion(rx + this.cameras.main.scrollX, ry);
      });
    }
    this.time.delayedCall(2400, () => {
      this.showBossVictoryModal();
    });
  }

  showBossVictoryModal() {
    this.player.setVelocity(0, 0);
    this.clearModal();
    const overlay = this.add.rectangle(400, 225, 800, 450, 0x000000, 0.85).setScrollFactor(0).setInteractive().setDepth(500);
    const box = this.add.rectangle(400, 225, 580, 330, 0x1e272e).setStrokeStyle(3, 0xf1c40f, 1).setScrollFactor(0).setDepth(501);
    sfx.stopBGM();

    let bossName = "Turtle Boss";
    if (this.bossType === 'crab') bossName = "Giant Crab";
    if (this.bossType === 'snake') bossName = "King Cobra Snake";

    const banner = this.add.text(400, 105, `🎉 BOSS DEFEATED! 🎉\n${bossName.toUpperCase()} CONQUERED!`, {
      fontSize: '21px', fontWeight: 'bold', color: '#f1c40f', align: 'center', lineSpacing: 5
    }).setOrigin(0.5).setScrollFactor(0).setDepth(502);

    const isFinalStage = this.stage >= this.maxStages;
    const stats = TierProgress.getTierBoxStats(this.level);
    const descText = isFinalStage
      ? `You conquered all ${this.maxStages} stages of ${this.level}!\nQuestion Boxes Cleared: ${stats.cleared} / ${stats.total}`
      : `You defeated the ${bossName} and completed Stage ${this.stage}!\nQuestion Boxes Cleared so far: ${stats.cleared} / ${stats.total}`;

    const desc = this.add.text(400, 172, descText, {
      fontSize: '14px', color: '#d2dae2', align: 'center', lineSpacing: 5, wordWrap: { width: 500 }
    }).setOrigin(0.5).setScrollFactor(0).setDepth(502);

    this.modalElements.push(overlay, box, banner, desc);

    if (!isFinalStage) {
      this.createDirectQuizButton(270, 285, 190, 50, '⏭ Next Stage', null, () => {
        this.scene.restart({
          level: this.level,
          skill: this.skill,
          avatar: this.avatar,
          stage: this.stage + 1,
          isBossFight: false,
          stars: this.stars
        });
      }, 503);
      this.createDirectQuizButton(530, 285, 190, 50, '🏠 Home Menu', null, () => {
        this.scene.start('MenuScene');
      }, 503);
    } else {
      // Final Tier Completion: Unlock & show "Claim [Tier] Certificate" button
      TierProgress.unlockTier(this.level);
      this.refreshCertificateHudButton();

      const certBtn = this.createDirectQuizButton(400, 238, 340, 48, `🏅 Claim ${this.level} Certificate`, null, () => {
        CertificateManager.openModal(this.level, this.skill);
      }, 503);
      certBtn.fillColor = 0xd35400;

      this.createDirectQuizButton(270, 305, 190, 46, '▶ Replay Quest', null, () => {
        QuestionDeckManager.resetTrack(this.level, this.skill);
        this.scene.restart({ level: this.level, skill: this.skill, avatar: this.avatar, stage: 1, stars: this.stars });
      }, 503);

      this.createDirectQuizButton(530, 305, 190, 46, '🏠 Home Menu', null, () => {
        this.scene.start('MenuScene');
      }, 503);
    }
  }

  grantFireballPower() {
    this.hasFireball = true;
    if (this.fireBtn) this.fireBtn.destroy();

    const btnX = 85;
    const btnY = 105;

    const container = this.add.container(btnX, btnY).setScrollFactor(0).setDepth(300);

    const bg = this.add.rectangle(0, 0, 130, 44, 0xe74c3c)
      .setStrokeStyle(2.5, 0xffffff, 1)
      .setInteractive({ useHandCursor: true });

    const txt = this.add.text(0, 0, '🔥 FIRE (F)', {
      fontSize: '15px', fontWeight: 'bold', color: '#ffffff'
    }).setOrigin(0.5);

    container.add([bg, txt]);
    this.fireBtn = container;

    const triggerFire = () => {
      if (!this.hasFireball || this.isQuizActive) return;
      this.hasFireball = false;

      if (this.fireBtn) {
        this.fireBtn.destroy();
        this.fireBtn = null;
      }

      const fb = this.physics.add.sprite(this.player.x, this.player.y, 'tex_fireball');
      fb.body.allowGravity = false;
      fb.setVelocityX(this.player.flipX ? -500 : 500);

      sfx.playFireball();

      this.physics.add.overlap(fb, this.crabs, (fireball, crab) => {
        fireball.destroy();
        if (crab.isDying || this.isQuizActive) return;
        const targetX = crab.x;
        const targetY = crab.y;

        this.triggerQuiz(crab,
          () => {
            crab.isDying = true;
            this.createFireworkExplosion(targetX, targetY);
            crab.destroy();
            if (crab.linkedGate) this.unlockGate(crab);
          },
          () => {}
        );
      });

      if (this.boss) {
        this.physics.add.overlap(fb, this.boss, (fireball) => {
          fireball.destroy();
          if (!this.bossActive || this.bossHp <= 0 || this.isQuizActive || this.bossIsComplimenting) return;
          this.handleBossHit();
        });
      }

      this.time.delayedCall(1500, () => { if (fb && fb.active) fb.destroy(); });
    };

    bg.on('pointerdown', triggerFire);
    bg.on('pointerover', () => { bg.fillColor = 0xff7675; container.setScale(1.05); });
    bg.on('pointerout', () => { bg.fillColor = 0xe74c3c; container.setScale(1.0); });

    this.input.keyboard.on('keydown-F', () => {
      if (this.hasFireball) triggerFire();
    });
  }

  resetPlayer() {
    this.player.setPosition(this.spawnX, this.spawnY);
    this.player.setVelocity(0, 0);
    this.player.isLaunched = false;
    this.lastWallSide = null;
    this.player.setVisible(true);
    if (this.player.body) this.player.body.allowGravity = !this.isSuper;
    this.cameras.main.flash(300, 255, 0, 0);
  }

  unlockGate(entity) {
    if (entity.linkedGate) {
      this.tweens.add({
        targets: entity.linkedGate, scaleY: 0, alpha: 0, duration: 600, ease: 'Power2',
        onComplete: () => entity.linkedGate.destroy()
      });
    }
    if (entity.setTint) entity.setTint(0x7f8c8d);
    entity.isSolved = true;
  }

  freezeEnemies() {
    this.crabs.getChildren().forEach(c => {
      if (c.body) {
        c.savedVelX = c.body.velocity.x !== 0 ? c.body.velocity.x : (c.savedVelX || -60);
        c.setVelocityX(0);
      }
    });
    if (this.boss && this.boss.body) {
      this.boss.savedVelX = this.boss.body.velocity.x;
      this.boss.savedVelY = this.boss.body.velocity.y;
      this.boss.setVelocityX(0);
      this.boss.setVelocityY(0);
      this.boss.body.allowGravity = false;
    }
  }

  unfreezeEnemies() {
    this.crabs.getChildren().forEach(c => {
      if (c.body && !c.isDying) {
        c.setVelocityX(c.savedVelX || -60);
      }
    });
    if (this.boss && this.boss.body && this.bossActive && this.bossHp > 0) {
      this.boss.body.allowGravity = true;
      this.boss.setVelocityX(this.boss.savedVelX || -180);
    }
  }

  triggerQuiz(block, onCorrect, onWrong) {
    if (this.isQuizActive) return;
    this.isQuizActive = true;
    this.player.setVelocity(0, 0);
    if (this.player.body) this.player.body.allowGravity = false;

    this.freezeEnemies();

    if (block && block.label) this.tweens.add({ targets: [block, block.label], y: '-=12', yoyo: true, duration: 100 });
    this.clearModal();

    const overlay = this.add.rectangle(400, 225, 800, 450, 0x000000, 0.74).setScrollFactor(0).setInteractive().setDepth(350);
    const box = this.add.rectangle(400, 225, 560, 330, 0x2c3e50).setStrokeStyle(3, 0xf1c40f, 1).setScrollFactor(0).setDepth(351);
    this.modalElements.push(overlay, box);

    if (block && !block.qData) {
      block.qData = this.getQuestion();
    }
    const q = (block && block.qData) ? block.qData : this.getQuestion();
    if (typeof q._failedAttempts !== 'number') q._failedAttempts = 0;

    const type = q.t || 'text';

    if (type === 'image' || type === 'text') this.buildChoiceQuiz(q, block, onCorrect, onWrong);
    if (type === 'listen') this.buildListeningQuiz(q, block, onCorrect, onWrong);
    if (type === 'speak') this.buildSpeakingQuiz(q, block, onCorrect, onWrong);
    if (type === 'write') this.buildWritingQuiz(q, block, onCorrect, onWrong);
  }

  clearModal() {
    this.modalElements.forEach((el) => { if (el && el.destroy) el.destroy(); });
    this.modalElements = [];
  }

  // Creates & manages the Mandarin hint element (hidden until 1st failed attempt)
  createMandarinHintDisplay(q, yPos = 355) {
    const initialText = (q._failedAttempts > 0 && q.hintZh) ? `💡 中文提示：${q.hintZh}` : '';
    const hintText = this.add.text(400, yPos, initialText, {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#ffeaa7',
      backgroundColor: initialText ? '#1e272e' : null,
      padding: { x: 10, y: 4 },
      align: 'center',
      wordWrap: { width: 510 }
    }).setOrigin(0.5).setScrollFactor(0).setDepth(354);
    this.modalElements.push(hintText);
    return hintText;
  }

  handleQuizWrongAttempt(q, feedback, hintLabel, defaultWrongMsg, onWrong, block = null) {
    q._failedAttempts = (q._failedAttempts || 0) + 1;
    this.cameras.main.shake(100, 0.005);

    // Reveal Mandarin hint on first failed attempt for A1 / hintZh questions
    if (q.hintZh && hintLabel) {
      hintLabel.setText(`💡 中文提示：${q.hintZh}`);
      hintLabel.setBackgroundColor('#1e272e');
    }

    feedback.setText(defaultWrongMsg);
    feedback.setColor('#ff7675');

    // If this is the student's first failed attempt and a Mandarin hint just unlocked,
    // keep the modal open so they can read the hint and answer immediately
    if (q.hintZh && q._failedAttempts === 1) {
      return;
    }

    if (onWrong) {
      if (block) block.qData = null;
      this.time.delayedCall(750, () => {
        this.clearModal();
        this.isQuizActive = false;
        if (this.player.body) this.player.body.allowGravity = !this.isSuper;
        this.unfreezeEnemies();
        onWrong();
      });
    }
  }

  buildChoiceQuiz(q, block, onCorrect, onWrong) {
    const title = this.add.text(400, 108, q.p, { fontSize: '20px', fontWeight: 'bold', color: '#ffffff', align: 'center', lineSpacing: 4, wordWrap: { width: 500 } }).setOrigin(0.5).setScrollFactor(0).setDepth(352);
    const feedback = this.add.text(400, 310, '', { fontSize: '15px', fontWeight: 'bold', color: '#ff7675' }).setOrigin(0.5).setScrollFactor(0).setDepth(352);
    this.modalElements.push(title, feedback);
    const hintLabel = this.createMandarinHintDisplay(q, 352);

    const isLeftCorrect = Math.random() > 0.5;
    const width = q.t === 'image' ? 175 : 190;
    const height = q.t === 'image' ? 120 : 80;

    const handleCorrect = () => {
      if (block) block.qData = null;
      feedback.setText('Correct! 🎉'); feedback.setColor('#2ecc71');
      this.time.delayedCall(800, () => {
        this.clearModal(); this.isQuizActive = false;
        if (this.player.body) this.player.body.allowGravity = !this.isSuper;
        this.unfreezeEnemies();
        if (onCorrect) onCorrect();
      });
    };

    const handleWrong = () => {
      this.handleQuizWrongAttempt(q, feedback, hintLabel, 'Not quite! Try again 😊', onWrong, block);
    };

    if (q.t === 'image') {
      this.createDirectQuizButton(isLeftCorrect ? 285 : 515, 215, width, height, null, q.c, handleCorrect);
      this.createDirectQuizButton(isLeftCorrect ? 515 : 285, 215, width, height, null, q.w, handleWrong);
    } else {
      this.createDirectQuizButton(isLeftCorrect ? 285 : 515, 215, width, height, q.c, null, handleCorrect);
      this.createDirectQuizButton(isLeftCorrect ? 515 : 285, 215, width, height, q.w, null, handleWrong);
    }
  }

  buildListeningQuiz(q, block, onCorrect, onWrong) {
    const title = this.add.text(400, 95, q.p, { fontSize: '20px', fontWeight: 'bold', color: '#ffffff', align: 'center', wordWrap: { width: 500 } }).setOrigin(0.5).setScrollFactor(0).setDepth(352);
    const feedback = this.add.text(400, 312, '', { fontSize: '15px', fontWeight: 'bold', color: '#ff7675' }).setOrigin(0.5).setScrollFactor(0).setDepth(352);
    this.modalElements.push(title, feedback);
    const hintLabel = this.createMandarinHintDisplay(q, 352);

    this.createDirectQuizButton(400, 152, 160, 42, '🔊 Play Audio', null, () => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(q.audio);
        utterance.lang = 'en-US'; utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
        feedback.setText('Playing...'); feedback.setColor('#00d2d3');
      }
    });

    const isLeftCorrect = Math.random() > 0.5;
    const handleCorrect = () => {
      if (block) block.qData = null;
      feedback.setText('Correct! 🎉'); feedback.setColor('#2ecc71');
      this.time.delayedCall(800, () => {
        this.clearModal(); this.isQuizActive = false;
        if (this.player.body) this.player.body.allowGravity = !this.isSuper;
        this.unfreezeEnemies();
        if (onCorrect) onCorrect();
      });
    };
    const handleWrong = () => {
      this.handleQuizWrongAttempt(q, feedback, hintLabel, 'Listen again 😊', onWrong, block);
    };

    this.createDirectQuizButton(isLeftCorrect ? 260 : 540, 232, 240, 68, q.c, null, handleCorrect);
    this.createDirectQuizButton(isLeftCorrect ? 540 : 260, 232, 240, 68, q.w, null, handleWrong);
  }

  buildSpeakingQuiz(q, block, onCorrect, onWrong) {
    const title = this.add.text(400, 110, q.p, { fontSize: '21px', fontWeight: 'bold', color: '#ffffff', align: 'center', lineSpacing: 5, wordWrap: { width: 500 } }).setOrigin(0.5).setScrollFactor(0).setDepth(352);
    const feedback = this.add.text(400, 295, 'Click mic and speak clearly.', { fontSize: '15px', color: '#8395a7', align: 'center', wordWrap: { width: 480 } }).setOrigin(0.5).setScrollFactor(0).setDepth(352);
    this.modalElements.push(title, feedback);
    const hintLabel = this.createMandarinHintDisplay(q, 352);

    this.createDirectQuizButton(400, 212, 200, 66, '🎤 Click to Speak', null, () => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        feedback.setText('❌ Speech recognition not supported in this browser.');
        return;
      }
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.onstart = () => { feedback.setText('Listening... Speak now!'); feedback.setColor('#00d2d3'); };
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const normalized = normalizeSpeech(transcript);
        const isCorrect = q.ans.some(answer => normalizeSpeech(answer) === normalized);
        if (isCorrect) {
          if (block) block.qData = null;
          feedback.setText(`Heard: "${transcript}" — Good job! 🎉`); feedback.setColor('#2ecc71');
          this.time.delayedCall(800, () => {
            this.clearModal(); this.isQuizActive = false;
            if (this.player.body) this.player.body.allowGravity = !this.isSuper;
            this.unfreezeEnemies();
            if (onCorrect) onCorrect();
          });
        } else {
          this.handleQuizWrongAttempt(q, feedback, hintLabel, `Heard: "${transcript}" — Try again!`, onWrong, block);
        }
      };
      recognition.start();
    });
  }

  buildWritingQuiz(q, block, onCorrect, onWrong) {
    const title = this.add.text(400, 110, q.p, { fontSize: '20px', fontWeight: 'bold', color: '#ffffff', align: 'center', wordWrap: { width: 500 } }).setOrigin(0.5).setScrollFactor(0).setDepth(352);
    const feedback = this.add.text(400, 295, 'Click below to type.', { fontSize: '15px', color: '#8395a7', align: 'center', wordWrap: { width: 480 } }).setOrigin(0.5).setScrollFactor(0).setDepth(352);
    this.modalElements.push(title, feedback);
    const hintLabel = this.createMandarinHintDisplay(q, 352);

    this.createDirectQuizButton(400, 208, 200, 66, '⌨️ Type Answer', null, () => {
      this.time.delayedCall(50, () => {
        const userInput = window.prompt("Type your answer:");
        if (userInput === null) return;
        const normalizedInput = normalizeSpeech(userInput);
        const acceptList = Array.isArray(q.ans) ? q.ans : (q.c ? [q.c] : []);
        const isCorrect = acceptList.some(answer => normalizeSpeech(answer) === normalizedInput);
        if (isCorrect) {
          if (block) block.qData = null;
          feedback.setText(`You typed: "${userInput}" — Excellent! 🎉`); feedback.setColor('#2ecc71');
          this.time.delayedCall(800, () => {
            this.clearModal(); this.isQuizActive = false;
            if (this.player.body) this.player.body.allowGravity = !this.isSuper;
            this.unfreezeEnemies();
            if (onCorrect) onCorrect();
          });
        } else {
          this.handleQuizWrongAttempt(q, feedback, hintLabel, `You typed: "${userInput}" — Check spelling & try again.`, onWrong, block);
        }
      });
    });
  }

  createDirectQuizButton(x, y, width, height, text, imageKey, onClick, depth = 353) {
    const bg = this.add.rectangle(x, y, width, height, 0x34495e).setStrokeStyle(2, 0x00d2d3, 0.9).setScrollFactor(0).setInteractive({ useHandCursor: true }).setDepth(depth);
    let img = null;
    let label = null;
    if (imageKey && text) {
      img = this.add.image(x, y - 18, imageKey).setScale(1.3).setScrollFactor(0).setDepth(depth + 1);
      label = this.add.text(x, y + 32, text, { fontSize: '16px', color: '#ffffff', align: 'center', fontWeight: 'bold' }).setOrigin(0.5).setScrollFactor(0).setDepth(depth + 1);
      this.modalElements.push(img, label);
    } else if (imageKey && !text) {
      img = this.add.image(x, y, imageKey).setScale(1.5).setScrollFactor(0).setDepth(depth + 1);
      this.modalElements.push(img);
    } else {
      label = this.add.text(x, y, text, { fontSize: '16px', color: '#ffffff', align: 'center', fontWeight: 'bold', lineSpacing: 4, wordWrap: { width: width - 20 } }).setOrigin(0.5).setScrollFactor(0).setDepth(depth + 1);
      this.modalElements.push(label);
    }
    this.modalElements.push(bg);
    const handleOver = () => { bg.fillColor = 0x485460; };
    const handleOut = () => { bg.fillColor = 0x34495e; };
    bg.on('pointerover', handleOver);
    bg.on('pointerout', handleOut);
    bg.on('pointerdown', onClick);
    if (label) {
      label.setInteractive({ useHandCursor: true });
      label.on('pointerover', handleOver);
      label.on('pointerout', handleOut);
      label.on('pointerdown', onClick);
    }
    if (img) {
      img.setInteractive({ useHandCursor: true });
      img.on('pointerover', handleOver);
      img.on('pointerout', handleOut);
      img.on('pointerdown', onClick);
    }
    return bg;
  }

  showLevelCompleteModal() {
    this.player.setVelocity(0, 0);
    this.clearModal();
    const overlay = this.add.rectangle(400, 225, 800, 450, 0x000000, 0.78).setScrollFactor(0).setInteractive().setDepth(350);
    const box = this.add.rectangle(400, 225, 480, 260, 0x1e272e).setStrokeStyle(3, 0x2ecc71, 1).setScrollFactor(0).setDepth(351);
    const title = this.add.text(400, 150, `🏆 STAGE ${this.stage} COMPLETE 🏆`, { fontSize: '22px', fontWeight: 'bold', color: '#2ecc71', align: 'center' }).setOrigin(0.5).setScrollFactor(0).setDepth(352);
    const stats = TierProgress.getTierBoxStats(this.level);
    const sub = this.add.text(400, 192, `Question Boxes Cleared in ${this.level}: ${stats.cleared} / ${stats.total}`, { fontSize: '14px', color: '#f1c40f' }).setOrigin(0.5).setScrollFactor(0).setDepth(352);
    this.modalElements.push(overlay, box, title, sub);
    sfx.stopBGM();
    sfx.startBGM(this.isBossFight);

    if (this.stage < this.maxStages) {
      this.createDirectQuizButton(290, 270, 180, 52, '⏭ Next Stage', null, () => {
        this.scene.restart({ level: this.level, skill: this.skill, avatar: this.avatar, stage: this.stage + 1, stars: this.stars });
      });
    } else {
      this.createDirectQuizButton(290, 270, 180, 52, '▶ Replay Stage', null, () => {
        this.scene.restart({ level: this.level, skill: this.skill, avatar: this.avatar, stage: this.stage, stars: this.stars });
      });
    }
    this.createDirectQuizButton(510, 270, 180, 52, '🏠 Home', null, () => { this.scene.start('MenuScene'); });
  }

  createFixedUI() {
    this.infoUI = this.add.text(20, 15, `🎯 Level: ${this.level}  |  📖 Skill: ${this.skill}  |  🚩 Stage: ${this.stage} / ${this.maxStages}`, {
      fontSize: '14px', fontWeight: 'bold', color: '#00d2d3', backgroundColor: '#1e272e', padding: { x: 10, y: 6 }
    }).setScrollFactor(0).setDepth(200);

    this.starUI = this.add.text(20, 50, `⭐ Stars: ${this.stars} / 3`, {
      fontSize: '13px', fontWeight: 'bold', color: '#f1c40f', backgroundColor: '#2c3e50', padding: { x: 8, y: 4 }
    }).setScrollFactor(0).setDepth(200);

    const bg = this.add.rectangle(710, 418, 140, 36, 0xd63031).setStrokeStyle(1.5, 0xffffff, 0.4).setScrollFactor(0).setInteractive({ useHandCursor: true }).setDepth(300);
    const text = this.add.text(710, 418, '🏠 Home / 主選單', { fontSize: '13px', color: '#ffffff', fontWeight: 'bold' }).setOrigin(0.5).setScrollFactor(0).setDepth(301);
    bg.on('pointerover', () => { bg.fillColor = 0xff7675; text.setScale(1.05); });
    bg.on('pointerout', () => { bg.fillColor = 0xd63031; text.setScale(1.0); });
    bg.on('pointerdown', () => { this.scene.start('MenuScene'); });

    this.refreshCertificateHudButton();
  }

  refreshCertificateHudButton() {
    if (this.certHudBtn) {
      this.certHudBtn.destroy();
      this.certHudBtn = null;
    }
    if (!TierProgress.unlockedCertificates[this.level]) return;

    const container = this.add.container(530, 418).setScrollFactor(0).setDepth(300);
    const bg = this.add.rectangle(0, 0, 195, 36, 0xd35400)
      .setStrokeStyle(2, 0xf1c40f, 1)
      .setInteractive({ useHandCursor: true });
    const txt = this.add.text(0, 0, `🏅 Claim ${this.level} Certificate`, {
      fontSize: '13px', color: '#ffffff', fontWeight: 'bold'
    }).setOrigin(0.5);

    container.add([bg, txt]);
    bg.on('pointerover', () => { bg.fillColor = 0xe67e22; container.setScale(1.04); });
    bg.on('pointerout', () => { bg.fillColor = 0xd35400; container.setScale(1.0); });
    bg.on('pointerdown', () => {
      CertificateManager.openModal(this.level, this.skill);
    });
    this.certHudBtn = container;
  }

  updateFixedUIStars() {
    if (this.starUI) {
      this.starUI.setText(`⭐ Stars: ${this.stars} / 3`);
    }
  }

  // ===================================================
  // SMARTER BOSS AI & ATTACK PATTERNS (CRAB, SNAKE, TURTLE)
  // ===================================================
updateBossAI(time, delta) {
    if (!this.boss || !this.boss.active || !this.bossActive || this.bossHp <= 0 || this.bossIsComplimenting) return;

    // Safety floor clamp: prevents any boss from ever clipping through the arena floor (y = 400)
    const maxGroundY = this.bossType === 'crab' ? 352 : (this.bossType === 'snake' ? 358 : 356);
    if (this.boss.y > maxGroundY) {
      this.boss.y = maxGroundY;
      if (this.boss.body.velocity.y > 0) {
        this.boss.setVelocityY(0);
      }
    }

    const isGrounded = this.boss.body.blocked.down || this.boss.body.touching.down || this.boss.y >= maxGroundY - 2;
    this.bossStateTimer += delta;

    // ---------------------------------------------------
    // 1. CRAB BOSS AI: Tracking Dashes, Overhead Pincer-Slam & Pincer Animation
    // ---------------------------------------------------
    if (this.bossType === 'crab') {
      this.bossPincerTimer += delta;
      if (this.bossPincerTimer >= 260) {
        this.bossPincerTimer = 0;
        this.bossPincerOpen = !this.bossPincerOpen;
        this.boss.setTexture(this.bossPincerOpen ? 'tex_boss_crab' : 'tex_boss_crab_snap');
      }

      if (this.bossState === 'burrow') return;

      if (this.bossState === 'patrol') {
        const rageMult = this.bossHp === 1 ? 1.3 : 1.0;
        const trackDir = this.player.x < this.boss.x ? -1 : 1;
        this.boss.setVelocityX(trackDir * 145 * rageMult);
        this.boss.setFlipX(trackDir > 0);

        if (this.bossStateTimer >= (this.bossHp === 1 ? 1600 : 2200) && isGrounded) {
          this.bossStateTimer = 0;
          this.bossState = Math.random() < 0.5 ? 'dash_windup' : 'slam_leap';

          if (this.bossState === 'dash_windup') {
            this.boss.setVelocityX(0);
            this.boss.setTint(0xff7675);
          } else if (this.bossState === 'slam_leap') {
            this.boss.setTint(0xf39c12);
            const jumpVx = Phaser.Math.Clamp((this.player.x - this.boss.x) * 1.4, -320, 320);
            this.boss.setVelocity(jumpVx, -460);
          }
        }
      }
      else if (this.bossState === 'dash_windup') {
        if (this.bossStateTimer >= 350) {
          this.bossState = 'dash';
          this.bossStateTimer = 0;
          const dashDir = this.player.x < this.boss.x ? -1 : 1;
          this.boss.setFlipX(dashDir > 0);
          this.boss.setVelocityX(dashDir * (this.bossHp === 1 ? 430 : 360));
        }
      }
      else if (this.bossState === 'dash') {
        if (this.boss.x <= this.boss.arenaLeft || this.boss.x >= this.boss.arenaRight || this.bossStateTimer >= 750) {
          this.boss.clearTint();
          this.bossState = 'patrol';
          this.bossStateTimer = 0;
        }
      }
      else if (this.bossState === 'slam_leap') {
        if (this.boss.body.velocity.y >= -40 || Math.abs(this.boss.x - this.player.x) < 28) {
          this.bossState = 'slam_drop';
          this.bossStateTimer = 0;
          this.boss.setVelocity(0, 540);
          this.boss.setTexture('tex_boss_crab_snap');
        }
      }
      else if (this.bossState === 'slam_drop') {
        if (isGrounded) {
          this.boss.clearTint();
          this.cameras.main.shake(180, 0.01);
          sfx.playHit();
          this.spawnImpactDebris(this.boss.x, this.boss.y + 16, 2);
          this.bossState = 'patrol';
          this.bossStateTimer = 0;
        }
      }
    }

    // ---------------------------------------------------
    // 2. SNAKE BOSS AI: Smooth Slithering, Defensive Coil & Aimed Venom / Lunge
    // ---------------------------------------------------
    else if (this.bossType === 'snake') {
      if (typeof this.boss.moveDir !== 'number') {
        this.boss.moveDir = -1; // -1 = left, 1 = right
      }

      if (this.bossState === 'patrol') {
        if (this.boss.x <= this.boss.arenaLeft + 10 || this.boss.body.blocked.left) {
          this.boss.moveDir = 1;
        } else if (this.boss.x >= this.boss.arenaRight - 10 || this.boss.body.blocked.right) {
          this.boss.moveDir = -1;
        }

        // Smooth slithering speed without physics body resizing
        const baseSpeed = this.bossHp === 1 ? 225 : 175;
        const slitherWave = Math.sin(time * 0.006) * 45;
        const currentSpeed = baseSpeed + slitherWave;

        this.boss.setVelocityX(this.boss.moveDir * currentSpeed);
        // tex_snake is drawn facing RIGHT, so flipX is true when moving LEFT (-1)
        this.boss.setFlipX(this.boss.moveDir < 0);

        if (this.bossStateTimer >= (this.bossHp === 1 ? 1800 : 2500) && isGrounded) {
          this.bossState = 'coil';
          this.bossStateTimer = 0;
          this.boss.setVelocityX(0);
          this.boss.setTint(0x00d2d3);
        }
      }
      else if (this.bossState === 'coil') {
        this.boss.setVelocityX(0);
        // Face toward the player while coiling
        const playerToLeft = this.player.x < this.boss.x;
        this.boss.setFlipX(playerToLeft);

        if (this.bossStateTimer >= 650) {
          this.boss.clearTint();
          this.boss.moveDir = playerToLeft ? -1 : 1;

          // Shoot aimed venom beam or perform a low horizontal strike lunge
          if (Math.random() < 0.65 || this.bossHp === 1) {
            this.fireAimedSnakeVenom();
            this.bossState = 'patrol';
            this.bossStateTimer = 0;
          } else {
            this.bossState = 'lunge';
            this.bossStateTimer = 0;
            this.boss.setVelocity(this.boss.moveDir * 390, -210);
          }
        }
      }
      else if (this.bossState === 'lunge') {
        if (this.boss.x <= this.boss.arenaLeft + 10) {
          this.boss.moveDir = 1;
          this.boss.setVelocityX(220);
        } else if (this.boss.x >= this.boss.arenaRight - 10) {
          this.boss.moveDir = -1;
          this.boss.setVelocityX(-220);
        }

        if (this.bossStateTimer >= 550 && isGrounded) {
          this.bossState = 'patrol';
          this.bossStateTimer = 0;
        }
      }
    }

    // ---------------------------------------------------
    // 3. TURTLE BOSS AI: Shell-Tuck Spin Charge, Targeted Arc Hop & Impact Spikes/Debris
    // ---------------------------------------------------
    else if (this.bossType === 'turtle') {
      if (this.bossState === 'patrol') {
        const speed = this.bossHp === 3 ? 185 : (this.bossHp === 2 ? 225 : 260);
        if (this.boss.x <= this.boss.arenaLeft || this.boss.body.blocked.left) {
          this.boss.setFlipX(true);
        } else if (this.boss.x >= this.boss.arenaRight || this.boss.body.blocked.right) {
          this.boss.setFlipX(false);
        }
        this.boss.setVelocityX(this.boss.flipX ? speed : -speed);

        if (this.bossStateTimer >= (this.bossHp === 1 ? 1500 : 2100) && isGrounded) {
          this.bossStateTimer = 0;
          if (Math.random() < 0.5) {
            this.bossState = 'spin_charge';
            this.boss.setTint(0x9b59b6);
            const chargeDir = this.player.x < this.boss.x ? -1 : 1;
            this.boss.setFlipX(chargeDir > 0);
            this.boss.setVelocityX(chargeDir * 430);
          } else {
            this.bossState = 'arc_hop';
            this.bossWasAirborne = false;
            const hopVx = Phaser.Math.Clamp((this.player.x - this.boss.x) * 1.25, -340, 340);
            this.boss.setFlipX(hopVx > 0);
            this.boss.setVelocity(hopVx, -430);
          }
        }
      }
      else if (this.bossState === 'spin_charge') {
        this.boss.angle += 24;
        if (this.boss.x <= this.boss.arenaLeft) {
          this.boss.setVelocityX(430);
          this.boss.setFlipX(true);
        } else if (this.boss.x >= this.boss.arenaRight) {
          this.boss.setVelocityX(-430);
          this.boss.setFlipX(false);
        }

        if (this.bossStateTimer >= 1150) {
          this.boss.angle = 0;
          this.boss.clearTint();
          this.bossState = 'patrol';
          this.bossStateTimer = 0;
        }
      }
      else if (this.bossState === 'arc_hop') {
        if (!isGrounded) {
          this.bossWasAirborne = true;
        } else if (this.bossWasAirborne && isGrounded) {
          this.bossWasAirborne = false;
          this.cameras.main.shake(160, 0.009);
          sfx.playHit();
          this.spawnImpactDebris(this.boss.x, this.boss.y + 16, this.bossHp === 1 ? 4 : 2);

          if (this.bossHp === 1) {
            this.fireTargetedTurtleFireball();
          }
          this.bossState = 'patrol';
          this.bossStateTimer = 0;
        }
      }
    }
  }

  fireAimedSnakeVenom() {
    if (!this.boss || !this.player) return;
    const playerToLeft = this.player.x < this.boss.x;
    this.boss.setFlipX(playerToLeft);
    const spawnX = this.boss.x + (playerToLeft ? -55 : 55);
    const spawnY = this.boss.y - 10;

    const beam = this.bossProjectiles.create(spawnX, spawnY, 'tex_snake_beam');
    sfx.playSnakeBeam();
    beam.body.allowGravity = false;

    const angle = Phaser.Math.Angle.Between(spawnX, spawnY, this.player.x, this.player.y);
    const speed = 410;
    beam.setRotation(angle);
    beam.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);

    this.time.delayedCall(3000, () => {
      if (beam && beam.active) beam.destroy();
    });
  }

  fireTargetedTurtleFireball() {
    if (!this.boss || !this.player) return;
    const isFacingRight = this.player.x > this.boss.x;
    const spawnX = this.boss.x + (isFacingRight ? 35 : -35);
    const spawnY = this.boss.y + 5;

    const fb = this.bossProjectiles.create(spawnX, spawnY, 'tex_turtle_fb');
    fb.body.allowGravity = false;
    const angle = Phaser.Math.Angle.Between(spawnX, spawnY, this.player.x, this.player.y);
    fb.setVelocity(Math.cos(angle) * 350, Math.sin(angle) * 350);

    this.time.delayedCall(3200, () => {
      if (fb && fb.active) fb.destroy();
    });
  }

  update(time, delta) {
    if (this.isQuizActive || this.levelCompleted) {
      this.player.setVelocityX(0);
      if (!this.isSuper) this.player.setVelocityY(0);
      this.crabs.getChildren().forEach(c => { if (c.body) c.setVelocityX(0); });
      if (this.boss && this.boss.body) { this.boss.setVelocityX(0); this.boss.setVelocityY(0); }
      return;
    }

    // --- SUPER FLIGHT & AURA ---
    if (this.isSuper) {
      this.renderSuperAura();

      const flySpeed = 260;
      let vx = 0;
      let vy = 0;

      if (this.cursors.left.isDown || this.wasd.left.isDown) { vx = -flySpeed; this.player.setFlipX(true); }
      else if (this.cursors.right.isDown || this.wasd.right.isDown) { vx = flySpeed; this.player.setFlipX(false); }

      if (this.cursors.up.isDown || this.wasd.up.isDown) { vy = -flySpeed; }
      else if (this.cursors.down.isDown || this.wasd.down.isDown) { vy = flySpeed; }

      this.player.setVelocity(vx, vy);

      if (this.player.y < 25) this.player.y = 25;
      if (this.player.y > 410) this.player.y = 410;
      return;
    }

    // --- UPDATE SMARTER BOSS AI ---
    this.updateBossAI(time, delta);

    if (this.player.y < 10) {
      this.player.y = 10;
      if (this.player.body.velocity.y < 0) {
        this.player.setVelocityY(0);
      }
    }

    const onWallLeft = (this.player.body.blocked.left || this.player.body.touching.left);
    const onWallRight = (this.player.body.blocked.right || this.player.body.touching.right);
    const onGround = (this.player.body.blocked.down || this.player.body.touching.down);

    // Reset lastWallSide tracker whenever player touches the ground
    if (onGround) {
      this.lastWallSide = null;
      this.wallJumpTimer = 0;
    }

    // Smooth top-ledge clearance assist: if player is near the top edge of a crate while jumping up, nudge them cleanly over
    if ((onWallLeft || onWallRight) && !onGround && this.player.body.velocity.y < 0) {
      const playerBottom = this.player.body.bottom;
      this.crates.getChildren().forEach((crate) => {
        if (crate.body && crate.body.checkCollision.up) {
          const crateTop = crate.body.top;
          const horizDist = Math.abs(this.player.x - crate.x);
          if (horizDist < 42 && playerBottom > crateTop && playerBottom - crateTop <= 14) {
            this.player.y = crateTop - (this.player.body.height / 2) - 2;
          }
        }
      });
    }

    // Wall slide friction (only when falling downward and actively pressing toward the wall)
    const pressingLeft = this.cursors.left.isDown || this.wasd.left.isDown;
    const pressingRight = this.cursors.right.isDown || this.wasd.right.isDown;
    if (!onGround && this.player.body.velocity.y > 0) {
      if ((onWallLeft && pressingLeft) || (onWallRight && pressingRight)) {
        this.player.setVelocityY(Math.min(this.player.body.velocity.y, 95));
      }
    }

    // --- STAGE 1 SOFT POP-UPS PROXIMITY UPDATE ---
    if (this.softPopups && this.softPopups.length > 0) {
      this.softPopups.forEach((p) => {
        const dist = Math.abs(this.player.x - p.triggerX);
        if (dist < 230 && !p.shown) {
          p.shown = true;
          this.tweens.add({ targets: p.container, alpha: 1, duration: 280, ease: 'Quad.easeOut' });
        } else if (dist >= 270 && p.shown) {
          p.shown = false;
          this.tweens.add({ targets: p.container, alpha: 0, duration: 240, ease: 'Quad.easeIn' });
        }
      });
    }

    // --- SMOOTH WALL JUMPING & BOX DISMOUNT (NO STICKING) ---
    const jumpJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.up) || Phaser.Input.Keyboard.JustDown(this.wasd.up);
    if (jumpJustPressed && !this.player.isLaunched) {
      if (onGround) {
        this.player.setVelocityY(-400);
        this.lastWallSide = null;
        sfx.playJump();
      } else if (onWallLeft) {
        if (this.lastWallSide !== 'left') {
          // Full wall kick off Left Wall
          this.lastWallSide = 'left';
          this.player.setVelocityY(-395);
          this.player.setVelocityX(285);
          this.player.setFlipX(false);
          this.wallJumpTimer = 135;
          sfx.playJump();
        } else {
          // Clean push-off hop so the player never sticks to the upper boxes
          this.player.setVelocityY(-290);
          this.player.setVelocityX(240);
          this.player.setFlipX(false);
          this.wallJumpTimer = 110;
          sfx.playJump();
        }
      } else if (onWallRight) {
        if (this.lastWallSide !== 'right') {
          // Full wall kick off Right Wall
          this.lastWallSide = 'right';
          this.player.setVelocityY(-395);
          this.player.setVelocityX(-285);
          this.player.setFlipX(true);
          this.wallJumpTimer = 135;
          sfx.playJump();
        } else {
          // Clean push-off hop so the player never sticks to the upper boxes
          this.player.setVelocityY(-290);
          this.player.setVelocityX(-240);
          this.player.setFlipX(true);
          this.wallJumpTimer = 110;
          sfx.playJump();
        }
      }
    }

    // --- DOUBLE-TAP OR SHIFT DASH DETECTION ---
    const leftJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.left) || Phaser.Input.Keyboard.JustDown(this.wasd.left);
    const rightJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.right) || Phaser.Input.Keyboard.JustDown(this.wasd.right);
    const shiftJustPressed = Phaser.Input.Keyboard.JustDown(this.wasd.shift);

    const startDash = (dir) => {
      this.dashDir = dir;
      this.dashTimer = 190;
      this.dashGhostTimer = 0;
      this.player.setFlipX(dir < 0);
      sfx.playDash();
    };

    if (!this.player.isLaunched && this.wallJumpTimer <= 0) {
      if (leftJustPressed) {
        if (time - this.lastTapLeftTime < 280) {
          startDash(-1);
          this.lastTapLeftTime = 0;
        } else {
          this.lastTapLeftTime = time;
        }
      }
      if (rightJustPressed) {
        if (time - this.lastTapRightTime < 280) {
          startDash(1);
          this.lastTapRightTime = 0;
        } else {
          this.lastTapRightTime = time;
        }
      }
      if (shiftJustPressed && this.dashTimer <= 0) {
        const currentDir = (this.cursors.left.isDown || this.wasd.left.isDown)
          ? -1
          : ((this.cursors.right.isDown || this.wasd.right.isDown) ? 1 : (this.player.flipX ? -1 : 1));
        startDash(currentDir);
      }
    }

    // --- HORIZONTAL MOVEMENT, DASH BOOST & FEET ANIMATION ---
    if (!this.player.isLaunched) {
      if (this.wallJumpTimer > 0) {
        this.wallJumpTimer -= delta;
      } else if (this.dashTimer > 0) {
        this.dashTimer -= delta;
        this.dashGhostTimer += delta;
        this.player.setVelocityX(this.dashDir * 420);

        if (this.dashGhostTimer >= 42) {
          this.dashGhostTimer = 0;
          const ghost = this.add.image(this.player.x, this.player.y, this.player.texture.key)
            .setScale(this.player.scaleX, this.player.scaleY)
            .setFlipX(this.player.flipX)
            .setAlpha(0.42)
            .setTint(0x00d2d3);
          this.tweens.add({
            targets: ghost,
            alpha: 0,
            duration: 180,
            onComplete: () => ghost.destroy()
          });
        }
      } else {
        const moveSpeed = 235;
        if (this.cursors.left.isDown || this.wasd.left.isDown) {
          this.player.setVelocityX(-moveSpeed);
          this.player.setFlipX(true);
        } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
          this.player.setVelocityX(moveSpeed);
          this.player.setFlipX(false);
        } else {
          this.player.setVelocityX(0);
        }
      }
    }

    // --- LIVELY FEET ANIMATION & RUNNING TILT ---
    const isMovingHorizontally = Math.abs(this.player.body.velocity.x) > 15;
    const walkAnimKey = `walk_${this.avatar}`;
    if (!onGround) {
      if (this.player.anims.isPlaying) this.player.anims.stop();
      this.player.setTexture(`tex_${this.avatar}_walk1`);
      this.player.setAngle(this.player.flipX ? -5 : 5);
    } else if (isMovingHorizontally) {
      if (!this.player.anims.isPlaying || this.player.anims.currentAnim.key !== walkAnimKey) {
        this.player.play(walkAnimKey, true);
      }
      const leanAngle = this.dashTimer > 0 ? 10 : 4;
      this.player.setAngle(this.player.flipX ? -leanAngle : leanAngle);
    } else {
      if (this.player.anims.isPlaying) this.player.anims.stop();
      this.player.setTexture(`tex_${this.avatar}`);
      this.player.setAngle(0);
    }

    if (this.player.y > 430) this.resetPlayer();
  }
}

// ===================================================
// 4. ENGINE CONFIGURATION
// ===================================================
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  parent: document.body,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 700 },
      debug: false
    }
  },
  scene: [MenuScene, GameScene]
};

new Phaser.Game(config);
