# 

Source: https://proofwiki.org/wiki/P-adic_Norm_forms_Non-Archimedean_Valued_Field/P-adic_Numbers


This page has been identified as a candidate for refactoring of basic complexity.In particular: 2 separate results: one, that it's a valued field, and two, that it has a non-Archimedean norm. Can subsequently transclude them into one page (this one) if we like.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.

Then:

$\struct{\Q_p, \norm {\,\cdot\,}_p}$ is a valued field
$\norm {\,\cdot\,}_p$ is a non-Archimedean norm

That is, the $p$-adic numbers $\struct {\Q_p, \norm {\,\cdot\,}_p}$ form a valued field with a non-Archimedean norm.


Proof
Let $\norm {\,\cdot\,}^\Q_p$ be the p-adic norm on the rationals $\Q$.
From P-adic Norm on Rational Numbers is Non-Archimedean Norm:

$\struct{Q, \norm {\,\cdot\,}^\Q_p}$ is a valued field with non-Archimedean norm $\norm {\,\cdot\,}_p$

By definition of the $p$-adic numbers:

$\Q_p$ is the quotient ring $\CC \, \big / \NN$
where:

$\CC$ is the commutative ring of Cauchy sequences over $\struct {\Q, \norm {\,\cdot\,}^\Q_p}$.
and

$\NN$ is the set of null sequences in $\struct {\Q, \norm {\,\cdot\,}^\Q_p}$.

From Corollary to Quotient Ring of Cauchy Sequences is Normed Division Ring:

$\struct {\Q_p, \norm {\, \cdot \,}_p}$ is a valued field.
From Completion of Normed Division Ring:

$\struct {\Q_p, \norm {\, \cdot \,}_p}$ is a normed division ring completion of $\struct {\Q, \norm {\,\cdot\,}^\Q_p}$
From Non-Archimedean Division Ring iff Non-Archimedean Completion:

$\norm {\, \cdot \,}_p$ on $\Q_p$ is a non-Archimedean norm.
$\blacksquare$





