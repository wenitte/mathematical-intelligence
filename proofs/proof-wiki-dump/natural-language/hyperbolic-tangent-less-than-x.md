# 

Source: https://proofwiki.org/wiki/Hyperbolic_Tangent_Less_than_X

Theorem
$\tanh x \le x$
for $x \ge 0$.


Proof
Let $\map f x = x - \tanh x$.
By Derivative of Hyperbolic Tangent:

$\map {f'} x = 1 - \sech^2 x$
Since $\cosh x \ge 1$ for all $x \in \R$, we can deduce that:

$\map {f'} x \ge 0$
From Derivative of Monotone Function, $\map f x$ is increasing.
By definition of hyperbolic tangent:

$\map f x = 0$
It follows that $\map f x \ge 0$ for $x \ge 0$.
Hence the result.
$\blacksquare$





