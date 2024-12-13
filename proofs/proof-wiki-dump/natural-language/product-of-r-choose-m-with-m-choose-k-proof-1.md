# 

Source: https://proofwiki.org/wiki/Product_of_r_Choose_m_with_m_Choose_k/Proof_1



Theorem
$\dbinom r m \dbinom m k = \dbinom r k \dbinom {r - k} {m - k}$


Proof
Integral Index
Let $r \in \Z$.

Then:














\(\ds \binom r m \binom m k\)

\(=\)







\(\ds \frac {r^{\underline m} } {m!} \frac {m^{\underline k} } {k!}\)




















\(\ds \)

\(=\)







\(\ds \frac {r! m!} {m! \paren {r - m}! k! \paren {m - k}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {r! \paren {r - k}!} {k! \paren {r - k}! \paren {m - k}! \paren {r - m}!}\)




















\(\ds \)

\(=\)







\(\ds \binom r k \binom {r - k} {m - k}\)









$\Box$


Real Index
Both sides of the above equation are polynomials in $r$.
Since these polynomials agree for all $r \in \Z$, they must agree for all $r \in \R$.
$\blacksquare$


This article needs to be linked to other articles.In particular: last assertion before the qedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $\text {H} \ (20)$




