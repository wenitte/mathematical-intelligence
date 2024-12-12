# 

Source: https://proofwiki.org/wiki/Domain_of_Union_of_Nest_of_Mappings_is_Union_of_Class_of_Domains

Theorem
Let $N$ be a nest of mappings.
Let $\bigcup N$ denote the union of $N$.
Then:

$\Dom {\bigcup N} = \ds \bigcup_{f \mathop \in N} \Dom f$
where $\Dom f$ denotes the domain of $f$.


Proof
From Union of Nest of Mappings is Mapping we have that $\bigcup N$ is a mapping.

Let $x \in \Dom {\bigcup N}$.
Then by definition of mapping:

$\exists \tuple {x, y} \in \bigcup N$
Then by definition of union of class:

$\exists f \subseteq \bigcup N: \tuple {x, y} \in f$
Hence:

$\exists f \subseteq \bigcup N: x \in \Dom f$
That is:

$x \in \ds \bigcup_{f \mathop \in N} \Dom f$
That is:

$\Dom {\bigcup N} \subseteq \ds \bigcup_{f \mathop \in N} \Dom f$

Let $x \in \ds \bigcup_{f \mathop \in N} \Dom f$.
Then:

$\exists f \subseteq \bigcup N: x \in \Dom f$
Then by definition of mapping:

$\exists f \subseteq \bigcup N: \tuple {x, y} \in f$
Thus by definition of union of class:

$\exists \tuple {x, y} \in \bigcup N$
It follows that:

$x \in \Dom {\bigcup N}$
That is:

$\ds \bigcup_{f \mathop \in N} \Dom f \subseteq \Dom {\bigcup N}$

Hence by definition of set equality:

$\Dom {\bigcup N} = \ds \bigcup_{f \mathop \in N} \Dom f$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 1$ A few preliminaries: Proposition $1.4$




