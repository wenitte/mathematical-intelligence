# 

Source: https://proofwiki.org/wiki/Identity_of_Inverse_Completion_of_Commutative_Monoid

Theorem
Let $\struct {S, \circ}$ be a commutative monoid whose identity is $e$.
Let $\struct {C, \circ} \subseteq \struct {S, \circ}$ be the subsemigroup of cancellable elements of $\struct {S, \circ}$.
Let $\struct {T, \circ'}$ be an inverse completion of $\struct {S, \circ}$.

Then $e \in T$ is the identity for $\circ'$.


Proof
Let $e$ be the identity for $\circ$.
Let $e = x \circ' y^{-1}$, where $x \in S, y \in C$.

Then:














\(\ds y\)

\(=\)







\(\ds e \circ y\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {x \circ' y^{-1} } \circ' y\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds x \circ' \paren {y^{-1} \circ' y}\)





$\circ'$ is associative














\(\ds \)

\(=\)







\(\ds x \circ' e\)





Definition of Inverse Element




Thus $e = y^{-1} \circ' y$, and $y^{-1} \circ' y$ is the identity for $\circ'$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers: Theorem $20.1: \ 4^\circ$




