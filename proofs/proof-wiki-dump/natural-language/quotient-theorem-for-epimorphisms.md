# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Epimorphisms



Theorem
Let $\struct {S, \oplus}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \oplus} \to \struct {T, *}$ be an epimorphism.
Let $\RR_\phi$ be the equivalence induced by $\phi$.
Let $S / \RR_\phi$ be the quotient of $S$ by $\RR_\phi$.
Let $q_{\RR_\phi}: S \to S / \RR_\phi$ be the quotient mapping induced by $\RR_\phi$.
Let $\struct {S / \RR_\phi, \oplus_{\RR_\phi} }$ be the quotient structure defined by $\RR_\phi$.

Then:

The induced equivalence $\RR_\phi$ is a congruence relation for $\oplus$
There exists a unique isomorphism $\psi: \struct {S / \RR_\phi, \oplus_{\RR_\phi} } \to \struct {T, *}$ which satisfies $\psi \circ q_{\RR_\phi} = \phi$
where $\circ$ denotes composition of mappings.


Proof
Proof of Congruence Relation
Let $x, x', y, y' \in S$ such that:

$x \mathrel {\RR_\phi} x' \land y \mathrel {\RR_\phi} y'$

By definition of induced equivalence:














\(\ds x \mathrel {\RR_\phi} x'\)

\(\leadsto\)







\(\ds \map \phi x = \map \phi {x'}\)




















\(\ds y \mathrel {\RR_\phi} y'\)

\(\leadsto\)







\(\ds \map \phi y = \map \phi {y'}\)










Then:














\(\ds \map \phi {x \oplus y}\)

\(=\)







\(\ds \map \phi x * \map \phi y\)





Definition of Epimorphism (Abstract Algebra)














\(\ds \)

\(=\)







\(\ds \map \phi {x'} * \map \phi {y'}\)





equality shown above














\(\ds \)

\(=\)







\(\ds \map \phi {x' \oplus y'}\)





Definition of Epimorphism (Abstract Algebra)




Thus $\paren {x \oplus y} \mathrel {\RR_\phi} \paren {x' \oplus y'}$ by definition of induced equivalence.
So $\RR_\phi$ is a congruence relation for $\oplus$.
$\Box$


Proof of Unique Isomorphism
From the Quotient Theorem for Surjections, there is a unique bijection from $S / \RR_\phi$ onto $T$ satisfying $\psi \circ q_{\RR_\phi} = \phi$.

Also:










\(\ds \forall x, y \in S: \, \)



\(\ds \map \psi {\eqclass x {\RR_\phi} \oplus_{\RR_\phi} \eqclass y {\RR_\phi} }\)

\(=\)







\(\ds \map \psi {\eqclass {x \oplus y} {\RR_\phi} }\)





Definition of Quotient Structure














\(\ds \)

\(=\)







\(\ds \map \phi {x \oplus y}\)





Definition of Epimorphism (Abstract Algebra)














\(\ds \)

\(=\)







\(\ds \map \phi x * \map \phi y\)





Definition of Epimorphism (Abstract Algebra)














\(\ds \)

\(=\)







\(\ds \map \psi {\eqclass x {\RR_\phi} } * \map \psi {\eqclass y {\RR_\phi} }\)





Definition of Quotient Mapping




Therefore $\psi$ is an isomorphism.
$\blacksquare$


Also known as
Some authors call this the Factor Theorem for Epimorphisms.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.5$




