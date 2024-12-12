# 

Source: https://proofwiki.org/wiki/Archimedes%27_Principle


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Physical Law
Let $V$ be a compact body with a piecewise smooth boundary, immersed in an incompressible fluid $F$.
Then the net buoyancy $\mathbf F$ effected upon $V$ by $F$ is equal to the weight of $F$ displaced.

The line of action of $\mathbf F$ passes through the center of gravity of the displaced volume of $F$.

This is often quoted (and probably better considered) as the informal statement:

A body immersed in a fluid experiences a buoyant force equal to the weight of the displaced fluid.
This is known as Archimedes' principle.


Proof
Let $V$ be the immersed body.
Let $S = \partial V$ be its boundary.
Recall Gauss's Theorem for a smooth vector field $\mathbf F$ defined over $V$:

$(1): \quad \ds \oint_S \mathbf F \cdot \rd \mathbf S = \int_V \nabla \cdot \mathbf F \rd \mathbf V$
provided that $\partial V$ is piecewise smooth and compact.

The pressure on $S$ depends only on the depth of $V$ within $F$.
Accounting for atmospheric pressure $p_0$, $\mathbf F$ is given by:

$p = -\rho g z + p_0$
where:

$\rho$ is the density of the fluid
$g = 9.81 \ldots$ is the gravitational acceleration
$z$ is the vertical displacement.

This article needs to be linked to other articles.In particular: Reference needed for this equation (not yet on ProofWiki)You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Letting $\mathbf F = -p \cdot \mathbf k$ (with $\mathbf k$ a unit vector in the $z$ direction) we see that the left hand side of $(1)$ becomes the buoyancy force acting on the object, for it is the sum over the surface of the $z$ component of the pressure.
Clearly $\nabla \cdot \mathbf F = \rho g$, so we have:

$\ds \int_V \nabla \cdot \mathbf F \rd V = \rho g \int_V \rd V = \rho g V$
where we have let $V$ denote the scalar volume of $V$.
Note that we have assumed incompressibility and thus constant density of the fluid.
This is precisely the weight of the fluid in the volume $V$ Ref?.
The proof is complete.


This article needs to be linked to other articles.In particular: These pages do not exist yet:pressure on the surface $S$the weight of the fluid in the volume $V$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

$\blacksquare$


Also known as
Archimedes' Principle is also known as the Basic Law of Hydrostatics.


Also see
Not to be confused with the Archimedean Principle.


Source of Name
This entry was named for Archimedes of Syracuse.


Historical Note
Archimedes' Principle was discovered by Archimedes of Syracuse.
Hence he created the science of hydrostatics.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.5$: Archimedes (ca. $\text {287}$ – $\text {212}$ B.C.)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Archimedes' principle
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): buoyancy
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Archimedes' principle
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): buoyancy




