# 

Source: https://proofwiki.org/wiki/Inverse_is_Mapping_implies_Mapping_is_Injection/Proof_1

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let the inverse $f^{-1} \subseteq T \times S$ itself be a mapping.

Then $f$ is an injection.


Proof
Let $f^{-1}: T \to S$ be a mapping.

Let $\map f {x_a} = y$ and $\map f {x_b} = y$.
Then:














\(\ds \tuple {x_a, y}\)

\(\in\)







\(\ds f\)





Definition of Mapping












\(\, \ds \land \, \)

\(\ds \tuple {x_b, y}\)

\(\in\)







\(\ds f\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x_a}\)

\(\in\)







\(\ds f^{-1}\)





Definition of Inverse of Mapping












\(\, \ds \land \, \)

\(\ds \tuple {y, x_b}\)

\(\in\)







\(\ds f^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds x_a\)

\(=\)







\(\ds x_b\)





Definition 4 of Mapping: $f^{-1}$ is many-to-one



Thus, by definition, $f$ is an injection.
$\blacksquare$





