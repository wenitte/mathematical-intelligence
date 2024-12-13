# 

Source: https://proofwiki.org/wiki/Half-Open_Rectangles_Closed_under_Intersection

Theorem
Let $\horectr {\mathbf a} {\mathbf b}$ and $\horectr {\mathbf c} {\mathbf d}$ be half-open $n$-rectangles.

Then $\horectr {\mathbf a} {\mathbf b} \cap \horectr {\mathbf c} {\mathbf d}$ is also a half-open $n$-rectangle.


Proof
As $\O$ is trivially a half-open $n$-rectangle, let us assume that:

$\horectr {\mathbf a} {\mathbf b} \cap \horectr {\mathbf c} {\mathbf d} \ne \O$

By Cartesian Product of Intersections: General Case, it follows that:

$\ds \horectr {\mathbf a} {\mathbf b} \cap \horectr {\mathbf c} {\mathbf d} = \prod_{i \mathop = 1}^n \hointr {a_i} {b_i} \cap \hointr {c_i} {d_i}$
which leaves only to prove that the $\hointr {a_i} {b_i} \cap \hointr {c_i} {d_i}$ are half-open intervals.

Now let $x \in \hointr {a_i} {b_i} \cap \hointr {c_i} {d_i}$.
Then $x$ is subject to:

$x \ge a_i$ and $x \ge c_i$, i.e., $x \ge \max \set {a_i, c_i}$
$x < b_i$ and $x < d_i$, i.e., $x < \min \set {b_i, d_i}$
and we see that these conditions are satisfied if and only if:

$x \in \hointr {\max \set {a_i, c_i} } {\min \set {b_i, d_i} }$
Thus, we conclude:

$\hointr {a_i} {b_i} \cap \hointr {c_i} {d_i} = \hointr {\max \set {a_i, c_i} } {\min \set {b_i, d_i} }$
showing that indeed the intersection is a half-open interval.

Combining this with the above reasoning, it follows that indeed:

$\horectr {\mathbf a} {\mathbf b} \cap \horectr {\mathbf c} {\mathbf d}$
is again a half-open $n$-rectangle.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 5$: Problem $7$




