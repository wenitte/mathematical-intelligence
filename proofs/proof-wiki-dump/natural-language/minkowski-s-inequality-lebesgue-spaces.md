# 

Source: https://proofwiki.org/wiki/Minkowski%27s_Inequality/Lebesgue_Spaces



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $p \in \closedint 1 \infty$. 
Let $f, g: X \to \R$ be $p$-integrable, that is, elements of Lebesgue $p$-space $\map {\LL^p} \mu$.

Then their pointwise sum $f + g: X \to \R$ is also $p$-integrable, and:

$\norm {f + g}_p \le \norm f_p + \norm g_p$
where $\norm {\, \cdot \, }_p$ denotes the $p$-seminorm.


Proof
We split into three cases. 

Case 1: $p > 1$
We first show that $f + g \in \map {\LL^p} \mu$.
Note that from Pointwise Maximum of Measurable Functions is Measurable:

$x \mapsto \max \set {\map f x, \map g x}$ is $\Sigma$-measurable.
We then have from Measure is Monotone: 

$\ds \int \size {f + g}^p \rd \mu = \int \size {2 \max \set {\map f x, \map g x} }^p \map {\rd \mu} x$
We then have: 














\(\ds \int \size {2 \max \set {\map f x, \map g x} }^p \map {\rd \mu} x\)

\(=\)







\(\ds \int 2^p \size {\max \set {\map f x, \map g x} }^p \map {\rd \mu} x\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds 2^p \int \max \set {\size {\map f x}^p, \size {\map g x}^p} \map {\rd \mu} x\)




















\(\ds \)

\(\le\)







\(\ds 2^p \int \paren {\size f^p + \size g^p} \rd \mu\)









Since $f, g \in \map {\LL^p} \mu$, we have: 

$\ds \int \size f^p \rd \mu < \infty$
and:

$\ds \int \size g^p \rd \mu < \infty$
so:

$\ds \int \size {f + g}^p \rd \mu < \infty$
so:

$f + g \in \map {\LL^p} \mu$
If: 

$\ds \int \size {f + g}^p \rd \mu = 0$
then the desired inequality is immediate.
So, take: 

$\ds \int \size {f + g}^p \rd \mu > 0$
Write: 

$\ds \int \size {f + g}^p \rd \mu = \int \size {f + g} \size {f + g}^{p - 1} \rd \mu$
From the Triangle Inequality, Integral of Positive Measurable Function is Monotone and Integral of Positive Measurable Function is Additive, we have: 

$\ds \int \size {f + g} \size {f + g}^{p - 1} \rd \mu \le \int \size f \size {f + g}^{p - 1} \rd \mu + \int \size g \size {f + g}^{p - 1} \rd \mu$
From Hölder's Inequality for Integrals, we have: 

$\ds \int \size f \size {f + g}^{p - 1} \rd \mu + \int \size g \size {f + g}^{p - 1} \rd \mu \le \paren {\int {\size f}^p \rd \mu}^{1/p} \paren {\int \size {f + g}^{q \paren {p - 1} } \rd \mu}^{1/q} + \paren {\int {\size g}^p \rd \mu}^{1/p} \paren {\int \size {f + g}^{q \paren {p - 1} } \rd \mu}^{1/q}$
where $q$ satisfies: 

$\ds \frac 1 p + \frac 1 q = 1$
Then we have: 

$p + q = p q$
so:

$p = pq - q = q \paren {p - 1}$
So we have: 

$\ds \int \size {f + g}^p \rd \mu \le \paren {\paren {\int {\size f}^p \rd \mu}^{1/p} + \paren {\int {\size g}^p \rd \mu}^{1/p} } \paren {\int \size {f + g}^p \rd \mu}^{1/q}$
From the definition of the $p$-seminorm we have:

$\ds \int \size {f + g}^p \rd \mu \le \paren {\norm f_p + \norm g_p} \paren {\int \size {f + g}^p \rd \mu}^{1/q}$
So that: 

$\ds \paren {\int \size {f + g}^p \rd \mu}^{1 - 1/q} \le \norm f_p + \norm g_p$
That is: 

$\ds \paren {\int \size {f + g}^p \rd \mu}^{1/p} \le \norm f_p + \norm g_p$
So from the definition of the $p$-seminorm we have: 

$\norm {f + g}_p \le \norm f_p + \norm g_p$
$\Box$


Case 2: $p = 1$
From the Triangle Inequality, we have:

$\size {f + g} \le \size f + \size g$
So, from Integral of Positive Measurable Function is Additive and Integral of Positive Measurable Function is Monotone, we have: 

$\ds \int \size {f + g} \rd \mu \le \int \size f \rd \mu + \int \size g \rd \mu$
So if $f, g \in \map {\LL^1} \mu$ we have $f + g \in \map {\LL^1} \mu$
From the definition of the $1$-seminorm, we also have that: 

$\norm {f + g}_1 \le \norm f_1 + \norm g_1$
immediately.
$\Box$


Case 3: $p = \infty$
Suppose $f, g \in \map {\LL^\infty} \mu$.
Then from the definition of the $\LL^\infty$-space, there exists $\mu$-null sets $N_1$ and $N_2$ such that: 

$\size {\map f x} \le \norm f_\infty$ for $x \not \in N_1$
and:

$\size {\map g x} \le \norm g_\infty$ for $x \not \in N_2$
Then, for $x \not \in N_1 \cup N_2$ we have: 

$\size {\map f x + \map g x} \le \norm f_\infty + \norm g_\infty$
by the Triangle Inequality. 
From Null Sets Closed under Countable Union, we have:

$N_1 \cup N_2$ is $\mu$-null.
So:

$\norm {f + g}_\infty \le \norm f_\infty + \norm g_\infty$
as desired.
$\blacksquare$


Source of Name
This entry was named for Hermann Minkowski.


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $6.12$: The 'elementary formula' for expectation
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $12.4$




