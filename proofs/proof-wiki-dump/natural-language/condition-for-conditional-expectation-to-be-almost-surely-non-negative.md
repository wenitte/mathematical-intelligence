# 

Source: https://proofwiki.org/wiki/Condition_for_Conditional_Expectation_to_be_Almost_Surely_Non-Negative



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an integrable random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra of $\Sigma$.
Let $\expect {X \mid \GG}$ be a version of the conditional expectation of $X$ given $\GG$.

Then we have: 

$\expect {X \mid \GG} \ge 0$ almost everywhere
if and only if:

$\expect {X \cdot \chi_A} \ge 0$ for each $A \in \GG$
where $\chi_A$ is the characteristic function of $A$. 


Proof
Sufficient Condition
Suppose that:

$\expect {X \chi_A} \ge 0$ for each $A \in \GG$.
Then we have, by the definition of the conditional expectation of $X$ given $\GG$:

$\expect {\expect {X \mid \GG} \chi_A} \ge 0$ for each $A \in \GG$.
Set: 

$A = \set {\omega \in \Omega : \map {\paren {\expect {X \mid \GG} } } \omega < 0}$
Since $\expect {X \mid \GG}$ is $\GG$-measurable, we have $A \in \GG$ from Characterization of Measurable Functions.
From Expectation is Monotone, we have:

$\expect {\expect {X \mid \GG} \chi_A} \le 0$
So, we have:

$\expect {\expect {X \mid \GG} \chi_A} = 0$
Then, from Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we have:

$\expect {X \mid \GG} \chi_A = 0$ almost everywhere.
But, for all $\omega \in A$, we have:

$\expect {X \mid \GG} \chi_A < 0$
Hence we have $\map \Pr A = 0$. 
So $\expect {X \mid \GG} \ge 0$ almost everywhere.
$\Box$

Necessary Condition
Suppose that:

$\expect {X \mid \GG} \ge 0$ almost everywhere.
Then for each $A \in \GG$, we have:

$\expect {X \mid \GG} \cdot \chi_A \ge 0$ almost everywhere.
So, from Expectation is Monotone:

$\expect {\expect {X \mid \GG} \cdot \chi_A} \ge 0$ for each $A \in \GG$.
From the definition of the  conditional expectation of $X$ given $\GG$, we have:

$\expect {\expect {X \mid \GG} \cdot \chi_A} = \expect {X \cdot \chi_A}$
So:

$\expect {X \cdot \chi_A} \ge 0$ for each $A \in \GG$.
$\blacksquare$





