# 

Source: https://proofwiki.org/wiki/Existence_of_Euler-Mascheroni_Constant

  This article was Featured Proof between 31 July 2009 and 8 August 2009.


Theorem
The real sequence:

$\ds \sequence {\sum_{k \mathop = 1}^n \frac 1 k - \ln n}$
converges to a limit.

This limit is known as the Euler-Mascheroni constant.


Proof 1
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


Proof 2
For $n \in \N_{>0}$ let:

$\ds \gamma_n := \sum_{k \mathop = 1}^n \frac 1 k - \ln n$
Then:














\(\ds \gamma_n\)

\(=\)







\(\ds 1 + \int_1^n \dfrac {\floor u} {u^2} \rd u - \ln n\)





Integral Expression of Harmonic Number














\(\ds \)

\(=\)







\(\ds 1 + \int_1^n \dfrac {\floor u} {u^2} \rd u - \int _1 ^n \dfrac 1 u \rd u\)





Definition of Real Natural Logarithm




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds 1 - \int_1^n \dfrac {u - \floor u} {u^2} \rd u\)





Linear Combination of Definite Integrals














\(\ds \)

\(\ge\)







\(\ds 1 - \int_1^n \dfrac 1 {u^2} \rd u\)





Relative Sizes of Definite Integrals as $0 \le u - \floor u < 1$














\(\ds \)

\(=\)







\(\ds \dfrac 1 n\)




















\(\ds \)

\(\ge\)







\(\ds 0\)









On the other hand:














\(\ds \gamma_n - \gamma_{n + 1}\)

\(=\)







\(\ds \paren {1 - \int_1^n \dfrac {u - \floor u} {u^2} \rd u} - \paren {1 - \int_1^{n + 1} \dfrac {u - \floor u} {u^2} \rd u}\)





by $\paren 1$














\(\ds \)

\(=\)







\(\ds \int_n^{n + 1} \dfrac {u - \floor u} {u^2} \rd u\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(\ge\)







\(\ds 0\)





as $u - \floor u \ge 0$



Thus by monotone convergence theorem, the sequence $\sequence {\gamma_n}$ converges to a limit in $\R_{\ge 0}$.
$\blacksquare$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): harmonic series
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): harmonic number
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): harmonic series




