# 

Source: https://proofwiki.org/wiki/Induced_Topology_on_Subspace_of_Subspace_Coincides_with_Induced_Topology_on_Subspace

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ be a topological space
Let $S_2 \subseteq S_1$ be a subset of $S_1$.
Let $S_3 \subseteq S_2$ be a subset of $S_2$.

Let $T_2 = \struct {S_2, \tau_2}$ be the topological subspace of $T_1$ such that $\tau_2$ is the subspace topology on $T_2$ induced by $\tau_1$.
Let $T_3 = \struct {S_3, \tau_3}$ be the topological subspace of $T_1$ such that $\tau_3$ is the subspace topology on $T_3$ induced by $\tau_1$.

Then $\tau_3$ is the same set of subsets of $S_1$ as is the subspace topology on $T_3$ induced by $\tau_2$.


Proof
Let $\tau_P$ denote the subspace topology on $T_3$ induced by $\tau_1$.
Let $\tau_Q$ denote the subspace topology on $T_3$ induced by $\tau_2$.
The object of this exercise is to demonstrate that $\tau_P = \tau_Q$.
This will be done by showing that an arbitrary set $V$ is in $\tau_P$ if and only if $V$ is in $\tau_Q$.

We have that:

$\tau_P = \set {U \cap S_3: U \in \tau_1}$
$\tau_Q = \set {U \cap S_3: U \in \tau_2}$

Then:














\(\ds V\)

\(\in\)







\(\ds \tau_P\)
















\(\ds \exists U_1 \in \tau_1: \, \)



\(\ds V\)

\(=\)







\(\ds U_1 \cap S_3\)




















\(\ds \)

\(=\)







\(\ds U_1 \cap \paren {S_2 \cap S_3}\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \paren {U_1 \cap S_2} \cap S_3\)





Intersection is Associative








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists U_2 \in \tau_2: \, \)



\(\ds V\)

\(=\)







\(\ds U_2 \cap S_3\)





Definition of Subspace Topology: $U_1 \cap S_2 \in \tau_2$








\(\ds \leadstoandfrom \ \ \)





\(\ds V\)

\(\in\)







\(\ds \tau_Q\)





Definition of $\tau_Q$



Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 11$




