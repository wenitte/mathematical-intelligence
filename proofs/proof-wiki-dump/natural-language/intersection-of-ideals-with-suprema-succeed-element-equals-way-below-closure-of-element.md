# 

Source: https://proofwiki.org/wiki/Intersection_of_Ideals_with_Suprema_Succeed_Element_equals_Way_Below_Closure_of_Element

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $x \in S$.

Then:

$\ds \bigcap \set {I \in \mathit {Ids}: x \preceq \sup I} = x^\ll$
where $\mathit {Ids}$ denotes the set of all ideals in $L$.


Proof
By Supremum of Lower Closure of Element:

$\map \sup {x^\preceq} = x$
By Lower Closure of Element is Ideal:

$x^\preceq \in \mathit {Ids}$
Then by definition of reflexivity:

$x^\preceq \in \set {I \in \mathit {Ids}: x \preceq \sup I}$
We will prove that:

$\ds \bigcap \set {I \in \mathit {Ids}: x \preceq \sup I} \subseteq x^\ll$
Let $z \in \ds \bigcap \set {I \in \mathit {Ids}: x \preceq \sup I}$
By definition of intersection:

$\forall I \in \mathit {Ids}: x \preceq \sup I \implies z \in I$
By Way Below iff Second Operand Preceding Supremum of Ideal implies First Operand is Element of Ideal:

$z \ll x$
Thus by definition of way below closure:

$z \in x^\ll$
$\Box$

By definition of set equality, it remains to prove the pposite inclusion.
Let $z \in x^\ll$
By definition of way below closure:

$z \ll x$
We will prove that

$\forall Y \in \set {I \in \mathit {Ids}: x \preceq \sup I}: z \in Y$
Let $Y \in \set {I \in \mathit {Ids}: x \preceq \sup I}$
Then

$Y \in \mathit {Ids}$ and $x \preceq \sup Y$
Thus Way Below iff Second Operand Preceding Supremum of Ideal implies First Operand is Element of Ideal:

$z \in Y$
$\Box$

Thus by definition of intersection:

$z \in \ds \bigcap \set {I \in \mathit {Ids}: x \preceq \sup I}$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:34




