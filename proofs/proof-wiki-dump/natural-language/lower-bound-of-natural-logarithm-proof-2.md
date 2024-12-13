# 

Source: https://proofwiki.org/wiki/Lower_Bound_of_Natural_Logarithm/Proof_2

Theorem
$\forall x \in \R_{>0}: 1 - \dfrac 1 x \le \ln x$
where $\ln x$ denotes the natural logarithm of $x$.


Proof
Let $x > 0$.
Note that:

$1 - \dfrac 1 x \le \ln x$
is logically equivalent to:

$1 - \dfrac 1 x - \ln x \le 0$
Let $\map f x = 1 - \dfrac 1 x - \ln x$.
Then:














\(\ds \map f x\)

\(=\)







\(\ds 1 - \dfrac 1 x - \ln x\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} x\)

\(=\)







\(\ds \frac 1 {x^2} - \frac 1 x\)





Derivative of Constant, Power Rule for Derivatives, Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds \frac {1 - x} {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds \map {f} x\)

\(=\)







\(\ds - \frac 2 {x^3} + \frac 1 {x^2}\)





Power Rule for Derivatives



Note that $\map {f'} 1 = 0$.
Also, $\map {f} 1 < 0$.
So by the Second Derivative Test, $x = 1$ is a local maximum.

On $\openint 0 1$:

$\map {f'} x > 0$
By Derivative of Monotone Function, $f$ is strictly increasing on that interval.

On $\openint 1 \to$:

$\map {f'} x < 0$
By Derivative of Monotone Function, $f$ is strictly decreasing on that interval.

So $x = 1$ yields a global maximum, at which by Logarithm of 1 is 0:

$\map f 1 = 1 - 1 - 0 = 0$
That is:

$\forall x > 0: \map f x \le 0$
and so by definition of $\map f x$:

$1 - \dfrac 1 x - \ln x \le 0$
$\blacksquare$


Illustration





