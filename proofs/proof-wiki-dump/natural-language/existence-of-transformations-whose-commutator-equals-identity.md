# 

Source: https://proofwiki.org/wiki/Existence_of_Transformations_whose_Commutator_equals_Identity

Theorem
Let $\map {C^\infty} \R$ be the space of smooth real functions.
Let $\circ$ denote the composition of mappings.
Let $A : \map {C^\infty} \R \to \map {C^\infty} \R$ be the mapping such that:

$\forall \phi \in \map {C^\infty} \R : \forall x \in \R : \map {\paren{ A \circ \phi } } x := \map {\dfrac {d \phi} {d x} } x$
Let $B : \map {C^\infty} \R \to \map {C^\infty} \R$ be the mapping such that

$\forall \phi \in \map {C^\infty} \R : \forall x \in \R : \map {\paren{ B \circ \phi } } x := x \map \phi x$
Let $I : \map {C^\infty} \R \to \map {C^\infty} \R$ be the identity such that:

$\forall \phi \in \map {C^\infty} \R : I \circ \phi = \phi$

Then:

$\forall \Psi \in \map {C^\infty} \R : \paren {A \circ B - B \circ A} \circ \Psi = I \circ \Psi$
or with slight abuse of notation:

$A \circ B - B \circ A = I$


Proof
Let $\Psi \in \map {C^\infty} \R$.
Then:














\(\ds \paren {A \circ B - B \circ A} \circ \Psi\)

\(=\)







\(\ds \map {\paren {A \circ B } } \Psi - \map{ \paren{B \circ A } } \Psi\)





Derivative Operator is Linear Mapping














\(\ds \)

\(=\)







\(\ds \map A {\map B \Psi} - \map B {\map A \Psi}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map A {x \Psi} - \map B {\dfrac d {d x} \Psi}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac d {d x} \paren {x \Psi} - x \dfrac d {d x} \Psi\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren{ \Psi + x \dfrac d {d x} \Psi } - x \dfrac d {d x} \Psi\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \Psi\)





simplification














\(\ds \)

\(=\)







\(\ds I \circ \Psi\)





Definition of Identity Mapping



$\blacksquare$

Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




