# 

Source: https://proofwiki.org/wiki/Products_of_Homeomorphic_Spaces_are_Homeomorphic

Theorem
Let:

$\sequence {T_i}_{i \mathop \in I}$
$\sequence {T'_i}_{i \mathop \in I}$
be indexed families of topological spaces, with indexing set $I$.
Let:

$\sequence {\phi_i}_{i \mathop \in I}$
be an indexed family of homeomorphisms $\phi_i$ from $T_i$ to $T'_i$.
Define:

$\ds T = \prod_{i \mathop \in I} T_i$
$\ds T' = \prod_{i \mathop \in I} T'_i$
where $\ds \prod_{i \mathop \in I} T_i$ denotes the product space.

Then, the mapping $\phi : T \to T'$ defined as:

$\map \phi x = \sequence {\map {\phi_i \circ \pr_i} x}_{i \mathop \in I}$
is a homeomorphism from $T$ to $T'$.


Proof
We have that:

$\map {\phi^{-1}} x = \sequence {\map {\phi_i^{-1} \circ \pr_i} x}_{i \mathop \in I}$
For:














\(\ds \map \phi {\map {\phi^{-1} } x}\)

\(=\)







\(\ds \sequence {\map {\phi_i \circ \pr_i} {\sequence {\map {\phi_i^{-1} \circ \pr_i} x}_{i \mathop \in I} } }_{i \mathop \in I}\)




















\(\ds \)

\(=\)







\(\ds \sequence {\map {\phi_i \circ \phi_i^{-1} \circ \pr_i} x }_{i \mathop \in I}\)




















\(\ds \)

\(=\)







\(\ds \sequence {\map {\pr_i} x}_{i \mathop \in I}\)





Definition of Inverse Mapping














\(\ds \)

\(=\)







\(\ds x\)




















\(\ds \map {\phi^{-1} } {\map \phi x}\)

\(=\)







\(\ds \sequence {\map {\phi_i^{-1} \circ \pr_i} {\sequence {\map {\phi_i \circ \pr_i} x}_{i \mathop \in I} } }_{i \mathop \in I}\)




















\(\ds \)

\(=\)







\(\ds \sequence {\map {\phi_i^{-1} \circ \phi_i \circ \pr_i} x}_{i \mathop \in I}\)




















\(\ds \)

\(=\)







\(\ds \sequence {\map {\pr_i} x}_{i \mathop \in I}\)





Definition of Inverse Mapping














\(\ds \)

\(=\)







\(\ds x\)









It follows that $\phi$ is a bijection.
Additionally, by:

Projection from Project Topology is Continuous
Composite of Continuous Mappings is Continuous
Continuous Mapping to Product Space
it follows that both $\phi$ and $\phi^{-1}$ are continuous.
Therefore, $\phi$ is a homeomorphism by definition.
$\blacksquare$





