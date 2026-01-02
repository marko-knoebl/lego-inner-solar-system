# Planets of the inner solar system

These are design notes for my LEGO MOC "planets of the inner solar system"

It has been published in two variants:

- [original](https://rebrickable.com/mocs/MOC-245413/markoknoebl/planets-of-the-inner-solar-system-error-13-42179-alt)
- [with colorful / bigger planets](https://rebrickable.com/mocs/MOC-246284/markoknoebl/planets-of-the-inner-solar-system-colorful)

## Other models - for reference

- 77 parts by MaxiFigure: https://rebrickable.com/mocs/MOC-0707/MaxiFigure/solar-system-mini
- 283 parts by Chocolate_Einstien: https://rebrickable.com/mocs/MOC-12852/Chocolate_Einstien/orrery
- 748 parts by LTC43: https://rebrickable.com/mocs/MOC-170600/LTC43/solar-system-model
- 2409 parts by Serenity: https://rebrickable.com/mocs/MOC-84846/Serenity/999-accurate-planet-model
- 3000 parts by ChrisOrchard: https://beta.ideas.lego.com/product-ideas/21c0ec4e-2dd0-4ef2-9484-41a9baa4c9d2
- ~4000 parts by jollyrodger: https://rebrickable.com/mocs/MOC-38774/jollyrodger/8-planet-solar-system

## Data about the solar system

### orbital radii

in million km

- Mercury: 57.91
- Venus: 108.21
- Earth: 149.60
- Mars: 227.94

scaled so Mercury = 1:

- Mercury: 1
- Venus: 1.87
- Earth: 2.57
- Mars: 3.94

scaled (x3.5):

- Mercury: 3.5
- Venus: 6.5
- Earth: 8.995
- Mars: 11.8

### Movement

real durations for reference (scaled to Mercury):

- Mercury: 1
- Venus: 2.55432
- Earth: 4.15203
- Mars: 7.80934

speeds (1 / duration):

- Mercury: 1 (=v4)
- Venus: 0.391494 (=v3)
- Earth: 0.240846 (=v2)
- Mars: 0.128052 (=v1)
- Absolute: 0 (=v0)

## Gears - Data

Gear Meshing Reference: https://rebrickable.com/help/gears/

Gears in general: 8, 12, 16, 20, 24, 28, 36, 40

Gears in set : 8, 12, 16, 20, 24, 36

Turntables: 60, 28

## Mechanism and accuracy

There are 5 parts / platforms that move relative to each other: the base (which is steady), Mars, Earth, Venus, Mercury + Sun

Mercury is attached to the central axle, the other 3 planets are attached to turntables.

### Target speeds and transmission ratios

These are the relative target speeds (speed of Mercury = v4 = 1):

- v0 = 0
- v1 = 0.128052
- v2 = 0.240846
- v3 = 0.391494
- v4 = 1

Platforms 0, 1 and 2 need a specific "transmission ratio" which converts their relative input speed (speed of mercury relative to the current platform) into a fitting relative output speed (speed of the next platform relative to the current platform)

This can be represented by these equations:

- (v4 - v0) \* r1 = (v1 - v0)
- (v4 - v1) \* r2 = (v2 - v1)
- (v4 - v2) \* r3 = (v3 - v2)

inserting the target speeds from above and solving for the transmission ratios, we get:

- **r1 = 0.128052**
- **r2 = 0.129358**
- **r3 = 0.198442**

### Approximating ratios via transmissions

These gear transmissions were found via a JavaScript program - see _approximate_ratio_run.js_

#### r1

target value r1 = 0.128052

possible transmission ratio via gears:

- 0.128 (e.g. 24/20 \* 16/20 \* 8/60): absolute error = -0.000052; relative error = -0.00041

#### r2

target value r2 = 0.129358

possible transmission ratio via gears:

- 0.128 (e.g. 24/20 \* 16/20 \* 8/60): absolute error = -0.001358; relative error = -0.0105
- 0.1296 (e.g. 12/20 \* 12/20 \* 12/20 \* 36/60): absolute error = -0.000242; relative error = -0.0019

#### r3

target value r3 = 0.198442

possible transmission ratios via gears:

- 0.19048 (e.g. 8/12 \* 8/28): absolute error = -0.00796; relative error = -0.0401 (uses 28 tooth turntable)
- 0.2 (12/60): absolute error = +0.00156; relative error = +0.0078 (uses 60 tooth turntable)
- 0.19841 (20/24 \* 20/28 \* 20/60): absolute error = -0.000029; relative error = -0.00015

**Note: the error here is just the error from one platform to another - the final (summed) error will actually be smaller**

### Final errors

construction using just the parts from set 42179:

relative to Mercury:

- Mars: 0.128 : 0.128052 = 0.99959 (error = -0.0004)
- Earth: 0.2396 : 0.240846 = 0.9945 (error = -0.0052)
- Venus: 0.3845 : 0.391494 = 0.982 (error = -0.018)

relative to Earth (everything +0.0052):

- Mars: error = -0.0048
- Earth: error = 0
- Venus: error = -0.0128

construction using extra gears:

relative to Mercury:

- Mars: 0.128 : 0.128052 = 0.99959 (error = -0.0004)
- Earth: 0.241011 : 0.240846 = 1.00069 (error = +0.0007)
- Venus (simple): 0.392809 : 0.391494 = 1.0034 (error = +0.0034)
- Venus (advanced): 0.39160 : 0.391494 = 1.00028 (error = +0.00028)

relative to Earth (everything -0.0007):

- Mercury: error = -0.0007
- Mars: error = -0.0013
- Earth: error = 0
- Venus: error = -0.0004

This variant would could stay relatively accurate for up to a century (after 100 earth years, the other planets would be off by ~25°)

## Notes on the stud.io model and rendering

To position the planets individually, "release" the corresponding parts from submodels as needed

"standard" orientation for rendering:

- x = -30
- y = -60
- x = 0
- y = 50
- zoom = 2.2
- fov = 15
