# 

Source: https://proofwiki.org/wiki/Image_of_Countable_Set_under_Mapping_is_Countable

Definition
Let $S$ be a countable set.
Let $T$ be a set.
Let $f: S \to T$ be a mapping.

Then the image of $f$ is countable.


Proof
Let $A$ be the image of $f$.
Let $g: S \to A$ be the restriction of $f$ to the cartesian product $S \times A$.
By Surjection by Restriction of Codomain, $g$ is a surjection.

By Surjection from Natural Numbers iff Countable, there exists a surjection $\phi: \N \to S$.
Since the composition of surjections is a surjection, $g \circ \phi: \N \to A$ is a surjection.
Hence, by Surjection from Natural Numbers iff Countable, it follows that $A$ is countable.
$\blacksquare$





