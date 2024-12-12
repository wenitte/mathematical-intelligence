# 

Source: https://proofwiki.org/wiki/Distance-Preserving_Mapping_is_Injection_of_Metric_Spaces

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $\phi: M_1 \to M_2$ be a distance-preserving mapping.
Then $\phi$ is an injection.


Proof
Let $a, b \in A_1$ and suppose that $\map \phi a = \map \phi b$.
Then by the definition of a metric space:

$\map {d_2} {\map \phi a, \map \phi b} = 0$

By the definition of a distance-preserving mapping then:

$\map {d_1} {a, b} = 0$
Thus by the definition of a metric space:

$a = b$

Hence $\phi$ is injective.
$\blacksquare$





