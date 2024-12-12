# 

Source: https://proofwiki.org/wiki/Euler_Formula_for_Sine_Function/Complex_Numbers/Proof_1/Lemma_1

Theorem
The function:

$\dfrac {\sinh x} x$
is increasing for positive real $x$.


Proof
Let $\map f x = \dfrac {\sinh x} x$.
By Quotient Rule for Derivatives and Derivative of Hyperbolic Sine:

$\map {f'} x = \dfrac {x \cosh x - \sinh x} {x^2}$
From Hyperbolic Tangent Less than X, we have $\tanh x \le x$ for $x \ge 0$.
Since $\cosh x \ge 0$, we can rearrange to get $x \cosh x - \sinh x \ge 0$.
Since $x^2 \ge 0$, we have $\map {f'} x \ge 0$ for $x \ge 0$.
So by Derivative of Monotone Function it follows that $\map f x$ is increasing for $x \ge 0$.
$\blacksquare$





