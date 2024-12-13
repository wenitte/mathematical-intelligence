# 

Source: https://proofwiki.org/wiki/Relative_Complement_inverts_Subsets/Proof_2



Theorem
Let $S$ be a set.
Let $A \subseteq S, B \subseteq S$ be subsets of $S$.

Then:

$A \subseteq B \iff \relcomp S B \subseteq \relcomp S A$
where $\complement_S$ denotes the complement relative to $S$.


Proof
Sufficient Condition
Let $A \subseteq B$.
Then:














\(\ds x\)

\(\in\)







\(\ds \relcomp S B\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds S \setminus B\)





Definition of Relative Complement








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\notin\)







\(\ds B\)





Definition of Set Difference








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\notin\)







\(\ds A\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds S \setminus A\)





Definition of Set Difference








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \relcomp S A\)





Definition of Relative Complement








\(\ds \leadsto \ \ \)





\(\ds \relcomp S B\)

\(\subseteq\)







\(\ds \relcomp S A\)





Definition of Subset



$\Box$


Necessary Condition













\(\ds \relcomp S B\)

\(\subseteq\)







\(\ds \relcomp S A\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp S {\relcomp S A}\)

\(\subseteq\)







\(\ds \relcomp S {\relcomp S B}\)





from Sufficient Condition








\(\ds \leadsto \ \ \)





\(\ds A\)

\(\subseteq\)







\(\ds B\)





Relative Complement of Relative Complement



$\blacksquare$





