# 

Source: https://proofwiki.org/wiki/Euclidean_Topology_is_Product_Topology/Proof_2



Theorem
Let $T_1 = \struct {\R, \tau_1}$ be the topological space such that $\tau_1$ is the Euclidean topology on $\R$.
Let $T_n = \struct {\R^n, \tau_n}$ be the topological space such that $\tau_n$ is the product topology on the cartesian product $\ds \R_n = \prod_{i \mathop = 1}^n \R$.

Then the Euclidean topology on $\R^n$ and the product topology on $\R^n$ are the same.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 2}$, let $\map P n$ be the proposition:

the Euclidean topology on $\R^n$ and the product topology on $\R^n$ are the same.


Basis for the Induction
$\map P 2$ is the case:

the Euclidean topology on $\R^n$ and the product topology on $\R^n$ are the same.
This is demonstrated in Euclidean Topology on Cartesian Plane is Product Topology.
Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

the Euclidean topology on $\R^k$ and the product topology on $\R^k$ are the same.

from which it is to be shown that:

the Euclidean topology on $\R^{k + 1}$ and the product topology on $\R^{k + 1}$ are the same.


Induction Step
This is the induction step:
We have that:

$\R^{k + 1} = \R^k \times \R$
By the induction hypothesis:

the Euclidean topology on $\R^k$ and the product topology on $\R^k$ are the same.
By the basis for the induction:

the Euclidean topology on $\R^k \times \R$ and the product topology on $\R^k \times \R$ are the same.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}:$
the Euclidean topology on $\R^n$ and the product topology on $\R^n$ are the same.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.5$: Products




