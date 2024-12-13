# 

Source: https://proofwiki.org/wiki/Image_of_Composite_Mapping



Theorem
Let $f: S \to T$ and $g: R \to S$ be mappings.

Then:

$\Img {f \circ g} = f \sqbrk {\Img g}$
where:

$f \circ g$ is the composition of $g$ and $f$
$\operatorname{Img}$ denotes image
$f \sqbrk \cdot$ denotes taking image of a subset under $f$.


Corollary
Let $f: S \to T$ and $g: R \to S$ be mappings.

Then:

$\Img {f \circ g} \subseteq \Img f$


Proof
By definition of image:

$\Img {f \circ g} = \set {t \in T: \exists r \in R: \map {\paren {f \circ g} } r = t}$
and by definition of the image of a subset:

$f \sqbrk {\Img g} = \set {t \in T: \exists s \in \Img g: \map f s = t}$
which, expanding what it means that $s \in \Img g$, equals:

$f \sqbrk {\Img g} = \set {t \in T: \exists s \in S: \exists r \in R: \map g r = s \land \map f s = t}$
Now substituting $\map g r = s$ in $\map f s = t$, we obtain:

$f \sqbrk {\Img g} = \set {t \in T: \exists s \in S: \exists r \in R: \map f {\map g r} = t}$
which is seen to equal the expression for $\Img {f \circ g}$ as soon as $S$ is non-empty.

The remaining case to be checked is thus if $S = \O$.
From Null Relation is Mapping iff Domain is Empty Set, also $R = \O$, so that $f$ and $g$ are empty mappings.
By Image of Empty Set is Empty Set, we conclude:

$\Img {f \circ g} = \Img g = \O$
and also:

$f \sqbrk {\Img g} = \O$
which together yield the desired equality.

Hence the result.
$\blacksquare$


Also see
Image of Composite Relation




