# 

Source: https://proofwiki.org/wiki/Restriction_of_Mapping_to_Image_is_Surjection



Theorem
Let $f: S \to T$ be a mapping.
Let $g: S \to \Img f$ be the restriction of $f$ to $S \times \Img f$.

Then $g$ is a surjective restriction of $f$.


Proof
From Image is Subset of Codomain:

$\Img g \subseteq T$
Furthermore, by definition of image, we have:

$\forall s \in S: g \paren s \in \Img g$

Therefore, $g$ may be viewed as a mapping $g: S \to \Img g$.
Thus, by definition, $g$ is a surjection.
$\blacksquare$


Comment
Thus, for any mapping $f: S \to T$ which is not surjective, by restricting its codomain to its image, it can be considered as a surjection.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 23$: Restriction of a Mapping




