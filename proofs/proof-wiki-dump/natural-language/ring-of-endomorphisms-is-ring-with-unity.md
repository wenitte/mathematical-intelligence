# 

Source: https://proofwiki.org/wiki/Ring_of_Endomorphisms_is_Ring_with_Unity



Theorem
Let $\struct {G, \oplus}$ be an abelian group.
Let $\mathbb G$ be the set of all group endomorphisms of $\struct {G, \oplus}$.
Let $\struct {\mathbb G, \oplus, *}$ denote the ring of endomorphisms on $\struct {G, \oplus}$.

Then $\struct {\mathbb G, \oplus, *}$ is a ring with unity.


Proof
By Structure Induced by Group Operation is Group, $\struct {\mathbb G, \oplus}$ is an abelian group.


This article, or a section of it, needs explaining.In particular: The abelian nature of $\struct {\mathbb G, \oplus}$ needs to be demonstrated -- we have to invoke a result either that demonstrates that commutativity is preserved, or generate a similar result to the above but for an abelian groupYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Set of Homomorphisms to Abelian Group is Subgroup of All Mappings, it follows that $\struct {\mathbb G, \oplus}$ is a subgroup of $\struct {G^G, \oplus}$.

Next, we establish that $*$ is associative.
By definition, $\forall u, v \in \mathbb G: u * v = u \circ v$ where $u \circ v$ is defined as composition of mappings.
Associativity of $*$ follows directly from Composition of Mappings is Associative.

Next, we establish that $*$ is distributive over $\oplus$.
Let $u, v, w \in \mathbb G$.
Then:

$\paren {u \oplus v} * w = \paren {u \oplus v} \circ w$
$u * \paren {v \oplus w} = u \circ \paren {v \oplus w}$

So let $x \in G$.
Then:














\(\ds \map {\paren {\paren {u \oplus v} * w} } x\)

\(=\)







\(\ds \map {\paren {\paren {u \oplus v} \circ w} } x\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {u \oplus v} } {\map w x}\)




















\(\ds \)

\(=\)







\(\ds \map u {\map w x} \oplus \map v {\map w x}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {u \circ w} } x \oplus \map {\paren {v \circ w} } x\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {u * w} } x \oplus \map {\paren {v * w} } x\)









So $\paren {u \oplus v} * w = \paren {u * w} \oplus \paren {v * w}$.
Similarly:














\(\ds \map {\paren {u * \paren {v \oplus w} } } x\)

\(=\)







\(\ds \map {\paren {u \circ \paren {v \oplus w} } } x\)




















\(\ds \)

\(=\)







\(\ds \map u {\map {\paren {v \oplus w} } x}\)




















\(\ds \)

\(=\)







\(\ds \map u {\map v x \oplus \map w x}\)




















\(\ds \)

\(=\)







\(\ds \map u {\map v x} \oplus \map u {\map w x}\)





$u$ has the morphism property














\(\ds \)

\(=\)







\(\ds \map {\paren {u \circ v} } x \oplus \map {\paren {u \circ w} } x\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {u * v} } x \oplus \map {\paren {u * w} } x\)









So:

$u * \paren {v \oplus w} = \paren {u * v} \oplus \paren {u * w}$
Thus $*$ is distributive over $\oplus$.

The ring axioms are satisfied, and $\struct {\mathbb G, \oplus, *}$ is a ring.

The zero is easily checked to be the mapping which takes everything to the identity:

$e: G \to \set {e_G}: \map e x = e_G$

The unity is easily checked to be the identity mapping, which is known to be an automorphism.
$\blacksquare$


Also see
Ring of Endomorphisms is not necessarily Commutative Ring


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $21$. Rings and Integral Domains: Example $21.2$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Ring Example $10$




