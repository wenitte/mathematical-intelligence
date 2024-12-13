# 

Source: https://proofwiki.org/wiki/Relative_Complement_of_Cartesian_Product/Proof_2

Theorem
Let $A$ and $B$ be sets.
Let $X \subseteq A$ and $Y \subseteq B$.

Then:

$\relcomp {A \mathop \times B} {X \times Y} = \paren {A \times \relcomp B Y} \cup \paren {\relcomp A X \times B}$


Proof













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





