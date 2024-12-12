# 

Source: https://proofwiki.org/wiki/Chu-Vandermonde_Identity/Extended



Theorem
Let $r, s, \alpha, \beta \in \C$ be complex numbers.

Then:

$\ds \sum_{k \mathop \in \Z} \dbinom r {\alpha + k} \dbinom s {\beta - k} = \dbinom {r + s} {\alpha + \beta}$
where $\dbinom r {\alpha + k}$ denotes a binomial coefficient.


Proof
From the Chu-Vandermonde Identity, we have:

$\ds \sum_{k \mathop \in \Z} \binom r k \binom s {n - k} = \binom {r + s} n$
Let $n = \alpha + \beta$
Let $k = \alpha + k$
Then:

$\ds \sum_{k \mathop \in \Z} \binom r {\alpha + k} \binom s {\alpha + \beta - \paren {\alpha + k} } = \binom {r + s} {\alpha + \beta}$
$\ds \sum_{k \mathop \in \Z} \binom r {\alpha + k} \binom s {\beta - k } = \binom {r + s} {\alpha + \beta}$
$\blacksquare$


The validity of the material on this page is questionable.In particular: Where is the proof that you can take a result in the real numbers and just extend it to complex numbers?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Source of Name
This entry was named for Chu Shih-chieh and Alexandre-Théophile Vandermonde.


Sources
1977: Lyle Ramshaw: Binomial coefficients with non-integral lower index (Inf. Proc. Letters Vol. 6: pp. 223 – 226)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $42$ (Solution)




