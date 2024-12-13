# 

Source: https://proofwiki.org/wiki/Open_Neighborhoods_of_Point_form_Directed_Ordering

Theorem
Let $\struct{ S, \tau }$ be a topological space.
Let $x \in S$.
Let $\NN \subseteq \tau$ be the set of open neighborhoods of $x$.

Then $\supseteq$, the ordering of $\NN$ by reverse inclusion, is a directed ordering on $\NN$.


Proof
By Subset Relation is Ordering and Dual Ordering is Ordering $\supseteq$ is an ordering on $\NN$.
To show that $\supseteq$ is directed, let $U, V \in \NN$.
Then $x \in U, V$, so that $x \in U \cap V$.
Hence $U \cap V \in \NN$ is an open neighborhood of $x$.
Moreover by Intersection is Subset:

$U, V \supseteq U \cap V$
Hence $\supseteq$ is directed.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): Appendix $\text{A}$ Preliminaries: $\S 2.$ Topology




