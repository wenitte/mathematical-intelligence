# 

Source: https://proofwiki.org/wiki/Irreducible_Hausdorff_Space_is_Singleton

Theorem
Let $T = \struct {S, \tau}$ be a non-empty topological space which is irreducible and Hausdorff.

Then $S$ is a singleton.


Proof
Suppose $S$ has exactly one element.
Then by definition $T = \struct {S, \tau}$ is the trivial topological space.
Hence, from Trivial Topological Space is Irreducible, $S$ is irreducible.
$\Box$

Suppose $S$ has at least two distinct elements:

$x, y \in S, x \ne y$
By definition of irreducible space:

there are no two disjoint open sets $T$ such that $x$ is in one and $y$ is in the other:
$\nexists U_1, U_2 \in \tau: U_1 \cap U_2 = \O, x \in U_1, y \in U_2$

This contradicts the fact that $T$ is Hausdorff.
Thus $S$ has only one element.
$\blacksquare$





