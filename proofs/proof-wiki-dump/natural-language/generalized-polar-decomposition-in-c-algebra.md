# 

Source: https://proofwiki.org/wiki/Generalized_Polar_Decomposition_in_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra. 
Let $x \in A$.
Let $\cmod x$ be the modulus of $x$. 
Let $0 < \beta < 1$ be a real number.

Then there exists $u \in A$ such that:

$x = u \cmod x^\beta$
where $\cmod x^\beta$ is obtained from the continuous functional calculus.


Proof
Let $\le_A$ be the canonical preordering of $A$.
From Product of Element of C*-Algebra with its Star is Positive, we have ${\mathbf 0}_A \le_A x^\ast x$.
Hence since $x^\ast x \le_A x^\ast x$ and $0 < \beta/2 < 1/2$, there exists $u \in A$ such that:

$x = u \paren {x^\ast x}^{\beta/2}$
from Factorization Theorem for C*-Algebra in terms of Bound on Modulus.
From Power of Power of Positive Element of Unital C*-Algebra, we have:

$u \paren {x^\ast x}^{\beta/2} = u \paren {\paren {x^\ast x}^{1/2} }^\beta = u \cmod x^\beta$
$\blacksquare$


Sources
2000: John B. Conway: A Course in Operator Theory ... (previous) ... (next): Corollary $4.7$




