# 

Source: https://proofwiki.org/wiki/Perpendicular_Distance_from_Straight_Line_in_Plane_to_Point/General_Form



Theorem
Let $\LL$ be a straight line embedded in a cartesian plane, given by the equation:

$a x + b y + c = 0$
Let $P$ be a point in the cartesian plane whose coordinates are given by:

$P = \tuple {x_0, y_0}$

Then the perpendicular distance $d$ from $P$ to $\LL$ is given by:

$d = \dfrac {\size {a x_0 + b y_0 + c} } {\sqrt {a^2 + b^2} }$


Proof 1
We have that $\LL$ has the equation:

$(1): \quad a x + b y + c = 0$



Let a perpendicular be dropped from $P$ to $\LL$ at $Q$.
The perpendicular distance $d$ that we are to find is then $PQ$.

In order to simplify the algebra that will inevitably follow, we are to make a transformation as follows.
Let $\MM$ be constructed parallel to $\LL$.
Construct a perpendicular from $\MM$ to pass through the origin.
Let this perpendicular intersect $\MM$ at $R$ and $\LL$ at $S$.
We have that $PQSR$ is a rectangle, and so $RS = PQ$.
It remains to establish the length of $RS$.

We can manipulate $(1)$ into slope-intercept form as:

$y = -\dfrac a b x - \dfrac c b$
Thus the slope of $\LL$ is $-\dfrac a b$.
From Condition for Straight Lines in Plane to be Perpendicular, the  slope of $RS$ is then $\dfrac b a$.

The next step is to find the coordinates of $R$ and $S$.
From Equation of Straight Line in Plane: Point-Slope Form, the equation of $\MM$ can be given as:

$y - y_0 = -\dfrac a b \paren {x - x_0}$
or:

$(2): \quad y = \dfrac {-a x + a x_0 + b y_0} b$
From Equation of Straight Line in Plane: Slope-Intercept Form, the equation of $RS$ can be given as:

$(3): \quad y = \dfrac b a x$

$\MM$ and $RS$ intersect where these are equal:

$\dfrac b a x = \dfrac {-a x + a x_0 + b y_0} b$
which gives us:

$x = \dfrac {a \paren {a x_0 + b y_0} } {a^2 + b^2}$
Substituting back for $y$ in $3$, we find that:

$R = \tuple {\dfrac {a \paren {a x_0 + b y_0} } {a^2 + b^2}, \dfrac {b \paren {a x_0 + b y_0} } {a^2 + b^2} }$

Now to find the coordinates of $S$, which is the intersection of $\LL$ and $RS$.
We can express $\LL$ as:

$y = -\dfrac {a x + c} b$
and so:

$\dfrac b a x = -\dfrac {a x + c} b$
which leads to:

$x = -\dfrac {a c} {a^2 + b^2}$
Substituting back for $y$ in $3$, we get (after algebra):

$S = \tuple {\dfrac {-a c} {a^2 + b^2}, \dfrac {-b c} {a^2 + b^2} }$

It remains to find the length $d$ of $RS$.
From the Distance Formula:














\(\ds d\)

\(=\)







\(\ds \sqrt {\paren {\dfrac {-a c} {a^2 + b^2} - \dfrac {a \paren {a x_0 + b y_0} } {a^2 + b^2} }^2 + \paren {\dfrac {-b c} {a^2 + b^2} - \dfrac {b \paren {a x_0 + b y_0} } {a^2 + b^2} }^2 }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac {\paren {-a \paren {a x_0 + b y_0 + c} }^2 + \paren {-b \paren {a x_0 + b y_0 + c} }^2} {\paren {a^2 + b^2}^2 } }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac {\paren {a^2 + b^2} \paren {a x_0 + b y_0 + c}^2} {\paren {a^2 + b^2}^2 } }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac {\paren {a x_0 + b y_0 + c}^2} {a^2 + b^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\size {a x_0 + b y_0 + c} } {\sqrt {a^2 + b^2} }\)





as length is positive



$\blacksquare$


Proof 2
Let a perpendicular be dropped from $P$ to $\LL$ at $Q$.
Let $PQ$ make an angle $\alpha$ with the $x$-axis.
Let $p$ be the length of $PQ$.
Then the coordinates of $Q$ are given by:

$Q = \tuple {x_0 + p \cos \alpha, y_0 + p \sin \alpha}$
$Q$ lies on $a x + b y + c$, and so:

$a \paren {x_0 + p \cos \alpha} + b \paren {y_0 + p \sin \alpha} + c = 0$













\(\ds a \paren {x_0 + p \cos \alpha} + b \paren {y_0 + p \sin \alpha} + c\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds p \paren {a \cos \alpha + b \sin \alpha}\)

\(=\)







\(\ds -\paren {a x_0 + b y_0 + c}\)









But from Condition for Straight Lines in Plane to be Perpendicular:














\(\ds \tan \alpha \paren {-\dfrac a b}\)

\(=\)







\(\ds -1\)














\(\ds \leadsto \ \ \)





\(\ds \tan \alpha\)

\(=\)







\(\ds \dfrac b a\)














\(\ds \leadsto \ \ \)





\(\ds a \cos \alpha + b \sin \alpha\)

\(=\)







\(\ds a \dfrac a {\sqrt {a^2 + b^2} } + b \dfrac b {\sqrt {a^2 + b^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {a^2 + b^2}\)














\(\ds \leadsto \ \ \)





\(\ds p\)

\(=\)







\(\ds -\dfrac {a x_0 + b y_0 + c} {\sqrt {a^2 + b^2} }\)









The minus sign has no immediate significance, and the result follows.
$\blacksquare$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {II}$. The Straight Line: $6$. Distance of a point from a line
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 10$: Formulas from Plane Analytic Geometry: $10.8$: Distance from Point $\tuple {x_1, y_1}$ to Line $A x + B y + C = 0$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $4$: Geometry: equations of lines and planes
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $5$: Geometry: equations of lines and planes




