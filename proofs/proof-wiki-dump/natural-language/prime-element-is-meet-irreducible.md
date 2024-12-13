# 

Source: https://proofwiki.org/wiki/Prime_Element_is_Meet_Irreducible

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a lattice.
Let $p \in S$.
Let $p$ be a prime element of $L$.

Then $p$ is meet irreducible in $L$.


Proof
Let $p$ be a prime element.
Let $x, y \in S$ such that

$p = x \wedge y$
By definition of reflexivity:

$x \wedge y \preceq p$
By definition of prime element:

$x \preceq p$ or $y \preceq p$
By Meet Precedes Operands:

$p \preceq x$ and $p \preceq y$
Thus by definition of antisymmetry:

$p = x$ or $p = y$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:24




