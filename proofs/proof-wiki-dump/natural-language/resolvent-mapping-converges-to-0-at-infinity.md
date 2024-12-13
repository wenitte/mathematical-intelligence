# 

Source: https://proofwiki.org/wiki/Resolvent_Mapping_Converges_to_0_at_Infinity


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

It has been suggested that this page be renamed.In particular: something indicating the scope of the resultTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $B$ be a Banach space.
Let $\map \LL {B, B}$ be the set of bounded linear operators from $B$ to itself.
Let $T \in \map \LL {B, B}$.
Let $\map \rho T$ be the resolvent set of $T$ in the complex plane.
Then the resolvent mapping $f : \map \rho T \to \map \LL {B, B}$ given by $\map f z = \paren {T - z I}^{-1}$ is such that $\ds \lim_{z \mathop \to \infty} \norm {\map f z}_* = 0$.


Proof
Pick $z \in \Bbb C$ such that $\size z > 2 \norm T_*$.
By Operator Norm is Norm:

$\norm {\dfrac T z}_* = \dfrac {\norm T_*} {\size z} < \dfrac 1 2$
Hence:














\(\ds \norm {\map f z}_*\)

\(=\)







\(\ds \norm {\paren {T - z I}^{-1} }_*\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {z \paren {\dfrac T z - I} }^{-1} }_*\)




















\(\ds \)

\(=\)







\(\ds \norm {\frac{-1} z \paren {I - \dfrac T z}^{-1} }_*\)





Norm of Inverse of Constant Times Operator














\(\ds \)

\(=\)







\(\ds \frac 1 {\size z} \norm {\paren {I - \dfrac T z}^{-1} }_*\)





Operator Norm is Norm














\(\ds \)

\(=\)







\(\ds \frac 1 {\size z} \norm {I + \dfrac T z + \paren {\dfrac T z}^2 + \cdots}_*\)





Invertibility of Identity Minus Operator since $\norm {\dfrac T z} < \dfrac 1 2 < 1$














\(\ds \)

\(\le\)







\(\ds \frac 1 {\size z} \sum_{k \mathop \ge 0} \norm {\paren {\dfrac T z}^k }_*\)





Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \frac 1 {\size z} \sum_{k \mathop \ge 0} \paren {\dfrac {\norm T_*} {\size z} }^k\)





Operator Norm on Banach Space is Submultiplicative














\(\ds \)

\(\le\)







\(\ds \frac 1 {\size z} \sum_{k \mathop \ge 0} \paren {\dfrac 1 2}^k\)





since $\norm {\dfrac T z}_* < \dfrac 1 2$














\(\ds \)

\(\le\)







\(\ds \frac 2 {\size z}\)









Taking limits of both sides as $\size z \to \infty$:

$\norm {\map f z}_* \to 0$
$\blacksquare$





