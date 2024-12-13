# 

Source: https://proofwiki.org/wiki/Non-Negative_Multiple_of_Positive_Element_of_C*-Algebra_is_Positive

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $x \in A$ be positive. 
Let $\alpha \ge 0$.

Then $\alpha x$ is positive.


Corollary
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $\le$ be the canonical ordering of $A$.
Let $x \in A$ be positive. 
Let $\alpha, \beta \in \R$ have $\alpha \le \beta$.

Then we have:

$\alpha x \le \beta x$


Proof
Let $\sigma_A$ denote the spectrum in $A$.
Since $x$ is positive, we have:

$\map {\sigma_A} x \subseteq \hointr 0 \infty$
From Spectral Mapping Theorem for Polynomials, we have:

$\map {\sigma_A} {\alpha x} = \set {\alpha t : t \in \map {\sigma_A} x}$
Since $t \in \map {\sigma_A} x$ has $t \ge 0$, we have $\alpha t \ge 0$ for each $t \in \map {\sigma_A} x$.
Hence we hae:

$\map {\sigma_A} {\alpha x} \subseteq \hointr 0 \infty$
Further from $(\text C^\ast 4)$ in the definition of an involution, we have:

$\paren {\alpha x}^\ast = \overline \alpha x^\ast = \alpha x$
since $x$ is Hermitian and $\alpha$ is real.
Hence $\alpha x$ is Hermitian with $\map {\sigma_A} {\alpha x} \subseteq \hointr 0 \infty$.
Hence $\alpha x$ is positive.
$\blacksquare$





