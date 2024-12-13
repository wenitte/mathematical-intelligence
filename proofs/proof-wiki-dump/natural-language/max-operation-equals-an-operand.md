# 

Source: https://proofwiki.org/wiki/Max_Operation_Equals_an_Operand



Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $x_1, x_2, \dotsc, x_n \in S$ for some $n \in \N_{>0}$.

Then:

$\exists i \in \closedint 1 n : x_i = \max \set {x_1, x_2, \dotsc, x_n}$
where:

$\max$ denotes the max operation.


Proof
We will prove the result by induction on the number of operands $n$.
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\exists i \in \closedint 1 n : x_i = \max \set {x_1, x_2, \dotsc, x_n}$


Basis for the Induction
$\map P 1$ is the case:

$\exists i \in \closedint 1 1 : x_i = \max \set {x_1}$

By definition of the max operation:

$\max \set {x_1} = x_1$

Thus $\map P 1$ is seen to hold.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.
So this is the induction hypothesis:

$\exists i \in \closedint 1 k : x_i = \max \set {x_1, x_2, \dotsc, x_k}$

from which it is to be shown that:

$\exists i \in \closedint 1 {k + 1} : x_i = \max \set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$


Induction Step
This is the induction step.
By the definition of Max Operation:

$\max \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = \max \set {\max \set {x_1, x_2, \dotsc, x_k}, x_{k + 1} }$
By the induction hypothesis:

$\exists i \in \closedint 1 k : x_i = \max \set {x_1, x_2, \dotsc, x_k}$
So:

$\max \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = \max \set {x_i, x_{k + 1} }$

As $\struct {S, \preceq}$ is a totally ordered set, all elements of $S$ are comparable by $\preceq$.
Therefore there are two cases to consider:


Case 1: $x_{k + 1} \preceq x_i$
By definition of the max operation:

$\max \set {x_i, x_{k + 1} } = x_i$
$\Box$

Case 2: $x_i \preceq x_{k + 1}$
By definition of the max operation:

$\max \set {x_i, x_{k + 1} } = x_{k + 1}$
$\Box$

In either case, the result holds.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
Therefore:

$\exists i \in \closedint 1 n : x_i = \max \set {x_1, x_2, \dotsc, x_n}$
$\blacksquare$





