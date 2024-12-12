# 

Source: https://proofwiki.org/wiki/Doob%27s_Optional_Stopping_Theorem_for_Stopped_Sigma-Algebra_of_Bounded_Stopping_Time/Discrete_Time/Supermartingale

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \ge 0}$ be an $\sequence {\FF_n}_{n \ge 0}$-supermartingale.
Let $S$ and $T$ be bounded stopping times with respect to $\sequence {\FF_n}_{n \ge 0}$ and $S \le T$. 
Let $\FF_S$ be the stopped $\sigma$-algebra associated with $S$. 
Let $X_T$ and $X_S$ be $X$ at the stopping times $T$ and $S$.

Then: 

$\expect {X_T \mid \FF_S} \le X_S$ almost surely.


Proof
From Adapted Stochastic Process at Stopping Time is Measurable with respect to Stopped Sigma-Algebra:

$X_S$ is $\FF_S$-measurable.
Then from Conditional Expectation of Measurable Random Variable:

$\expect {X_S \mid \FF_S} = X_S$ almost surely.
Also from Doob's Optional Stopping Theorem: Discrete Time: Supermartingale:

$X_T$ and $X_S$ are integrable.
Then from Conditional Expectation is Linear, we have:

$\expect {X_T \mid \FF_S} \le X_S$ almost surely.
if and only if:

$\expect {X_T - X_S \mid \FF_S} \le 0$ almost surely.
From Condition for Conditional Expectation to be Almost Surely Non-Negative, we aim to show that:

$\expect {\paren {X_T - X_S} \cdot \chi_A} \le 0$ for each $A \in \FF_S$.
Suppose that $t \in \Z_{\ge 0}$ is such that: 

$\map T \omega \le t$ for all $\omega \in \Omega$.
Then we have: 














\(\ds X_T\)

\(=\)







\(\ds X_S + \sum_{k \mathop = S}^{T - 1} \paren {X_{k + 1} - X_k}\)




















\(\ds \)

\(=\)







\(\ds X_S + \sum_{k \mathop = 0}^\infty \paren {X_{k + 1} - X_k} \cdot \chi_{S \le k \le T - 1}\)




















\(\ds \)

\(=\)







\(\ds X_S + \sum_{k \mathop = 0}^\infty \paren {X_{k + 1} - X_k} \cdot \chi_{S \le k < T}\)





since $T$ is $\Z_{\ge 0}$-valued, so $k \le T - 1$ if and only if $k < T$



Since $T \le t$, we have: 

$\ds X_S + \sum_{k \mathop = 0}^\infty \paren {X_{k + 1} - X_k} \cdot \chi_{S \le k < T} = X_S + \sum_{k \mathop = 0}^{t - 1} \paren {X_{k + 1} - X_k} \cdot \chi_{S \le k < T}$
Then for $A \in \FF_S$ we have by Expectation is Linear: 

$\ds \expect {X_T \cdot \chi_A} = \expect {X_S \cdot \chi_A} + \sum_{k \mathop = 0}^{t - 1} \expect {\paren {X_{k + 1} - X_k} \cdot \chi_{S \le k < T} \cdot \chi_A}$
By Characteristic Function of Intersection, we have: 

$\chi_{S \le k < T} \cdot \chi_A = \chi_{\set {S \le k < T} \cap A}$
Since $A \in \FF_S$, we have: 

$\set {S \le k} \cap A \in \FF_k$
We also have:

$\set {T > k} = \set {T \le k - 1}^c \in \FF_{k - 1}$
Since $\sequence {\FF_n}_{n \ge 0}$ is a filtration:

$\FF_{k - 1} \subseteq \FF_k$
So:

$\set {S \le k < T} \cap A = \paren {\set {S \le k} \cap A} \cap \set {T > k} \in \FF_k$
Since $\sequence {X_n}_{n \ge 0}$ is a $\sequence {\FF_n}_{n \ge 0}$-supermartingale, we have: 

$\expect {X_{k + 1} \mid \FF_k} \le X_k$
and so, from Condition for Conditional Expectation to be Almost Surely Non-Negative:

$\expect {\paren {X_{k + 1} - X_k} \cdot \chi_A} \le 0$
for each $A \in \FF_k$.
So, we have:

$\expect {\paren {X_{k + 1} - X_k} \cdot \chi_{S \le k < T} \cdot \chi_A} \le 0$
So:

$\expect {X_T \cdot \chi_A} \le \expect {X_S \cdot \chi_A}$
that is:

$\expect {\paren {X_T - X_S} \cdot \chi_A} \le 0$
for each $A \in \FF_S$, as required.
$\blacksquare$





