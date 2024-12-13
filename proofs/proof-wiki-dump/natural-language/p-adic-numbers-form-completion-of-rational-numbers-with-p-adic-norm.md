# 

Source: https://proofwiki.org/wiki/P-adic_Numbers_form_Completion_of_Rational_Numbers_with_P-adic_Norm

Theorem
Let $p$ be a prime number.
Let $\norm {\,\cdot\,}^\Q_p$ be the $p$-adic norm on the rationals $\Q$.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.

Then $\struct {\Q_p, \norm {\,\cdot\,}_p}$ is a completion of $\struct {\Q, \norm {\,\cdot\,}^\Q_p}$


Proof
Let $\norm {\,\cdot\,}^\Q_p$ be the $p$-adic norm on the rationals $\Q$.
From $p$-adic Norm on Rational Numbers is Non-Archimedean Norm:

$\struct{\Q, \norm {\,\cdot\,}^\Q_p}$ is a valued field with non-Archimedean norm $\norm {\,\cdot\,}_p$

By Definition of Field of $p$-adic Numbers:

$\Q_p$ is the quotient ring $\CC \, \big / \NN$
where:

$\CC$ is the commutative ring of Cauchy sequences over $\struct {\Q, \norm {\,\cdot\,}^\Q_p}$.
and

$\NN$ is the set of null sequences in $\struct {\Q, \norm {\,\cdot\,}^\Q_p}$.

By Definition of $p$-adic Norm on $p$-adic Numbers:

$\norm {\, \cdot \,}_p:\Q_p \to \R_{\ge 0}$ is defined by:
$\ds \forall \eqclass{x_n}{} \in \Q_p: \norm {\eqclass{x_n}{} }_p = \lim_{n \mathop \to \infty} \norm{x_n}^\Q_p$
where $\eqclass{x_n}{}$ denotes the left coset of $\sequence{x_n}$ in $\Q_p$

From Completion of Normed Division Ring:

$\struct {\Q_p, \norm {\,\cdot\,}_p}$ is the completion of $\struct {\Q, \norm {\,\cdot\,}^\Q_p}$.
$\blacksquare$





