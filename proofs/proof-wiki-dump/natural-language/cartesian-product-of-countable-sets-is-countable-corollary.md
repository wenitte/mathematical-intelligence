# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Countable_Sets_is_Countable/Corollary



Corollary to Cartesian Product of Countable Sets is Countable
Let $k$ be an integer such that $k > 1$.
Then the cartesian product of $k$ countable sets is countable.


Proof 1
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


Proof 2
Proof by induction:

Basis for the Induction
When $k = 2$, the case is the same as Cartesian Product of Countable Sets is Countable.
So shown for basis for the induction.


Induction Hypothesis
This is our induction hypothesis:

$\exists f_k: S_1 \times S_2 \times \cdots \times S_k \to \N$
where $f_k$ is an injection.
Now we need to show that for $n = k + 1$:

$\exists f_{k+1}: S_1 \times S_2 \times \cdots \times S_k \times S_{k+1} \to \N$
where $f_{k+1}$ is an injection.


Induction Step
This is our induction step:
By the induction hypothesis:

$\exists f_k: S_1 \times S_2 \times \cdots \times S_k \to \N$
where $f_k$ is an injection.
Thus by definition, $S_1 \times S_2 \times \cdots \times S_k$ is countable.
By hypothesis $S_{k + 1}$ is countable.
So by the basis for the induction:

$\exists g: \left({S_1 \times S_2 \times \cdots \times S_k}\right) \times S_{k+1} \to \N \times \N$
where $g$ is an injection.
By Cartesian Product of Countable Sets is Countable,

$\exists r: \N \times \N \to \N$
where $r$ is an injection.
Therefore, by Composite of Injections is Injection:

$f_{k+1} = r \circ g: S_1 \times S_2 \times \cdots \times S_k \times S_{k+1} \to \N$
is an injection.
The result follows by induction.
$\blacksquare$


Sources
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Countable Sets
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Exercise $18.16$




