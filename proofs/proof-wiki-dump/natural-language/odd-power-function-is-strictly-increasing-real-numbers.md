# 

Source: https://proofwiki.org/wiki/Odd_Power_Function_is_Strictly_Increasing/Real_Numbers

Theorem
Let $n \in \Z_{> 0}$ be an odd positive integer.
Let $f_n: \R \to \R$ be the real function defined as:

$\map {f_n} x = x^n$
Then $f_n$ is strictly increasing.


Proof
From the Power Rule for Derivatives:

$\map {D_x} {x^n} = n x^{n - 1}$
As $n$ is odd, $n - 1$ is even.
Thus by Even Power is Non-Negative:

$\map {D_x} {x^n} \ge 0$
for all $x$.

From Derivative of Monotone Function, it follows that $f_n$ is increasing over the whole of $\R$.
The only place where $\map {D_x} {x^n} = 0$ is at $x = 0$.
Everywhere else, $f_n$ is strictly increasing.
By Sign of Odd Power:

$\map {f_n} x < 0 = \map {f_n} 0$ when $x < 0$ and
$\map {f_n} 0 = 0 < \map {f_n} x$ when $0 < x$.
Thus $f_n$ is strictly increasing on $\R$.
$\blacksquare$





