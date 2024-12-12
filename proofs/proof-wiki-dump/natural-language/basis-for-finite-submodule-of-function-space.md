# 

Source: https://proofwiki.org/wiki/Basis_for_Finite_Submodule_of_Function_Space

Theorem
Let $\struct {R, +, \circ}$ be a ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $A$ be a set.

For each $a \in A$, let $f_a: A \to R$ be defined as:

$\forall x \in A: \map {f_a} x = \begin{cases}
1 & : x = a \\
0 & : x \ne a
\end{cases}$

Then $B = \set {f_a: a \in A}$ is a basis of the Finite Submodule of Function Space $R^{\paren A}$.


Proof
Let $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ be a sequence of distinct terms of $A$.
Let $\sequence {\lambda_k}_{1 \mathop \le k \mathop \le n}$ be a sequence of scalars.
Then: $\ds \sum_{k \mathop = 1}^n \lambda_k f_{a_k}$ is the mapping whose value at $a_k$ is $\lambda_k$ and whose value at any $x$ not in $\set {a_1, a_2, \ldots, a_n}$ is zero.
Hence $B$ is a generator of $R^{\paren A}$ which is linearly independent.
Thus, by definition, $B$ is a basis of $R^{\paren A}$.

If $A = \closedint 1 n$, then $B$ is the standard basis of $R^n$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 27$. Subspaces and Bases: Example $27.8$




