# 

Source: https://proofwiki.org/wiki/Frame_Homomorphism_Preserves_Greatest_Element


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $L_1 = \struct{S_1, \preceq_1}$ and $L_2 = \struct{S_2, \preceq_2}$ be frames.
Let $\phi: L_1 \to L_2$ be a frame homomophism.

Let $\top_1$ and $\top_2$ denote the greatest elelment of $L_1$ and $L_2$ respectively.

Then:

$\map \phi \top_1 = \top_2$


Proof
we have:














\(\ds \map \phi \top_1\)

\(=\)







\(\ds \map \phi {\bigwedge \O}\)





Definition of Frame and Infimum of Empty Set is Greatest Element














\(\ds \)

\(=\)







\(\ds \bigwedge \set{\map \phi x : x \in \O}\)





Frame homomorphism is finite meet preserving














\(\ds \)

\(=\)







\(\ds \bigwedge \O\)





Definition of Empty Set














\(\ds \)

\(=\)







\(\ds \top_2\)





Definition of Frame and Infimum of Empty Set is Greatest Element



$\blacksquare$


Also see
Frame Homomorphism Preserves Smallest Element




