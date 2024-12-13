# 

Source: https://proofwiki.org/wiki/Scaled_Real_Function_that_Increases_Without_Bound

Theorem
Let $f: \R \to \R$ be a real function.
Let $\lambda \in \R_{\ne 0}$ be a nonzero constant.

Then:
For $\lambda > 0$:

$\ds \lim_{x \mathop \to +\infty} \map f x = +\infty \implies \lim_{x \mathop \to +\infty} \lambda \map f x = +\infty$
$\ds \lim_{x \mathop \to -\infty} \map f x = +\infty \implies \lim_{x \mathop \to -\infty} \lambda \map f x = + \infty$

For $\lambda < 0$:

$\ds \lim_{x \mathop \to +\infty} \map f x = +\infty \implies \lim_{x \mathop \to +\infty} \lambda \map f x = -\infty$
$\ds \lim_{x \mathop \to -\infty} \map f x = +\infty \implies \lim_{x \mathop \to -\infty} \lambda \map f x = -\infty$


Proof
Let $\ds \lim_{x \mathop \to +\infty} \map f x = +\infty$.
From the definition of infinite limit at infinity, this means that:

$\forall M > 0: \exists N > 0: x > N \implies \map f x > M$.

Suppose $\lambda > 0$.
Then $M > 0 \iff \lambda^{-1} M > 0$.
Also, $\map f x > \lambda^{-1} M \iff \lambda f\map f x > M$.

So:

$\forall M > 0: \exists N > 0: x > N \implies \lambda \map f x > M$
From the definition of infinite limit at infinity:

$\ds \lim_{x \mathop \to +\infty} \lambda \map f x = +\infty$.

The proof for $\ds \lim_{x \mathop \to -\infty} \map f x = +\infty$ is analogous.

Now, suppose $\lambda < 0$.
Then $-\lambda f > 0$, and so $-\lambda f \to + \infty$, from above.
Write $\lambda f = -\paren {-\lambda f}$ and the result follows from Negative of Real Function that Increases Without Bound.
$\blacksquare$


Also see
Scaled Real Function that Decreases Without Bound




