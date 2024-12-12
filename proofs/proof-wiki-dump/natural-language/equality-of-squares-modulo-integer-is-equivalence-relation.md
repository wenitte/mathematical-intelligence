# 

Source: https://proofwiki.org/wiki/Equality_of_Squares_Modulo_Integer_is_Equivalence_Relation



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $\RR_n$ be the relation on the set of integers $\Z$ defined as:

$\forall x, y \in \Z: x \mathrel {\RR_n} y \iff x^2 \equiv y^2 \pmod n$
Then $\RR_n$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
We have that for all $x \in \Z$:

$x^2 \equiv x^2 \pmod n$
It follows by definition of $\RR_n$ that:

$x \mathrel {\RR_n} x$
Thus $\RR_n$ is seen to be reflexive.
$\Box$


Symmetry













\(\ds x\)

\(\RR_n\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x^2\)

\(\equiv\)







\(\ds y^2\)

\(\ds \pmod n\)












\(\ds \leadsto \ \ \)





\(\ds y^2\)

\(\equiv\)







\(\ds x^2\)

\(\ds \pmod n\)












\(\ds \leadsto \ \ \)





\(\ds y\)

\(\RR_n\)







\(\ds x\)









Thus $\RR_n$ is seen to be symmetric.
$\Box$


Transitivity
Let:

$x \mathrel {\RR_n} y$ and $y \mathrel {\RR_n} z$
for $x, y, z \in \Z$.
Then by definition:














\(\ds x^2\)

\(\equiv\)







\(\ds y^2\)

\(\ds \pmod n\)


















\(\ds y^2\)

\(\equiv\)







\(\ds z^2\)

\(\ds \pmod n\)












\(\ds \leadsto \ \ \)





\(\ds x^2\)

\(\equiv\)







\(\ds z^2\)

\(\ds \pmod n\)












\(\ds \leadsto \ \ \)





\(\ds x\)

\(\RR_n\)







\(\ds z\)









Thus $\RR_n$ is seen to be transitive.
$\Box$

$\RR_n$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$





