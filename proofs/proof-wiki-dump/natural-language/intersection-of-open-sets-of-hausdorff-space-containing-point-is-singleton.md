# 

Source: https://proofwiki.org/wiki/Intersection_of_Open_Sets_of_Hausdorff_Space_containing_Point_is_Singleton



Theorem
Let $T = \struct {S, \tau}$ be a Hausdorff space.
Let $x \in S$ be arbitrary.

Then the intersection of all open sets containing $x$ is $\set x$:

$\ds \bigcap_{\substack {H \mathop \in \tau \\ x \mathop \in H} } = \set x$


Proof
Let $x \in S$.
Let $K = \ds \bigcap_{\substack {H \mathop \in \tau \\ x \mathop \in H} }$, that is, the intersection of all open sets containing $x$.
Aiming for a contradiction, suppose there exists $y \in S$ such that $y \in K$ but $y \ne x$.
By definition of Hausdorff space, there exist disjoint open sets $U, V \in \tau$ containing $x$ and $y$ respectively.
We have that $y \in V$.
But we also have that $y \in K$.
By Intersection is Subset:

$K \subseteq U$
and so:

$y \in U$
So $y \in U$ and $y \in V$ and so $U \cap V \ne \O$.
This directly contradicts our assertion that $U, V \in \tau$ are disjoint.
In turn, this contradicts our supposition that $T$ is a Hausdorff space.
Hence by Proof by Contradiction there can be no such $y$ such that $y \in K$.
The result follows.
$\blacksquare$


Also see
Space such that Intersection of Open Sets containing Point is Singleton may not be Hausdorff: the converse does not hold


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: Exercise $4.3: 4 \ \text {(a)}$




