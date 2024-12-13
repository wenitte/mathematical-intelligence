# 

Source: https://proofwiki.org/wiki/Norm_of_Compact_Hermitian_Operator_is_Equal_to_Greatest_Modulus_of_Eigenvalue

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot_\HH}$ be a Hilbert space over $\C$.
Let $T : \HH \to \HH$ be a compact Hermitian operator.
Let $\map {\sigma_p} T$ be the point spectrum of $T$. 

Then: 

$\norm T_{\map \BB \HH} = \max \set {\cmod \lambda : \lambda \in \map {\sigma_p} T}$
where $\norm \cdot_{\map \BB \HH}$ is the norm on the space of linear transformations.


Proof
Suppose that $T = 0$. 
Then $\norm T_{\map \BB \HH} = 0$ from Norm Axiom $\text N 1$: Positive Definiteness. 
Then $-\lambda I$ is injective if and only if $\lambda \ne 0$. 
So $\map {\sigma_p} T = \set 0$ in this case and so:

$\max \set {\cmod \lambda : \lambda \in \map {\sigma_p} T} = 0 = \norm T_{\map \BB \HH}$.

Now let $T \ne 0$ so that $\norm T_{\map \BB \HH} \ne 0$. 
From Norm of Hermitian Operator:

$\norm T_{\map \BB \HH} = \sup \set {\cmod {\innerprod {T x} x} : x \in \HH, \, \norm x = 1}$
So by the definition of supremum, there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ with $\norm {x_n} = 1$ for each $n \in \N$ such that: 

$\ds \norm T_{\map \BB \HH} \ge \cmod {\innerprod {T x_n} {x_n} } \ge \norm T_{\map \BB \HH} - \frac 1 n$
Then by the Squeeze Theorem: 

$\cmod {\innerprod {T x_n} {x_n} } \to \norm T_{\map \BB \HH}$
From Operator is Hermitian iff Numerical Range is Real, $\innerprod {T x_n} {x_n} \in \R$ for each $n \in \N$. 
Since $\cmod {\innerprod {T x_n} {x_n} } \to \norm T_{\map \BB \HH}$, a convergent subsequence of $\sequence {\innerprod {T x_n} {x_n} }_{n \mathop \in \N}$ converges to either $\norm T_{\map \BB \HH}$ or $-\norm T_{\map \BB \HH}$, from Modulus of Limit. 
Now, either $\innerprod {T x_n} {x_n} \ge 0$ or $\innerprod {T x_n} {x_n} \le 0$ for infinitely many $n$.
Let $\sequence {x_{n_j} }_{j \mathop \in \N}$ be a subsequence of $\sequence {x_n}_{n \mathop \in \N}$ such that $\innerprod {T x_{n_j} } {x_{n_j} }$ is the same sign for each $j$. 
Then: 

$\innerprod {T x_{n_j} } {x_{n_j} } \to \alpha$
where $\alpha \in \set {\norm T_{\map \BB \HH}, - \norm T_{\map \BB \HH} }$.
Since $T$ is compact and $\sequence {x_{n_j} }_{j \mathop \in \N}$ is bounded, there exists a subsequence $\sequence {x_{n_{j_k} } }_{k \mathop \in \N}$ such that $\sequence {T x_{n_{j_k} } }_{k \mathop \in \N}$ converges.
Say:

$T x_{n_{j_k} } \to y$ as $n \to \infty$ for some $y \in \HH$.
Now we have: 














\(\ds \norm {T x_{n_{j_k} }  - \alpha x_{n_{j_k} } }^2\)

\(=\)







\(\ds \innerprod {T x_{n_{j_k} }  - \alpha x_{n_{j_k} } } {T x_{n_{j_k} }  - \alpha x_{n_{j_k} } }\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {T x_{n_{j_k} } } {T x_{n_{j_k} } } - \alpha \innerprod {x_{n_{j_k} } } {T x_{n_{j_k} } } - \alpha \innerprod {T x_{n_{j_k} } } {x_{n_{j_k} } } + \alpha^2 \innerprod {x_{n_{j_k} } } {x_{n_{j_k} } }\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \norm {T x_{n_{j_k} } }^2 - 2 \alpha \innerprod {T x_{n_{j_k} } } {x_{n_{j_k} } } + \alpha^2 \norm {x_{n_{j_k} } }^2\)





Definition of Inner Product Norm, Definition of Hermitian Operator














\(\ds \)

\(=\)







\(\ds \alpha^2 - 2 \alpha \innerprod {T x_{n_{j_k} } } {x_{n_{j_k} } } + \alpha^2\)





Fundamental Property of Norm on Bounded Linear Transformation














\(\ds \)

\(=\)







\(\ds 2 \alpha \paren {\alpha -  \innerprod {T x_{n_{j_k} } } {x_{n_{j_k} } } }\)









We have:

$\innerprod {T x_{n_{j_k} } } {x_{n_{j_k} } } \to \alpha$ as $n \to \infty$
so: 

$\norm {T x_{n_{j_k} } - \alpha x_{n_{j_k} } }^2 \to 0$ as $n \to \infty$
So:

$T x_{n_{j_k} } - \alpha x_{n_{j_k} } \to 0$ as $n \to \infty$.
Since $T x_{n_{j_k} } \to y$, we have: 

$\alpha x_{n_{j_k} } \to y$ as $n \to \infty$.
So, since $\alpha \ne 0$, we have: 

$\ds x_{n_{j_k} } \to \frac y \alpha$ as $n \to \infty$.
Let: 

$\ds x = \frac y \alpha$
Since $\norm {x_n} = 1$ for each $n \in \N$, we have $\norm x = 1$ from Modulus of Limit: Normed Vector Space.
Now, from Continuity of Linear Transformations, $T$ is continuous.
From Sequential Continuity is Equivalent to Continuity in Metric Space, $T$ is sequentially continuous.
So, we have: 














\(\ds T x\)

\(=\)







\(\ds \lim_{j \mathop \to \infty} T x_{n_{j_k} }\)




















\(\ds \)

\(=\)







\(\ds y\)




















\(\ds \)

\(=\)







\(\ds \alpha x\)









So we have $\alpha \in \map {\sigma_p} T$.
So from Spectrum of Bounded Linear Operator contains Point Spectrum, we have $\alpha \in \map \sigma T$.
On the other hand, we have: 

$\map \sigma T \subseteq \set {\lambda \in \C : \cmod \lambda \le \norm T_{\map \BB X} }$
as shown in Spectrum of Bounded Linear Operator is Compact.
So we must have: 

$\alpha = \max \set {\cmod \lambda : \lambda \in \map \sigma T} = \max \set {\cmod \lambda : \lambda \in \map {\sigma_p} T}$
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $16.2$: Eigenvalues of Compact Self-Adjoint Operators




