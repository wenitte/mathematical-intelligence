# 

Source: https://proofwiki.org/wiki/Ambiguous_Times



Theorem
Let $T$ be a time of day in $12$-hour clock form.
Then $T$ is an ambiguous time if and only if:

$T = 12:00 + n \times 5 \tfrac 5 {143} \mathrm {min}$
where:

$n \in \set {1, 2, \ldots, 142}$
the hour hand and minute hand are pointing in different directions.


Proof
Let $T$ be an ambiguous time.
Let $T$ be specified in hours $h$ and minutes $m$, where:

$1 \le h \le 12$ is an integer
$0 \le m < 60$ is a real number
whether a.m. or p.m. is immaterial.
At this time $T$:

let $\theta \degrees$ be the angle made by the minute hand with respect to twelve o'clock
let $\phi \degrees$ be the angle made by the hour hand with respect to twelve o'clock.
$\theta$ and $\phi$ give a valid time indication by definition.
From Condition for Valid Time Indication:

$12 \phi \mod 360 = \theta$
By definition of ambiguous time, we have that if the hour hand and minute hand were reversed, the time of day indicated is also a valid time indication.
That is:

$12 \theta \mod 360 = \phi$
Hence:














\(\ds \phi\)

\(=\)







\(\ds 12 \theta \mod 360\)




















\(\ds \phi\)

\(=\)







\(\ds 12 \theta + 360 {h_1}\)





for $h_1 \in \set {1, 2, \ldots, 12}$








\(\ds \leadsto \ \ \)





\(\ds \dfrac \phi {12} + 30 {h_1}\)

\(=\)







\(\ds \theta\)














\(\ds \leadsto \ \ \)





\(\ds 12 \phi + 30 h_2\)

\(=\)







\(\ds \dfrac \phi {12} + 30 {h_1}\)





for $h_2 \in \set {1, 2, \ldots, 12}$








\(\ds \leadsto \ \ \)





\(\ds 143 \phi\)

\(=\)







\(\ds 360 \paren {h_1 - h_2}\)





for $h_1, h_2 \in \set {1, 2, \ldots, 12}$








\(\ds \leadsto \ \ \)





\(\ds \phi\)

\(=\)







\(\ds \dfrac {360 \paren {h_1 - h_2} } {143}\)









It remains to calculate $\dfrac {360 k} {143}$ and convert the number each time into a valid time indication:











\(\ds h_2 - h_1 = 0: \, \)



\(\ds 143 \phi\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \phi\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds T\)

\(=\)







\(\ds 12 : 00\)





but of course $12:00$ the hands coincide, so this does not count














\(\ds h_2 - h_1 = 1: \, \)



\(\ds \phi\)

\(=\)







\(\ds \dfrac {360} {143}\)














\(\ds \leadsto \ \ \)





\(\ds T\)

\(=\)







\(\ds 12 : 05 \tfrac 5 {143}\)





as $\phi \degrees$ equates to $2 \phi$ minutes of time



and so forth:










\(\ds h_2 - h_1 = 2: \, \)



\(\ds T\)

\(=\)







\(\ds 12 : 10 \tfrac {10} {143}\)
















\(\ds h_2 - h_1 = 3: \, \)



\(\ds T\)

\(=\)







\(\ds 12 : 15 \tfrac {15} {143}\)
















\(\ds h_2 - h_1 = 4: \, \)



\(\ds T\)

\(=\)







\(\ds 12 : 20 \tfrac {20} {143}\)
















\(\ds h_2 - h_1 = 5: \, \)



\(\ds T\)

\(=\)







\(\ds 12 : 25 \tfrac {25} {143}\)
















\(\ds h_2 - h_1 = 6: \, \)



\(\ds T\)

\(=\)







\(\ds 12 : 30 \tfrac {30} {143}\)
















\(\ds h_2 - h_1 = 7: \, \)



\(\ds T\)

\(=\)







\(\ds 12 : 35 \tfrac {35} {143}\)
















\(\ds h_2 - h_1 = 8: \, \)



\(\ds T\)

\(=\)







\(\ds 12 : 40 \tfrac {40} {143}\)
















\(\ds h_2 - h_1 = 9: \, \)



\(\ds T\)

\(=\)







\(\ds 12 : 45 \tfrac {45} {143}\)
















\(\ds h_2 - h_1 = 10: \, \)



\(\ds T\)

\(=\)







\(\ds 12 : 50 \tfrac {50} {143}\)
















\(\ds h_2 - h_1 = 11: \, \)



\(\ds T\)

\(=\)







\(\ds 12 : 55 \tfrac {55} {143}\)










These are the ambiguous times corresponding to the times of day between $12:00$ and $01:00$.
It remains to calculate:

$(1) \quad$ the angles made by the minute hand at these times
$(2) \quad$ work out the times of day corresponding to the hour hand at these angles.

Let us take the ambiguous time $12 : 05 \tfrac 5 {143}$.
The hour hand is at $\dfrac {360} {143} \degrees$ while the minute hand is at $\dfrac {12 \times 360} {143} \degrees = 30 \tfrac {30} {143} \degrees$.
Exchanging the hour hand and minute hand gives us a time soon after $1:00$ where the minute hand is at $\dfrac {360} {143} \degrees$.
From Speed of Minute Hand, the minute hand moves at $6 \degrees$ per minute.
This leads us to a time of $\dfrac {360} {6 \times 143}$ minutes after $1:00$, or $\dfrac {60} {143}$ minutes after $1:00$.
To check our arithmetic, we investigate the hour hand position at $01 : 00 \tfrac {60} {143}$
A time of $\dfrac {60} {143}$ minutes past the hour corresponds to an angle of $\dfrac 1 2 \times \dfrac {60} {143} \degrees$, or $\dfrac {30} {143} \degrees$ past $30 \degrees$.
This agrees with our calculation of the position of the minute hand.
The remaining corresponding times are evaluated as multiples of this time.
$\blacksquare$


Examples
The following times of day are ambiguous:




Ambiguous Time

Corresponding Time


$12 : 05 \tfrac 5 {143}$

$01 : 00 \tfrac {60} {143}$


$12 : 10 \tfrac {10} {143}$

$02 : 00 \tfrac {120} {143}$


$12 : 15 \tfrac {15} {143}$

$03 : 01 \tfrac {37} {143}$


$12 : 20 \tfrac {20} {143}$

$04 : 01 \tfrac {97} {143}$


$12 : 25 \tfrac {25} {143}$

$05 : 02 \tfrac {14} {143}$


$12 : 30 \tfrac {30} {143}$

$06 : 02 \tfrac {74} {143}$


$12 : 35 \tfrac {35} {143}$

$07 : 02 \tfrac {134} {143}$


$12 : 40 \tfrac {40} {143}$

$08 : 03 \tfrac {51} {143}$


$12 : 45 \tfrac {45} {143}$

$09 : 03 \tfrac {111} {143}$


$12 : 50 \tfrac {50} {143}$

$10 : 04 \tfrac {28} {143}$


$12 : 55 \tfrac {55} {143}$

$11 : 04 \tfrac {88} {143}$


$01 : 00 \tfrac {60} {143}$

$12 : 05 \tfrac 5 {143}$


$01 : 10 \tfrac {70} {143}$

$02 : 05 \tfrac {125} {143}$


$01 : 15 \tfrac {75} {143}$

$03 : 06 \tfrac {42} {143}$


$01 : 20 \tfrac {80} {143}$

$04 : 06 \tfrac {102} {143}$


$01 : 25 \tfrac {85} {143}$

$05 : 07 \tfrac {19} {143}$


$01 : 30 \tfrac {90} {143}$

$06 : 07 \tfrac {79} {143}$


$01 : 35 \tfrac {95} {143}$

$07 : 07 \tfrac {139} {143}$


$01 : 40 \tfrac {100} {143}$

$08 : 08 \tfrac {56} {143}$


$01 : 45 \tfrac {105} {143}$

$09 : 08 \tfrac {116} {143}$


$01 : 50 \tfrac {110} {143}$

$10 : 09 \tfrac {33} {143}$


$01 : 55 \tfrac {115} {143}$

$11 : 09 \tfrac {93} {143}$


$02 : 00 \tfrac {120} {143}$

$12 : 10 \tfrac {10} {143}$


$02 : 05 \tfrac {125} {143}$

$01 : 10 \tfrac {70} {143}$


$02 : 15 \tfrac {135} {143}$

$03 : 11 \tfrac {47} {143}$


$02 : 20 \tfrac {140} {143}$

$04 : 11 \tfrac {107} {143}$


$02 : 26 \tfrac 2 {143}$

$05 : 12 \tfrac {24} {143}$


$02 : 31 \tfrac 7 {143}$

$06 : 12 \tfrac {84} {143}$


$02 : 36 \tfrac {12} {143}$

$07 : 13 \tfrac 1 {143}$


$02 : 41 \tfrac {17} {143}$

$08 : 13 \tfrac {61} {143}$


$02 : 46 \tfrac {22} {143}$

$09 : 13 \tfrac {121} {143}$


$02 : 51 \tfrac {27} {143}$

$10 : 14 \tfrac {38} {143}$


$02 : 56 \tfrac {32} {143}$

$11 : 14 \tfrac {98} {143}$


$03 : 01 \tfrac {37} {143}$

$12 : 15 \tfrac {15} {143}$


$03 : 06 \tfrac {42} {143}$

$01 : 15 \tfrac {75} {143}$


$03 : 11 \tfrac {47} {143}$

$02 : 15 \tfrac {135} {143}$


$03 : 21 \tfrac {57} {143}$

$04 : 16 \tfrac {112} {143}$


$03 : 26 \tfrac {62} {143}$

$05 : 17 \tfrac {29} {143}$


$03 : 31 \tfrac {67} {143}$

$06 : 17 \tfrac {89} {143}$


$03 : 36 \tfrac {72} {143}$

$07 : 18 \tfrac 6 {143}$


$03 : 41 \tfrac {77} {143}$

$08 : 18 \tfrac {66} {143}$


$03 : 46 \tfrac {82} {143}$

$09 : 18 \tfrac {126} {143}$


$03 : 51 \tfrac {87} {143}$

$10 : 19 \tfrac {43} {143}$


$03 : 56 \tfrac {92} {143}$

$11 : 19 \tfrac {103} {143}$


$04 : 01 \tfrac {97} {143}$

$12 : 20 \tfrac {20} {143}$


$04 : 06 \tfrac {102} {143}$

$01 : 20 \tfrac {80} {143}$


$04 : 11 \tfrac {107} {143}$

$02 : 20 \tfrac {140} {143}$


$04 : 16 \tfrac {112} {143}$

$03 : 21 \tfrac {57} {143}$


$04 : 26 \tfrac {122} {143}$

$05 : 22 \tfrac {34} {143}$


$04 : 31 \tfrac {127} {143}$

$06 : 22 \tfrac {94} {143}$


$04 : 36 \tfrac {132} {143}$

$07 : 23 \tfrac {11} {143}$


$04 : 41 \tfrac {137} {143}$

$08 : 23 \tfrac {71} {143}$


$04 : 46 \tfrac {142} {143}$

$09 : 23 \tfrac {131} {143}$


$04 : 52 \tfrac 4 {143}$

$10 : 24 \tfrac {48} {143}$


$04 : 57 \tfrac 9 {143}$

$11 : 24 \tfrac {108} {143}$


$05 : 02 \tfrac {14} {143}$

$12 : 25 \tfrac {25} {143}$


$05 : 07 \tfrac {19} {143}$

$01 : 25 \tfrac {85} {143}$


$05 : 12 \tfrac {24} {143}$

$02 : 26 \tfrac 2 {143}$


$05 : 17 \tfrac {29} {143}$

$03 : 26 \tfrac {62} {143}$


$05 : 22 \tfrac {34} {143}$

$04 : 26 \tfrac {122} {143}$


$05 : 32 \tfrac {44} {143}$

$06 : 27 \tfrac {99} {143}$


$05 : 37 \tfrac {49} {143}$

$07 : 28 \tfrac {16} {143}$


$05 : 42 \tfrac {54} {143}$

$08 : 28 \tfrac {76} {143}$


$05 : 47 \tfrac {59} {143}$

$09 : 28 \tfrac {136} {143}$


$05 : 52 \tfrac {64} {143}$

$10 : 29 \tfrac {53} {143}$


$05 : 57 \tfrac {69} {143}$

$11 : 29 \tfrac {113} {143}$


$06 : 02 \tfrac {74} {143}$

$12 : 30 \tfrac {30} {143}$


$06 : 07 \tfrac {79} {143}$

$01 : 30 \tfrac {90} {143}$


$06 : 12 \tfrac {84} {143}$

$02 : 31 \tfrac 7 {143}$


$06 : 17 \tfrac {89} {143}$

$03 : 31 \tfrac {67} {143}$


$06 : 22 \tfrac {94} {143}$

$04 : 31 \tfrac {127} {143}$


$06 : 27 \tfrac {99} {143}$

$05 : 32 \tfrac {44} {143}$


$06 : 37 \tfrac {109} {143}$

$07 : 33 \tfrac {21} {143}$


$06 : 42 \tfrac {114} {143}$

$08 : 33 \tfrac {81} {143}$


$06 : 47 \tfrac {119} {143}$

$09 : 33 \tfrac {141} {143}$


$06 : 52 \tfrac {124} {143}$

$10 : 34 \tfrac {58} {143}$


$06 : 57 \tfrac {129} {143}$

$11 : 34 \tfrac {118} {143}$


$07 : 02 \tfrac {134} {143}$

$12 : 35 \tfrac {35} {143}$


$07 : 07 \tfrac {139} {143}$

$01 : 35 \tfrac {95} {143}$


$07 : 13 \tfrac 1 {143}$

$02 : 36 \tfrac {12} {143}$


$07 : 18 \tfrac 6 {143}$

$03 : 36 \tfrac {72} {143}$


$07 : 23 \tfrac {11} {143}$

$04 : 36 \tfrac {132} {143}$


$07 : 28 \tfrac {16} {143}$

$05 : 37 \tfrac {49} {143}$


$07 : 33 \tfrac {21} {143}$

$06 : 37 \tfrac {109} {143}$


$07 : 43 \tfrac {31} {143}$

$08 : 38 \tfrac {86} {143}$


$07 : 48 \tfrac {36} {143}$

$09 : 39 \tfrac 3 {143}$


$07 : 53 \tfrac {41} {143}$

$10 : 39 \tfrac {63} {143}$


$07 : 58 \tfrac {46} {143}$

$11 : 39 \tfrac {123} {143}$


$08 : 03 \tfrac {51} {143}$

$12 : 40 \tfrac {40} {143}$


$08 : 08 \tfrac {56} {143}$

$01 : 40 \tfrac {100} {143}$


$08 : 13 \tfrac {61} {143}$

$02 : 41 \tfrac {17} {143}$


$08 : 18 \tfrac {66} {143}$

$03 : 41 \tfrac {77} {143}$


$08 : 23 \tfrac {71} {143}$

$04 : 41 \tfrac {137} {143}$


$08 : 28 \tfrac {76} {143}$

$05 : 42 \tfrac {54} {143}$


$08 : 33 \tfrac {81} {143}$

$06 : 42 \tfrac {114} {143}$


$08 : 38 \tfrac {86} {143}$

$07 : 43 \tfrac {31} {143}$


$08 : 48 \tfrac {96} {143}$

$09 : 44 \tfrac 8 {143}$


$08 : 53 \tfrac {101} {143}$

$10 : 44 \tfrac {68} {143}$


$08 : 58 \tfrac {106} {143}$

$11 : 44 \tfrac {128} {143}$


$09 : 03 \tfrac {111} {143}$

$12 : 45 \tfrac {45} {143}$


$09 : 08 \tfrac {116} {143}$

$01 : 45 \tfrac {105} {143}$


$09 : 13 \tfrac {121} {143}$

$02 : 46 \tfrac {22} {143}$


$09 : 18 \tfrac {126} {143}$

$03 : 46 \tfrac {82} {143}$


$09 : 23 \tfrac {131} {143}$

$04 : 46 \tfrac {142} {143}$


$09 : 28 \tfrac {136} {143}$

$05 : 47 \tfrac {59} {143}$


$09 : 33 \tfrac {141} {143}$

$06 : 47 \tfrac {119} {143}$


$09 : 39 \tfrac 3 {143}$

$07 : 48 \tfrac {36} {143}$


$09 : 44 \tfrac 8 {143}$

$08 : 48 \tfrac {96} {143}$


$09 : 54 \tfrac {18} {143}$

$10 : 49 \tfrac {73} {143}$


$09 : 59 \tfrac {23} {143}$

$11 : 49 \tfrac {133} {143}$


$10 : 04 \tfrac {28} {143}$

$12 : 50 \tfrac {50} {143}$


$10 : 09 \tfrac {33} {143}$

$01 : 50 \tfrac {110} {143}$


$10 : 14 \tfrac {38} {143}$

$02 : 51 \tfrac {27} {143}$


$10 : 19 \tfrac {43} {143}$

$03 : 51 \tfrac {87} {143}$


$10 : 24 \tfrac {48} {143}$

$04 : 52 \tfrac 4 {143}$


$10 : 29 \tfrac {53} {143}$

$05 : 52 \tfrac {64} {143}$


$10 : 34 \tfrac {58} {143}$

$06 : 52 \tfrac {124} {143}$


$10 : 39 \tfrac {63} {143}$

$07 : 53 \tfrac {41} {143}$


$10 : 44 \tfrac {68} {143}$

$08 : 53 \tfrac {101} {143}$


$10 : 49 \tfrac {73} {143}$

$09 : 54 \tfrac {18} {143}$


$10 : 59 \tfrac {83} {143}$

$11 : 54 \tfrac {138} {143}$


$11 : 04 \tfrac {88} {143}$

$12 : 55 \tfrac {55} {143}$


$11 : 09 \tfrac {93} {143}$

$01 : 55 \tfrac {115} {143}$


$11 : 14 \tfrac {98} {143}$

$02 : 56 \tfrac {32} {143}$


$11 : 19 \tfrac {103} {143}$

$03 : 56 \tfrac {92} {143}$


$11 : 24 \tfrac {108} {143}$

$04 : 57 \tfrac 9 {143}$


$11 : 29 \tfrac {113} {143}$

$05 : 57 \tfrac {69} {143}$


$11 : 34 \tfrac {118} {143}$

$06 : 57 \tfrac {129} {143}$


$11 : 39 \tfrac {123} {143}$

$07 : 58 \tfrac {46} {143}$


$11 : 44 \tfrac {128} {143}$

$08 : 58 \tfrac {106} {143}$


$11 : 49 \tfrac {133} {143}$

$09 : 59 \tfrac {23} {143}$


$11 : 54 \tfrac {138} {143}$

$10 : 59 \tfrac {83} {143}$



Historical Note
This problem appears in Henry Ernest Dudeney's posthumous $1932$ collection Puzzles and Curious Problems, so is is presumed it first appeared before that date in one of the journals to which Dudeney contributed.
It is also reported that it was independently invented by Andrei Dmitrievich Sakharov while he was on hunger strike in $1985$:

I spent long hours gazing at the clock hanging on the wall of my room.
At night, the dim hospital illumination made it at times difficult for me to distinguish the hour hand from the minute hand, and I thought up the brainteaser:
An absent minder watch-maker accidentally fastens two hands of equal lengths on a clock with the usual twelve-hour dial.
Because of this, there are moments when the time can be read in either of two ways.
Find all the ambiguous moments.




