# 

Source: https://proofwiki.org/wiki/Composition_of_Idempotent_Mappings

Theorem
Let $S$ be a set.
Let $f, g: S \to S$ be idempotent mappings.
Suppose that $f \circ g$ and $g \circ f$ have the same images.
That is, suppose that $f \sqbrk {g \sqbrk S} = g \sqbrk {f \sqbrk S}$.

Then $f \circ g$ and $g \circ f$ are idempotent.


Proof
Let $x \in S$.
By the premise:

$\map f {\map g x} \in g \sqbrk {f \sqbrk S}$
Since $f \sqbrk S \subseteq S$:

$\map f {\map g x} \in g \sqbrk S$
Thus for some $y \in S$:

$\map f {\map g x} = \map g y$
Since $g$ is idempotent:

$\map g {\map g y} = \map g y$
By the choice of $y$:

$\map g {\map f {\map g x} } = \map g {\map g y} = \map g y = \map f {\map g x}$
Thus:

$\map f {\map g {\map f {\map g x} } } = \map f {\map f {\map g x} } = \map f {\map g x}$
That is, $f \circ g$ is idempotent.
$\blacksquare$





