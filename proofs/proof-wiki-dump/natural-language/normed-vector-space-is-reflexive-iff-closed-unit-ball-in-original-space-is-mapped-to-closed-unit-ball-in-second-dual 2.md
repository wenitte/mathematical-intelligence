# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Reflexive_iff_Closed_Unit_Ball_in_Original_Space_is_Mapped_to_Closed_Unit_Ball_in_Second_Dual



Theorem
Let $X$ be a normed vector space. 
Let $X^\ast$ be the normed dual of $X$.
Let $X^{\ast \ast}$ be the second norm dual.
Let $\iota : X \to X^{\ast \ast}$ be the evaluation linear transformation.
Let $B_X^-$ be the closed unit ball of $X$.
Let $B_{X^{\ast \ast} }^-$ be the closed unit ball of $X^{\ast \ast}$. 

Then $X$ is reflexive if and only if $\iota B_X^- = B_{X^{\ast \ast} }^-$.


Proof
Necessary Condition
Suppose that $X$ is reflexive.
Then $\iota : X \to X^{\ast \ast}$ is an isometric isomorphism.
So from Injective Linear Transformation between Normed Vector Spaces sends Closed Unit Ball to Closed Unit Ball iff Isometric Isomorphism, we have that $\iota B_X^- = B_{X^{\ast \ast} }^-$. 
$\Box$


Sufficient Condition
Conversely suppose that $\iota B_X^- = B_{X^{\ast \ast} }^-$. 
From Linear Isometry is Injective, $\iota$ is injective.
Then we see that $\iota : X \to X^{\ast \ast}$ is an injective linear transformation with:

$\iota B_X^- = B_{X^{\ast \ast} }^-$
It follows that $\iota$ is an isometric isomorphism from Injective Linear Transformation between Normed Vector Spaces sends Closed Unit Ball to Closed Unit Ball iff Isometric Isomorphism. 
$\blacksquare$





