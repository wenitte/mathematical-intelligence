# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Binomial_Coefficients

Theorem
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N: a_n = \begin{cases}
\dbinom m n & : n = 0, 1, 2, \ldots, m \\
0 & : \text{otherwise}\end{cases}$
where $\dbinom m n$ denotes a binomial coefficient.

Then the generating function for $\sequence {a_n}$ is given as:

$\ds \map G z = \sum_{n \mathop = 0}^m \dbinom m n z^n = \paren {1 + z}^m$


Proof













\(\ds \paren {1 + z}^m\)

\(=\)







\(\ds \sum_{n \mathop = 0}^m \binom m n z^n\)





Binomial Theorem




The result follows from the definition of a generating function.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.1$: Generating functions: Example $3$




