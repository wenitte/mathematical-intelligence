# 

Source: https://proofwiki.org/wiki/Ordering_of_Reciprocals

Theorem
Let $x, y \in \R$ be real numbers such that $x, y \in \openint 0 \to$ or $x, y \in \openint \gets 0$
Then:

$x \le y \iff \dfrac 1 y \le \dfrac 1 x$


Proof 1
By Reciprocal Function is Strictly Decreasing, the reciprocal function is strictly decreasing.
By Mapping from Totally Ordered Set is Dual Order Embedding iff Strictly Decreasing, the reciprocal function is a dual order embedding.
That is:

$x \le y \iff \dfrac 1 y \le \dfrac 1 x$
$\blacksquare$


Proof 2
By Reciprocal Function is Strictly Decreasing, the reciprocal function is strictly decreasing.
Thus 

$x \le y \implies \dfrac 1 y \le \dfrac 1 x$
Suppose then that $\dfrac 1 y \le \dfrac 1 x$.

If $x, y > 0$, then from Reciprocal of Strictly Positive Real Number is Strictly Positive:
$\dfrac 1 y, \dfrac 1 x > 0$
Similarly, if $x, y < 0$ or $x, y > 0$, then from Reciprocal of Strictly Negative Real Number is Strictly Negative:

$\dfrac 1 y, \dfrac 1 x < 0$
Thus we can apply the above to show that:

$\dfrac 1 {1/x} \le \dfrac 1 {1/y}$
By Inverse of Multiplicative Inverse:

$x \le y$
$\blacksquare$





