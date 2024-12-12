# 

Source: https://proofwiki.org/wiki/Distance-Preserving_Surjection_is_Isometry_of_Metric_Spaces

Theorem
Let $M_1 = \left({A_1, d_1}\right)$ and $M_2 = \left({A_2, d_2}\right)$ be metric spaces.
Let $\phi: M_1 \to M_2$ be a surjective distance-preserving mapping.
That is:

$\forall a, b \in M_1: d_1 \tuple {a, b} = d_2 \tuple {\map \phi a, \map \phi b}$

Then $\phi$ is an isometry.


Proof
The premises satisfy all elements of the definition of isometry except for bijectivity.
As we presume $\phi$ to be surjective we need only show that it is injective.
By Distance-Preserving Mapping is Injection of Metric Spaces then $\phi$ is injective.
$\blacksquare$





