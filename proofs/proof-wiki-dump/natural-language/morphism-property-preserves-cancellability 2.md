# 

Source: https://proofwiki.org/wiki/Morphism_Property_Preserves_Cancellability

Theorem
Let:

$\phi: \struct {S, \circ_1, \circ_2, \ldots, \circ_n} \to \struct {T, *_1, *_2, \ldots, *_n}$
be a mapping from one algebraic structure:

$\struct {S, \circ_1, \circ_2, \ldots, \circ_n}$
to another:

$\struct {T, *_1, *_2, \ldots, *_n}$
Let $\circ_k$ have the morphism property under $\phi$ for some operation $\circ_k$ in $\struct {S, \circ_1, \circ_2, \ldots, \circ_n}$.

Then if an element $a \in S$ is either left cancellable or right cancellable under $\circ_k$, then $\map \phi a$ is correspondingly left cancellable or right cancellable under $*_k$.
Thus, the morphism property is seen to preserve cancellability.


Proof
First let $S$ be the empty set.
It follows from the definition of an Definition:Morphism Property that $\circ_1, \circ_2, \ldots, \circ_n$ are all empty maps.
It also follows from the definition of an Definition:Morphism Property that $*_1, *_2, \ldots, *_n$ are all empty maps.

By Image of Empty Set is Empty Set, $T$ is also the empty set.


This needs considerable tedious hard slog to complete it.In particular: Prove that the morphism property preserves cancellability when $S$ is emptyTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence, the morphism property is seen to preserve cancellability when $S$ is the empty set.
$\Box$

Now let $S \ne \O$.
We need to demonstrate the following properties:
$(1): \quad$ If $a \in S$ has the property that:

$\forall x, y \in S: x \circ_k a = y \circ_k a \implies x = y$
then:

$\forall x, y \in S: \map \phi x *_k \map \phi a = \map \phi y *_k \map \phi a \implies \map \phi x = \map \phi y$
Thus:














\(\ds x \circ_k a = y \circ_k a\)

\(\implies\)







\(\ds x = y\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {x \circ_k a} = \map \phi {y \circ_k a}\)

\(\implies\)







\(\ds \map \phi x = \map \phi y\)





Mappings are many-to-one by definition








\(\ds \leadsto \ \ \)





\(\ds \map \phi x *_k \map \phi a = \map \phi y *_k \map \phi a\)

\(\implies\)







\(\ds \map \phi x = \map \phi y\)





Definition of Morphism Property



and thus left cancellability is demonstrated.
$\Box$

$(2): \quad$ If $a \in S$ has the property that:

$\forall x, y \in S: a \circ_k x = a \circ_k y \implies x = y$
then:

$\forall x, y \in S: \map \phi a *_k \map \phi x = \map \phi a *_k \map \phi y \implies \map \phi x = \map \phi y$

Thus:














\(\ds a \circ_k x = a \circ_k y\)

\(\implies\)







\(\ds x = y\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {a \circ_k x} = \map \phi {a \circ_k y}\)

\(\implies\)







\(\ds \map \phi x = \map \phi y\)





Mappings are many-to-one by definition








\(\ds \leadsto \ \ \)





\(\ds \map \phi a *_k \map \phi x = \map \phi a *_k \map \phi y\)

\(\implies\)







\(\ds \map \phi x = \map \phi y\)





Definition of Morphism Property



and thus right cancellability is demonstrated.
$\blacksquare$





