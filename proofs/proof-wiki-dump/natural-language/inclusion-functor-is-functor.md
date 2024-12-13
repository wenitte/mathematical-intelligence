# 

Source: https://proofwiki.org/wiki/Inclusion_Functor_is_Functor

Theorem
Let $\mathbf D$ be a metacategory, and let $\mathbf C$ be a subcategory of $\mathbf D$.
Let $\Iota_{\mathbf C}: \mathbf C \to \mathbf D$ be the inclusion functor on $\mathbf C$

Then:

$\Iota_{\mathbf C}$ is a (covariant) functor


Proof
Let $f, g$ be morphisms of $\mathbf C$ such that $g \circ f$ is defined.
Then:














\(\ds \map {\Iota_{\mathbf C} } {g \circ f}\)

\(=\)







\(\ds g \circ f\)





Definition of Inclusion Functor














\(\ds \)

\(=\)







\(\ds \map {\Iota_{\mathbf C} } g \circ \map {\Iota_{\mathbf C} } f\)





Definition of Inclusion Functor




Also, for any object $C$ of $\mathbf C$:














\(\ds \map {\Iota_{\mathbf C} } {i_C}\)

\(=\)







\(\ds i_C\)





Definition of Inclusion Functor














\(\ds \)

\(=\)







\(\ds i_{\map {\Iota_{\mathbf C} } C}\)





Definition of Inclusion Functor




Hence $\Iota_{\mathbf C}$ is shown to be a covariant functor.
$\blacksquare$


Sources
1971: Saunders Mac Lane: Categories for the Working Mathematician: Chapter $\text I$ Categories, Functors and Natural Transformations: $\S \text{3}$ Functors




