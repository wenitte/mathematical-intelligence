# 

Source: https://proofwiki.org/wiki/Sequence_is_Cauchy_in_P-adic_Norm_iff_Cauchy_in_P-adic_Numbers

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.

Let $\Q$ denote the rational numbers identified as a dense subfield of $\struct {\Q_p, \norm {\,\cdot\,}_p}$.
Let $\norm {\,\cdot\,} ^\Q _p$ denote the $p$-adic norm on the rational numbers.

Let $\sequence{x_n}$ be a sequence in the rational numbers $\Q$.

Then $\sequence {x_n}$ is a Cauchy sequence in $\struct{\Q, \norm{\,\cdot\,} ^\Q _p}$ if and only if $\sequence {x_n}$ is a Cauchy sequence in $\struct{\Q_p, \norm{\,\cdot\,}_p}$


Proof
From Rational Numbers are Dense Subfield of P-adic Numbers:

the $p$-adic norm $\norm {\,\cdot\,}_p$ on the $p$-adic numbers is an extension of the $p$-adic norm $\norm {\,\cdot\,} ^\Q _p$ on the rational numbers.
That is,

$\norm {\,\cdot\,}_p \restriction_\Q \mathop = \norm {\,\cdot\,} ^\Q _p$

The result follows from Cauchy Sequence of Subring iff Cauchy Sequence of Normed Division Ring
$\blacksquare$





