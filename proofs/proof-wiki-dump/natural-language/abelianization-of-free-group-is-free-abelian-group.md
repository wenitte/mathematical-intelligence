# 

Source: https://proofwiki.org/wiki/Abelianization_of_Free_Group_is_Free_Abelian_Group

Theorem
Let $X$ be a set.
Let $\struct {F_X, \iota}$ be a free group on $X$.
Let $F_X^{\mathrm {ab} }$ be its abelianization.
Let $\pi : F_X \to F_X^{\mathrm {ab} }$ be the quotient group epimorphism.

Then $\struct {F_X^{\mathrm {ab} }, \pi \circ \iota}$ is a free abelian group on $X$.


Proof
$\xymatrix {
X \ar[d]_\iota \ar[rd]^{\forall f} & \\
F_X \ar[d]_\pi \ar[r]^{\exists ! g} & H \\
F_X^{\mathrm {ab} } \ar[ru]_{\exists ! h} }$
Lef $H$ be any abelian group and $f:X \to H$ be any mapping.
By Universal Property of Free Group on Set, there exists a unique group homomorphism $g:F_X \to H$ such that $g \circ \iota = f$.
By Universal Property of Abelianization of Group, there exists a unique group homomorphism $h:F_X^{\mathrm {ab} } \to H$ such that $h \circ \pi = g$.
Therefore, $h \circ (\pi \circ \iota) = f$.


This article contains statements that are justified by handwavery.In particular: Actually we have to show that $\pi \circ \iota$ is the natural inclusion from $X$ to $F_X^{\mathrm {ab} }$...You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence, $F_X^{\mathrm {ab} }$ satisfies the Universal Property of Free Abelian Group on Set.
Hence $F_X^{\mathrm {ab} }$ is a Free Abelian Group on $X$.

$\blacksquare$





