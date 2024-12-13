# 

Source: https://proofwiki.org/wiki/Series_Law_for_Extremal_Length/Rho_is_Well_Defined


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma for Series Law for Extremal Length

This article, or a section of it, needs explaining.In particular: The details of what is to be proved needs to be stated here, in order that this page be appropriately self-contained.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
To see that $\rho$ is a well-defined metric, we need to check that it transforms correctly when changing local coordinates.
Let $z = \map z t$ and $w = \map w t$ be charts on the Riemann surface $X$.
Let $\map {\rho_1^z} t$ and $\map {\rho_1^w} t$ be the coefficient functions when $\rho_1$ is expressed in the local coordinates $z$ and $w$, respectively.
We use the analogous notation for $\rho_2$ and $\rho$.

Since $\rho_j$ is a metric for $j \in \set {1, 2}$, we have:

$\map {\rho_j^w} t = \map {\rho_j^z} t \cdot \size {\dfrac {\d z} {\d w} }$
where $\dfrac {\d z} {\d w}$ denotes, the derivative of the coordinate change $z \circ w^{-1}$.

Thus we have:














\(\ds \map {\rho^w} t\)

\(=\)







\(\ds \max \set {\map {\rho_1^w} t, \map {\rho_2^w} t}\)




















\(\ds \)

\(=\)







\(\ds \max \set {\map {\rho_1^z} t, \map {\rho_2^z} t} \cdot \size {\frac {\d z} {\d w} }\)




















\(\ds \)

\(=\)







\(\ds \map {\rho^z} t \cdot \size {\dfrac {\d z} {\d w} }\)









This means that $\rho$ transforms correctly and is a metric, as desired.
$\blacksquare$





