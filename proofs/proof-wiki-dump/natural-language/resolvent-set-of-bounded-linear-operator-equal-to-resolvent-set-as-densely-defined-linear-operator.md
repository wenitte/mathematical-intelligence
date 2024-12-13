# 

Source: https://proofwiki.org/wiki/Resolvent_Set_of_Bounded_Linear_Operator_equal_to_Resolvent_Set_as_Densely-Defined_Linear_Operator

Theorem
Let $\HH$ be a Hilbert space over $\C$. 
Let $T : \HH \to \HH$ be a bounded linear operator.
Let $\map {\rho_1} T$ be the resolvent set of $T$ as a bounded linear operator.
Let $\map {\rho_2} T$ be the resolvent set of $T$ as a densely-defined linear operator $\struct {\HH, T}$.

Then: 

$\map {\rho_1} T = \map {\rho_2} T$


Proof
Let $\lambda \in \map {\rho_1} T$.
Then $T - \lambda I$ is invertible in the sense of a bounded linear transformation.
That is, $T - \lambda I$ is bijective and $\paren {T - \lambda I}^{-1}$ is bounded.
From Underlying Set of Topological Space is Everywhere Dense, we have that $\HH$ is everywhere dense in $\HH$. 
So, $T - \lambda I$ is injective, $\map {\paren {T - \lambda I} } {\map D T}$ is everywhere dense in $\HH$, and $\paren {T - \lambda I}^{-1}$ is bounded.
So $\lambda \in \map {\rho_2} T$.
We therefore have: 

$\map {\rho_1} T \subseteq \map {\rho_2} T$
by the definition of set inclusion.

Now let $\lambda \in \map {\rho_2} T$. 
Then:

$T - \lambda I$ is injective, $\map {\paren {T - \lambda I} } {\map D T}$ is everywhere dense in $\HH$, and $\paren {T - \lambda I}^{-1}$ is bounded.
To show that $\lambda \in \map {\rho_1} T$, we just need to show that: 

$\map {\paren {T - \lambda I} } {\map D T} = \HH$.
Let $y \in \HH$.
For brevity, let $S_\lambda = \paren {T - \lambda I}^{-1}$.  
From Point in Closure of Subset of Metric Space iff Limit of Sequence, there exists a sequence in $\map {\paren {T - \lambda I} } {\map D T}$ with: 

$y_n \to y$
Define:

$x_n = \map {S_\lambda^{-1} } {y_n}$
for each $n \in \N$.
We show that $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy.
Since $\HH$ is a Hilbert space, we will then have that $\sequence {x_n}_{n \mathop \in \N}$ converges.
We have: 














\(\ds \norm {x_n - x_m}\)

\(=\)







\(\ds \norm {\map {S_\lambda^{-1} }  {y_n} - \map {S_\lambda^{-1} } {y_m} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\map {S_\lambda^{-1} } {y_n - y_m} }\)





Inverse of Linear Transformation is Linear Transformation














\(\ds \)

\(\le\)







\(\ds \norm {S_\lambda^{-1} } \norm {y_n - y_m}\)





Definition of Norm on Bounded Linear Transformation



From Convergent Sequence in Normed Vector Space is Cauchy Sequence, we have: 

$\sequence {y_n}_{n \mathop \in \N}$ is Cauchy.
So, for each $\epsilon > 0$ there exists $N \in \N$ such that: 

$\ds \norm {y_n - y_m} < \frac \epsilon {\norm {S_\lambda^{-1} } }$ for all $n \ge N$.
Then: 

$\norm {x_n - x_m} < \epsilon$ for all $n \ge N$.
So $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy, and so converges to a limit $x$.
We then have: 














\(\ds S_\lambda x\)

\(=\)







\(\ds \map {S_\lambda} {\lim_{n \mathop \to \infty} x_n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \to \infty} S_\lambda x_n\)





Continuity of Linear Transformation between Normed Vector Spaces, Continuous Mappings preserve Convergent Sequences














\(\ds \)

\(=\)







\(\ds \lim_{n \to \infty} y_n\)




















\(\ds \)

\(=\)







\(\ds y\)









That is: 

$y \in \map {\paren {T - \lambda I} } {\map D T}$
Since $y \in \HH$ was arbitrary, we have: 

$\HH \subseteq \map {\paren {T - \lambda I} } {\map D T}$
from the definition of set inclusion. 
We also have: 

$\map {\paren {T - \lambda I} } {\map D T} \subseteq \HH$
by definition and so:

$\map {\paren {T - \lambda I} } {\map D T} = \HH$
as required.
So $\lambda \in \map {\rho_1} T$.
We therefore have: 

$\map {\rho_2} T \subseteq \map {\rho_1} T$
and can therefore conclude:

$\map {\rho_1} T = \map {\rho_2} T$
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $25.3$: The Spectrum of Closed Unbounded Self-Adjoint Operators




