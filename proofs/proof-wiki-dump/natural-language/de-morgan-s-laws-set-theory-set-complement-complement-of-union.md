# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Set_Complement/Complement_of_Union



Theorem
Let $T_1, T_2$ be subsets of a universal set $\mathbb U$.

Then:

$\overline {T_1 \cup T_2} = \overline T_1 \cap \overline T_2$
where $\overline T_1$ is the set complement of $T_1$.

It is arguable that this notation may be easier to follow:

$\map \complement {T_1 \cup T_2} = \map \complement {T_1} \cap \map \complement {T_2}$


Corollary
$T_1 \cup T_2 = \overline {\overline T_1 \cap \overline T_2}$


Proof 1













\(\ds \map \complement {T_1 \cup T_2}\)

\(=\)







\(\ds \mathbb U \setminus \paren {T_1 \cup T_2}\)





Definition of Set Complement














\(\ds \)

\(=\)







\(\ds \paren {\mathbb U \setminus T_1} \cap \paren {\mathbb U \setminus T_2}\)





De Morgan's Laws: Difference with Union














\(\ds \)

\(=\)







\(\ds \map \complement {T_1} \cap \map \complement {T_2}\)





Definition of Set Complement



$\blacksquare$


Proof 2













\(\ds \)

\(\)







\(\ds x \in \overline {T_1 \cup T_2}\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds x \notin \paren {T_1 \cup T_2}\)





Definition of Set Complement














\(\ds \)

\(\leadstoandfrom\)







\(\ds \neg \paren {x \in T_1 \lor x \in T_2}\)





Definition of Set Union














\(\ds \)

\(\leadstoandfrom\)







\(\ds \neg \paren {x \in T_1} \land \neg \paren {x \in T_2}\)





De Morgan's Laws (Logic): Conjunction of Negations














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in \overline {T_1} \land x \in \overline {T_2}\)





Definition of Set Complement














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in \overline {T_1} \cap \overline {T_2}\)









By definition of set equality:

$\overline {T_1 \cup T_2} = \overline {T_1} \cap \overline {T_2}$
$\blacksquare$


Demonstration by Venn Diagram

$\overline T_1$ is depicted in yellow and $\overline T_2$ is depicted in red.
Their intersection, $\overline T_1 \cap \overline T_2$, is depicted in orange.
As can be seen by inspection, this also equals the complement of the union of $T_1$ and $T_2$.


Source of Name
This entry was named for Augustus De Morgan.


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $1$. Elementary Operations on Sets
1965: A.M. Arthurs: Probability Theory ... (previous) ... (next): Chapter $1$: Set Theory: $1.3$: Set operations
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 8 \beta$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.6$: Set Identities and Other Set Relations
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.1$: Sets and Subsets: Theorem $\text{A}.1 \ \text{(a)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.2$: Sets: Exercise $6$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): De Morgan's laws
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): De Morgan's laws
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): algebra of sets: $\text {(x)}$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): De Morgan's laws

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: whether this proof is given or just the resultIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 2$




