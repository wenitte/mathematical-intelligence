# 

Source: https://proofwiki.org/wiki/Isomorphism_between_Roots_of_Unity_under_Multiplication_and_Integers_under_Modulo_Addition


This article is complete as far as it goes, but it could do with expansion.In particular: Expand scope to the general Field, and extract this result as a corollary or example.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $\struct {R_n, \times}$ be the complex $n$th roots of unity under complex multiplication.
Let $\struct {\Z_n, +_n}$ be the integers modulo $n$ under modulo addition.

Then $\struct {R_n, \times}$ and $\struct {\Z_n, +_n}$ are isomorphic algebraic structures.


Proof
The set of integers modulo $n$ is the set exemplified by the integers:

$\Z_n = \set {0, 1, \ldots, n - 1}$
The complex $n$th roots of unity is the set:

$R_n = \set {z \in \C: z^n = 1}$
From Complex Roots of Unity in Exponential Form:

$R_n = \set {1, e^{\theta / n}, e^{2 \theta / n}, \ldots, e^{\left({n - 1}\right) \theta / n} }$
where $\theta = 2 i \pi$.

Let $z, w, \in R_n$.
Then:

$\paren {z w}^n = z^n w^n = 1$
and so $z w \in R_n$.
Thus $\struct {R_n, \times}$ is a closed algebraic structure.

Consider the mapping $f: \Z_n \to R_n$ defined as:

$\forall r \in \Z_n: \map f r = e^{r \theta / n}$
which can be seen to be a bijection by inspection.

Let $j, k \in \Z_n$.
Then:














\(\ds \map f j \map f k\)

\(=\)







\(\ds e^{j \theta / n} e^{k \theta / n}\)




















\(\ds \)

\(=\)







\(\ds e^{j \theta / n + k \theta / n}\)




















\(\ds \)

\(=\)







\(\ds e^{\paren {j + k} \theta / n}\)




















\(\ds \)

\(=\)







\(\ds \map f {j +_n k}\)









Thus $f$ is an isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Example $6.2$




