# 

Source: https://proofwiki.org/wiki/Perpendicular_Distance_from_Straight_Line_in_Plane_to_Point/General_Form/Proof_1

Theorem
Let $\LL$ be a straight line embedded in a cartesian plane, given by the equation:

$a x + b y + c = 0$
Let $P$ be a point in the cartesian plane whose coordinates are given by:

$P = \tuple {x_0, y_0}$

Then the perpendicular distance $d$ from $P$ to $\LL$ is given by:

$d = \dfrac {\size {a x_0 + b y_0 + c} } {\sqrt {a^2 + b^2} }$


Proof
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





