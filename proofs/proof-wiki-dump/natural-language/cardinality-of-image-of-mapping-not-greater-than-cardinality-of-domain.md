# 

Source: https://proofwiki.org/wiki/Cardinality_of_Image_of_Mapping_not_greater_than_Cardinality_of_Domain

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $\card S$ denote the cardinal number of $S$.

Then:

$\card {\Img f} \le \card S$


Proof
By Restriction of Mapping to Image is Surjection, the mapping:

$f: S \to \Img f$
is a surjection.

Let $h$ be a mapping such that:

$h: \card S \to S$
is a bijection.

By Composite of Surjections is Surjection:

$f \circ h: \card S \to \Img f$
is a surjection.

Construct a set $R$ such that:

$R = \set {x \in \card S: \forall y \in x: \map f {\map h x} \ne \map f {\map h y} }$

It follows that:

$R \subseteq \card S$
By Subset of Ordinal implies Cardinal Inequality:

$\card R \le \card S$

Suppose:

$x \in R$
$y \in R$
$\map f {\map h x} = \map f {\map h y}$
Then, $x$ and $y$ are ordinals and by Ordinal Membership is Trichotomy:

$x < y \lor x = y \lor y < x$
If $x < y$, then:

$\map f {\map h x} \ne \map f {\map h y}$ by the definition of $R$.
Similarly, $y < x$ implies that:

$\map f {\map h x} \ne \map f {\map h y}$
Therefore, $x = y$.

It follows that the restriction $f \circ h \restriction_R : R \to \Img f$ is an injection.
$\Box$

Finally, by the definition of surjection, for all $x \in \Img f$, there is some $y \in \card S$ such that:

$\map f {\map h y} = x$
But since this is true for some $y$, the set:

$\set {\map y \in \card S: \map f {\map h y} = x}$
has a minimal element.

For this minimal element $y$, it follows that:

$\forall z \in y: \map f {\map h z} \ne \map f {\map h y}$
since if it were equal, this would contradict the fact that $y$ is a $\in$-minimal element.

It follows that the restriction $f \circ h \restriction_R : R \to \Img f$ is a bijection.

By the definition of set equivalence, $R \sim \Img f$.

So:














\(\ds \Img f\)

\(=\)







\(\ds \card R\)





Equivalent Sets have Equal Cardinal Numbers














\(\ds \)

\(\le\)







\(\ds \card S\)





Subset implies Cardinal Inequality



$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.26$




