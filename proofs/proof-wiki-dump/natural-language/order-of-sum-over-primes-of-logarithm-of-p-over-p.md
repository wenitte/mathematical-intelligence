# 

Source: https://proofwiki.org/wiki/Order_of_Sum_over_Primes_of_Logarithm_of_p_over_p

Theorem
We have: 

$\ds \sum_{p \mathop \le x} \frac {\ln p} p = \ln x + \map \OO 1$
where:

$\ds \sum_{p \mathop \le x}$ sums over the primes less than or equal to $x$
$\OO$ is big-$\OO$ notation.


Proof
From the definition of the Von Mangoldt function, we have that: 

$\ds \map \Lambda m = \begin {cases}\ln p & m = p^k \text { for some prime } p \text { and } k \in \N \\ 0 & \text {otherwise} \end {cases}$
so:














\(\ds \sum_{m \mathop \le x} \frac {\map \Lambda m} m\)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \sum_{p^k \mathop \le x} \frac {\ln p} {p^k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{p \mathop \le x} \frac {\ln p} p + \sum_{k \mathop \ge 2} \sum_{p^k \mathop \le x} \frac {\ln p} {p^k}\)









that is: 

$\ds \sum_{m \mathop \le x} \frac {\map \Lambda m} m - \sum_{p \mathop \le x} \frac {\ln p} p = \sum_{k \mathop \ge 2} \sum_{p^k \mathop \le x} \frac {\ln p} {p^k}$
Consider the sum: 

$\ds \sum_{k \mathop \ge 2} \sum_{p^k \mathop \le x} \frac {\ln p} {p^k}$
The sum runs over the pairs of natural numbers $\tuple {k, p}$ for which $p$ is a prime with $p^k \le x$ and $k \ge 2$.
Note that if $p^k \le x$, then $p \le x$. 
So, alternatively, for each prime number $p \le x$ we can sum over the natural numbers $k \ge 2$ for which $p^k \le x$. 
That is: 

$\ds \sum_{k \mathop \ge 2} \sum_{p^k \le x} \frac {\ln p} {p^k} = \sum_{p \mathop \le x} \sum_{k \mathop \ge 2, \, p^k \mathop \le x} \frac {\ln p} {p^k}$
Since $p \ge 2$, we have $\ln p > 0$, so we only increase the sum by adding more terms.
So: 














\(\ds \sum_{p \mathop \le x} \sum_{k \mathop \ge 2, \, p^k \mathop \le x} \frac {\ln p} {p^k}\)

\(\le\)







\(\ds \sum_{p \mathop \le x} \sum_{k \mathop \ge 2} \frac {\ln p} {p^k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{p \mathop \le x} \ln p \paren {\sum_{k \mathop \ge 2} \frac 1 {p^k} }\)









We have: 














\(\ds \sum_{k \mathop \ge 2} \frac 1 {p^k}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac 1 {p^k} - 1 - \frac 1 p\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 - \frac 1 p} - 1 - \frac 1 p\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac p {p - 1} - 1 - \frac 1 p\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac 1 {p - 1} - 1 - \frac 1 p\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p \paren {p - 1} }\)









Note that for $p \ge 2$, we have: 

$\dfrac 1 2 p \le p - 1$
giving:

$\dfrac 1 {p \paren {p - 1} } \le \dfrac 2 {p^2}$
So:

$\ds \sum_{p \mathop \le x} \ln p \paren {\sum_{k \mathop \ge 2} \frac 1 {p^k} } \le 2 \sum_{p \mathop \le x} \frac {\ln p} {p^2}$
From Order of Natural Logarithm Function, we have: 

$\dfrac {\ln p} {p^2} \le \dfrac {2 \sqrt p} {p^2} = \dfrac 2 {p^{3/2} }$
for $p \ge 2$. 
So: 

$\ds 2 \sum_{p \mathop \le x} \frac {\ln p} {p^2} \le 4 \sum_{p \mathop \le x} \frac 1 {p^{3/2} }$
Note that we have: 

$\ds 4 \sum_{p \mathop \le x} \frac 1 {p^{3/2} } \le 4 \sum_{n \mathop \le x} \frac 1 {n^{3/2} }$
From Convergence of P-Series:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^{3/2} }$ converges.
So from Convergent Real Sequence is Bounded, there exists a real number $C > 0$ such that: 

$\ds \sum_{n \mathop \le x} \frac 1 {n^{3/2} } \le 4 C$
for all $x$.
Then:

$\ds 0 \le \sum_{p \mathop \le x} \sum_{k \mathop \ge 2, \, p^k \mathop \le x} \frac {\ln p} {p^k} \le 4 C$
for all $x$.
So:

$\ds \sum_{p \mathop \le x} \sum_{k \mathop \ge 2, \, p^k \mathop \le x} \frac {\ln p} {p^k} = \map \OO 1$
That is: 

$\ds \sum_{m \mathop \le x} \frac {\map \Lambda m} m - \sum_{p \mathop \le x} \frac {\ln p} p = \map \OO 1$
So that: 

$\ds \sum_{p \mathop \le x} \frac {\ln p} p - \sum_{m \mathop \le x} \frac {\map \Lambda m} m = \map \OO 1$
Therefore:

$\ds \sum_{p \mathop \le x} \frac {\ln p} p = \sum_{m \mathop \le x} \frac {\map \Lambda m} m + \map \OO 1$
From Order of Sum of $\dfrac {\map \Lambda n} n$, we have: 

$\ds \sum_{p \mathop \le x} \frac {\ln p} p = \ln x + \map \OO 1 + \map \OO 1$
so, from Sum of Big-O Estimates:

$\ds \sum_{p \mathop \le x} \frac {\ln p} p = \ln x + \map \OO 1$
$\blacksquare$





