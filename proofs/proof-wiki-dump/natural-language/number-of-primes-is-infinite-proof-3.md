# 

Source: https://proofwiki.org/wiki/Number_of_Primes_is_Infinite/Proof_3



Theorem
The number of primes is infinite.


Proof
Aiming for a contradiction, suppose that there are only $N$ prime numbers.
Let the set of all primes be:

$\Bbb P = \set {p_1, p_2, \ldots, p_N}$
By the Fundamental Theorem of Arithmetic, every integer $k > 1$ can be expressed in the form:

$k = {p_1}^{a_1} {p_2}^{a_2} \dotsm {p_N}^{a_N}$

Let $n > 1$ be fixed.
Let $a$ be the largest exponent occurring in the prime decomposition of all positive integers $k \le n$.
Then:

$\ds \sum_{k \mathop = 1}^n \frac 1 k \le \prod_{j \mathop = 1}^N \paren {\sum_{k \mathop = 0}^a \frac 1 { {p_j}^k} }$
is expressible in the form:




\(\text {(1)}: \quad\)









\(\ds 1 + \frac 1 2 + \frac 1 3 + \dotsb + \frac 1 n\)

\(\le\)







\(\ds \paren {1 + \frac 1 {p_1} + \frac 1 { {p_1}^2} + \dotsb + \frac 1 { {p_1}^a} }\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds \paren {1 + \frac 1 {p_2} + \frac 1 { {p_2}^2} + \dotsb + \frac 1 { {p_2}^a} }\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds \ \dotsb\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds \paren {1 + \frac 1 {p_N} + \frac 1 { {p_N}^2} + \dotsb + \frac 1 { {p_N}^a} }\)









which can be seen by multiplying out the factors on the right hand side.
But from Sum of Infinite Geometric Sequence:

$1 + x + x^2 + \dotsb = \dfrac 1 {1 - x}$
for all $x$ such that $\size x < 1$.
Thus the factors in $(1)$ are less than the numbers:

$\dfrac 1 {1 - 1 / p_1}, \dfrac 1 {1 - 1 / p_2}, \dotsb, \dfrac 1 {1 - 1 / p_N}$
and so:

$1 + \dfrac 1 2 + \dfrac 1 3 + \dotsb + \dfrac 1 n < \dfrac {p_1} {p_1 - 1} \dfrac {p_2} {p_2 - 1} \dotsm \dfrac {p_N} {p_N - 1}$
We have chosen $n > 1$ arbitrarily, so this holds for every $n > 1$.
This contradicts the result Harmonic Series is Divergent.

Hence the result, by Proof by Contradiction.
$\blacksquare$


Historical Note
This proof was devised by Leonhard Paul Euler.


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3$: Appendix $\text A$: Euler




