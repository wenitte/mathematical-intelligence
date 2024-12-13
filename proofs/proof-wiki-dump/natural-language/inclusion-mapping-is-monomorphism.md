# 

Source: https://proofwiki.org/wiki/Inclusion_Mapping_is_Monomorphism

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\struct {T, \circ}$ be an algebraic substructure of $S$.
Let $\iota: T \to S$ be the inclusion mapping from $T$ to $S$.

Then $\iota$ is a monomorphism.


Proof
We have that the inclusion mapping is an injection.
Now let $x, y \in T$:














\(\ds \map \iota {x \circ y}\)

\(=\)







\(\ds x \circ y\)





Definition of Inclusion Mapping














\(\ds \)

\(=\)







\(\ds \map \iota x \circ \map \iota y\)





Definition of Inclusion Mapping



demonstrating that $\iota$ has the morphism property.
So $\iota$ is a homomorphism which is also an injection.
Thus by definition, $\iota$ is a monomorphism.
$\blacksquare$





