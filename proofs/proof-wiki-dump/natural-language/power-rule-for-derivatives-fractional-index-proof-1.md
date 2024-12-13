# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives/Fractional_Index/Proof_1

Theorem
Let $n \in \N_{>0}$.
Let $f: \R \to \R$ be the real function defined as $\map f x = x^{1 / n}$.

Then:

$\map {f'} x = n x^{n - 1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


Proof
Let $n \in \N_{>0}$.
Thus, let $\map f x = x^{1 / n}$.
From the definition of the power to a rational number, or alternatively from the definition of the root of a number, $\map f x$ is defined when $x \ge 0$.
(However, see the special case where $x = 0$.)
From Continuity of Root Function, $\map f x$ is continuous over the open interval $\openint 0 \infty$, but not at $x = 0$ where it is continuous only on the right.

Let $y > x$.
From Inequalities Concerning Roots:

$\forall n \in \N_{>0}: X Y^{1 / n} \, \size {x - y} \le n X Y \, \size {x^{1 / n} - y^{1 / n} } \le Y X^{1 / n} \, \size {x - y}$
where $x, y \in \closedint X Y$.
Setting $X = x$ and $Y = y$, this reduces (after algebra) to:

$\dfrac 1 {n y} y^{1 / n} \le \dfrac {y^{1 / n} - x^{1 / n} } {y - x} \le \dfrac 1 {n x} x^{1 / n}$
From the Squeeze Theorem for Functions, it follows that:

$\ds \lim_{y \mathop \to x^+} \dfrac {y^{1 / n} - x^{1 / n} } {y - x} = \dfrac 1 {n x} x^{1 / n} = \dfrac 1 n x^{\dfrac 1 n - 1}$

A similar argument shows that the left hand limit is the same.

Thus the result holds for $\map f x = x^{1 / n}$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 10.15 \ (1)$




