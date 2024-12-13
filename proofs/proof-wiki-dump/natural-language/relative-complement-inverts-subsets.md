# 

Source: https://proofwiki.org/wiki/Relative_Complement_inverts_Subsets



Theorem
Let $S$ be a set.
Let $A \subseteq S, B \subseteq S$ be subsets of $S$.

Then:

$A \subseteq B \iff \relcomp S B \subseteq \relcomp S A$
where $\complement_S$ denotes the complement relative to $S$.


Proof 1













\(\ds A\)

\(\subseteq\)







\(\ds B\)














\(\ds \leadstoandfrom \ \ \)





\(\ds A \cap B\)

\(=\)







\(\ds A\)





Intersection with Subset is Subset‎








\(\ds \leadstoandfrom \ \ \)





\(\ds \relcomp S {A \cap B}\)

\(=\)







\(\ds \relcomp S A\)





Relative Complement of Relative Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds \relcomp S A \cup \relcomp S B\)

\(=\)







\(\ds \relcomp S A\)





De Morgan's Laws: Relative Complement of Intersection








\(\ds \leadstoandfrom \ \ \)





\(\ds \relcomp S B\)

\(\subseteq\)







\(\ds \relcomp S A\)





Union with Superset is Superset



$\blacksquare$


Proof 2
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


Also known as
This result can be referred to by saying that:

the subset operation is inclusion-inverting
the relative complement operation, considered as a mapping on the ordered structure $\struct {S, \subseteq}$, is decreasing


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Exercise $3.3 \ \text{(e)}$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.2$: Operations on Sets: Exercise $1.2.2 \ \text{(ii)}$
Mizar article SUBSET_1:12




