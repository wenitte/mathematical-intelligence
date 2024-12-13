# 

Source: https://proofwiki.org/wiki/Separable_Topological_Space_remains_Separable_in_Coarser_Topology

Theorem
Let $\struct {X, \tau_2}$ be a separable topological space. 
Let $\tau_1$ be a topology on $X$ such that:

$\tau_1 \subseteq \tau_2$
That is, such that $\tau_1$ is coarser than $\tau_2$. 

Then $\struct {X, \tau_1}$ is separable.


Proof
Let $\cl_1$ and $\cl_2$ denote the topological closure in $\struct {X, \tau_1}$ and $\struct {X, \tau_2}$ respectively.
Let $D$ be a countable everywhere dense subset of $\struct {X, \tau_2}$.
From Topological Closure in Coarser Topology is Larger, we have: 

$\map {\cl_2} D \subseteq \map {\cl_1} D$
Since $D$ is everywhere dense in $\struct {X, \tau_2}$, we have $\map {\cl_2} D = X$.
So:

$\map {\cl_1} D = X$
So $D$ is everywhere dense in $\struct {X, \tau_1}$.
$\blacksquare$





