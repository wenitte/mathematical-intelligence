# 

Source: https://proofwiki.org/wiki/Closed_*-Subalgebra_of_C*-Algebra_is_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $B \subseteq A$ be a closed $\ast$-subalgebra of $A$. 

Then $\struct {B, \ast, \norm {\, \cdot \,} }$ is a $\text C^\ast$-algebra.


Proof
Since $\struct {B, \ast}$ is a $\ast$-subalgebra of $A$, it is in particular a $\ast$-algebra.
From Closed Subspace of Banach Space forms Banach Space, $\struct {B, \ast, \norm {\, \cdot \,} }$ is additionally a Banach space.
We have:

$\norm {x y} \le \norm x \norm y$
and:

$\norm {x x^\ast} = \norm x^2$
for each $x \in B$, since these properties hold for all $x \in A$.
Hence $\struct {B, \ast, \norm {\, \cdot \,} }$ is a $\text C^\ast$-algebra.
$\blacksquare$





