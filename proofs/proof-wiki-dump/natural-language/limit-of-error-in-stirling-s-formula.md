# 

Source: https://proofwiki.org/wiki/Limit_of_Error_in_Stirling%27s_Formula

Theorem
Consider Stirling's Formula:

$n! \sim \sqrt {2 \pi n} \paren {\dfrac n e}^n$
The ratio of $n!$ to its approximation $\sqrt {2 \pi n} \paren {\dfrac n e}^n$ is bounded as follows:

$e^{1 / \paren {12 n + 1} } \le \dfrac {n!} {\sqrt {2 \pi n} n^n e^{-n} } \le e^{1 / 12 n}$


Proof
Let $d_n = \ln n! - \paren {n + \dfrac 1 2} \ln n + n$.
From the argument in Stirling's Formula: Proof 2: Lemma 3 we have that $\sequence {d_n - \dfrac 1 {12 n} }$ is an increasing sequence.

Then:














\(\ds d_n - d_{n + 1}\)

\(=\)







\(\ds \ln n! - \paren {n + \frac 1 2} \ln n + n\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\ln \paren {n + 1}! - \paren {n + 1 + \frac 1 2} \map \ln {n + 1} + n + 1}\)




















\(\ds \)

\(=\)







\(\ds - \map \ln {n + 1} - \paren {n + \frac 1 2} \ln n + \paren {n + \frac 3 2} \map \ln {n + 1} - 1\)





(as $\ln \paren {n + 1}! = \map \ln {n + 1} + \ln n!$)














\(\ds \)

\(=\)







\(\ds \paren {n + \frac 1 2} \ln \frac {n + 1} n - 1\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {2 n + 1} 2 \ln \frac {1 + \paren {2 n + 1}^{-1} } {1 - \paren {2 n + 1}^{-1} } - 1\)










Let:

$\map f x := \dfrac 1 {2 x} \ln \dfrac {1 + x} {1 - x} - 1$
for $\size x < 1$.

By Stirling's Formula: Proof 2: Lemma 1:














\(\ds \map f x\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac {x^{2 n} } {2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {x^2} 3 + \frac {x^4} 5 + \frac {x^6} 7 + \cdots\)




















\(\ds \)

\(>\)







\(\ds \frac {x^2} 3\)











$\ds \map f x = \sum_{k \mathop = 1}^\infty \frac {x^{2 n} } {2 n + 1}$
As $-1 < \dfrac 1 {2 n + 1} < 1$ it can be substituted for $x$ from $(1)$:














\(\ds d_n - d_{n + 1}\)

\(>\)







\(\ds \frac 1 3 \frac 1 {\paren {2 n + 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {12 n^2 + 12 n + 3}\)










Next:














\(\ds \frac 1 {12 n + 1} - \frac 1 {12 \paren {n + 1} + 1}\)

\(=\)







\(\ds \frac {12 n + 13 - 12 n - 1} {\paren {12 n + 1} \paren {12 n + 13} }\)




















\(\ds \)

\(=\)







\(\ds \frac {12} {\paren {12 n + 1} \paren {12 n + 13} }\)










It follows that:














\(\ds \)

\(\)







\(\ds \paren {d_n - \frac 1 {12 n + 1} } - \paren {\frac 1 {12 \paren {n + 1} + 1} }\)




















\(\ds \)

\(>\)







\(\ds \frac {\paren {12 n + 1} \paren {12 n + 13} - 12 \paren {12 n^2 + 12 n + 3} } {3 \paren {12 n + 1} \paren {12 n + 13} \paren {2 n + 1}^2}\)









The numerator equals:

$12 n \paren {14 - 12} + \paren {13 - 36} = 24 n - 23 > 0$
for $n = 1, 2, 3, \ldots$
Therefore the sequence $\sequence {d_n - \dfrac 1 {12 n + 1} }$ is decreasing.
From Stirling's Formula, we have that:

$\ds \lim_{n \mathop \to \infty} d_n = d$
where $d = \ln \sqrt{2 \pi}$
and so:

$d_n - \dfrac 1 {12 n} < d < d_n - \dfrac 1 {12 n + 1}$
for $n = 1, 2, 3, \ldots$
Taking exponentials, and again from Stirling's Formula:

$e^{-1 / 12 n} < \dfrac {\paren {\sqrt{2 n} } n^{n + 1/2} e^{-n} } {n!} < e^{-1/\paren {12 n + 1} }$
from whence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.4 \ (3)$




