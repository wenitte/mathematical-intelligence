# 

Source: https://proofwiki.org/wiki/Projection_onto_Ideal_of_External_Direct_Sum_of_Rings



Theorem
Let $\struct {R_1, +_1, \circ_1}, \struct {R_2, +_2, \circ_2}, \ldots, \struct {R_n, +_n, \circ_n}$ be rings.
Let $\ds \struct {R, +, \circ} = \prod_{k \mathop = 1}^n \struct {R_k, +_k, \circ_k}$ be their direct product.

For each $k \in \closedint 1 n$, let:

${R_k}' = \set {\tuple {x_1, \ldots, x_n} \in R: \forall j \ne k: x_j = 0}$
Let $\pr_k: R \to {R_k}'$ be the projection on the $k$th coordinate of $\struct {R, +, \circ}$ onto ${R_k}'$.

Then $\pr_k$ is an epimorphism.


Proof
From Ideal of External Direct Sum of Rings we already have that ${R_k}'$ is an ideal of $R$.
The result follows by application of Projection is Epimorphism.
$\blacksquare$


Also see
Canonical Injection from Ideal of External Direct Sum of Rings


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.8$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 3.1$: Direct sums




