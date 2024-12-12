# 

Source: https://proofwiki.org/wiki/Complement_of_Preimage_equals_Preimage_of_Complement

Theorem
Let $f: S \to T$ be a mapping.
Let $T_1$ be a subset of $T$.

Then:

$\relcomp S {f^{-1} \sqbrk {T_1} } = f^{-1} \sqbrk {\relcomp T {T_1} }$
where:

$\complement_S$ (in this context) denotes relative complement
$f^{-1} \sqbrk {T_1}$ denotes preimage.

That is:

$S \setminus f^{-1} \sqbrk {T_1} = f^{-1} \sqbrk {T \setminus T_1}$

This can be expressed in the language and notation of inverse image mappings as:

$\forall T_1 \in \powerset T: \relcomp S {\map {f^\gets} {T_1} } = \map {f^\gets} {\relcomp T {T_1} }$


Proof
From One-to-Many Image of Set Difference: Corollary 2 we have:

$\relcomp {\Img \RR} {\RR \sqbrk {S_1} } = \RR \sqbrk {\relcomp S {S_1} }$
where:

$S_1 \subseteq S$
$\RR \subseteq T \times S$ is a one-to-many relation on $T \times S$.

Hence as $f^{-1}: T \to S$ is a one-to-many relation:

$\relcomp {\Preimg f} {f^{-1} \sqbrk {T_1} } = f^{-1} \sqbrk {\relcomp T {T_1} }$

But from Preimage of Mapping equals Domain, we have that:

$\Preimg f = S$
Hence:

$\relcomp S {f^{-1} \sqbrk {T_1} } = f^{-1} \sqbrk {\relcomp T {T_1} }$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.13 \ \text{(d)}$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.1 \ \text{(jw)}$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $4 \ \text{(c})$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): Notation and Terminology
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $1$: Pairs, Relations, and Functions: Exercise $6 \ \text {(c)}$




