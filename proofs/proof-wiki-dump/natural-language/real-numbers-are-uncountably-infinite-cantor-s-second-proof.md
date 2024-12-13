# 

Source: https://proofwiki.org/wiki/Real_Numbers_are_Uncountably_Infinite/Cantor%27s_Second_Proof

Theorem
The set of real numbers $\R$ is uncountably infinite.


Proof
By definition, a perfect set is a set $X$ such that every element $x \in X$ is the limit of a sequence of elements of $X$ distinct from $x$.
From Real Numbers form Perfect Set, $\R$ is perfect.
Therefore it is sufficient to show that a perfect subset of $X \subseteq \R^k$ is uncountable.
We prove the equivalent result that every sequence $\sequence {x_k}_{k \mathop \in \N} \subseteq X$ omits at least one element of $X$.

Let $y_1 \in X$.
Let $B_1:= \map {\BB_r} {y_1}$ be a closed ball whose center is at $y_1$.
Consider a closed ball:

$B_{n - 1} \supseteq B_n := \map {\BB_{\map \delta n} } {y_n}$
such that:

$\map \delta n \le \dfrac {\map \delta {n - 1} } 2$
$y_n \in X$
$x_n \notin B_n$
Note that $\map \delta 1 = r$.

We can satisfy the condition $x_n \notin B_n$ because $X$ is perfect, so every closed ball whose center is at an element of $X$ contains infinitely many elements of $X$.

Since $\map \delta n \le \dfrac r {2^{n - 1} }$, $y_n$ is Cauchy.
Therefore from Perfect Set is Closed, we may let:

$\ds Y = \lim_{n \mathop \to \infty} y_n \in X$

For $n \in \N$ we have:

$\set {y_m: m > n} \subseteq B_n$
so $Y \in B_n$.
But by construction:

$\forall n \in \N: x_n \notin B_n$
Therefore:

$\forall n \in \N: Y \ne x_n$
and the proof is complete.
$\blacksquare$


Historical Note
This proof was created by Georg Cantor.





