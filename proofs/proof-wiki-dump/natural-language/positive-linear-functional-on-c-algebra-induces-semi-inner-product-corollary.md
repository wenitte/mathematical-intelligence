# 

Source: https://proofwiki.org/wiki/Positive_Linear_Functional_on_C*-Algebra_induces_Semi-Inner_Product/Corollary

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $f : A \to \C$ be a positive linear functional. 
Let $x, y \in A$.

Then:

$\cmod {\map f {y^\ast x} }^2 \le \map f {y^\ast y} \map f {x^\ast x}$


Proof
Define $\innerprod \cdot \cdot : A^2 \to A$ by:

$\innerprod x y = \map f {y^\ast x}$
for each $x, y \in A$. 
By Positive Linear Functional on C*-Algebra induces Semi-Inner Product, $\innerprod \cdot \cdot$ is a semi-inner product.
Hence from Cauchy-Bunyakovsky-Schwarz Inequality: Inner Product Spaces, we have:

$\cmod {\innerprod x y}^2 \le \innerprod x x \innerprod y y$
so that:

$\cmod {\map f {y^\ast x} }^2 \le \map f {y^\ast y} \map f {x^\ast x}$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {VIII}.5.11$




