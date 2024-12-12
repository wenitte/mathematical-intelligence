# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Strictly_Increasing_Mappings

Theorem
Let $\struct {S, \preceq}$ and $\struct {T, \preccurlyeq}$ be tosets.
Let the cardinality of $S$ and $T$ be:

$\card S = m, \card T = n$

Then the number of strictly increasing mappings from $S$ to $T$ is:

$\dbinom n m = \dfrac {n!} {m! \ \paren {n - m}!}$.
where $\dbinom n m$ is a binomial coefficient.


Proof
From:

Mapping from Totally Ordered Set is Order Embedding iff Strictly Increasing
and:

Strictly Monotone Mapping with Totally Ordered Domain is Injective
a strictly increasing mapping $\phi$ from $S$ to $T$ is an order isomorphism from $S$ to $\map \phi S$.
Let $\mathbb F$ be the set of all strictly increasing mappings from $S$ to $T$.
Let $\mathbb G$ be the set of all subsets of $T$ with $m$ elements.
By Unique Isomorphism between Equivalent Finite Totally Ordered Sets, the mapping $\Phi: \mathbb F \to \mathbb G$ defined as:

$\forall \phi \in \mathbb F: \Phi: \phi \to \map \phi S$
is a bijection.
The result follows from Cardinality of Set of Subsets.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 19$: Combinatorial Analysis: Theorem $19.11$




