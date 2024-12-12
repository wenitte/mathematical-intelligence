# 

Source: https://proofwiki.org/wiki/Epimorphism_from_Division_Ring_to_Ring

Theorem
Let $\struct {K, +, \circ}$ be a division ring whose zero is $0_K$.
Let $\struct {R, +, \circ}$ be a ring whose zero is $0_R$.
Let $\phi: K \to R$ be a ring epimorphism.

Then one of the following applies:

$(1): \quad R$ is a null ring
$(2): \quad R$ is a division ring and $\phi$ is a ring isomorphism.


Proof
We have that the kernel of $K$ is an ideal.
From Ideals of Division Ring, $\map \ker K$ must therefore either be $0_K$ or $K$.

Let $\map \ker K = 0_K$.
Then by Ring Epimorphism with Trivial Kernel is Isomorphism $\phi$ is an ring isomorphism.
Thus $R$ a division ring like $K$.

Let $\map \ker K = K$.
Then:

$\forall x \in K: \map \phi x = 0_R$
As $\phi$ is an epimorphism, it is surjective.
Therefore:

$R = \set {0_R}$

Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.3$




