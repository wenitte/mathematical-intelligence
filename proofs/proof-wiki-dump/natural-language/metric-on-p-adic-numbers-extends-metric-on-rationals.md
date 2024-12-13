# 

Source: https://proofwiki.org/wiki/Metric_on_P-adic_Numbers_Extends_Metric_on_Rationals

Theorem
Let $p$ be any prime number.

Let $\struct{\Q, \norm {\,\cdot\,}^\Q_p}$ be the rational numbers $\Q$ with the $p$-adic norm $\norm {\,\cdot\,}^\Q_p$.
Let $d^{\Q}_p$ be the $p$-adic metric on the rational numbers.

Let $\struct{\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $d_p$ be the $p$-adic metric on the $p$-adic numbers.

Then $d_p$ is an extension of $d^{\Q}_p$.

Proof
From Rational Numbers are Dense Subfield of P-adic Numbers:

$\norm {\,\cdot\,}_p$ on $\Q_p$ is an extension of $\norm {\,\cdot\,}^Q_p$ on $\Q$.
By definition of $p$-adic metric on the rational numbers:

$\forall x, y \in \Q : \map {d^\Q_p} {x, y} = \norm{x - y}^\Q_p$
By definition of $p$-adic metric on the $p$-adic numbers:

$\forall x, y \in \Q : \map {d_p} {x, y} = \norm{x - y}_p$
It follows that the $p$-adic metric on $\Q_p$ is an extension of the $p$-adic metric on $\Q$.
$\blacksquare$





