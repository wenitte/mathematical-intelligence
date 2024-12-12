# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence/Examples/Arithmetic_Mean_of_Previous_2_Terms

Example of Convergent Real Sequence
Let $\sequence {x_n}_{n \mathop \in \N_{>0} }$ be the sequence in $\R$ defined as:

$x_n = \begin {cases} a & : n = 1 \\ b & : n = 2 \\ \dfrac {x_{n - 1} + x_{n - 2} } 2 & : n > 2 \end {cases}$
That is, beyond the first $2$ terms, each term is the arithmetic mean of the previous $2$ terms.
Then $\sequence {x_n}$ converges.


Proof













\(\ds x_{n + 2} - x_{n + 1}\)

\(=\)







\(\ds \dfrac {x_{n + 1} + x_n} 2 - x_{n + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x_n - x_{n + 1} } 2\)














\(\ds \leadsto \ \ \)





\(\ds \size {x_{n + 2} - x_{n + 1} }\)

\(=\)







\(\ds \dfrac {\size {x_n - x_{n + 1} } } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\size {x_n - x_{n - 1} } } {2^2}\)




















\(\ds \)

\(=\)







\(\ds \ldots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\size {x_2 - x_1} } {2^n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\size {b - a} } {2^n}\)










Let $n > m$.
Then:














\(\ds \size {x_n - x_m}\)

\(=\)







\(\ds \size {\paren {x_n - x_{n - 1} } + \paren {x_{n - 1} - x_{n - 2} } + \dotsb + \paren {x_{m + 1} - x_m} }\)




















\(\ds \)

\(\le\)







\(\ds \size {x_n - x_{n - 1} } + \size {x_{n - 1} - x_{n - 2} } + \dotsb + \size {x_{m + 1} - x_m}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds \paren {\dfrac 1 {2^{n - 2} } + \dfrac 1 {2^{n - 3} } + \dotsb + \dfrac 1 {2^{m - 1} } } \size {b - a}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2^{m - 1} } \paren {1 + \dfrac 1 2 + \dfrac 1 {2^2} + \dotsb + \dfrac 1 {2^{n - m - 1} } } \size {b - a}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2^{m - 1} } \paren {\dfrac {1 - \paren {\frac 1 2}^{n - m} } {1 - \frac 1 2} } \size {b - a}\)





Sum of Geometric Sequence














\(\ds \)

\(\le\)







\(\ds \dfrac 1 {2^{m - 2} } \size {b - a}\)










Let $\epsilon \in \R_{>0}$ be given.
Let $N$ be sufficiently large that:

$\dfrac 1 {2^{N - 2} } \size {b - a} < \epsilon$

Then:

$\forall n > N, m > N: \size {x_n - x_m} \le \dfrac 1 {2^{N - 2} } \size {b - a} < \epsilon$
Hence it is seen that $\sequence {x_n}$ is a Cauchy sequence.
Hence the result, by Cauchy's Convergence Criterion.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Cauchy sequences: Example $\S 5.20$




