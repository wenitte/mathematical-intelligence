# 

Source: https://proofwiki.org/wiki/Leibniz%27s_Formula_for_Pi/Leibniz%27s_Proof

Theorem
$\dfrac \pi 4 = 1 - \dfrac 1 3 + \dfrac 1 5 - \dfrac 1 7 + \dfrac 1 9 - \cdots \approx 0 \cdotp 78539 \, 81633 \, 9744 \ldots$

That is:

$\ds \pi = 4 \sum_{k \mathop \ge 0} \paren {-1}^k \frac 1 {2 k + 1}$


Proof

The area $OAT$ is a quarter-circle whose area is $\dfrac \pi 4$ by Area of Circle.
Now consider the area $C$ of the segment $OPQT$, bounded by the arc $OT$ and the chord $OT$.

Consider the area $OPQ$, bounded by the line segments $OP$ and $OQ$ and the arc $PQ$.
As $P$ and $Q$ approach each other, the arc $PQ$ tends towards the straight line segment $\d s = PQ$.
We can therefore consider the area $OPQ$ as a triangle.
We extend the line segment $PQ$ and drop a perpendicular $OR$ to $O$.
Using Area of Triangle in Terms of Side and Altitude, we see that the area $\d C$ of $\triangle OPQ$ is given by:

$\d C = \triangle OPQ = \dfrac {OR \cdot PQ} 2 = \dfrac {OR \cdot \d s} 2$
We also note from elementary Euclidean geometry that $\triangle ORS$ is similar to the small triangle on $PQ$.
Thus:

$\dfrac {\d s} {\d x} = \dfrac {OS} {OR} \iff OR \cdot \d s = OS \cdot \d x$
Thus:

$\d C = \dfrac {OS \cdot \d x} 2 = \dfrac {y \rd x} 2$
where $y = OS$.
We set the horizontal coordinate of $P$ as equal to $x$.
Thus the total area $C$ is equal to the total of all the areas of these small triangles as $x$ increases from $0$ to $1$.
So:

$\ds C = \int \rd C = \frac 1 2 \int_0^1 y \rd x$
Now we use Integration by Parts to swap $x$ and $y$:

$\ds C = \intlimits {\frac 1 2 x y} 0 1 - \frac 1 2 \int_0^1 x \rd y = \frac 1 2 - \frac 1 2 \int_0^1 x \rd y$
It can be seen that the limits on this new integral have to be $0$ and $1$ from the geometry of the situation.
Now we note that:

$y = \tan \dfrac \phi 2$
From Double Angle Formula for Cosine: Corollary $2$:

$x = 1 - \cos \phi = 2 \sin^2 \dfrac \phi 2$
Thus:














\(\ds \tan^2 \frac \phi 2\)

\(=\)







\(\ds \frac {\sin^2 \frac \phi 2}{\cos^2 \frac \phi 2}\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds \sin^2 \frac \phi 2 \sec^2 \frac \phi 2\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \sin^2 \frac \phi 2 \paren {1 + \tan^2 \frac \phi 2}\)





Difference of Squares of Secant and Tangent



and so:

$\dfrac x 2 = \dfrac {y^2} {1 + y^2}$
Using Sum of Infinite Geometric Sequence:

$\dfrac {y^2} {1 + y^2} = y^2 - y^4 + y^6 - y^8 + \cdots$
This gives us:














\(\ds C\)

\(=\)







\(\ds \frac 1 2 - \int_0^1 \paren {y^2 - y^4 + y^6 - y^8 + \cdots} \d y\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \intlimits {\frac {y^3} 3 - \frac {y^5} 5 + \frac {y^7} 7 - \frac {y^9} 9 + \cdots} 0 1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \paren {\frac 1 3 - \frac 1 5 + \frac 1 7 - \frac 1 9 + \cdots}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \frac 1 3 + \frac 1 5 - \frac 1 7 + \frac 1 9 - \cdots\)










Remember, $C$ is the area of the segment $OPQT$.
Now we add to it the area of $\triangle OTA$, which trivially equals $\dfrac 1 2$, to get the area of the quarter circle which we know as equal to $\dfrac \pi 4$.
Putting it all together, this gives us:

$\dfrac \pi 4 = 1 - \dfrac 1 3 + \dfrac 1 5 - \dfrac 1 7 + \dfrac 1 9 - \cdots$
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.13$: How Leibniz Discovered his Formula $\pi / 4 = 1 - \frac 1 3 + \frac 1 5 - \frac 1 7 + \cdots$




