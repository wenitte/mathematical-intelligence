# 

Source: https://proofwiki.org/wiki/Integral_Multiple_of_an_Algebraic_Number


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $K$ be a number field and $\alpha \in K$.

Then there exists a positive $n \in \Z$ such that $n \alpha \in \OO_K$.

In this context, $ \OO_K$ denotes the algebraic integers in $K$.


Proof
If $\alpha = 0$ then any integer works and the proof is finished.

Let $\alpha \ne 0$.

Let $\map f x = x^d + a_{d - 1} x^{d - 1} + \dotsb + a_0$ be the minimal polynomial of $\alpha$ over $\Q$. 
Suppose that $a_i = \dfrac {b_i} {c_i}$ is a reduced fraction for each $i$ such that $a_i \ne 0$.
Let $n$ be the least common multiple of the $c_i$, of which there must be at least one by our assumptions. 

Consider the polynomial:














\(\ds \map g x\)

\(=\)







\(\ds n^d \map f {\frac x n}\)




















\(\ds \)

\(=\)







\(\ds n^d \paren {\frac {x^d} {n^d} + a_{d - 1} \frac {x^{d - 1} } {n^{d - 1} } + \dotsb + a_0}\)




















\(\ds \)

\(=\)







\(\ds x^d + n a_{d - 1} x^{d - 1} + \dotsb + n^d a_0\)










Note that $g$ is a monic polynomial with coefficients in $\Z$ by our choice of $n$.
Furthermore, by construction, we see that $n \alpha$ is a root of $g$ and is therefore an algebraic integer.
$\blacksquare$


Sources
2011: J.S. Milne: Algebraic Number Theory: Chapter $2$ Ring of Integers: Integral elements: Proposition $2.6$




