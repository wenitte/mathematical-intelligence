# 

Source: https://proofwiki.org/wiki/Continuity_of_Root_Function

Theorem
Let $n \in \N_{>0}$ be a non-zero natural number.
Let $f: \hointr 0 \infty \to \R$ be the real function defined by $\map f x = x^{1/n}$.

Then $f$ is continuous at each $\xi > 0$ and continuous on the right at $\xi = 0$.


Proof
First suppose that $\xi > 0$.
Let $X, Y \in \R$ such that $0 < X < \xi < Y$.
Let $x \in \R$ such that $X < x < Y$.
From Inequalities Concerning Roots:

$X Y^{1/n} \ \size {x - \xi} \le n X Y \ \size {x^{1/n} - \xi^{1/n} } \le Y X^{1/n} \ \size {x - \xi}$
Thus:

$\dfrac 1 {n Y} Y^{1/n} \ \size {x - \xi} \le \size {x^{1/n} - \xi^{1/n} } \le \dfrac 1 {n X} X^{1/n} \ \size {x - \xi}$
The result follows by applying the Squeeze Theorem.

Now we need to show that $\map f x \to 0$ as $x \to 0^+$.
We need to show that:

$\forall \epsilon > 0: \exists \delta > 0: x^{1/n} = \size {x^{1/n} - 0} < \epsilon$
provided $0 < x < \delta$.
Clearly, for any given $\epsilon$, we can choose $\delta = \epsilon^n$.
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 8.15 \ (5)$




