# 

Source: https://proofwiki.org/wiki/Equation_of_Ellipse_in_Reduced_Form/Cartesian_Frame



Theorem
Let $K$ be an ellipse aligned in a cartesian plane in reduced form.

Let:

the major axis of $K$ have length $2 a$
the minor axis of $K$ have length $2 b$.

The equation of $K$ is:

$\dfrac {x^2} {a^2} + \dfrac {y^2} {b^2} = 1$


Proof 1

By definition, the foci $F_1$ and $F_2$ of $K$ are located at $\tuple {-c, 0}$ and $\tuple {c, 0}$ respectively.
Let the vertices of $K$ be $V_1$ and $V_2$.
By definition, these are located at $\tuple {-a, 0}$ and $\tuple {a, 0}$.
Let the covertices of $K$ be $C_1$ and $C_2$.
By definition, these are located at $\tuple {0, -b}$ and $\tuple {0, b}$.

Let $P = \tuple {x, y}$ be an arbitrary point on the locus of $K$.

From the equidistance property of $K$ we have that:

$F_1 P + F_2 P = d$
where $d$ is a constant for this particular ellipse.
From Equidistance of Ellipse equals Major Axis:

$(1): \quad d = 2 a$
Also, from Focus of Ellipse from Major and Minor Axis:

$(2): \quad a^2 - c^2 = b^2$

Then:














\(\ds \sqrt {\paren {x - c}^2 + y^2} + \sqrt {\paren {x + c}^2 + y^2}\)

\(=\)







\(\ds d\)





Pythagoras's Theorem














\(\ds \)

\(=\)







\(\ds 2 a\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \sqrt {\paren {x + c}^2 + y^2}\)

\(=\)







\(\ds 2 a - \sqrt {\paren {x - c}^2 + y^2}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x + c}^2 + y^2\)

\(=\)







\(\ds \paren {2 a - \sqrt {\paren {x - c}^2 + y^2} }^2\)





squaring both sides








\(\ds \leadsto \ \ \)





\(\ds x^2 + 2 c x + c^2 + y^2\)

\(=\)







\(\ds 4 a^2 - 4 a \sqrt {\paren {x - c}^2 + y^2} + \paren {x - c}^2 + y^2\)





Square of Difference








\(\ds \leadsto \ \ \)





\(\ds x^2 + 2 c x + c^2 + y^2\)

\(=\)







\(\ds 4 a^2 - 4 a \sqrt {\paren {x - c}^2 + y^2} + x^2 - 2 c x + c^2 + y^2\)





Square of Difference








\(\ds \leadsto \ \ \)





\(\ds a^2 - c x\)

\(=\)







\(\ds a \sqrt {\paren {x - c}^2 + y^2}\)





gathering terms and simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {a^2 - c x}^2\)

\(=\)







\(\ds a^2 \paren {\paren {x - c}^2 + y^2}\)





squaring both sides








\(\ds \leadsto \ \ \)





\(\ds c^2 x^2 - 2 c x a^2 + a^4\)

\(=\)







\(\ds a^2 \paren {x^2 - 2 c x + c^2 + y^2}\)





Square of Difference














\(\ds \)

\(=\)







\(\ds a^2 x^2 - 2 c x a^2 + a^2 c^2 + a^2 y^2\)





Distributive Laws of Arithmetic








\(\ds \leadsto \ \ \)





\(\ds c^2 x^2 + a^4\)

\(=\)







\(\ds a^2 x^2 + a^2 c^2 + a^2 y^2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds a^4 - a^2 c^2\)

\(=\)







\(\ds a^2 x^2 - c^2 x^2 + a^2 y^2\)





gathering terms








\(\ds \leadsto \ \ \)





\(\ds a^2 \paren {a^2 - c^2}\)

\(=\)







\(\ds \paren {a^2 - c^2} x^2 + a^2 y^2\)





Distributive Laws of Arithmetic








\(\ds \leadsto \ \ \)





\(\ds a^2 b^2\)

\(=\)







\(\ds b^2 x^2 + a^2 y^2\)





substituting $a^2 - c^2 = b^2$ from $(2)$








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds \frac {x^2} {a^2} + \frac {y^2} {b^2}\)





dividing by $a^2 b^2$



$\blacksquare$


Proof 2


Let $P$ be an arbitrary point in the plane.
Let $PM$ be dropped perpendicular to $V_1 V_2$.
Hence $M = \tuple {x, 0}$.
From Intersecting Chord Theorem for Conic Sections:

$PM^2 = k V_1 M \times M V_2$
for some constant $k$.
Hence:














\(\ds y^2\)

\(=\)







\(\ds k \paren {a + x} \paren {a - x}\)




















\(\ds \)

\(=\)







\(\ds k \paren {a^2 - x^2}\)









Putting $x = 0$, we find the points where $K$ crosses the $y$-axis are defined by:

$y^2 = k a^2$
This gives us:

$k a^2 = b^2$
and so:














\(\ds y^2\)

\(=\)







\(\ds \dfrac {b^2} {a^2} \paren {a^2 - x^2}\)




















\(\ds \)

\(=\)







\(\ds b^2 - x^2 \dfrac {b^2} {a^2}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {y^2} {b^2}\)

\(=\)







\(\ds 1 - \dfrac {x^2} {a^2}\)









Hence the result.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): ellipse
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): ellipse
Weisstein, Eric W. "Ellipse." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/Ellipse.html




