# 

Source: https://proofwiki.org/wiki/Mapping_at_Element_is_Supremum_of_Compact_Elements_implies_Mapping_is_Increasing

Theorem
Let $\struct {S, \vee_1, \wedge_1, \preceq_1}$ be a lattice.
Let $\struct {T, \vee_2, \wedge_2, \preceq_2}$ be a complete lattice.
Let $f: S \to T$ be a mapping such that

$\forall x \in S: \map f x = \sup \leftset {\map f w : w \in S \land w \preceq_1 x \land w}$ is compact$\rightset{}$

Then $f$ is increasing.


Proof
Let $x, y \in S$ such that

$x \preceq_1 y$
By Compact Closure is Increasing:

$x^{\mathrm {compact} } \subseteq y^{\mathrm {compact} }$
By Image of Subset under Mapping is Subset of Image:

$f \sqbrk {x^{\mathrm {compact} } } \subseteq f \sqbrk {y^{\mathrm {compact} } }$
By assumption:

$\map f x = \sup \leftset {\map f w: w \in S \land w \preceq_1 x \land w}$ is compact$\rightset{}$
and

$\map f y = \sup \leftset {\map f w: w \in S \land w \preceq_1 y \land w}$ is compact$\rightset{}$
By definitions of image of set and compact closure:

$\map f x = \map \sup {f \sqbrk {x^{\mathrm {compact} } } }$
and

$\map f y = \map \sup {f \sqbrk {y^{\mathrm {compact} } } }$
Thus by Supremum of Subset and definition of complete lattice:

$\map f x \preceq_2 \map f y$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:25




