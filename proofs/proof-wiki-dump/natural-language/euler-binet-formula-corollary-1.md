# 

Source: https://proofwiki.org/wiki/Euler-Binet_Formula/Corollary_1

Corollary to Euler-Binet Formula
$F_n = \dfrac {\phi^n} {\sqrt 5}$ rounded to the nearest integer
where:

$F_n$ denotes the $n$th Fibonacci number
$\phi$ denotes the golden mean.


Proof
By definition of $n$th Fibonacci number, $F_n$ is an integer.
From Euler-Binet Formula:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5} = \dfrac {\phi^n } {\sqrt 5} - \dfrac {\hat \phi^n} {\sqrt 5}$
But $\size {\dfrac {\hat \phi^n} {\sqrt 5} } < \dfrac 1 2$ for all $n \ge 0$.
Thus $\dfrac {\phi^n } {\sqrt 5}$ differs from $F_n$ by a number less than $\dfrac 1 2$.
Thus the nearest integer to $\dfrac {\phi^n } {\sqrt 5}$ is $F_n$.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: $(15)$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




