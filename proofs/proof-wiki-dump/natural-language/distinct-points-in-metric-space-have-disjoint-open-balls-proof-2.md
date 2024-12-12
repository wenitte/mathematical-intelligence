# 

Source: https://proofwiki.org/wiki/Distinct_Points_in_Metric_Space_have_Disjoint_Open_Balls/Proof_2

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $x, y \in M: x \ne y$.

Then there exist disjoint open $\epsilon$-balls $\map {B_\epsilon} x$ and $\map {B_\epsilon} y$ containing $x$ and $y$ respectively.


Proof
Let $x, y \in A: x \ne y$.
Then $\map d {x, y} > 0$.
Put $\epsilon = \dfrac {\map d {x, y} } 2$.
Let $\map {B_\epsilon} x$ and $\map {B_\epsilon} y$ be the open $\epsilon$-balls of $x$ and $y$ respectively.

Suppose $\map {B_\epsilon} x$ and $\map {B_\epsilon} y$ are not disjoint.
Then $\exists z \in M$ such that $z \in \map {B_\epsilon} x$ and $z \in \map {B_\epsilon} y$.
Then $\map d {x, z} < \epsilon$ and $\map d {z, y} < \epsilon$.
Hence $\map d {x, z} + \map d {z, y} < 2 \epsilon = \map d {x, y}$.
This contradicts the definition of a metric, so there can be no such $z$.
Hence the open balls must be disjoint.
$\blacksquare$





