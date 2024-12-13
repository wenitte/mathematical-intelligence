# 

Source: https://proofwiki.org/wiki/Integral_Ideal_is_Ideal_of_Ring

Theorem
Let $J$ be a non-empty subset of the set of integers $\Z$.

Then:

$J$ is an integral ideal
if and only if:

$J$ is an ideal of the ring of integers $\struct {\Z, +, \times}$.


Proof
Let $J \subseteq \Z$ fulfil the conditions of an integral ideal:

$(1): \quad n, m \in J \implies m + n \in J, m - n \in J$
$(2): \quad n \in J, r \in \Z \implies r n \in J$

First note that $J$ is non-empty by definition.

Then from $(1)$ we have in particular:

$n, m \in J \implies m - n \in J$
Thus by the One-Step Subgroup Test:

$\struct {J, +}$ is a subgroup of the additive group of integers $\struct {\Z, +}$.

Then from $(2)$ we have:

$n \in J, r \in \Z \implies r n \in J$
and by Integer Multiplication is Commutative it follows that:

$n \in J, r \in \Z \implies n r \in J$

Thus it is seen that the conditions are fulfilled for $J$ to be an ideal of the ring of integers $\struct {\Z, +, \times}$.
$\Box$

Suppose $J \subseteq \Z$ such that:

$(3): \quad \struct {J, +}$ is a subgroup of $\struct {\Z, +}$
$(4): \quad \forall n \in J: \forall r \in R: n r \in J \land r n \in J$
From $(4)$, $(2)$ immediately follows.
From $(3)$ it follows from the One-Step Subgroup Test that:

$\forall n, m \in J: m - n \in J$
which is a restatement of $(1)$.
Thus the conditions are fulfilled for $J$ to be an integral ideal.
$\blacksquare$

Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.8$ Algebraic properties of $p$-adic integers




