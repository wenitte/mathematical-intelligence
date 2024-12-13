# 

Source: https://proofwiki.org/wiki/Sequence_of_Imaginary_Reciprocals/Boundary_Points

Theorem
Consider the subset $S$ of the complex plane defined as:

$S := \set {\dfrac i n : n \in \Z_{>0} }$
That is:

$S := \set {i, \dfrac i 2, \dfrac i 3, \dfrac i 4, \ldots}$
where $i$ is the imaginary unit.

Every point of $S$, along with the point $z = 0$, is a boundary point of $S$.


Proof
Consider the point $z = \dfrac i n \in S$.
Let $\delta \in \R_{>0}$.
Let $\map {N_\delta} z$ be the $\delta$-neighborhood of $z$.
Then $\map {N_\delta} z$ contains at least one point of $S$ ($i / n$ itself) as well as points which are not in $S$.
Hence, by definition, $z$ is a boundary point of $S$.

Let $z = 0$.
Similarly, let $\map {N_\delta} z$, 

Let $\delta \in \R_{>0}$.
Let $\map {N_\delta} z$ be the $\delta$-neighborhood of $z$.
Let $n \in \N$ such that $n > \dfrac 1 \delta$.
Then $\cmod {\dfrac i n} < \delta$ and so:

$\dfrac i n \in \map {N_\delta} z$

Thus every $\delta$-neighborhood of $z = 0$ also contains points of $S$ and points not in $S$.
Hence, by definition, $z = 0$ is also a boundary point of $S$.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: Point Sets: $45 \ \text {(d)}$




