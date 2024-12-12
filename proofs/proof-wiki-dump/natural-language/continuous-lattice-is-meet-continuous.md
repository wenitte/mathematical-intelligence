# 

Source: https://proofwiki.org/wiki/Continuous_Lattice_is_Meet-Continuous

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below continuous lattice.

Then $L$ is meet-continuous.


Proof
Let $x \in S$, $D$ be a directed subset of $S$ such that

$x \preceq \sup D$
By Way Below Closure is Directed in Bounded Below Join Semilattice:

$x^\ll$ is directed.
By definition of continuous:

$L$ is up-complete and satisfies the axiom of approximation.
By definition of up-complete:

$x^\ll$ admits a supremum.
By Lower Closure of Element is Ideal and definition of ideal:

$\paren {\sup \set {x \wedge d: d \in D} }^\preceq$ is directed.
By definition of up-complete:

$\paren {\sup \set {x \wedge d: d \in D} }^\preceq$ admits a supremum.
We will prove that

$x^\ll \subseteq \paren {\sup \set {x \wedge d: d \in D} }^\preceq$
Let $a \in x^\ll$
By definition of way below closure:

$a \ll x$
By Way Below implies Preceding:

$a \preceq x$
By definition of way below relation:

$\exists d \in D: a \preceq d$
By Meet is Idempotent and Meet Semilattice is Ordered Structure:

$a = a \wedge a \preceq x \wedge d \in \set {x \wedge y: y \in D}$
By definition of supremum:

$\sup \set {x \wedge y: y \in D}$ is upper bound for $\set {x \wedge y: y \in D}$
By definition of upper bound:

$x \wedge d \preceq \sup \set {x \wedge y: y \in D}$
By definition of transitivity:

$a \preceq \sup \set {x \wedge y: y \in D}$
Thus by definition of lower closure of element:

$a \in \paren {\sup \set {x \wedge d: d \in D} }^\preceq$
$\Box$

By Supremum of Subset:

$\map \sup {x^\ll} \preceq \map \sup {\paren {\sup \set {x \wedge d: d \in D} }^\preceq}$
By the axiom of approximation and Supremum of Lower Closure of Element:

$x \preceq \sup \set {x \wedge d: d \in D}$
By definition:

$x$ is upper bound for $\set {x \wedge d: d \in D}$
By definition of supremum:

$\sup \set {x \wedge d: d \in D} \preceq x$
Thus by definition of antisymmetry:

$x = \sup \set {x \wedge d: d \in D}$
Thus by Meet-Continuous iff if Element Precedes Supremum of Directed Subset then Element equals Supremum of Meet of Element by Directed Subset:

$L$ is meet-continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:38




