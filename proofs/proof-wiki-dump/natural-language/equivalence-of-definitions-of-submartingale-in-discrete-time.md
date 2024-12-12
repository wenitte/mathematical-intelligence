# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Submartingale_in_Discrete_Time



Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \ge 0}$ be an adapted stochastic process.

The following definitions of the concept of Submartingale/Discrete Time are equivalent:

Definition 1
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \mathop \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \mathop \ge 0}$ be an adapted stochastic process.

We say that $\sequence {X_n}_{n \mathop \ge 0}$ is a $\sequence {\FF_n}_{n \mathop \ge 0}$-submartingale if and only if: 

$(1): \quad$ $X_n$ is integrable for each $n \in \Z_{\ge 0}$
$(2): \quad \forall n \in \Z_{\ge 0}: \expect {X_{n + 1} \mid \FF_n} \ge X_n$

Equation $(2)$ is understood as follows: 

for any version $\expect {X_{n + 1} \mid \FF_n}$ of the conditional expectation of $X_{n + 1}$ given $\FF_n$, we have:
$\expect {X_{n + 1} \mid \FF_n} \ge X_n$ almost surely.


Definition 2
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \mathop \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \mathop \ge 0}$ be an adapted stochastic process.

We say that $\sequence {X_n}_{n \mathop \ge 0}$ is a $\sequence {\FF_n}_{n \mathop \ge 0}$-submartingale if and only if: 

$(1): \quad$ $X_n$ is integrable for each $n \in \Z_{\ge 0}$
$(2): \quad \forall n \in \Z_{\ge 0}, \, \forall m \ge n: \expect {X_m \mid \FF_n} \ge X_n$.

Equation $(2)$ is understood as follows: 

for any version $\expect {X_m \mid \FF_n}$ of the conditional expectation of $X_m$ given $\FF_n$, we have:
$\expect {X_m \mid \FF_n} \ge X_n$ almost surely.


Proof
Definition 1 implies Definition 2
Suppose that:

$(1): \quad$ $X_n$ is integrable for each $n \in \Z_{\ge 0}$
$(2): \quad \forall n \in \Z_{\ge 0}: \expect {X_{n + 1} \mid \FF_n} \ge X_n$.
We prove that:

$\forall n \in \Z_{\ge 0}, \, \forall m \ge n: \expect {X_m \mid \FF_n} \ge X_n$.
Fix $n \in \Z_{\ge 0}$.
We induct on $m$. 
For all $m \in \Z_{\ge 0}$ with $m \ge n$, let $\map P m$ be the proposition:

$\expect {X_m \mid \FF_n} \ge X_n$ almost surely.


Basis for Induction
The case $m = n$ is immediate from Conditional Expectation of Measurable Random Variable.
So $\map P n$ is seen to hold.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P m$ is true, where $m \ge n$, then it logically follows that $\map P {m + 1}$ is true.

So this is our induction hypothesis:

$\expect {X_m \mid \FF_n} \ge X_n$ almost surely.
Then we need to show:

$\expect {X_{m + 1} \mid \FF_n} \ge X_n$ almost surely.


Induction Step
This is our induction step.
From $(2)$, we have: 

$X_m \le \expect {X_{m + 1} \mid \FF_m}$ almost surely.
So we have by Conditional Expectation is Monotone:

$\expect {X_m \mid \FF_n} \le \expect {\expect {X_{m + 1} \mid \FF_m} \mid \FF_n}$ almost surely.
Since $n \le m$, we have $\FF_n \subseteq \FF_m$ since $\sequence {\FF_n}_{n \ge 0}$ is a filtration.
Then, by the Tower Property of Conditional Expectation, we have:

$\expect {\expect {X_{m + 1} \mid \FF_m} \mid \FF_n} = \expect {X_{m + 1} \mid \FF_n}$ almost surely.
So:

$\expect {X_{m + 1} \mid \FF_n} \ge \expect {X_m \mid \FF_n} \ge X_n$ almost surely.
So $\map P m \implies \map P {m + 1}$ and the result follows by the Principle of Mathematical Induction.
$\Box$

Definition 2 implies Definition 1
Suppose that: 

$(1): \quad$ $X_n$ is integrable for each $n \in \Z_{\ge 0}$
$(2): \quad \forall n \in \Z_{\ge 0}, \, \forall m \ge n: \expect {X_m \mid \FF_n} \ge X_n$.
We need to prove that:

$\forall n \in \Z_{\ge 0}: \expect {X_{n + 1} \mid \FF_n} \ge X_n$
This is immediate from setting $m = n + 1$ in $(2)$. 
$\blacksquare$





