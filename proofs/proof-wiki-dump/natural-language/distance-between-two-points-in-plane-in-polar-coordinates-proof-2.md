# 

Source: https://proofwiki.org/wiki/Distance_between_Two_Points_in_Plane_in_Polar_Coordinates/Proof_2

Theorem
Let $A = \polar {r_1, \theta_1}$ and $B = \polar {r_2, \theta_2}$ be two points in a polar coordinate plane
The distance $d$ between $A$ and $B$ is given by:

$d = \sqrt {r_1^2 + r_2^2 + 2 r_1 r_2 \map \cos {\theta_1 - \theta_2} }$


Proof
From Conversion between Cartesian and Polar Coordinates in Plane, $A$ and $B$ can be expressed in Cartesian coordinates as follows:














\(\ds x_1\)

\(=\)







\(\ds r_1 \cos \theta_1\)




















\(\ds y_1\)

\(=\)







\(\ds r_1 \sin \theta_1\)




















\(\ds x_2\)

\(=\)







\(\ds r_2 \cos \theta_2\)




















\(\ds y_2\)

\(=\)







\(\ds r_2 \sin \theta_2\)










Thus the distance $d$ between $A = \tuple {x_1, y_1}$ and $B = \tuple {x_2, y_2}$ is given by:














\(\ds d^2\)

\(=\)







\(\ds \paren {x_1 - x_2}^2 + \paren {y_1 - y_2}^2\)





Distance Formula














\(\ds \)

\(=\)







\(\ds \paren {r_1 \cos \theta_1 - r_2 \cos \theta_2}^2 + \paren {r_1 \sin \theta_1 - r_2 \sin \theta_2}^2\)




















\(\ds \)

\(=\)







\(\ds r_1^2 \paren {\cos^2 \theta_1 + \sin^2 \theta_1} + r_2^2 \paren {\cos^2 \theta_2 + \sin^2 \theta_2} + 2 r_1 r_2 \paren {\cos \theta_1 \cos \theta_2 + \sin \theta_1 \sin \theta_2}\)




















\(\ds \)

\(=\)







\(\ds r_1^2 + r_2^2 + 2 r_1 r_2 \paren {\cos \theta_1 \cos \theta_2 + \sin \theta_1 \sin \theta_2}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds r_1^2 + r_2^2 + 2 r_1 r_2 \map \cos {\theta_1 - \theta_2}\)





Cosine of Difference



The result follows.
$\blacksquare$





