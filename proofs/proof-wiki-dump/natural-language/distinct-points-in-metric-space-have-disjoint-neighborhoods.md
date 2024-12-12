# 

Source: https://proofwiki.org/wiki/Distinct_Points_in_Metric_Space_have_Disjoint_Neighborhoods

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $x, y \in M: x \ne y$.

Then there exist neighborhoods $N_x$ and $N_y$ of $x$ and $y$ respectively such that $N_x \cap N_y = \O$, that is, that are disjoint.


Proof
Let $x, y \in A: x \ne y$.
From Distinct Points in Metric Space have Disjoint Open Balls, there exist disjoint open $\epsilon$-balls $\map {B_\epsilon} x$ and $\map {B_\epsilon} y$ containing $x$ and $y$ respectively.
From Open Ball is Neighborhood of all Points Inside it follows that $\map {B_\epsilon} x$ and $\map {B_\epsilon} y$ are neighborhoods of $x$ and $y$ respectively.
Hence the result.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Exercise $6$




