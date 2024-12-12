# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Symmetric_Difference



Theorem
Let $S$ and $T$ be sets.
The following definitions of the concept of symmetric difference $S \symdif T$ between $S$ and $T$ are equivalent:

Definition 1
$S \symdif T := \paren {S \setminus T} \cup \paren {T \setminus S}$
Definition 2
$S \symdif T = \paren {S \cup T} \setminus \paren {S \cap T}$
Definition 3
$S \symdif T = \paren {S \cap \overline T} \cup \paren {\overline S \cap T}$
Definition 4
$S \symdif T = \paren {S \cup T}\cap \paren {\overline S \cup \overline T}$
Definition 5
$S \symdif T := \set {x: x \in S \oplus x \in T}$


Proof
$(1)$ iff $(2)$













\(\ds S \symdif T\)

\(=\)







\(\ds \paren {S \setminus T} \cup \paren {T \setminus S}\)





Definition 1 of Symmetric Difference














\(\ds \)

\(=\)







\(\ds \paren {\paren {S \cup T} \setminus T} \cup \paren {\paren {S \cup T} \setminus S}\)





Set Difference with Union is Set Difference














\(\ds \)

\(=\)







\(\ds \paren {S \cup T} \setminus \paren {T \cap S}\)





De Morgan's Laws: Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren {S \cup T} \setminus \paren {S \cap T}\)





Intersection is Commutative



$\Box$


$(1)$ iff $(3)$













\(\ds S \symdif T\)

\(=\)







\(\ds \paren {S \setminus T} \cup \paren {T \setminus S}\)





Definition 1 of Symmetric Difference














\(\ds \)

\(=\)







\(\ds \paren {S \cap \overline T} \cup \paren {\overline S \cap T}\)





Set Difference as Intersection with Complement



$\Box$


$(2)$ iff $(4)$













\(\ds S \symdif T\)

\(=\)







\(\ds \paren {S \cup T} \setminus \paren {S \cap T}\)





Definition 2 of Symmetric Difference














\(\ds \)

\(=\)







\(\ds \paren {S \cup T} \cap \paren {\overline {S \cap T} }\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \paren {S \cup T} \cap \paren {\overline S \cup \overline T}\)





De Morgan's Laws: Complement of Intersection



$\Box$


$(2)$ iff $(5)$













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
$\Box$


$(3)$ iff $(5)$













\(\ds \)

\(\)







\(\ds x \in S \symdif T\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in S \oplus x \in T\)





Definition 5 of Symmetric Difference














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {\neg \paren {x \in S} \land \paren {x \in T} } \lor \paren {\paren {x \in S} \land \neg \paren {x \in T} }\)





Non-Equivalence as Disjunction of Conjunctions














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in \overline S \land x \in T} \lor \paren {x \in S \land x \in \overline T}\)





Definition of Set Complement














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in \overline S \cup T} \lor \paren {x \in S \cup \overline T}\)





Definition of Set Intersection














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in \paren {\overline S \cup T} \cup \paren {S \cup \overline T}\)





Definition of Set Union














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in \paren {S \cup \overline T} \cup \paren {\overline S \cup T}\)





Union is Commutative



The result follows by definition of set equality.
$\blacksquare$





