# 

Source: https://proofwiki.org/wiki/Power_to_Real_Number_by_Decimal_Expansion_is_Uniquely_Defined

Theorem
Let $r \in \R_{>1}$ be a real number greater than $1$, expressed by its decimal expansion:

$r = n \cdotp d_1 d_2 d_3 \ldots$

The power $x^r$ of a (strictly) positive real number $x$ defined as:

$(1): \quad \ds \lim_{k \mathop \to \infty} x^{\psi_1} \le \xi \le x^{\psi_2}$
where:














\(\ds \psi_1\)

\(=\)







\(\ds n + \sum_{j \mathop = 1}^k \frac {d_1} {10^k} = n + \frac {d_1} {10} + \cdots + \frac {d_k} {10^k}\)




















\(\ds \psi_2\)

\(=\)







\(\ds \psi_1 + \dfrac 1 {10^k}\)









is unique.


Proof
If $r$ is rational this has already been established.


This article needs to be linked to other articles.In particular: Find where.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

Let $d$ denote the difference between $x^{\psi^1}$ and $x^{\psi^2}$:














\(\ds d\)

\(=\)







\(\ds x^{\psi^2} - x^{\psi^1}\)




















\(\ds \)

\(=\)







\(\ds x^{\psi^1} \paren {x^{\frac 1 {10^k} } - 1}\)




















\(\ds \)

\(=\)







\(\ds x^{\psi^1} \paren {x^{\frac 1 {10^k} } - 1}\)










It follows from Nth Root of 1 plus x not greater than 1 plus x over n that:

$d < \dfrac {x^{n + 1} \paren {x - 1} } {10^k}$
Thus as $k \to \infty$, $d \to 0$.
The result follows from the Squeeze Theorem.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.2$: Numbers, Powers, and Logarithms: $(7)$




