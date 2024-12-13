# 

Source: https://proofwiki.org/wiki/Ideal_induced_by_Congruence_Relation_defines_that_Congruence



Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\EE$ be a congruence relation on $R$.
Let $J = \eqclass {0_R} \EE$ be the ideal induced by $\EE$.

Then the equivalence defined by the coset space $\struct {R, +} / \struct {J, +}$ is $\EE$ itself.


Proof
Let $J = \eqclass {0_R} \EE$.
From Congruence Relation on Ring induces Ideal, we have that $J$ is an ideal of $R$.
From Ideal is Additive Normal Subgroup, we have that $\struct {J, +}$ is a normal subgroup of $\struct {R, +}$.

From Normal Subgroup induced by Congruence Relation defines that Congruence, the equivalence defined by the partition $\struct {R, +} / \struct {J, +}$ is $\EE$.
As $\EE$ was the congruence relation on $R$ that was originally posited, we already know that it is compatible with $\circ$.

Thus the equivalence defined by $J$ is the same congruence relation on $R$ that gave rise to $J$ to start with.
Hence the result.
$\blacksquare$


Also see
Quotient Ring is Ring


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorems $22.2$




