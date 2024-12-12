# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Intersections/General_Case

Theorem
Let $I$ be an index set.
Let $\family {S_i}_{i \mathop \in I}$ and $\family {T_i}_{i \mathop \in I}$ be indexed families of sets over the same index set.

Then:

$\ds \paren {\prod_{i \mathop \in I} S_i} \cap \paren {\prod_{i \mathop \in I} T_i} = \prod_{i \mathop \in I} \paren {S_i \cap T_i}$
where $\ds \prod$ denotes Cartesian product.


Proof
Let $\family {x_i}_{i \mathop \in I} \in \ds \paren {\prod_{i \mathop \in I} S_i} \cap \paren {\prod_{i \mathop \in I} T_i}$.
By definition of intersection, this is equivalent to the conjunction of:

$\family {x_i}_{i \mathop \in I} \in \ds \prod_{i \mathop \in I} S_i$
$\family {x_i}_{i \mathop \in I} \in \ds \prod_{i \mathop \in I} T_i$
By definition of Cartesian product, this means, for all $i \in I$:

$x_i \in S_i$ and $x_i \in T_i$
Again by definition of intersection, this is equivalent to, for all $i \in I$:

$x_i \in S_i \cap T_i$
Finally, by definition of Cartesian product, this is equivalent to:

$\family {x_i}_{i \mathop \in I} \in \ds \prod_{i \mathop \in I} \paren {S_i \cap T_i}$

The result follows by definition of set equality.
$\blacksquare$





