# 

Source: https://proofwiki.org/wiki/P-adic_Norm_is_Well_Defined



Theorem
P-adic norm $\norm {\, \cdot \,}_p$ is well defined.


Proof
Aiming for a contradiction, suppose $\norm {\, \cdot \,}_p$ is not well defined.
Then, given $r \in \Q$, for two equivalent representations of $r$, $\norm r_p$ will yield two different results. 
Let $k_1, k_2, m_1, m_2 \in \Z, n_1, n_2 \in \Z_{\ne 0} : p \nmid m_1, m_2, n_1, n_2$.
Let $\ds r = p^{k_1} \frac {m_1} {n_1} = p^{k_2} \frac {m_2} {n_2}$, with $k_1 \ne k_2$.
Suppose $k_2 < k_1$.
Then:

$p^{k_1 - k_2} m_1 n_2 = m_2 n_1$
Therefore:

$p \divides m_2 n_1$
Since $p$ is prime, it cannot be expressed as a product of selected divisors of both $m_2$ and $n_1$.
Hence $p \divides m_2$ or $p \divides n_1$.
This is a contradiction.
Thus, $k_1 \le k_2$.
Similarly, assuming $k_1 < k_2$ leads to a contradiction.
Hence, $k_1 \ge k_2$.
Since $k_1 \ne k_2$, both $k_1$ and $k_2$ have to be such that:

$k_1 < k_2$
$k_1 > k_2$
are satisfied.
No integers satisfy this.


This page needs the help of a knowledgeable authority.In particular: because Integers form Totally Ordered Ring. How to use this argument rigorously?If you are knowledgeable in this area, then you can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Help}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence, we reached a contradiction.
$\blacksquare$


Also see
P-adic Valuation of Rational Number is Well Defined


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.2$: Normed and Banach spaces. Normed spaces




