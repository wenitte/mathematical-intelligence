# 

Source: https://proofwiki.org/wiki/Meet_Irreducible_iff_Finite_Infimum_equals_Element



Theorem
Let $L = \left({S, \wedge, \preceq}\right)$ be a meet semilattice.
Let $x \in S$.
Then

$x$ is meet irreducible
if and only if

for every non-empty finite subset $A$ of $S$: $x = \inf A \implies x \in A$


Proof
Sufficient Condition
Let $x$ be meet irreducible.
We will prove the result by induction on cardinality of $A$.

Base case
for every non-empty subset $A$ of $S$: $\left\vert{A}\right\vert = 1 \land x = \inf A \implies x \in A$
Let $A$ be a non-empty subset of $S$ such that

$\left\vert{A}\right\vert = 1 \land x = \inf A$
Then

$A = \left\{ {a}\right\}$
By Infimum of Singleton:

$x = a$
Thus by definition of singleton:

$x \in A$
$\Box$

Induction Hypothesis
$n \ge 1$ and for every non-empty subset $A$ of $S$: $\left\vert{A}\right\vert = n \land x = \inf A \implies x \in A$
Induction Step
$n \ge 1$ and for every non-empty subset $A$ of $S$: $\left\vert{A}\right\vert = n+1 \land x = \inf A \implies x \in A$
Let $A$ be a non-empty subset of $S$ such that

$\left\vert{A}\right\vert = n+1 \land x = \inf A$
Then

$A = \left\{ {a_1, \dots, a_n, a_{n+1} }\right\}$
By definition of infimum:

$\inf A = \left({a_1 \wedge \dots \wedge a_n}\right) \wedge a_{n+1}$
By definition of meet irreducible:

$x = a_1 \wedge \dots \wedge a_n$ or $x = a_{n+1}$
By Induction Hypothesis:

$x \in \left\{ {a_1, \dots, a_n}\right\}$ or $x = a_{n+1}$
Thus by definition of unordered tuple:

$x \in A$
$\Box$

Necessary Condition
Assume that

for every non-empty finite subset $A$ of $S$: $x = \inf A \implies x \in A$
Let $y, z \in S$ such that

$x = y \wedge z$
By definition of meet:

$x = \inf \left\{ {y, z}\right\}$
By assumption:

$x \in \left\{ {y, z}\right\}$
Thus by definition of unordered tuple:

$x = y$ or $x = z$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:11




