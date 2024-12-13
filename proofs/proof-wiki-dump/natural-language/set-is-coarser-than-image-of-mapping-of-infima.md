# 

Source: https://proofwiki.org/wiki/Set_is_Coarser_than_Image_of_Mapping_of_Infima

Theorem
Let $\struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $f, g:\N \to S$ be mappings such that:

$\forall n \in \N: \map g n = \inf \set {\map f m: m \in \N \land m \le n}$

Then $f \sqbrk \N$ is coarser than $g \sqbrk \N$
where $f \sqbrk \N$ denotes the image of mapping $f$.


Proof
Let $x \in f \sqbrk \N$.
By definition of image of mapping:

$\exists n \in \N: x = \map f n$
By definition of $g$:

$\map g n = \inf \set {\map f m: m \in \N \land m \le n}$
By definition of reflexivity:

$n \le n$
Then

$\map f n \in \set {\map f m: m \in \N \land m \le n}$
By definitions of infimum and lower bound:

$\map g n \preceq x$
By definition of image of mapping:

$\map g n \in g \sqbrk \N$
Thus

$\exists y \in g \sqbrk \N: y \preceq x$
$\blacksquare$


Sources
Mizar article WAYBEL12:31




