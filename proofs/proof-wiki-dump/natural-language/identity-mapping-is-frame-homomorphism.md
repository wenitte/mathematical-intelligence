# 

Source: https://proofwiki.org/wiki/Identity_Mapping_is_Frame_Homomorphism


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $L = \struct{S, \preceq}$ be a frame.

Let $\operatorname{id}_S$ denote the identity mapping on $S$.

Then:

$\operatorname{id}_S$ is a frame homomorphism of $L$ to $L$


Proof
$\operatorname{id}_S$ is Finite Meet Preserving
Let $F \subseteq S_1$ be a finite subset.
We have:














\(\ds \inf \operatorname{id}_S \sqbrk F\)

\(=\)







\(\ds \inf F\)





Definition of Identity Mapping














\(\ds \)

\(=\)







\(\ds \map {\operatorname{id}_S} {\inf F}\)





Definition of Identity Mapping




Since $F$ was arbitrary, it follows that $\operatorname{id}_S$ is finite meet preserving by definition.
$\Box$

$\operatorname{id}_S$ is Arbitrary Join Preserving
Let $A \subseteq S_1$ be any subset of $S$.
We have:














\(\ds \sup \operatorname{id}_S \sqbrk F\)

\(=\)







\(\ds \sup F\)





Definition of Identity Mapping














\(\ds \)

\(=\)







\(\ds \map {\operatorname{id}_S} {\sup F}\)





Definition of Identity Mapping




Since $A$ was arbitrary, it follows that $\operatorname{id}_S$ is arbitrary join preserving by definition.
$\Box$

By definition, $\operatorname{id}_S$ is a frame homomorphism
$\blacksquare$





