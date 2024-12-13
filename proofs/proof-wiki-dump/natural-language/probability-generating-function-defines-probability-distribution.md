# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_defines_Probability_Distribution

Theorem
Let $X$ and $Y$ be discrete random variables  whose codomain, $\Omega_X$, is a subset of the natural numbers $\N$.
Let the probability generating functions of $X$ and $Y$ be $\map {\Pi_X} s$ and $\map {\Pi_Y} s$ respectively.

Then:

$\forall s \in \closedint {-1} 1: \map {\Pi_X} s = \map {\Pi_Y} s$
if and only if:

$\forall k \in \N: \Pr \left({X = k}\right) = \map \Pr {Y = k}$

That is, discrete random variables which are integer-valued have the same PGFs if and only if they have the same PMF.


Proof
By the definition of PGF, it follows that if:

$\forall k \in \N: \map \Pr {X = k} = \map \Pr {Y = k}$
then:

$\forall s \in \closedint {-1} 1: \map {\Pi_X} s = \map {\Pi_Y} s$

Suppose that $\map {\Pi_X} s = \map {\Pi_Y} s$ for all $s \in \closedint {-1} 1$.
From Probability Generating Function as Expectation the radius of convergence of both $\map {\Pi_X} s$ and $\Pi_Y \left({s}\right)$ is at least $1$.
Therefore they have unique power series expansions about $s = 0$:

$\ds \map {\Pi_X} s = \sum_{n \mathop = 0}^\infty s^n \map \Pr {X = k}$
$\ds \map {\Pi_Y} s = \sum_{n \mathop = 0}^\infty s^n \map \Pr {Y = k}$
As $\map {\Pi_X} s = \map {\Pi_Y} s$, these two power series have identical coefficients.


This article contains statements that are justified by handwavery.In particular: It needs to be demonstrated that those power series expansions actually are unique. This has not been done.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.2$: Integer-valued random variables: Theorem $4 \ \text{A}$




