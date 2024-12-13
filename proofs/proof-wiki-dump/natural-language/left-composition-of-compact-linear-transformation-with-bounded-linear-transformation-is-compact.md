# 

Source: https://proofwiki.org/wiki/Left_Composition_of_Compact_Linear_Transformation_with_Bounded_Linear_Transformation_is_Compact

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$, $\struct {Y, \norm {\, \cdot \,}_Y}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\GF$.
Let $T : X \to Y$ be a compact linear transformation.
Let $S : Y \to Z$ be a bounded linear transformation.

Then $S T : X \to Z$ is a compact linear transformation.


Proof
Let $\sequence {x_n}_{n \mathop \in \N}$ be a bounded sequence.
Since $T$ is compact, there exists a subsequence $\sequence {x_{n_j} }_{j \mathop \in \N}$ such that: 

$T x_{n_j} \to y$
as $n \to \infty$ for some $y \in Y$. 
Since $S$ is bounded, it is continuous from Continuity of Linear Transformations, and so:

$S T x_{n_j} \to S y$
So for each bounded sequence $\sequence {x_n}_{n \mathop \in \N}$, there exists a subsequence $\sequence {x_{n_j} }_{j \mathop \in \N}$ such that $\sequence {S T x_n}_{n \mathop \in \N}$ converges. 
$\blacksquare$





