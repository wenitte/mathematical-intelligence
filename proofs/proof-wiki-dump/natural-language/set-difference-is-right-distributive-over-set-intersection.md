# 

Source: https://proofwiki.org/wiki/Set_Difference_is_Right_Distributive_over_Set_Intersection



Theorem
Let $A, B, C$ be sets.
Then:

$\paren {A \cap B} \setminus C = \paren {A \setminus C} \cap \paren {B \setminus C}$
where:

$A \cap B$ denotes set intersection
$A \setminus C$ denotes set difference.

That is, set difference is right distributive over set intersection.


Illustration by Venn Diagram
 


General Case
Let $U$ be a collection of sets.
Let $T$ be a set.

Then:

$\ds \bigcap_{X \mathop \in U} \paren {X \setminus T} = \paren {\bigcap_{X \mathop \in U} X} \setminus T$
That is, the difference with an intersection equals the intersection of the differences.


Proof 1
Consider $A, B, C \subseteq \mathbb U$, where $\mathbb U$ is considered as the universal set.















\(\ds \paren {A \cap B} \setminus C\)

\(=\)







\(\ds \paren {A \cap B} \cap \map \complement C\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \paren {A \cap B} \cap \paren {\map \complement C \cap \map \complement C}\)





Set Intersection is Idempotent














\(\ds \)

\(=\)







\(\ds \paren {A \cap \map \complement C} \cap \paren {B \cap \map \complement C}\)





Intersection is Associative and Intersection is Commutative














\(\ds \)

\(=\)







\(\ds \paren {A \setminus C} \cap \paren {B \setminus C}\)





Set Difference as Intersection with Complement



$\blacksquare$


Proof 2













\(\ds x\)

\(\in\)







\(\ds \paren {A \cap B} \setminus C\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds A \land x \in B\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds x\)

\(\notin\)







\(\ds C\)





Definition of Set Difference








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds A \land x \in B\)





Rule of Idempotence












\(\, \ds \land \, \)

\(\ds x\)

\(\notin\)







\(\ds C \land x \notin C\)





Rule of Idempotence








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds A\)





Rule of Association












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds x \in B \land x \notin C\)


















\(\, \ds \land \, \)

\(\ds x\)

\(\notin\)







\(\ds C\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds A\)


















\(\, \ds \land \, \)

\(\ds x\)

\(\notin\)







\(\ds C \land x \in B\)





Rule of Commutation












\(\, \ds \land \, \)

\(\ds x\)

\(\notin\)







\(\ds C\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds A \land x \notin C\)





Rule of Association












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds B \land x \notin C\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \paren {A \setminus C}\)





Definition of Set Difference












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds \paren {B \setminus C}\)





Definition of Set Difference








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \paren {A \setminus C} \cap \paren {B \setminus C}\)





Definition of Set Intersection



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Exercise $3.4 \ \text{(b)}$




