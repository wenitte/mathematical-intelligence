# 

Source: https://proofwiki.org/wiki/Fa%C3%A0_di_Bruno%27s_Formula/Example/1

Example of use of Faà di Bruno's Formula: $n = 1$
Consider Faà di Bruno's Formula:
Let $D_x^k u$ denote the $k$th derivative of a function $u$ with respect to $x$.
Then:

$\ds D_x^n w = \sum_{j \mathop = 0}^n D_u^j w \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = n \\ \forall p \mathop \ge 1: k_p \mathop \ge 0} } n! \prod_{m \mathop = 1}^n \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} }$

When $n = 1$ we have:

$D_x^1 w = D_u^1 w D_x^1 u$


Proof
In the summation:

$\ds \sum_{j \mathop = 0}^1 D_u^j w \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = 1 \\ \forall p \ge 1: k_p \mathop \ge 0} } 1! \prod_{m \mathop = 1}^1 \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} }$
we need to consider $j = 0$ and $j = 1$.

Let $j = 0$.
Consider the set of $k_p$ such that:

$k_1 + k_2 + \cdots = 0$
$1 \times k_1 + 2 k_2 + \cdots = 1$
$k_1, k_2, \ldots \ge 0$
It is apparent by inspection that no set of $k_p$ can fulfil these conditions.
Therefore when $j = 0$ the summation is vacuous

Let $j = 1$.
Consider the set of $k_p$ such that:

$k_1 + k_2 + \cdots = 1$
$1 \times k_1 + 2 k_2 + \cdots = 1$
$k_1, k_2, \ldots \ge 0$
By inspection, it is seen that these can be satisfied only by:

$k_1 = 1$
and all other $k_p = 0$.

When $k_m = 0$:

$\dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} } = 1$
by definition of zeroth derivative and factorial of $0$.
Thus any contribution to the summation where $k_m = 0$ can be disregarded.

Thus we have:














\(\ds \)

\(\)







\(\ds \sum_{j \mathop = 0}^1 \sum_{\substack {k_1 \mathop = j \\ k_1 \mathop = 1 \\ k_1 \mathop \ge 0} } D_u^j w \dfrac {1!} {k_1! \paren {1!}^{k_1} } \paren {D_x^1 u}^{k_1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k_1 \mathop = 1} D_u^1 w \dfrac {1!} {k_1! \paren {1!}^{k_1} } \paren {D_x^1 u}^{k_1}\)





simplifying: $j = 0$ is vacuous














\(\ds \)

\(=\)







\(\ds D_u w D_x u\)









$\blacksquare$





