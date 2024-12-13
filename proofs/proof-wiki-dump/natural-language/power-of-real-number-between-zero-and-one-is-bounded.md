# 

Source: https://proofwiki.org/wiki/Power_of_Real_Number_between_Zero_and_One_is_Bounded

Theorem
Let $x \in \R$ be a real number.
Let $0 < x < 1$.
Let set $S = \set {x^n: n \in \N}$.

Then:

$\inf S = 0$
and:

$\sup S = 1$
where $\inf S$ and $\sup S$ are the infimum and supremum of $S$ respectively.


Proof
When $n = 0$ it follows that $x^n = 1$ and so $\sup S \ge 1$.
Let $x^k \in S$.
As $x < 1$, it follows from Real Number Ordering is Compatible with Multiplication that:

$x^{k + 1} < x^k$
So:

$\forall x \in S: x \le 1$
Hence it follows that $\sup S = 1$.

As $x > 0$, it follows by Real Number Ordering is Compatible with Multiplication that:

$\forall x \in S: x \ge 0$
Therefore $x$ is a lower bound of $S$.

Now suppose $h > 0$ is also a lower bound of $S$.
Then:

$\forall n \in \N: x^n \ge h$
and:

$\forall n \in \N: \paren {\dfrac 1 x}^n \le \dfrac 1 h$
But as $0 < x < 1$ it follows that:

$\dfrac 1 x > 1$
Thus $\dfrac 1 h$ is an upper bound for $\set {\paren {\dfrac 1 x}^n: n \in \N}$.
From Power of Real Number greater than One is Unbounded Above, this has been shown to be unbounded above.
Therefore there can be no such lower bound $h > 0$ of $S$.
Hence $\inf S = 0$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 3$: Natural Numbers: Exercise $\S 3.6 \ (2)$




