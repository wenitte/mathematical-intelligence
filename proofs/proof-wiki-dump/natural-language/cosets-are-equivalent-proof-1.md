# 

Source: https://proofwiki.org/wiki/Cosets_are_Equivalent/Proof_1

Theorem
All left cosets of a group $G$ with respect to a subgroup $H$ are equivalent.
That is, any two left cosets are in one-to-one correspondence.
The same applies to right cosets.

As a special case of this:

$\forall x \in G: \order {x H} = \order H = \order {H x}$
where $H$ is a subgroup of $G$.


Proof
Let us set up mappings $\theta: H \to H x$ and $\phi: H x \to H$ as follows:

$\forall u \in H: \map \theta u = u x$
$\forall v \in H x: \map \phi v = v x^{-1}$
From Element in Right Coset iff Product with Inverse in Subgroup:

$v \in H x \implies v x^{-1} \in H$

Now:

$\forall v \in H x: \theta \circ \map \phi v = v x^{-1} x = v$
$\forall u \in H: \phi \circ \map \theta u = u x x^{-1} = u$
Thus $\theta \circ \phi = I_{H x}$ and $\phi \circ \theta = I_H$ are identity mappings.
So $\theta = \phi^{-1}$: both are bijections and one is the inverse of the other.
This establishes, for each $x \in G$, the set equivalence between $H$ and $H x$:

$H \simeq H x$
In particular, for any $x, y \in G$, it follows from $H x \simeq H$ and $H y \simeq H$ that:

$H x \simeq H y$
by Set Equivalence behaves like Equivalence Relation.

Similarly, we can set up mappings $\alpha: H \to x H$ and $\beta: x H \to H$ as follows:

$\forall u \in H: \map \alpha u = x u$
$\forall v \in x H: \map \beta v = x^{-1} v$
Analogous to above reasoning gives $\alpha = \beta^{-1}$ which establishes $H \simeq x H$. 
Also similarly, $x H \simeq y H$ for all $x, y \in G$.

Hence the result.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.4$. Lagrange's theorem
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem: Proposition $5.8$




