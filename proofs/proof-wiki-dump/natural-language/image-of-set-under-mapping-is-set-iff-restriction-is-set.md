# 

Source: https://proofwiki.org/wiki/Image_of_Set_under_Mapping_is_Set_iff_Restriction_is_Set

Theorem
Let $V$ be a basic universe
Let $f: V \to V$ be a mapping.
Let $x$ be a set.
Let $f \sqbrk x$ denote the image of $x$ under $f$.
Let $f {\restriction} x$ denote the restriction of $f$ to $x$.

Then $f \sqbrk x$ is a set if and only if $f {\restriction} x$ is a set.


Proof
Let $f {\restriction} x$ be a set.
Then its image is also a set.
But then:

$\Img {f {\restriction} x} = f \sqbrk x$

Conversely let $f \sqbrk x$ be a set.
From Cartesian Product of Sets is Set:

$x \times f \sqbrk x$ is a set.
From Restriction of Mapping is Subclass of Cartesian Product:

$f {\restriction} A \subseteq A \times f \sqbrk A$
The result follows from Subclass of Set is Set.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 1$ A few preliminaries: Proposition $1.2$




