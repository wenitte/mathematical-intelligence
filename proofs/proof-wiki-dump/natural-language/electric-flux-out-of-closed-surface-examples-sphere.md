# 

Source: https://proofwiki.org/wiki/Electric_Flux_out_of_Closed_Surface/Examples/Sphere

Example of Use of Electric Flux out of Closed Surface
Let $B$ be a spherical body in space with radius $R$.
Let $Q$ be the total electric charge within $B$

Then the total electric flux out of $B$ is given by:

$F = \dfrac Q {\varepsilon_0}$
where $\varepsilon_0$ denotes the vacuum permittivity.


Proof
Let the center of $B$ be located at the origin of a spherical polar coordinate system.
Let $\mathbf r$ denote the position vector of an arbitrary point $P$ on the surface of $B$.
Let the spherical polar coordinates of $P$ be denoted $\polar {r, \theta, \phi}$.
The electric charge density and electric field caused by $B$ are expressible in terms of $\polar {r, \theta, \phi}$ as:

$\map \rho {r, \theta, \phi}$
and:

$\map {\mathbf E} {r, \theta, \phi}$
Let us define $\d \mathbf S$ as being the infinitesimal area element of the surface of $B$ demarcated by the arcs on $B$ subtending:

the polar angles $\theta$ and $\d \theta$ and
and:

the azimuthal angles $\phi$ and $\d \phi$.
where $\d \theta$ and $\d \phi$ are likewise infinitesimal.
From Area Element in Spherical Polar Coordinate System:

$\d S = R^2 \sin \theta \rd \theta \rd \phi$
Integrating over all space, we have:














\(\ds F\)

\(=\)







\(\ds \int_{\phi \mathop = 0}^{2 \pi} \int_{\sigma \mathop = 0}^\pi \map E {R, \theta, \phi} R^2 \sin \theta \rd \theta \rd \phi\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\varepsilon_0} \int_{\phi \mathop = 0}^{2 \pi} \int_{\sigma \mathop = 0}^\pi \int_{r \mathop = 0}^R \map \rho {r, \theta, \phi} r^2 \sin \theta \rd r \rd \theta \rd \phi\)









from which the result follows.
$\blacksquare$


Sources
1990: I.S. Grant and W.R. Phillips: Electromagnetism (2nd ed.) ... (previous) ... (next): Chapter $1$: Force and energy in electrostatics: $1.4$ Gauss's Law: $1.4.2$ The flux of the electric field out of a closed surface: $(1.15)$




