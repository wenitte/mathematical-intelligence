# 

Source: https://proofwiki.org/wiki/Characterization_of_Positive_Bounded_Linear_Operator_on_Hilbert_Space



Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B \HH$ be the space of bounded linear operators on $\HH$ understood as a $\text C^\ast$-algebra.
Let $T : \HH \to \HH$ be a bounded linear operator.

Then $T$ is positive in $\map B \HH$ if and only if:

for each $x \in \HH$, $\innerprod {T x} x \in \R_{\ge 0}$.


Proof
Necessary Condition
Suppose that $T$ is positive in $\map B \HH$.
From Existence and Uniqueness of Positive Nth Root of Positive Element of C*-Algebra, there exists a Hermitian operator $R$ such that:

$T = R^2$
Since $R$ is Hermitian we have:

$R^2 = R^\ast R$
Then for each $x \in \HH$ we have:














\(\ds \innerprod {T x} x\)

\(=\)







\(\ds \innerprod {R^\ast R x} x\)




















\(\ds \)

\(=\)







\(\ds \innerprod {R x} {R x}\)





Definition of Adjoint














\(\ds \)

\(=\)







\(\ds \norm {R x}^2\)





Definition of Inner Product Norm














\(\ds \)

\(\in\)







\(\ds \R_{\ge 0}\)









$\Box$


Sufficient Condition
Suppose:

for each $x \in \HH$, $\innerprod {T x} x \in \R_{\ge 0}$.
From Operator is Hermitian iff Numerical Range is Real:

$T$ is Hermitian.
We show that $\map \sigma T \subseteq \hointr 0 \infty$.
Let $\lambda \in \map \sigma T$.
From Characterization of Spectrum of Bounded Linear Operator in Hilbert Space in terms of Approximate Eigenvalues: Corollary:

$\lambda$ is an approximate eigenvalue of $T$.
Then there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ with $\norm {x_n} = 1$ for each $n \in \N$ such that:

$\norm {T x_n - \lambda x_n} \to 0$
From Cauchy-Bunyakovsky-Schwarz Inequality, we have:

$\cmod {\innerprod {T x_n - \lambda x_n} {x_n} } \le \norm {T x_n - \lambda x_n}$
So:

$\innerprod {T x_n - \lambda x_n} {x_n} \to 0$ as $n \to \infty$
We have:

$\innerprod {T x_n - \lambda x_n} {x_n} = \innerprod {T x_n} {x_n} - \lambda \norm {x_n}^2 = \innerprod {T x_n} {x_n} - \lambda$
from the definition of the inner product norm. 
So we have:

$\innerprod {T x_n} {x_n} \to \lambda$ as $n \to \infty$
Since $\innerprod {T x_n} {x_n} \in \R_{\ge 0}$ for each $n \in \N$ and $\R_{\ge 0}$ is closed in $\C$, we have $\lambda \in \R_{\ge 0}$. 
That is, $\map \sigma T \subseteq \hointr 0 \infty$.
$\blacksquare$





