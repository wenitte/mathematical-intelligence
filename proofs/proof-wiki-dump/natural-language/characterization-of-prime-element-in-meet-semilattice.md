# 

Source: https://proofwiki.org/wiki/Characterization_of_Prime_Element_in_Meet_Semilattice



Theorem
Let $L = \struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $p \in S$,

Then:

$p$ is prime element
if and only if:

for all non-empty finite subsets $A$ of $S$:
if $\inf A \preceq p$, then there exists element $x$ of $A$ such that $x \preceq p$.


Proof
Sufficient Condition
Let $p$ be prime element.
Let $A$ be non-empty finite subsets of $S$.
Define

$\map P X : \equiv X \ne \O \land \inf X \preceq p \implies \exists x \in X: x \preceq p$
where $X \subseteq S$.
We will prove that

$\forall x \in A, B \subseteq A: \map P B \implies \map P {B \cup \set x}$
Let $x \in A, B \subseteq A$ such that

$\map P B$
and

$B \cup \set x \ne \O$ and $\map \inf {B \cup \set x} \preceq p$
Case $B = \O$.
By Union with Empty Set:

$B \cup \set x = \set x$
By Infimum of Singleton:

$\inf \set x = x$
By definition of singleton:

$x \in \set x$
Thus

$\exists z \in B \cup \set x: z \preceq p$
$\Box$

Case $B \ne \O$.
By Subset of Finite Set is Finite:

$B$ is finite.
By Existence of Non-Empty Finite Infima in Meet Semilattice:

$B, \set x$ admit infima.
By Infimum of Infima:

$\map \inf {B \cup \set x} = \inf B \wedge \inf \set x$
By definition of prime element:

$\inf B \preceq p$ or $x \preceq p$
Case $\inf B \preceq p$.
By assumption:

$\exists z \in B: z \preceq p$
By definition of union:

$z \in B \cup \set x$
Thus

$\exists z \in B \cup \set x: z \preceq p$
$\Box$

Case $x \preceq p$.
By definitions of union and singleton:

$x \in B \cup \set x$
Thus

$\exists z \in B \cup \set x: z \preceq p$
$\Box$

By definition of empty set:

$\map P \O$
By Induction of Finite Set:

$\map P A$
Thus

if $\inf A \preceq p$, then there exists element $x$ of $A$ such that $x \preceq p$.
$\Box$


Necessary Condition
Suppose that

for all non-empty finite subsets $A$ of $S$:
if $\inf A \preceq p$, then there exists element $x$ of $A$ such that $x \preceq p$.
Let $x, y \in S$ such that

$x \wedge y \preceq p$
Define $A := \set {x, y}$
By definitions of non-empty set and finite set:

$A$ is non-empty finite subset of $S$.
By definition of meet:

$\inf A = x \wedge y$
By assumption:

$\exists z \in A: z \preceq p$
Thus by definition of unordered tuple:

$x \preceq p$ or $y \preceq p$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:22




