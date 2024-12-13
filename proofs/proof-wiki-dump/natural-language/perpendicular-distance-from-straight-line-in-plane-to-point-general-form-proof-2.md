# 

Source: https://proofwiki.org/wiki/Perpendicular_Distance_from_Straight_Line_in_Plane_to_Point/General_Form/Proof_2

Theorem
Let $\LL$ be a straight line embedded in a cartesian plane, given by the equation:

$a x + b y + c = 0$
Let $P$ be a point in the cartesian plane whose coordinates are given by:

$P = \tuple {x_0, y_0}$

Then the perpendicular distance $d$ from $P$ to $\LL$ is given by:

$d = \dfrac {\size {a x_0 + b y_0 + c} } {\sqrt {a^2 + b^2} }$


Proof
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
1953: L. Harwood Clarke: A Note Book in Pure Mathematics: $\text {III}$. Analytical Geometry: The Straight Line: The length of the perpendicular




