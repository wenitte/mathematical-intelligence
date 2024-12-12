# 

Source: https://proofwiki.org/wiki/Closed_Ideal_of_C*-Algebra_is_Self-Adjoint/Proof_2

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $I$ be a closed ideal of $A$.

Then for each $x \in I$, we have $x^\ast \in I$. 
That is, $I$ is self-adjoint.


Proof
Let $x \in I$.
Since $I$ is an ideal, we have $x^\ast x \in I$. 
From Generalized Polar Decomposition in C*-Algebra, there exists $u \in A$ such that $x = u \paren {\paren {x^\ast x}^{1/2} }^{1/2}$.
From Power of Power of Positive Element of Unital C*-Algebra, we have $x = u \paren {x^\ast x}^{1/4}$. 
From Continuous Function applied to Normal Element of Unital C*-Algebra is Positive iff Function is Non-Negative, $\paren {x^\ast x}^{1/4}$ is positive.
Hence we have by $(\text C^\ast 3)$ in the definition of a $\text C^\ast$-algebra:

$x^\ast = \paren {x^\ast x}^{1/4} u^\ast$
From Real-Valued Continuous Function Vanishing at Zero applied to Hermitian Element of Closed Ideal of Unital C*-Algebra is contained in Ideal, we have $\paren {x^\ast x}^{1/4} \in I$.
Hence since $I$ is an ideal, we have $x^\ast = \paren {x^\ast x}^{1/4} u^\ast \in I$.
Hence if $x \in I$ then $x^\ast \in I$.
So $I$ is self-adjoint.
$\blacksquare$


Sources
2000: John B. Conway: A Course in Operator Theory ... (previous) ... (next): Theorem $5.4$




