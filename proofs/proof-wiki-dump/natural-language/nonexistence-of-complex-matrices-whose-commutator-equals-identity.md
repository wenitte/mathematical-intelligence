# 

Source: https://proofwiki.org/wiki/Nonexistence_of_Complex_Matrices_whose_Commutator_equals_Identity

Theorem
Let $d \in \N_{> 0}$ be a positive natural number.
Let $\mathbf A, \mathbf B \in \C^{d \times d}$ be complex matrices.


This article, or a section of it, needs explaining.In particular: Same applies to real matrices too, yes? I don't have the source to support that, but I don't see why not.This theorem includes the result on the real case, because real matrices are especially complex matrices.Obvious though it is, the real case might be worth adding as a corollaryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\mathbf I$ be the $d \times d$ identity matrix.

Then there is no $\mathbf A$, $\mathbf B$ such that $\mathbf A \mathbf B - \mathbf B \mathbf A = \mathbf I$.


Proof
We have that complex numbers form a commutative ring.
Aiming for a contradiction, suppose there are $\mathbf A$, $\mathbf B$ such that $\mathbf A \mathbf B - \mathbf B \mathbf A = \mathbf I$.
Then:














\(\ds \map \tr {\mathbf I}\)

\(=\)







\(\ds d\)





Definition of Trace of Matrix














\(\ds \)

\(=\)







\(\ds \map \tr {\mathbf A \mathbf B - \mathbf B \mathbf A}\)




















\(\ds \)

\(=\)







\(\ds \map \tr {\mathbf A \mathbf B} - \map \tr {\mathbf B \mathbf A}\)





Trace of Sum of Matrices is Sum of Traces














\(\ds \)

\(=\)







\(\ds 0\)





Trace of Product of Matrices



This is a contradiction.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




