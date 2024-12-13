# 

Source: https://proofwiki.org/wiki/P-adic_Metric_on_P-adic_Numbers_is_Non-Archimedean_Metric

Theorem
Let $p \in \N$ be a prime.
Let $\norm{\,\cdot\,}_p: \Q_p \to \R_{\ge 0}$ be the $p$-adic norm on the $p$-adic numbers $\Q_p$.

Let $d_p$ be the $p$-adic metric on $\Q_p$:

$\forall x, y \in \Q_p: \map {d_p} {x, y} = \norm{x - y}_p$

Then $d_p$ is a non-Archimedean metric that extends the $p$-adic metric on the rationals $\Q$ to $\Q_p$.


Corollary
Then:

$\forall x, y, z \in R: \norm {x - y}_p \le \max \set {\norm {x - z}_p, \norm {y - z}_p}$


Proof
The $p$-adic metric on $\Q_p$ is defined as the metric induced by the $p$-adic norm on $\Q_p$.
It follows from Metric Induced by Norm is Metric that $d_p$ is a metric.
By definition of the $p$-adic norm on $\Q_p$, $\norm{\,\cdot\,}_p$ is a non-Archimedean norm.
From Non-Archimedean Norm iff Non-Archimedean Metric, then $d_p$ is a non-Archimedean metric.
From Rational Numbers are Dense Subfield of P-adic Numbers:

the $p$-adic norm $\norm{\,\cdot\,}_p$ on the $p$-adic numbers $\Q_p$ is an extension of the $p$-adic norm $\norm{\,\cdot\,}_p$ on $\Q$.
By the definition of the metric induced by the $p$-adic norm, it follows that $d_p$ is an extension of the $p$-adic metric on the rationals $\Q$.
$\blacksquare$





