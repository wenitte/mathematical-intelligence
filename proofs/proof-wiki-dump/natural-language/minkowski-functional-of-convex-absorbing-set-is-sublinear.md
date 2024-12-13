# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Convex_Absorbing_Set_is_Sublinear

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a vector space over $\GF$.
Let $p$ be a seminorm on $X$.
Let $A$ be a convex absorbing set. 
Let $\mu_A$ be the Minkowski functional of $A$. 

Then for each $x, y \in X$ we have: 

$\map {\mu_A} {x + y} \le \map {\mu_A} x + \map {\mu_A} y$



This article, or a section of it, needs explaining.In particular: We have another disconnect between the title and the presented result -- either a link to sublinearity needs to be implemented, or the title needs to be changedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Let $\epsilon > 0$. 
By the definition of infimum, we can pick $t > 0$ such that:


This article, or a section of it, needs explaining.In particular: domain of $t$ -- this is not completely obvious, as the underlying set of $X$ includes the case where it's $\C$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\map {\mu_A} x \le t \le \map {\mu_A} x + \epsilon$
and $t^{-1} x \in A$.
We can also pick $s > 0$ such that: 

$\map {\mu_A} y \le s \le \map {\mu_A} y + \epsilon$
and $s^{-1} y \in A$. 
We have: 

$\ds \frac t {s + t} + \frac s {s + t} = 1$
So, since $A$ is convex, we have: 

$\ds \frac t {s + t} \paren {\frac x t} + \frac s {s + t} \paren {\frac y s} = \frac {x + y} {s + t} \in A$
So, we have: 

$\map {\mu_A} {x + y} \le s + t \le \map {\mu_A} x + \map {\mu_A} y + 2 \epsilon$
Since this inequality holds for all $\epsilon > 0$, we have: 

$\map {\mu_A} {x + y} \le \map {\mu_A} x + \map {\mu_A} y$
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.34$: Theorem




