class Gameplay extends Phaser.Scene {
  constructor() {
    super("gameplay");
    this.speed = 2;
    this.isFullScreen = true;
  }

  preload() {
    this.load.path = "./assets/";
    this.load.image("enoki", "riley.png");
    this.load.image("matsutake", "matsutake.png");
    this.load.image("player2", "player2.png");
    this.load.image("player3", "player3.png");
    this.load.image("player4", "player4.png");
    this.load.image("player5", "player5.png");
    this.load.image("chest", "chest.png");
    this.load.image("layla", "layla.png");
    this.load.image("ship", "ship.png");
    this.load.image("hiccup", "hiccup.jpg");
    this.load.image("key", "key.png");
    this.load.image("james", "james_clement.png");
    this.load.image("syd", "syd.png");
    this.load.image("bowser", "bowser.jpg");
    this.load.image("finn", "finn.jpg");
    this.load.image("love", "love.png");
    this.load.image("bob", "enoki.png");
    this.load.image("rock", "rock.png");

    // joystick
    let url =
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js";
    this.load.plugin("rexvirtualjoystickplugin", url, true);
  }

  onPlayerChestOverlap(player, chest) {
    // Change this to the name of your "note" scene
    if (key == true) {
      this.scene.start("note");
    } else {
      this.hintText.setVisible(true);
    }
    this.time.delayedCall(2000, () => {
      this.hintText.setVisible(false); // Remove the text object
    });
  }

  onPlayerLaylaOverlap(player, chest) {
    // Change this to the name of your "note" scene
    this.laylaText.setVisible(true);
    this.time.delayedCall(2000, () => {
      this.laylaText.setVisible(false); // Remove the text object
    });
  }

  onPlayerMonkeyOverlap(player, chest) {
    // Change this to the name of your "note" scene
    this.monkeyText.setVisible(true);
    this.time.delayedCall(2000, () => {
      this.monkeyText.setVisible(false); // Remove the text object
    });
  }

  onPlayerFinnOverlap(player, chest) {
    // Change this to the name of your "note" scene
    this.finnText.setVisible(true);
    this.time.delayedCall(2000, () => {
      this.finnText.setVisible(false); // Remove the text object
    });
  }

  onPlayerBobOverlap(player, chest) {
    // Change this to the name of your "note" scene
    this.bobText.setVisible(true);
    this.time.delayedCall(2000, () => {
      this.bobText.setVisible(false); // Remove the text object
    });
  }

  onPlayerBowserOverlap(player, chest) {
    // Change this to the name of your "note" scene
    this.bowserText.setVisible(true);
    this.time.delayedCall(2000, () => {
      this.bowserText.setVisible(false); // Remove the text object
    });
  }

  onPlayerJamesOverlap(player, chest) {
    // Change this to the name of your "note" scene
    this.jamesText.setVisible(true);
    this.time.delayedCall(2000, () => {
      this.jamesText.setVisible(false); // Remove the text object
    });
  }

  onPlayerShipOverlap(player, chest) {
    // Change this to the name of your "note" scene
    this.spaceText.setVisible(true);
    this.time.delayedCall(2000, () => {
      this.spaceText.setVisible(false); // Remove the text object
    });
  }

  onPlayerLoveOverlap(player, chest) {
    // Change this to the name of your "note" scene
    this.loveText.setVisible(true);
    this.time.delayedCall(2000, () => {
      this.loveText.setVisible(false); // Remove the text object
    });
  }

  onPlayerHiccupOverlap(player, chest) {
    // Change this to the name of your "note" scene
    this.hiccupText.setVisible(true);
    this.time.delayedCall(2000, () => {
      this.hiccupText.setVisible(false); // Remove the text object
    });
  }

  onPlayerKeyOverlap(player, key2) {
    // Change this to the name of your "note" scene
    key = true;
    key2.setVisible(false);
  }

  spawnRockWithinView() {
    this.halfScreenWidth = this.cameras.main.width / 2;
    this.halfScreenHeight = this.cameras.main.height / 2;

    const spawnX = Phaser.Math.Between(
      this.cameras.main.scrollX - this.halfScreenWidth,
      this.cameras.main.scrollX + this.halfScreenWidth
    );
    const spawnY = Phaser.Math.Between(
      this.cameras.main.scrollY - this.halfScreenHeight,
      this.cameras.main.scrollY + this.halfScreenHeight
    );

    const rock = rocks.create(spawnX, spawnY, "rock");
    rock.setCollideWorldBounds(true);
    rock.setBounce(1);
    rock.setScale(3);
    rock.body.setImmovable(true);

    rock.setVelocity(0, 0);
  }

  resetRock(rock) {
    if (startingGame) {
      rock.x = Phaser.Math.Between(
        player.x - this.halfScreenWidth,
        player.x + this.halfScreenWidth
      );
      rock.y = Phaser.Math.Between(
        player.y - this.halfScreenHeight,
        player.y + this.halfScreenHeight
      );
    } else {
      if (right) {
        rock.x = Phaser.Math.Between(
          player.x + this.halfScreenWidth,
          player.x + this.halfScreenWidth - 50
        );
        rock.y = Phaser.Math.Between(
          player.y - this.halfScreenHeight,
          player.y + this.halfScreenHeight
        );
      } else if (left) {
        rock.x = Phaser.Math.Between(
          player.x - this.halfScreenWidth,
          player.x - this.halfScreenWidth + 50
        );
        rock.y = Phaser.Math.Between(
          player.y - this.halfScreenHeight,
          player.y + this.halfScreenHeight
        );
      } else if (up) {
        rock.x = Phaser.Math.Between(
          player.x - this.halfScreenWidth,
          player.x + this.halfScreenWidth
        );
        rock.y = Phaser.Math.Between(
          player.y - this.halfScreenHeight,
          player.y - this.halfScreenHeight - 50
        );
      } else if (down) {
        rock.x = Phaser.Math.Between(
          player.x - this.halfScreenWidth,
          player.x + this.halfScreenWidth
        );
        rock.y = Phaser.Math.Between(
          player.y + this.halfScreenHeight + 50,
          player.y + this.halfScreenHeight
        );
      }
    }
  }

  toggleFullScreen() {
    if (this.scale.isFullscreen) {
      this.scale.stopFullscreen();
    } else {
      this.scale.startFullscreen();
    }
    this.isFullScreen = !this.isFullScreen;
  }

  create() {
    this.cameras.main.setBackgroundColor("#466d1d");
    cursors = this.input.keyboard.createCursorKeys();

    this.polylineGraphics = this.add.graphics({
      lineStyle: { width: 5, color: 0xff0000 },
    });

    this.playerPath = [];

    this.fullscreenButton = this.add.text(
      this.cameras.main.width - 20,
      20,
      "Fullscreen",
      {
        fontSize: "16px",
        fill: "#fff",
      }
    );

    this.hintText = this.add
      .text(this.cameras.main.width - 500, 300, "Its locked", {
        fontSize: "50px",
        fill: "#fff",
      })
      .setScrollFactor(0)
      .setVisible(false);

    this.laylaText = this.add
      .text(this.cameras.main.width - 650, 300, "I AM THE GREAT LAYLA\nAN AGELESS BEING\nFROM SPACE", {
        fontSize: "50px",
        fill: "#fff",
      })
      .setScrollFactor(0)
      .setVisible(false);

    this.bobText = this.add
      .text(this.cameras.main.width - 950, 300, "i saw some treasure south from here", {
        fontSize: "30px",
        fill: "#fff",
      })
      .setScrollFactor(0)
      .setVisible(false);

    this.finnText = this.add
      .text(this.cameras.main.width - 950, 300, "IM A BUFF BABY THAT CAN DANCE LIKE A MAN", {
        fontSize: "30px",
        fill: "#fff",
      })
      .setScrollFactor(0)
      .setVisible(false);

    this.bowserText = this.add
      .text(this.cameras.main.width - 950, 300, "IM MOVIN TO THE COUNTRY, \nGONNA B EATIN ME A LOT A PEACHES\n(left a love note around\ny 5000)", {
        fontSize: "40px",
        fill: "#fff",
      })
      .setScrollFactor(0)
      .setVisible(false);

    this.jamesText = this.add
      .text(this.cameras.main.width - 950, 300, "James from survivor? - you\nI saw a weird mushroom\nman around 4000 y - James from Survivor", {
        fontSize: "30px",
        fill: "#fff",
      })
      .setScrollFactor(0)
      .setVisible(false);

    this.monkeyText = this.add
      .text(this.cameras.main.width - 850, 300, "monkey attack", {
        fontSize: "80px",
        fill: "#fff",
      })
      .setScrollFactor(0)
      .setVisible(false);

    this.loveText = this.add
      .text(this.cameras.main.width - 850, 700, "Key is around 3000 x or y", {
        fontSize: "30px",
        fill: "#fff",
      })
      .setScrollFactor(0)
      .setVisible(false);

    this.spaceText = this.add
      .text(this.cameras.main.width - 850, 300, "hooligans", {
        fontSize: "40px",
        fill: "#fff",
      })
      .setScrollFactor(0)
      .setVisible(false);

    this.hiccupText = this.add
      .text(this.cameras.main.width - 850, 300, "hiccup?\nDoNt MiNd mE\nJuSt LoOkInG 4 DrAgOns\nNoT TrEaSuRe (saw a \ndragon near 2000 y)", {
        fontSize: "40px",
        fill: "#fff",
      })
      .setScrollFactor(0)
      .setVisible(false);

    const screenWidth = this.cameras.main.width;
    const screenHeight = this.cameras.main.height;

    this.playerCoordsText1 = this.add
      .text(this.cameras.main.width - 300, 50, "FullScreen", {
        fontSize: "20px",
        fill: "#fff",
      })
      .setScrollFactor(0);
    this.playerCoordsText1.setScale(1.4);
    this.playerCoordsText1.setInteractive();
    this.playerCoordsText1.on(
      "pointerdown",
      () => this.toggleFullScreen(),
      this
    );

    this.playerCoordsText = this.add
      .text(20, 50, "Player Coordinates: 0, 0", {
        fontSize: "16px",
        fill: "#fff",
      })
      .setScrollFactor(0);
    this.playerCoordsText.setScale(1.4);

    this.worldWidth = 10000;
    this.worldHeight = 10000;

    this.chest = this.physics.add
      .sprite(9000, 9000, "chest")
      .setScale(4)
      .setDepth(2);

    this.ship = this.physics.add
      .sprite(5000, 8000, "ship")
      .setScale(5)
      .setDepth(2);

    this.love = this.physics.add
      .sprite(2000, 5000, "love")
      .setScale(2.5)
      .setDepth(2);

    this.james = this.physics.add
      .sprite(5000, 6000, "james")
      .setScale(4)
      .setDepth(2);

    this.finn = this.physics.add
      .sprite(8246, 734, "finn")
      .setScale(.5)
      .setDepth(2);

    this.hiccup = this.physics.add
      .sprite(4000, 5000, "hiccup")
      .setScale(.5)
      .setDepth(2);

    this.bowser = this.physics.add
      .sprite(6000, 2000, "bowser")
      .setScale(2)
      .setDepth(2);

    this.enoki = this.physics.add
      .sprite(8000, 4000, "bob")
      .setScale(5)
      .setDepth(2);

    this.keySprite = this.physics.add
      .sprite(3000, 3000, "key")
      .setScale(4)
      .setDepth(2);

    this.layla = this.physics.add
      .sprite(3000, 8000, "layla")
      .setScale(20)
      .setDepth(2);

    this.physics.world.setBounds(0, 0, this.worldWidth, this.worldHeight);

    player = this.physics.add
      .sprite(5000, 5000, 'syd')
      .setScale(4)
      .setDepth(2);
    enemyEnoki = this.physics.add
      .sprite(5500, 5500, "enoki")
      .setScale(4)
      .setDepth(2);

    this.physics.add.overlap(
      player,
      this.chest,
      this.onPlayerChestOverlap,
      null,
      this
    );

    this.physics.add.overlap(
      player,
      this.enoki,
      this.onPlayerBobOverlap,
      null,
      this
    );

    this.physics.add.overlap(
      player,
      this.hiccup,
      this.onPlayerHiccupOverlap,
      null,
      this
    );

    this.physics.add.overlap(
      player,
      this.layla,
      this.onPlayerLaylaOverlap,
      null,
      this
    );

    this.physics.add.overlap(
      player,
      this.bowser,
      this.onPlayerBowserOverlap,
      null,
      this
    );

    this.physics.add.overlap(
      player,
      this.james,
      this.onPlayerJamesOverlap,
      null,
      this
    );

    this.physics.add.overlap(
      player,
      this.keySprite,
      this.onPlayerKeyOverlap,
      null,
      this
    );

    this.physics.add.overlap(
      player,
      this.love,
      this.onPlayerLoveOverlap,
      null,
      this
    );

    this.physics.add.overlap(
      player,
      this.finn,
      this.onPlayerFinnOverlap,
      null,
      this
    );

    this.physics.add.overlap(
      player,
      this.ship,
      this.onPlayerShipOverlap,
      null,
      this
    );

    this.physics.add.overlap(
      player,
      enemyEnoki,
      this.onPlayerMonkeyOverlap,
      null,
      this
    );

    this.cameras.main.setBounds(0, 0, this.worldWidth, this.worldHeight);
    this.cameras.main.startFollow(player);

    rocks = this.physics.add.group();
    this.spawnRockWithinView();

    this.physics.add.collider(rocks, player);
    this.physics.add.collider(rocks, enemyEnoki);

    // joystick
    // this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
    //   x: 200,
    //   y: 800,
    //   radius: 100,
    //   base: this.add.circle(0, 0, 100, 0x888888),
    //   thumb: this.add.circle(0, 0, 30, 0xcccccc),
    // });
    this.joyStick = this.plugins.get("rexvirtualjoystickplugin").add(this, {
      x: screenWidth / 5,
      y: screenHeight / 1.1,
      radius: screenWidth / 10,
      base: this.add.circle(0, 0, screenWidth / 10, 0x888888),
      thumb: this.add.circle(0, 0, screenWidth / 30, 0xcccccc),
    });

    this.joystickCursors = this.joyStick.createCursorKeys();

    //enemyEnoki = this.physics.add.sprite(5500,5500,'enoki').setScale(3).setDepth(2);
    // this.time = Date.now();

    // this.timerText = this.add.text(20, 20, 'Time: 0', {
    //   fontSize: '24px',
    //   fill: '#fff'
    // }).setScrollFactor(0); // Make the text stationary when the camera moves

    // // ... (existing code)

    // this.startTime = this.time.now;
  }

  update() {

            // Add the current player position to the path
    this.playerPath.push({ x: player.x, y: player.y });

    // Draw the entire polyline based on the player's path
    this.polylineGraphics.clear();
    this.polylineGraphics.beginPath();

    if (this.playerPath.length > 1) {
      this.polylineGraphics.moveTo(this.playerPath[0].x, this.playerPath[0].y);

      for (let i = 1; i < this.playerPath.length; i++) {
        this.polylineGraphics.lineTo(
          this.playerPath[i].x,
          this.playerPath[i].y
        );
      }
    }

    this.polylineGraphics.strokePath();

    this.playerCoordsText.setText(
      `Player Coordinates: ${Math.floor(player.x)}, ${Math.floor(player.y)}`
    );

    if (cursors.left.isDown) {
      player.body.setVelocityX(-250);
      player.body.setVelocityY(0);
      left = true;
      right = false;
      up = false;
      down = false;
    } else if (cursors.right.isDown) {
      player.body.setVelocityX(250);
      player.body.setVelocityY(0);
      left = false;
      right = true;
      up = false;
      down = false;
    } else if (cursors.up.isDown) {
      player.body.setVelocityY(-250);
      player.body.setVelocityX(0);
      left = false;
      right = false;
      up = true;
      down = false;
    } else if (cursors.down.isDown) {
      player.body.setVelocityY(250);
      player.body.setVelocityX(0);
      left = false;
      right = false;
      up = false;
      down = true;
    } else {
      player.body.setVelocityY(0);
      player.body.setVelocityX(0);
      // left = false;
      // right = false;
      // up = false;
      // down = false;

      if (this.joystickCursors.left.isDown) {
        player.body.setVelocityX(-250);
        player.body.setVelocityY(0);
        left = true;
        right = false;
        up = false;
        down = false;
      } else if (this.joystickCursors.right.isDown) {
        player.body.setVelocityX(250);
        player.body.setVelocityY(0);
        left = false;
        right = true;
        up = false;
        down = false;
      } else if (this.joystickCursors.up.isDown) {
        player.body.setVelocityY(-250);
        player.body.setVelocityX(0);
        left = false;
        right = false;
        up = true;
        down = false;
      } else if (this.joystickCursors.down.isDown) {
        player.body.setVelocityY(250);
        player.body.setVelocityX(0);
        left = false;
        right = false;
        up = false;
        down = true;
      } else {
        player.body.setVelocityY(0);
        player.body.setVelocityX(0);
        // left = false;
        // right = false;
        // up = false;
        // down = false;
      }

      // if (this.physics.overlap(player, enemyEnoki)) {
      //   console.log("Collision detected");
      //   this.scene.start("gameOver")
      //   // Handle collision behavior here, like game over or any other actions
      //   // this.scene.start("gameOver");
      // }
    }

    rocks.children.iterate(function (rock) {
      const cameraLeftBound = this.cameras.main.scrollX;
      const cameraRightBound =
        this.cameras.main.scrollX + this.cameras.main.width;
      const cameraTopBound = this.cameras.main.scrollY;
      const cameraBottomBound =
        this.cameras.main.scrollY + this.cameras.main.height;

      if (
        rock.getBounds().right < cameraLeftBound ||
        rock.getBounds().left > cameraRightBound ||
        rock.getBounds().bottom < cameraTopBound ||
        rock.getBounds().top > cameraBottomBound
      ) {
        this.resetRock(rock);
      }
    }, this);

    if (rocks.countActive() < 10) {
      this.spawnRockWithinView();
    }
    // Calculate the angle between the enemy and the player
    const angle = Phaser.Math.Angle.Between(
      enemyEnoki.x,
      enemyEnoki.y,
      player.x,
      player.y
    );

    // Set the velocity based on the angle
    enemyEnoki.setVelocityX(Math.cos(angle) * this.speed * 60);
    enemyEnoki.setVelocityY(Math.sin(angle) * this.speed * 60);

    // const currentTime = Date.now();
    // const elapsedTime = currentTime - this.time; // Use this.time to track elapsed time

    // console.log(elapsedTime)
    // if (elapsedTime >10000) {
    //   this.speed += .0003;
    //   console.log("Speed increased", this.speed);

    // }

    // const seconds = Math.floor(elapsedTime / 1000);
    // this.timerText.setText(`Time: ${seconds}`);

    // if (seconds == 50) {
    //   this.scene.start("title")
    // }
  }
}

class PlayerSelect extends Phaser.Scene {
  constructor() {
    super("select");
  }
  preload() {
    this.load.path = "./assets/";
    this.load.image("matsutake", "matsutake.png");
    this.load.image("player2", "player2.png");
    this.load.image("player3", "player3.png");
    this.load.image("player4", "player4.png");
    this.load.image("player5", "player5.png");
    this.load.image("title", "colorTitle.png");
  }
  create() {
    this.cameras.main.setBackgroundColor("#e75480");

    this.title = this.add.image(560, 300, "title").setInteractive();
    this.title.setScale(2);

    this.character1 = this.add.image(300, 800, "matsutake").setInteractive();
    this.character2 = this.add.image(500, 800, "player2").setInteractive();
    this.character3 = this.add.image(700, 800, "player3").setInteractive();
    this.character4 = this.add.image(700, 600, "player4").setInteractive();
    this.character5 = this.add.image(500, 600, "player5").setInteractive();

    this.character1.setScale(4);
    this.character2.setScale(4);
    this.character3.setScale(4);
    this.character4.setScale(4);
    this.character5.setScale(4);
    // const screenWidth = this.cameras.main.width;
    // const screenHeight = this.cameras.main.height;

    // this.title = this.add.image(screenWidth / 2, screenHeight / 4, "title").setInteractive();
    // this.title.setScale(1.5);

    // this.character1 = this.add.image(screenWidth / 5, screenHeight / 1.5, "matsutake").setInteractive();
    // this.character2 = this.add.image(screenWidth / 2.5, screenHeight / 1.5, "player2").setInteractive();
    // this.character3 = this.add.image(screenWidth / 1.8, screenHeight / 1.5, "player3").setInteractive();
    // this.character4 = this.add.image(screenWidth / 1.8, screenHeight / 2, "player4").setInteractive();
    // this.character5 = this.add.image(screenWidth / 2.5, screenHeight / 2, "player5").setInteractive();

    // const scaleMultiplier = 0.0035; // Adjust the scale factor as needed
    // this.character1.setScale(screenWidth * scaleMultiplier);
    // this.character2.setScale(screenWidth * scaleMultiplier);
    // this.character3.setScale(screenWidth * scaleMultiplier);
    // this.character4.setScale(screenWidth * scaleMultiplier);
    // this.character5.setScale(screenWidth * scaleMultiplier);

    this.character1.on("pointerdown", function () {
      selectCharacter("matsutake");
    });

    this.character2.on("pointerdown", function () {
      selectCharacter("player2");
    });

    this.character3.on("pointerdown", function () {
      selectCharacter("player3");
    });

    this.character4.on("pointerdown", function () {
      selectCharacter("player4");
    });

    this.character5.on("pointerdown", function () {
      selectCharacter("player5");
    });

    const selectCharacter = (characterKey) => {
      playerKey = characterKey;
      this.scene.start("gameplay");
      console.log("Selected character: " + playerKey);
    };
  }
  update() {}
}

class Note extends Phaser.Scene {
  constructor() {
    super("note");
  }
  preload() {
    this.load.path = "./assets/";
  }
  create() {
    // Set the background color
    this.cameras.main.setBackgroundColor("#797ef6");

    this.halfScreenWidth = this.cameras.main.width / 2;
    this.halfScreenHeight = this.cameras.main.height / 2;

    // Display a congratulatory message
    const congratsText = this.add.text(
      this.halfScreenWidth - 200,
      this.halfScreenHeight - 450,
      "There is a note in the chest:",
      {
        fontSize: "40px",
        fill: "#fff",
        align: "center",
      }
    );
    congratsText.setOrigin(0.5);

    const noteText = this.add.text(
      this.halfScreenWidth,
      this.halfScreenHeight,
      "I will love you til the end of time.\n" +
      "You are the best part of my life.\n" +
      "I love everything about you\n" +
      "from your hair to your toes.\n" +
      "I want to be my best self for you.\n" +
      "Thank you for being the bestest friend\n" +
      "and loveliest love anyone could\n" +
      "ever ask for\n" +
      "I love your infinitely, indefinitely\n",
      {
        fontSize: "40px",
        fill: "#fff",
        align: "center",
      }
    );
    noteText.setOrigin(0.5);

    // const noteText = this.add.text(
    //   this.halfScreenWidth,
    //   this.halfScreenHeight,
    //   "I will love you til the end of time.\nYou are the best part of my life.\nI love everything about you\nfrom your hair to your toes.\nI want to be my best self for you",
    //   {
    //     fontSize: "40px",
    //     fill: "#fff",
    //     align: "center",
    //   }
    // );
    // noteText.setOrigin(0.5);

    // Add a button to start the game
    const startButton = this.add
      .text(this.halfScreenWidth, this.halfScreenHeight + 300, "Play again", {
        fontSize: "40px",
        fill: "#fff",
        align: "center",
      })
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("select"); // Change this to your gameplay scene name
      });
    startButton.setOrigin(0.5);
  }
  update() {}
}

class Gameover extends Phaser.Scene {
  constructor() {
    super("gameOver");
  }

  create() {
    this.add.text(400, 300, "Game Over", { fontSize: "64px", fill: "#fff" });

    // Add a button to restart the game
    const playAgainButton = this.add
      .text(400, 400, "Play Again", { fontSize: "32px", fill: "#fff" })
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("select");
      });
    playAgainButton.setOrigin(0.5);
  }
}

let playerKey;
let enemyEnoki;
let cursors;
let player;
let rocks;
let left = false;
let right = false;
let up = false;
let down = false;
let startingGame = false;
let key = false;

var config = {
  type: Phaser.AUTO,
  pixelArt: true,
  zoom: 1,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1100,
    height: 1080,
    fullscreen: true, // Set fullscreen to true
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        x: 0,
        y: 0,
      },
      debug: false,
    },
  },
  input: {
    activePointers: 5,
  },
  scene: [Gameplay, Gameover, Note], //Title, Gameplay, Gameover],
};

class Clock extends Phaser.Scene {}

var game = new Phaser.Game(config);
