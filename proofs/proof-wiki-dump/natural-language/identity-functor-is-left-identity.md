# 

Source: https://proofwiki.org/wiki/Identity_Functor_is_Left_Identity

Theorem
Let $\mathbf C$ and $\mathbf D$ be metacategories.
Let $F: \mathbf C \to \mathbf D$ be a functor, and let $\operatorname{id}_{\mathbf D}$ be the identity functor on $\mathbf D$.

Then the composite functor $\operatorname{id}_{\mathbf D} F$ satisfies:

$\operatorname{id}_{\mathbf D} F = F$


Proof
We have, for all objects $C$ of $\mathbf C$:

$\operatorname{id}_{\mathbf D}F C = \operatorname{id}_{\mathbf D} \left({F C}\right) = F C$
by definition of composition of functors and of identity functor.

Similarly, we have, for a morphism $f$ of $\mathbf C$:

$\operatorname{id}_{\mathbf D}F f = \operatorname{id}_{\mathbf D} \left({F f}\right) = F f$

Hence the result.
$\blacksquare$





