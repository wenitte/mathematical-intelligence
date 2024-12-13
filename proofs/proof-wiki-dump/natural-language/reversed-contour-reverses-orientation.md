# 

Source: https://proofwiki.org/wiki/Reversed_Contour_Reverses_Orientation

Theorem
Let $C$ be a contour in the complex plane $\C$.
Let $D \subseteq \C$ be a connected domain.
Let $\Img C \subseteq \partial D$, where $\Img C$ denotes the image of $C$, and $\partial D$ denotes the boundary of $D$.
Let $-C$ be the reversed contour of $C$.

If $C$ is positively oriented with respect to $D$, then $-C$ is negatively oriented with respect to $D$.
If $C$ is negatively oriented with respect to $D$, then $-C$ is positively oriented with respect to $D$.


Corollary
Let $C$ be a simple closed contour in the complex plane $\C$.

If $C$ is positively oriented, then $-C$ is negatively oriented.
If $C$ is negatively oriented, then $-C$ is positively oriented.


Proof
By definition of contour, $C$ is a concatenation of a finite sequence of directed smooth curves $C_1, \ldots, C_n$.
Let each directed smooth curve $C_k$ be parameterized by the smooth path $\gamma_k: \closedint {a_k}{b_k} \to \C$ for all $k \in \set {1, \ldots, n}$.
Let $\gamma: \closedint a b \to \C$ be the parameterization of $C$ defined by $\gamma_1, \ldots, \gamma_n$.
By definition of reversed contour, $-C$ is a concatenation of $-C_n , -C_{n-1}, \ldots, -C_1$.
By definition of reversed directed smooth curve, $-C_k$ is parameterized by the smooth path $\rho_k: \closedint {a_k}{b_k} \to \C$, defined by $\map {\rho_k} t = \map {\gamma_k}{a_k + b_k - t}$.
Let $\rho: \closedint c d \to \C$ be the parameterization of $-C$ defined by $\rho_n, \rho_{n-1}, \ldots, \rho_1$.
With $\psi_k: \closedint {a_k}{b_k} \to \closedint {a_k}{b_k}$ defined by $\map {\psi_k} t = a_k + b_k - t$, we have $\rho_k = \gamma_k \circ \psi_k$.

Suppose $C$ is positively oriented with respect to $D$.
Set $K_\rho := \set { u \in \closedint c d : \textrm{ $\rho$ is not differentiable at $u$ } }$.
If $u \in \openint c d \setminus K_\rho$, then there exists $k \in \set {1, \ldots, n}$ such that $t \in \openint {a_k}{b_k}$ with $\map \rho u = \map {\rho_k} t = \map {\gamma_k}{a_k + b_k - t}$.
Then:














\(\ds \map {\rho'} u\)

\(=\)







\(\ds \map {\rho_k'} t\)





Definition of Reversed Contour (Complex Plane)














\(\ds \)

\(=\)







\(\ds \map {\gamma_k'}{\map \psi t} \map {\psi'}{t}\)





by Derivative of Complex Composite Function














\(\ds \)

\(=\)







\(\ds - \map {\gamma_k'}{ a_k + b_k - t }\)





by Derivatives of Function of a x + b




By definition of positive orientation, there exists $r \in \R_{>0}$ such that:

for all $\epsilon \in \openint 0 r$ : $\map {\gamma_k}{ a_k + b_k - t } + \epsilon i \map {\gamma_k'}{ a_k + b_k - t } \in D$, and $\map {\gamma_k}{ a_k + b_k - t } - \epsilon i \map {\gamma_k'}{ a_k + b_k - t } \notin D$

It follows that $-C$ is negatively oriented with respect to $D$, as:

for all $\epsilon \in \openint 0 r$ : $\map \rho u - \epsilon i \map {\rho'} u \in D$, and $\map \rho u + \epsilon i \map {\rho'} u \notin D$

If $C$ is negatively oriented with respect to $D$, the proof is similar.
$\blacksquare$





