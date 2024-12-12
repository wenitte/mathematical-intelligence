# 

Source: https://proofwiki.org/wiki/Additive_Function_is_Strongly_Additive/Proof_2

Theorem
Let $\SS$ be an algebra of sets.
Let $f: \SS \to \overline \R$ be an additive function on $\SS$.

Then $f$ is also strongly additive.
That is:

$\forall A, B \in \SS: \map f {A \cup B} + \map f {A \cap B} = \map f A + \map f B$


Proof
Recall that $\sqcup$ denotes the disjoint union.

First, since:














\(\ds A \cup B\)

\(=\)







\(\ds A \cup \paren {B \setminus A}\)





Set Difference Union Second Set is Union














\(\ds \)

\(=\)







\(\ds A \sqcup \paren {B \setminus A}\)





in view of Definition of Set Difference



we have:

$\paren 1 : \quad \map f {A \cup B} = \map f A + \map f {B \setminus A}$

Secondly, since














\(\ds B\)

\(=\)







\(\ds \paren {B \setminus A} \cup \paren {A \cap B}\)





Set Difference Union Intersection














\(\ds \)

\(=\)







\(\ds \paren {B \setminus A} \sqcup \paren {A \cap B}\)





Set Difference and Intersection are Disjoint



we have:

$\paren 2 : \quad \map f B = \map f {B \setminus A} + \map f {A \cap B}$

On the other hand:














\(\ds A \cup B\)

\(=\)







\(\ds \paren {A \cap B} \cup \paren {A \cup B}\)





as $A \cap B \subseteq A \cup B$














\(\ds \)

\(=\)







\(\ds \paren {A \cap B} \cup \paren { \paren {A \cup B} \setminus \paren {A \cap B } }\)





Set Difference Union Second Set is Union














\(\ds \)

\(=\)







\(\ds \paren {A \cap B} \sqcup \paren { \paren {A \cup B} \setminus \paren {A \cap B } }\)





in view of Definition of Set Difference



so that:

$\map f {A \cup B} = \map f {A \cap B} + \map f {\paren {A \cup B} \setminus \paren {A \cap B} }$
In particular, we have neither:

$\map f {A \cup B} = + \infty \land \map f {A \cap B} = - \infty$
nor:

$\map f {A \cup B} = - \infty \land \map f {A \cap B} = + \infty$
Thus the sum in $\overline {\R}$:

$\map f {A \cup B} + \map f {A \cap B}$
is well-defined.

Finally:














\(\ds \map f {A \cup B} + \map f {A \cap B}\)

\(=\)







\(\ds \map f A + \map f {B \setminus A} + \map f {A \cap B}\)





by $\paren 1$














\(\ds \)

\(=\)







\(\ds \map f A + \map f B\)





by $\paren 2$



$\blacksquare$





