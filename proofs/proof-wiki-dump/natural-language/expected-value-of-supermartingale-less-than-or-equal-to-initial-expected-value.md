# 

Source: https://proofwiki.org/wiki/Expected_Value_of_Supermartingale_Less_Than_or_Equal_To_Initial_Expected_Value

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \ge 0}$ be a supermartingale.

Then: 

$\expect {X_n} \le \expect {X_0}$
for each $n \in \Z_{\ge 0}$. 


Proof
From Definition 2 of a discrete time supermartingale, we have:

$\expect {X_n \mid \FF_0} \le X_0$ almost surely.
So from Expectation is Monotone:

$\expect {\expect {X_n \mid \FF_0} } \le \expect {X_0}$
From Expectation of Conditional Expectation, we have:

$\expect {\expect {X_n \mid \FF_0} } \le \expect {X_n}$
So:

$\expect {X_n} \le \expect {X_0}$
$\blacksquare$





