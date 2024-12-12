# 

Source: https://proofwiki.org/wiki/Fa%C3%A0_di_Bruno%27s_Formula/Example/2

Example of use of Faà di Bruno's Formula: $n = 2$
Consider Faà di Bruno's Formula:
Let $D_x^k u$ denote the $k$th derivative of a function $u$ with respect to $x$.
Then:

$\ds D_x^n w = \sum_{j \mathop = 0}^n D_u^j w \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = n \\ \forall p \mathop \ge 1: k_p \mathop \ge 0} } n! \prod_{m \mathop = 1}^n \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} }$

When $n = 2$ we have:

$D_x^2 w = D_u^2 w \paren {D_x^1 u}^2 + D_u^1 w D_x^2 u$


Proof
In the summation:

$\ds \sum_{j \mathop = 0}^2 D_u^j w \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = 2 \\ \forall p \ge 1: k_p \mathop \ge 0} } 2! \prod_{m \mathop = 1}^2 \dfrac {\left({D_x^m u}\right)^{k_m} } {k_m! \paren {m!}^{k_m} }$
we need to consider $j = 0, j = 1$ and $j = 2$.

Note that when $k_m = 0$:

$\dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} } = 1$
by definition of zeroth derivative and factorial of $0$.
Thus any contribution to the summation where $k_m = 0$ can be disregarded.

Let $j = 0$.
Consider the set of $k_p$ such that:

$k_1 + k_2 + \cdots = 0$
$1 \times k_1 + 2 k_2 + \cdots = 2$
$k_1, k_2, \ldots \ge 0$
It is apparent by inspection that no set of $k_p$ can fulfil these conditions.
Therefore when $j = 0$ the summation is vacuous

Let $j = 1$.
Consider the set of $k_p$ such that:

$k_1 + k_2 + \cdots = 1$
$1 \times k_1 + 2 k_2 + \cdots = 2$
$k_1, k_2, \ldots \ge 0$
By inspection, it is seen that these can be satisfied only by:

$k_2 = 1$
and all other $k_p = 0$.

Let $j = 2$.
Consider the set of $k_p$ such that:

$k_1 + k_2 + \cdots = 2$
$1 \times k_1 + 2 k_2 + \cdots = 2$
$k_1, k_2, \ldots \ge 0$
By inspection, it is seen that these can be satisfied only by:

$k_1 = 2$
and all other $k_p = 0$.

Thus we have:














\(\ds \)

\(\)







\(\ds \sum_{j \mathop = 0}^2 D_u^j w \sum_{\substack {k_1 \mathop + k_2 \mathop = j \\ k_1 \mathop + 2 k_2 \mathop = 2 \\ k_1, k_2 \mathop \ge 0} } 2! \dfrac {\paren {D_x^1 u}^{k_1} \paren {D_x^2 u}^{k_2} } {k_1! \paren {1!}^{k_1} k_2! \paren {2!}^{k_2} }\)




















\(\ds \)

\(=\)







\(\ds D_u^1 w \dfrac {2! \paren {D_x^1 u}^0 \paren {D_x^2 u}^1} {0! \paren {1!}^0 1! 2^1} + D_u^2 w \dfrac {2! \paren {D_x^1 u}^2 \paren {D_x^2 u}^0} {2! \paren {1!}^2 0! \paren {2!}^0}\)





substituting for $k_1$ and $k_2$ for each case














\(\ds \)

\(=\)







\(\ds D_u^1 w \paren {D_x^2 u} + D_u^2 w \paren {D_x^1 u}^2\)





simplifying



$\blacksquare$





