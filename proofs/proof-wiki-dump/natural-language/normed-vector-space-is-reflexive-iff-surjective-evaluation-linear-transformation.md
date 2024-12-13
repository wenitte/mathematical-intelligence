# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Reflexive_iff_Surjective_Evaluation_Linear_Transformation

Theorem
Let $\struct {X, \norm \cdot_X}$ be a normed vector space.
Let $\struct {X^{\ast \ast}, \norm \cdot_{X^{\ast \ast} } }$ be the second normed dual of $\struct {X, \norm \cdot_X}$.
Let $\iota : X \to X^{\ast \ast}$ be the evaluation linear transformation.

Then $X$ is reflexive if and only if:

$\iota$ is surjective.
That is: 

$\iota X = X^{\ast \ast}$.


Proof
From the definition of a reflexive space, we have that $X$ is reflexive if and only if:

$\iota$ is an isometric isomorphism.
From Evaluation Linear Transformation on Normed Vector Space is Linear Isometry, we have: 

$\iota$ is a linear isometry.
From Linear Isometry is Injective: Corollary, we then have: 

$\iota$ is an isometric isomorphism if and only if $\iota$ is surjective.
That is: 

$X$ is reflexive if and only if $\iota$ is surjective.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $26.1$: The Second Dual




