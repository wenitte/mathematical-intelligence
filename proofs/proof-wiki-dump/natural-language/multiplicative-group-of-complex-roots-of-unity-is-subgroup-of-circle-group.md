# 

Source: https://proofwiki.org/wiki/Multiplicative_Group_of_Complex_Roots_of_Unity_is_Subgroup_of_Circle_Group

Theorem
Let $n \in \Z$ be an integer such that $n > 0$.
Let $\struct {U_n, \times}$ denote the multiplicative group of complex $n$th roots of unity.
Let $\struct {K, \times}$ denote the circle group.

Then $\struct {U_n, \times}$ is a subgroup of $\struct {K, \times}$.


Proof
By definition of the multiplicative group of complex $n$th roots of unity:

$U_n := \set {z \in \C: z^n = 1}$
By definition of the circle group:

$K = \set {z \in \C: \cmod z = 1}$
By Modulus of Complex Root of Unity equals 1:

$\forall z \in U_n: \cmod z = 1$
Thus:

$U_n \subseteq K$
We further have that the operation $\times$ on both $U_n$ and $K$ is complex multiplication.
Finally, from Roots of Unity under Multiplication form Cyclic Group, we have that $\struct {U_n, \times}$ is a group.
The result follows by definition of subgroup.
$\blacksquare$





