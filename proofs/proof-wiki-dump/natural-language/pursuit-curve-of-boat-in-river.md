# 

Source: https://proofwiki.org/wiki/Pursuit_Curve_of_Boat_in_River

Theorem
Consider a straight river $R$ whose parallel banks are aligned with the $y$-axis and the line $x = c$ of a cartesian plane.
Let the current of $R$ have a constant and uniform speed $a$ in the negative $y$ direction.
Let a boat $B$ be launched from the point $\tuple {c, 0}$ and headed directly towards the origin with speed $b$ relative to the water.

The path of $B$ is defined by the equation:

$c^k \paren {y + \sqrt {x^2 + x^2} } = x^{k + 1}$
where $k = \dfrac a b$.


Proof
The components of the velocity of $b$ are:

$\dfrac {\d x} {\d t} = - b \cos \theta$
$\dfrac {\d y} {\d t} = - a + b \sin \theta$

Hence:














\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac {-a + b \sin \theta} {-b \cos \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac {-a + b \paren {-\dfrac y {\sqrt {x^2 + y^2} } } } {-b \paren {\dfrac x {\sqrt {x^2 + y^2} } } }\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {-a \sqrt {x^2 + y^2} + b y} {b x}\)










$(1)$ is a homogeneous differential equation.
Let $z = \dfrac y x$.
Then by Solution to Homogeneous Differential Equation:














\(\ds \ln x\)

\(=\)







\(\ds \int \frac {\d z} {\dfrac {-a \sqrt {1 + z^2} + b z} b - z} + C\)




















\(\ds \)

\(=\)







\(\ds \int \frac {b \rd z} {-a \sqrt {1 + z^2} + b z - b z} + C\)




















\(\ds \)

\(=\)







\(\ds \int \frac {b \rd z} {-a \sqrt {1 + z^2} } + C\)




















\(\ds \)

\(=\)







\(\ds -\frac b a \int \frac {\d z} {\sqrt {1 + z^2} } + C\)




















\(\ds \)

\(=\)







\(\ds -\frac b a \map \ln {z + \sqrt {1 + z^2} }  + C\)





Primitive of $\dfrac 1 {\sqrt{x^2 + a^2} }$



Substituting back for $z$, putting $k = \dfrac a b$, and rearranging:

$C^k \paren {y + \sqrt {x^2 + x^2} } = x^{k + 1}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.12$: The Hanging Chain. Pursuit Curves: Example $(4)$




