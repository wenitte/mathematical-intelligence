# 

Source: https://proofwiki.org/wiki/Indexed_Summation_over_Interval_of_Length_One

Theorem
Let $\mathbb A$ be one of the standard number systems $\N, \Z, \Q, \R, \C$.
Let $a \in \Z$ be an integer.
Let $f: \set a \to \mathbb A$ be a mapping on the singleton $\set a$.

Then the indexed summation:

$\ds \sum_{i \mathop = a}^a \map f i = \map f a$


Proof
We have:














\(\ds \sum_{i \mathop = a}^a \map f i\)

\(=\)







\(\ds \sum_{i \mathop = a}^{a - 1} \map f i + \map f a\)





Definition of Indexed Summation














\(\ds \)

\(=\)







\(\ds 0 + \map f a\)





Definition of Indexed Summation, $a - 1 < a$














\(\ds \)

\(=\)







\(\ds \map f a\)





Identity Element of Addition on Numbers



$\blacksquare$


Also see
Indexed Summation over Interval of Length Two
Summation over Singleton Set




