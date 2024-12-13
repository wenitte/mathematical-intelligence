# 

Source: https://proofwiki.org/wiki/Sequence_of_Imaginary_Reciprocals/Limit_Points

Theorem
Consider the subset $S$ of the complex plane defined as:

$S := \set {\dfrac i n : n \in \Z_{>0} }$
That is:

$S := \set {i, \dfrac i 2, \dfrac i 3, \dfrac i 4, \ldots}$
where $i$ is the imaginary unit.

The set $S$ has exactly one limit point, and that is $z = 0$.


Proof
We have that $S$ is countably infinite and also bounded.
Hence by the Bolzano-Weierstrass Theorem $S$ has at least one limit point.

Let $\epsilon \in \R_{>0}$.
Let $\map {N_\epsilon} z$ be the $\epsilon$-neighborhood of $z$.
Let $n \in \N$ such that $n > \dfrac 1 \epsilon$.
Then $\cmod {\dfrac i n} < \epsilon$ and so:

$\dfrac i n \in \map {N_\epsilon} z$
where $\map {N_\epsilon} {z_0}$ denotes the $\epsilon$-neighborhood of $z$.
Hence, by definition, $z$ is a limit point of $S$.

Now let $z_1 \in \C$ such that $z_1 \ne 0$.
Let $z \in S$ such that $z \ne z_1$.
Then:

$\cmod {z_1 - z} > 0$
Let $\epsilon \in \R_{>0}$ such that $\epsilon < \cmod {z_1 - z}$.
Then:

$z \notin \map {N_\epsilon} {z_1}$
By making $\epsilon$ smaller than the minimum $\cmod {z_1 - z}$ for $z \in S$, it is seen that:

$\forall z \in S: z \ne z_1 \implies z \notin \map {N_\epsilon} {z_1}$
and so $z_1$ is not a limit point of $S$.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: Point Sets: $45 \ \text {(b)}$




