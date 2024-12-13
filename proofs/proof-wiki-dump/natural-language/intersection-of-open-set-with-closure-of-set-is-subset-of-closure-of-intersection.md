# 

Source: https://proofwiki.org/wiki/Intersection_of_Open_Set_with_Closure_of_Set_is_Subset_of_Closure_of_Intersection

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \in \tau$ be an open set of $T$.
Let $K \subseteq S$ be an arbitrary subset of $S$.

Then:

$H \cap \map \cl K \subseteq \map \cl {H \cap K}$
where $\cl$ denotes set closure.


Proof
Let $x \in H \cap \map \cl K$.
Then:

$x \in H$
and:

$x \in \map \cl K$
Let $N_1$ be an arbitrary neighborbood of $x$.
Because $x \in H$, there exists a neighborbood $N_2$ of $x$ entirely within $U$.
Let $N_3 = N_1 \cap N_2$.
By Intersection of Neighborhoods in Topological Space is Neighborhood, $N_3$ is also a neighborbood of $x$.
Because $N_1 \cap N_2 \subseteq N_2$, $N_3$ is also contained entirely within $U$.
Because $x \in \map \cl K$, by definition of closure, there exists $y \in N_3$ which is also in $K$.
From $x \in N_3$ we know that $y \in H$.
Thus we have demonstrated the existence of $y \in N_1$ that is in $H \cap K$.
As $N_1$ is arbitrary, it follows that for every neighborbood of $x$ there exists $y \in N_1$ such that $y \in H$ and $y \in K$.
That is:

$x \in \map \cl {H \cap K}$
Hence the result, by definition of subset.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 27 \ \text {(iii)}$




