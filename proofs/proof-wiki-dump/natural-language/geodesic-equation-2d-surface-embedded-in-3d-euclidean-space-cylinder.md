# 

Source: https://proofwiki.org/wiki/Geodesic_Equation/2d_Surface_Embedded_in_3d_Euclidean_Space/Cylinder


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\sigma$ be the surface of a cylinder.
Let $\sigma$ be embedded in 3-dimensional Euclidean space.
Let $\sigma$ be parameterised by $\tuple {\phi, z}$ as

$\mathbf r = \tuple {a \cos \phi, a \sin \phi, z}$
where

$a > 0$
and

$z, \phi \in \R$

Then geodesics on $\sigma$ are of the following form:

$z = C_1 \phi + C_2$
where $C_1, C_2$ are real arbitrary constants.


Proof
From the given parametrization it follows that:














\(\ds E\)

\(=\)







\(\ds \mathbf r_\phi \cdot \mathbf r_\phi\)




















\(\ds \)

\(=\)







\(\ds \tuple {-a \sin \phi, a \cos \phi, 0} \cdot \tuple {-a \sin \phi, a \cos \phi, 0}\)




















\(\ds \)

\(=\)







\(\ds a^2\)




















\(\ds F\)

\(=\)







\(\ds \mathbf r_\phi \cdot \mathbf r_z\)




















\(\ds \)

\(=\)







\(\ds \tuple {-a \sin \phi, a \cos \phi, 0} \cdot \tuple {0, 0, 1}\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds G\)

\(=\)







\(\ds \mathbf r_z \cdot \mathbf r_z\)




















\(\ds \)

\(=\)







\(\ds \tuple {0, 0, 1} \cdot \tuple {0, 0, 1}\)




















\(\ds \)

\(=\)







\(\ds 1\)









where $E, F, G$ are the functions of the first fundamental form.
Furthermore, all derivatives of $E, F, G$ with respect to $\phi$ and $z$ vanish.
Then geodesic equations read:

$\dfrac \d {\d t} \dfrac {a^2 \phi'} {\sqrt {a^2 \phi'^2 + z'^2} } = 0$
$\dfrac \d {\d t} \dfrac {z'} {\sqrt {a^2 \phi'^2 + z'^2} } = 0$
Integrate these differential equations once:

$\dfrac {a^2 \phi'} {\sqrt {a^2 \phi'^2 + z'^2} } = b_1$
$\dfrac {z'} {\sqrt {a^2 \phi'^2 + z'^2} } = b_2$
where $b_1, b_2$ are real arbitrary constants.
Divide the first equation by the second one:

$\dfrac {a^2 \phi'} {z'} = \dfrac {b_1} {b_2}$
To solve this in terms of $z$ as a function of $\phi$, define:

$C_1 = \dfrac {a^2 b_2} {b_1}$
and use the chain rule:

$\dfrac {\d z} {\d \phi} = C_1$
Integration with respect to $\phi$ yields the desired result.
In other words, geodesics are helical lines.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 2.9$: The Fixed End Point Problem for n Unknown Functions




