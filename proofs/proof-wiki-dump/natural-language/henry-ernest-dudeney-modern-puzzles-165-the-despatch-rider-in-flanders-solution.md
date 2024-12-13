# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/165_-_The_Despatch-Rider_in_Flanders/Solution



Modern Puzzles by Henry Ernest Dudeney: $165$
The Despatch-Rider in Flanders
A despatch-rider on horseback, somewhere in Flanders, had to ride with all possible speed from $A$ to $B$.
The distances are marked on the map.

Now, he can ride just twice as as fast over the soft turf (the shaded bit) as he can ride over the loose sand.
Can you show what is the quickest possible route for him to take?


Solution
The rider needs to ride across the sand to a point on the turf / sand boundary exactly $1$ mile from the western boundary of the map, then straight across the turf to $B$.


Proof
Let $G$ be the point on the turf / sand boundary to which he must aim.
Let $x$ be the distance from that point to the western boundary of the map $E$.

















\(\ds \sin \angle FGB\)

\(=\)







\(\ds 2 \sin \angle AGH\)





Snell-Descartes Law








\(\ds \leadsto \ \ \)





\(\ds \dfrac {BF} {GB}\)

\(=\)







\(\ds 2 \dfrac {AH} {AG}\)





Definition of Sine of Angle








\(\ds \leadsto \ \ \)





\(\ds \dfrac {7 - x} {\sqrt {3^2 + \paren {7 - x}^2} }\)

\(=\)







\(\ds 2 \dfrac x {\sqrt {2^2 + x^2} }\)





Pythagoras's Theorem








\(\ds \leadsto \ \ \)





\(\ds \paren {2^2 + x^2} \paren {7 - x}^2\)

\(=\)







\(\ds 4 x^2 \paren {3^2 + \paren {7 - x}^2}\)





multiplying out to clear square roots








\(\ds \leadsto \ \ \)





\(\ds 3 x^4 - 42 x^3 + 179 x^2 + 56 x - 196\)

\(=\)







\(\ds 0\)





simplifying




There appears to be no quick and easy way to solve this quartic, unless one were to plough through Ferrari's Method.
However, if we are sharp we note that:

$3 - 42 + 179 + 56 - 196 = 0$
and so from Coefficients of Polynomial add to 0 iff 1 is a Root we have that $x = 1$ is a root of that quartic.

We can factor that quartic if we like:

$\paren {x - 1} \paren {3 x^3 - 39 x^2 + 140 x + 196} = 0$
but we already have the solution $x = 1$ which adequately fulfils the conditions of the problem.

We check the geometry:














\(\ds \sin \angle AGH\)

\(=\)







\(\ds \dfrac 1 {\sqrt {2^2 + 1^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 5}\)




















\(\ds \sin \angle FGB\)

\(=\)







\(\ds \dfrac 6 {\sqrt {6^2 + 3^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 6 {\sqrt {45} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 6 {3 \sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds 2 \sin \angle AGH\)









and all is well.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $165$. -- The Despatch-Rider in Flanders
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $311$. The Dispatch Rider in Flanders




