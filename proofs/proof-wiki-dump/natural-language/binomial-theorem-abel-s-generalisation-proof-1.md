# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/Abel%27s_Generalisation/Proof_1

Theorem
$\ds \paren {x + y}^n = \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {y + k z}^{n - k}$


Proof
By admitting $y = \paren {x + y} - x$, we have that:

$\paren {x + y}^n = \paren {x + \paren {x + y} - x}^n$

Expanding the right hand side in powers of $\paren {x + y}$:














\(\ds \)

\(\)







\(\ds \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {y + k z}^{n - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {x + \paren {x + y} + k z}^{n - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k \binom n k x \paren {x - k z}^{k - 1} \sum_j \paren {x + y}^j \paren {-x + k z}^{n - k - j} \binom {n - k} j\)




















\(\ds \)

\(=\)







\(\ds \sum_j \binom n j \paren {x + y})^j \sum_k \binom {n - j} {n - j - k} x \paren {x - k z}^{k - 1} \paren {-x + k z}^{n - k - j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop \le n} \binom n j \paren {x + y}^j 0^{n - j}\)





Abel's Generalisation of Binomial Theorem: Special Case $x + y = 0$














\(\ds \)

\(=\)







\(\ds \paren {x + y}^n\)





Binomial Theorem



$\blacksquare$



This article needs to be linked to other articles.In particular: to the results used aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $51$




