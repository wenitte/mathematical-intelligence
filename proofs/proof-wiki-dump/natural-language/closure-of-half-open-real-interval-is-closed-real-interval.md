# 

Source: https://proofwiki.org/wiki/Closure_of_Half-Open_Real_Interval_is_Closed_Real_Interval

Theorem
Let $\struct {\R, \tau_d}$ be the real number line under the usual (Euclidean) topology.
Let $H_1 = \hointl a b$ and $H_2 = \hointr a b$ be half-open intervals of $\R$.

Then the closure of both $H_1$ and $H_2$ in $\R$ are the closed interval $\closedint a b$.


Proof
For an arbitrary $H \subseteq \R$, let $H^-$ denote the closure of $H$ in $\R$.
By the definition of closure:

$H^-$ is the smallest closed set of $\struct {\R, \tau_d}$ containing $H$ as a subset.
Let $A := \openint a b$ be the open interval between $a$ and $b$.
By definition of $H_1$ and $H_2$:

$A \subseteq H_1$
and:

$A \subseteq H_2$

From Closure of Open Real Interval is Closed Real Interval:

$\openint a b^- = \closedint a b$
Thus as $\closedint a b$ is the closure of $\openint a b$, it follows that:

$\closedint a b$ is the smallest closed set of $\struct {\R, \tau_d}$ containing $\openint a b$.
But $\closedint a b$ also contains as subsets both $H_1$ and $H_2$.
Thus we have:

$A \subseteq H_1 \subseteq \closedint a b$
and:

$A \subseteq H_2 \subseteq \closedint a b$
Thus it follows that $\closedint a b$ is the smallest closed set of $\struct {\R, \tau_d}$ containing $H_1$ and $H_2$.
Hence the result.
$\blacksquare$





