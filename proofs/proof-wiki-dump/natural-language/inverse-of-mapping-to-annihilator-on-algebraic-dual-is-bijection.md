# 

Source: https://proofwiki.org/wiki/Inverse_of_Mapping_to_Annihilator_on_Algebraic_Dual_is_Bijection

Theorem
Let $G$ be an $n$-dimensional vector space over a field.
Let $J: G \to G^{**}$ be the evaluation isomorphism.
Let $G^*$ be the algebraic dual of $G$.
Let $M$ be an $m$-dimensional subspace of $G$.
Let $M^\circ$ be the annihilator of $M$.
Let $N$ be a $p$-dimensional subspace of $G^*$.

Let $G_m$ denote the set of all $m$-dimensional subspaces of $G$.
Let ${G^*}_{n - m}$ denote the set of all $n - m$-dimensional subspaces of $G^*$.

Let $\phi: G_m \to {G^*}_{n - m}$ be the mapping from $G_m$ to the power set of ${G^*}_{n - m}$ defined as:

$\forall M \in \powerset G: \map \phi M = M^\circ$
Then $\phi$ is a bijection.

The inverse of $\phi$ is the bijection:

$N \to \map {J^\gets} {N^\circ}$
where $J^\gets$ is the inverse image mapping of $J$.


Proof
By definition::

$\paren {\map {J^\gets} {N^\circ} }^\circ = \set {z \in G^*: \forall x \in G: \forall t \in N: \map t x = 0: \map z x = 0}$
Thus:

$N \subseteq \paren {\map {J^\gets} {N^\circ} }^\circ$
But as $\paren {\map {J^\gets} {N^\circ} }^\circ$ has dimension $n - \paren {n - p} = p$, it follows that $N = \paren {\map {J^\gets} {N^\circ} }^\circ$ by Dimension of Proper Subspace is Less Than its Superspace.
This follows by the definition of an inverse mapping.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.10$




