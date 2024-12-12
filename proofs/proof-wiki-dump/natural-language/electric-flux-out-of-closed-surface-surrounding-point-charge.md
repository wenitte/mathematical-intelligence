# 

Source: https://proofwiki.org/wiki/Electric_Flux_out_of_Closed_Surface_surrounding_Point_Charge



Theorem
Let $q$ be a point charge.
Let $S$ be a closed surface surrounding $q$.
The total electric flux through $S$ is given by:

$F = \dfrac q {\varepsilon_0}$


Proof
Lemma
Let $q$ be a point charge located at the origin of a spherical polar coordinate system.


This definition needs to be completed.In particular: Spherical Polar Coordinate SystemYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding or completing the definition.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{DefinitionWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $S$ be a closed surface surrounding $q$.
Let $\delta \mathbf S$ be an area element of $S$.
Let $\delta \Omega$ be the solid angle subtended by the projection of $\delta \mathbf S$ from $q$.
The total electric flux through $\delta \Omega$ is given by:

$F = \dfrac q {4 \pi \varepsilon_0} \delta \Omega$
$\Box$

From this lemma, we can transform the surface integral for the flux through the entire surface $S$ into a double integral between angles:














\(\ds \int_S \mathbf E \cdot \rd \mathbf S\)

\(=\)







\(\ds \dfrac q {4 \pi \varepsilon_0} \int_0^\pi \sin \theta \rd \theta \int_0^{2 \pi} \rd \phi\)




















\(\ds \)

\(=\)







\(\ds \dfrac q {4 \pi \varepsilon_0} \int_0^\pi \sin \theta \rd \theta \bigintlimits \phi 0 {2 \pi}\)




















\(\ds \)

\(=\)







\(\ds \dfrac q {4 \pi \varepsilon_0} \int_0^\pi \sin \theta \rd \theta \times 2 \pi\)




















\(\ds \)

\(=\)







\(\ds \dfrac q {2 \varepsilon_0} \int_0^\pi \sin \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \dfrac q {2 \varepsilon_0} \bigintlimits {-\cos \theta} 0 \pi\)




















\(\ds \)

\(=\)







\(\ds \dfrac q {2 \varepsilon_0} \paren {-\paren {\cos \pi - \cos 0} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac q {2 \varepsilon_0} \paren {-\paren {-1 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac q {\varepsilon_0}\)









$\blacksquare$


Sources
1990: I.S. Grant and W.R. Phillips: Electromagnetism (2nd ed.) ... (previous) ... (next): Chapter $1$: Force and energy in electrostatics: $1.4$ Gauss's Law: $1.4.2$ The flux of the electric field out of a closed surface: $(1.12)$




