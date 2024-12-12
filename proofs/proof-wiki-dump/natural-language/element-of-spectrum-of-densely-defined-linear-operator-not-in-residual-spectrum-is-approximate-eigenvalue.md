# 

Source: https://proofwiki.org/wiki/Element_of_Spectrum_of_Densely-Defined_Linear_Operator_not_in_Residual_Spectrum_is_Approximate_Eigenvalue



Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$. 
Let $\struct {\map D T, T}$ be a self-adjoint densely-defined linear operator.
Let $\map \sigma T$ be the spectrum of $\struct {\map D T, T}$.
Let $\map {\sigma_r} T$ be the residual spectrum of $\struct {\map D T, T}$.
Let $\lambda \in \map \sigma T \setminus \map {\sigma_r} T$. 

Then $\lambda$ is an approximate eigenvalue of $\struct {\map D T, T}$.


Corollary
Let $\struct {\map D T, T}$ be a self-adjoint densely-defined linear operator.
Let $\lambda \in \map \sigma T$. 

Then $\lambda$ is an approximate eigenvalue of $\struct {\map D T, T}$.


Proof
Let $\lambda \in \map \sigma T$.
From Partition of Spectrum of Densely-Defined Linear Operator, $\lambda$ is contained in either the point spectrum or continuous spectrum of $T$.
If $\lambda$ is contained in the point spectrum, we have the result from Eigenvalue of Densely-Defined Linear Operator is Approximate Eigenvalue.
Otherwise, $\lambda$ is contained in the continuous spectrum, in which case $\paren {T - \lambda I}^{-1}$ is not bounded.
That is, there exists a sequence $\sequence {y_n}_{n \mathop \in \N}$ in $\map D {\paren {T - \lambda I}^{-1} }$ with $\norm {y_n} = 1$ and: 

$\norm {\paren {T - \lambda I}^{-1} y_n} \to \infty$
Now set: 

$\ds x_n = \paren {T - \lambda I}^{-1} y_n$
for each $n \in \N$ and then: 

$\ds z_n = \frac {x_n} {\norm {x_n} }$
We then have:














\(\ds \paren {T - \lambda I} z_n\)

\(=\)







\(\ds \frac {\paren {T - \lambda I} x_n} {\norm {x_n} }\)




















\(\ds \)

\(=\)







\(\ds \frac {y_n} {\norm {x_n} }\)









Then: 














\(\ds \norm {\paren {T - \lambda I} z_n}\)

\(=\)







\(\ds \frac {\norm {y_n} } {\norm {x_n} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\norm {\paren {T - \lambda I}^{-1} y_n} }\)




















\(\ds \)

\(\to\)







\(\ds 0\)





from Reciprocal of Null Sequence: Corollary, since $\norm {\paren {T - \lambda I}^{-1} y_n} \to \infty$



so we have: 

$\paren {T - \lambda I} z_n \to 0$
So $\lambda$ is an approximate eigenvalue of $T$.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $25.3$: The Spectrum of Closed Unbounded Self-Adjoint Operators




