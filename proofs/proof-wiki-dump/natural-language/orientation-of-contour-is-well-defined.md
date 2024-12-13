# 

Source: https://proofwiki.org/wiki/Orientation_of_Contour_is_Well-Defined

Theorem
Let $C$ be a contour in the complex plane $\C$.
Let $D \subseteq \C$ be a connected domain.
Let $\Img C \subseteq \partial D$, where $\Img C$ denotes the image of $C$, and $\partial D$ denotes the boundary of $D$.

The orientation of $C$ with respect to $D$, if it exists, does not depend on the choice of parameterization of $C$.


Proof
By definition of contour, $C$ is a concatenation of a finite sequence of directed smooth curves $C_1, \ldots, C_n$.
Let each directed smooth curve $C_k$ be parameterized by the smooth path $\gamma_k: \closedint {a_k}{b_k} \to \C$ for all $k \in \set {1, \ldots, n}$.
Let $\sigma_k: \closedint {c_k}{d_k}$ be a reparameterization of $C_k$.
By definition of directed smooth curve, there exists a bijective differentiable strictly increasing real function:

$\phi_k: \closedint c d \to \closedint a b$
such that $\sigma_k = \gamma_k \circ \phi_k$.
Let $\sigma: \closedint c d \to \C$ be the parameterization of $C$ defined by $\sigma_1, \ldots, \sigma_n$.
Set $K_\sigma := \set { t \in \closedint c d : \textrm{ $\sigma$ is not differentiable at $t$ }  }$.
If $t \in \openint c d \setminus K_\sigma$, then there exists $k \in \set {1, \ldots, n}$ such that $t \in \openint {c_k}{d_k}$, and:














\(\ds \map {\gamma_k'}{ \map {\phi_k} t } \map {\phi_k'} t\)

\(=\)







\(\ds \map {\sigma_k'} t\)





by Derivative of Complex Composite Function








\(\ds \leadsto \ \ \)





\(\ds \map {\gamma_k'}{ \map {\phi_k} t }\)

\(=\)







\(\ds \dfrac { \map {\sigma_k'} t }{ \map {\phi_k'} t }\)










Suppose that $C$ is positively oriented with respect to $D$.
It follows that there exists $r \in \R_{>0}$ such that:

$\forall \epsilon \in \openint 0 r : \map \gamma t + \epsilon i \map {\gamma_k'}{ \map {\phi_k} t } \in D, \map \gamma t - \epsilon i \map {\gamma_k'}{ \map {\phi_k} t } \notin D$

When we replace the expression for $\map {\gamma_k'}{ \map {\phi_k} t }$, we have:

$\map \gamma t + \dfrac {\epsilon}{ \map {\phi_k'} t } i \map {\sigma_k'} t \in D,\map \gamma t -\dfrac {\epsilon}{ \map {\phi_k'} t } i \map {\sigma_k'} t \notin D$
where $\dfrac {\epsilon}{ \map {\phi_k'} t } \in \openint 0 {\dfrac r {\map {\phi_k'} t} }$.
This shows that $C$ is positively oriented with respect to $D$, when we use the parameterization $\sigma$ of $C$.

When $C$ is negatively oriented with respect to $D$, the proof is similar.
$\blacksquare$





