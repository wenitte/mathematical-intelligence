# 

Source: https://proofwiki.org/wiki/Canonical_Injection_from_Ideal_of_External_Direct_Sum_of_Rings



Theorem
Let $\struct {R_1, +_1, \circ_1}, \struct {R_2, +_2, \circ_2}, \dotsc, \struct {R_n, +_n, \circ_n}$ be rings.
Let $\ds \struct {R, +, \circ} = \prod_{k \mathop = 1}^n \struct {R_k, +_k, \circ_k}$ be their external direct product.

For each $k \in \closedint 1 n$, let:

$R'_k = \set {\tuple {x_1, \dotsc, x_n} \in R: \forall j \ne k: x_j = 0}$

Let $\inj_k: R_k \to R$ be the canonical injection on the $k$th coordinate from $R_k$ into $\struct {R, +, \circ}$.
Let $\pr_k: R \to R'_k$ be the projection on the $k$th coordinate of $\struct {R, +, \circ}$ onto $R'_k$.

Then:

$\inj_k: R_k \to R'_k$ is an isomorphism
Its inverse is the restriction of $\pr_k$ to $R'_k$.


Proof
From Ideal of External Direct Sum of Rings we have that $R'_k$ is an ideal of $R$, and thus a subring of $R$.
The result follows by application of Canonical Injection is Monomorphism.
$\blacksquare$


Also see
Projection onto Ideal of External Direct Sum of Rings


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.8$




