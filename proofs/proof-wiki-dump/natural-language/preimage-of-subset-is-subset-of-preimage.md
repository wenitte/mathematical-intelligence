# 

Source: https://proofwiki.org/wiki/Preimage_of_Subset_is_Subset_of_Preimage

Corollary to Image of Subset under Relation is Subset of Image
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping from $S$ to $T$.

Let $C, D \subseteq T$.

Then:

$C \subseteq D \implies f^{-1} \sqbrk C \subseteq f^{-1} \sqbrk D$

This can be expressed in the language and notation of inverse image mappings as:

$\forall C, D \in \powerset T: C \subseteq D \implies \map {f^\gets} C \subseteq \map {f^\gets} D$


Proof
As $f: S \to T$ is a mapping, it is also a relation, and thus so is its inverse:

$f^{-1} \subseteq T \times S$
The result follows directly from Image of Subset under Relation is Subset of Image.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms: $\text{(ii)}$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.1: \ \text{(j)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.2 \ \text{(a)}$




