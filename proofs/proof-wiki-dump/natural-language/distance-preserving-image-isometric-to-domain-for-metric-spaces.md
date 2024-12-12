# 

Source: https://proofwiki.org/wiki/Distance-Preserving_Image_Isometric_to_Domain_for_Metric_Spaces

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $\phi: M_1 \to M_2$ be a distance-preserving mapping.

Then:

$\phi: M_1 \to \Img \phi$
is an isometry.


Proof
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $\phi$ be a distance-preserving mapping from $M_1$ to $M_2$.
Let $A = \Img \phi$ be the image of $\phi$.
By Subspace of Metric Space is Metric Space, $\struct {A, d_2}$ is a metric space.
As $\phi$ is a distance-preserving mapping, by Distance-Preserving Mapping is Injection of Metric Spaces it is injective.
From Restriction of Injection is Injection, $\phi: M_1 \to \Img \phi$ is an injection.
From Restriction of Mapping to Image is Surjection, $\phi: M_1 \to \Img \phi$ is a surjection.
Thus $\phi \to \Img \phi$ is by definition a bijection.
Thus $\phi: M_1 \to \Img \phi$ is a bijective distance-preserving mapping.
Hence, by definition, $\phi: M_1 \to \Img \phi$ is an isometry.
$\blacksquare$





