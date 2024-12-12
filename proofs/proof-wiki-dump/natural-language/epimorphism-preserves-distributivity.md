# 

Source: https://proofwiki.org/wiki/Epimorphism_Preserves_Distributivity



Theorem
Let $\struct {R_1, +_1, \circ_1}$ and $\struct {R_2, +_2, \circ_2}$ be algebraic structures.
Let $\phi: R_1 \to R_2$ be an epimorphism.

If $\circ_1$ is left distributive over $+_1$, then $\circ_2$ is left distributive over $+_2$.
If $\circ_1$ is right distributive over $+_1$, then $\circ_2$ is right distributive over $+_2$.

Consequently, if $\circ_1$ is distributive over $+_1$, then $\circ_2$ is distributive over $+_2$.

That is, epimorphism preserves distributivity.


Proof
Throughout the following, we assume the morphism property holds for $\phi$ for both operations.
It remains to be shown that for non-empty $R_1$, $\paren {x +_1 y}, \paren {y +_1 z}, \paren {x \circ_1 y }, \paren {y \circ_1 z}, \paren {x \circ_1 z}, \paren { x \circ_1 \paren {y +_1 z} }, \paren { \paren {x +_1 y} \circ_1 z } \in \Dom \phi$.


This theorem requires a proof.In particular: The domain of the epimorphism must be verified for a valid proof, since the algebraic structure are not assumed to be closed under its binary operation.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Left Distributivity

This article needs proofreading.In particular: Check validity of proof for the case of $R_1$ being the empty setIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Suppose $R_1$ is the empty set.
It follows from the definition of an epimorphism that
$\phi$ is a surjective homomorphism
By Empty Mapping to Empty Set is Bijective, the empty map is bijective
By definition of bijection, the empty map is an epimorphism.
Therefore, suppose $R_1$ is the empty map, which is indeed an epimorphism.
By Image of Empty Set is Empty Set, $R_2$ is also the empty set.
It follows from the definition of the homomorphism that the binary operations $+_1$, $+_2$, $\circ_1$ and $\circ_2$ are also the empty map.
If $\circ_1$ is left distributive over $+_1$, then it is vacuously true that $\circ_2$ is left distributive over $+_2$, as required.

Let $\phi: \struct {R_1, +_1, \circ_1} \to \struct {R_2, +_2, \circ_2}$ be an epimorphism.
Suppose $R_1$ is non-empty.
Then: 














\(\ds \map \phi x \circ_2 \paren {\map \phi y +_2 \map \phi z}\)

\(=\)







\(\ds \map \phi x \circ_2 \map \phi {y +_1 z}\)





as $\circ_2$ is left distributive over $+_2$














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ_1 \paren {y +_1 z} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\paren {x \circ_1 y} +_1 \paren {x \circ_1 z} }\)





as $\circ_1$ is left distributive over $+_1$














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ_1 y} +_2 \phi \paren {x \circ_1 z}\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \phi x \circ_2 \map \phi y} +_2 \paren {\map \phi x \circ_2 \map \phi z}\)









So $\circ_2$ is left distributive over $+_2$.
$\blacksquare$


Right Distributivity
Suppose $\circ_1$ is right distributive over $+_1$. 


This article needs proofreading.In particular: Check validity of proof for the case of $R_1$ being the empty setIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Suppose $R_1$ is the empty set.
By the similar reasoning shown for left distributivity, it follows that if $\circ_1$ is left distributive over $+_1$, then it is vacuously true that $\circ_2$ is left distributive over $+_2$, as required.

Suppose $R_1$ is non-empty.
Then:














\(\ds \paren {\map \phi x +_2 \map \phi y} \circ_2 \map \phi z\)

\(=\)







\(\ds \map \phi {x +_1 y} \circ_2 \map \phi z\)





as $\circ_2$ is right distributive over $+_2$














\(\ds \)

\(=\)







\(\ds \map \phi {\paren {x +_1 y} \circ_1 z}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\paren {x \circ_1 z} +_1 \paren {y \circ_1 z} }\)





as $\circ_1$ is right distributive over $+_1$














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ_1 z} +_2 \map \phi {y \circ_1 z}\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \phi x \circ_2 \map \phi z} +_2 \paren {\map \phi y \circ_2 \map \phi z}\)









So $\circ_2$ is right distributive over $+_2$.
$\blacksquare$


Distributivity
If $\circ_1$ is distributive over $+_1$, then it is both right and left distributive over $+_1$.
Hence from the above, $\circ_2$ is both right and left distributive over $+_2$.
That is, $\circ_2$ is distributive over $+_2$.
$\blacksquare$


Warning
Note that this result is applied to epimorphisms.
For a general homomorphism which is not surjective, nothing definite can be said about the behaviour of the elements of its codomain which are not part of its image.





