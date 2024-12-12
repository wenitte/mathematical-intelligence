# 

Source: https://proofwiki.org/wiki/Composition_with_Zero_Morphism_is_Zero_Morphism

Theorem
Let $\mathbf C$ be a category.
Let $0$ be a zero object in $\mathbf C$.
Let $A, B, C, D$ be objects in $\mathbf C$.
Let $f : A \to B$, $g : B \to C$ and $h : C \to D$ be morphisms in $\mathbf C$.
Let $g$ be a zero morphism.

Then $g \circ f$ and $h \circ g$ are zero morphisms.


Proof
By definition of zero morphism, $g$ is the composition of the unique morphism $\alpha : B \to 0$ with the unique morphism $\beta : 0 \to C$.
Since $\alpha \circ f : A \to 0$ is a morphism with codomain $0$ and $0$ is a terminal object, $\alpha \circ f$ is the unique morphism $A \to 0$.
It follows that $g \circ f = \beta \circ \alpha \circ f$ is a zero morphism.

Since $h \circ \beta : 0 \to D$ is a morphism with domain $0$ and $0$ is an initial object, $h \circ \beta$ is the unique morphism $0 \to D$.
It follows that $h \circ g = h \circ \beta \circ \alpha$ is a zero morphism.
$\blacksquare$





