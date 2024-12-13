# 

Source: https://proofwiki.org/wiki/Prime_Element_iff_Meet_Irreducible_in_Distributive_Lattice

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a distributive lattice.
Let $p \in S$.

Then $p$ is a prime element if and only if $p$ is meet irreducible.


Proof
By Prime Element is Meet Irreducible:

if $p$ is a prime element, then $p$ is meet irreducible.
Assume that:

$p$ is meet irreducible.
Let $x, y \in S$ such that:

$x \wedge y \preceq p$













\(\ds p\)

\(=\)







\(\ds p \vee \paren {x \wedge y}\)





Preceding iff Join equals Larger Operand














\(\ds \)

\(=\)







\(\ds \paren {p \vee x} \wedge \paren {p \vee y}\)





Definition of Distributive Lattice



By definition of meet irreducible:

$p = p \vee x$ or $p = p \vee y$
Thus by Preceding iff Join equals Larger Operand:

$x \preceq p$ or $y \preceq p$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:27




