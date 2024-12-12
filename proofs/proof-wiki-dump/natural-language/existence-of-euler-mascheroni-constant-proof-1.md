# 

Source: https://proofwiki.org/wiki/Existence_of_Euler-Mascheroni_Constant/Proof_1

Theorem
The real sequence:

$\ds \sequence {\sum_{k \mathop = 1}^n \frac 1 k - \ln n}$
converges to a limit.

This limit is known as the Euler-Mascheroni constant.


Proof
Let $f: \R \setminus \set 0 \to \R: \map f x = \dfrac 1 x$.
Clearly $f$ is continuous and positive on $\hointr 1 {+\infty}$.
From Reciprocal Sequence is Strictly Decreasing, $f$ is decreasing on $\hointr 1 {+\infty}$.
Therefore the conditions of the Cauchy Integral Test hold.
Thus the sequence $\sequence {\Delta_n}$ defined as:

$\ds \Delta_n = \sum_{k \mathop = 1}^n \map f k - \int_1^n \map f x \rd x$
is decreasing and bounded below by zero.
But from the definition of the natural logarithm:

$\ds \int_1^n \frac {\d x} x = \ln n$
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 14.3 \ (5)$




