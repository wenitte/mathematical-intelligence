# 

Source: https://proofwiki.org/wiki/Cayley-Hamilton_Theorem/Matrix



Theorem
Let $A$ be a commutative ring with unity.
Let $\mathbf N = \sqbrk {a_{i j} }$ be an $n \times n$ matrix with entries in $A$.
Let $\mathbf I_n$ denote the $n \times n$ unit matrix.
Let $\map {p_{\mathbf N} } x$ be the determinant $\map \det {x \cdot \mathbf I_n - \mathbf N}$.

Then:

$\map {p_{\mathbf N} } {\mathbf N} = \mathbf 0$
as an $n \times n$ zero matrix.
That is:

$\mathbf N^n + b_{n - 1} \mathbf N^{n - 1} + \cdots + b_1 \mathbf N + b_0 = \mathbf 0$
where the $b_i$ are the coefficients of $\map {p_{\mathbf N} } x$.


Proof
Taking $\phi = \mathbf N$ in the proof of Cayley-Hamilton Theorem for Finitely Generated Modules we see that $\mathbf N$ satisfies:

$\map {p_{\mathbf N} } x = \map \det {x \cdot \mathbf I_n - \mathbf N} = 0$
Take $\mathfrak a$ to be the ideal generated by the entries of $\mathbf N$.
$\blacksquare$


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Source of Name
This entry was named for Arthur Cayley and William Rowan Hamilton.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Cayley-Hamilton theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cayley-Hamilton theorem



