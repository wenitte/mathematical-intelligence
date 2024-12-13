# 

Source: https://proofwiki.org/wiki/Orbit-Stabilizer_Theorem/Proof_2

Theorem
Let $G$ be a group which acts on a finite set $X$.
Let $x \in X$.
Let $\Orb x$ denote  the orbit of $x$.
Let $\Stab x$ denote the stabilizer of $x$ by $G$.
Let $\index G {\Stab x}$ denote the index of $\Stab x$ in $G$.

Then:

$\order {\Orb x} = \index G {\Stab x} = \dfrac {\order G} {\order {\Stab x} }$


Proof
Let $x \in X$.
Let $\phi: \Orb x \to G \mathbin / \Stab x$ be a mapping from the orbit of $x$ to the left coset space of $\Stab x$ defined as:

$\forall g \in G: \map \phi {g * x} = g \, \Stab x$
where $*$ is the group action.
Note: this is not a homomorphism because $\Orb x$ is not a group.

Suppose $g * x = h * x$ for some $g, h \in G$.
Then:














\(\ds h^{-1} * g * x\)

\(=\)







\(\ds h^{-1} * h * x\)





applying $h^{-1}$ to both sides














\(\ds \paren{h^{-1} g } * x\)

\(=\)







\(\ds \paren{h^{-1} h } * x\)





Group Action Axiom $\text {GA} 1$














\(\ds \)

\(=\)







\(\ds e * x\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds x\)





Group Action Axiom $\text {GA} 2$



Thus:

$h^{-1} g \in \Stab x$
so by Left Coset Space forms Partition:

$g \, \Stab x = h \, \Stab x$
demonstrating that $\phi$ is well-defined.

Let $\map \phi {g_1 * x} = \map \phi {g_2 * x}$ for some $g_1, g_2 \in G$.
Then:

$g_1 \, \Stab x = g_2 \, \Stab x$
and so by Left Coset Space forms Partition:

$g_2^{-1} g_1 \in \Stab x$
So by definition of $\Stab x$:

$x = \paren{g_2^{-1} g_1 }* x$
Thus:














\(\ds g_2 * x\)

\(=\)







\(\ds g_2 * \paren {g_2^{-1} g_1 * x}\)





applying $g_2$ to both sides














\(\ds \)

\(=\)







\(\ds \paren {g_2 g_2^{-1} g_1} * x\)





Group Action Axiom $\text {GA} 1$














\(\ds \)

\(=\)







\(\ds g_1 * x\)









thus demonstrating that $\phi$ is injective.

As the left coset $g \, \Stab x$ is $\map \phi {g * x}$ by definition of $\phi$, it follows that $\phi$ is a surjection.
The result follows.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.5$. Orbits
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Theorem $10.16$




