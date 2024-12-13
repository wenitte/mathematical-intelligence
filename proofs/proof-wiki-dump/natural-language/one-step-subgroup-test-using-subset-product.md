# 

Source: https://proofwiki.org/wiki/One-Step_Subgroup_Test_using_Subset_Product



Theorem
Let $G$ be a group.
Let $\O \subset H \subseteq G$ be a non-empty subset of $G$.

Then $H$ is a subgroup of $G$ if and only if:

$H H^{-1} \subseteq H$
where:

$H^{-1}$ is the inverse of $H$
$H H ^{-1}$ is the product of $H$ with $H^{-1}$.


Proof
This is a reformulation of the One-Step Subgroup Test in terms of subset product.


Necessary Condition
Let $H$ be a subgroup of $G$.
Let $x, y \in H$.
Then by the definition of subset product:

$x y^{-1} \in H H^{-1}$

As $H \le G$, from the One-Step Subgroup Test, $x y^{-1} \in H$.
Thus $H H^{-1} \subseteq H$.
$\Box$


Sufficient Condition
Let:

$H H^{-1} \subseteq H$
From the definition of subset product:

$\forall x, y \in H: x y^{-1} \in H$
So by the One-Step Subgroup Test, $H$ is a subgroup of $G$.
$\blacksquare$


Also presented as
This result can also be presented as:
$H$ is a subgroup of $G$ if and only if:

$H^{-1} H \subseteq H$
and the same argument applies.


Also see
Two-Step Subgroup Test using Subset Product


Linguistic Note
The One-Step Subgroup Test is so called despite the fact that, on the face of it, there are two steps to the test.
This is because the fact that the subset must be non-empty is frequently assumed as one of the "givens", and is then not specifically included as one of the tests to be made.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Theorem $9.1: \ 3^\circ$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Exercise $9.10 \ \text {(b)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Theorem $2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $6 \ \text{(iii)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms




