# 

Source: https://proofwiki.org/wiki/Conditional_Expectation_is_Monotone

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be integrable random variables on $\struct {\Omega, \Sigma, \Pr}$ such that:

$X \le Y$ almost everywhere.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra of $\Sigma$.
Let $\expect {X \mid \GG}$ be a version of the conditional expectation of $X$ given $\GG$.
Let $\expect {Y \mid \GG}$ be a version of the conditional expectation of $Y$ given $\GG$.

Then we have:

$\expect {X \mid \GG} \le \expect {Y \mid \GG}$ almost everywhere.


Proof
We have:

$Y - X \ge 0$ almost everywhere.
So, for each $A \in \GG$ we have:

$\paren {Y - X} \cdot 1_A \ge 0$ almost everywhere.
So, from Expectation is Monotone:

$\expect {\paren {Y - X} \cdot 1_A} \ge 0$
for each $A \in \GG$.
So, from Condition for Conditional Expectation to be Almost Surely Non-Negative, we have:

$\expect {Y - X \mid \GG} \ge 0$ almost everywhere.
Then, from Conditional Expectation is Linear:

$\expect {Y \mid \GG} - \expect {X \mid \GG} \ge 0$ almost everywhere.
So that:

$\expect {X \mid \GG} \le \expect {Y \mid \GG}$ almost everywhere.
$\blacksquare$





