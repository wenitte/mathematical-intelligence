# 

Source: https://proofwiki.org/wiki/Conditional_Expectation_of_Non-Negative_Random_Variable_is_Non-Negative

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra.
Let $X$ be an integrable random variable such that:

$X \ge 0$ almost everywhere.
Let $\expect {X \mid \GG}$ be a version of the conditional expectation of $X$ given $\GG$.

Then:

$\expect {X \mid \GG} \ge 0$ almost everywhere.


Proof
From Conditional Expectation is Monotone, we have:

$\expect {X \mid \GG} \ge \expect {0 \mid \GG}$ almost everywhere.
From Conditional Expectation of Constant, we have:

$\expect {0 \mid \GG} = 0$ almost everywhere.
So:

$\expect {X \mid \GG} \ge 0$ almost everywhere.
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $9.7$: Properties of conditional expectation: a list




