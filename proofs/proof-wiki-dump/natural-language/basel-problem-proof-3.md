# 

Source: https://proofwiki.org/wiki/Basel_Problem/Proof_3

Theorem
$\ds \map \zeta 2 = \sum_{n \mathop = 1}^\infty {\frac 1 {n^2} } = \frac {\pi^2} 6$
where $\zeta$ denotes the Riemann zeta function.


Proof
Let $x \in \openint 0 {\dfrac \pi 2}$ and let $n$ be a non-negative integer.














\(\ds \frac {\map \cos {2 n + 1} x + i \map \sin {2 n + 1} x} {\sin^{2 n + 1} x}\)

\(=\)







\(\ds \frac {\paren {\cos x + i \sin x}^{2 n + 1} } {\sin^{2 n + 1} x}\)





De Moivre's Formula














\(\ds \)

\(=\)







\(\ds \paren {\cot x + i}^{2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^{2 n + 1} \binom {2 n + 1} r i^r \cot^{2 n + 1 - r} x\)





Binomial Theorem








\(\ds \leadsto \ \ \)





\(\ds \frac {\map \sin {2 n + 1} x} {\sin^{2 n + 1} x}\)

\(=\)







\(\ds \sum_{r \mathop = 0}^n \binom {2 n + 1} {2 r + 1} \paren {-1}^r \cot^{2 \paren {n - r} } x\)





equating imaginary parts



Let $x_k = \dfrac {k \pi} {2 n + 1}$ for $k = 1, 2, \ldots, n$. 
Then:

$\sin \paren {2 n + 1} x_k = 0$
So we have:

$\ds \sum_{r \mathop = 0}^n \binom {2 n + 1} {2 r + 1} \paren {-1}^r \cot^{2 \paren {n - r} } x_k = 0$
for $k = 1, 2, \ldots, n$.
The numbers $x_k$ are all distinct and in the interval $\openint 0 {\dfrac \pi 2}$. 
By Shape of Cotangent Function, $\cot x$ is positive and injective in the interval $\openint 0 {\dfrac \pi 2}$.
Therefore $\cot^2 x$ is also injective in this interval. 
Hence the numbers $c_k = \cot^2 x_k$ are distinct for $k = 1, 2, \ldots, n$. 
These numbers are the $n$ distinct roots of the $n$th degree polynomial:

$\ds \map f c := \sum_{r \mathop = 0}^n \binom {2 n + 1} {2 r + 1} (-1)^r c^{n - r}$
By Viète's Formulas, we can calculate the sum of the roots:

$\ds \sum_{k \mathop = 1}^n \cot^2 x_k = \frac {\binom {2 n + 1} 3} {\binom {2 n + 1} 1} = \frac {2 n \paren {2 n - 1} } 6$
From the Difference of Squares of Cosecant and Cotangent $\cot^2 x = \csc^2 x - 1$ we can similarly deduce:

$\ds \sum_{k \mathop = 1}^n \csc^2 x_k = \frac {2 n \paren {2 n - 1} } 6 + n = \frac {2 n \paren {2 n + 2} } 6$
By Shape of Sine Function, $\sin x$ is positive in the interval $\openint 0 {\dfrac \pi 2}$. 
So from the Tangent Inequality $\sin x < x < \tan x$ for $x \in \openint 0 {\dfrac \pi 2}$, we can deduce that $\cot^2 x < 1 / x^2 < \csc^2 x$ in the same interval.
Summing this inequality from $x_1$ to $x_n$ gives:














\(\ds \frac {2 n \paren {2 n - 1} } 6\)

\(<\)







\(\ds \sum_{k \mathop = 1}^n \paren {\frac {2 n + 1} {k \pi} }^2\)




















\(\ds \)

\(<\)







\(\ds \frac {2 n \paren {2 n + 2} } 6\)










or equivalently:














\(\ds \frac {\pi^2} 6 \frac {2 n \paren {2 n - 1} } {\paren {2 n + 1}^2}\)

\(<\)







\(\ds \sum_{k \mathop = 1}^n \frac 1 {k^2}\)




















\(\ds \)

\(<\)







\(\ds \frac {\pi^2} 6 \frac {2 n \paren {2 n + 2} } {\paren {2 n + 1}^2}\)










By Combination Theorem for Limits of Real Functions, the left hand side and right hand side both tend to $\dfrac {\pi^2} 6$ as $n$ tends to infinity. 
Therefore by the Squeeze Theorem:

$\map \zeta 2 = \ds \sum_{k \mathop = 1}^\infty \frac 1 {k^2} = \frac {\pi^2} 6$
$\blacksquare$


Historical Note
The Basel Problem was first posed by Pietro Mengoli in $1644$.
Its solution is generally attributed to Leonhard Euler , who solved it in $1734$ and delivered a proof in $1735$.
However, it has also been suggested that it was in fact first solved by Nicolaus I Bernoulli.
Jacob Bernoulli had earlier established that the series was convergent, but had failed to work out what to.
The problem is named after Basel, the home town of Euler as well as of the Bernoulli family.


If only my brother were alive now.
-- Johann Bernoulli




