# 

Source: https://proofwiki.org/wiki/Epimorphism_Preserves_Rings

Theorem
Let $\struct {R_1, +_1, \circ_1}$ be a ring, and $\struct {R_2, +_2, \circ_2}$ be a closed algebraic structure.
Let $\phi: R_1 \to R_2$ be an epimorphism.

Then $\struct {R_2, +_2, \circ_2}$ is a ring.


Proof
From Epimorphism Preserves Groups, we have that if $\struct {R_1, +_1}$ is a group then so is $\struct {R_2, +_2}$.
From Epimorphism Preserves Semigroups, we have that if $\struct {R_1, \circ_1}$ is a semigroup then so is $\struct {R_2, \circ_2}$.
From Epimorphism Preserves Distributivity, we have that if $\circ_1$ distributes over $+_1$ then $\circ_2$ distributes over $+_2$.

So it follows from the definition of a ring that if $\struct {R_1, +_1, \circ_1}$ is a ring then so is $\struct {R_2, +_2, \circ_2}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.1$




