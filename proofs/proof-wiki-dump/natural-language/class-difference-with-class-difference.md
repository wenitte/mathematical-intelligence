# 

Source: https://proofwiki.org/wiki/Class_Difference_with_Class_Difference



Theorem
Let $A$ and $B$ be classes.
Then:

$A \setminus \paren {A \setminus B} = A \cap B$


Proof













\(\ds \)

\(\)







\(\ds x \in A \setminus \paren {A \setminus B}\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in A \land x \notin \paren {A \setminus B}\)





Definition of Class Difference














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in A \land \lnot \paren {x \in A \land x \notin B}\)





Definition of Class Difference














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in A \land \paren {x \notin A \lor x \in B}\)





De Morgan's Laws














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in A \land x \notin A} \lor \paren {x \in A \land x \in B}\)





Conjunction is Left Distributive over Disjunction














\(\ds \)

\(\leadstoandfrom\)







\(\ds \bot \lor \paren {x \in A \land x \in B}\)





Definition of Contradiction














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in A \land x \in B\)





Disjunction with Contradiction














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in \paren {A \cap B}\)





Definition of Class Intersection














\(\ds \)

\(\leadsto\)







\(\ds A \setminus \paren {A \setminus B} = \paren {A \cap B}\)





Definition of Class Equality



$\blacksquare$


Also see
Set Difference with Set Difference


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 5$ The union axiom: Exercise $5.6. \ \text {(c)}$




