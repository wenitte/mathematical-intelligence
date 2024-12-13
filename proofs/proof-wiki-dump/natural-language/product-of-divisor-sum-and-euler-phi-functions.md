# 

Source: https://proofwiki.org/wiki/Product_of_Divisor_Sum_and_Euler_Phi_Functions

Theorem
Let $n$ be an integer such that $n \ge 2$.
Let the prime decomposition of $n$ be:

$n = p_1^{k_1} p_2^{k_2} \ldots p_r^{k_r}$
Let $\map {\sigma_1} n$ be the divisor sum function of $n$.
Let $\map \phi n$ be the Euler phi function of $n$.

Then:

$\ds \map {\sigma_1} n \map \phi n = n^2 \prod_{1 \mathop \le i \mathop \le r} \paren {1 - \frac 1 {p_i^{k_i + 1} } }$


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Better to start with $\ds \map \phi n = n \prod_{p \mathop \divides n} \paren {1 - \frac 1 p}$ and then a lot of the gnarliness goes awayYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
From Euler Phi Function of Integer:

$\ds \map \phi n = \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i - 1} \paren {p_i - 1}$
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$

So:

$\ds \map {\sigma_1} n \map \phi n = \prod_{1 \mathop \le i \mathop \le r} \paren {\frac {p_i^{k_i + 1} - 1} {p_i - 1} } p_i^{k_i - 1} \paren {p_i - 1}$

Taking a general factor of this product:














\(\ds \paren {\frac {p_i^{k_i + 1} - 1} {p_i - 1} } p_i^{k_i - 1} \paren {p_i - 1}\)

\(=\)







\(\ds \paren {p_i^{k_i + 1} - 1} p_i^{k_i - 1}\)





cancelling $p_i - 1$ top and bottom














\(\ds \)

\(=\)







\(\ds p_i^{2 k_i} - p_i^{k_i - 1}\)





multiplying out the bracket














\(\ds \)

\(=\)







\(\ds p_i^{2 k_i} \paren {1 - \frac 1 {p_i^{k_i + 1} } }\)





extracting $p_i^{2 k_i}$ as a factor




So:

$\ds \map {\sigma_1} n \map \phi n = \prod_{1 \mathop \le i \mathop \le r} p_i^{2 k_i} \paren {1 - \frac 1 {p_i^{k_i + 1} } }$
Hence:

$\ds \prod_{1 \mathop \le i \mathop \le r} p_i^{2 k_i} = \paren {\prod_{1 \mathop \le i \mathop \le r} p_i^{k_i} }^2 = n^2$
and the result follows.
$\blacksquare$





