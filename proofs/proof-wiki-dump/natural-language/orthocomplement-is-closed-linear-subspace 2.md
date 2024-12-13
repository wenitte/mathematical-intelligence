# 

Source: https://proofwiki.org/wiki/Orthocomplement_is_Closed_Linear_Subspace

Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space.
Let $A \subseteq V$ be a subset of $V$.

Then the orthocomplement $A^\perp$ of $A$ is a closed linear subspace of $H$.


Proof
Let $\sequence {x_n} \subset A^\perp$ be a convergent sequence.
Let $x$ be the limit of $\sequence {x_n}$.
Then, by the definition of orthocomplement:

$\forall n \in \N, y \in A: \innerprod {x_n} y = 0$
Passing to the limit, from Inner Product is Continuous we have:

$\forall y \in A: \innerprod x y = 0$
So:

$x \in A^\perp$
This shows that $A^\perp$ is closed.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality




