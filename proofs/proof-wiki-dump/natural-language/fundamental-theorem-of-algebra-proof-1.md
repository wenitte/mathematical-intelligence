# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Algebra/Proof_1

Theorem
Every non-constant polynomial with coefficients in $\C$ has a root in $\C$.


Proof
Let $\map p z$ be a polynomial in $\C$:

$\map p z = z^m + a_1 z^{m-1} + \cdots + a_m$
where not all of $a_1, \ldots, a_m$ are zero.
Define a homotopy:

$\map {p_t} z = t \map p z + \left({1-t}\right) z^m$
Then:

$\dfrac {\map {p_t} z} {z^m} = 1 + t \paren {a_1 \dfrac 1 z + \cdots + a_m \dfrac 1 {z^m} }$
The terms in the parenthesis go to $0$ as $z \to \infty$.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore, there is an $r \in \R_{>0}$ such that:

$\forall z \in \C: \size z = r: \forall t \in \closedint 0 1: \map {p_t} z \ne 0$
Hence the homotopy:

$\dfrac {p_t} {\size {p_t} }: S \to \Bbb S^1$
is well-defined for all $t$.

This shows that for any complex polynomial $\map p z$ of order $m$, there is a circle $S$ of sufficiently large radius in $\C$ such that $\dfrac {\map p z} {\size {\map p z}}$ and $\dfrac {z^m} {\size {z^m} }$ are freely homotopic maps $S \to \Bbb S^1$. 
Hence $\dfrac {\map p z} {\size {\map p z} }$ must have the same degree of $\paren {z / r}^m$, which is $m$.  
When $m > 0$, that is $p$ is non-constant, this result and the Extendability Theorem for Intersection Numbers imply $\dfrac {\map p z} {\size {\map p z} }$ does not extend to the disk $\Int S$, implying $\map p z = 0$ for some $z \in \Int S$.


This article, or a section of it, needs explaining.In particular: $\Int S$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


This article, or a section of it, needs explaining.In particular: More explanation needed as to why this proves the result. The actual result proved needs to be taken a further step to demonstrate its connection to zeroes of polynomials.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.




