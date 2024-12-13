# 

Source: https://proofwiki.org/wiki/Raising_Exponential_Order

Theorem
Let $\map f t: \R \to \mathbb F$ a function, where $\mathbb F \in \set {\R, \C}$.
Let $f$ be continuous on the real interval $\hointr 0 \to$, except possibly for some finite number of discontinuities of the first kind in every finite subinterval of $\hointr 0 \to$.


This article, or a section of it, needs explaining.In particular: Establish whether it is "finite subinterval" that is needed here, or what we have already defined as "Definition:Finite Subdivision".You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article, or a section of it, needs explaining.In particular: Pin down a specific page on which the relevant definition of "Continuous" can be found for this context.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $f$ be of exponential order $a$.
Let $b > a$.
Then $f$ is of exponential order $b$.


Proof
From the definition of exponential order, there exist strictly positive real numbers $M$ and $K$ such that:

$\forall t \ge M: \size {\map f t} < K e^{a t}$
From Exponential is Strictly Increasing, we have:

$K e^{a t} < K e^{b t}$
Therefore:

$\forall t \ge M: \size {\map f t} < K e^{b t}$
The result follows from the definition of exponential order.
$\blacksquare$





