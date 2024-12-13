# 

Source: https://proofwiki.org/wiki/Inversion_Mapping_is_Isomorphism_from_Ordered_Abelian_Group_to_its_Dual

Theorem
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered Abelian group.
Let $\struct {G, \circ, \succcurlyeq}$ be the dual of $\struct {G, \circ, \preccurlyeq}$.

Let $\phi: \struct {G, \circ, \preccurlyeq} \to \struct {G, \circ, \succcurlyeq}$ be the inversion mapping from $\struct {G, \circ, \preccurlyeq}$ to $\struct {G, \circ, \succcurlyeq}$ defined as:

$\forall x \in G: \map \phi x = x^{-1}$
where $x^{-1}$ denotes the inverse of $x$ in $\struct {G, \circ}$.
Then $\phi$ is an isomorphism.


Proof
$\struct {G, \circ, \preccurlyeq}$ is a fortiori an ordered semigroup.
Hence from Dual of Ordered Semigroup is Ordered Semigroup, $\struct {G, \circ, \succcurlyeq}$ is also an ordered semigroup.
That is, $\succcurlyeq$ is compatible with $\circ$.

From Inversion Mapping is Permutation, a fortiori the inversion mapping is a bijection.
From Inversion Mapping is Automorphism iff Group is Abelian, $\phi: \struct {G, \circ} \to \struct {G, \circ}$ is an automorphism and so a fortiori an isomorphism.

It remains to be shown that  $\phi: \struct {G, \preccurlyeq} \to \struct {G, \succcurlyeq}$ is an order isomorphism.
We note that from Inversion Mapping is Involution that:

$\phi = \phi^{-1}$

Let $x, y \in G$ be arbitrary.
We have:














\(\ds x\)

\(\preccurlyeq\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\succcurlyeq\)







\(\ds x\)





Definition of Dual Ordering








\(\ds \leadsto \ \ \)





\(\ds x^{-1}\)

\(\succcurlyeq\)







\(\ds y^{-1}\)





Inversion Mapping Reverses Ordering in Ordered Group








\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(\succcurlyeq\)







\(\ds \map \phi y\)










Then we have:














\(\ds x\)

\(\succcurlyeq\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\preccurlyeq\)







\(\ds x\)





Definition of Dual Ordering








\(\ds \leadsto \ \ \)





\(\ds x^{-1}\)

\(\preccurlyeq\)







\(\ds y^{-1}\)





Inversion Mapping Reverses Ordering in Ordered Group








\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(\preccurlyeq\)







\(\ds \map \phi y\)














\(\ds \leadsto \ \ \)





\(\ds \map {\phi^{-1} } x\)

\(\preccurlyeq\)







\(\ds \map {\phi^{-1} } y\)





as $\phi = \phi^{-1}$




Hence we have shown that $\phi$ is an order-preserving mapping in both directions.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.3$




