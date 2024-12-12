# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Relative_Complement/Family_of_Sets/Complement_of_Intersection



Theorem
Let $S$ be a set.
Let $\family {S_i}_{i \mathop \in I}$ be a family of subsets of $S$.

Then:

$\ds \relcomp S {\bigcap_{i \mathop \in I} S_i} = \bigcup_{i \mathop \in I} \relcomp S {S_i}$


Proof













\(\ds \relcomp S {\bigcap_{i \mathop \in I} S_i}\)

\(=\)







\(\ds S \setminus \paren {\bigcap_{i \mathop \in I} S_i}\)





Definition of Relative Complement














\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop \in I} \paren {S \setminus S_i}\)





De Morgan's Laws for Set Difference: Difference with Intersection














\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop \in I} \relcomp S {S_i}\)





Definition of Relative Complement



$\blacksquare$


Source of Name
This entry was named for Augustus De Morgan.


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $2$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.4$: Sets of Sets: Exercise $1.4.5 \ \text{(ii)}$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1953: Walter Rudin: Principles of Mathematical Analysis ... (next): $2.22$




