# 

Source: https://proofwiki.org/wiki/Geodesic_Equation/2d_Surface_Embedded_in_3d_Euclidean_Space

Theorem
Let $\sigma: U \subset \R^2 \to V \subset \R^3$ be a smooth surface specified by a vector-valued function:

$\mathbf r = \map {\mathbf r} {u, v}$

Then a geodesic of $\sigma$ satisfies the following system of differential equations:

$\dfrac {E_u u'^2 + 2 F_u u' v' + G_u v'^2} {\sqrt{E u'^2 + 2 F u' v' + G v'^2} } - \dfrac \d {\d t} \dfrac {2 \paren {E u' + F v'} } {\sqrt{E u'^2 + 2 F u' v' + G v'^2} } = 0$
$\dfrac {E_v u'^2 + 2 F_v u' v' + G_v v'^2} {\sqrt{E u'^2 + 2 F u' v' + G v'^2} } - \dfrac \d {\d t} \dfrac {2 \paren {F u' + G v'} } {\sqrt{E u'^2 + 2 F u' v' + G v'^2} } = 0$
where $E, F, G$ are the functions of the first fundamental form:

$E = {\mathbf r}_u \cdot {\mathbf r}_u, F = {\mathbf r}_u \cdot {\mathbf r}_v, G = {\mathbf r}_v \cdot {\mathbf r}_v$


Proof
A curve on the surface $\mathbf r$ can be specified as $u = \map u t$, $v = \map v t$
The arc length between the points corresponding to $t_0$ and $t_1$ equals:

$\ds J \sqbrk {u, v} = \int_{t_0}^{t_1} \sqrt {E u'^2 + 2 F u'v' + G v'^2} \rd t$

The following derivatives will appear in Euler's Equations:














\(\ds \dfrac {\partial} {\partial u'} \sqrt {E u'^2 + 2 F u'v' + G v'^2}\)

\(=\)







\(\ds \frac 1 {2 \sqrt {E u'^2 + 2 F u'v' + G v'^2} } \map {\dfrac {\partial} {\partial u'} } {E u'^2 + 2 F u'v' + G v'^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 E u' + 2 F_u u'} {2 \sqrt {E u'^2 + 2 F u'v' + G v'^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {E u' + F u'} {\sqrt {E u'^2 + 2 F u'v' + G v'^2} }\)






















\(\ds \dfrac {\partial} {\partial u} \sqrt {E u'^2 + 2 F u'v' + G v'^2}\)

\(=\)







\(\ds \frac 1 {2 \sqrt {E u'^2 + 2 F u'v' + G v'^2} } \map {\dfrac {\partial} {\partial u} } {E u'^2 + 2 F u'v' + G v'^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {E_u u'^2 + 2 F_u u' v' + G_u v'^2} {2 \sqrt {E u'^2 + 2 F u'v' + G v'^2} }\)










Analogous relations hold for derivatives with respect to $v$ and $v'$.
Euler's Equation together with the results above yield the geodesic equations.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 2.9$: The Fixed End Point Problem for n Unknown Functions




