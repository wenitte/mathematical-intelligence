# 

Source: https://proofwiki.org/wiki/Inclusion_Mapping_on_Subring_is_Homomorphism

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\struct {S, +{\restriction_S}, \circ {\restriction_S}}$ be a subring of $R$.
Let $i_S: S \to R$ be the inclusion mapping from $S$ to $R$.

Then ${i_S}$ is a ring homomorphism.


Proof
Let $x, y \in S$.
Then:














\(\ds \map {i_S} x + \map {i_S} y\)

\(=\)







\(\ds x + y\)





Definition of Inclusion Mapping














\(\ds \)

\(=\)







\(\ds x \mathbin{ + {\restriction_S} } y\)





as $x, y \in S$














\(\ds \)

\(=\)







\(\ds \map {i_S} {x \mathbin{ + {\restriction_S} } y}\)





as $x \mathbin{ + {\restriction_S} } y \in S$



and:














\(\ds \map {i_S} x \circ \map {i_S} y\)

\(=\)







\(\ds x \circ y\)





Definition of Inclusion Mapping














\(\ds \)

\(=\)







\(\ds x \mathbin{\circ {\restriction_S} } y\)





as $x, y \in S$














\(\ds \)

\(=\)







\(\ds \map {i_S} {x \mathbin{ \circ {\restriction_S} } y}\)





as $x \mathbin{ \circ {\restriction_S} } y \in S$



Hence ${i_S}$ is a ring homomorphism by definition.
$\blacksquare$





