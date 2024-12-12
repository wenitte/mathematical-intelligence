# 

Source: https://proofwiki.org/wiki/Function_with_Limit_at_Infinity_of_Exponential_Order_Zero

Theorem
Let $f: \hointr 0 \to \to \R$ be a real function.
Let $f$ be continuous everywhere on their domains, except possibly for some finite number of discontinuities of the first kind in every finite subinterval of $\hointr 0 \to$.


This article, or a section of it, needs explaining.In particular: Establish whether it is "finite subinterval" that is needed here, or what we have already defined as "Definition:Finite Subdivision". Also get the correct instance of "continuous".You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $f$ have a (finite) limit at infinity.

Then $f$ is of exponential order $0$.


Proof
Denote $\ds L = \lim_{t \mathop \to +\infty} \map f t$.
Define the constant mapping:

$\map C t = - L$
Further define:

$\map g t = \map f t + \map C t$
From:

Constant Function is of Exponential Order Zero,
Sum of Functions of Exponential Order,
it is sufficient to prove that $g$ is of exponential order $0$.

Fix $\epsilon > 0$ arbitrarily small.
By definition of limit at infinity, there exists $c \in \R$ such that:

$\forall t > c: \size {\map f t - L} < \epsilon$

Therefore:










\(\ds \forall t \ge c + 1: \, \)



\(\ds \size {\map g t}\)

\(=\)







\(\ds \size {\map f t + \map C t}\)




















\(\ds \)

\(=\)







\(\ds \size {\map f t - L}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)




















\(\ds \)

\(=\)







\(\ds \epsilon \cdot e^0\)





Exponential of Zero



The result follows from the definition of exponential order, with $M = c + 1$, $K = \epsilon$, and $a = 0$.
$\blacksquare$





