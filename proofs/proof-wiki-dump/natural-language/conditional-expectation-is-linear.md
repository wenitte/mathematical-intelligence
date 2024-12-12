# 

Source: https://proofwiki.org/wiki/Conditional_Expectation_is_Linear

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra.
Let $X$ and $Y$ be integrable random variables.
Let $\alpha, \beta \in \R$. 
Let $\expect {X \mid \GG}$ be a version of the conditional expectation of $X$ given $\GG$.
Let $\expect {Y \mid \GG}$ be a version of the conditional expectation of $Y$ given $\GG$.
Let $\expect {\alpha X + \beta Y \mid \GG}$ be a version of the conditional expectation of $\alpha x + \beta Y$ given $\GG$.

Then:

$\expect {\alpha X + \beta Y \mid \GG} = \alpha \expect {X \mid \GG} + \beta \expect {Y \mid \GG}$ almost everywhere.


Proof
We show that $\alpha \expect {X \mid \GG} + \beta \expect {Y \mid \GG}$ is a version of the conditional expectation of $\alpha x + \beta Y$ given $\GG$.
From Linear Combination of Real-Valued Random Variables is Real-Valued Random Variable, we have that $\alpha \expect {X \mid \GG} + \beta \expect {Y \mid \GG}$ is a $\GG$-measurable random variable.
Let $A \in \GG$.
Then:














\(\ds \int_A \paren {\alpha \expect {X \mid \GG} + \beta \expect {Y \mid \GG} } \rd \Pr\)

\(=\)







\(\ds \alpha \int_A \expect {X \mid \GG} \rd \Pr + \beta \int_A \expect {Y \mid \GG} \rd \Pr\)





Integral of Integrable Function is Additive, Integral of Integrable Function is Homogeneous














\(\ds \)

\(=\)







\(\ds \alpha \int_A X \rd \Pr + \beta \int_A Y \rd \Pr\)





Definition of Conditional Expectation on Sigma-Algebra














\(\ds \)

\(=\)







\(\ds \int_A \paren {\alpha X + \beta Y} \rd \Pr\)





Integral of Integrable Function is Additive, Integral of Integrable Function is Homogeneous



So $\alpha \expect {X \mid \GG} + \beta \expect {Y \mid \GG}$ is a version of the conditional expectation of $\alpha x + \beta Y$ given $\GG$, and from Existence and Essential Uniqueness of Conditional Expectation Conditioned on Sigma-Algebra we have:

$\expect {\alpha X + \beta Y \mid \GG} = \alpha \expect {X \mid \GG} + \beta \expect {Y \mid \GG}$ almost everywhere.
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $9.7$: Properties of conditional expectation: a list




