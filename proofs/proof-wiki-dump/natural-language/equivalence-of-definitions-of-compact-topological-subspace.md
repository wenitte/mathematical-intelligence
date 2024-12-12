# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Compact_Topological_Subspace



Theorem
The following definitions of the concept of Compact Subspace are equivalent:
Let $T = \struct {S, \tau}$ be a topological space.
Let $T_H = \struct {H, \tau_H}$ be a topological subspace of $T$, where $H \subseteq S$.

Definition 1
The topological subspace $T_H = \struct {H, \tau_H}$ is compact in $T$ if and only if $T_H$ is itself a compact topological space.

Definition 2
$H$ is compact in $T$ if and only if every open cover $\CC \subseteq \tau$ for $H$ has a finite subcover.


Proof
$1$ implies $2$
Suppose $T_H$ is compact in the sense of Definition 1.
Let $\CC$ be a cover of $H$ by open sets of $T$.
Then for each $U \in \CC$, $U \cap H$ is open in $T_H$ by definition of the subspace topology.
Since $\CC$ is a cover of $H$ it follows that $\CC' = \set{U \cap H: U \in \CC}$ is also a cover of $H$.
By hypothesis, there exists a finite subcover $\FF'$ of $\CC'$ for $H$.
Thus let $\FF' = \set {U_1 \cap H, U_2 \cap H, \ldots, U_n \cap H}$ where $U_1, U_2, \ldots, U_n \in \CC$.
It follows that $\FF = \set {U_1, U_2, \ldots, U_n}$ is a finite subcover of $H$.
That is, $T_H$ is compact in the sense of Definition 2.
$\Box$


$2$ implies $1$
Suppose $T_H$ is compact in the sense of Definition 2.
Let $\CC$ be a cover of $H$ by open sets of $H$.
By definition of the subspace topology, each $V \in \CC$ is of the form $U \cap H$ for some $U \in \tau$.
It follows that the collection of all such $U$ is a cover of $H$ by open sets of $T$.
By hypothesis, there exists a finite subcover $\FF = \set {U_1, U_2, \ldots, U_n}$ of $\CC$ for $H$.
Thus $\FF' = \set {U_1 \cap H, U_2 \cap H, \ldots, U_n \cap H}$ is also a finite subcover of $H$
That is, $T_H$ is compact in the sense of Definition 1.
$\blacksquare$


Also see
Definition:Compact Subspace
Definition:Compact Space


Sources
1953: Walter Rudin: Principles of Mathematical Analysis: $2.33$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.2$: Definition of compactness




