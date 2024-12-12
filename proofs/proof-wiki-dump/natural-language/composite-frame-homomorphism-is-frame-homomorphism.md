# 

Source: https://proofwiki.org/wiki/Composite_Frame_Homomorphism_is_Frame_Homomorphism


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $L_1 = \struct{S_1, \preceq_1}$, $L_2 = \struct{S_2, \preceq_2}$ and $L_3 = \struct{S_3, \preceq_3}$ be frames.

Let $\phi_1: L_1 \to L_2$ and $\phi_2: L_2 \to L_3$ be frame homomorphisms.
Let $\phi_2 \circ \phi_1 : S_1 \to S_3$ be the composite mapping of $\phi_1$ and $\phi_2$  

Then:

$\phi_2 \circ \phi_1$ is a frame homomorphism of $L_1$ to $L_3$


Proof
$\phi_2 \circ \phi_1$ is Finite Meet Preserving
Let $F \subseteq S_1$ be a finite subset.

We have:














\(\ds \inf \paren {\phi_2 \circ \phi_1} \sqbrk F\)

\(=\)







\(\ds \inf \phi_2 \sqbrk {\phi_1 \sqbrk F}\)





Image of Subset under Composite Relation with Common Codomain and Domain














\(\ds \)

\(=\)







\(\ds \map {\phi_2} {\inf \phi_1 \sqbrk F }\)





Definition of Finite Meet Preserving Mapping














\(\ds \)

\(=\)







\(\ds \map {\phi_2} {\map {\phi_1} {\inf F} }\)





Definition of Finite Meet Preserving Mapping














\(\ds \)

\(=\)







\(\ds \map {\paren{\phi_2 \circ \phi_1} } {\inf F}\)





Definition of Composite Mapping




Since $F$ was arbitrary, it follows that $\phi_2 \circ \phi_1$ is finite meet preserving by definition.
$\Box$

$\phi_2 \circ \phi_1$ is Arbitrary Join Preserving
Let $A \subseteq S_1$ be any subset of $S$.

We have:














\(\ds \sup \paren {\phi_2 \circ \phi_1} \sqbrk A\)

\(=\)







\(\ds \sup \phi_2 \sqbrk {\phi_1 \sqbrk A}\)





Image of Subset under Composite Relation with Common Codomain and Domain














\(\ds \)

\(=\)







\(\ds \map {\phi_2} {\sup \phi_1 \sqbrk A }\)





Definition of Arbitrary Join Preserving Mapping














\(\ds \)

\(=\)







\(\ds \map {\phi_2} {\map {\phi_1} {\sup A} }\)





Definition of Arbitrary Join Preserving Mapping














\(\ds \)

\(=\)







\(\ds \map {\paren{\phi_2 \circ \phi_1} } {\sup A}\)





Definition of Composite Mapping




Since $A$ was arbitrary, it follows that $\phi_2 \circ \phi_1$ is arbitrary join preserving by definition.
$\Box$

By definition, $\phi_2 \circ \phi_1$ is a frame homomorphism
$\blacksquare$





