# 

Source: https://proofwiki.org/wiki/Resolvent_Mapping_is_Analytic/Bounded_Linear_Operator


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $B$ be a Banach space.
Let $\map \LL {B, B}$ be the set of bounded linear operators from $B$ to itself.
Let $T \in \map \LL {B, B}$.
Let $\map \rho T$ be the resolvent set of $T$ in the complex plane.

Then the resolvent mapping $f : \map \rho T \to \map \LL {B, B}$ given by $\map f z = \paren {T - z I}^{-1}$ is analytic, and:

$\map {f'} z = \paren {T - z I}^{-2}$
where $f'$ denotes the derivative of $f$ with respect to $z$.


Proof 1
For $a \in \map \rho T$, define:

$R_a = \paren {T - a I}^{-1}$
Then we have:














\(\ds \frac {\norm {\map f {z + h} - \map f z - \paren {T - z I}^{-2} h }_*} {\size h}\)

\(=\)







\(\ds \frac {\norm {R_{z + h} - R_z - R_z^2 h}_*} {\size h}\)




















\(\ds \)

\(=\)







\(\ds \frac {\norm {h R_{z + h} R_z - R_z^2 h }_*} {\size h}\)





Resolvent Identity














\(\ds \)

\(=\)







\(\ds \frac {\size h \norm {R_{z + h} R_z - R_z^2 }_*} {\size h}\)





Operator Norm is Norm














\(\ds \)

\(=\)







\(\ds \norm {R_{z + h} R_z - R_z^2 }_*\)









From Resolvent Mapping is Continuous we have:

$R_{z + h} \to R_z$ as $h \to 0$
Taking limits of both sides and using Norm is Continuous, we get:

$\ds \lim_{h \mathop \to 0} \dfrac {\norm {\map f {z + h} - \map f z - \paren {T - z I}^{-2} h }_*} {\size h} = \norm {R_z^2 - R_z^2}_* = 0$
which is the result.
$\blacksquare$


Proof 2
If $B=\set {\mathbf 0_B}$, the statement is trivial, since $\map f z = \mathbf 0_{\map \LL {B, B}}$ for all $z \in \C$.
We assume that $B \ne \set {\mathbf 0_B}$.
Especially, for all $z \in \map \rho T$:

$\map f z \ne \mathbf 0_{\map \LL {B, B}}$
since:

$\paren {T - z I} \map f z = I \ne \mathbf 0_{\map \LL {B, B}}$

Let $a \in \map \rho T$.
Then for each $z \in \C$:














\(\ds T - z I\)

\(=\)







\(\ds \paren {T - a I - \paren {z - a} I}\)




















\(\ds \)

\(=\)







\(\ds \paren {T - a I} \paren {I - \paren {z - a} \paren {T - a I}^{-1} }\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren {T - a I} \paren {I - \paren {z - a} \map f a}\)









Recall that $\map B {c, r}$ denotes the open disc of center $c \in \C$ and radius $r>0$.
For all $z \in \map B {a, \frac{1}{\norm {\map f a} } }$, we have:














\(\ds \paren {I - \paren {z - a} \map f a}^{-1}\)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {\paren {z - a} \map f a}^n\)





Neumann Series, as $\norm {\paren {z - a} \map f a} < 1$




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {\map f a}^n \paren {z - a}^n\)









Therefore:














\(\ds \paren {T - zI}^{-1}\)

\(=\)







\(\ds \paren {\paren {T - a I} \paren {I - \paren {z - a} \map f a} }^{-1}\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \paren {I - \paren {z - a} \map f a}^{-1} \paren {T - a I}^{-1}\)





Inverse of Product














\(\ds \)

\(=\)







\(\ds \paren {I - \paren {z - a} \map f a}^{-1} \map f a\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{n \mathop \ge 0} \paren {\map f a}^n \paren {z - a}^n} \map f a\)





by $(2)$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {\map f a}^{n+1} \paren {z - a}^n\)









That is, in a neighborhood of each $a \in \map \rho T$, $f$ can be written as:

$\ds \map f z = \sum_{n \mathop \ge 0} \paren {\map f a}^{n+1} \paren {z - a}^n$
This means that $f$ is analytic on $\map \rho T$.

Finally, by Derivative of Power Series, in the neighborhood of each $a \in \map \rho T$:

$\ds \map {f'} z = \sum_{n \mathop \ge 1} \paren {\map f a}^{n+1} n \paren {z - a}^{n-1}$
Choosing $z = a$, we obtain:

$\map {f'} a = \paren {\map f a}^2 = \paren {T - aI}^{-2}$
$\blacksquare$





