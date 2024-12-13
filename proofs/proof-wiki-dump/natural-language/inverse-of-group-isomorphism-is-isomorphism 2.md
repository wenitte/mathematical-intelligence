# 

Source: https://proofwiki.org/wiki/Inverse_of_Group_Isomorphism_is_Isomorphism



Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups.
Let $\phi: \struct {G, \circ} \to \struct {H, *}$ be a mapping.

Then $\phi$ is an isomorphism if and only if $\phi^{-1}: \struct {H, *} \to \struct {G, \circ}$ is also an isomorphism.


Proof 1
A specific instance of Inverse of Algebraic Structure Isomorphism is Isomorphism.
$\blacksquare$


Proof 2
Necessary Condition
Let $\phi: G \to H$ be an isomorphism.
Then by definition $\phi$ is a bijection.
From Bijection iff Inverse is Bijection it follows that:

$\exists \phi^{-1}: \struct {H, *} \to \struct {G, \circ}$
such that $\phi^{-1}$ is also a bijection.
Thus:










\(\ds \forall g \in G, h \in H: \, \)



\(\ds \map \phi g = h\)

\(\iff\)







\(\ds \map {\phi^{-1} } h = g\)





Inverse Element of Bijection








\(\ds \leadsto \ \ \)





\(\ds \map \phi {g_1 \circ g_2}\)

\(=\)







\(\ds h_1 * h_2\)





Definition of Morphism Property








\(\ds \leadsto \ \ \)





\(\ds \map {\phi^{-1} } {h_1 * h_2}\)

\(=\)







\(\ds g_1 \circ g_2\)





Inverse Element of Bijection














\(\ds \)

\(=\)







\(\ds \map {\phi^{-1} } {h_1} \circ \map {\phi^{-1} } {h_2}\)










So $\phi^{-1}: \struct {H, *} \to \struct {G, \circ}$ is a homomorphism.
$\phi^{-1}$ is also (from above) a bijection.
Thus, by definition, $\phi^{-1}$ is an isomorphism.
$\Box$


Sufficient Condition
Let $\phi^{-1}: \struct {H, *} \to \struct {G, \circ}$ be an isomorphism.
Applying the same result as above in reverse, we have that $\paren {\phi^{-1} }^{-1}: \struct {G, \circ} \to \struct {H, *}$ is also an isomorphism.
But by Inverse of Inverse of Bijection:

$\paren {\phi^{-1} }^{-1} = \phi$
and hence the result.
$\blacksquare$





