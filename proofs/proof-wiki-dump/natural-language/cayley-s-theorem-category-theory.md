# 

Source: https://proofwiki.org/wiki/Cayley%27s_Theorem_(Category_Theory)



Theorem
Let $\mathbf C$ be a small category.
Denote with $\mathbf{Set}$ the category of sets.

Then there exists a category $\mathbf D$, subject to:

$(1): \quad $ The objects of $\mathbf D$ are sets.
$(2): \quad $ The morphisms of $\mathbf D$ are mappings.
$(3): \quad \mathbf C \cong \mathbf D$, i.e. $\mathbf C$ and $\mathbf D$ are isomorphic.
That is, $\mathbf C$ is isomorphic to a subcategory of $\mathbf{Set}$.


Proof
Define a functor $H: \mathbf C \to \mathbf{Set}$ by:

$H C := \set {f \in \operatorname{mor} \mathbf C: \operatorname{cod} f = C}$
$H f: H A \to H B, g \mapsto f \circ g$
for $f: A \to B$ a morphism of $\mathbf C$.

It is immediate by the definition of identity morphism that:

$\map H {\operatorname{id}_A} = \operatorname{id}_{H A}$
For $f: A \to B$ and $g: B \to C$, observe:














\(\ds \map {\map H {g \circ f} } h\)

\(=\)







\(\ds \paren {g \circ f} \circ h\)





Definition of $\map H {g \circ f}$














\(\ds \)

\(=\)







\(\ds g \circ \paren {f \circ h}\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds g \circ \paren {\map {H f} h}\)





Definition of $H f$














\(\ds \)

\(=\)







\(\ds \map {H g} {\map {H f} h}\)





Definition of $H g$














\(\ds \)

\(=\)







\(\ds \map {\paren {H g \circ H f} } h\)





Definition 1 of Composition of Mappings



Thus by Equality of Mappings:

$\map H {g \circ f} = H g \circ H f$
It follows that $H$ is a functor.

It is clear that $H$ is injective on objects.
Suppose now that $H$ were not faithful.
Then there would be morphisms $g, h: A \to B$ of $\mathbf C$ such that $H g = H h$.
Since $\operatorname{id}_A \in H A$, this means in particular that:

$g \circ \operatorname{id}_A = h \circ \operatorname{id}_A$
by Equality of Mappings.
But the definition of identity morphism then reduces this to $g = h$.

Hence, $H$ is faithful.
By Functor is Embedding iff Faithful and Injective on Objects, it follows that $H$ is an embedding.
Thus $\mathbf C$ is isomorphic to a subcategory of $\mathbf{Set}$.
$\blacksquare$


Also see
Cayley's Representation Theorem


Source of Name
This entry was named for Arthur Cayley.


Historical Note
Although Cayley did not prove this result, it is similar enough in both statement and proof to Cayley's Representation Theorem as to merit his name being appended to it.
As Steve Awodey states it in Category Theory, 2nd ed.:

[Cayley's] theorem may be generalized to show that any category that is not "too big" can be represented as a [...] category of sets and functions.
-- 2010: Steve Awodey: Category Theory (2nd ed.), p. 13
The contributor Lord_Farin subsequently was as audacious as to name the general result after Cayley as well.


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.5$: Theorem $1.6$




