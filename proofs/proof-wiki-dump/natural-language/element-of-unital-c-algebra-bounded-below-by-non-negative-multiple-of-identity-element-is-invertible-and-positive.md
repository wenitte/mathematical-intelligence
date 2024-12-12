# 

Source: https://proofwiki.org/wiki/Element_of_Unital_C*-Algebra_Bounded_below_by_Non-Negative_Multiple_of_Identity_Element_is_Invertible_and_Positive

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $\le_A$ be the canonical preordering of $A$.
Let $a \in A$ be such that:

$a \ge_A \alpha {\mathbf 1}_A$
for some $\alpha > 0$.

Then $a$ is invertible and positive element.


Proof
From Element of Unital C*-Algebra Bounded by Multiple of Identity is Hermitian, $a$ is Hermitian.
From Bounds on Hermitian Element of Unital C*-Algebra in terms of Bounds on Spectrum, we then have:

$\map {\sigma_A} a \subseteq \hointr \alpha \infty \subseteq \hointr 0 \infty$
So $a$ is  positive.
We have $\alpha > 0$ and hence $0 \not \in \map {\sigma_A} a$.
Hence $a$ is invertible.
$\blacksquare$





