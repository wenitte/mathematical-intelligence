# 

Source: https://proofwiki.org/wiki/Completely_Prime_Filter_Induced_by_Frame_Homomorphism_Onto_Two


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a frame.

Let $\struct{\mathbf 2, \vee, \wedge, \preceq}$ denote the (Boolean Lattice) $\mathbf 2$.

Let $\phi : L \to \mathbf 2$ be a frame homomorphism.

Then:

$\map {\phi^{-1}} \top$ is a completely prime filter
where $\map {\phi^{-1}} \top$ denotes the preimage of $\top \in \mathbf 2$ under the mapping $\phi$

Proof
From Singleton of Greatest Element in Two is Completely Prime Filter:

$\set \top$ is a completely prime filter

From Inverse Image Mapping of Frame Homomorphism Preserves Completely Prime Filter:

$\map {\phi^\gets}{\set \top}$ is a completely prime filter

We have:














\(\ds \map {\phi^\gets}{\set \top}\)

\(=\)







\(\ds \phi^{-1} \sqbrk {\set \top}\)





Definition of Inverse Image Mapping of Mapping














\(\ds \)

\(=\)







\(\ds \map {\phi^{-1} } \top\)





Definition of Inverse Image of Element under Mapping




The result follows.
$\blacksquare$





