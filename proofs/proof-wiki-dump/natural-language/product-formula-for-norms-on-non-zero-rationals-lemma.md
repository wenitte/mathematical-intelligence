# 

Source: https://proofwiki.org/wiki/Product_Formula_for_Norms_on_Non-zero_Rationals/Lemma



Theorem
Let $\Q$ be the set of rational numbers.
Let $\Bbb P$ denote the set of prime numbers.
Let $z \in \Z_{\ne 0}$.

Then the following infinite product converges:

$\size z \times \ds \prod_{p \mathop \in \Bbb P}^{} \norm z_p = 1$
where:

$\size {\,\cdot\,}$ is the absolute value on $\Q$
$\norm {\,\cdot\,}_p$ is the $p$-adic norm on $\Q$ for prime number $p$


Proof
Case 1 : $z \in \Z_{>0}$
Let $z \in \Z_{>0}$.
From Fundamental Theorem of Arithmetic, we can factor $z$ as a product of one or more primes:

$z = p_1^{b_1} p_2^{b_2} \dots p_k^{b_k}$

Then for every prime number $q$:

$\norm z_q = \begin{cases}
p_i^{-b_i} & : \exists i \in \closedint 1 k :q = p_i \\
1 & : \forall i \in \closedint 1 k : q \ne p_i \\
\end {cases}$

By definition of absolute value on $\Q$:

$\size z = p_1^{b_1} p_2^{b_2} \dots p_k^{b_k} $

For $n \ge \max \set{p_1, p_2 \dots p_k}$:














\(\ds \size z \times \prod_{p \mathop \in \Bbb P \mathop : p \mathop \le n } \norm z_p\)

\(=\)







\(\ds \paren {p_1^{b_1} p_2^{b_2} \dots p_k^{b_k} } \times \paren {p_1^{-b_1} p_2^{-b_2} \dots p_k^{-b_k} }\)




















\(\ds \)

\(=\)







\(\ds 1\)









Hence:














\(\ds \size z \times \prod_{p \mathop\in \Bbb P} \norm z_p\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren{\size z \times \prod_{p \mathop \in \Bbb P \mathop : p \mathop \le n} \norm z_p}\)





Definition of Infinite Product














\(\ds \)

\(=\)







\(\ds 1\)





Eventually Constant Sequence Converges to Constant



$\Box$


Case 2 : $z \in \Z_{<0}$
Let $z \in \Z_{<0}$.
Hence

$-z \in \Z_{>0}$.

We have:














\(\ds \size z \times \prod_{p \mathop\in \Bbb P} \norm z_p\)

\(=\)







\(\ds \size {-z} \times \prod_{p \mathop \in \Bbb P} \norm {-z}_p\)





Norm of Negative














\(\ds \)

\(=\)







\(\ds 1\)





Case 1



$\Box$

In either case:

$\size z \times \ds \prod_{p \mathop \in \Bbb P} \norm z_p = 1$
$\blacksquare$





