# 

Source: https://proofwiki.org/wiki/Conditions_for_Limit_Function_to_be_Limit_Minimizing_Function_of_Functional


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $y$ be a real function.
Let $J \sqbrk y$ be a functional.
Let $\sequence {y_n}$ be a minimizing sequence of $J$.
Let:

$\ds \lim_{n \mathop \to \infty} y_n = \hat y$
Suppose $J$ is lower semicontinuous at $y = \hat y$.

Then:

$\ds J \sqbrk {\hat y} = \lim_{n \mathop \to \infty} J \sqbrk {y_n}$


Proof
By definition of minimizing sequence:

$\ds \inf_y J \sqbrk y = \lim_{n \mathop \to \infty} J \sqbrk {y_n}$
Any mapping from this sequence either minimises the functional or not.
This is true for the limit mapping as well:

$\ds J \sqbrk {\hat y} \ge \inf_y J \sqbrk y$
By assumption, $J$ is lower semicontinuous at $\hat y$:

$\ds \forall \epsilon_1 > 0: \forall n \in \N: \exists N \in \N: \paren {n > N} \implies \paren {J \sqbrk {\hat y} - J \sqbrk {y_n} < \epsilon_1}$
Hence, for sufficiently large $n$:

$\ds \inf_y J \sqbrk y \le J \sqbrk {\hat y} < J \sqbrk {y_n} + \epsilon_1$
By the definition of minimizing sequence, where the label $n$ has been replaced with $m$:

$\ds \forall \epsilon_2: \forall m \in \N: \exists M \in \N: \paren {m > M} \implies \paren {\size {J \sqbrk {y_m} - \inf_y J \sqbrk y} < \epsilon_2}$
From this, for sufficiently large $m$:

$\ds J \sqbrk {y_m} - \epsilon_2 < \inf_y J \sqbrk y$
Then:

$J \sqbrk {y_m} - \epsilon_2 < J \sqbrk {\hat y} < J \sqbrk {y_n} + \epsilon_1$
Here $\epsilon_1$, $n$ have similar properties like $\epsilon_2$, $m$, but are otherwise arbitrary and independent.
Let $\epsilon_1 = \epsilon_2 = \epsilon$, $n = m$, $M = N$.
Arbitrariness is still not affected. 
Then:

$J \sqbrk {y_n} - \epsilon < J \sqbrk {\hat y} < J \sqbrk {y_n} + \epsilon$
Subtract $J \sqbrk {y_n}$ from all the terms.
Hence:

$-\epsilon < J \sqbrk {\hat y} - J \sqbrk {y_n} < \epsilon$
or:

$\size {J \sqbrk {y_n} - J \sqbrk {\hat y} } < \epsilon$
Therefore this relation inherits all the constraints on its values $n$, $N$, $\epsilon$, and by definition is a limit:

$\ds \lim_{n \mathop \to \infty} J \sqbrk {y_n} = J \sqbrk {\hat y}$
$\blacksquare$


This article needs proofreading.In particular: may contain mistakes, since original was not satisfactory enoughIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 8.39$: Minimizing Sequences




