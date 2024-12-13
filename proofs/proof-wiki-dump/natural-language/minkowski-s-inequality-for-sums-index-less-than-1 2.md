# 

Source: https://proofwiki.org/wiki/Minkowski%27s_Inequality_for_Sums/Index_Less_than_1



Theorem
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n \in \R_{\ge 0}$ be non-negative real numbers.
Let $p \in \R$ be a real number.
If $p < 0$, then we require that $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n$ be strictly positive.

If $p < 1$, $p \ne 0$, then:

$\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1/p} \ge \paren {\sum_{k \mathop = 1}^n a_k^p}^{1/p} + \paren {\sum_{k \mathop = 1}^n b_k^p}^{1/p}$


Proof
Define:

$q = \dfrac p {p - 1}$
Then:

$\dfrac 1 p + \dfrac 1 q = \dfrac 1 p + \dfrac {p - 1} p = 1$

In this case, $p$ and $q$ have opposite sign.
The proof then follows the same lines as the proof for $p > 1$, except that the Reverse Hölder's Inequality for Sums is applied instead.
$\blacksquare$


Also known as
This result is also known as the Reverse Minkowski's Inequality (for Sums).


Source of Name
This entry was named for Hermann Minkowski.





