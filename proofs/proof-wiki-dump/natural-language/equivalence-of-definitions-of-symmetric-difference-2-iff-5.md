# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Symmetric_Difference/(2)_iff_(5)



Theorem
Let $S$ and $T$ be sets.
The following definitions of the concept of symmetric difference $S \symdif T$ between $S$ and $T$ are equivalent:

Definition 2
$S \symdif T = \paren {S \cup T} \setminus \paren {S \cap T}$
Definition 5
$S \symdif T := \set {x: x \in S \oplus x \in T}$


Proof













\(\ds \)

\(\)







\(\ds x \in S \symdif T\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in S \oplus x \in T\)





Definition 5 of Symmetric Difference














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in S \lor x \in T} \land \neg \paren {x \in S \land x \in T}\)





Definition of Exclusive Or














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in S \cup T} \land \paren {x \notin S \cap T}\)





Definition of Set Intersection and Definition of Set Union














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in \paren {S \cup T} \setminus \paren {S \cap T}\)





Definition of Set Difference



The result follows by definition of set equality.
$\blacksquare$





