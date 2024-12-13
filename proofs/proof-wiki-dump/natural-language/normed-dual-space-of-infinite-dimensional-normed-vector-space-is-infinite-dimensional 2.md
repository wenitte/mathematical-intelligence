# 

Source: https://proofwiki.org/wiki/Normed_Dual_Space_of_Infinite-Dimensional_Normed_Vector_Space_is_Infinite-Dimensional

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be an infinite dimensional normed vector space.
Let $X^\ast$ be the normed dual space of $X$.

Then $X^\ast$ is infinite dimensional.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Aiming for a contradiction, suppose $X^\ast$ is finite dimensional.
Then from Normed Dual Space of Finite-Dimensional Vector Space is Isometrically Isomorphic to Original Space:

$X^{\ast \ast} \cong X^{\ast}$
From Isometric Isomorphism between Normed Vector Spaces preserves Dimension:

$\dim X^{\ast \ast} = \dim X^\ast$
Let $\iota : X \to X^{\ast \ast}$ be the evaluation linear transformation.
Then $\iota$ is a linear isometry from Evaluation Linear Transformation on Normed Vector Space is Linear Isometry.
Hence $\iota : X \to \iota X$ is an isometric isomorphism.
From Isometric Isomorphism between Normed Vector Spaces preserves Dimension:

$\dim X = \dim \iota X$
From Image of Vector Subspace under Linear Transformation is Vector Subspace:

$\iota X$ is a linear subspace of $X^{\ast \ast}$.
From Dimension of Proper Subspace is Less Than its Superspace:

$\dim \iota X \le \dim X^{\ast \ast}$
So:

$\dim X \le \dim X^{\ast \ast} = \dim X^\ast$
But $\dim X$ is not finite.
Hence $\dim X^\ast$ is not finite. 
This contradicts our assumption that $X^\ast$ is finite dimensional.
Hence by Proof by Contradiction $X^\ast$ is infinite dimensional.
$\blacksquare$





