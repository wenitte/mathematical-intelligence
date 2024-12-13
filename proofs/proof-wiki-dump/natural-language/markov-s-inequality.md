# 

Source: https://proofwiki.org/wiki/Markov%27s_Inequality



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $A \in \Sigma$.
Let $f : A \to \overline \R$ be an $A$-measurable function.

Then:

$\ds \map \mu {\set {x \in A: \size {\map f x} \ge t} } \le \frac 1 t \int_A \size f \rd \mu$
for any positive $t \in \R$.


Corollary
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be a real-valued random variable on $\struct {\Omega, \Sigma, \Pr}$.

Then: 

$\map \Pr {\size X \ge t} \le \dfrac {\expect {\size X} } t$
for each real $t > 0$.


Proof
Let $t > 0$ and define:

$B = \set {x \in A: \size {\map f x} \ge t}$
Let $\chi_B$ denote the indicator function of $B$ on $A$. 

For any $x \in A$, either $x \in B$ or $x \notin B$.

In the first case:

$t \map {\chi_B} x = t \cdot 1 = t \le \size {\map f x}$
In the second case:

$t \map {\chi_B} x = t \cdot 0 = 0 \le \size {\map f x}$

Hence:

$\forall x \in A: t \map {\chi_B} x \le \size {\map f x}$
By Integral of Integrable Function is Monotone:

$\ds \int_A t \chi_B \rd \mu \le \int_A \size f \rd \mu$
But by Integral of Integrable Function is Homogeneous:

$\ds \int_A t \chi_B \rd \mu = t \int_A \chi_B \rd \mu = t \map \mu B$
Dividing through by $t > 0$:

$\ds \map \mu B \le \frac 1 t \int_A \size f \rd \mu$
$\blacksquare$


Work In ProgressIn particular: Cover alternative renditions and extensions from SchillingYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.


Source of Name
This entry was named for Andrey Andreyevich Markov.


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.12$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 10$: Problem $10.8$




