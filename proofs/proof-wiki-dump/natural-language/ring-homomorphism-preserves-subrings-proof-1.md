# 

Source: https://proofwiki.org/wiki/Ring_Homomorphism_Preserves_Subrings/Proof_1

Theorem
Let $\phi: \struct {R_1, +_1, \circ_1} \to \struct {R_2, +_2, \circ_2}$ be a ring homomorphism.
Let $S$ be a subring of $R_1$.

Then $\phi \sqbrk S$ is a subring of $R_2$.


Proof
Since $S \ne \O$, $\phi \sqbrk S \ne \O$.
From Group Homomorphism Preserves Subgroups, $\struct {\phi \sqbrk S, +_2}$ is a subgroup of $\struct {R_2, +_2}$.
From Homomorphism Preserves Subsemigroups, $\struct {\phi \sqbrk S, \circ_2}$ is a subsemigroup of $\struct {R_2, \circ_2}$.
Thus, as $\struct {R_2, +_2}$ is a group and $\struct {R_2, \circ_2}$ is a semigroup, the result follows.
$\blacksquare$





