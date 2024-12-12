# 

Source: https://proofwiki.org/wiki/Composite_of_Mapping_with_Inverse_of_Another_is_Identity_implies_Mappings_are_Equal

Theorem
Let $A$ and $B$ be classes.
Let $f$ and $g$ be mappings on $A \times B$.
Let $f$ and $g$ be such that:

$f \circ g^{-1} = I_B$
where:

$g^{-1}$ denotes the inverse of $g$
$I_B$ denotes the identity mapping on $B$
$\circ$ denotes composition of mappings.
Then:

$f = g$

The validity of the material on this page is questionable.In particular: Each of the definitions inverse, identity mapping and composition of mappings is defined on sets only. They need to be expanded to classes.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
Let $\tuple {a, b} \in f$.
Then because $\tuple {b, b} \in I_B$ we must have:

$\tuple {b, a} \in g^{-1}$
and so by definition of inverse of mapping:

$\tuple {a, b} \in g$
Hence:

$f \subseteq g$

Let $\tuple {a, b} \in g$.
Then by definition of inverse of mapping:

$\tuple {b, a} \in g^{-1}$
Then because $\tuple {b, b} \in I_B$ we must have:

$\tuple {a, b} \in f$
Hence:

$g \subseteq f$
Hence by definition of set equality:

$f = g$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 1$ A few preliminaries




