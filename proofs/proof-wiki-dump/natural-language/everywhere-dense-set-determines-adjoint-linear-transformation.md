# 

Source: https://proofwiki.org/wiki/Everywhere_Dense_Set_determines_Adjoint_Linear_Transformation

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \innerprod \cdot \cdot_X}$ and $\struct {Y, \innerprod \cdot \cdot_Y}$ be Hilbert spaces.
Let $\DD$ be an everywhere dense subset of $Y$. 
Let $T : X \to Y$ and $S : Y \to X$ be bounded linear transformations such that:

$\innerprod {T x} y_Y = \innerprod x {S y}_X$ for each $x \in X$ and $y \in \DD$.

Then $S = T^\ast$. 


Proof
By the definition of the adjoint, we have:

$\innerprod x {S y}_X = \innerprod {T x} y_Y = \innerprod x {T^\ast y}_X$ for each $x \in X$ and $y \in \DD$.
Let $y \in Y$.
Since $\DD$ is everywhere dense in $Y$, there exists a sequence $\sequence {y_n}_{n \mathop \in \N}$ in $\DD$ such that $y_n \to y$.
Then:

$\innerprod x {S y_n}_X = \innerprod x {T^\ast y_n}$ for each $x \in X$.
Taking $n \to \infty$ and using Inner Product is Continuous, we have:

$\innerprod x {S y}_X = \innerprod x {T^\ast y}$ for each $x \in X$ and $y \in Y$.
So:

$\innerprod x {S y - T^\ast y}_X = 0$ for each $x \in X$ and $y \in Y$.
Hence $S y - T^\ast y \in X^\bot$. 
From Linear Subspace Dense iff Zero Orthocomplement, we have $X^\bot = \set { {\mathbf 0}_Y}$. 
Hence $S y - T^\ast y = {\mathbf 0}_Y$.
So $S y = T^\ast y$ for each $y \in Y$. 
Hence $S = T^\ast$.
$\blacksquare$





