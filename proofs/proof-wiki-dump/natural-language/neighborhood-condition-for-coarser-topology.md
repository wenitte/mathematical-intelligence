# 

Source: https://proofwiki.org/wiki/Neighborhood_Condition_for_Coarser_Topology

Theorem
Let $S$ be a set.
Let $\tau_1$ and $\tau_2$ be two topologies on $S$.

Suppose that for all $z \in S$ and for all open neighborhoods $N_z$ of $z$ with respect to $\tau_1$, there exists $U \in \tau_2$ such that $U \subseteq N_z$.

Then $\tau_1$ is coarser than $\tau_2$.


Proof
Let $V \in \tau_1$.
For all $z \in V$, we have that $V$ is an open neighborhood of $z$ with respect to $\tau_1$.
Then for all $z \in V$, we can find $U_z \in \tau_2$ such that $z \in U_z \subseteq V$.
Then:

$\ds V = \bigcup_{z \mathop \in V } \set z \subseteq \bigcup_{z \mathop \in V } U_z \subseteq V$
By definition of set equality, it follows that:

$\ds V = \bigcup_{z \mathop \in V} U_z \in \tau_2$
Hence:

$\tau_1 \subseteq \tau_2$
which by definition means that $\tau_1$ is coarser than $\tau_2$.
$\blacksquare$





