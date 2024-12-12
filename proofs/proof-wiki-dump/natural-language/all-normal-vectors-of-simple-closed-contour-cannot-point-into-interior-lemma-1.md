# 

Source: https://proofwiki.org/wiki/All_Normal_Vectors_of_Simple_Closed_Contour_Cannot_Point_into_Interior/Lemma_1

Lemma
Let $C$ be a simple closed contour in the complex plane $\C$ with parameterization $\gamma: \closedint a b \to \C$.
Let $t \in \openint a b$ such that $\gamma$ is complex-differentiable at $t$.
Let $r_0, R_0 \in \R_{>0}$ such that:

for all $s \in \openint {t - R_0} {t + R_0}$ and for all $\epsilon \in \openint 0 {r_0}$: $\map \gamma s + \epsilon i \map {\gamma'} s \notin \Img C$, and $\map \gamma s - \epsilon i \map {\gamma'} s \notin \Img C$.

There exist $r, R \in \R_{>0}$ with $r \le r_0 , R \le R_0$ such that:

$V_{r,R} = \set {\map \gamma s + \epsilon i \map {\gamma'} s : s \in \openint {t - R} {t + R}, \epsilon \in \openint {-r} r}$
is an open set in $\C$.


Proof

Work In ProgressIn particular: Add proof for $\gamma'$ not continuously differentiable.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
This proof assumes that $\gamma '$ is continuously differentiable.
Let $x, y : \openint a b \to \R$ be the real functions defined by:

$\map \gamma t = \map x t + i \map y t$

Let $f: \openint {t - R_0} {t + R_0} \times \openint {-r_0} {r_0} \to \R^2$ be defined by $\map f {s, \epsilon} = \tuple {\map x s - \epsilon \map {y'} s, \map y s + \epsilon \map {x'} s}$.
The Jacobian matrix of $f$ at $\tuple {s, \epsilon}$ is:

$\mathbf J_f = \begin {pmatrix}
\map {x'} s - \epsilon \map {y' '} s & - \map {y'} s \\
\map {y'} s + \epsilon \map {x' '} s & \map {x'} s
\end {pmatrix}$
and the Jacobian determinant of $f$ evaluated at $\tuple {t, 0}$ is:

$\map {\map \det {\mathbf J_f} } {t, 0} = \map {x'} t^2 + \map {y'} t^2$

As $\map {\gamma'} t \ne 0$ by definition of smooth path, it follows that $\map {\map \det {\mathbf J_f} } {t, 0} \ne 0$.
From Matrix is Nonsingular iff Determinant has Multiplicative Inverse, it follows that the Jacobian matrix of $f$ evaluated at $\tuple {t, 0}$ is nonsingular.
From Inverse Function Theorem for Real Functions, it follows that there exist open sets:

$U \subseteq \openint {t - R_0} {t + R_0} \times \openint {-r_0} {r_0}, V \subseteq \R^2$
such that the restriction of $f$ to $U \times V$ is bijective, and the inverse $f^{-1}$ is continuous.
Equip $\R^2$ with the direct product norm.
Norms on Finite-Dimensional Real Vector Space are Equivalent shows that the direct product norm is equivalent to the Euclidean norm on $\R^2$.
From Open Sets in Vector Spaces with Equivalent Norms Coincide, it follows that $U$ is open in $\R^2$ equipped with the direct product norm.
Then there exist an open ball $\map {B_r} t \subseteq U$ with center $t$ of the form:

$\map {B_r} t = \openint {t - r} {t + r} \times \openint {-r} r$

From Bijection is Open iff Inverse is Continuous, it follows that $f \sqbrk {\map {B_r} t}$ is open in $\R^2$.
Complex Plane is Homeomorphic to Real Plane shows that we can identify the complex plane $\C$ with the real plane $\R^2$ by the homeomorphism $\map \phi {x, y} = x + i y$
We identify $\map f {s, \epsilon}$ with $\map \phi {\map f {s, \epsilon} } = \map \gamma s + \epsilon i \map {\gamma '} s$.
Then $V_{r, r} := \phi \sqbrk {f \sqbrk {\map {B_r} t} }$ fulfils the claim of the theorem.
$\blacksquare$





