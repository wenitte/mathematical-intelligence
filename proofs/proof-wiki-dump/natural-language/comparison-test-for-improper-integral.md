# 

Source: https://proofwiki.org/wiki/Comparison_Test_for_Improper_Integral

Theorem
Let $I = \openint a b$ be an open real interval.
Let $\phi$ be a real function which is continuous on $I$ and also non-negative on $I$.
Let $f$ be a real function which is continuous on $I$.
Let $f$ satisfy:

$\forall x \in I: \size {\map f x} \le \map \phi x$

If the improper integral of $\phi$ over $I$ exists, then so does that of $f$.


Proof
Without loss of generality, we consider the case $I = \openint 0 \to$ such that $\ds l = \int_0^{\mathop \to +\infty} \map \phi x \rd x$ exists.
Let:

$\ds a_n = \int_{n - 1}^n \map f x \rd x$
$\ds b_n = \int_{n - 1}^n \map \phi x \rd x$
for $n = 1, 2, \ldots$
Then the series:

$\ds \sum_{n \mathop = 1}^\infty b_n$
is a convergent series of positive terms whose sum is $l$.
Also:
$\size {a_n} \le b_n$
for $n = 1, 2, \ldots$
Hence $\ds \sum_{n \mathop = 1}^\infty a_n$ a convergent series by the Comparison Test.
That is:

$\ds m = \lim_{N \mathop \to \infty} \int_0^N \map f x \rd x$
exists.
Given any $X > 0$, $N$ can be taken to be the smallest natural number which satisfies $N > X$.
Then:














\(\ds \size {\int_1^X \map f x \rd x - \int_1^{N - 1} \map f x \rd x}\)

\(\le\)







\(\ds \int_{N - 1}^X \size {\map f x} \rd x\)




















\(\ds \)

\(\le\)







\(\ds b_N\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $N \to \infty$



It follows that:

$\ds \lim_{X \mathop \to \infty} \int_1^X \map f x \rd x = m$
as required.

The other cases are treated similarly.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.29$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.8$: Integration




