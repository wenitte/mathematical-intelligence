# 

Source: https://proofwiki.org/wiki/Identity_Functor_is_Right_Identity

Theorem
Let $\mathbf C$ and $\mathbf D$ be metacategories.
Let $F: \mathbf C \to \mathbf D$ be a functor, and let $\operatorname{id}_{\mathbf C}$ be the identity functor on $\mathbf C$.

Then the composite functor $F \operatorname{id}_{\mathbf C}$ satisfies:

$F \operatorname{id}_{\mathbf C} = F$


Proof
We have, for all objects $C$ of $\mathbf C$:

$F \operatorname{id}_{\mathbf C} C = F \left({\operatorname{id}_{\mathbf C} C}\right) = F C$
by definition of composition of functors and of identity functor.

Similarly, we have, for a morphism $f$ of $\mathbf C$:

$F \operatorname{id}_{\mathbf C} f = F \left({\operatorname{id}_{\mathbf C} f}\right) = F f$

Hence the result.
$\blacksquare$





