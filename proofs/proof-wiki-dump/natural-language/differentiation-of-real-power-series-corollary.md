# 

Source: https://proofwiki.org/wiki/Differentiation_of_Real_Power_Series/Corollary

Corollary to Differentiation of Real Power Series
Let $\xi \in \R$ be a real number.
Let $\sequence {a_n}$ be a sequence in $\R$.

Let $\ds \sum_{m \mathop \ge 0} a_m \paren {x - \xi}^m$ be the power series in $x$ about the point $\xi$.

The value of $\ds \frac {\d^n} {\d x^n} \sum_{m \mathop \ge 0} a_m \paren {x - \xi}^m$ at $x = \xi$ is:

$\ds \valueat {\frac {\d^n} {\d x^n} \sum_{m \mathop \ge 0} a_m \paren {x - \xi}^m} {x \mathop = \xi} = a_n n!$


Proof
From Differentiation of Real Power Series:

$\ds \frac {\d^n} {\d x^n} \sum_{m \mathop \ge 0} a_m \paren {x - \xi}^m = \sum_{m \mathop \ge n} a_m m^{\underline n} \paren {x - \xi}^{m - n}$
where $m^{\underline n}$ denotes the falling factorial.

When $x = \xi$, all the terms in $\paren {x - \xi}^{m - n}$ vanish except when $m = n$.
When $m = n$, from Nth Derivative of Nth Power we have:

$\ds \frac {\d^n} {\d x^n} a_m \paren {x - \xi}^m = a_m n!$
But then $m = n$ and the result follows.
$\blacksquare$





