# 

Source: https://proofwiki.org/wiki/Elements_in_Same_Left_Coset_iff_Product_with_Inverse_in_Subgroup



Theorem
Let $G$ be a group
Let $H$ be a subgroup of $G$.
Let $x, y \in G$.

Then:

$x, y$ are in the same left coset of $H$ if and only if $x^{-1} y \in H$.


Proof
Let: $x H$ denote the left coset of $H$ by $x$
First we note that, from Congruence Class Modulo Subgroup is Coset, we have that the left cosets of $G$ form a partition of $G$.


Sufficient Condition
Suppose $x, y$ are in the same left coset of $H$.
It follows from Congruence Class Modulo Subgroup is Coset that:

$x \in y H$ and $y \in x H$ if and only if $x H = y H$

From Cosets are Equal iff Product with Inverse in Subgroup, we have that:

$x H = y H \iff x^{-1} y \in H$
So if $x, y$ are in the same left coset of $H$ then $x^{-1} y \in H$.
$\Box$


Necessary Condition
Suppose that $x^{-1} y \in H$.
From Left Cosets are Equal iff Product with Inverse in Subgroup, we have that:

$x H = y H \iff x^{-1} y \in H$
Again, it follows from Congruence Class Modulo Subgroup is Coset that:

$x \in y H$ and $y \in x H$ iff $x H = y H$
and so $x, y$ are in the same left coset of $H$.
$\blacksquare$


Also see
Elements in Same Right Coset iff Product with Inverse in Subgroup


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 42.6 \ \text {(4L)}$ Another approach to cosets




