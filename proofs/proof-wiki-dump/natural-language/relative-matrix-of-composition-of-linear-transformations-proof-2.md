# 

Source: https://proofwiki.org/wiki/Relative_Matrix_of_Composition_of_Linear_Transformations/Proof_2

Theorem
Let $R$ be a ring with unity.
Let $M, N, P$ be free $R$-modules of finite dimension $m, n, p > 0$ respectively.
Let $\AA, \BB, \CC$ be ordered bases of $M, N, P$.
Let $f: M \to N$ and $g : N \to P$ be linear transformations, and $g \circ f$ be their composition.
Let $\mathbf M_{f, \BB, \AA}$ and $\mathbf M_{g, \CC, \BB}$ be their matrices relative to $\AA, \BB$ and $\BB, \CC$ respectively.

Then the matrix of $g \circ f$ relative to $\AA$ and $\CC$ is:

$\mathbf M_{g \mathop \circ f, \CC, \AA} = \mathbf M_{g, \CC, \BB} \cdot \mathbf M_{f, \BB, \AA}$


Proof
Let:

$\AA = \sequence {a_m}$
$\BB = \sequence {b_n}$
$\CC = \sequence {c_p}$

Let:

$\sqbrk \alpha_{m n} = \sqbrk {f; \sequence {b_n}, \sequence {a_m} }$
and:

$\sqbrk \beta_{n p} = \sqbrk {g; \sequence {c_p}, \sequence {b_n} }$

Then:














\(\ds \map {\paren {g \circ f} } {a_j}\)

\(=\)







\(\ds \map g {\map f {a_j} }\)




















\(\ds \)

\(=\)







\(\ds \map g {\sum_{k \mathop = 1}^n \alpha_{k j} b_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \alpha_{k j} \map g {b_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \alpha_{k j} \paren {\sum_{i \mathop = 1}^p \beta_{i k} c_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\sum_{i \mathop = 1}^p \alpha_{k j} \beta_{i k} c_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^p \paren {\sum_{k \mathop = 1}^n \alpha_{k j} \beta_{i k} c_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^p \paren {\sum_{k \mathop = 1}^n \alpha_{k j} \beta_{i k} } c_i\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices: Theorem $29.1$




