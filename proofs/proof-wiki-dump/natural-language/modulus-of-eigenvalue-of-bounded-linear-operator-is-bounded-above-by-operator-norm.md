# 

Source: https://proofwiki.org/wiki/Modulus_of_Eigenvalue_of_Bounded_Linear_Operator_is_Bounded_Above_by_Operator_Norm

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space.
Let $T : X \to X$ be a bounded linear operator.
Let $\lambda$ be a eigenvalue of $T$. 

Then: 

$\cmod \lambda \le \norm T$
where $\norm T$ denotes the norm of $T$.


Proof
Since $\lambda$ is an eigenvalue of $T$, there exists $x \ne 0$ such that: 

$T x = \lambda x$
Then we have: 














\(\ds \norm {\map T {\frac x {\norm x} } }\)

\(=\)







\(\ds \norm {\frac 1 {\norm x} \map T x}\)





Definition of Linear Transformation on Vector Space














\(\ds \)

\(=\)







\(\ds \frac {\norm {\map T x} } {\norm x}\)





using Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \frac {\cmod {\lambda x} } {\norm x}\)




















\(\ds \)

\(=\)







\(\ds \frac {\cmod \lambda \norm x} {\norm x}\)





using Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \cmod \lambda\)









while: 

$\ds \norm {\frac x {\norm x} } = 1$
So we have: 

$\cmod \lambda \in \set {\norm {T x} : \norm x = 1}$
So, from the definition of supremum and of the norm of a bounded linear transformation, we have:

$\cmod \lambda \le \norm T$
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $14.1$: The Resolvent and Spectrum




