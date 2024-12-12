# 

Source: https://proofwiki.org/wiki/Equation_of_Unit_Circle_in_Complex_Plane/Proof_2

Theorem
Consider the unit circle $C$ whose center is at $\tuple {0, 0}$ on the complex plane.
Its equation is given by:

$\cmod z = 1$
where $\cmod z$ denotes the complex modulus of $z$.


Proof
Let $C$ be the set of points on the unit circle defined above.
Let $P$ be the set:

$\set {z \in \C: \cmod z = 1}$
Let $z = x + i y \in C$.
$z$ can be expressed in polar form as:

$z = \polar {r, \theta}$
where:

$x = r \cos \theta$
$y = r \sin \theta$
By definition of unit circle, $z$ is $1$ unit away from $\tuple {0, 0}$.
By Pythagoras's Theorem:

$\sqrt {\paren {r \cos \theta}^2 + \paren {r \sin \theta}^2} = 1$
from which:

$\sqrt {x^2 + y^2} = 1$
By definition of complex modulus:

$\cmod z = 1$
and so $z \in P$.
Thus $C \subseteq P$.

Let $z \in P$.
Then by definition $\cmod z = 1$.
By Modulus of Complex Number equals its Distance from Origin, $z$ is $1$ unit away from $\tuple {0, 0}$.
By definition of $C$, it follows that $z \in C$.
Thus $P \subseteq C$.
The result follows by definition of set equality.
$\blacksquare$





