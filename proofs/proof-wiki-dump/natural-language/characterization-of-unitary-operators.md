# 

Source: https://proofwiki.org/wiki/Characterization_of_Unitary_Operators



Theorem
Let $\HH$ be a Hilbert space.
Let $A$ be a bounded linear operator on $\HH$.

Then the following are equivalent:

$(1): \quad A$ is a unitary operator
$(2): \quad A^* A = A A^* = I$, where $A^*$ denotes the adjoint of $A$, and $I$ denotes the identity operator
$(3): \quad A$ is a normal isometry


Proof
$(3)$ implies $(2)$
Suppose that $A$ is a normal isometry.
Then:

$\innerprod {A x} {A x} = \innerprod x x$ for each $x \in \HH$.
From Adjoint is Involutive, we have:

$\innerprod {A x} {\paren {A^\ast}^\ast x} = \innerprod x x$
So, from the definition of the adjoint, we have:

$\innerprod {A^\ast A x} x = \innerprod {I x} x$ for all $x \in \HH$.
Hence from Operator with Zero Numerical Range is Zero Operator: Corollary, we have:

$A^\ast A = I$
Since $A$ is normal, we also have:

$A A^\ast = I$
$\Box$


$(1)$ implies $(2)$
Let $A$ be a unitary operator.
From the proof that $(3)$ implies $(2)$, we have: 

$A^\ast A = I$
It remains to show that:

$A A^\ast = I$
Let $y \in \HH$, we aim to show:

$A A^\ast y = y$
Since $A$ is a surjection, there exists $x \in \HH$ such that:

$A x = y$
Then we have:

$x = A^\ast A x = A^\ast y$
Then we have:

$A A^\ast y = A x = y$
$\Box$


$(2)$ implies $(1)$
Suppose that:

$A^\ast A = A A^\ast = I$.
By hypothesis, $A$ is linear. 
Since $A A^\ast = I$, we have $\map A {A^\ast x} = x$ for each $x \in \HH$. 
Hence $A$ is also surjective. 
Finally, since $A^\ast A = I$, we have:

$\innerprod {A^\ast A x} y = \innerprod x y$ for each $x, y \in \HH$.
From the definition of the adjoint, we have:

$\innerprod {A x} {A^{\ast \ast} y} = \innerprod x y$ for each $x, y \in \HH$.
From Adjoint is Involutive, we have:

$\innerprod {A x} {A y} = \innerprod x y$ for each $x, y \in \HH$.
Hence $A$ is an isomorphism.
$\Box$


$(2)$ implies $(3)$
Suppose that:

$A^\ast A = A A^\ast = I$
In particular $A^\ast A = A A^\ast$, so $A$ is normal. 
From the fact that $(2)$ implies $(1)$, $A$ is a unitary operator.
Hence $A$ is a surjective isometry.
Hence $A$ is a normal isometry.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.18$




