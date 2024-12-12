# 

Source: https://proofwiki.org/wiki/Brouwerian_Lattice_iff_Meet-Continuous_and_Distributive



Theorem
Let $\mathscr S = \left({S, \vee, \wedge, \preceq}\right)$ be a complete lattice.

Then

$\mathscr S$ is a Brouwerian lattice
if and only if

$\mathscr S$ is meet-continuous and distributive.


Proof
Sufficient Condition
Let $\mathscr S$ be a Brouwerian lattice.
By Relative Pseudocomplement and Shift Mapping form Galois Connection in Brouwerian Lattice:

for every $x \in S$, a mapping $f: S \to S$ if $\forall y \in S: f\left({y}\right) = x \wedge y$, then $f$ is lower adjoint of Galois connection
By Shift Mapping is Lower Adjoint iff Meet is Distributive with Supremum:

$\forall x \in S, X \subseteq S: x \wedge \sup X = \sup \left\{ {x \wedge y: y \in X}\right\}$
Thus by definition of complete lattice:

$\mathscr S$ is up-complete.
Thus

for every an element $x \in S$ and a directed subset $D$ of $S$: $x \wedge \sup D = \sup \left\{ {x \wedge d: d \in D}\right\}$
Thus by definition

$\mathscr S$ is meet-continuous.
Thus by Brouwerian Lattice is Distributive:

$\mathscr S$ is distributive.
$\Box$


Necessary Condition
Assume that:

$\mathscr S$ is meet-continuous and distributive.
Let $x \in S$.
Define a mapping $f: S \to S$:

$\forall y \in S: f\left({y}\right) = x \wedge y$
By Meet-Continuous and Distributive implies Shift Mapping Preserves Finite Suprema:

$f$ preserves finite suprema.
By Meet-Continuous implies Shift Mapping Preserves Directed Suprema:

$f$ preserves directed suprema.
By Mapping Preserves Finite and Directed Suprema:

$f$ preserves all suprema.
By All Suprema Preserving Mapping is Lower Adjoint of Galois Connection:

$f$ is lower adjoint of Galois connection.
Thus by Brouwerian Lattice iff Shift Mapping is Lower Adjoint:

$\mathscr S$ is Brouwerian lattice.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:56




