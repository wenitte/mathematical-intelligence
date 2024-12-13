# 

Source: https://proofwiki.org/wiki/Image_of_Set_under_Mapping_is_Set

Theorem
Let $A$ be a class.
Let $\mathrm U$ denote the universal class.
Let $f: A \to \mathrm U$ be a class mapping.
Let $S$ be a subset of $A$.


This article, or a section of it, needs explaining.In particular: Note that further work is needed on the Subset page to clarify that a "subset" of a "proper class" is indeed a "set". Some words are already on that page, but this needs to be formalised and separated out into its own transcluded "class theoretic" page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Then the image $f \sqbrk S$ is also a set.

If $A$ is a set, then this result is known as the Axiom of Replacement in Zermelo-Fraenkel set theory.


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.

Aiming for a contradiction, suppose $f \sqbrk S$ is not a set.
Then $f \sqbrk S$ must be proper.

By Restriction of Mapping to Image is Surjection, the restriction $f \restriction_{S \times f \sqbrk S}$ is a surjection.
But this contradicts Surjection from Class to Proper Class.
Thus by contradiction, $f \sqbrk S$ is a set.

Hence the result.
$\blacksquare$





