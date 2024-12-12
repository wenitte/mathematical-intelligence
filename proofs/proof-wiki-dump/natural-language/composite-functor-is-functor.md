# 

Source: https://proofwiki.org/wiki/Composite_Functor_is_Functor

Theorem
Let $\mathbf C, \mathbf D$ and $\mathbf E$ be metacategories.
Let $F: \mathbf C \to \mathbf D$ and $G: \mathbf D \to \mathbf E$ be covariant functors.
Let $GF: \mathbf C \to \mathbf E$ be the composition of $G$ with $F$.

Then $G F$ is also a covariant functor.


Proof
Let $f, g$ be morphisms of $\mathbf C$ such that $g \circ f$ is defined.
Then:














\(\ds \map {G F} {g \circ f}\)

\(=\)







\(\ds \map G {\map F {g \circ f} }\)





Definition of Composition of Functors














\(\ds \)

\(=\)







\(\ds \map G {F g \circ F f}\)





$F$ is a Covariant Functor














\(\ds \)

\(=\)







\(\ds \map G {F g} \circ \map G {F f}\)





$G$ is a functor














\(\ds \)

\(=\)







\(\ds G F g \circ G F f\)





Definition of Composition of Functors




Also, for any object $C$ of $\mathbf C$:














\(\ds G F I_C\)

\(=\)







\(\ds \map G {F I_C}\)





Definition of Composition of Functors














\(\ds \)

\(=\)







\(\ds G I_{F C}\)





$F$ is a Covariant Functor














\(\ds \)

\(=\)







\(\ds I_{\map G {F C} }\)





$G$ is a Covariant Functor














\(\ds \)

\(=\)







\(\ds I_{G F C}\)





Definition of Composition of Functors




Hence $G F$ is shown to be a covariant functor.
$\blacksquare$





