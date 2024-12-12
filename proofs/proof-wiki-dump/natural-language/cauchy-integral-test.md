# 

Source: https://proofwiki.org/wiki/Cauchy_Integral_Test



Theorem
Let $f$ be a real function which is continuous, positive and decreasing on the interval $\hointr 1 {+\infty}$.
Let the sequence $\sequence {\Delta_n}$ be defined as:

$\ds \Delta_n = \sum_{k \mathop = 1}^n \map f k - \int_1^n \map f x \rd x$

Then $\sequence {\Delta_n} $ is decreasing and bounded below by zero.
Hence it converges.


Proof
From Darboux's Theorem, we have that:

$\ds m \paren {b - a} \le \int_a^b \map f x \rd x \le M \paren {b - a}$
where:

$M$ is the maximum
and:

$m$ is the minimum
of $\map f x$ on $\closedint a b$.
Since $f$ decreases, $M = \map f a$ and $m = \map f b$.
Thus it follows that:

$\ds \forall k \in \N_{>0}: \map f {k + 1} \le \int_k^{k + 1} \map f x \rd x \le \map f k$
as $\paren {k + 1} - k = 1$.

Thus:














\(\ds \Delta_{n + 1} - \Delta_n\)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^{n + 1} \map f k - \int_1^{n + 1} \map f x \rd x} - \paren {\sum_{k \mathop = 1}^n \map f k - \int_1^n \map f x \rd x}\)




















\(\ds \)

\(=\)







\(\ds \map f {n + 1} - \int_n^{n + 1} \map f x \rd x\)




















\(\ds \)

\(\le\)







\(\ds \map f {n + 1} - \map f {n + 1}\)




















\(\ds \)

\(=\)







\(\ds 0\)










Thus $\sequence {\Delta_n}$ is decreasing.
$\Box$

Also:














\(\ds \Delta_n\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f k - \sum_{k \mathop = 1}^{n - 1} \int_k^{k + 1} \map f x \rd x\)




















\(\ds \)

\(\ge\)







\(\ds \sum_{k \mathop = 1}^n \map f k - \sum_{k \mathop = 1}^{n - 1} \map f k\)




















\(\ds \)

\(=\)







\(\ds \map f n\)




















\(\ds \)

\(\ge\)







\(\ds 0\)









$\Box$

Hence the result.
$\blacksquare$


Also known as
The Cauchy Integral Test is also known as the Euler-Maclaurin Summation Formula, but that result properly refer to a more precise theorem of which this is a simple corollary.
Some sources just use the name Integral Test.


Motivation
It follows from the Cauchy Integral Test that if $f$ is continuous, positive and decreasing on $\hointr 1 \infty$, then the series $\ds \sum_{k \mathop = 1}^\infty \map f k$ and the improper integral $\ds \int_1^{\mathop \to +\infty} \map f x \rd x$ either both converge or both diverge.
So this theorem provides a test for the convergence of both a series and an improper integral.


Source of Name
This entry was named for Augustin Louis Cauchy.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.32$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.2$: Summary of convergence tests: Theorem $1.2$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Cauchy integral test
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cauchy integral test




