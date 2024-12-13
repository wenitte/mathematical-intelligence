# 

Source: https://proofwiki.org/wiki/Set_Difference_of_Doubleton_and_Singleton_is_Singleton

Theorem
Let $x, y$ be distinct objects.

Then:

$\set{x, y} \setminus \set x = \set y$


Proof













\(\ds \set {x, y} \setminus \set x\)

\(=\)







\(\ds \set {z: z \in \set {x, y} \land z \notin \set x}\)





Definition of Set Difference














\(\ds \)

\(=\)







\(\ds \set {z: \paren {z = x \lor z = y} \land z \notin \set x}\)





Definition of Doubleton














\(\ds \)

\(=\)







\(\ds \set {z: \paren {z = x \lor z = y} \land z \ne x}\)





Definition of Singleton














\(\ds \)

\(=\)







\(\ds \set {z: \paren {z = x \land z \ne x} \lor \paren {z = y \land z \ne x} }\)





Conjunction Distributes over Disjunction














\(\ds \)

\(=\)







\(\ds \set {z: \bot \lor \paren {z = y \land z \ne x} }\)





Definition of Contradiction














\(\ds \)

\(=\)







\(\ds \set {z: \paren {z = y \land z \ne x} }\)





Disjunction with Contradiction














\(\ds \)

\(=\)







\(\ds \set {z : z = y}\)





Rule of Simplification














\(\ds \)

\(=\)







\(\ds \set y\)





Definition of Singleton



$\blacksquare$





