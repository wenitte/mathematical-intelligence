# 

Source: https://proofwiki.org/wiki/Locus_of_Midpoints_of_Parallel_Chords_of_Central_Conic_passes_through_Center

Theorem
Let $\KK$ be a central conic.
Let $\DD$ be the locus of the midpoints of a system of parallel chords of $\KK$.

Then $\DD$ passes through the center of $\KK$.


Proof
We note from Circle is Ellipse with Equal Major and Minor Axes that a circle is a special case of the ellipse.
Hence there is no need to investigate the circle separately.
It remains to demonstrate the result for the ellipse and the hyperbola.

Let the central conic be expressed in reduced form.
By definition of reduced form, the center of $\KK$ lies at the origin.
Hence it is sufficient to demonstrate that the locus of the midpoints of an arbitrary system of parallel chords of $\KK$ passes through the origin.

From Equation of Ellipse in Reduced Form and Equation of Hyperbola in Reduced Form, $\KK$ can be expressed as:

$\dfrac {x^2} {a^2} \pm \dfrac {y^2} {b^2} = 1$

Let $\family \CC_{\alpha \mathop \in I}$ be an indexed family of parallel chords of $\KK$ for a given indexing set $I$.
By Condition for Straight Lines in Plane to be Parallel, each of the elements of $\family \CC$ have the same slope.
Let $\LL$ be an arbitrary element of $\family \CC$.
By Equation of Straight Line in Plane: Slope-Intercept Form, $\LL$ therefore be expressed as:

$y = m x + c$
where $m$ is the slope of $\LL$.

Because $\LL$ is a chord of $\KK$, it intersects $\KK$ in $2$ points.
Let these $2$ points be $\tuple {x_1, y_1}$ and $\tuple {x_2, y_2}$.
Let its midpoint be $\tuple {h, k}$.
We have:

$h = \dfrac {x_1 + x_2} 2$
$k = \dfrac {y_1 + y_2} 2$
and so:

$\tuple {x_2, y_2} = \tuple {2 h - x_1, 2 y - y_1}$

By construction, either $h \ne x_1$ or $y \ne y_1$ or both.
Without loss of generality, suppose $h \ne x_1$.

We have that $\tuple {x_1, y_1}$ and$\tuple {x_2, y_2}$ both lie on $\KK$ and so:

$\dfrac { {x_1}^2} {a^2} \pm \dfrac { {y_1}^2} {b^2} = 1$
$\dfrac { {x_2}^2} {a^2} \pm \dfrac { {y_2}^2} {b^2} = 1$

Substituting for $\tuple {x_2, y_2}$:














\(\ds \dfrac { {x_2}^2} {a^2} \pm \dfrac { {y_2}^2} {b^2}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\paren {2 h - x_1}^2} {a^2} \pm \dfrac {\paren {2 y - y_1}^2} {b^2}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {4 h^2 - 4 h x_1 + {x_1}^2} {a^2} \pm \dfrac {4 k^2 - 4 k y_1 + {y_1}^2} {b^2}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {4 h^2 - 4 h x_1} {a^2} \pm \dfrac {4 k^2 - 4 k y_1} {b^2}\)

\(=\)







\(\ds 0\)





as $\dfrac {x^2} {a^2} \pm \dfrac {y^2} {b^2} = 1$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {h \paren {h - x_1} } {a^2} \pm \dfrac {k \paren {k - y_1} } {b^2}\)

\(=\)







\(\ds 0\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {h - x_1} \paren {\dfrac h {a^2} \pm \dfrac {k \paren {k - y_1} } {\paren {h - x_1} b^2} }\)

\(=\)







\(\ds 0\)





valid because $h - x_1 \ne 0$




By definition, the slope $m$ of $\LL$ is given by:














\(\ds m\)

\(=\)







\(\ds \dfrac {y_2 - y_1} {x_2 - x_1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 k - y_1 - y_1} {2 h - x_1 - x_1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {k - y_1} {h - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds k - y_1\)

\(=\)







\(\ds m \paren {h - x_1}\)









Substituting for $k - y_1$ in $(1)$:















\(\ds \paren {h - x_1} \paren {\dfrac h {a^2} \pm \dfrac {k \paren {k - y_1} } {\paren {h - x_1} b^2} }\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {h - x_1} \paren {\dfrac h {a^2} \pm \dfrac {k m \paren {h - x_1} } {\paren {h - x_1} b^2} }\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac h {a^2} \pm \dfrac {k m} {b^2}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {k m} {b^2}\)

\(=\)







\(\ds \pm \dfrac h {a^2}\)









We have that $\tuple {h, k}$ is the midpoint of $\LL$.
We have that $\LL$ is an element of a family of chords such that $m$, $a$ and $b$ are constant, it follows that the locus of their midpoints is the set of points $\tuple {h, k}$ such that $\dfrac {k m} {b^2} = \pm \dfrac h {a^2}$.
Hence $\tuple {h, k}$ is an arbitrary point on that locus.
It follows that this locus can be expressed by the equation:

$\dfrac m {b^2} y = \pm \dfrac 1 {a^2} x$
which is in the form of Equation of Straight Line in Plane: Slope-Intercept Form:

$y = m' x + c$
where $m' = \pm \dfrac {b^2} {m a^2}$ and $c = 0$.
But $c$ is the $y$-intercept.
Because $c = 0$, it follows that $\dfrac m {b^2} y = \pm \dfrac 1 {a^2} x$ is the equation of a straight line passing through the origin.
Hence the result.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): diameter: 2. (of a conic)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): diameter: 2. (of a conic)




