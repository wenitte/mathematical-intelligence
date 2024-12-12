# 

Source: https://proofwiki.org/wiki/Condition_for_Independence_from_Product_of_Expectations/Corollary/General_Result



Corollary to Condition for Independence from Product of Expectations
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X_1, X_2, \ldots, X_n$ be independent discrete random variables.
Then:

$\ds \expect {\prod_{k \mathop = 1}^n {X_k} } = \prod_{k \mathop = 1}^n \expect {X_k}$
assuming the latter expectations exist.


Proof
Proof by induction:
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$\ds \expect {\prod_{k \mathop = 1}^n {X_k} } = \prod_{k \mathop = 1}^n \expect {X_k}$


Basis for the Induction
$\map P 1$ is the case:

$\ds \expect {\prod_{k \mathop = 1}^1 {X_k} } = \expect {X_1} = \prod_{k \mathop = 1}^1 \expect {X_k}$
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\ds \expect {\prod_{k \mathop = 1}^r {X_k} } = \prod_{k \mathop = 1}^r \expect {X_k}$

from which it is to be shown that:

$\ds \expect {\prod_{k \mathop = 1}^{r + 1} {X_k} } = \prod_{k \mathop = 1}^{r + 1} \expect {X_k}$


Induction Step
This is the induction step:
We have:














\(\ds \expect {\prod_{k \mathop = 1}^{r + 1} {X_k} }\)

\(=\)







\(\ds \expect {X_{r + 1} \prod_{k \mathop = 1}^r {X_k} }\)




















\(\ds \)

\(=\)







\(\ds \expect {X_{r + 1} } \expect {\prod_{k \mathop = 1}^r {X_k} }\)





Corollary to Condition for Independence from Product of Expectations














\(\ds \)

\(=\)







\(\ds \expect {X_{r + 1} } \prod_{k \mathop = 1}^r \expect {X_k}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^{r + 1} \expect {X_k}\)









So $\map P r \implies \map P {r + 1}$ and thus it follows by the Principle of Mathematical Induction that:

$\ds \forall n \in \Z_{> 0}: \expect {\prod_{k \mathop = 1}^n {X_k} } = \prod_{k \mathop = 1}^n \expect {X_k}$
$\blacksquare$





