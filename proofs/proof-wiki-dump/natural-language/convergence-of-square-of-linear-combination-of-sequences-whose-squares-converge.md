# 

Source: https://proofwiki.org/wiki/Convergence_of_Square_of_Linear_Combination_of_Sequences_whose_Squares_Converge

Theorem
Let $\sequence {x_i}$ and $\sequence {y_i}$ be real sequences such that the series $\ds \sum_{i \mathop \ge 0} {x_i}^2$ and $\ds \sum_{i \mathop \ge 0} {y_i}^2$ are convergent.
Let $\lambda, \mu \in \R$ be real numbers.

Then $\ds \sum_{i \mathop \ge 0} \paren {\lambda x_i + \mu y_i}^2$ is convergent.


Proof
Let $n \in \N$.
Then:

$\ds \sum_{i \mathop = 1}^n \paren {\lambda x_i + \mu y_i}^2 = \lambda^2 \sum_{i \mathop = 1}^n {x_i}^2 + \mu^2 \sum_{i \mathop = 1}^n {y_i}^2 + 2 \lambda \mu \sum_{i \mathop = 1}^n x_i y_i$
By Cauchy's Inequality:

$\ds \sum_{i \mathop = 1}^n x_i y_i \le \paren {\sum_{i \mathop = 1}^n {x_i}^2}^{\frac 1 2} \paren {\sum_{i \mathop = 1}^n {y_i}^2}^{\frac 1 2}$
Hence:














\(\ds \sum_{i \mathop = 1}^n \paren {\lambda x_i + \mu y_i}^2\)

\(\le\)







\(\ds \lambda^2 \sum_{i \mathop = 1}^n {x_i}^2 + \mu^2 \sum_{i \mathop = 1}^n {y_i}^2 + 2 \size {\lambda \mu} \sum_{i \mathop = 1}^n x_i y_i\)




















\(\ds \)

\(\le\)







\(\ds \lambda^2 \sum_{i \mathop = 1}^n {x_i}^2 + \mu^2 \sum_{i \mathop = 1}^n {y_i}^2 + 2 \size {\lambda \mu} \paren {\sum_{i \mathop = 1}^n {x_i}^2}^{\frac 1 2} \paren {\sum_{i \mathop = 1}^n {y_i}^2}^{\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\size \lambda \paren {\sum_{i \mathop = 1}^n {x_i}^2}^{\frac 1 2} + \size \mu \paren {\sum_{i \mathop = 1}^n {y_i}^2}^{\frac 1 2} }^2\)




















\(\ds \)

\(\le\)







\(\ds \paren {\size \lambda \paren {\sum_{i \mathop \ge 0} {x_i}^2}^{\frac 1 2} + \size \mu \paren {\sum_{i \mathop \ge 0} {y_i}^2}^{\frac 1 2} }^2\)









Thus the sequence of partial sums $\ds \sum_{i \mathop = 1}^n \paren {\lambda x_i + \mu y_i}^2$ is bounded above.
We also have that $\ds \sum_{i \mathop = 1}^n \paren {\lambda x_i + \mu y_i}^2$ is also increasing.
So by the Monotone Convergence Theorem, $\ds \sum_{i \mathop = 1}^n \paren {\lambda x_i + \mu y_i}^2$ is convergent.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Example $2.2.16$




