# 

Source: https://proofwiki.org/wiki/Bounded_Piecewise_Continuous_Function_is_Darboux_Integrable



Theorem
Let $f$ be a real function defined on the closed interval $\closedint a b$.
Let $f$ be piecewise continuous and bounded on $\closedint a b$.

Then $f$ is Darboux integrable on $\closedint a b$.


Proof
We are given that $f$ is piecewise continuous and bounded on $\closedint a b$.
Therefore, there exists a finite subdivision $\set {x_0, x_1, \ldots, x_n}$ of $\closedint a b$, where $x_0 = a$ and $x_n = b$, such that for all $i \in \set {1, 2, \ldots, n}$:

$f$ is continuous on $\openint {x_{i - 1} } {x_i}$
$f$ is bounded on $\closedint {x_{i - 1} } {x_i}$.
Note that $n$ is the number of intervals $\openint {x_{i - 1} } {x_i}$ defined from the (finite) subdivision $\set {x_0, x_1, \ldots, x_n}$.
We shall use proof by induction on these $n$ intervals.

For all $k \in \set {1, 2, \ldots, n}$, let $\map P k$ be the proposition:

$f$ is Darboux integrable on $\closedint {x_0} {x_k}$.


Basis for the Induction
$\map P 1$ is the case:

$f$ is Darboux integrable on $\closedint {x_{i - 1} } {x_i}$
for an arbitrary $i \in \set {1, 2, \ldots, k}$. 

$f$ is piecewise continuous and bounded for the case $n = 1$ means that:

$f$ is continuous on $\openint {x_{i - 1} } {x_i}$
$f$ is bounded on $\closedint {x_{i - 1} } {x_i}$.
By Bounded Function Continuous on Open Interval is Darboux Integrable, $f$ is Darboux integrable on $\closedint {x_{i - 1} } {x_i}$.
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.
So this is the induction hypothesis:

$f$ is Darboux integrable on $\closedint {x_0} {x_k}$
from which it is to be shown that:

$f$ is Darboux integrable on $\closedint {x_0} {x_{k + 1} }$.


Induction Step
This is the induction step:

By definition of a bounded piecewise continuous function, for every $i \in \set {1, 2, \ldots, k, k + 1}$:

$f$ is continuous on $\openint {x_{i - 1} } {x_i}$
$f$ is bounded on $\closedint {x_{i - 1} } {x_i}$.

By the induction hypothesis, $f$ is Darboux integrable on $\closedint {x_0} {x_k}$.

From the basis for the induction, $f$ is Darboux integrable on $\closedint {x_k} {x_{k + 1} }$.

We have that $f$ is Darboux integrable on $\closedint {x_0} {x_k}$ and $\closedint {x_k} {x_{k + 1} }$.
Therefore, $f$ is Darboux integrable on $\closedint {x_0} {x_k} \cup \closedint {x_k} {x_{k + 1} }$ by Existence of Integral on Union of Adjacent Intervals.
We have that:

$\closedint {x_0} {x_{k + 1} } = \closedint {x_0} {x_k} \cup \closedint {x_k} {x_{k + 1} }$.
Accordingly, $f$ is Darboux integrable on $\closedint {x_0} {x_{k + 1} }$.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$f$ is Darboux integrable on $\closedint a b$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definition of a Definite Integral: $15.1$




