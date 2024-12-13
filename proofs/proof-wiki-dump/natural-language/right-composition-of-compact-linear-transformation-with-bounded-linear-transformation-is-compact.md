# 

Source: https://proofwiki.org/wiki/Right_Composition_of_Compact_Linear_Transformation_with_Bounded_Linear_Transformation_is_Compact

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$, $\struct {Y, \norm {\, \cdot \,}_Y}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\GF$.
Let $S : X \to Y$ be a bounded linear transformation.
Let $T : Y \to Z$ be a compact linear transformation.

Then $T S : X \to Z$ is a compact linear transformation.


Proof
Let $\sequence {x_n}_{n \mathop \in \N}$ be a bounded sequence.
So there exists $K \ge 0$ such that $\norm {x_n}_X \le K$ for each $n \in \N$. 
Since $S$ is bounded, there exists $M > 0$ such that: 

$\norm {S x}_Y \le M \norm x_X$
for each $x \in X$.
Then:

$\norm {S x_n}_Y \le M \norm {x_n}_X \le M K$
So $\sequence {S x_n}_{n \mathop \in \N}$ is bounded sequence.
So since $T$ is compact linear transformation.
So there exists a subsequence $\sequence {S x_{n_j} }_{j \mathop \in \N}$ such that $\sequence {T S x_{n_j} }_{j \mathop \in \N}$ converges.
So we have shown that for each bounded sequence $\sequence {x_n}_{n \mathop \in \N}$ in $X$, there exists a subsequence such that $\sequence {T S x_{n_j} }_{j \mathop \in \N}$ converges.
So $TS$ is compact. 
$\blacksquare$





