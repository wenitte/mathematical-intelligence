# 

Source: https://proofwiki.org/wiki/Conditional_Expectation_of_Measurable_Random_Variable

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra.
Let $X$ be a integrable random variable that is $\GG$-measurable.
Let $\expect {X \mid \GG}$ be a version of the conditional expectation of $X$ given $\GG$.

Then:

$\expect {X \mid \GG} = X$ almost everywhere.


Proof
We show that $X$ is a version of $\expect {X \mid \GG}$.
Then since conditional expectation is essentially unique by Existence and Essential Uniqueness of Conditional Expectation Conditioned on Sigma-Algebra, we will obtain:

$\expect {X \mid \GG} = X$ almost everywhere.
Note that $X$ is integrable and $\GG$-measurable by hypothesis, with: 

$\ds \int_A X \rd \Pr = \int_A X \rd \Pr$
So $X$ satisfies the conditions of conditional expectation, and so:

$\expect {X \mid \GG} = X$ almost everywhere.
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $9.7$: Properties of conditional expectation: a list




