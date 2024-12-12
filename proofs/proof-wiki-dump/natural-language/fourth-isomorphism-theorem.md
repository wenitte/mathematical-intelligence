# 

Source: https://proofwiki.org/wiki/Fourth_Isomorphism_Theorem



Theorem
Let $\phi: R \to S$ be a ring homomorphism.
Let $K = \map \ker \phi$ be the kernel of $\phi$.

Let $\mathbb K$ be the set of all subrings of $R$ which contain $K$ as a subset.
Let $\mathbb S$ be the set of all subrings of $\Img \phi$.

Let $\phi^\to: \powerset R \to \powerset S$ be the direct image mapping of $\phi$.
Then its restriction $\phi^\to: \mathbb K \to \mathbb S$ is a bijection.

Also:

$(1): \quad \phi^\to$ and its inverse both preserve subsets.
$(2): \quad \phi^\to$ and its inverse both preserve ideals:
If $J$ is an ideal of $R$, then $\map {\phi^\to} J$ is an ideal of $S$
If $J'$ is an ideal of $S$, then $\map {\paren {\phi^\to}^{-1} } {J'}$ is an ideal of $R$


Proof
Proof of Preservation of Subsets
From Subset Maps to Subset, we have:

$(a) \quad \forall X, X' \in \mathbb K: X \subseteq X' \implies \map {\phi^\to} X \subseteq \map {\phi^\to} {X'}$
$(b) \quad \forall Y, Y' \in \mathbb S: Y \subseteq Y' \implies \map {\paren {\phi^\to}^{-1} } Y \subseteq \map {\paren {\phi^\to}^{-1} } {Y'}$
So $\phi^\to$ and its inverse both preserve subsets, and $(1)$ has been demonstrated to hold.
$\Box$


Proof that Inverse Image is a Subring
Let $U \in \mathbb S$, that is, let $U$ be a subring of $\Img \phi$.

From Preimage of Subring under Ring Homomorphism is Subring, we have that $\map {\paren {\phi^\to}^{-1} } U$ is a subring of $R$ such that $K \subseteq R$ and so:

$\map {\paren {\phi^\to}^{-1} } U \in \mathbb K$

$\Box$


Proof that Image is a Subring
Let $V \in \mathbb K$, that is, a subring of $R$ containing $K$.
From Ring Homomorphism Preserves Subrings, we have that $\map {\phi^\to} V$ is a subring of $S$ and so:

$\map {\phi^\to} V \in \mathbb S$

$\Box$


Proof that $f$ is a Bijection
By Subset of Codomain is Superset of Image of Preimage, we have that:

$U = \map {\phi^\to} {\map {\paren {\phi^\to}^{-1} } U}$

The validity of the material on this page is questionable.In particular: It doesn't, actually, it shows it's the superset. IIRC it needs to be a surjection for that. Check this to see whether $\phi^\to$ is indeed a surjection.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

We also have from Subset of Domain is Subset of Preimage of Image that:

$V \subseteq \map {\paren {\phi^\to}^{-1} } {\map {\phi^\to} V}$

Now let $r \in \map {\paren {\phi^\to}^{-1} } {\map {\phi^\to} V}$.
Thus $\map \phi r \in \map {\phi^\to} V$ and so:

$\exists v \in V: \map \phi r = \map \phi v$
So $\map \phi {r + \paren {-v} } = 0_S$ and so $r - v \in K$ by definition of kernel.
So:

$\exists k \in K: r + k = v$
But by assumption, $K \subseteq V$ as $V \in \mathbb K$.
So $k \in V$ and so it follows that $r \in V$ as well, by the fact that $V$ is subring and so closed for $+$.
So:

$\map {\paren {\phi^\to}^{-1} } {\map {\phi^\to} V} \subseteq V$
Putting that together with $V \subseteq \map {\paren {\phi^\to}^{-1} } {\map {\phi^\to} V}$ and we see:

$V = \map {\paren {\phi^\to}^{-1} } {\map {\phi^\to} V}$
So we have:

$U = \map {\phi^\to} {\map {\paren {\phi^\to}^{-1} } U}$
$V = \map {\paren {\phi^\to}^{-1} } {\map {\phi^\to} V}$
That is:

$\phi^\to \circ \paren {\phi^\to}^{-1} = I_\mathbb S$
$\paren {\phi^\to}^{-1} \circ \phi^\to = I_\mathbb K$
where $I_\mathbb S$ and $I_\mathbb K$ are the identity mappings of $\mathbb S$ and $\mathbb K$ respectively.
By Composite of Bijection with Inverse is Identity Mapping, it follows that $\phi^\to: \mathbb K \to \mathbb S$ is a bijection.
$\blacksquare$


Proof of Preservation of Ideals
Let $V \in \mathbb K$ be an ideal of $R$.
Let $U = \map {\phi^\to} V$.
Then from Ring Epimorphism Preserves Ideals, $U$ is an ideal of $S$.

Similarly, let $U = \map {\phi^\to} V$ be an ideal of $S$.
Then by Preimage of Ideal under Ring Homomorphism is Ideal, $V = \map {\paren {\phi^\to}^{-1} } U$ is an ideal of $R$ such that $K \subseteq V$.
Hence ideals are preserved in both directions.
$\blacksquare$


Also see
Isomorphism Theorems


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms: Theorem $2.12$




