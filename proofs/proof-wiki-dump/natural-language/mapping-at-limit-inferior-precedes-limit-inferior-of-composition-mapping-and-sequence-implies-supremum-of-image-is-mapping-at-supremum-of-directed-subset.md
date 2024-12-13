# 

Source: https://proofwiki.org/wiki/Mapping_at_Limit_Inferior_Precedes_Limit_Inferior_of_Composition_Mapping_and_Sequence_implies_Supremum_of_Image_is_Mapping_at_Supremum_of_Directed_Subset

Theorem
Let $\struct {S, \vee_1, \wedge_1, \preceq_1}$ and $\struct {T, \vee_2, \wedge_2, \preceq_2}$ be up-complete lattices.
Let $f: S \to T$ be a mapping such that

for all directed set $\struct {D, \precsim}$ and net $N: D \to S$ in $S: \map f {\liminf N} \preceq_2 \map \liminf {f \circ N}$
Let $D$ be a directed subset of $S$.

Then: 

$\map \sup {f \sqbrk D} = \map f {\sup D}$
where $f \sqbrk D$ denotes the image of $D$ under $f$.


Proof
By Mapping at Limit Inferior Precedes Limit Inferior of Composition Mapping and Sequence implies Mapping is Increasing:

$f$ is an increasing mapping.
By Image of Directed Subset under Increasing Mapping is Directed:

$f \sqbrk D$ is directed.
By definition of up-complete:

$D$ and $f \sqbrk D$ admit suprema.
By Subset and Image Admit Suprema and Mapping is Increasing implies Supremum of Image Precedes Mapping at Supremum:

$\map \sup {f \sqbrk D} \preceq_2 \map f {\sup D}$
By Limit Inferior of Inclusion Net is Supremum of Directed Subset:

$\sup D = \liminf i_D$
By assumption:

$\map f {\sup D} \preceq_2 \map \liminf {f \circ i_D}$
By Composition of Mapping and Inclusion is Restriction of Mapping:

$f \circ i_D = f {\restriction} D$
By Limit Inferior of Restriction Net is Supremum of Image of Directed Subset:

$\map \sup {f \sqbrk D} = \map \liminf {f \circ i_D}$
Then

$\map f {\sup D} \preceq_2 \map \sup {f \sqbrk D}$
Thus by definition of antisymmetry:

$\map \sup {f \sqbrk D} = \map f {\sup D}$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:19




