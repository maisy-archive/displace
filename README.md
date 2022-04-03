# displace

## A simple username scraper for r/place.

### Usage

If given no arguments, the program will scrape the entire 2000x2000 board. This takes a lot of time and bandwidth.

```sh
node . <starting x coordinate, 0 - 999> <starting y coordinate 0 - 999> <starting canvasIndex, 0 - 3> <ending x coordinate, 0 - 999> <ending y coordinate 0 - 999> <ending canvasIndex, 0 - 3>
```

#### Example

```sh
node . 100 100 0 100 100 1
```

This would scrape all usernames between 100,100 on canvas 1 and 100,100 on canvas 2.