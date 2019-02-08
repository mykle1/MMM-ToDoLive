## MMM-ToDoLive

ToDo list, reminders, leaves messages, insults, etc., with a unique twist.

You can update the mirror display in real time (Live), as it's running, without quitting or reloading MM.

## Video example

https://www.youtube.com/watch?v=kNq-WUlPFo0&feature=youtu.be

## Options

* 6 css files provided for different fonts, coloring and sizing.

* You can use multiple instances by simply adding another config entry.

* Each instance can have its own heading.

* Works well in all regions. Make it as wide or as tall as you like it.

* Will be added to Hello-Lucy as a default module.

* Caveat: Multiple instances can not use different css files (unless I can figure that out).

## Requirements and recommendations

You will need a keyboard for text entry and a mouse to click the module into edit mode.

A bluetooth/wireless keyboard for text entry. (Wired will work but that's not as cool)

## Installation

* `git clone https://github.com/mykle1/MMM-ToDoLive` into the `~/MagicMirror/modules` directory.

## Config.js entry and options

{
    disabled: false,
    module: "MMM-ToDoLive",
    position: "middle_center",
    config: {
        css: "4", // 1=default, 2=Clean, 3=Lord of the Rings, 4=handwriting, 5=Julee, 6=Englebert
        myHeader: "Things to do!",
    }
},
{
    disabled: false,
    module: "MMM-ToDoLive",
    position: "top_right",
    config: {
        css: "4", // 1=default, 2=Clean, 3=Lord of the Rings, 4=handwriting, 5=Julee, 6=Englebert
        myHeader: "Shopping List",
    }
},
## How to use it!

* Click the default text to enter edit mode.
* Delete default text and create your items.
* "Enter" creates a new line.
* When you are done, click anywhere outside the text area of the module.
* When you want to edit again, click the text of the module to enter edit mode.
* Simply make multiple entries in your config for multiple instances

## Create your own css file(s) for your favorite font(s)?

* I will happily add them to the repo.
