# 

Source: https://proofwiki.org/wiki/Existence_of_Upper_Bound_of_Finite_Subset_of_Directed_Set



Theorem
Let $\struct {\Lambda, \preceq}$ be a directed set.
Let $\FF \subseteq \Lambda$ be a finite subset.

Then $\FF$ has an upper bound in $\struct {\Lambda, \preceq}$.


Proof
We induct on the cardinality of $\FF$.
Let $n \in \Z_{\ge 0}$.
For all $m \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

if $\FF \subseteq \Lambda$ has $\card \FF = n$, then $\FF$ has an upper bound.


Basis for the Induction
The case $n = 0$ is vacuously true.
If $n = 1$ and $\FF = \set \lambda$, $\lambda$ is clearly an upper bound for $\FF$ in $\struct {\Lambda, \preceq}$. 
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.
So this is our induction hypothesis:

if $\FF \subseteq \Lambda$ has $\card \FF = k$, then $\FF$ has an upper bound.
Then we need to show:

if $\FF \subseteq \Lambda$ has $\card \FF = k + 1$, then $\FF$ has an upper bound.


Induction Step
This is our induction step.
Let $\FF = \set {\lambda_1, \ldots, \lambda_{k + 1} }$.
Then $\GG = \set {\lambda_1, \ldots, \lambda_k}$ has $\card \GG = k$, and so there exists $\lambda \in \Lambda$ such that: 

$\lambda_i \preceq \lambda$ for each $1 \le i \le n$.
From the definition of a directed set, there exists $\lambda_\ast \in \Lambda$ such that: 

$\lambda \preceq \lambda_\ast$
and:

$\lambda_{k + 1} \preceq \lambda_\ast$
Then we have, from transitivity:

$\lambda_i \preceq \lambda_\ast$ for each $1 \le i \le k + 1$.
$\blacksquare$





