# 

Source: https://proofwiki.org/wiki/Consecutive_Integers_whose_Sums_of_Squares_of_Divisors_are_Equal

Theorem
The only two consecutive positive integers whose sums of the squares of their divisors are equal are $6$ and $7$.


Proof
The divisors of $6$ are

$1, 2, 3, 6$
and so the sum of the squares of the divisors of $6$ is:

$1^2 + 2^2 + 3^2 + 6^2 = 1 + 4 + 9 + 36 = 50$

The divisors of $7$ are

$1, 7$
and so the sum of the squares of the divisors of $7$ is:

$1^2 + 7^2 = 1 + 49 = 50$

It remains to be shown that there are no more.

Let $n \ge 7$ be an odd number.
Then both $n - 1$ and $n + 1$ are even.
Denote $\map {\sigma_2} n$ the sum of squares of the divisors of $n$.
We will show that:

$\map {\sigma_2} {n + 1} > \map {\sigma_2} n$
$\map {\sigma_2} {n - 1} > \map {\sigma_2} n$ for $n \ge 151$

Since:














\(\ds \map {\sigma_2} n\)

\(=\)







\(\ds \sum_{d \mathop \divides n} d^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{d \mathop \divides n} \paren {\frac n d}^2\)




















\(\ds \)

\(=\)







\(\ds n^2 \sum_{d \mathop \divides n} \paren {\frac 1 d}^2\)




















\(\ds \)

\(<\)







\(\ds n^2 \sum_{d \text{ odd} } \paren {\frac 1 d}^2\)





since $n$ is odd














\(\ds \)

\(=\)







\(\ds \frac {n^2 \pi^2} 8\)





Sum of Reciprocals of Squares of Odd Integers














\(\ds \map {\sigma_2} {n \pm 1}\)

\(=\)







\(\ds \sum_{d \mathop \divides n \pm 1} d^2\)




















\(\ds \)

\(\ge\)







\(\ds 1^2 + 2^2 + \paren {\frac {n \pm 1} 2}^2 + \paren {n \pm 1}^2\)





since $n \pm 1$ is even and $n - 1 > 4$














\(\ds \)

\(=\)







\(\ds \frac 5 4 n^2 \pm \frac 5 2 n + \frac {15} 2\)









Therefore:














\(\ds \map {\sigma_2} {n + 1}\)

\(=\)







\(\ds \frac 5 4 n^2 + \frac 5 2 n + \frac {15} 2\)




















\(\ds \)

\(>\)







\(\ds \frac {\pi^2} 8 n^2\)




















\(\ds \)

\(>\)







\(\ds \map {\sigma_2} n\)









and for $n - 1$:

$\map {\sigma_2} {n - 1} - \map {\sigma_2} n = \dfrac {10 - \pi^2} 8 n^2 - \dfrac 5 2 n + \dfrac {15} 2$
By Solution to Quadratic Equation, the above is greater than zero when:

$n > \dfrac {\paren {5/2} + \sqrt {\paren {5/2}^2 - 4 \paren {\paren {10 - \pi^2} / 8} \paren {15/2} } } {2 \paren {\paren {10 - \pi^2} / 8} } \approx 150.3$
hence there are no solutions for $\map {\sigma_2} {n - 1} = \map {\sigma_2} n$ for $n \ge 151$.

Our estimate of $\map {\sigma_2} n$ is very rough.
If $n$ is one of the following, we can get sharper estimates:

Suppose $n = p^k$ for a prime $p \ge 3$ and $k \ge 1$.
Then:














\(\ds \map {\sigma_2} n\)

\(=\)







\(\ds \sum_{i \mathop = 0}^k p^{2 i}\)





Divisors of Power of Prime














\(\ds \)

\(=\)







\(\ds n^2 \sum_{i \mathop = 0}^k \frac 1 {p^{2 i} }\)




















\(\ds \)

\(<\)







\(\ds n^2 \sum_{i \mathop = 0}^\infty \frac 1 {p^{2 i} }\)




















\(\ds \)

\(=\)







\(\ds \frac {n^2} {1 - \frac 1 {p^2} }\)





Sum of Infinite Geometric Sequence/Corollary 2














\(\ds \)

\(=\)







\(\ds n^2 \paren {1 + \frac 1 {p^2 - 1} }\)




















\(\ds \)

\(\le\)







\(\ds n^2 \paren {1 + \frac 1 {3^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 9 8 n^2\)









We have:














\(\ds \map {\sigma_2} {n - 1} - \map {\sigma_2} n\)

\(>\)







\(\ds \paren {\frac 5 4 - \frac 9 8} n^2 - \frac 5 2 n + \frac {15} 2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 8 \paren {n^2 - 20 n + 60}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 8 \paren {n - 10}^2 - 5\)









The above is greater than $0$ when $n \ge 17$.

Suppose $n = p q$, where $p, q \ge 3$ are primes and $p \ne q$.
Then:














\(\ds \map {\sigma_2} n\)

\(=\)







\(\ds 1^2 + p^2 + q^2 + p^2 q^2\)





Product of Two Distinct Primes has 4 Positive Divisors














\(\ds \)

\(=\)







\(\ds n^2 \paren {1 + \frac 1 {p^2} + \frac 1 {q^2} + \frac 1 {n^2} }\)




















\(\ds \)

\(\le\)







\(\ds n^2 \paren {1 + \frac 1 {3^2} + \frac 1 {5^2} + \frac 1 {15^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {52} {45} n^2\)




















\(\ds \)

\(<\)







\(\ds \frac 9 8 n^2\)









We have:














\(\ds \map {\sigma_2} {n - 1} - \map {\sigma_2} n\)

\(>\)







\(\ds \paren {\frac 5 4 - \frac 52 45} n^2 - \frac 5 2 n + \frac {15} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {17} {180} \paren {n^2 - \frac {450} {17} n} + \frac {15} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {17} {180} \paren {n - \frac {225} {17} }^2 - \frac {615} {68}\)









The above is greater than $0$ when $n \ge 25$.

Therefore we just need to check the following $n \le 149$:

$3, 5, 7, 9, 11, 13, 15, 21, 45, 63, 75, 99, 105, 117, 135, 147$













\(\ds \map {\sigma_2} 1\)

\(=\)







\(\ds 1^2\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \map {\sigma_2} 2\)

\(=\)







\(\ds 1^2 + 2^2\)




















\(\ds \)

\(=\)







\(\ds 5\)




















\(\ds \map {\sigma_2} 3\)

\(=\)







\(\ds 1^2 + 3^3\)




















\(\ds \)

\(=\)







\(\ds 10\)




















\(\ds \map {\sigma_2} 4\)

\(=\)







\(\ds 1^2 + 2^2 + 4^2\)




















\(\ds \)

\(=\)







\(\ds 21\)




















\(\ds \map {\sigma_2} 5\)

\(=\)







\(\ds 1^2 + 5^2\)




















\(\ds \)

\(=\)







\(\ds 26\)




















\(\ds \map {\sigma_2} 6\)

\(=\)







\(\ds 1^2 + 2^2 + 3^2 + 6^2\)




















\(\ds \)

\(=\)







\(\ds 50\)




















\(\ds \map {\sigma_2} 7\)

\(=\)







\(\ds 1^2 + 7^2\)




















\(\ds \)

\(=\)







\(\ds 50\)




















\(\ds \map {\sigma_2} 8\)

\(=\)







\(\ds 1^2 + 2^2 + 4^2 + 8^2\)




















\(\ds \)

\(=\)







\(\ds 85\)




















\(\ds \map {\sigma_2} 9\)

\(=\)







\(\ds 1^2 + 3^2 + 9^2\)




















\(\ds \)

\(=\)







\(\ds 91\)




















\(\ds \map {\sigma_2} {10}\)

\(=\)







\(\ds 1^2 + 2^2 + 5^2 + 10^2\)




















\(\ds \)

\(=\)







\(\ds 130\)




















\(\ds \map {\sigma_2} {11}\)

\(=\)







\(\ds 1^2 + 11^2\)




















\(\ds \)

\(=\)







\(\ds 122\)




















\(\ds \map {\sigma_2} {12}\)

\(=\)







\(\ds 1^2 + 2^2 + 3^2 + 4^2 + 6^2 + 12^2\)




















\(\ds \)

\(=\)







\(\ds 210\)




















\(\ds \map {\sigma_2} {13}\)

\(=\)







\(\ds 1^2 + 13^2\)




















\(\ds \)

\(=\)







\(\ds 170\)




















\(\ds \map {\sigma_2} {14}\)

\(=\)







\(\ds 1^2 + 2^2 + 7^2 + 14^2\)




















\(\ds \)

\(=\)







\(\ds 250\)




















\(\ds \map {\sigma_2} {15}\)

\(=\)







\(\ds 1^2 + 3^2 + 5^2 + 15^2\)




















\(\ds \)

\(=\)







\(\ds 260\)




















\(\ds \map {\sigma_2} {20}\)

\(=\)







\(\ds 1^2 + 2^2 + 4^2 + 5^2 + 10^2 + 20^2\)




















\(\ds \)

\(=\)







\(\ds 546\)




















\(\ds \map {\sigma_2} {21}\)

\(=\)







\(\ds 1^2 + 3^2 + 7^2 + 21^2\)




















\(\ds \)

\(=\)







\(\ds 500\)




















\(\ds \map {\sigma_2} {44}\)

\(=\)







\(\ds 1^2 + 2^2 + 4^2 + 11^2 + 22^2 + 44^2\)




















\(\ds \)

\(=\)







\(\ds 2562\)




















\(\ds \map {\sigma_2} {45}\)

\(=\)







\(\ds 1^2 + 3^2 + 5^2 + 9^2 + 15^2 + 45^2\)




















\(\ds \)

\(=\)







\(\ds 2366\)




















\(\ds \map {\sigma_2} {62}\)

\(=\)







\(\ds 1^2 + 2^2 + 31^2 + 62^2\)




















\(\ds \)

\(=\)







\(\ds 4810\)




















\(\ds \map {\sigma_2} {63}\)

\(=\)







\(\ds 1^2 + 3^2 + 7^2 + 9^2 + 21^2 + 63^2\)




















\(\ds \)

\(=\)







\(\ds 4550\)




















\(\ds \map {\sigma_2} {74}\)

\(=\)







\(\ds 1^2 + 2^2 + 37^2 + 74^2\)




















\(\ds \)

\(=\)







\(\ds 6850\)




















\(\ds \map {\sigma_2} {75}\)

\(=\)







\(\ds 1^2 + 3^2 + 5^2 + 15^2 + 25^2 + 75^2\)




















\(\ds \)

\(=\)







\(\ds 6510\)




















\(\ds \map {\sigma_2} {98}\)

\(=\)







\(\ds 1^2 + 2^2 + 7^2 + 14^2 + 49^2 + 98^2\)




















\(\ds \)

\(=\)







\(\ds 12255\)




















\(\ds \map {\sigma_2} {99}\)

\(=\)







\(\ds 1^2 + 3^2 + 9^2 + 11^2 + 33^2 + 99^2\)




















\(\ds \)

\(=\)







\(\ds 11102\)




















\(\ds \map {\sigma_2} {104}\)

\(=\)







\(\ds 1^2 + 2^2 + 4^2 + 8^2 + 13^2 + 26^2 + 52^2 + 104^2\)




















\(\ds \)

\(=\)







\(\ds 14450\)




















\(\ds \map {\sigma_2} {105}\)

\(=\)







\(\ds 1^2 + 3^2 + 5^2 + 7^2 + 15^2 + 21^2 + 35^2 + 105^2\)




















\(\ds \)

\(=\)







\(\ds 13000\)




















\(\ds \map {\sigma_2} {116}\)

\(=\)







\(\ds 1^2 + 2^2 + 4^2 + 29^2 + 58^2 + 116^2\)




















\(\ds \)

\(=\)







\(\ds 17682\)




















\(\ds \map {\sigma_2} {117}\)

\(=\)







\(\ds 1^2 + 3^2 + 9^2 + 13^2 + 39^2 + 117^2\)




















\(\ds \)

\(=\)







\(\ds 15470\)




















\(\ds \map {\sigma_2} {134}\)

\(=\)







\(\ds 1^2 + 2^2 + 67^2 + 134^2\)




















\(\ds \)

\(=\)







\(\ds 22450\)




















\(\ds \map {\sigma_2} {135}\)

\(=\)







\(\ds 1^2 + 3^2 + 5^2 + 9^2 + 15^2 + 27^2 + 45^2 + 135^2\)




















\(\ds \)

\(=\)







\(\ds 21320\)




















\(\ds \map {\sigma_2} {146}\)

\(=\)







\(\ds 1^2 + 2^2 + 73^2 + 146^2\)




















\(\ds \)

\(=\)







\(\ds 26650\)




















\(\ds \map {\sigma_2} {147}\)

\(=\)







\(\ds 1^2 + 3^2 + 7^2 + 21^2 + 49^2 + 147^2\)




















\(\ds \)

\(=\)







\(\ds 24510\)









and thus the only pair is $\map {\sigma_2} 6 = \map {\sigma_2} 7 = 50$.
We have also inadvertently proved that $\map {\sigma_2} {2 n} > \map {\sigma_2} {2 n + 1}$ for $n \ge 8$.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $6$




