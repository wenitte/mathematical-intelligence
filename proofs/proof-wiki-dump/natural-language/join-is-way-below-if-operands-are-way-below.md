# 

Source: https://proofwiki.org/wiki/Join_is_Way_Below_if_Operands_are_Way_Below

Theorem
Let $\struct {S, \vee, \preceq}$ be a join semilattice.
Let $x, y, z \in S$ such that

$x \ll z$ and $y \ll z$
where $\ll$ denotes the way below relation.

Then

$x \vee y \ll z$


Proof
Let $D$ be a directed subset of $S$ such that

$D$ admits a supremum
and

$z \preceq \sup D$
By definition of way below relation:

$\exists d_1 \in D: x \preceq d_1$
and

$\exists d_2 \in D: y \preceq d_2$
By definition of directed subset:

$\exists d \in D: d_1 \preceq d$ and $d_2 \preceq d$
By definition of transitivity:

$x \preceq d$ and $y \preceq d$
Thus by definition of supremum:

$x \vee y \preceq d$
Thus by definition way below relation:

$x \vee y \ll z$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_3:3




