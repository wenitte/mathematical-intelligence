# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/188_-_Squaring_the_Circle/Solution_2



Puzzles and Curious Problems by Henry Ernest Dudeney: $188$
Squaring the Circle
The problem of squaring the circle depends on finding the ratio of the diameter to the circumference.
This cannot be found in numbers with exactitude,
but we can get near enough for all practical purposes.
But it is equally impossible, by Euclidean geometry, to draw a straight line equal to the circumference of a given circle.
You can roll a penny carefully on its edge along a straight line on a sheet of paper and get a pretty exact result,
but such a thing as a circular garden-bed cannot be so rolled.
Now, the line below, when straightened out
(it is bent for convenience in presentation),
is very nearly the exact length of the circumference of the accompanying circle.

The horizontal part of the line is half the circumference.
Could you have found it by a simple method, using only pencil, compasses and ruler?


Solution

$AB$ is the diameter of the circle whose center is at $C$.
Bisect the semicircle $AB$ at $D$.
Construct $AE = AC$ and $BF = BC$.
Construct $DE$ and $DF$.
Let $DE$ and $DF$ intersect $AB$ and $G$ and $H$.
Then $DG + GH$ is one quarter the length of the circumference of the circle within a $\dfrac 1 {4000}$ part.


Proof
Notice that the above diagram is symmetrical.
Therefore $DC \perp AB$.
Let the radius of the circle be $r$.
Denote the foot of the perpendicular from $E$ to $AB$ be $P$.
Since $CA = CE = AC$, $\triangle ACE$ is equilateral.
Hence $AP = PC = \dfrac r 2$ and $EP = \dfrac {\sqrt 3} 2 r$.
$\triangle PEH \sim \triangle CDH$ as Equiangular Triangles are Similar.
Therefore $\dfrac {DC} {EP} = \dfrac {CH} {PH} = \dfrac 2 {\sqrt 3}$.
We can now obtain:

$CH = \dfrac r 2 \times \dfrac 2 {2 + \sqrt 3} = \dfrac r {2 + \sqrt 3}$
By Pythagoras' Theorem:

$DG = DH = \sqrt {\paren {\dfrac r {2 + \sqrt 3} }^2 + r^2} = \dfrac r {2 + \sqrt 3} \sqrt {8 + 4 \sqrt 3}$
Now we can calculate $DG + GH$:














\(\ds DG + GH\)

\(=\)







\(\ds DG + 2 CH\)





by symmetry














\(\ds \)

\(=\)







\(\ds \frac r {2 + \sqrt 3} \sqrt {8 + 4 \sqrt 3} + \dfrac {2 r} {2 + \sqrt 3}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \paren {1 + \sqrt {2 + \sqrt 3} } } {2 + \sqrt 3} r\)









The fraction:

$\dfrac {2 \paren {1 + \sqrt {2 + \sqrt 3} } } {2 + \sqrt 3} \approx 1.571174 \ldots$
is a close approximation to:

$\dfrac \pi 2 \approx 1.570796 \ldots$
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $188$. -- Squaring the Circle
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $289$. Squaring the Circle




