# 

Source: https://proofwiki.org/wiki/Class_Member_of_Class_Builder



Theorem
Let $A$ be a class.
Let $x$ be a set.

Let $\map P x$ be a well-formed formula in the language of set theory.
Let $\map P A$ denote the formula $\map P x$ with all free instances of $x$ replaced with instances of $A$.
Let $\set {x: \map P x}$ be a class specified using class builder notation.

Then:

$A \in \set {x: \map P x} \iff \paren {\exists x: x = A \land \map P A}$


Proof













\(\ds A\)

\(\in\)

\(\, \ds \leftset x \, \)

\(\, \ds : \, \)



\(\ds \rightset {\map P x}\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in \set {x: \map P x}: \, \)



\(\ds A\)

\(=\)

\(\, \ds x \, \)





\(\ds \)





Definition of Class (Zermelo-Fraenkel)








\(\ds \leadsto \ \ \)

\(\ds \exists x: \, \)



\(\ds x\)

\(=\)

\(\, \ds A \, \)

\(\, \ds \land \, \)



\(\ds \map P x\)





Definition of Bounded Existential Quantifier








\(\ds \leadsto \ \ \)

\(\ds \exists x: \, \)



\(\ds x\)

\(=\)

\(\, \ds A \, \)

\(\, \ds \land \, \)



\(\ds \map P A\)





Substitutivity of Class Equality



$\blacksquare$


Also see
Set Definition by Predicate


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 4.12$




