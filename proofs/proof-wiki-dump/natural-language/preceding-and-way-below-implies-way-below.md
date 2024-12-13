# 

Source: https://proofwiki.org/wiki/Preceding_and_Way_Below_implies_Way_Below

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $u, x, y, z \in S$ such that

$u \preceq x \ll y \preceq z$
where $\ll$ denotes the way below relation.

Then

$u \ll z$


Proof
Let $D$ be a directed subset of $S$ such that

$D$ admits a supremum
and

$z \preceq \sup D$
By definition of transitivity:

$y \preceq \sup D$
By definition of way below relation:

$\exists d \in D: x \preceq d$
Thus by definition of transitivity:

$\exists d \in D: u \preceq d$
Thus by definition of way below relation:

$u \ll z$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_3:2




