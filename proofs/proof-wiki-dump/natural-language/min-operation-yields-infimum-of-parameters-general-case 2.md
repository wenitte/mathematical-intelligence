# 

Source: https://proofwiki.org/wiki/Min_Operation_Yields_Infimum_of_Parameters/General_Case



Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $x_1, x_2, \dots ,x_n \in S$ for some $n \in \N_{>0}$.

Then:

$\min \set {x_1, x_2, \dotsc, x_n} = \inf \set {x_1, x_2, \dotsc, x_n}$
where:

$\min$ denotes the min operation
$\inf$ denotes the infimum.


Proof
We will prove the result by induction on the number of operands $n$.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\min \set {x_1, x_2, \dotsc, x_n} = \inf \set {x_1, x_2, \dotsc, x_n}$


Basis for the Induction
$\map P 1$ is the case:

$\min \set {x_1} = \inf \set {x_1}$

By definition of the min operation:

$\min \set {x_1} = x_1$
From Infimum of Singleton:

$\inf \set {x_1} = x_1$
So:

$\min \set {x_1} = \inf \set {x_1} = x_1$

Thus $\map P 1$ is seen to hold.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.
So this is the induction hypothesis:

$\min \set {x_1, x_2, \dots ,x_k} = \inf \set {x_1, x_2, \dots ,x_k}$

from which it is to be shown that:

$\min \set {x_1, x_2, \dots ,x_k, x_{k+1}} = \inf \set {x_1, x_2, \dots ,x_k, x_{k+1}}$


Induction Step
This is the induction step.
Now:














\(\ds \min \set {x_1, x_2, \dotsc, x_k, x_{k + 1} }\)

\(=\)







\(\ds \min \set {\min \set {x_1, x_2, \dotsc, x_k}, x_{k + 1} }\)





Definition of Min Operation (General Case)














\(\ds \)

\(=\)







\(\ds \min \set {\inf \set {x_1, x_2, \dotsc, x_k}, x_{k + 1} }\)





Induction hypothesis




As $\struct {S, \preceq}$ is a totally ordered set, all elements of $S$ are comparable by $\preceq$.
Therefore there are two cases to consider:


Case 1: $\inf \set {x_1, x_2, \dotsc, x_k} \preceq x_{k + 1}$
Let:

$\inf \set {x_1, x_2, \dotsc, x_k} \preceq  x_{k + 1}$.
By definition of the min operation:

$\min \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = \inf \set {x_1, x_2, \dotsc, x_k}$

By definition, $\inf \set {x_1, x_2, \dotsc, x_k}$ is a lower bound of $\set {x_1, x_2, \dotsc, x_k}$.
That is:

$\forall 1 \le i \le k : \inf \set {x_1, x_2, \dotsc, x_k} \preceq  x_i$
Thus:

$\forall 1 \le i \le k + 1 : \inf \set {x_1, x_2, \dotsc, x_k} \preceq x_i$
So $\inf \set {x_1, x_2, \dots ,x_k}$ is a lower bound of $\set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$.

Let $y$ be any other lower bound of $\set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$.
Then:

$y$ is a lower bound of $\set {x_1, x_2, \dotsc, x_k}$.
By definition of the infimum:

$y \preceq \inf \set {x_1, x_2, \dotsc, x_k}$

It has been shown that the infimum of $\set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$ is:

$\inf \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = \inf \set {x_1, x_2, \dotsc, x_k}$

Thus it follows:

$\min \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = \inf \set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$


Case 2: $x_{k + 1} \preceq \inf \set {x_1, x_2, \dotsc, x_k}$
Let:

$x_{k + 1} \preceq \inf \set {x_1, x_2, \dotsc, x_k}$.
By definition of the min operation:

$\min \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = x_{k + 1}$

By definition, $\inf \set {x_1, x_2, \dotsc, x_k}$ is a lower bound of $\set {x_1, x_2, \dotsc, x_k}$.
That is:

$\forall 1 \le i \le k : \inf \set {x_1, x_2, \dotsc, x_k} \preceq  x_i$

By definition of an ordering:

$\preceq$ is transitive.
Thus:

$\forall 1 \le i \le k : x_{k + 1}  \preceq x_i $
By definition of an ordering:

$\preceq$ is reflexive.
Thus:

$x_{k + 1} \preceq x_{k + 1}$
It follows that $x_{k + 1}$ is a lower bound of $\set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$.

Let $y$ be any other lower bound of $\set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$.
Then:

$y \preceq x_{k + 1}$.
It has been shown that

$\inf \set {x_1, x_2, \dotsc, x_k, x_{k + 1} } = x_{k + 1}$.

Thus it follows:

$\min \set {x_1, x_2, \dotsc, x_k, x_{k + 1}} = \inf \set {x_1, x_2, \dotsc, x_k, x_{k + 1} }$

In either case, the result holds.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
Therefore:

$\min \set {x_1, x_2, \dotsc, x_n} = \inf \set {x_1, x_2, \dotsc, x_n}$
$\blacksquare$





