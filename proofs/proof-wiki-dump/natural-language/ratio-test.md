# 

Source: https://proofwiki.org/wiki/Ratio_Test



Theorem
Let $\ds \sum_{n \mathop = 1}^\infty a_n$ be a series of real numbers in $\R$, or a series of complex numbers in $\C$.
Let the sequence $\sequence {a_n}$ satisfy:

$\ds \lim_{n \mathop \to \infty} \size {\frac {a_{n + 1} } {a_n} } = l$


If $l > 1 $, then $\ds \sum_{n \mathop = 1}^\infty a_n$ diverges.
If $l < 1 $, then $\ds \sum_{n \mathop = 1}^\infty a_n$ converges absolutely.


Proof
From the statement of the theorem, it is necessary that $\forall n: a_n \ne 0$; otherwise $\size {\dfrac {a_{n + 1} } {a_n} }$ is not defined.
Here, $\size {\dfrac {a_{n + 1} } {a_n} }$ denotes either the absolute value of $\dfrac {a_{n + 1} } {a_n}$, or the complex modulus of $\dfrac {a_{n + 1} } {a_n}$.


Absolute Convergence
Suppose $l < 1$.
Let us take $\epsilon > 0$ such that $l + \epsilon < 1$.
Then:

$\exists N: \forall n > N: \size {\dfrac {a_n} {a_{n - 1} } } < l + \epsilon$
Thus:














\(\ds \size {a_n}\)

\(=\)







\(\ds \size {\frac {a_n} {a_{n - 1} } } \size {\frac {a_{n - 1} } {a_{n - 2} } } \dotsm \size {\frac {a_{N + 2} } {a_{N + 1} } } \size {a_{N + 1} }\)




















\(\ds \)

\(<\)







\(\ds \paren {l + \epsilon}^{n - N - 1} \size {a_{N + 1} }\)









By Sum of Infinite Geometric Progression, $\ds \sum_{n \mathop = 1}^\infty \paren {l + \epsilon}^n$ converges.
So by the the corollary to the comparison test, it follows that $\ds \sum_{n \mathop = 1}^\infty \size {a_n}$ converges absolutely too.
$\blacksquare$


Divergence
Suppose $l > 1$.
Let $\epsilon > 0$ such that $l - \epsilon > 1$.
Then, for sufficiently large $N$, for all $k \ge N$ we have:














\(\ds \size {\size {\frac {a_{k + 1} } {a_k} } - l}\)

\(<\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \size {\frac {a_{k + 1} } {a_k} }\)

\(>\)







\(\ds l - \epsilon\)










Hence, for all $n \ge N$:














\(\ds \size {a_n}\)

\(=\)







\(\ds \size {\frac {a_n} {a_{n - 1} } } \size {\frac {a_{n - 1} } {a_{n - 2} } } \dotsm \size {\frac {a_{N + 1} } {a_{N} } } \size {a_{N} }\)




















\(\ds \)

\(>\)







\(\ds \paren {l - \epsilon}^{n - N} \size {a_{N} }\)










But:

$\paren {l - \epsilon}^{n - N} \size {a_{N} } \to \infty$
as $n \to \infty$.
So, by the Divergence Test, $\ds \sum_{n \mathop = 1}^\infty a_n$ diverges.
$\blacksquare$


Warning
If $l = 1$, the Ratio Test provides no information on whether $\ds \sum_{n \mathop = 1}^\infty a_n$ converges absolutely, converges conditionally, or diverges.
If $\size {\dfrac {a_{n + 1} } {a_n} } \to \infty$ as $n \to \infty$, then of course $\ds \sum_{n \mathop = 1}^\infty a_n$ diverges.


Also known as
The Ratio Test is also seen referred to as the Cauchy Ratio Test, after Augustin Louis Cauchy.
It can also be seen as D'Alembert's Test, after Jean le Rond d'Alembert.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 6.17$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.5$: Tests for convergence of series
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.2$: Summary of convergence tests: Theorem $1.6$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): ratio test
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): ratio test
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): ratio test




