# 

Source: https://proofwiki.org/wiki/Relative_Complement_of_Cartesian_Product/Proof_1

Theorem
Let $A$ and $B$ be sets.
Let $X \subseteq A$ and $Y \subseteq B$.

Then:

$\relcomp {A \mathop \times B} {X \times Y} = \paren {A \times \relcomp B Y} \cup \paren {\relcomp A X \times B}$


Proof
From Set with Relative Complement forms Partition:

$A = \set {X \mid \relcomp A X}$
$B = \set {Y \mid \relcomp B Y}$
and so by definition of partition:

$A = X \cup \relcomp A X$
$B = Y \cup \relcomp B Y$

By Cartesian Product of Unions:

$A \times B = \paren {X \times Y} \cup \paren {\relcomp A X \times \relcomp B Y} \cup \paren {X \times \relcomp B Y} \cup \paren {\relcomp A X \times Y}$
and so:














\(\ds \paren {A \times B} \setminus \paren {X \times Y}\)

\(=\)







\(\ds \paren {\relcomp A X \times \relcomp B Y} \cup \paren {X \times \relcomp B Y} \cup \paren {\relcomp A X \times Y}\)




















\(\ds \)

\(=\)







\(\ds \paren {X \times \relcomp B Y} \cup \paren {\relcomp A X \times \relcomp B Y} \cup \paren {\relcomp A X \times Y} \cup \paren {\relcomp A X \times \relcomp B Y}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {X \cup \relcomp A X} \times \relcomp B Y} \cup \paren {\relcomp A X \times \paren {Y \cup \relcomp B Y} }\)




















\(\ds \)

\(=\)







\(\ds \paren {A \times \relcomp B Y} \cup \paren {\relcomp A X \times B}\)









$\blacksquare$



This article needs to be linked to other articles.In particular: Justification for the steps aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.




