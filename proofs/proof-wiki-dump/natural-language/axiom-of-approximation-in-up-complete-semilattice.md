# 

Source: https://proofwiki.org/wiki/Axiom_of_Approximation_in_Up-Complete_Semilattice



Theorem
Let $\mathscr S = \struct {S, \wedge, \preceq}$ be an up-complete meet semilattice.
Let:

$\forall x \in S: x^\ll$ is directed

Then:

$\mathscr S$ satisfies the axiom of approximation
if and only if:

$\forall x, y \in S: x \npreceq y \implies \exists u \in S: u \ll x \land u \npreceq y$


Proof
Sufficient Condition
Let $\mathscr S$ satisfy the axiom of approximation.
Let $x, y \in S$ such that

$x \npreceq y$
By assumption:

$x^\ll$ is directed.
By definition of up-complete:

$x^\ll$ admits a supremum.
By the axiom of approximation:

$x = \map \sup {x^\ll}$
By definition of supremum:

if $y$ is upper bound for $x^\ll$, then $x \preceq y$
By definition of upper bound:

$\exists u \in x^\ll: u \npreceq y$
Thus by definition of way below closure:

$\exists u \in S: u \ll x \land u \npreceq y$
$\Box$


Necessary Condition
Let:

$\forall x, y \in S: x \npreceq y \implies \exists u \in S: u \ll x \land u \npreceq y$
Let $x \in S$.
By assumption:

$x^\ll$ is directed.
By definition of up-complete:

$x^\ll$ admits a supremum.
By Operand is Upper Bound of Way Below Closure:

$x$ is upper bound for $x^\ll$
We will prove that:

$\forall y \in S: y$ is upper bound for $x^\ll \implies x \preceq y$
Let $y \in S$ such that:

$y$ is upper bound for $x^\ll$
Aiming for a contradiction, suppose:

$x \npreceq y$
By assumption:

$\exists u \in S: u \ll x \land u \npreceq y$
By definition of way below closure:

$u \in x^\ll$
By definition of upper bound

$u \preceq y$
This contradicts $u \npreceq y$
$\Box$
Thus by definition of supremum:

$x = \map \sup {x^\ll}$
Thus by definition:

$\mathscr S$ satisfies the axiom of approximation.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_3:24




