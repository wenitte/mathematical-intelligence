# 

Source: https://proofwiki.org/wiki/Conditional_Expectation_of_Constant

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra.
Let $c \in \R$.
Define $X : \Omega \to \R$ by $\map X \omega = c$ for each $\omega \in \Omega$.
Let $\expect {X \mid \GG}$ be a version of the conditional expectation of $X$ given $\GG$.

Then:

$\expect {X \mid \GG} = c$ almost everywhere.


Proof
From Constant Function is Measurable, $X$ is a real-valued random variable.
The result then follows immediately from Conditional Expectation of Measurable Random Variable.
$\blacksquare$





