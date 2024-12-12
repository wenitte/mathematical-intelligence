# 

Source: https://proofwiki.org/wiki/Difference_is_Rational_is_Equivalence_Relation



Theorem
Define $\sim$ as the relation on real numbers given by:

$x \sim y \iff x - y \in \Q$
That is, that the difference between $x$ and $y$ is rational.

Then $\sim$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexive













\(\ds \)

\(\)







\(\ds \forall x \in \R: x - x = 0 \in \Q\)




















\(\ds \)

\(\leadsto\)







\(\ds x \sim x\)









So $\sim$ is reflexive.
$\Box$


Symmetric













\(\ds x\)

\(\sim\)







\(\ds y\)




















\(\ds \)

\(\leadsto\)







\(\ds x - y \in \Q\)




















\(\ds \)

\(\leadsto\)







\(\ds x - y = \frac p q\)





for some integers $p, q$














\(\ds \)

\(\leadsto\)







\(\ds -\paren {x - y} = \frac {-p} q\)





Definition of Diagonal Relation














\(\ds \)

\(\leadsto\)







\(\ds y - x \in \Q\)





as $-p$ is an integer














\(\ds \)

\(\leadsto\)







\(\ds y \sim x\)









So $\sim$ is symmetric.
$\Box$


Transitive













\(\ds \)

\(\)







\(\ds \forall x, y, z \in \R: x \sim y \land y \sim z\)




















\(\ds \)

\(\implies\)







\(\ds x - y = \frac p q \land y - z = \frac r s\)





for some integers $p, q, r, s$














\(\ds \)

\(\leadsto\)







\(\ds x - z = \frac p q - \frac r s\)





adding the second equality to the first














\(\ds \)

\(=\)







\(\ds \frac {s p - q r} {q s} \in \Q\)





as $s p - q r$ and $q s$ are integers














\(\ds \)

\(\leadsto\)







\(\ds x \sim z\)









So $\sim$ is transitive.
$\Box$

Thus $\sim$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$





