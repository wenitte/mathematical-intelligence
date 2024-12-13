# 

Source: https://proofwiki.org/wiki/Sequence_of_Row_Operations_is_Row_Operation

Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 
Let $\Gamma_1$ be a row operation which transforms $\mathbf A$ to a new matrix $\mathbf B \in \map \MM {m, n}$.
Let $\Gamma_2$ be a row operation which transforms $\mathbf B$ to another new matrix $\mathbf C \in \map \MM {m, n}$.

Then there exists another row operation $\Gamma$ which transforms $\mathbf A$ back to $\mathbf C$ such that $\Gamma$ consists of $\Gamma_1$ followed by $\Gamma_2$.


Proof
Let $\sequence {e_i}_{1 \mathop \le i \mathop \le k}$ be the finite sequence of elementary row operations that compose $\Gamma_1$.
Let $\sequence {\mathbf E_i}_{1 \mathop \le i \mathop \le k}$ be the corresponding finite sequence of the elementary row matrices.
Let $\sequence {f_i}_{1 \mathop \le i \mathop \le l}$ be the finite sequence of elementary row operations that compose $\Gamma_2$.
Let $\sequence {\mathbf F_i}_{1 \mathop \le i \mathop \le l}$ be the corresponding finite sequence of the elementary row matrices.

From Row Operation is Equivalent to Pre-Multiplication by Product of Elementary Matrices, we have:

$\mathbf R_1 \mathbf A = \mathbf B$
where $\mathbf R$ is the product of $\sequence {\mathbf E_i}_{1 \mathop \le i \mathop \le k}$:

$\mathbf R_1 = \mathbf E_k \mathbf E_{k - 1} \dotsb \mathbf E_2 \mathbf E_1$
Also from Row Operation is Equivalent to Pre-Multiplication by Product of Elementary Matrices, we have:

$\mathbf R_2 \mathbf B = \mathbf C$
where $\mathbf R_2$ is the product of $\sequence {\mathbf F_i}_{1 \mathop \le i \mathop \le l}$:

$\mathbf R_2 = \mathbf F_l \mathbf F_{l - 1} \dotsb \mathbf F_2 \mathbf F_1$
Hence we have:

$\mathbf R_2 \mathbf R_1 \mathbf A = \mathbf C$
where $\mathbf R := \mathbf R_2 \mathbf R_1$ is the product:

$\mathbf F_l \mathbf F_{l - 1} \dotsb \mathbf F_2 \mathbf F_1 \mathbf E_k \mathbf E_{k - 1} \dotsb \mathbf E_2 \mathbf E_1$

Let $\Gamma$ be the row operation composed of the finite sequence of elementary row operations $\tuple {e_1, e_2, \ldots, e_{k - 1}, e_k, f_1, f_2, \ldots, f_{l - 1}, f_l}$.

Thus $\Gamma$ is a row operation which transforms $\mathbf A$ into $\mathbf C$.

Hence the result.
$\blacksquare$


Also see
Sequence of Column Operations is Column Operation




