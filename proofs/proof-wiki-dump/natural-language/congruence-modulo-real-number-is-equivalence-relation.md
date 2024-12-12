# 

Source: https://proofwiki.org/wiki/Congruence_Modulo_Real_Number_is_Equivalence_Relation



Theorem
For all $z \in \R$, congruence modulo $z$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexive
We have that Equal Numbers are Congruent:

$\forall x, y, z \in \R: x = y \implies x \equiv y \pmod z$
so it follows that:

$\forall x \in \R: x \equiv x \pmod z$
and so congruence modulo $z$ is reflexive.
$\Box$


Symmetric













\(\ds x\)

\(\equiv\)







\(\ds y \pmod z\)














\(\ds \leadsto \ \ \)





\(\ds x - y\)

\(=\)







\(\ds k z\)














\(\ds \leadsto \ \ \)





\(\ds y - x\)

\(=\)







\(\ds \paren {-k} z\)




















\(\ds y\)

\(\equiv\)







\(\ds x \pmod z\)









So congruence modulo $z$ is symmetric.
$\Box$


Transitive













\(\ds x_1\)

\(\equiv\)







\(\ds x_2 \pmod z\)














\(\ds \land \ \ \)





\(\ds x_2\)

\(\equiv\)







\(\ds x_3 \pmod z\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x_1 - x_2}\)

\(=\)







\(\ds k_1 z\)














\(\ds \land \ \ \)





\(\ds \paren {x_2 - x_3}\)

\(=\)







\(\ds k_2 z\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x_1 - x_2} + \paren {x_2 - x_3}\)

\(=\)







\(\ds \paren {k_1 + k_2} z\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x_1 - x_3}\)

\(=\)







\(\ds \paren {k_1 + k_2} z\)




















\(\ds x_1\)

\(\equiv\)







\(\ds x_3 \pmod z\)









So congruence modulo $z$ is transitive.
$\Box$

So we are justified in supposing that congruence, as we have defined it, is an equivalence.
$\blacksquare$


Also see
Congruence Modulo Integer is Equivalence Relation, in which context this result is usually encountered


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 7$: Relations




