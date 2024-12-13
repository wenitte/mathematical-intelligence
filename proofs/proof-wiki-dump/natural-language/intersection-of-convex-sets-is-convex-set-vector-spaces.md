# 

Source: https://proofwiki.org/wiki/Intersection_of_Convex_Sets_is_Convex_Set_(Vector_Spaces)

Theorem
Let $V$ be a vector space over $\R$ or $\C$.
Let $\CC$ be a family of convex subsets of $V$.

Then the intersection $\ds \bigcap \CC$ is also a convex subset of $V$.


Proof
Let $x, y \in \ds \bigcap \CC$.
Then by definition of set intersection, $\forall C \in \CC: x, y \in C$.
The convexity of each $C$ yields:

$\forall t \in \closedint 0 1: t x + \paren {1 - t} y \in C$
Therefore, these elements are also in $\ds \bigcap \CC$, by definition of set intersection.
Hence $\ds \bigcap \CC$ is also convex.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality




