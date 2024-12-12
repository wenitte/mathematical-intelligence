# 

Source: https://proofwiki.org/wiki/Frame_Homomorphism_Preserves_Smallest_Element


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $L_1 = \struct{S_1, \preceq_1}$ and $L_2 = \struct{S_2, \preceq_2}$ be frames.
Let $\phi: L_1 \to L_2$ be a frame homomophism.

Let $\bot_1$ and $\bot_2$ denote the smallest elelment of $L_1$ and $L_2$ respectively.

Then:

$\map \phi \bot_1 = \bot_2$


Proof
We have:














\(\ds \map \phi \bot_1\)

\(=\)







\(\ds \map \phi {\bigvee \O}\)





Definition of Frame and Supremum of Empty Set is Smallest Element














\(\ds \)

\(=\)







\(\ds \bigvee \set{\map \phi x : x \in \O}\)





Frame homomorphism is arbitrary join preserving














\(\ds \)

\(=\)







\(\ds \bigvee \O\)





Definition of Empty Set














\(\ds \)

\(=\)







\(\ds \bot_2\)





Definition of Frame and Supremum of Empty Set is Smallest Element



$\blacksquare$


Also see
Frame Homomorphism Preserves Greatest Element




