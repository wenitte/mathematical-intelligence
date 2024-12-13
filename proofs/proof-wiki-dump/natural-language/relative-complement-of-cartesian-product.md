# 

Source: https://proofwiki.org/wiki/Relative_Complement_of_Cartesian_Product



Theorem
Let $A$ and $B$ be sets.
Let $X \subseteq A$ and $Y \subseteq B$.

Then:

$\relcomp {A \mathop \times B} {X \times Y} = \paren {A \times \relcomp B Y} \cup \paren {\relcomp A X \times B}$


Proof 1
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


Proof 2













\(\ds \)

\(\)







\(\ds \relcomp {A \mathop \times B} {X \times Y}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds A \times B \setminus X \times Y\)





Definition of Relative Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \set {\tuple {x, y}: x \in A \land y \in B \land \neg \paren {x \in X \land y \in Y} }\)





Definition of Cartesian Product








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \set {\tuple {x, y}: x \in A \land y \in B \land \paren {x \notin X \lor y \notin Y} }\)





De Morgan's Laws: Disjunction of Negations








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \paren {A \times \relcomp B Y} \cup \paren {\relcomp A X \times B}\)





Definition of Cartesian Product



and so by definition of set equality:

$\relcomp {A \mathop \times B} {X \times Y} = \paren {A \times \relcomp B Y} \cup \paren {\relcomp A X \times B}$
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 5$: Products of Sets: Exercise $1$




