# 

Source: https://proofwiki.org/wiki/Homeomorphic_Topologies_on_Same_Set_may_not_be_Identical

Theorem
Let $S$ be a set.
Let $\tau_1$ and $\tau_2$ both be topologies on $S$ such that the topological spaces $\struct {S, \tau_1}$ and $\struct {S, \tau_2}$ are homeomorphic.
Then it is not necessarily the case that $\struct {S, \tau_1} = \struct {S, \tau_2}$.


Proof
Let $p, q \in S$ such that $p \ne q$.
Let $\tau_p$ and $\tau_q$ be the particular point topologies on $S$ by $p$ and $q$ respectively.

From Homeomorphic Non-Comparable Particular Point Topologies, $\struct {S, \tau_p}$ and $\struct {S, \tau_q}$ are homeomorphic.
But $\struct {S, \tau_p} \ne \struct {S, \tau_q}$, as $\set p \in \tau_p$ but $\set p \notin \tau_q$, and similarly $\set q \in \tau_q$ but $\set q \notin \tau_p$.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets




