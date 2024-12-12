# 

Source: https://proofwiki.org/wiki/Commutativity_of_Incidence_Matrix_with_its_Transpose_for_Symmetric_Design

Theorem
Let $A$ be the incidence matrix of a symmetric design.
Then:

$A A^\intercal = A^\intercal A$
where $A^\intercal$ is the transpose of $A$.


Proof
First note, we have:

$(1): \quad A J = J A = k J$, so $A^\intercal J = \paren {J A}^\intercal = \paren {k J}^\intercal = k J$, and likewise $J A^\intercal = k J$
$(2): \quad J^2 = v J$
$(3): \quad$ If a design is symmetric, then $A A^\intercal = \paren {r - \lambda} I + \lambda J = \paren {k - \lambda} I + \lambda J$

This article, or a section of it, needs explaining.In particular: We need to establish these three results. We need to confirm that $J$ is the ones matrix (I think it is, from the context) and then make sure of those above results.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From $(3)$, we get:














\(\ds \paren {A^\intercal - \sqrt {\paren {\frac \lambda v} J} } \paren {A + \sqrt {\paren {\frac \lambda v} J} }\)

\(=\)







\(\ds A^\intercal A + \sqrt {\frac \lambda v} \paren {A^\intercal J - J A} - \frac \lambda v J^2\)




















\(\ds \)

\(=\)







\(\ds A^\intercal A - \lambda J = \paren {k - \lambda} I\)










We now have that:

$\ds \frac 1 {k - \lambda} \paren {A + \sqrt {\paren {\frac \lambda v} J} }$
is the inverse of:

$A^\intercal - \sqrt {\paren {\dfrac \lambda v} J}$
which implies that they commute with each other.


This article, or a section of it, needs explaining.In particular: ... why?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus:














\(\ds \paren {k - \lambda} I\)

\(=\)







\(\ds \paren {A + \sqrt {\frac \lambda v} J} \paren {A^\intercal - \sqrt {\frac \lambda v} J}\)




















\(\ds \)

\(=\)







\(\ds A A^\intercal + \sqrt {\frac \lambda v} \paren {J A^\intercal - A J} - \frac \lambda v J^2\)




















\(\ds \)

\(=\)







\(\ds A A^\intercal - \lambda J\)










This article, or a section of it, needs explaining.In particular: The above steps need justificationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
whence:

$A A^\intercal = \paren {k - \lambda} + \lambda J = A^\intercal A$
$\blacksquare$





