# 

Source: https://proofwiki.org/wiki/Finite_Subsets_form_Directed_Ordering

Theorem
Let $I$ be a set.
Denote with $\FF$ the set of finite subsets of $I$.
Let $\subseteq$ be the subset relation on $\FF$.

Then $\subseteq$ is a directed ordering on $\FF$.


Proof
From Subset Relation is Ordering, we know that $\subseteq$ is an ordering.
Now let $F, G \in \FF$.
From Set Union Preserves Subsets, conclude that $F \cup G \subseteq I$ as $F, G \subseteq I$.
From Union of Finite Sets is Finite, $F \cup G$ is a finite set.
Hence $F \cup G \in \FF$.
Furthermore, $F \subseteq F \cup G$ and $G \subseteq F \cup G$.
It follows that $\subseteq$ is a directed ordering.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): Appendix $\text{A}$ Preliminaries: $\S 2.$ Topology




