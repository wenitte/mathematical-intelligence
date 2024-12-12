# 

Source: https://proofwiki.org/wiki/Boolean_Prime_Ideal_Theorem/Element_Extension_Lemma

Theorem
Let $\struct {B, \vee, \wedge, \le}$ be a Boolean lattice.
Let $F \subseteq B$ be a filter on $B$.
Let $a, x \in B$ such that:

$a \notin F$

Then either:

$a \vee x \notin F$
or:

$a \vee \neg x \notin F$


Proof
Aiming for a contradiction, suppose that both:

$a \vee x \in F$
and:

$a \vee \neg x \in F$
Then:














\(\ds F\)

\(\ni\)







\(\ds \paren {a \vee x} \wedge \paren {a \vee \neg x}\)





Filter is Closed under Meet














\(\ds \)

\(=\)







\(\ds \paren {a \wedge \paren {a \vee \neg x} } \vee \paren {x \wedge \paren {a \vee \neg x} }\)





Distributive Lattice Axiom $\paren {1'}$














\(\ds \)

\(=\)







\(\ds a \vee \paren {\paren {x \wedge a} \vee \paren {x \wedge \neg x} }\)





Meet Absorbs Join, Distributive Lattice Axiom $\paren 1$














\(\ds \)

\(=\)







\(\ds a \vee \paren {\paren {a \wedge x} \vee \bot}\)





Meet is Commutative, Definition of Complement (Lattice Theory)














\(\ds \)

\(=\)







\(\ds a\)





Definition 2 of Bottom of Lattice, Join Absorbs Meet



which contradicts the hypothesis.
$\blacksquare$





