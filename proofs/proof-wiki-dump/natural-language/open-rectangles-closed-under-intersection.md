# 

Source: https://proofwiki.org/wiki/Open_Rectangles_Closed_under_Intersection

Theorem
Let $\paren {\openint {\mathbf a} {\mathbf b} }$ and $\paren {\openint {\mathbf c} {\mathbf d} }$ be open $n$-rectangles.

Then $\paren {\openint {\mathbf a} {\mathbf b} } \cap \paren {\openint {\mathbf c} {\mathbf d} }$ is also an open $n$-rectangle.


Proof
From Cartesian Product of Intersections: General Case, we have:

$\ds \paren {\openint {\mathbf a} {\mathbf b} } \cap \paren {\openint {\mathbf c} {\mathbf d} } = \prod_{i \mathop = 1}^n \openint {a_i} {b_i} \cap \openint {c_i} {d_i}$

Therefore, it suffices to show that the intersection of two open intervals is again an open interval.
Now let $x \in \openint {a_i} {b_i} \cap \openint {c_i} {d_i}$.
Then $x$ is subject to:

$x > a_i$ and $x > c_i$, that is: $x > \max \set {a_i, c_i}$
$x < b_i$ and $x < d_i$, that is: $x < \min \set {b_i, d_i}$
and we see that these conditions are satisfied if and only if:

$x \in \openint {\max \set {a_i, c_i} } {\min \set {b_i, d_i} }$
Thus, we conclude:

$\openint {a_i} {b_i} \cap \openint {c_i} {d_i} = \openint {\max \set {a_i, c_i} } {\min \set {b_i, d_i} }$
showing that indeed the intersection is an open interval.

Combining this with the above reasoning, it follows that indeed:

$\paren {\openint {\mathbf a} {\mathbf b} } \cap \paren {\openint {\mathbf c} {\mathbf d} }$
is an open $n$-rectangle.
$\blacksquare$





