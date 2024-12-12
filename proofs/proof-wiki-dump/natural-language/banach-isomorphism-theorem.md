# 

Source: https://proofwiki.org/wiki/Banach_Isomorphism_Theorem



Theorem
Let $\struct {X, \norm \cdot_X}$ and $\struct {Y, \norm \cdot_Y}$ be Banach spaces.
Let $T : X \to Y$ be a bijective bounded linear transformation.

Then the inverse of $T$ is a bounded linear transformation.
That is, $T$ is a normed vector space isomorphism.


Proof
Let $B_X^-$ be the closed unit ball of $X$.
Let $B_Y^-$ be the closed unit ball of $Y$.
Let $T^{-1} : Y \to X$ be the inverse of $T$.
From Inverse of Linear Transformation is Linear Transformation, $T^{-1} : Y \to X$ is a linear transformation.
It remains to show that $T^{-1}$ is bounded.
Since $T$ is bijective, it is surjective.
So, by the Banach-Schauder Theorem:

$T$ is an open mapping.
From Characterization of Open Linear Transformation between Normed Vector Spaces, there exists $\delta > 0$ such that: 

$\delta B_Y^- \subseteq T \sqbrk {B_X^-}$
Then we have from Image of Subset under Mapping is Subset of Image and Image of Preimage under Mapping: 

$T^{-1} \sqbrk {\delta B_Y^-} \subseteq B_X^-$
From Image of Dilation of Set under Linear Transformation is Dilation of Image, we have: 

$T^{-1} \sqbrk {B_Y^-} \subseteq \delta^{-1} B_X^-$
From Norm of Bounded Linear Transformation in terms of Closed Unit Ball, $T^{-1}$ is therefore bounded.
$\blacksquare$


Also known as
This theorem is also known as the inverse mapping theorem.


Source of Name
This entry was named for Stefan Banach.


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $23.1$: The Open Mapping and Inverse Mapping Theorems




