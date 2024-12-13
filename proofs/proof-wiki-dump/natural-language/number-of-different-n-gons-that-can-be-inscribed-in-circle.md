# 

Source: https://proofwiki.org/wiki/Number_of_Different_n-gons_that_can_be_Inscribed_in_Circle



Theorem
Let $C$ be a circle on whose circumference $n$ points are placed which divide $C$ into $n$ equal arcs.
The number of different $n$-gons (either stellated or otherwise) that can be described on $C$ whose vertices are those $n$ points is:

$S_n = \dfrac {\paren {n - 1}!} 2$


Proof
An $n$-gon (either stellated or otherwise) is constructed by connecting all $n$ points in some order.
From Number of Permutations, there are ${}^n P_n = n!$ ways of ordering $n$ points.
However, for each $n$-gon formed in this way, we have:

$n$ ways of choosing the first vertex
$2$ different sides from that vertex to use as the first one (starting off either clockwise or anticlockwise).
and all of these end up describing the same $n$-gon.
Thus there are $\dfrac n 2 n! = \dfrac {\paren {n - 1}!} 2$ different $n$-gons.
$\blacksquare$


Examples
Pentagons
There are $12$ possible pentagons that can be inscribed within a circle $C$ whose $5$ vertices are a fixed set of equally-spaced points of $C$:




Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-3}$ Wilson's Theorem: Theorem $\text {3-5}$




