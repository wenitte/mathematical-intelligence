# 

Source: https://proofwiki.org/wiki/Scalar_Multiplication_by_Minus_One_reverses_Preordering_in_Vector_Space

Definition
Let $\GF \in \set {\R, \C}$.
Let $\tuple {X, \le}$ be a preordered vector space over $\GF$.
Let $x, y \in X$ be such that:

$x \le y$

Then:

$-y \le -x$


Proof
From Characterization of Preordered Vector Spaces, there exists a convex cone $X^+$ such that for each $u, v \in X$:

$u \le v$ if and only if $v - u \in X^+$.
Since $x \le y$ we have $y - x \in X^+$.
We can write $-x - \paren {-y} = y - x \in X^+$.
Hence we also obtain $-y \le -x$. 
$\blacksquare$





