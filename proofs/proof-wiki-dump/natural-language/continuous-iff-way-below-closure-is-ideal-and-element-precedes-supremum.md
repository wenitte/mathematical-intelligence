# 

Source: https://proofwiki.org/wiki/Continuous_iff_Way_Below_Closure_is_Ideal_and_Element_Precedes_Supremum



Theorem
Let $L = \struct {S, \wedge, \preceq}$ be an up-complete meet semilattice.
Then

$L$ is continuous
if and only if

$\forall x \in S: x^\ll$ is an ideal in $L$ and $x \preceq \map \sup {x^\ll}$ and:
for every ideal $I$ in $L$: $x \preceq \sup I \implies x^\ll \subseteq I$
where $x^\ll$ denotes the way below closure of $x$.


Proof
Sufficient Condition
Let $L$ be continuous.
Let $x \in S$.
By definition of continuous:

$x^\ll$ is directed.
By Way Below Closure is Lower Section:

$x^\ll$ is a lower section.
Thus by definition:

$x^\ll$ is an ideal in $L$.
By definition of continuous:

$L$ satisfies the axiom of approximation.
By the axiom of approximation:

$x = \map \sup {x^\ll}$
Thus by definition of reflexivity:

$x \preceq \map \sup {x^\ll}$
Let $I$ be an ideal in $L$ such that

$x \preceq \sup I$
We will prove that

$x^\ll \subseteq I$
Let $y \in x^\ll$
By definition of way below closure:

$y \ll x$
Thus by Way Below iff Second Operand Preceding Supremum of Ideal implies First Operand is Element of Ideal:

$y \in I$
$\Box$


Necessary Condition
Assume that:

$\forall x \in S: x^\ll$ is an ideal in $L$ and $x \preceq \map \sup {x^\ll}$ and:
for every ideal $I$ in $L$: $x \preceq \sup I \implies x^\ll \subseteq I$
Let $x \in S$.
By assumption:

$x \preceq \map \sup {x^\ll}$
By Way Below implies Preceding:

$x$ is upper bound for $x^\ll$
By definition of supremum:

$\map \sup {x^\ll} \preceq x$
Thus by definition of antisymmetry:

$x = \map \sup {x^\ll}$
Thus by definition:

$L$ satisfies the axiom of approximation.
Thus by assumption and definition of ideal:

$\forall x \in S: x^\ll$ is directed.
Hence $L$ is continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_5:1




