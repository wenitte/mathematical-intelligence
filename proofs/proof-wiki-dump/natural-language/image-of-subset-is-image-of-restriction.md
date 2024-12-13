# 

Source: https://proofwiki.org/wiki/Image_of_Subset_is_Image_of_Restriction

Theorem
Let $f: S \to T$ be a mapping.
Let $X \subseteq S$.
Let $f {\restriction_X}$ be the restriction of $f$ to $X$.

Then:

$f \sqbrk X = \Img {f {\restriction_X} }$
where $\Img f$ denotes the image of $f$, defined as:

$\Img f = \set {t \in T: \exists s \in S: t = \map f s}$


Proof
Let $y \in f \sqbrk X$.
Then by definition of the image of a subset:

$\exists x \in X: \map f x = y$
or equivalently:

$\exists x \in X: \tuple {x, y} \in f$

But then by definition of restriction of $f$ to $X$:

$f {\restriction_X} = \set {\tuple {x, y} \in f: x \in X}$
Thus by definition of the image set of $f {\restriction_X}$:

$\Img {f {\restriction_X} } = f {\restriction_X} \sqbrk X = \set {y \in T: \exists x \in X: \tuple {x, y} \in f {\restriction_X} }$
Hence it can be seen that:

$y \in \Img {f {\restriction_X} }$
So:

$f \sqbrk X \subseteq \Img {f {\restriction_X} }$
$\Box$

Now suppose that $y \in \Img {f {\restriction_X} }$.
Then by definition of the image set of $f {\restriction_X}$:

$\exists x \in S: \tuple {x, y} \in f {\restriction_X}$
By definition of restriction of $f$ to $X$:

$x \in X$
Thus by definition of image of a subset:

$y \in f \sqbrk X$
So:

$\Img {f {\restriction_X} } \subseteq f \sqbrk X$
$\Box$

We have:

$f \sqbrk X \subseteq \Img {f {\restriction_X} }$
$\Img {f {\restriction_X} } \subseteq f \sqbrk X$
The result follows by definition of set equality.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.6$: Functions: Exercise $1.6.4 \ \text{(i)}$




