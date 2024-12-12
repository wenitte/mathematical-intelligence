# 

Source: https://proofwiki.org/wiki/Equation_of_Hyperbola_in_Reduced_Form/Cartesian_Frame/Proof_1

Theorem
Let $K$ be a hyperbola such that:

the transverse axis of $K$ has length $2 a$
the conjugate axis of $K$ has length $2 b$.

Let $K$ be aligned in a cartesian plane in reduced form.

$K$ can be expressed by the equation:

$\dfrac {x^2} {a^2} - \dfrac {y^2} {b^2} = 1$


Proof
 



By definition, the foci $F_1$ and $F_2$ of $K$ are located at $\tuple {-c, 0}$ and $\tuple {c, 0}$ respectively.
Let the vertices of $K$ be $V_1$ and $V_2$.
By definition, these are located at $\tuple {-a, 0}$ and $\tuple {a, 0}$.
Let the covertices of $K$ be $C_1$ and $C_2$.
By definition, these are located at $\tuple {0, -b}$ and $\tuple {0, b}$.

Let $P = \tuple {x, y}$ be an arbitrary point on the locus of $K$.

From the equidistance property of $K$ we have that:

$\size {F_1 P - F_2 P} = d$
where $d$ is a constant for this particular ellipse.
From Equidistance of Hyperbola equals Transverse Axis:

$d = 2 a$
Also, from Focus of Hyperbola from Transverse and Conjugate Axis:

$c^2 a^2 = b^2$
Without loss of generality, let us choose a point $P$ such that $F_1 P > F_2 P$.
Then:














\(\ds \sqrt {\paren {x + c}^2 + y^2} - \sqrt {\paren {x - c}^2 + y^2}\)

\(=\)







\(\ds d = 2 a\)





Pythagoras's Theorem








\(\ds \leadsto \ \ \)





\(\ds \sqrt {\paren {x + c}^2 + y^2}\)

\(=\)







\(\ds 2 a + \sqrt {\paren {x - c}^2 + y^2}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x + c}^2 + y^2\)

\(=\)







\(\ds \paren {2 a + \sqrt {\paren {x - c}^2 + y^2} }^2\)





squaring both sides








\(\ds \leadsto \ \ \)





\(\ds x^2 + 2 c x + c^2 + y^2\)

\(=\)







\(\ds 4 a^2 + 4 a \sqrt {\paren {x - c}^2 + y^2} + \paren {x - c}^2 + y^2\)





expanding








\(\ds \leadsto \ \ \)





\(\ds x^2 + 2 c x + c^2 + y^2\)

\(=\)







\(\ds 4 a^2 + 4 a \sqrt {\paren {x - c}^2 + y^2} + x^2 - 2 c x + c^2 + y^2\)





further expanding








\(\ds \leadsto \ \ \)





\(\ds c x - a^2\)

\(=\)







\(\ds a \sqrt {\paren {x - c}^2 + y^2}\)





gathering terms and simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {c x - a^2}^2\)

\(=\)







\(\ds a^2 \paren {\paren {x - c}^2 + y^2}^2\)





squaring both sides








\(\ds \leadsto \ \ \)





\(\ds c^2 x^2 - 2 c x a^2 + a^4\)

\(=\)







\(\ds a^2 x^2 - 2 c x a^2 + a^2 c^2 + a^2 y^2\)





expanding








\(\ds \leadsto \ \ \)





\(\ds c^2 x^2 + a^4\)

\(=\)







\(\ds a^2 x^2 + a^2 c^2 + a^2 y^2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds a^2 c^2 - a^4\)

\(=\)







\(\ds c^2 x^2 - a^2 x^2 - a^2 y^2\)





gathering terms








\(\ds \leadsto \ \ \)





\(\ds a^2 \paren {c^2 - a^2}\)

\(=\)







\(\ds \paren {c^2 - a^2} x^2 - a^2 y^2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds a^2 b^2\)

\(=\)







\(\ds b^2 x^2 - a^2 y^2\)





substituting $c^2 - a^2 = b^2$ from $(2)$








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds \frac {x^2} {a^2} - \frac {y^2} {b^2}\)





dividing by $a^2 b^2$



$\blacksquare$


Sources
Weisstein, Eric W. "Hyperbola." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/Hyperbola.html




