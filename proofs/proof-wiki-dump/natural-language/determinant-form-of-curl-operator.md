# 

Source: https://proofwiki.org/wiki/Determinant_Form_of_Curl_Operator



Theorem
The following definitions of the concept of Curl Operator are equivalent:

Geometrical Representation
Let $R$ be a region of space embedded in Cartesian $3$ space $\R^3$.
Let $\tuple {\mathbf i, \mathbf j, \mathbf k}$ be the standard ordered basis on $\R^3$.
Let $\mathbf V$ be a vector field acting over $R$.

The curl of $\mathbf V$ at a point $A$ in $R$ is defined as:

$\curl \mathbf V = \paren {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } \mathbf k$
where:

$V_x$, $V_y$ and $V_z$ denote the magnitudes of the components at $A$ of $\mathbf V$ in the directions of the coordinate axes $x$, $y$ and $z$ respectively.
Determinant Form
The curl of $\mathbf V$ at a point $A$ in $R$ is defined as:

$\curl \mathbf V = \begin {vmatrix} \mathbf i & \mathbf j & \mathbf k \\ \dfrac \partial {\partial x} & \dfrac \partial {\partial y} & \dfrac \partial {\partial z} \\ V_x & V_y & V_z \end {vmatrix}$
where:

$V_x$, $V_y$ and $V_z$ denote the magnitudes of the components at $A$ of $\mathbf V$ in the directions of the coordinate axes $x$, $y$ and $z$ respectively.


Proof













\(\ds \begin {vmatrix} \mathbf i & \mathbf j & \mathbf k \\ \dfrac \partial {\partial x} & \dfrac \partial {\partial y} & \dfrac \partial {\partial z} \\ V_x & V_y & V_z \end {vmatrix}\)

\(=\)







\(\ds \paren {\begin {vmatrix} \dfrac \partial {\partial y} & \dfrac \partial {\partial z} \\ V_y & V_z \end {vmatrix} } \mathbf i - \paren {\begin {vmatrix} \dfrac \partial {\partial x} & \dfrac \partial {\partial z} \\ V_x & V_z \end {vmatrix} } \mathbf j + \paren {\begin {vmatrix} \dfrac \partial {\partial x} & \dfrac \partial {\partial y} \\ V_x & V_y \end {vmatrix} } \mathbf k\)





Determinant of Order 3














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } \mathbf i - \paren {\dfrac {\partial V_z} {\partial x} - \dfrac {\partial V_x} {\partial z} } \mathbf j + \paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } \mathbf k\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } \mathbf k\)





rearranging



$\blacksquare$





