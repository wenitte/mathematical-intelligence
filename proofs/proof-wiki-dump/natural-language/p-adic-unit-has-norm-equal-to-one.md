# 

Source: https://proofwiki.org/wiki/P-adic_Unit_has_Norm_Equal_to_One



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ denote the $p$-adic integers.
Let $x \in \Q_p$.

Then x is a $p$-adic unit if and only if $\norm x_p = 1$


Proof
Necessary Condition
Let $x$ be a $p$-adic unit.
Then:

$x \in \Z_p$
$x^{-1} \in \Z_p$
By definition of the $p$-adic integers:

$\norm x_p \le 1$
$\norm {x^{-1} }_p \le 1$
From Norm of Inverse in Division Ring:

$\norm x_p \ge 1$
It follows that:

$\norm x_p = 1$
$\Box$


Sufficient Condition
Let $\norm x_p = 1$.
From Norm of Inverse in Division Ring:

$\norm {x^{-1} }_p = 1$
By definition of the $p$-adic integers:

$x \in \Z_p$
$x^{-1} \in \Z_p$
It follows that $x$ is an invertible element in $\Z_p$.
That is, x is a $p$-adic unit.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.5$ Arithmetical operations in $\Q_p$: Exercise $26$




