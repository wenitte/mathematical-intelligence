# 

Source: https://proofwiki.org/wiki/User:Beligaronia

Theorem
Any three non collinear points lie on the circumference of a unique circle.

Proof
Any three non collinear points may be represented on a cartesian plane. For ease of calculation the For ease of calculation these may be translated and rotated without distorting dimensions so that points are represented by $\alpha (0,0), \beta (0,a)$ and $\gamma (b,c)$.
Three lines$(\alpha\beta, \alpha \gamma,  \beta\gamma)$ may be drawn between these points.
The gradients of these lines are
$\alpha\beta = \frac{a}{0}$ (undefined)
$\alpha\gamma = \frac{c}{b}$
$\beta\gamma = \frac{c-a}{b}$
The mid points of these lines are
$\alpha\beta = (0,\frac{a}{2})$
$\alpha\gamma = (\frac{b}{2},\frac{c}{2})$
$\alpha\gamma = (\frac{b}{2},\frac{a+c}{2})$
Therefore, the gradients of the perpendicular bisectors of these lines (denoted by $'$) are
$\alpha\beta' = 0$ (undefined)
$\alpha\gamma' = \frac{-b}{c}$
$\beta\gamma' = \frac{b}{a-c}$
The equations of these perpendicular bisectors are
$\alpha\beta': y = \frac{a}{2}$
$\alpha\gamma': y = \frac{-bx}{c}+k$

$\frac{c}{2}=\frac{b}{2}*\frac{-b}{c}+k$
$\frac{c}{2}=\frac{b^2}{2c}+k$
$\frac{c^2}{2c}+\frac{b^2}{2c}=k$
$k=\frac{b^2+c^2}{2c}$
$y=\frac{-bx}{c}+\frac{b^2+c^2}{2c}$
$\beta\gamma': = y=\frac{bx}{a-c}+k$

$\frac{a+c}{2}=\frac{b}{2}*\frac{b}{a-c}+k$
$\frac{a+c}{2}=\frac{b^2}{2(a-c)}+k$
$\frac{a+c}{2}-\frac{b^2}{2(a-c)}=k$
$\frac{(a+c)(a-c)-b^2}{2(a-c)}=k$
$k=\frac{a^2-b^2-c^2}{2(a-c)}$
$y=\frac{bx}{a-c}+\frac{a^2-b^2-c^2}{2(a-c)}$
Intersections of the Bisectors
$\alpha\beta'\alpha\gamma'$
$y=\frac{a}{2}=y=\frac{-bx}{c}+\frac{b^2+c^2}{2c}$
$\frac{a}{2}-\frac{b^2+c^2}{2c}=\frac{-bx}{c}$
$\frac{ac-b^2-c^2}{2c}=\frac{-bx}{c}$
$-bx=\frac{ac-b^2-c^2}{2}$
$x=\frac{b^2+c^2-ac}{2b}$

$\alpha\beta'\beta\gamma'$
$y=\frac{a}{2}=y=\frac{bx}{a-c}+\frac{a^2-b^2-c^2}{2(a-c)}$
$\frac{a}{2}-\frac{a^2-b^2-c^2}{2(a-c)}=\frac{bx}{a-c}$
$\frac{a(a-c)}{2}-\frac{a^2-b^2-c^2}{2}=bx$
$\frac{a^2-ac}{2}-\frac{a^2-b^2-c^2}{2}=bx$
$\frac{b^2+c^2-ac}{2}=bx$
$x=\frac{b^2+c^2-ac}{2b}$
These two perpendicular bisectors intersect at the same point. Points on a perpendicular bisector are equidistant from the two points. Therefore All three points are$(\alpha,\beta,\gamma)$ equidistant from the point of intersection. Therefore a circle may be drawn centred on the intersection which will pass through all three points.
$\blacksquare$

Note
It is possible to extend ths proof to collinear points by the following.
As the radius of a circle increases the curvature decreases. 
As the $radius \to \infty, curvature \to 0$.
Something with 0 curvature is a straight line.
Therefore, collinear points lie on the circumference of an infinitely large circle.
$\blacksquare$





