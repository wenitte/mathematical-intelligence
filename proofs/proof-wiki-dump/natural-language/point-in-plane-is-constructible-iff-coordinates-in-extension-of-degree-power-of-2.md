# 

Source: https://proofwiki.org/wiki/Point_in_Plane_is_Constructible_iff_Coordinates_in_Extension_of_Degree_Power_of_2

Theorem
Let $\CC$ be a Cartesian plane.
Let $S$ be a set of points in $\CC$.
Let $F$ be the smallest field containing all the coordinates of the points in $S$.

Let $P = \tuple {a, b}$ be a point in $\CC$.

Then:

$P$ is constructible from $S$ using a compass and straightedge construction
if and only if:

the coordinates of $P$ are contained in a finite extension $K$ of $F$ whose degree is given by:
$\index K F = 2^m$
for some $m \in \Z_{\ge 0}$.


Proof
A point $P$ is constructed in a compass and straightedge construction from one of $3$ basic operations:

$(1): \quad$ the intersection of $2$ straight lines
$(2): \quad$ the intersection of a straight line and the circumference of a circle
$(3): \quad$ the intersection of the circumferences of $2$ circle.

Let $A$, $B$, $C$ and $D$ be points in $S$.

In case $(1)$, the equations defining the straight lines $AB$ and $CD$ are polynomials of degree $1$.
Hence the coordinates of $P$ can be found by solving the linear simultaneous equations defining $AB$ and $CD$.
It follows that the solution is in $F$.
$\Box$

In case $(2)$:

the equation defining the circle whose center is at $A$ and whose radius is $AB$ is of the form $x^2 + y^2 + 2 f x + 2 g y + c = 0$, where $c, f, g \in F$.
while:

the equation defining the straight line $CD$ is a polynomial of degree $1$.
The $x$-coordinate of $P$ is then the root of a quadratic equation with coefficients in $F$.
The $y$-coordinate of $P$ is then found by solving a linear equation.
Thus the coordinates of $P$ are elements of either a field extension of $F$ of degree $2$ or of $F$ itself.

In case $(3)$:

the equation defining the circle whose center is at $A$ and whose radius is $AB$ is of the form $x^2 + y^2 + 2 f x + 2 g y + c = 0$, where $c, f, g \in F$
the equation defining the circle whose center is at $C$ and whose radius is $CD$ is of the form $x^2 + y^2 + 2 f' x + 2 g' y + c' = 0$, where $c', f', g' \in F$.
The solution of these equations is the same as the solution of either circle and the straight line $2 \paren {f - f'} x + 2 \paren {g - g'} y + \paren {c - c'} = 0$, which is the same as case $(2)$.

We have that the coordinates of the various points belong to the field $F = F_0$, say.
Suppose $P$ is constructed using $k$ of the basic constructions $(1)$, $(2)$ and $(3)$.
Let $F_i$ be the smallest field containing all the points so far obtained by $i$ such constructions, for $i = 1, 2, \ldots, k$.
Either $F_i = F_{i - 1}$ or $F_i$ is an finite extension of $F_i$ of degree $2$.
Thus for each $i$, either:

$\index {F_i} {F_{i - 1} } = 1$
or:

$\index {F_i} {F_{i - 1} } = 2$
Therefore:

$\index {F_k} {F_0} = \index {F_k} {F_{k - 1} } \index {F_{k - 1} } {F_{k - 2} } \dotsm  {F_1} {F_0} = 2^m$
where $0 \le m \le k$.
Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 40$. Construction with Ruler and Compasses: Theorem $75$




