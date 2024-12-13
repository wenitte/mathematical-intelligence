# 

Source: https://proofwiki.org/wiki/Resolvent_Mapping_is_Analytic/Bounded_Linear_Operator/Proof_1



Theorem
Bounded Linear Operator
Let $B$ be a Banach space.
Let $\map \LL {B, B}$ be the set of bounded linear operators from $B$ to itself.
Let $T \in \map \LL {B, B}$.
Let $\map \rho T$ be the resolvent set of $T$ in the complex plane.

Then the resolvent mapping $f : \map \rho T \to \map \LL {B, B}$ given by $\map f z = \paren {T - z I}^{-1}$ is analytic, and:

$\map {f'} z = \paren {T - z I}^{-2}$
where $f'$ denotes the derivative of $f$ with respect to $z$.


Banach Algebra
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$. 
Let ${\mathbf 1}_A$ be the identity element of $A$. 
Let $x \in A$.
Let $\map {\rho_A} x$ be the resolvent set of $x$ in $A$.
Define $R : \map {\rho_A} x \to A$ by:

$\map R \lambda = \paren {\lambda {\mathbf 1}_A - x}^{-1}$

Then $R$ is analytic with derivative:

$\map {R'} \lambda = -\paren {\lambda {\mathbf 1}_A - x}^{-2}$

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Derivative is not defined for complex domainYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
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





