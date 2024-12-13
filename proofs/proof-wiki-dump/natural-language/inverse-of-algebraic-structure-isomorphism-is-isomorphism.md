# 

Source: https://proofwiki.org/wiki/Inverse_of_Algebraic_Structure_Isomorphism_is_Isomorphism



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be a mapping.

Then $\phi$ is an isomorphism if and only if $\phi^{-1}: \struct {T, *} \to \struct {S, \circ}$ is also an isomorphism.


General Result
Let $\phi: \struct {S, \circ_1, \circ_2, \ldots, \circ_n}$ and $\struct {T, *_1, *_2, \ldots, *_n}$ be algebraic structures.
Let $\phi: \struct {S, \circ_1, \circ_2, \ldots, \circ_n} \to \struct {T, *_1, *_2, \ldots, *_n}$ be a mapping.

Then:

$\phi: \struct {S, \circ_1, \circ_2, \ldots, \circ_n} \to \struct {T, *_1, *_2, \ldots, *_n}$ is an isomorphism
if and only if:

$\phi^{-1}: \struct {T, *_1, *_2, \ldots, *_n} \to \struct {S, \circ_1, \circ_2, \ldots, \circ_n}$ is also an isomorphism.


Proof
Let $\phi$ be an isomorphism.
Then by definition $\phi$ is a bijection.
Thus $\exists \phi^{-1}$ such that $\phi^{-1}$ is also a bijection from Bijection iff Inverse is Bijection.
That is:

$\exists \phi^{-1}: \struct {T, *} \to \struct {S, \circ}$

It follows that:










\(\ds \forall s \in S, t \in T: \, \)



\(\ds \map \phi s\)

\(=\)







\(\ds t \iff \map {\phi^{-1} } t = s\)





Inverse Element of Bijection








\(\ds \leadsto \ \ \)





\(\ds \map \phi {s_1 \circ s_2}\)

\(=\)







\(\ds t_1 * t_2\)





Definition of Morphism Property








\(\ds \leadsto \ \ \)





\(\ds \map {\phi^{-1} } {t_1 * t_2}\)

\(=\)







\(\ds s_1 \circ s_2 = \map {\phi^{-1} } {t_1} \circ \map {\phi^{-1} } {t_2}\)





Inverse Element of Bijection




So $\phi^{-1}: \struct {T, *} \to \struct {S, \circ}$ is a homomorphism.
$\phi^{-1}$ is also (from above) a bijection.
Thus, by definition, $\phi^{-1}$ is an isomorphism.

Let $\phi^{-1}: \struct {T, *} \to \struct {S, \circ}$ be an isomorphism.
Applying the same result as above in reverse, we have that $\paren {\phi^{-1} }^{-1}: \struct {S, \circ} \to \struct {T, *}$ is also an isomorphism.
But by Inverse of Inverse of Bijection:

$\paren {\phi^{-1} }^{-1} = \phi$
and hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Theorem $6.1: \ 2^\circ$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms




