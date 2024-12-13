# 

Source: https://proofwiki.org/wiki/Right_Product_with_Degenerate_Linear_Transformation_is_Degenerate


It has been suggested that this page be renamed.In particular: Right Product by Degenerate Linear Transformation is DegenerateTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $U, V, W$ be vector spaces over a field $K$.
Let $G: U \to V$ be a degenerate linear transformation.
Let $M: V \to W$ be a linear transformation.

Then $M \circ G$ is degenerate.


Proof
Let $\set {s_1, \ldots, s_n}$ be a generator of $\Img G$.
Then $\set {\map M {s_1}, \ldots, \map M {s_n} }$ is a generator of $\Img {M \circ G}$.
By Cardinality of Generator of Vector Space is not Less than Dimension:

$\map \dim {\Img {M \circ G}} \le n$
$\blacksquare$


Sources
2002: Peter D. Lax: Functional Analysis: $2.2$: Index of a Linear Map




