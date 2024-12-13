# 

Source: https://proofwiki.org/wiki/Meet-Continuous_iff_if_Element_Precedes_Supremum_of_Directed_Subset_then_Element_equals_Supremum_of_Meet_of_Element_by_Directed_Subset



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be an up-complete lattice.

Then

$L$ is meet-continuous
if and only if:

$\forall x \in S$, the directed subset $D$ of $S: x \preceq \sup D \implies x = \sup \set {x \wedge d: d \in D}$


Proof
Sufficient Condition
Let $L$ be meet-continuous.
Let $x$ be an element of $S$, $D$ be a directed subset of $S$ such that

$x \preceq \sup D$
Thus














\(\ds x\)

\(=\)







\(\ds x \wedge \sup D\)





Preceding iff Meet equals Less Operand














\(\ds \)

\(=\)







\(\ds \sup \set {x \wedge d: d \in D}\)





Definition of Meet-Continuous Lattice



$\Box$


Necessary Condition
Let:

$\forall x \in S$, directed subset $D$ of $S: x \preceq \sup D \implies x = \sup \set {x \wedge d: d \in D}$
By definition of reflexivity:

$\forall x \in S$, directed subset $D$ of $S: x \preceq \sup D \implies x \preceq \sup \set {x \wedge d: d \in D}$
By Meet is Directed Suprema Preserving:

$\wedge$ preserves directed suprema as a mapping from the simple order product $\struct {S \times S, \precsim}$ of $L$ and $L$ into $L$.
Thus by Meet-Continuous iff Meet Preserves Directed Suprema

$L$ is meet-continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:52




