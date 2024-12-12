# 

Source: https://proofwiki.org/wiki/Continuous_iff_For_Every_Element_There_Exists_Ideal_Element_Precedes_Supremum



Theorem
Let $L = \struct {S, \wedge, \preceq}$ be an up-complete meet semilattice.
Then

$L$ is continuous
if and only if

for every element $x$ of $S$ there exists ideal $I$ in $L$:
$x \preceq \sup I$ and for every ideal $J$ in $L: x \preceq \sup J \implies I \subseteq J$


Proof
Sufficient Condition
Let $L$ be continuous.
By Continuous iff Way Below Closure is Ideal and Element Precedes Supremum:

$\forall x \in S: x^\ll$ is an ideal in $L$ and $x \preceq \map \sup {x^\ll}$ and
for every ideal $I$ in $L$: $x \preceq \sup I \implies x^\ll \subseteq I$
where $x^\ll$ denotes the way below closure of $x$.
Thus

for every element $x$ of $S$ there exists ideal $I$ in $L$:
$x \preceq \sup I$ and for every ideal $J$ in $L: x \preceq \sup J \implies I \subseteq J$
$\Box$


Necessary Condition
Assume that

for every element $x$ of $S$ there exists ideal $I$ in $L$:
$x \preceq \sup I$ and for every ideal $J$ in $L: x \preceq \sup J \implies I \subseteq J$
Let $x \in S$.
There exists ideal $I$ in $L$:

$x \preceq \sup I$ and for every ideal $J$ in $L: x \preceq \sup J \implies I \subseteq J$
We will prove that

$I \subseteq x^\ll$
where $x^\ll$ denotes the way below closure of $x$.
Let $y \in I$.
Let $J$ be an ideal in $L$ such that

$x \preceq \sup J$
Then $I \subseteq J$
Thus by definition of subset:

$y \in J$
By Way Below iff Second Operand Preceding Supremum of Ideal implies First Operand is Element of Ideal:

$y \ll x$
Thus by definition of way below closure:

$y \in x^\ll$
$\Box$

By Way Below iff Second Operand Preceding Supremum of Ideal implies First Operand is Element of Ideal

$\forall y \in x^\ll: y \in I$
By definition of subset:

$x^\ll \subseteq I$
Thus by definition of set equality:

$\forall x \in S: x^\ll$ is an ideal in $L$ and $x \preceq \map \sup {x^\ll}$ and
for every ideal $I$ in $L$: $x \preceq \sup I \implies x^\ll \subseteq I$
Hence by Continuous iff Way Below Closure is Ideal and Element Precedes Supremum:

$L$ is continuous
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_5:2




