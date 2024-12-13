# 

Source: https://proofwiki.org/wiki/Mapping_is_Increasing_implies_Mapping_at_Infimum_for_Sequence_Precedes_Infimum_for_Composition_of_Mapping_and_Sequence

Theorem
Let $\struct {S, \vee_1, \wedge_1, \preceq_1}$ and $\struct {T, \vee_2, \wedge_2, \preceq_2}$ be complete lattices.
Let $f: S \to T$ be an increasing mapping.
Let $\struct {D, \precsim}$ be a directed set.
Let $N: D \to S$ be a net in $S$.
Let $j \in D$.

Then $\map f {\map \inf {N \sqbrk {\map \precsim j} } } \preceq_2 \map \inf {\paren {f \circ N} \sqbrk {\map \precsim j} }$


Proof
By definitions of image of set and composition of mappings:

$f \sqbrk {N \sqbrk {\map \precsim j} } = \paren {f \circ N} \sqbrk {\map \precsim j}$
By definition of complete lattice:

$f \sqbrk {N \sqbrk {\map \precsim j} }$ and $N \sqbrk {\map \precsim j}$ admit infima.
Thus by Subset and Image Admit Infima and Mapping is Increasing implies Infimum of Image Succeeds Mapping at Infimum:

$\map f{\map \inf {N \sqbrk {\map \precsim j} } } \preceq_2 \map \inf {\paren {f \circ N} \sqbrk {\map \precsim j} }$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:20




