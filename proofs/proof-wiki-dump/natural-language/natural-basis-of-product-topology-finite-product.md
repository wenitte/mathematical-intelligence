# 

Source: https://proofwiki.org/wiki/Natural_Basis_of_Product_Topology/Finite_Product

Theorem
Let $n \in \N$.
For all $k \in \set {1, \ldots, n}$, let $\struct {X_k, \tau_k}$ be topological spaces.
Let $\ds X = \prod_{k \mathop = 1}^n X_k$ be the (finite) cartesian product of $X_1, \ldots, X_n$.

Then the natural basis on $X$ is:

$\BB = \set {\ds \prod_{k \mathop = 1}^n U_k : \forall k : U_k \in \tau_k}$


Proof
From Natural Basis of Product Topology, the natural basis on $X$ is the set $\BB$ of cartesian products of the form $\ds \prod_{i \mathop \in I} U_i$ where:

for all $k = 1, \dots, n: U_k \in \tau_i$
for all but finitely many indices $k : U_k = X_k$
Let $\BB' = \set {\ds \prod_{k \mathop = 1}^n U_k : \forall k : U_k \in \tau_k}$
By definition of $\BB$:

$\BB \subseteq \BB'$

Let $B \in \BB'$, that is: 

$B = \ds \prod_{k \mathop = 1}^n U_k$
where $\forall k: U_k \in \tau_k$.

Let $J = \set {k: U_k \neq X_k}$.
Since $J \subseteq \set{ 1, \dots, n}$ is finite then:

for all but finitely many indices $k : U_k = X_k$
Thus $B \in \BB$.
Since $B$ was arbitrary, then $\BB' \subseteq \BB$.
It follows that $\BB = \BB'$ from the definition of set equality.
$\blacksquare$





