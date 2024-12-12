# 

Source: https://proofwiki.org/wiki/Boolean_Prime_Ideal_Theorem/Extension_Lemma

Theorem
Let $\struct {B, \vee, \wedge, \le}$ be a Boolean lattice.
Let $F \subseteq B$ be a filter.
Let $J \subseteq B$ have the finite join property with respect to $F$.
Let $z \in B$.

Then either $J \cup \set z$ or $J \cup \set {\neg z}$ also has the finite join property with respect to $F$.


Proof
Aiming for a contradiction, suppose that neither $J \vee z$ nor $J \vee \neg z$ has the finite join property with respect to $F$.
Then there are $x_1, \dots, x_n, y_1, \dots, y_m \in J$ such that $x_1 \vee \dots \vee x_n \vee z \in F$ and $y_1 \vee \dots \vee y_m \vee \neg z \in F$.
Let $q = x_1 \vee \dots \vee x_n \vee y_1 \vee \dots \vee y_m$.
Then, by Join Succeeds Operands:

$x_1 \vee \dots \vee x_n \le q$
$y_1 \vee \dots \vee y_m \le q$
and so:

$q \vee z \in F$
$q \vee \neg z \in F$
by filter axiom $\paren 3$.
Thus:














\(\ds F\)

\(\ni\)







\(\ds \paren {q \vee z} \wedge \paren {q \vee \neg z}\)





Filter is Closed under Meet














\(\ds \)

\(=\)







\(\ds \paren {q \wedge \paren {q \vee \neg z} } \vee \paren {z \wedge \paren {q \vee \neg z} }\)





Distributive Lattice Axiom $\paren {1'}$














\(\ds \)

\(=\)







\(\ds q \vee \paren {\paren {q \wedge z} \vee \paren {\neg z \wedge z} }\)





Meet Absorbs Join, Meet is Commutative, Distributive Lattice Axiom $\paren {1'}$














\(\ds \)

\(=\)







\(\ds q \vee \paren {q \wedge z}\)





Definition of Complement, Definition 2 of Bottom of Lattice














\(\ds \)

\(=\)







\(\ds q\)





Join Absorbs Meet



This contradicts the fact that $J$ has the finite join property.
$\blacksquare$





