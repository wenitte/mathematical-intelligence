# 

Source: https://proofwiki.org/wiki/Distance_between_Two_Points_in_Plane_in_Polar_Coordinates/Proof_1

Theorem
Let $A = \polar {r_1, \theta_1}$ and $B = \polar {r_2, \theta_2}$ be two points in a polar coordinate plane
The distance $d$ between $A$ and $B$ is given by:

$d = \sqrt {r_1^2 + r_2^2 + 2 r_1 r_2 \map \cos {\theta_1 - \theta_2} }$


Proof
Let $A$ and $B$ be embedded as suggested in a polar coordinate plane whose pole is at $O$.




The distance $d$ is the side $AB$ of the triangle $AOB$.

We have that:

$OA = r_1$
$OB = r_2$
and:

$\theta_2 - \theta_1$ is the opposite angle to $AB$.

Hence we can use the Cosine Rule:

$AB^2 = r_1^2 + r_2^2 - 2 r_1 r_2 \map \cos {\theta_2 - \theta_1}$
From Cosine Function is Even we have that:

$\map \cos {\theta_2 - \theta_1} = \map \cos {\theta_1 - \theta_2}$
and the result follows.
$\blacksquare$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text I$. Coordinates: $5$. Distance between two points in polar coordinates




