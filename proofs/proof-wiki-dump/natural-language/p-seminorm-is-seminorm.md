# 

Source: https://proofwiki.org/wiki/P-Seminorm_is_Seminorm



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $p \in \hointr 1 \infty$.
Let $\map {\LL^p} {X, \Sigma, \mu}$ be the Lebesgue $p$-space on $\struct {X, \Sigma, \mu}$. 
Let $\norm {\, \cdot \,}_p$ be the $p$-seminorm on $\map {\LL^p} {X, \Sigma, \mu}$.

Then $\norm {\, \cdot \,}_p$ is a seminorm on $\map {\LL^p} {X, \Sigma, \mu}$.


Proof
Let $f \in \map {\LL^p} {X, \Sigma, \mu}$.
From the construction of the integral of a positive $\Sigma$-measurable function, we have: 

$\ds \paren {\int \size f^p \rd \mu}^{1/p} \ge 0$
so:

$\norm f_p \ge 0$
We also have: 

$\ds \int \size f^p \rd \mu < \infty$
So $\norm {\, \cdot \,}$ maps from $\map {\LL^p} {X, \Sigma, \mu}$ to the non-negative reals.
We now verify Seminorm Axiom $\text N 2$: Positive Homogeneity and Seminorm Axiom $\text N 3$: Triangle Inequality.


Proof of Seminorm Axiom $\text N 2$: Positive Homogeneity
Let $f \in \map {\LL^p} {X, \Sigma, \mu}$ and $\lambda \in \R$, we have: 














\(\ds \norm {\lambda f}_p\)

\(=\)







\(\ds \paren {\int \size {\lambda f}^p \rd \mu}^{1/p}\)




















\(\ds \)

\(=\)







\(\ds \paren {\int \size \lambda^p \size f^p \rd \mu}^{1/p}\)




















\(\ds \)

\(=\)







\(\ds \paren {\size \lambda^p \int \size f^p \rd \mu}^{1/p}\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds \size \lambda \paren {\int \size f^p \rd \mu}^{1/p}\)




















\(\ds \)

\(=\)







\(\ds \size \lambda \norm f_p\)









$\Box$


Proof of Seminorm Axiom $\text N 3$: Triangle Inequality
This is Minkowski's Inequality on Lebesgue Space.
$\blacksquare$





