# 

Source: https://proofwiki.org/wiki/Euler-Binet_Formula/Corollary_2

Corollary to Euler-Binet Formula
For even $n$:

$F_n < \dfrac {\phi^n} {\sqrt 5}$
For odd $n$:

$F_n > \dfrac {\phi^n} {\sqrt 5}$
where:

$F_n$ denotes the $n$th Fibonacci number
$\phi$ denotes the golden mean.


Proof
From Euler-Binet Formula:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5} = \dfrac {\phi^n} {\sqrt 5} - \dfrac {\hat \phi^n} {\sqrt 5}$
We have that:

$\hat \phi = -\dfrac 1 \phi$
and so:

$\hat \phi^n = \paren {-1}^n \dfrac 1 {\phi^n}$
$\phi > 0$ and so $\dfrac 1 {\phi^n} > 0$ for all $n$.
For even $n$:

$\paren {-1}^n = 1$
and so:

$\hat \phi^n > 0$
Thus:

$\dfrac {\phi^n} {\sqrt 5} - \dfrac {\hat \phi^n} {\sqrt 5} < \dfrac {\phi^n} {\sqrt 5}$
and so $F_n < \dfrac {\phi^n} {\sqrt 5}$.

For odd $n$:

$\paren {-1}^n = -1$
and so:

$\hat \phi^n < 0$
Thus:

$\dfrac {\phi^n} {\sqrt 5} - \dfrac {\hat \phi^n} {\sqrt 5} > \dfrac {\phi^n} {\sqrt 5}$
and so $F_n > \dfrac {\phi^n} {\sqrt 5}$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $10$




