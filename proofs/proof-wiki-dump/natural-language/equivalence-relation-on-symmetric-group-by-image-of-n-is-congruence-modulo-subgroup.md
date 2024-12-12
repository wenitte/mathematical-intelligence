# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Symmetric_Group_by_Image_of_n_is_Congruence_Modulo_Subgroup

Theorem
Let $S_n$ denote the symmetric group on $n$ letters $\set {1, \dots, n}$.
Let $\sim$ be the relation on $S_n$ defined as:

$\forall \pi, \tau \in S_n: \pi \sim \tau \iff \map \pi n = \map \tau n$
Then $\sim$ is an equivalence relation which is congruence modulo a subgroup.


This article, or a section of it, needs explaining.In particular: Work needed to be done to explain exactly what is happening here.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
We claim that $\sim$ is left congruence modulo $S_{n - 1}$, the symmetric group on $n - 1$ letters $\set {1, \dots, n - 1}$.
Notice that every element of $S_{n - 1}$ fixes $n$.

For all $\pi, \tau \in S_n$ such that $\pi \sim \tau$:














\(\ds \map {\paren {\pi^{-1} \circ \tau} } n\)

\(=\)







\(\ds \map {\pi^{-1} } {\map \tau n}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\pi^{-1} } {\map \pi n}\)





Definition of $\sim$














\(\ds \)

\(=\)







\(\ds \map {\paren {\pi^{-1} \circ \pi} } n\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds n\)





Definition of Inverse Element



so $\pi^{-1} \circ \tau$ fixes $n$ as well.
This shows that $\pi^{-1} \circ \tau \in S_{n - 1}$.
By definition of Left Congruence Modulo Subgroup:

$\pi \equiv^l \tau \pmod {S_{n - 1} }$

Now we show the converse.
Suppose $\pi \equiv^l \tau \pmod {S_{n - 1} }$.
Then $\pi^{-1} \circ \tau \in S_{n - 1}$.
Hence $\map {\paren {\pi^{-1} \circ \tau} } n = n$.
Then:














\(\ds \map \pi n\)

\(=\)







\(\ds \map \pi {\map {\paren {\pi^{-1} \circ \tau} } n}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\pi \circ \pi^{-1} \circ \tau} } n\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map \tau n\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds \pi\)

\(\sim\)







\(\ds \tau\)









Therefore $\sim$ and left congruence modulo $S_{n - 1}$ are equivalent.
The fact that $\sim$ is an equivalence relation follows from Left Congruence Modulo Subgroup is Equivalence Relation.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 37 \delta$




