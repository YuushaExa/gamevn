# episodes.rpy
label episode1:
    "You wake up in a strange place."
    menu:
        "Look around.":
            jump scene2
        "Go back to sleep.":
            jump scene3

label scene2:
    "You see a door."
    menu:
        "Open the door.":
            jump scene4
        "Ignore it.":
            jump scene5

label scene3:
    "You fall back asleep and miss the adventure."
    jump scene5

label scene4:
    "The door creaks open, revealing a dark hallway."
    jump scene5

label scene5:
    "You decide to stay put, wondering what lies beyond."
    jump episode2

label episode2:
    "You step out of the door and into the unknown."
    menu:
        "Take a left turn.":
            jump scene2_2
        "Take a right turn.":
            jump scene3_2

label scene2_2:
    "You encounter a friendly traveler."
    jump scene4_2

label scene3_2:
    "You find a hidden path leading to a beautiful garden."
    # End of this path, you can add more scenes or choices here.

label scene4_2:
    "The traveler points you towards the nearest town."
    # End of this path, you can add more scenes or choices here.
