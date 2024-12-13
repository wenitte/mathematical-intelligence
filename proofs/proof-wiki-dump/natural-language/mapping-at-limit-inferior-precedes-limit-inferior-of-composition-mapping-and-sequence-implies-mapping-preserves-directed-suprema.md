# 

Source: https://proofwiki.org/wiki/Mapping_at_Limit_Inferior_Precedes_Limit_Inferior_of_Composition_Mapping_and_Sequence_implies_Mapping_Preserves_Directed_Suprema

Theorem
Let $\struct {S, \vee_1, \wedge_1, \preceq_1}$ and $\struct {T, \vee_2, \wedge_2, \preceq_2}$ be complete lattices.
Let $f: S \to T$ be a mapping such that

for all directed sets $\struct {D, \precsim}$ and nets $N:D \to S$ in $S$: $\map f {\liminf N} \preceq_2 \map \liminf {f \circ N}$

Then $f$ preserves directed suprema.


Proof
Let $D$ be a directed subset of $S$.
Assume that

$D$ admits a supremum.
Thus by definition of complete lattice:

$f \sqbrk D$ admits a supremum.
Thus by Mapping at Limit Inferior Precedes Limit Inferior of Composition Mapping and Sequence implies Supremum of Image is Mapping at Supremum of Directed Subset:

$\map \sup {f \sqbrk D} = \map f {\sup D}$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:Lm8




