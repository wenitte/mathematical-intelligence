# 

Source: https://proofwiki.org/wiki/If_Every_Element_Pseudoprime_is_Prime_then_Way_Below_Relation_is_Multiplicative

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below continuous distributive lattice.
Let every element $p \in S$: $p$ is pseudoprime $\implies p$ is prime.

Then $\ll$ is multiplicative
where $\ll$ denotes the way below relation of $L$.


Proof
Let $a, x, y \in S$ such that:

$a \ll x$ and $a \ll y$
Aiming for a contradiction, suppose:

$a \not\ll x \wedge y$
We will prove that:

$\forall z \in S: z \in \paren {x \wedge y}^\ll \implies z \notin a^\succeq$
Let $z \in S$ such that:

$z \in \paren {x \wedge y}^\ll$
By definition of way below closure:

$z \ll x \wedge y$
Aiming for a contradiction, suppose:

$z \in a^\succeq$
By definition of upper closure of element:

$a \preceq z$
By Preceding and Way Below implies Way Below:

$a \ll x \wedge y$
This contradicts $a \not\ll x \wedge y$
$\Box$

By definitions of empty set and intersection:

$\paren {x \wedge y}^\ll \cap a^\succeq = \O$
By Way Below Closure is Ideal in Bounded Below Join Semilattice:

$\paren {x \wedge y}^\ll$ is ideal in $L$.
By Upper Closure of Element is Filter:

$a^\succeq$ is filter on $L$.
By If Ideal and Filter are Disjoint then There Exists Prime Ideal Including Ideal and Disjoint from Filter:

there exists prime ideal $P$ in $L$:
$\paren {x \wedge y}^\ll \subseteq P$ and $P \cap a^\succeq = \O$
By definition of pseudoprime element:

$\sup P$ is pseudoprime.
By assumption:

$\sup P$ is prime.
By definition of reflexivity:

$a \preceq a$
By definition of upper closure of element:

$a \in a^\succeq$
By the axiom of approximation:

$\sup \paren {x \wedge y}^\ll = x \wedge y$
By definition of up-complete:

$\paren {x \wedge y}^\ll$ admits a supremum
and

$P$ admits a supremum.
By Supremum of Subset:

$x \wedge y \preceq \sup P$
By definition of prime element:

$x \preceq \sup P$ or $y \preceq \sup P$
By Way Below iff Second Operand Preceding Supremum of Ideal implies First Operand is Element of Ideal:

$a \in P$
By definition of intersection:

$a \in P \cap a^\succeq$
This contradicts $P \cap a^\succeq = \O$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:46




