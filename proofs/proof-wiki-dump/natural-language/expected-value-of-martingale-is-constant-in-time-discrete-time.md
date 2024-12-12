# 

Source: https://proofwiki.org/wiki/Expected_Value_of_Martingale_is_Constant_in_Time/Discrete_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \mathop \ge 0}, \Pr}$ be a discrete-time filtered probability space.
Let $\sequence {X_n}_{n \mathop \ge 0}$ be a martingale.

Then: 

$\expect {X_n} = \expect {X_0}$
for each $n \in \Z_{\ge 0}$. 


Proof
From Definition 2 of a discrete time martingale, we have:

$\expect {X_n \mid \FF_0} = X_0$ almost surely.
So:

$\expect {\expect {X_n \mid \FF_0} } = \expect {X_0}$

This article, or a section of it, needs explaining.In particular: Why does "almost surely equal" imply directly that expectations are equal? It is intuitively plausible to a person coming new to this page, but it needs to be made rigorous.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From Expectation of Conditional Expectation, we have:

$\expect {\expect {X_n \mid \FF_0} } = \expect {X_n}$
So:

$\expect {X_n} = \expect {X_0}$
for each $n \in \Z_{\ge 0}$.
$\blacksquare$





