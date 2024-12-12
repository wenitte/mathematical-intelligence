# 

Source: https://proofwiki.org/wiki/Free_Commutative_Monoid_on_One_Element_is_Isomorphic_to_Natural_Numbers_under_Addition

Theorem
Let $X = \set x$ be a singleton.
Let $M$ be the free commutative monoid on $X$.

Then $M$ is isomorphic to the additive monoid of natural numbers.


Proof
By definition, the free commutative monoid $M$ on $\set x$ is:

$M = \set {e, x, x^2, x^3, \ldots}$
where $e$ denotes the null sequence of elements of $X$.
Let $\phi$ denote the mapping from $M$ to $\N$ as:

$\forall a \in M: \map \phi a = \begin{cases}
0 & : a = e \\
n & : a = x^n \end{cases}$

By definition of $\phi$:

$\phi$ is injective: $\map \phi a = \map \phi b \implies a = b$
$\phi$ is surjective: $\forall a \in \N: \exists b \in M: \map \phi b = a$
$\phi$ is a monoid homomorphism: $\map \phi {a b} = \map \phi {a + b} = \map \phi a + \map \phi b$
Hence the result, by definition of isomorphism.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.1$: Monoids




