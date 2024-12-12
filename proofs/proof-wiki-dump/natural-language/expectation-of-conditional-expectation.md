# 

Source: https://proofwiki.org/wiki/Expectation_of_Conditional_Expectation

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra.
Let $X$ be a integrable random variable.
Let $\expect {X \mid \GG}$ be a version of the conditional expectation of $X$ given $\GG$.

Then: 

$\expect {\expect {X \mid \GG} } = \expect X$


Proof
We have: 














\(\ds \expect {\expect {X \mid \GG} }\)

\(=\)







\(\ds \int_\Omega \expect {X \mid \GG} \rd \Pr\)





Definition of Expectation














\(\ds \)

\(=\)







\(\ds \int_\Omega X \rd \Pr\)





Definition of Conditional Expectation on Sigma-Algebra














\(\ds \)

\(=\)







\(\ds \expect X\)





Definition of Expectation



$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $9.7$: Properties of conditional expectation: a list




