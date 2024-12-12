# 

Source: https://proofwiki.org/wiki/Adjoint_of_Composition_of_Linear_Transformations_is_Composition_of_Adjoints

Theorem
Let $\mathbb F \in \set {\R, \C}$.
Let $\HH$, $\KK$ and $\LL$ be a Hilbert spaces over $\mathbb F$.
Let $A : \KK \to \LL$ and $B : \HH \to \KK$ be bounded linear transformations.

Then:

$\paren {A B}^* = B^* A^*$
where $^*$ denotes adjoining.


Proof
Let ${\innerprod \cdot \cdot}_\HH$, ${\innerprod \cdot \cdot}_\KK$ and ${\innerprod \cdot \cdot}_\LL$ denote inner products over $\HH$, $\KK$ and $\LL$ respectively.

Let $h \in \HH$ and $l \in \LL$.
Then:














\(\ds \innerprod {\map {\paren {A B} } h} l_\LL\)

\(=\)







\(\ds \innerprod {\map B h} {\map {A^*} l}_\KK\)





Definition of Adjoint Linear Transformation of $A$














\(\ds \)

\(=\)







\(\ds \innerprod h {\map {B^* A^*} l}_\HH\)





Definition of Adjoint Linear Transformation of $B$



We also have, by the definition of the adjoint:

$\innerprod {\map {\paren {A B} } h} l_\LL = \innerprod h {\map {\paren {A B}^*} l}_\LL$
So, by the uniqueness part of Existence and Uniqueness of Adjoint:

$\paren {A B}^* = B^* A^*$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.6 \ \text {(b)}$
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $13.1$: Existence of Hilbert Adjoint




