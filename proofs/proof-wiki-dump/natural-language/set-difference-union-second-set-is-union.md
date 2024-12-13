# 

Source: https://proofwiki.org/wiki/Set_Difference_Union_Second_Set_is_Union



Theorem
The union of a set difference with the second set is the union of the two sets.
That is, let $S, T$ be sets.
Then:

$\paren {S \setminus T} \cup T = S \cup T$


Proof
Consider $S, T \subseteq \mathbb U$, where $\mathbb U$ is considered as the universal set.















\(\ds \paren {S \setminus T} \cup T\)

\(=\)







\(\ds \paren {S \cap \map \complement T} \cup T\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \paren {S \cup T} \cap \paren {\map \complement T \cup T}\)





Union Distributes over Intersection














\(\ds \)

\(=\)







\(\ds \paren {S \cup T} \cap \mathbb U\)





Union with Complement














\(\ds \)

\(=\)







\(\ds S \cup T\)





Intersection with Universal Set



$\blacksquare$

Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Union with Complement.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.1$: Theorem $1.3$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1$: Sets and Functions: Problem $2$
This problem is worded: Show that in general $A - B \cup B \ne A$.




