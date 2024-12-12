# 

Source: https://proofwiki.org/wiki/Equation_of_Unit_Circle_in_Complex_Plane



Theorem
Consider the unit circle $C$ whose center is at $\tuple {0, 0}$ on the complex plane.
Its equation is given by:

$\cmod z = 1$
where $\cmod z$ denotes the complex modulus of $z$.


Corollary 1
The equation of $C$ can be given by:

$z \overline z = 1$
where $\overline z$ denotes the complex conjugate of $z$.


Corollary 2
The equation of $C$ can be given by:

$\overline z = \dfrac 1 z$
where $\overline z$ denotes the complex conjugate of $z$.


Proof 1
From Equation of Unit Circle, the unit circle whose center is at the origin of the Cartesian $xy$ plane has the equation:

$x^2 + y^2 = 1$
Identifying the Cartesian $xy$ plane with the complex plane:


This theorem requires a proof.In particular: Can't think of the precise words I need for this at the momentYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 2
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


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: The $n$th Roots of Unity




