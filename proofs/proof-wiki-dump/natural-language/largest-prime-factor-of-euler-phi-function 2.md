# 

Source: https://proofwiki.org/wiki/Largest_Prime_Factor_of_Euler_Phi_Function


This article needs to be tidied.In particular: My plea for undertaking to write pages according to house style is reiteratedPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.In particular: as usualYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\phi: \Z_{>0} \to \Z_{>0}$ be the Euler $\phi$ function.
Then the largest prime factor of $\map\phi n$ is less than the largest prime factor of $n$,

Proof
By Euler Phi Function of Integer, for any $n \in \Z_{>0}$, we have:

$\map \phi n = n \paren {1 - \dfrac 1 {p_1} } \paren {1 - \dfrac 1 {p_2} } \cdots \paren {1 - \dfrac 1 {p_r} }$
where $p_1, p_2, \ldots, p_r$ are the distinct primes dividing $n$.
We express $n$ in its prime decomposition:

$n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}, p_1 > p_2 > \cdots > p_r$
Then the largest prime factor of $n$ is $p_1$ and

$\map \phi n = p_1^{k_1-1}p_2^{k_2-1} \cdots p_r^{k_r-1}\cdot(p_1-1)(p_2-1)\cdots(p_r-1)$
The largest prime factor of $(p_i-1),i=1,\dots,r$ must be less than $p_i$, hence less than $p_1$.
So the largest prime factor of $\map\phi n$ is less than $p_1$.

$\blacksquare$

Example
For $n = 6$: 
Euler Phi Function of 6 is 2
The largest prime factor of $n$ is 3, which is greater than 2.





