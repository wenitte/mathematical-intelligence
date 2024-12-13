# 

Source: https://proofwiki.org/wiki/Max_Operation_Yields_Supremum_of_Parameters/General_Case



Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $x_1, x_2, \dotsc, x_n \in S$ for some $n \in \N_{>0}$.

Then:

$\max \set {x_1, x_2, \dotsc, x_n} = \sup \set {x_1, x_2, \dotsc, x_n}$
where:

$\max$ denotes the max operation
$\sup$ denotes the supremum.


Proof
We will prove the result by induction on the number of operands $n$.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\max \set {x_1, x_2, \dotsc, x_n} = \sup \set {x_1, x_2, \dotsc, x_n}$


Basis for the Induction
$\map P 1$ is the case:

$\max \set {x_1} = \sup \set {x_1}$

By definition of the max operation:

$\max \set {x_1} = x_1$
From Supremum of Singleton:

$\sup \set {x_1} = x_1$
So:

$\max \set {x_1} = \sup \set {x_1} = x_1$

Thus $\map P 1$ is seen to hold.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.
So this is the induction hypothesis:

$\max \set {x_1, x_2, \dotsc, x_k} = \sup \set {x_1, x_2, \dotsc, x_k}$

from which it is to be shown that:

$\max \set {x_1, x_2, \dotsc, x_k, x_{k+1}} = \sup \set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$


Induction Step
This is the induction step.
Now:














\(\ds \max \set {x_1, x_2, \dotsc, x_k, x_{k + 1} }\)

\(=\)







\(\ds \max \set {\max \set {x_1, x_2, \dotsc, x_k}, x_{k + 1} }\)





Definition of Max Operation (General Case)














\(\ds \)

\(=\)







\(\ds \max \set {\sup \set {x_1, x_2, \dotsc, x_k}, x_{k + 1} }\)





Induction hypothesis




As $\struct {S, \preceq}$ is a totally ordered set, all elements of $S$ are comparable by $\preceq$.
Therefore there are two cases to consider:


Case 1: $x_{k + 1} \preceq \sup \set {x_1, x_2, \dotsc, x_k}$
Let $x_{k + 1} \preceq \sup \set {x_1, x_2, \dotsc, x_k}$.
By definition of the max operation:

$\max \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = \sup \set {x_1, x_2, \dotsc, x_k}$

By definition, $\sup \set {x_1, x_2, \dotsc, x_k}$ is an upper bound of $\set {x_1, x_2, \dotsc, x_k}$.
That is:

$\forall 1 \le i \le k : x_i \preceq \sup \set {x_1, x_2, \dotsc, x_k}$
Thus:

$\forall 1 \le i \le k + 1 : x_i \preceq \sup \set {x_1, x_2, \dotsc, x_k}$
So $\sup \set {x_1, x_2, \dotsc, x_k}$ is an upper bound of $\set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$.

Let $y$ be any other upper bound of $\set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$.
Then:

$y$ is an upper bound of $\set {x_1, x_2, \dotsc, x_k}$.
By definition of the supremum:

$\sup \set {x_1, x_2, \dotsc, x_k} \preceq y$

It has been shown that the supremum of $\set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$ is:

$\sup \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = \sup \set {x_1, x_2, \dotsc, x_k}$

Thus it follows:

$\max \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = \sup \set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$


Case 2: $\sup \set {x_1, x_2, \dotsc, x_k} \preceq x_{k + 1}$
Let $\sup \set {x_1, x_2, \dotsc, x_k} \preceq x_{k + 1}$.
By definition of the max operation:

$\max \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = x_{k + 1}$

By definition, $\sup \set {x_1, x_2, \dotsc, x_k}$ is an upper bound of $\set {x_1, x_2, \dotsc, x_k}$.
That is:

$\forall 1 \le i \le k : x_i \preceq \sup \set {x_1, x_2, \dotsc, x_k}$

By definition of an ordering:

$\preceq$ is transitive.
Thus:

$\forall 1 \le i \le k : x_i \preceq x_{k + 1}$
By definition of an ordering:

$\preceq$ is reflexive.
Thus:

$x_{k + 1} \preceq x_{k + 1}$
It follows that $x_{k + 1}$ is an upper bound of $\set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$.

Let $y$ be any other upper bound of $\set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$.
Then:

$x_{k + 1} \preceq y$.
It has been shown that

$\sup \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = x_{k + 1}$.

Thus it follows:

$\max \set {x_1, x_2, \dotsc, x_k, x_{k + 1}} = \sup \set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$

In either case, the result holds.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
Therefore:

$\max \set {x_1, x_2, \dotsc, x_n} = \sup \set {x_1, x_2, \dotsc, x_n}$
$\blacksquare$





