# 

Source: https://proofwiki.org/wiki/Characterization_of_Interior_of_Triangle



Theorem
Let $\triangle$ be a triangle embedded in $\R^2$.
Denote the vertices of $\triangle$ as $A_1, A_2, A_3$.

For $i \in \set {1, 2, 3}$, put $j = i \bmod 3 + 1$, $k = \paren {i + 1} \bmod 3 + 1$, and:

$U_i = \set {A_i + s t \paren {A_j - A_i} + \paren {1 - s} t \paren {A_k - A_i} : s \in \openint 0 1, t \in \R_{>0} }$

Then:

$\ds \Int \triangle = \bigcap_{i \mathop = 1}^3 U_i$
where $\Int \triangle$ denotes the interior of the boundary of $\triangle$.


Proof
From Boundary of Polygon is Jordan Curve, it follows that the boundary of $\triangle$ is equal to the image of a Jordan curve, so $\Int \triangle$ is well-defined.


Interior is Subset
Let $q \in \Int \triangle$.
Let $i \in \set {1, 2, 3}$, and put $j = i \bmod 3 + 1$, $k = \paren {i + 1} \bmod 3 + 1$.
Let $S_i$ be the side of $\triangle$ that is adjacent to $A_i$ and $A_j$, let $S_j$ be the side adjacent to $A_j$ and $A_k$, and let $S_k$ be the side adjacent to $A_k$ and $A_i$.
Define $\mathbf v = A_j - A_i \in \R^2$, $\mathbf w = A_k - A_i \in \R^2$, and define $\mathbf u = \mathbf v - \mathbf w$.
Define two rays $\LL = \set {q + s \mathbf u: s \in \R_{\ge 0} }$, and $\LL' = \set {q + s' \paren {-\mathbf u} : s' \in \R_{\ge 0} }$.
As both rays are parallel to $S_j$, $\LL$ or $\LL'$ can only cross $S_j$ if $S_i$ and $S_k$ lie on opposite sides of $S_j$.
This would imply that there is a non-convex angle in $\triangle$.
As Sum of Angles of Triangle Equals Two Right Angles shows, this is impossible, as a non-convex angle is larger than two right angles.
Then, neither $\LL$ nor $\LL'$ crosses $S_j$.
As $\LL \cup \LL'$ is a straight line, and $\LL \cap \LL' = \set q$, it follows that $\LL$ and $\LL'$ cannot both intersect the same side.
Then Jordan Polygon Interior and Exterior Criterion shows that $\LL$ and $\LL'$ each crosses one of the sides $S_i$ and $S_k$.
When we denote the intersection points $p_1, p_2 \in \R^2$, we have:

$p_1 = A_i + r_1 \mathbf v = q + r \paren {\mathbf v - \mathbf w}$
$p_2 = A_i + r_2 \mathbf w = q + r' \paren {\mathbf v - \mathbf w}$
for some $r_1, r_2 \in \openint 0 1$, where either $r, -r' \in \R_{>0}$ or $-r, r' \in \R_{>0}$.
Subtracting the two equations gives:

$r_1 \mathbf v - r_2 \mathbf w = \paren {r - r'} \paren {\mathbf v - \mathbf w}$
which can be rearranged as:

$\paren {r_1 + r' - r} \mathbf v - \paren {r_2 + r' - r} \mathbf w$
As $\mathbf v$ and $\mathbf w$ are direction vectors for the adjacent sides $S_i$ and $S_k$, they cannot be parallel, so $v$ and $w$ are linearly independent.
It follows that $0 = r_1 + r' - r = r_2 + r' - r$, so $r_1 = r_2$.
Adding the two equations gives:

$2 A_i + r_1 \mathbf v + r_2 \mathbf w = 2 q + \paren {r + r'} \paren {\mathbf v - \mathbf w}$
which can be rearranged to give an expression for $q$:














\(\ds q\)

\(=\)







\(\ds A_i + \paren {\dfrac 1 2 r_1 - \dfrac 1 2 r - \dfrac 1 2 r'} \mathbf v + \paren {\dfrac 1 2 r_1 + \dfrac 1 2 r + \dfrac 1 2 r'} \mathbf w\)





as $r_1 = r_2$














\(\ds \)

\(=\)







\(\ds A_i + \paren {\dfrac 1 2 - \dfrac{r + r'} {2 r_1} } r_1 \mathbf v + \paren {1 - \paren {\dfrac 1 2 - \dfrac {r + r'} {2 r_1} } } r_1 \mathbf w\)









This shows that $q \in U_i$.
As $i \in \set {1, 2, 3}$ was arbitrary, it follows that $\ds q \in \bigcap_{i \mathop = 1}^3 U_i$.
$\Box$


Interior is Superset
Let $\ds q \in \bigcap_{i \mathop = 1}^3 U_i$.
For $i \in \set {1, 2, 3}$, define $j, k \in \set {1, 2, 3}$, the sides $S_i, S_j, S_k$ of $\triangle$, and their direction vectors  $\mathbf v, \mathbf u, \mathbf w$ as in the section above.
As $q \in U_i$, it follows that $q = A_i + st \mathbf v + \paren {1 - s} t \mathbf w$ for some $s \in \openint 0 1$ and $t \in \R_{>0}$.
Let $\LL = \set {q + r \paren {-\mathbf v}: r \in \R_{\ge 0} }$ be a ray with start point $q$.
If $\LL$ crosses the side $S_i$ that $\LL$ is parallel to, then the intersection point is:

$A_i + r_1 \mathbf v = q - r \mathbf v$
for some $r_1 \in \closedint 0 1, r \in \R_{\ge 0}$, which can be rearranged as:

$q = A_i + \paren {r_1 - r} \mathbf v + 0 \mathbf w$
As $\mathbf v$ and $\mathbf w$ are linearly independent, this implies $\paren {1 - s} t = 0$.
Then either $t = 0$ or $s = 1$, which is impossible, so $\LL$ does not intersect $S_i$.
However, we will show that $\LL$ crosses $S_k$, as the intersection point is:














\(\ds A_i + r_2 \mathbf w\)

\(=\)







\(\ds q - r \mathbf v\)




















\(\ds \)

\(=\)







\(\ds A_i + st \mathbf v + \paren {1 - s} t \mathbf w - r \mathbf v\)









for some $r_2 \in \closedint 0 1$, $r \in \R_{>0}$, which implies:

$\mathbf 0 = \paren {s t - r} \mathbf v + \paren { \paren {1 - s} t - r_2} \mathbf w$
As $v$ and $w$ are linearly independent, we have $0 = st - r$ and $0 = \paren {1 - s} t - r_2$.
Then $r = st \in R_{>0}$, and $r_2 = \paren {1 - s} t \in \R_{>0}$.
We must show that $r_2 < 1$.
As $q \in U_k$, we have $q = A_k + s't' \paren {-\mathbf w} + \paren {1 - s'} t' \mathbf u$ for some $s' \in \openint 0 1$, $t' \in \R_{>0}$.
As $A_k = A_i + \mathbf w$, we have:

$q - r \mathbf v = A_i + \mathbf w - s't' \mathbf w + \paren {1 - s'} t' \mathbf v - \paren {1 - s'} t' \mathbf w - r \mathbf v$
As $q - r \mathbf v = A_i + r_2 \mathbf w$, we rearrange the equality to obtain:

$\mathbf 0 = \paren { \paren {1 - s'} t' - r} \mathbf v + \paren {1 - r_2 - s't' - \paren {1 - s'} t' } \mathbf w$
As $\mathbf v$ and $\mathbf w$ are linearly independent, this gives two equations:

$0 = \paren {1 - s'} t' - r$
$0 = 1 - r_2 - s't' - \paren {1 - s'} t'$
Adding these equations gives:

$s't' + r = 1 - r_2$
As $s't' > 0$ and $r > 0$, it follows that $r_2 < 1$.
Then, we have shown that $\LL$ crosses $S_k$.
Let $\LL' = \set {q + r \mathbf v : r \in \R_{\ge 0} }$ be a ray with start point $q$.
An argument similar to the one above shows that $\LL'$ crosses the side $S_j$.
As $\LL \cup \LL'$ is a straight line, $\LL$ and $\LL'$ cannot both intersect the same side.
It follows that $\LL$ has one crossing of the boundary of $\triangle$, so the parity of $q$ is $\map {\mathrm {par} } q = 1$.
From Jordan Polygon Interior and Exterior Criterion, it follows that $q \in \Int \triangle$.
$\Box$

The result now follows by definition of set equality.
$\blacksquare$





