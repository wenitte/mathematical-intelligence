# 

Source: https://proofwiki.org/wiki/Area_of_Triangle_Inscribed_in_Parabola

Theorem
Let $T$ be the parabola which is
the locus of points $\tuple {x, y}$ satisfying $y = x^2$.
Let $A$ and $B$ be two arbitrary points on $T$ with coordinates:

$A = \tuple {u, u^2}$
$B = \tuple {v, v^2}$, with $u > v$
Let $C$ be a third point on $T$ whose $x$-coordinate is the average of those of $A$ and $B$.
The area of $\triangle ABC$ is:

$\map \AA {\triangle ABC} = \dfrac 1 8 \paren {u - v}^3$


Proof 1
The point $\tuple {x = 0, y = 0}$ satisfies $y = x^2$.
Since $x^2 \ge 0$, $0$ is the minimum value for $y$.
Thus, the vertex of $T$ lies at the origin.
The coordinates of $C$ are given as the average those for $A$ and $B$.
Given:

$A = \tuple {u, u^2}$
$B = \tuple {v, v^2}$, with $u > v$
By the definition of average: 

$C = \tuple {\dfrac 1 2 \paren {u + v}, \dfrac 1 4 \paren {u + v}^2 } $
Let $P$ be the midpoint of $AB$, such that $AP = BP$.
Let the coordinates of $P$ be $\tuple {P_x, P_y}$.
By the Midline Theorem:

$P_x = \dfrac 1 2 \paren {u + v}$
Also by the Midline Theorem:

$P_y = \dfrac 1 2 \paren {u^2 + v^2}$
Let $h$ be one-half the distance between the $x$-coordinates of $A$ and $B$:

$h = \dfrac 1 2 \paren {u - v}$
By construction:

the height of both $\triangle APC$ and $\triangle BPC$ is equal to $h$.
Let $b$ be the length of $PC$, the shared base of $\triangle APC$ and $\triangle BPC$.














\(\ds b\)

\(=\)







\(\ds P_y - C_y\)





Definition above














\(\ds b\)

\(=\)







\(\ds \dfrac 1 2 \paren {u^2 + v^2} - \dfrac 1 4 \paren {u + v}^2\)





Substitution














\(\ds b\)

\(=\)







\(\ds \dfrac 1 4 \paren {2 u^2 + 2 v^2 - \paren {u + v}^2}\)





Factor out $\dfrac 1 2$














\(\ds b\)

\(=\)







\(\ds \dfrac 1 4 \paren {u^2 - 2 u v + v^2}\)





Expansion and subtraction














\(\ds b\)

\(=\)







\(\ds \dfrac 1 4 \paren {u - v}^2\)





Factor



In the words of Euclid:

Triangles which are on equal bases and in the same parallels are equal to one another.
(The Elements: Book $\text{I}$: Proposition $38$)

By Area of Triangle:

$\map \AA {\triangle APC} = \dfrac 1 2 h b$
Substituting from above:

$\map \AA {\triangle APC} = \dfrac 1 {16} \paren {u - v}^3$
Since they have the same height and a shared base:

$\map \AA {\triangle APC} = \map \AA {\triangle BPC}$
But:

$\map \AA {\triangle ABC} = \map \AA {\triangle APC} + \map \AA {\triangle BPC}$
By addition:

$\map \AA {\triangle ABC} = h b = \dfrac 1 8 \paren {u - v}^3$
$\blacksquare$


Proof 2
From Two-Point Form of Equation of Straight Line in Plane, the straight line $AB$ can be expressed as:














\(\ds \dfrac {\paren {y_{AB} - y_1} } {\paren {x - x_1} }\)

\(=\)







\(\ds \dfrac {\paren {y_2 - y_1} } {\paren {x_2 - x_1} }\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\paren {y_{AB} - v^2} } {\paren {x - v} }\)

\(=\)







\(\ds \dfrac {\paren {u^2 - v^2} } {\paren {u - v} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {u + v} \paren {u - v} } {\paren {u - v} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {u + v}\)





dividing top and bottom by $\paren {u - v}$








\(\ds \leadsto \ \ \)





\(\ds \paren {y_{AB} - v^2}\)

\(=\)







\(\ds \paren {u + v} \paren {x - v}\)





multiplying both sides by $\paren {x - v}$














\(\ds \)

\(=\)







\(\ds \paren {u + v} x - u v - v^2\)














\(\ds \leadsto \ \ \)





\(\ds y_{AB}\)

\(=\)







\(\ds \paren {u + v} x - u v\)









The coordinates of $C$ are: 

$\tuple {\dfrac 1 2 \paren {u + v}, \dfrac 1 4 \paren {u + v}^2 } $

Let $P$ be the midpoint of $AB$, such that $AP = BP$.
We can use Two-Point Form of Equation of Straight Line in Plane above to determine the coordinates of $P$:














\(\ds y_{AB}\)

\(=\)







\(\ds \paren {u + v} x - u v\)





from above














\(\ds \)

\(=\)







\(\ds \paren {u + v} \paren {\dfrac 1 2 \paren {u + v} } - u v\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac 1 2 \paren {u^2 + v^2}\)









Therefore, the coordinates of $P$ are: 

$\tuple {\dfrac 1 2 \paren {u + v}, \dfrac 1 2 \paren {u^2 + v^2} } $

We now connect points $P$ and $C$ to create line segment $PC$
This in turn creates two triangles.
We see from the diagram above:

$\map \AA {\triangle ABC} = \map \AA {\triangle APC} + \map \AA {\triangle CPB}$
From Area of Triangle in Terms of Two Sides and Angle, we have:

$\map \AA {\triangle APC} = \dfrac 1 2 \paren {AP} \paren {PC} \map \sin {\angle APC} $
We now notice that:














\(\ds \paren {AP} \map \sin {\angle APC}\)

\(=\)







\(\ds \dfrac {\paren {u + v} } 2 - v\)





from above














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {u - v} } 2\)









Therefore:

$\map \AA {\triangle APC} = \dfrac 1 2 \paren {PC}  \dfrac {\paren {u - v} } 2$
We also notice:














\(\ds \map \sin {\angle CPB}\)

\(=\)







\(\ds \map \sin {\pi - \angle APC}\)





$\angle CPB$ is supplementary to $\angle APC$














\(\ds \)

\(=\)







\(\ds \map \sin {\angle APC}\)





Sine of Supplementary Angle



Since $AP = PB$, $PC = PC$ and $\map \sin {\angle CPB} = \map \sin {\angle APC}$, then by Area of Triangle in Terms of Two Sides and Angle we have:

$\map \AA {\triangle APC} = \map \AA {\triangle CPB}$
Therefore:














\(\ds \map \AA {\triangle ABC}\)

\(=\)







\(\ds \map \AA {\triangle APC} + \map \AA {\triangle CPB}\)




















\(\ds \)

\(=\)







\(\ds 2 \map \AA {\triangle APC}\)





since $\map \AA {\triangle APC} = \map \AA {\triangle CPB}$














\(\ds \)

\(=\)







\(\ds 2 \dfrac 1 2 \paren {PC}  \dfrac {\paren {u - v} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {u - v} P C\)










All that remains is to determine the length of $CP$:














\(\ds CP\)

\(=\)







\(\ds P_y - C_y\)





Definition of Length of Line














\(\ds CP\)

\(=\)







\(\ds \dfrac 1 2 \paren {u^2 + v^2} - \dfrac 1 4 \paren {u + v}^2\)





substitution














\(\ds CP\)

\(=\)







\(\ds \dfrac 1 4 \paren {2 u^2 + 2 v^2 - \paren {u + v}^2}\)





factor out $\dfrac 1 2$














\(\ds CP\)

\(=\)







\(\ds \dfrac 1 4 \paren {u^2 - 2 u v + v^2}\)





expansion and subtraction














\(\ds CP\)

\(=\)







\(\ds \dfrac 1 4 \paren {u - v}^2\)





factor



Substituting from above:

$\map \AA {\triangle ABC} = \dfrac 1 2 \paren {u - v} \dfrac 1 4 \paren {u - v}^2$
Therefore:

$\map \AA {\triangle ABC} = \dfrac 1 8 \paren {u - v}^3$
$\blacksquare$





