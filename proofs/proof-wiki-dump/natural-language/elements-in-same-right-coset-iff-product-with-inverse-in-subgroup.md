# 

Source: https://proofwiki.org/wiki/Elements_in_Same_Right_Coset_iff_Product_with_Inverse_in_Subgroup



Theorem
Let $G$ be a group.
Let $H$ be a subgroup of $G$.
Let $x, y \in G$.

Then:

$x, y$ are in the same right coset of $H$ if and only if $x y^{-1} \in H$


Proof
Let $H x$ denote the right coset of $H$ by $x$.
First we note that, from Congruence Class Modulo Subgroup is Coset, we have that the right cosets of $G$ form a partition of $G$.


Sufficient Condition
Suppose $x, y$ are in the same left coset of $H$.
It follows from Congruence Class Modulo Subgroup is Coset that:

if $x \in H y$ and $y \in H x$ iff $H x = H y$
From Cosets are Equal iff Product with Inverse in Subgroup, we have that:

$H x = H y \iff x y^{-1} \in H$
So if $x, y$ are in the same right coset of $H$ then $x y^{-1} \in H$.
$\Box$


Necessary Condition
Now suppose that $x y^{-1} \in H$.
From Right Cosets are Equal iff Product with Inverse in Subgroup, we have that:

$H x = H y \iff x y^{-1} \in H$
It follows from Congruence Class Modulo Subgroup is Coset that:

$x \in H y$ and $y \in H x$ iff $H x = H y$
and so:

$x, y$ are in the same left coset of $H$
Hence $x, y$ are in the same right coset of $H$ if $x y^{-1} \in H$.
$\blacksquare$


Also see
Elements in Same Left Coset iff Product with Inverse in Subgroup


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 42.6 \ \text {(4R)}$ Another approach to cosets
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $7 \ \text{(ii)}$




