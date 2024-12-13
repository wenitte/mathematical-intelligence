# 

Source: https://proofwiki.org/wiki/Ideal_of_External_Direct_Sum_of_Rings

Theorem
Let $\struct {R_1, +_1, \circ_1}, \struct {R_2, +_2, \circ_2}, \ldots, \struct {R_n, +_n, \circ_n}$ be rings.
Let 

$\ds \struct {R, +, \circ} = \prod_{k \mathop = 1}^n \struct {R_k, +_k, \circ_k}$
be their direct product.

For each $k \in \closedint 1 n$, let:

${R_k}' = \set {\tuple {x_1, \ldots, x_n} \in R: \forall j \ne k: x_j = 0}$

Then:

$\forall k \in \closedint 1 n: {R_k}'$ is an ideal of $R$.


Proof
Let $y = \tuple {y_1, y_2, \ldots, y_n} \in R$.
Let $x = \tuple {x_1, x_2, \ldots, x_n} \in R_k$
By definition of direct product, we have:

$x \circ y = \tuple {x_1 \circ y_1, x_2 \circ y_2, \ldots, x_n \circ y_n}$
$y \circ x = \tuple {y_1 \circ x_1, y_2 \circ x_2, \ldots, y_n \circ x_n}$
But we have:

$\forall j \ne k: x_j \circ y_j = 0 = y_j \circ x_j$
because $x_j = 0$.
So it follows that $x \circ y \in R_k$ and $y \circ x \in R_k$.
Hence ${R_k}'$ is an ideal of $R$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.8$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 3.1$: Direct sums




