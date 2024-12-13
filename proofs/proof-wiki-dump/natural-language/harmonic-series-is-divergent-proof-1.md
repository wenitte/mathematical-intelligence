# 

Source: https://proofwiki.org/wiki/Harmonic_Series_is_Divergent/Proof_1

  This article was Featured Proof between 2nd August 2012 and 3rd October 2012.


Theorem
The harmonic series:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 n$
diverges.


Proof
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


Historical Note
The proof that the Harmonic Series is Divergent was discovered by Nicole Oresme.
However, it was lost for centuries, before being rediscovered by Pietro Mengoli in $1647$.
It was discovered yet again in $1687$ by Johann Bernoulli, and a short time after that by Jakob II Bernoulli, after whom it is usually (erroneously) attributed.
Some sources attribute its rediscovery to Jacob Bernoulli.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 6.5$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: $(2)$
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 9.3$
Weisstein, Eric W. "Harmonic Series." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/HarmonicSeries.html




