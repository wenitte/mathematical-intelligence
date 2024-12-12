# 

Source: https://proofwiki.org/wiki/Class_Difference_of_B_with_Class_Difference_of_A_with_B

Theorem
Let $A$ and $B$ be classes.

Then:

$B \setminus \paren {A \setminus B} = B$
where $S \setminus T$ denotes class difference.


Proof













\(\ds \)

\(\)







\(\ds x \in B \setminus \paren {A \setminus B}\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in B \land x \notin \paren {A \setminus B}\)





Definition of Class Difference














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in B \land \paren {x \notin A \lor x \in B}\)





De Morgan's Laws














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in B \land x \notin A} \lor \paren {x \in B \land x \in B}\)





Conjunction is Left Distributive over Disjunction














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in B \land x \notin A} \lor x \in B\)





Rule of Idempotence: Conjunction














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in B\)





Disjunction Absorbs Conjunction














\(\ds \)

\(\leadsto\)







\(\ds B \setminus \paren {A \setminus B} = B\)





Definition of Class Equality



$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 5$ The union axiom: Exercise $5.6. \ \text {(d)}$




