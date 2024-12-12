# 

Source: https://proofwiki.org/wiki/Cosine_Inequality

Theorem
$1 - \dfrac {x^2} 2 \le \cos x$
for all $x \in \R$.


Proof
Let $\map f x = \cos x - \paren {1 - \dfrac {x^2} 2}$.
By Derivative of Cosine Function:

$\map {f'} x = x - \sin x$
From Sine Inequality, we know $\sin x \le x$ for $x \ge 0$.
Hence $\map {f'} x \ge 0$ for $x \ge 0$.
From Derivative of Monotone Function, $\map f x$ is increasing for $x \ge 0$.
By Cosine of Zero is One, $\map f 0 = 0$.
It follows that $\map f x \ge 0$ for $x \ge 0$.
By Cosine Function is Even, $\map f x$ is an even function.
This implies $\map f x \ge 0$ for all $x \in \R$.
$\blacksquare$





