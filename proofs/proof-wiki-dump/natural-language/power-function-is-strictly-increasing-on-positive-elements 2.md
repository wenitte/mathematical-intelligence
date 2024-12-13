# 

Source: https://proofwiki.org/wiki/Power_Function_is_Strictly_Increasing_on_Positive_Elements



Theorem
Let $\struct {R, +, \circ, \le}$ be an ordered ring.
Let $x, y \in R$.
Let $n \in \N_{>0}$ be a strictly positive integer.
Let $0 < x < y$.

Then:

$0 < \map {\circ^n} x < \map {\circ^n} y$


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$0 < \map {\circ^n} x < \map {\circ^n} y$


Basis for the Induction
$\map P 1$ is the case:

$0 < \map {\circ^1} x < \map {\circ^1} y$
which is just:

$0 < x < y$
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$0 < \map {\circ^k} x < \map {\circ^k} y$

from which it is to be shown that:

$0 < \map {\circ^{k + 1}} x < \map {\circ^{k + 1}} y$


Induction Step
This is the induction step:
We have:

$0 < x < y$
$0 < \map {\circ^k} x < \map {\circ^k} y$
By Ring Product preserves Inequalities on Positive Elements:

$0 < \map {\circ^k} x \circ x < \map {\circ^k} y \circ y$
Hence:

$0 < \map {\circ^{k + 1}} x < \map {\circ^{k + 1}} y$
So $\map P k \implies \map P {k + 1}$ and thus it follows by the Principle of Mathematical Induction that:

$\forall n \in \N_{> 0}: 0 < \map {\circ^n} x < \map {\circ^n} y$
$\blacksquare$


Also see
Odd Power Function is Strictly Increasing




