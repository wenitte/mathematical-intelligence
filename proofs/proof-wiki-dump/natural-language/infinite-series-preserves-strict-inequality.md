# 

Source: https://proofwiki.org/wiki/Infinite_Series_preserves_Strict_Inequality

Theorem
Let $\sequence {x_n}_{n \mathop \in \N}$ and $\sequence {y_n}_{n \mathop \in \N}$ be real sequences such that: 

$x_n \le y_n$ for all $n \in \N$
and:

$x_m < y_m$ for at least one $m \in \N$.
Suppose that: 

$\ds \sum_{n \mathop = 1}^\infty x_n$ and $\ds \sum_{n \mathop = 1}^\infty y_n$ both converge.

Then:

$\ds \sum_{n \mathop = 1}^\infty x_n < \sum_{n \mathop = 1}^\infty y_n$


Proof
We have: 

$\ds \sum_{n \mathop = 1}^N x_n \le \sum_{n \mathop = 1}^N y_n$ for each $N \in \N$.
Then: 

$\ds \sum_{n \mathop = 1}^N \paren {y_n - x_n} \ge 0$ for each $N \in \N$.
From the Well-Ordering Principle, there exists a least $m \in \N$ such that $x_m < y_m$. 
Then for this $m$ we have $y_m - x_m > 0$.
So for $N \ge m$ we have: 

$\ds \sum_{n \mathop = 1}^N \paren {y_n - x_n} \ge y_m - x_m > 0$
From Linear Combination of Convergent Series:

$\ds \sum_{n \mathop = 1}^\infty \paren {y_n - x_n}$ converges and:
$\ds \sum_{n \mathop = 1}^\infty \paren {y_n - x_n} = \sum_{n \mathop = 1}^\infty y_n - \sum_{n \mathop = 1}^\infty x_n$
From Limits Preserve Inequalities, we have: 

$\ds \sum_{n \mathop = 1}^\infty \paren {y_n - x_n} \ge y_m - x_m > 0$
That is: 

$\ds \sum_{n \mathop = 1}^\infty y_n > \sum_{n \mathop = 1}^\infty x_n$
$\blacksquare$





