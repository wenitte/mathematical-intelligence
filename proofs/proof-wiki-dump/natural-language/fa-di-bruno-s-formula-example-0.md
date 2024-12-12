# 

Source: https://proofwiki.org/wiki/Fa%C3%A0_di_Bruno%27s_Formula/Example/0

Example of use of Faà di Bruno's Formula: $n = 0$
Consider Faà di Bruno's Formula:
Let $D_x^k u$ denote the $k$th derivative of a function $u$ with respect to $x$.
Then:

$\ds D_x^n w = \sum_{j \mathop = 0}^n D_u^j w \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = n \\ \forall p \mathop \ge 1: k_p \mathop \ge 0} } n! \prod_{m \mathop = 1}^n \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} }$

When $n = 0$ we have:

$D_x^0 w = w$


Proof
In the summation:

$\ds \sum_{j \mathop = 0}^0 D_u^j w \sum_{\substack {\sum_{p \mathop \ge 0} k_p \mathop = j \\ \sum_{p \mathop \ge 0} p k_p \mathop = 0 \\ \forall p \ge 0: k_p \mathop \ge 0} } 0! \prod_{m \mathop = 0}^1 \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} }$
the only element appearing is for $j = 0$, and the continued product is vacuous.

Thus:

$\ds \prod_{m \mathop = 0}^1 \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} } = 1$
and we are left with:














\(\ds \sum_{j \mathop = 0}^0 D_u^j w\)

\(=\)







\(\ds D_u^0 w\)




















\(\ds \)

\(=\)







\(\ds w\)





Definition of Zeroth Derivative



$\blacksquare$





