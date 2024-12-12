# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence/Examples/Difference_between_Adjacent_Terms_Bounded_by_alpha%5En

Example of Convergent Real Sequence
Let $\alpha \in \R$ be a real number such that $0 < \alpha < 1$.
Let $\sequence {x_n}_{n \mathop \in \N_{>0} }$ be a sequence in $\R$ with the property:

$\size {x_{n + 1} - x_n} \le \alpha^n$

Then $\sequence {x_n}$ is a Cauchy sequence and hence converges.


Proof
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







\(\ds \alpha^{n - 1} + \alpha^{n - 2} + \dotsb + \alpha^m\)





Definition of $\sequence {x_n}$














\(\ds \)

\(=\)







\(\ds \alpha^m \paren {\dfrac {1 - \alpha^{n - m} } {1 - \alpha} }\)





Sum of Geometric Sequence














\(\ds \)

\(<\)







\(\ds \dfrac {\alpha^m} {1 - \alpha}\)










Let $\epsilon \in \R_{>0}$ be given.
Let $N$ be sufficiently large that:

$\dfrac {\alpha^m} {1 - \alpha} < \epsilon$
This is always possible, as shown by Sequence of Powers of Number less than One.
Hence the result, by Cauchy's Convergence Criterion.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.21 \ (1)$




