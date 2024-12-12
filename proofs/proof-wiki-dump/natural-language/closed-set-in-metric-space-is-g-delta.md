# 

Source: https://proofwiki.org/wiki/Closed_Set_in_Metric_Space_is_G-Delta

Theorem
Let $\struct {X, d}$ be a metric space, and let $F \subset X$ be a closed set. 

Then $F$ is a $G_\delta$ set of X.


Proof
Let $n \in \N$.
Let $\ds F_{\frac 1 n} = \bigcup \limits_{x \mathop \in F} \map B {x, \dfrac 1 n}$, where $\map B {x, \dfrac 1 n}$ is the open ball around $x$ with radius $\dfrac 1 n$.
$F_{\frac 1 n}$ is an open set by definition of open ball.
Also, $F_{\frac 1 n}$ contains $F$ as it is the union of open balls around every element of $F$.

$\ds F \subseteq \bigcap \limits_{n \mathop = 1}^{\infty} F_{\frac 1 n}$ because $F \subseteq F_{\frac 1 n}$ for each $n \in \N$.
Note that:

$\ds \lim_{n \mathop \to \infty} \map B {x, \dfrac 1 n} = \set x$
so the above statement holds even in the limit.

Let $\ds y \in \bigcap \limits_{n \mathop = 1}^\infty F_{\frac 1 n}$.
Let $\epsilon > 0$ be given.
There exists $n \in \N$ such that $\dfrac 1 n < \epsilon$.
As $y \in \bigcap \limits_{n \mathop = 1}^\infty F_{\frac 1 n}$, there exists $x \in F$ such that $y \in \map B {x, \dfrac 1 n}$.
Therefore:

$\map d {x, y} < \dfrac 1 n < \epsilon$
which shows that $y$ is a Limit Point of $F$.

Since $F$ is closed, then $y \in F$.
Therefore:

$\ds F \supseteq \bigcap \limits_{n \mathop = 1}^\infty F_{\frac 1 n}$

We conclude that $\ds F = \bigcap \limits_{n \mathop = 1}^\infty F_{\frac 1 n}$, a countable intersection of open sets.
Therefore $F$ is a $G_\delta$ set by definition. 
$\blacksquare$





