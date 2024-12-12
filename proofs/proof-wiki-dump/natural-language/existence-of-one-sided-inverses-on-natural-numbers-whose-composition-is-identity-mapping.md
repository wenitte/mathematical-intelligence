# 

Source: https://proofwiki.org/wiki/Existence_of_One-Sided_Inverses_on_Natural_Numbers_whose_Composition_is_Identity_Mapping

Theorem
Consider the set of natural numbers $\N$.
There exist mappings $f: \N \to \N$ and $g: \N \to \N$ such that:

$g \circ f = I_\N$
where:

$\circ$ denotes composition of mappings
$I_\N$ denotes the identity mapping on $\N$
such that neither $f$ nor $g$ are permutations on $\N$.


Proof
Let $f: \N \to \N$ be the mapping defined as:

$\forall x \in \N: \map f x = x + 1$
Let $g: \N \to \N$ be the mapping defined as:

$\forall x \in \N: \map g x = \begin {cases} x - 1 & : x > 0 \\ 0 & : x = 0 \end {cases}$
It is apparent by inspection that:

$f$ is injective
but

$f$ is not surjective, as there exists no $x \in \N$ such that $x + 1 = 0$
It is also apparent by inspection that:

$g$ is surjective
but

$g$ is not injective, as $\map g 0 = \map g 1 = 0$
Thus neither $f$ nor $g$ are bijective, and hence not permutations on $\N$.

However, it is also apparent by inspection that:

$g \circ f = I_\N$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.17 \ \text {(b)}$




