# 

Source: https://proofwiki.org/wiki/Mapping_from_Finite_Set_to_Itself_is_Injection_iff_Surjection

Theorem
Let $S$ be a finite set.
Let $f: S \to S$ be a mapping.

Then $f$ is injective if and only if $f$ is surjective.


Proof
Let $f$ be an injection.
From Injection to Image is Bijection, $S$ is equivalent to the image $\Img f$ of $f$.
We are given that $S$ is finite.
It follows from Infinite Set is Equivalent to Proper Subset that $\Img f = S$.
It follows by definition that $f$ is surjective.
$\Box$

Let $f$ be a surjection.
Then by Surjection iff Right Inverse there exists a mapping $g: S \to S$ such that:

$f \circ g = I_S$
where $I_S$ is the identity mapping.
By Right Inverse Mapping is Injection, $g$ is an injection.
By the above, it follows that $g$ is also a surjection.
Thus $g$ is a bijection.
It follows that $f = g^{-1}$ is also a bijection and so by definition an injection.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.11$




