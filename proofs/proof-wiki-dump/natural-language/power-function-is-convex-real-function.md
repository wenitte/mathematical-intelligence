# 

Source: https://proofwiki.org/wiki/Power_Function_is_Convex_Real_Function

Theorem
Let $p \ge 1$ be a real number.
Define $f : \hointr 0 \infty \to \hointr 0 \infty$ by: 

$\map f x = x^p$
for each $x \in \hointr 0 \infty$. 

Then $f$ is a convex function.


Proof
Applying Derivative of Power twice, we have that: 

$f$ is twice differentiable on $\openint 0 \infty$
with:

$\map {f' '} x = p \paren {p - 1} x^{p - 2}$
for each $x \in \openint 0 \infty$.
Since $p \ge 1$, we have: 

$p \paren {p - 1} \ge 0$
and so:

$\map {f' '} x \ge 0$
for each $x \in \openint 0 \infty$.
From Real Function with Positive Derivative is Increasing:

$f'$ is increasing on $\openint 0 \infty$
and so from Real Function is Convex iff Derivative is Increasing:

$f$ is convex on $\openint 0 \infty$.
It remains to assure ourselves that:

$\map f {t x + \paren {1 - t} 0} \le t \map f x + \paren {1 - t} \map f 0 = t \map f x$ for $x \in \hointr 0 \infty$ and $t \in \closedint 0 1$.
We have:

$\map f {t x} = \paren {t x}^p = t^p x^p$ for $x \in \hointr 0 \infty$ and $t \in \closedint 0 1$.
Since $p \ge 1$, we have:

$t^p \le t$ for $t \in \closedint 0 1$.
Hence we have:

$t^p x^p \le t x^p$
Hence:

$\map f {t x} \le t \map f x$
Hence:

$f$ is convex.
$\blacksquare$





