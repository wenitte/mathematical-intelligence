# 

Source: https://proofwiki.org/wiki/Isomorphisms_between_Lower_Sections_of_Well-Ordered_Classes_are_Nested

Theorem
Let $\struct {A, \preccurlyeq_A}$ and $\struct {B, \preccurlyeq_B}$ be well-ordered classes.
Let $\phi_1$ and $\phi_2$ be order isomorphisms from a lower section of $\struct {A, \preccurlyeq_A}$ to a lower section of $\struct {B, \preccurlyeq_B}$.
Then either:

$\phi_1 \subseteq \phi_2$
or:

$\phi_2 \subseteq \phi_1$
where $\subseteq$ denotes the subset relation on mappings:

$f \subseteq g \iff \forall x \in \Dom f: \map f x = \map g x$


Proof
Let us label the domains of $\phi_1$ and $\phi_2$:

$D_1 = \Dom {\phi_1}$
$D_2 = \Dom {\phi_2}$
Because $D_1$ and $D_2$ are both lower sections of $\struct {A, \preccurlyeq_A}$, they are comparable under the subset relation.
Without loss of generality, suppose $D_1 \subseteq D_2$.
Then the restriction $\phi_2 {\restriction_{D_1} }$ is an order isomorphisms from $D_1$ to a lower section of $\struct {B, \preccurlyeq_B}$.
From Lower Sections of Well-Ordered Classes are Order Isomorphic at most Uniquely:

$\phi_2 {\restriction_{D_1} } = \phi_1$
That is:

$\phi_1 \subseteq \phi_2$
Similarly if $D_2 \subseteq D_1$ then:

$\phi_2 \subseteq \phi_1$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 2$ Isomorphisms of well orderings: Corollary $2.8$




