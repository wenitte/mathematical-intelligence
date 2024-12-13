# 

Source: https://proofwiki.org/wiki/Intersection_With_Singleton_is_Disjoint_if_Not_Element

Theorem
Let $S$ be a set.
Let $\set x$ be the singleton of $x$.

Then:

$x \notin S$ if and only if $\set x \cap S = \O$


Proof













\(\ds \)

\(\)







\(\ds \set x \cap S = \O\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall y: \, \)



\(\ds \)

\(\)







\(\ds \lnot \paren {y \in \set x \cap S}\)





Definition of Empty Set








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall y: \, \)



\(\ds \)

\(\)







\(\ds \lnot \paren {y \in \set x \land y \in S}\)





Definition of Set Intersection








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall y: \, \)



\(\ds \)

\(\)







\(\ds \lnot \paren {y \in \set x \land \lnot \lnot \paren {y \in S} }\)





Double Negation Introduction








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall y: \, \)



\(\ds \)

\(\)







\(\ds y \in \set x \implies \lnot \paren {y \in S}\)





Conditional is Equivalent to Negation of Conjunction with Negative








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall y: \, \)



\(\ds \)

\(\)







\(\ds y \in \set x \implies y \notin S\)





Definition of Not Element








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall y: \, \)



\(\ds \)

\(\)







\(\ds y = x \implies y \notin S\)





Definition of Singleton








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds x \notin S\)





Definition of Equality



$\blacksquare$





