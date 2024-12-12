# 

Source: https://proofwiki.org/wiki/Closure_of_Subgroup_is_Group

Theorem
Let $G$ be a topological group.
Let $H\leq G$ be a subgroup.
Let $\overline H$ denote its closure.

Then $\overline H$ is a subgroup of $G$.


Proof
We use the One-Step Subgroup Test.
Because $H \subset \overline H$, $\overline H$ is non-empty.
Let $a, b \in \overline H$.
Let $U$ be a neighborhood of $a b^{-1}$.
Let the mapping $f: G\times G \to G$ be defined as:

$\map f {x, y} = x y^{-1}$
By definition of topological group, $f$ is continuous.
By definition of product space, there exist neighborhoods $A, B$ of $a, b$ respectively such that:

$A \times B \subset f^{-1} \sqbrk U$
By assumption, there exist $x \in A \cap H$ and $y \in B \cap H$.
Then:

$x y^{-1} \subset U \cap H$
Because $U$ was arbitrary:

$a b^{-1} \in \overline H$
By One-Step Subgroup Test, $\overline H$ is a subgroup of $G$.
$\blacksquare$





