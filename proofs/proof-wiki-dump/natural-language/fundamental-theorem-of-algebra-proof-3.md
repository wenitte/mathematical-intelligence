# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Algebra/Proof_3

Theorem
Every non-constant polynomial with coefficients in $\C$ has a root in $\C$.


Proof
Let $p: \C \to \C$ be a complex, non-constant polynomial.
Aiming for a contradiction, suppose that $\map p z \ne 0$ for all $z \in \C$.
Now consider the closed contour integral:

$\ds \oint \limits_{\gamma_R} \frac 1 {z \cdot \map p z} \rd z$
where $\gamma_R$ is a circle with radius $R$ around the origin.

By Derivative of Complex Polynomial, the polynomial $z \cdot \map p z$ is holomorphic.
Since $\map p z$ is assumed to have no zeros, the only zero of $z \cdot \map p z$ is $0 \in \C$.
Therefore by Reciprocal of Holomorphic Function $\dfrac 1 {z \cdot \map p z}$ is holomorphic in $\C \setminus \set 0$.
Hence the Cauchy-Goursat Theorem implies that the value of this integral is independent of $R > 0$.

On the one hand, one can calculate the value of this integral in the limit $R \to 0$ (or use Cauchy's Residue Theorem), using the parameterization $z = R e^{i \phi}$ of $\gamma_R$:














\(\ds \lim \limits_{R \mathop \to 0} \oint \limits_{\gamma_R} \frac 1 {z \cdot \map p z} \rd z\)

\(=\)







\(\ds \lim \limits_{R \mathop \to 0} \int \limits_0^{2 \pi} \frac 1 {R e^{i \phi} {\map p {R e^{i \phi} } } } \, i R e^{i \phi} \rd \phi\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \lim \limits_{R \mathop \to 0} \int \limits_0^{2 \pi} \frac i {\map p {R e^{i \phi} } } \rd \phi\)




















\(\ds \)

\(=\)







\(\ds \int \limits_0^{2 \pi} \lim \limits_{R \mathop \to 0} \frac i {\map p {R e^{i \phi} } } \rd \phi\)





Definite Integral of Limit of Uniformly Convergent Sequence of Integrable Functions














\(\ds \)

\(=\)







\(\ds \int \limits_0^{2 \pi} \frac i {\map p 0} \rd \phi\)





Real Polynomial Function is Continuous














\(\ds \)

\(=\)







\(\ds \frac {2 \pi i} {\map p 0}\)









which is non-zero.

On the other hand, we have the following upper bound for the absolute value of the integral:














\(\ds \size {\oint \limits_{\gamma_R} \frac 1 {z \cdot \map p z} \rd z}\)

\(\le\)







\(\ds 2 \pi R \max \limits_{\size z \mathop = R} \paren {\frac 1 {\size {z \cdot \map p z} } }\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds 2 \pi \max \limits_{\size z \mathop = R} \paren {\frac 1 {\size {\map p z} } }\)









But this goes to zero for $R \to \infty$.
We have arrived at a contradiction.
Hence by Proof by Contradiction the assumption that $\map p z \ne 0$ for all $z \in \C$ must be wrong.
$\blacksquare$





