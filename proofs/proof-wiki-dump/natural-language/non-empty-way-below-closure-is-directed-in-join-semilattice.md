# 

Source: https://proofwiki.org/wiki/Non-Empty_Way_Below_Closure_is_Directed_in_Join_Semilattice

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a join semilattice.
Let $x \in S$ such that:

$x^\ll \ne \O$
where $x^\ll$ denotes the way below closure of $x$.

Then $x^\ll$ is directed.


Proof
By assumption:

$x^\ll$ is a non-empty set.
Let $y, z \in x^\ll$.
By definition of way below closure:

$y \ll x$ and $z \ll x$
By Join is Way Below if Operands are Way Below:

$y \vee z \ll x$
By definition of way below closure:

$y \vee z \in x^\ll$
By Join Succeeds Operands:

$y \preceq y \vee z$ and $z \preceq y \vee z$
Thus by definition:

$x^\ll$ is directed.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_3:funcreg 4




