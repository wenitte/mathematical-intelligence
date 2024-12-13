# 

Source: https://proofwiki.org/wiki/Positive_Linear_Functional_on_C*-Algebra_is_Increasing_on_Hermitian_Elements

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra with identity element ${\mathbf 1}_A$. 
Let $f : A \to \C$ be a positive linear functional.
Let $\le_A$ be the canonical preordering of $A$. 
Let $x, y \in A$ be Hermitian such that $x \le_A y$.

Then $\map f x \le \map f y$.


Proof
From the definition of the canonical preordering, we have:

$y - x$ is positive.
From the definition of a positive linear functional we have:

$\map f {y - x} \ge 0$
Since $f$ is linear, we have:

$\map f y - \map f x \ge 0$
From Positive Linear Functional on C*-Algebra is Real on Hermitian Elements, we have $\map f x \in \R$ and $\map f y \in \R$.
Hence:

$\map f x \le \map f y$
$\blacksquare$





