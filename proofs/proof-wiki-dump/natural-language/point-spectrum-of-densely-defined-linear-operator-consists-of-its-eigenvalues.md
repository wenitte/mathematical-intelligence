# 

Source: https://proofwiki.org/wiki/Point_Spectrum_of_Densely-Defined_Linear_Operator_consists_of_its_Eigenvalues

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$. 
Let $\struct {\map D T, T}$ be a densely-defined linear operator.
Let $\map {\sigma_p} T$ be the point spectrum of $T$.

Then $\lambda \in \map {\sigma_p} T$ if and only if $\lambda$ is an eigenvalue of $T$.


Proof
We have that $\lambda \in \map {\sigma_p} T$ if and only if:

$T - \lambda I$ is not injective.
That is, if and only if there exists $x \in \map D T \setminus \set 0$ such that: 

$\paren {T - \lambda I} x = \map {\paren {T - \lambda I} } 0 = 0$
So $\lambda \in \map {\sigma_p} T$ if and only if there exists $x \in \map D T \setminus \set 0$ such that: 

$T x = \lambda I x = \lambda x$
That is, $\lambda \in \map {\sigma_p} T$ if and only if $\lambda$ is an eigenvalue of $T$.
$\blacksquare$





