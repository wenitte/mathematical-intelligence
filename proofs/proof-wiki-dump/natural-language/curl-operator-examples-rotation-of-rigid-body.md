# 

Source: https://proofwiki.org/wiki/Curl_Operator/Examples/Rotation_of_Rigid_Body

Example of Curl Operator
Consider a rigid body $B$ in rotary motion with angular velocity $\omega$ about an axis $OA$, where $O$ is some fixed point inside $B$.
Let $P$ be an arbitrary point inside $B$.
Let $B$ also be subject to a linear velocity $\mathbf v_0$ in an arbitrary direction.
Let the instantaneous velocity of $P$ be $\mathbf V$

Then:

$\bsomega = \dfrac 1 2 \curl \mathbf V$
where $\bsomega$ is the angular velocity (axial) vector along the axis $OA$ in the sense according to the right-hand rule.


Proof
$P$ moves in a circular path $C$ around $OA$ with an instantaneous velocity $v$, tangent to $C$ where:

$r$ is the distance of $P$ from $O$
$\theta$ is the angle between $OR$ and $OP$.




As noted, the angular velocity is a vector (axial) $\bsomega$ along the axis $OA$ in the sense according to the right-hand rule.
Let the position vector of $P$ be given by $\mathbf r$.
Then the tangential velocity $v$ of $P$ is $\bsomega \times \mathbf r$, which has a magnitude $\omega r \sin \theta$ and a direction which is perpendicular to the plane containing $OA$ and $OP$, that is, the plane containing $\bsomega$ and $\mathbf r$.

We also have that in addition to the angular velocity undergone by $B$, let it also be subject to a linear velocity $\mathbf v_0$ in an arbitrary direction.
Then the total velocity $V$ of $P$ is given by:

$\mathbf V = \mathbf v_0 + \bsomega \times \mathbf r$
and the curl of $V$ is given by:

$\curl V = \nabla \times \mathbf V = \nabla \times v_0 + \nabla \times \bsomega \times \mathbf r$
Because $v_0$ is constant for all points in $B$, and so is independent of any arbitrary Cartesian coordinates $x$, $y$ and $x$ that may be imposed upon it, $\nabla \times \mathbf v_0$ is zero.

The angular velocity $\bsomega$ is also constant for all points in $B$ at any one time, as $B$ is rigid.
It can be written:

$\bsomega = \omega_x \mathbf i + \omega_y \mathbf j + \omega_z \mathbf k$
By definition of vector cross product:

$\bsomega \times \mathbf r = \paren {\omega_y z - \omega_z y} \mathbf i + \paren {\omega_z x - \omega_x z} \mathbf j + \paren {\omega_x y - \omega_y x} \mathbf k$
Because $\omega_x$, $\omega_y$ and $\omega_z$ are not functions of $x$, $y$ and $z$, their partial derivatives with respect to $x$, $y$ and $z$ are all zero.
Hence:














\(\ds \nabla \times \paren {\bsomega \times \mathbf r}\)

\(=\)







\(\ds \paren {\mathbf i \dfrac \partial {\partial x} + \mathbf j \dfrac \partial {\partial y} + \mathbf k \dfrac \partial {\partial z} } \times \paren {\paren {\omega_y z - \omega_z y} \mathbf i + \paren {\omega_z x - \omega_x z} \mathbf j + \paren {\omega_x y - \omega_y x} \mathbf k}\)





Definition of Del Operator














\(\ds \)

\(=\)







\(\ds 2 \omega_x \mathbf i + 2 \omega_y \mathbf j + 2 \omega_z \mathbf k\)





after algebra














\(\ds \)

\(=\)







\(\ds 2 \bsomega\)














\(\ds \leadsto \ \ \)





\(\ds \bsomega\)

\(=\)







\(\ds \dfrac 1 2 \curl \mathbf V\)









$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {IV}$: The Operator $\nabla$ and its Uses: $5$. Simple Examples of Curl
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): curl
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): curl




