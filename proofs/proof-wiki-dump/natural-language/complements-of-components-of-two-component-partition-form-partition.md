# 

Source: https://proofwiki.org/wiki/Complements_of_Components_of_Two-Component_Partition_form_Partition



Theorem
Let $S$ be a set with at least two elements.
Let $A, B \subseteq S$.
Let $\complement_S$ denote the complement relative to $S$.

$A \mid B$ is a partition of $S$ if and only if $\relcomp S A \mid \relcomp S B$ is a partition of $S$.


Proof
Necessary Condition
Let $A \mid B$ be a partition of $S$.
That is, by definition:

$(1): \quad A \cap B = \O$
$(2): \quad A \cup B = S$
$(3): \quad A, B \ne \O$

Thus:














\(\ds A \cap B\)

\(=\)







\(\ds \O\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp S {A \cap B}\)

\(=\)







\(\ds S\)





Relative Complement of Empty Set








\(\ds \leadsto \ \ \)





\(\ds \relcomp S A \cup \relcomp S B\)

\(=\)







\(\ds S\)





De Morgan's Laws: Complement of Intersection


















\(\ds A \cup B\)

\(=\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp S {A \cup B}\)

\(=\)







\(\ds \O\)





Relative Complement with Self is Empty Set








\(\ds \leadsto \ \ \)





\(\ds \relcomp S A \cap \relcomp S B\)

\(=\)







\(\ds \O\)





De Morgan's Laws: Complement of Union




Without loss of generality, now suppose that $\relcomp S A = \O$.














\(\ds \relcomp S A\)

\(=\)







\(\ds \O\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds S\)





Relative Complement of Empty Set








\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \O\)





as $A \cap B = \O$



Thus by Rule of Transposition:

$B \ne \O \implies \relcomp S A \ne \O$
Mutatis mutandis:

$A \ne \O \implies \relcomp S B \ne \O$

by hypothesis:

$A, B \ne \O$
and so:

$\relcomp S A, \relcomp S B \ne \O$

Thus all three conditions are satisfied for $\relcomp S A \mid \relcomp S B$ to be a partition of $S$.
$\Box$


Sufficient Condition
Let $\relcomp S A \mid \relcomp S B$ be a partition of $S$.
By the necessary condition, it follows that $\relcomp S {\relcomp S A} \mid \relcomp S {\relcomp S B}$ is a partition of $S$.
From Relative Complement of Relative Complement:

$\relcomp S {\relcomp S A} = A$ and $\relcomp S {\relcomp S B} = B$
and so $A \mid B$ is a partition of $S$.
$\blacksquare$





