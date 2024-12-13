# 

Source: https://proofwiki.org/wiki/P-adic_Expansion_Representative_of_P-adic_Number_is_Unique



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a$ be a $p$-adic number, that is left coset, in $\Q_p$.
Let $\ds \sum_{i \mathop = m}^\infty d_i p^i$ and $\ds \sum_{i \mathop = k}^\infty e_i p^i$ be $p$-adic expansions that represent $a$.

Then:

$(1) \quad m = k$
$(2) \quad \forall i \ge m : d_i = e_i$
That is, the $p$-adic expansions $\ds \sum_{i \mathop = m}^\infty d_i p^i$ and $\ds \sum_{i \mathop = k}^\infty e_i p^i$ are identical.


Proof
From P-adic Number times P-adic Norm is P-adic Unit there exists $n \in \Z$:

$p^n a \in \Z^\times_p$
$\norm a_p =  p^n$
where $\Z^\times_p$ is the set of $p$-adic units.

Let $l = -n$.
From P-adic Norm of P-adic Expansion is determined by First Nonzero Coefficient:

$l = \min \set {i: i \ge m \land d_i \ne 0}$
and

$l = \min \set {i: i \ge k \land e_i \ne 0}$

Now:














\(\ds m\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds d_m\)

\(\ne\)







\(\ds 0\)





Definition of $p$-adic Expansion








\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds l\)





Definition of $l$








\(\ds \leadsto \ \ \)





\(\ds l\)

\(<\)







\(\ds 0\)










Similarly:

$k < 0 \leadsto k = l$


Proof of statement $(1)$
Case $l < 0$
Let $l < 0$.

Then:














\(\ds l\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(<\)







\(\ds 0\)





as $m \le l$








\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds l\)





from above




Similarly:

$l < 0 \leadsto k = l$
So: 

$m = l = k$.
$\Box$


Case $l \ge 0$
Let $l \ge 0$.

Then:














\(\ds l\)

\(\ge\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(\not <\)







\(\ds 0\)





as $m < 0 \leadsto l < 0$








\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds 0\)





Definition of $p$-adic Expansion




Similarly:

$l \ge  0 \leadsto k = 0$
So:

$m = 0 = k$.
$\Box$


Proof of statement $(2)$
By definition of $l$, for all $i$ such that $m \le i < l$:

$d_i = 0$
$e_i = 0$
So for all $m \le i < l$:

$d_i = e_i$.

Consider the series:

$\ds \sum_{i \mathop = l}^\infty d_i p^i$
From P-adic Expansion Less Intial Zero Terms Represents Same P-adic Number

$\ds \sum_{i \mathop = l}^\infty d_i p^i$
is a representative of $a$
From Multiple Rule for Cauchy Sequences in Normed Division Ring:

$\ds p^{-l} \sum_{i \mathop = l}^\infty d_i p^i = \sum_{i \mathop = l}^\infty d_i p^{i - l} = \sum_{i \mathop = 0}^\infty d_{i + l} p^i$
is a representative of $p^{-l} a \in \Z^\times_p$.
By definition of a $p$-adic expansion:

$\forall i \in N : 0 \le d_{i + 1} < p - 1$
Thus the series:

$\ds \sum_{i \mathop = 0}^\infty d_{i + l} p^i$
is a $p$-adic expansion that represents $p^{-l} a \in \Z^\times_p$.
Similarly the series:

$\ds \sum_{i \mathop = 0}^\infty e_{i + l} p^i$
is a $p$-adic expansion that represents $p^{-l} a \in \Z^\times_p$.
From P-adic Integer has Unique P-adic Expansion Representative it follows that:

$\forall i \in N : d_{i + 1} = e_{i + 1}$
That is:

$\forall i \ge l : d_i = e_i$
The result follows.
$\blacksquare$





