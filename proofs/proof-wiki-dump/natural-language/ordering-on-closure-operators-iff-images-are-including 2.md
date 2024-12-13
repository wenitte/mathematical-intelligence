# 

Source: https://proofwiki.org/wiki/Ordering_on_Closure_Operators_iff_Images_are_Including



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $f, g: S \to S$ be closure operators on $L$.

Then:

$f \preceq g$ if and only if $g \sqbrk S \subseteq f \sqbrk S$
where

$\preceq$ denotes the ordering on mappings
$f \sqbrk S$ denotes the image of $f$.


Proof
Sufficient Condition
Let $f \preceq g$.
Let $x \in g \sqbrk S$
By definition of image of mapping:

$\exists y \in S: \map g y = x$
By definition of closure operator/idempotent:

$\map g {\map g y} = \map g y$
By definition of ordering on mappings:

$\map f {\map g y} \preceq \map g {\map g y}$
By definition of closure operator/inflationary:

$\map g y \preceq \map f {\map g y}$
By definition of antisymmetry:

$\map f x = x$
Thus by definition of image of mapping:

$x \in f \sqbrk S$
$\Box$


Necessary Condition
Let $g \sqbrk S \subseteq f \sqbrk S$.
Let $x \in S$.
By definition of image of mapping:

$\map g x \in g \sqbrk S$
By definition of subset:

$\map g x \in f \sqbrk S$
By definition of image of mapping:

$\exists a \in S: \map f a = \map g x$
By definition of closure operator/idempotent:

$\map f {\map g x} = \map g x$
By definition of closure operator/inflationary:

$x \preceq \map g x$
Thus by definition of closure operator/increasing:

$\map f x \preceq \map g x$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL10:14




