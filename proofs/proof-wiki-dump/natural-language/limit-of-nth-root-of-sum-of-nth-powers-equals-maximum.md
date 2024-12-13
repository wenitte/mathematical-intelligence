# 

Source: https://proofwiki.org/wiki/Limit_of_nth_Root_of_Sum_of_nth_Powers_equals_Maximum

Theorem
Let $a_1, a_2, \ldots, a_r$ be non-negative real numbers.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $a = \max \set {a_1, a_2, \ldots, a_r}$.

Then:

$\ds \lim_{n \mathop \to \infty} \paren {a_1^n + a_2^n + \cdots + a_r^n}^{1 / n} = a$


Proof
From Sum of $r$ Powers is between Power of Maximum and $r$ times Power of Maximum:

$a^n \le a_1^n + a_2^n + \cdots + a_r^n \le r a^n$
and so:

$a \le \paren {a_1^n + a_2^n + \cdots + a_r^n}^{1 / n} \le r^{1/n} a$
From Limit of Integer to Reciprocal Power:

$n^{1 / n} \to 1$ as $n \to \infty$
Then for $n > r$:

$1 < r^{1 / n} < n^{1 / n}$
and so:

$r^{1 / n} = 1$ as $n \to \infty$
Thus as $n \to \infty$:

$a \le \paren {a_1^n + a_2^n + \cdots + a_r^n}^{1 / n} \le a$
and the result follows by the Squeeze Theorem.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 11$




