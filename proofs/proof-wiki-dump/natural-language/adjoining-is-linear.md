# 

Source: https://proofwiki.org/wiki/Adjoining_is_Linear



Theorem
Let $\HH$ and $\KK$ be Hilbert spaces over $\Bbb F \in \set {\R, \C}$.
Let $\map \BB {\HH, \KK}$ be the set of bounded linear transformations from $\HH$ to $\KK$.
Let $A, B \in \map \BB {\HH, \KK}$ be bounded linear transformations.

Then the operation of adjoining $^*$ satisfies, for all $\lambda \in \Bbb F$:

$(1): \quad \paren {\lambda A}^* = \overline \lambda A^*$
$(2): \quad \paren {A + B}^* = A^* + B^*$
where $\overline \lambda$ denotes the complex conjugate of $\lambda$.

That is,:

$^*: \map \BB {\HH, \KK} \to \map \BB {\KK, \HH}$
is a linear transformation.


Proof
Let $\innerprod \cdot \cdot_\HH$ and $\innerprod \cdot \cdot_\KK$ be inner products on $\HH$ and $\KK$ respectively.


Proof of $(1)$
Let $\lambda \in \Bbb F$, $h \in \HH, k \in \KK$.
Then:














\(\ds \innerprod {\paren {\lambda A} h} k_\KK\)

\(=\)







\(\ds \lambda \innerprod {A h} k_\KK\)





Property $(2)$ of Inner Product














\(\ds \)

\(=\)







\(\ds \lambda \innerprod h {A^*k}_\HH\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod h {\paren {\overline \lambda A^*} k}_\HH\)





Properties $(1)$ and $(2)$ of Inner Product




Thus, by Existence and Uniqueness of Adjoint:

$\paren {\lambda A}^* = \overline \lambda A^*$
$\Box$


Proof of $(2)$
Let $h \in \HH, k \in \KK$.
Then:














\(\ds \innerprod {\paren {A + B} h} k_\KK\)

\(=\)







\(\ds \innerprod {A h} k_\KK + \innerprod {B h} k_\KK\)





Property $(3)$ of Inner Product














\(\ds \)

\(=\)







\(\ds \innerprod h {A^*k}_\HH + \innerprod h {B^*k}_\HH\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod h {\paren {A^* + B^*} k}_\HH\)





Properties $(1), (3)$ of Inner Product




Thus, by Existence and Uniqueness of Adjoint:

$\paren {A + B}^* = A^* + B^*$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.6 \ \text {(a)}$
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $13.1$: Existence of Hilbert Adjoint




