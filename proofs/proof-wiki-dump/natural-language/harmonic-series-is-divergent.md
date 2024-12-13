# 

Source: https://proofwiki.org/wiki/Harmonic_Series_is_Divergent



Theorem
The harmonic series:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 n$
diverges.


Proof 1
$\ds \sum_{n \mathop = 1}^\infty \frac 1 n = \underbrace 1_{s_0} + \underbrace {\frac 1 2 + \frac 1 3}_{s_1} + \underbrace {\frac 1 4 + \frac 1 5 + \frac 1 6 + \frac 1 7}_{s_2} + \cdots$
where $\ds s_k = \sum_{i \mathop = 2^k}^{2^{k + 1} \mathop - 1} \frac 1 i$

From Ordering of Reciprocals:

$\forall m, n \in \N_{>0}: m < n: \dfrac 1 m > \dfrac 1 n$
so each of the summands in a given $s_k$ is greater than $\dfrac 1 {2^{k + 1} }$.
The number of summands in a given $s_k$ is $2^{k + 1} - 2^k = 2 \times 2^k - 2^k = 2^k$, and so:

$s_k > \dfrac{2^k} {2^{k + 1} } = \dfrac 1 2$

Hence the harmonic sum $H_{2^m}$ satisfies the following inequality:














\(\ds H_{2^m}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^{2^m} \frac 1 n\)




















\(\ds \)

\(>\)







\(\ds \sum_{n \mathop = 1}^{2^m - 1} \frac 1 n\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^m \left({s_k}\right)\)




















\(\ds \)

\(>\)







\(\ds 1 + \sum_{a \mathop = 0}^m \frac 1 2\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac m 2\)










The right hand side diverges, from the $n$th term test.
The result follows from the the Comparison Test for Divergence.
$\blacksquare$


Proof 2
Observe that all the terms of the harmonic series are strictly positive.
From Reciprocal Sequence is Strictly Decreasing, the terms are decreasing.
Hence the Cauchy Condensation Test can be applied, and we examine the convergence of:














\(\ds \sum_{n \mathop = 1}^\infty 2^n \frac 1 {2^n}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty 1\)









This diverges, from the $n$th term test.
Hence $\ds \sum \frac 1 n$ also diverges.
$\blacksquare$


Proof 3
We have that the Integral of Reciprocal is Divergent.
Hence from the Cauchy Integral Test, the harmonic series also diverges.
$\blacksquare$


Proof 4
For all $N \in \N$:

$\dfrac 1 N + \dfrac 1 {N + 1} + \cdots + \dfrac 1 {2 N} > N \cdot \dfrac 1 {2 N} = \dfrac 1 2$
Hence, by Cauchy's Convergence Criterion for Series, the Harmonic series is divergent.
$\blacksquare$


Also see
Definition:Harmonic Numbers
Definition:Riemann Zeta Function


Historical Note
The proof that the Harmonic Series is Divergent was discovered by Nicole Oresme.
However, it was lost for centuries, before being rediscovered by Pietro Mengoli in $1647$.
It was discovered yet again in $1687$ by Johann Bernoulli, and a short time after that by Jakob II Bernoulli, after whom it is usually (erroneously) attributed.
Some sources attribute its rediscovery to Jacob Bernoulli.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $23 \cdotp 103 \, 45 \ldots$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.2$: Summary of convergence tests
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.19$: The Series $\sum 1/ p_n$ of the Reciprocals of the Primes
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $23 \cdotp 10345 \ldots$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): convergent series
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): convergent series
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): harmonic series
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): harmonic series




