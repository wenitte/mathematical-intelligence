# 

Source: https://proofwiki.org/wiki/Identity_Functor_is_Functor

Theorem
Let $\mathbf C$ be a metacategory.
Let $\operatorname{id}_{\mathbf C}: \mathbf C \to \mathbf C$ be the identity functor on $\mathbf C$.

Then $\operatorname{id}_{\mathbf C}$ is a functor.


Proof
Let $f, g$ be morphisms of $\mathbf C$ such that $g \circ f$ is defined.
Then:














\(\ds \operatorname{id}_{\mathbf C} \left({g \circ f}\right)\)

\(=\)







\(\ds g \circ f\)





Definition of Identity Functor














\(\ds \)

\(=\)







\(\ds \operatorname{id}_{\mathbf C} g \circ \operatorname{id}_{\mathbf C} f\)





Definition of Identity Functor




Also, for any object $C$ of $\mathbf C$:














\(\ds \operatorname{id}_{\mathbf C} \operatorname{id}_C\)

\(=\)







\(\ds \operatorname{id}_C\)





Definition of Identity Functor














\(\ds \)

\(=\)







\(\ds \operatorname{id}_{\operatorname{id}_{\mathbf C} C}\)





Definition of Identity Functor




Hence $\operatorname{id}_{\mathbf C}$ is shown to be a functor.
$\blacksquare$





