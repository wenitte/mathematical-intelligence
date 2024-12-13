# 

Source: https://proofwiki.org/wiki/Linear_Span_of_Self-Adjoint_Subset_of_*-Algebra_is_Self-Adjoint

Theorem
Let $\tuple {A, \ast}$ be a $\ast$-algebra over $\C$. 
Let $S \subseteq A$ be self-adjoint.

Then $\map \span S$ is self-adjoint.


Proof
Let:

$\ds \sum_{i \mathop = 1}^n \lambda_i x_i \in \map \span S$
where $\lambda_1, \ldots, \lambda_n \in \C$ and $x_1, \ldots, x_n \in S$.
From $(\text C^\ast 2)$ and $(\text C^\ast 3)$ in the definition of an involution, we have:

$\ds \paren {\sum_{i \mathop = 1}^n \lambda_i x_i}^\ast = \sum_{i \mathop = 1}^n \overline {\lambda_i} x_i^\ast$
Since $S$ is self-adjoint, we have $x_i^\ast \in S$ for each $i$.
Hence we have:

$\ds \sum_{i \mathop = 1}^n \overline {\lambda_i} x_i^\ast \in \map \span S$
Hence $\map \span S$ is self-adjoint.
$\blacksquare$





