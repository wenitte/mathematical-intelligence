# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Countable_Sets_is_Countable/Corollary/Proof_1

Corollary to Cartesian Product of Countable Sets is Countable
Let $k$ be an integer such that $k > 1$.
Then the cartesian product of $k$ countable sets is countable.


Proof
Let $S_1, S_2, \ldots, S_k$ be countable sets. Equivalently, there exists an injection $f_i: S_i \to \N$ for each $i \in \{ 1, \dots, k \}$.
Therefore, the mapping $g: S_1 \times S_2 \times \cdots \times S_k \to \N^k$ defined by (for $x_i \in S_i$):

$\map g {x_1, x_2, \dotsc, x_k} = \tuple {\map {f_1} {x_1}, \map {f_2} {x_2}, \dotsc, \map {f_k} {x_k} }$
is also injective.
Now let $p_1, p_2, \ldots, p_k$ be the first $k$ prime numbers.
From the Fundamental Theorem of Arithmetic, $f: \N^k \to \N$ defined as:

$\map f {n_1, n_2, \ldots, n_k} = p_1^{n_1} p_2^{n_2} \cdots p_k^{n_k}$
is an injection.
From Composite of Injections is Injection, $f \circ g: S_1 \times S_2 \times \cdots \times S_k \to \N$ is injective.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Exercise $18.16$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Countable Sets




