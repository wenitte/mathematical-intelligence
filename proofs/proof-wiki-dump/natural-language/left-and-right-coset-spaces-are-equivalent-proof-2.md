# 

Source: https://proofwiki.org/wiki/Left_and_Right_Coset_Spaces_are_Equivalent/Proof_2

Theorem
Let $\struct {G, \circ}$ be a group.
Let $H$ be a subgroup of $G$.

Let:

$x H$ denote the left coset of $H$ by $x$
$H y$ denote the right coset of $H$ by $y$.

Then:

$\order {\set {x H: x \in G} } = \order {\set {H y: y \in G} }$


Proof
Let $G$ be a group and let $H \le G$.
Consider the mapping $\phi$ from the left coset space to the right coset space defined as:

$\forall g \in G: \map \phi {g H} = H g^{-1}$

We need to show that $\phi$ is a bijection.

First we need to show that $\phi$ is well-defined.
That is, that $a H = b H \implies \map \phi {a H} = \map \phi {b H}$.
Suppose $a H = b H$.














\(\ds a H = b H\)

\(\iff\)







\(\ds a^{-1} b \in H\)





Left Cosets are Equal iff Product with Inverse in Subgroup‎














\(\ds H a^{-1} = H b^{-1}\)

\(\iff\)







\(\ds a^{-1} \paren {b^{-1} }^{-1} \in H\)





Right Cosets are Equal iff Product with Inverse in Subgroup




But $a^{-1} \paren {b^{-1} }^{-1} = a^{-1} b \in H$ as $a H = b H$.
So $H a^{-1} = H b^{-1}$ and $\phi$ is well-defined.

Next we show that $\phi$ is injective:
Suppose $\exists x, y \in G: \map \phi {x H} = \map \phi {y H}$.
Then $H x^{-1} = H y^{-1}$, so $x^{-1} = e_G x^{-1} = h y^{-1}$ for some $h \in H$.
Thus $h = x^{-1} y \implies h^{-1} = y^{-1} x$.
As $H$ is a subgroup, $h^{-1} \in H$.
Thus:

$y^{-1} x \in H$
So by Left Cosets are Equal iff Product with Inverse in Subgroup:

$x H = y H$
Thus $\phi$ is injective.

Next we show that $\phi$ is surjective:
Let $H x$ be a right coset of $H$ in $G$.
Since $x = \paren {x^{-1} }^{-1}$, $H x = \map \phi {x^{-1} H}$ and so $\phi$ is surjective.

Thus $\phi$ constitutes a bijection from the left coset space to the right coset space, and the result follows.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.3$. Index. Transversals
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Lemma $9$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem: Proposition $5.14$




