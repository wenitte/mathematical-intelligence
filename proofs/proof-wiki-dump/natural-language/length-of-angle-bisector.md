# 

Source: https://proofwiki.org/wiki/Length_of_Angle_Bisector

Theorem
Let $\triangle ABC$ be a triangle.
Let $AD$ be the angle bisector of $\angle BAC$ in $\triangle ABC$.


Let $d$ be the length of $AD$.

Then $d$ is given by:

$d^2 = \dfrac {b c} {\paren {b + c}^2} \paren {\paren {b + c}^2 - a^2}$
where $a$, $b$, and $c$ are the sides opposite $A$, $B$ and $C$ respectively.


Proof 1













\(\ds \frac {BD} {DC}\)

\(=\)







\(\ds \frac c b\)





Angle Bisector Theorem








\(\ds \leadsto \ \ \)





\(\ds \frac {BD} {DC} + 1\)

\(=\)







\(\ds \frac c b + 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {BD + DC} {DC}\)

\(=\)







\(\ds \frac {b + c} b\)














\(\ds \leadsto \ \ \)





\(\ds \frac a {DC}\)

\(=\)







\(\ds \frac {b + c} b\)














\(\ds \leadsto \ \ \)





\(\ds DC\)

\(=\)







\(\ds \frac {a b} {b + c}\)









Similarly, or by symmetry, we get:

$BD = \dfrac {a c} {b + c}$

From Stewart's Theorem, we have:

$b^2 \cdot BD + c^2 \cdot DC = d^2 \cdot a + BD \cdot DC \cdot a$

Substituting the above expressions for $BD$ and $DC$:














\(\ds b^2 \dfrac {a c} {b + c} + c^2 \frac {a b} {b + c}\)

\(=\)







\(\ds d^2 \cdot a + \dfrac {a c} {b + c} \cdot \frac {a b} {b + c} \cdot a\)














\(\ds \leadsto \ \ \)





\(\ds a b c \frac {b + c} {b + c}\)

\(=\)







\(\ds d^2 \cdot a + \frac{a^2 b c} {\paren {b + c}^2} \cdot a\)














\(\ds \leadsto \ \ \)





\(\ds b c\)

\(=\)







\(\ds d^2 + \frac {a^2 b c} {\paren {b + c}^2}\)














\(\ds \leadsto \ \ \)





\(\ds d^2\)

\(=\)







\(\ds b c \paren {1 - \frac {a^2} {\paren {b + c}^2} }\)














\(\ds \leadsto \ \ \)





\(\ds d^2\)

\(=\)







\(\ds \frac {b c} {\paren {b + c}^2} \paren {\paren {b + c}^2 - a^2}\)









$\blacksquare$


Proof 2

From Length of Angle Bisector: Proof 1, we have:

$BD = \dfrac {a c} {b + c}$
$DC = \dfrac {a b} {b + c}$
Then we have:














\(\ds \angle BAD\)

\(\cong\)







\(\ds \angle FAC\)





Definition of Angle Bisector














\(\ds \angle ABD\)

\(\cong\)







\(\ds \angle AFC\)





Angles in Same Segment of Circle are Equal



Then from Triangles with Two Equal Angles are Similar we have:

$\triangle ABD \sim \triangle AFC$
So:














\(\ds \frac c d\)

\(=\)







\(\ds \frac {AF} b\)





as $\triangle ABD$ and $\triangle AFC$ are similar








\(\ds \leadsto \ \ \)





\(\ds \frac c d\)

\(=\)







\(\ds \frac {d + DF} b\)









Now we use the Intersecting Chords Theorem, which gives us $BD \cdot DC = d \cdot DF$.














\(\ds \frac c d\)

\(=\)







\(\ds \frac {d + \frac {BD \cdot DC} d} b\)














\(\ds \leadsto \ \ \)





\(\ds b c\)

\(=\)







\(\ds d^2 + BD \cdot DC\)














\(\ds \leadsto \ \ \)





\(\ds d^2\)

\(=\)







\(\ds b c - BD \cdot DC\)














\(\ds \leadsto \ \ \)





\(\ds d^2\)

\(=\)







\(\ds b c - \frac {a c} {b + c} \cdot \frac {a b} {b + c}\)














\(\ds \leadsto \ \ \)





\(\ds d^2\)

\(=\)







\(\ds \frac {b c} {\paren {b + c}^2} \paren {\paren {b + c}^2 - a^2}\)









$\blacksquare$





