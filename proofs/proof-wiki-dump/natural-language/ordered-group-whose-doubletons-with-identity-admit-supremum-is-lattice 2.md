# 

Source: https://proofwiki.org/wiki/Ordered_Group_whose_Doubletons_with_Identity_admit_Supremum_is_Lattice

Theorem
Let $\struct {G, \odot, \preccurlyeq}$ be an ordered group whose identity element is $e$.
Let $\preccurlyeq$ be such that for all $x \in G$, $\set {x, e}$ admits a supremum.

Then $\preccurlyeq$ is a lattice ordering.


Proof
Let $x, y \in G$ be arbitrary.
We have that $y = x \odot z$ for some $z \in G$.
From Suprema in Ordered Group:

$\set {z, e}$ admits a supremum if and only if $\set {x \odot z, x \odot e}$ admits a supremum.
It follows that:

$\set {x, y}$ admits a supremum.
As $x$ and $y$ are arbitrary, it follows that:

$\forall x, y \in G: \set {x, y}$ admits a supremum.
Let $x = a^{-1}$ and $y = b^{-1}$.
That is:

$a = x^{-1}$ and $b = y^{-1}$

Thus we have that:

$\set {a, b}$ admits a supremum.
From Inverse of Supremum in Ordered Group is Infimum of Inverses it follows directly that:

$\set {a^{-1}, b^{-1} }$ admits an infimum
from which:

$\set {x, y}$ admits an infimum.

As $x$ and $y$ are arbitrary, we have that:

$\forall x, y \in G: \set {x, y}$ admits both a supremum and an infimum,
The result follows by definition of lattice ordering.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.12$




