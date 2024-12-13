# 

Source: https://proofwiki.org/wiki/Real_Number_Line_with_Point_Removed_is_Not_Path-Connected

Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $x \in \R$ be a real number.

Then $\R \setminus \set x$, where $\setminus$ denotes set difference, is not path-connected.


Proof
We have that $x - 1$ and $x + 1$ are both real numbers, so:

$x - 1 \in \R \setminus \set x$
$x + 1 \in \R \setminus \set x$
Let $\mathbb I := \closedint 0 1$ be the closed unit interval.
Suppose there exists a path $f: \mathbb I \to \R \setminus \set x$ from $x - 1$ to $x + 1$.
Then by Image of Interval by Continuous Function is Interval, it follows that $x = \map f x$ for some $s \in \mathbb I$.
But $x \notin \R \setminus \set x$ by definition of set difference.
Hence such an $f$ can not exist.
The result follows by definition of path-connected.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Path-Connectedness




