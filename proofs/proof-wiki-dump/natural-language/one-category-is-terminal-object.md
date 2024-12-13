# 

Source: https://proofwiki.org/wiki/One_(Category)_is_Terminal_Object

Theorem
Let $\mathbf{Cat}$ be the category of categories.
Let $\mathbf 1$ be the category one.

Then $\mathbf 1$ is a terminal object of $\mathbf{Cat}$.


Proof
Let $\mathbf C$ be an object of $\mathbf{Cat}$, i.e. a small category.

From Singleton is Terminal Object of Category of Sets, there exist unique mappings:

$F_0: \mathbf C_0 \to \mathbf 1_0 = \left\{{*}\right\}$
$F_1: \mathbf C_1 \to \mathbf 1_1 = \left\{{\operatorname{id}_*}\right\}$
since the latter sets are singletons.
It remains to verify that $F: \mathbf C \to \mathbf 1$ so defined, in fact is a functor.

Trivially, $F$ preserves identity morphisms.
That $F$ has the morphism property follows from:

$\operatorname{id}_* \circ \operatorname{id}_* = \operatorname{id}_*$

Hence $F: \mathbf C \to \mathbf 1$ constitutes a functor.
The result follows by definition of terminal object.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.2$: Example $2.11$: $2$




