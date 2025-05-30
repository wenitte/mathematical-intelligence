# 

Source: https://proofwiki.org/wiki/Basis_Condition_for_Coarser_Topology



Theorem
Let $S$ be a set.
Let $\BB_1$ and $\BB_2$ be two bases on $S$.
Let $\tau_1$ and $\tau_2$ be the topologies generated by $\BB_1$ and $\BB_2$ respectively.

If $\BB_1$ and $\BB_2$ satisfy:

$\forall U \in \BB_1 : \exists \AA \subseteq \BB_2: U = \bigcup \AA$
then $\tau_1$ is coarser than $\tau_2$.


Corollary 1
If $\BB_1$ and $\BB_2$ satisfy:

$\forall U \in \BB_1: \forall x \in U: \exists V \in \BB_2: x \in V \subseteq U$
then $\tau_1$ is coarser than $\tau_2$.


Corollary 2
If $\BB_1 \subseteq \BB_2$ then $\tau_1$ is coarser than $\tau_2$.


Proof
Let $\BB_1$ and $\BB_2$ satisfy:

$\forall U \in \BB_1 : \exists \AA \subseteq \BB_2: U = \bigcup \AA$

Let $U \in \BB_1$.
Then there exists $\AA_2 \subseteq \BB_2$ such that $U = \bigcup \AA_2$.
By definition of the topology generated by $\BB_2$, it follows that $U \in \tau_2$.
Since $U$ was arbitrary, it follows that $\BB_1 \subseteq \tau_2$.

Let $W \in \tau_1$.
By definition of the topology generated by $\BB_1$:

there exists $\AA_1 \subseteq \BB_1$ such that $W = \bigcup \AA_1$.
Since $\BB_1 \subseteq \tau_2$, it follows that $\AA_1 \subseteq \tau_2$.
By the open set axiom $(O1)$, then $W \in \tau_2$.
Since $W$ was arbitrary, it follows that $\tau_1 \subseteq \tau_2$.
The result follows.
$\blacksquare$





