# 

Source: https://proofwiki.org/wiki/Not_Preceding_implies_There_Exists_Meet_Irreducible_Element_Not_Preceding

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below continuous lattice.
Let $x, y \in S$ such that

$y \npreceq x$

Then

$\exists p \in S: p$ is meet irreducible and $x \preceq p$ and $y \npreceq p$


Proof
By definition of continuous:

$L$ satisfies the axiom of approximation
and

$\forall x \in S: x^\ll$ is directed.
By Axiom of Approximation in Up-Complete Semilattice

$\exists u \in S: u \ll y \land u \npreceq x$
By Way Below implies There Exists Way Below Open Filter Subset of Way Above Closure:

there exists way below open filter $F$ in $L$: $y \in F \subseteq u^\gg$
By Way Above Closure is Subset of Upper Closure of Element:

$u^\gg \subseteq u^\succeq$
By definition of upper section:

$x \notin F$
By definition of relative complement:

$x \in \relcomp S F$
By Upper Way Below Open Subset Complement is Non Empty implies There Exists Maximal Element of Complement:

$\exists m \in \relcomp S F: x \preceq m \land m = \max \relcomp S F$
Thus by Maximal Element of Complement of Filter is Meet Irreducible:

$m$ is meet irreducible.
Thus

$x \preceq m$
Aiming for a contradiction, suppose

$y \preceq m$
By definition of upper section:

$m \in F$
This contradicts $m \in \relcomp S F$ by definition of greatest element.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:14




