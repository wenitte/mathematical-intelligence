# 

Source: https://proofwiki.org/wiki/Reverse_Triangle_Inequality/Real_and_Complex_Fields/Proof_1

Theorem
Let $x$ and $y$ be elements of either the real numbers $\R$ or the complex numbers $\C$.
Then:

$\cmod {x - y} \ge \size {\cmod x - \cmod y}$


Proof
Let $X$ denote either $\R$ or $\C$ as appropriate.
From Real Number Line is Metric Space and Complex Plane is Metric Space the distance function $d: X \times X \to \R$ can be defined as:

$\map d {x, y} = \size {x - y}$

From the Reverse Triangle Inequality as applied to metric spaces:

$(1): \quad \forall x, y, z \in X: \size {\map d {x, z} - \map d {y, z} } \le \map d {x, y}$

Let $z = 0$.
Then $(1)$ translates to:

$\forall x, y, z \in X: \size {\size {x - 0} - \size {y - 0} } \le \size {x - y}$
Hence the result.
$\blacksquare$





