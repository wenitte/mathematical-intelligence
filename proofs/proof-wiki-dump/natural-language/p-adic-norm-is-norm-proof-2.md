# 

Source: https://proofwiki.org/wiki/P-adic_Norm_is_Norm/Proof_2



Theorem
The $p$-adic norm forms a norm on the rational numbers $\Q$.


Proof
Recall that the $p$-adic norm is defined as:

$\forall q \in \Q: \norm r_p := \begin {cases}
  0 & : r = 0 \\
  p^{- k} & : r \ne 0
\end {cases}$

where:

$r = p^k \dfrac m n$
and:

$k, n \in \Z, m \in \Z_{\ne 0} : p \nmid m, n$
where $\nmid$ stands for "does not divide".
We must show that the norm axioms for all $r_1$, $r_2 \in \Q$:




\((\text N 1)\)  

$:$  





  \(\ds \forall r \in \Q:\)



   \(\ds \norm r_p = 0 \)

  \(\ds \iff \)  

\(\ds  x = 0 \)   

  


\((\text N 2)\)  

$:$  





  \(\ds \forall r_1, r_2 \in \Q:\)



   \(\ds \norm {r_1 r_2} \)

  \(\ds = \)  

\(\ds  \norm {r_1}_p \times \norm {r_2}_p \)   

  


\((\text N 3)\)  

$:$  





  \(\ds \forall r_1, r_2 \in \Q:\)



   \(\ds \norm {r_1 + r_2}_p \)

  \(\ds \le \)  

\(\ds  \norm {r_1}_p + \norm {r_2}_p \)   

  



Norm Axiom $\text N 1$: Positive Definiteness
Let $r \in \Q : r \ne 0$.
Let $k, m\in \Z, n \in \Z_{\ne 0} : p \nmid m, n$.
Suppose $r = 0$.
By definition:

$\norm {r}_p = 0$
Suppose $r = p^k \dfrac m n \ne 0$
By definition:

$\norm r_p = \dfrac 1 {p^k} > 0$
Suppose $\norm r_p = 0$.
By definition:

$r = 0$
$\Box$


Norm Axiom $\text N 2$: Multiplicativity
Suppose $r_1 = 0$ or $r_2 = 0$.
From Norm Axiom $\text N 1$: Positive Definiteness, $\norm {r_1}_p = 0$ or $\norm {r_2}_p = 0$.
Suppose $r_1 \ne 0 \ne r_2$.
Let $k_1, k_2, m_1, m_2 \in \Z, n_1, n_2 \in \Z_{\ne 0} : p \nmid n_1, n_2, m_1, m_2$
Let $r_1 = p^{k_1} \dfrac {m_1} {n_1}, r_2 = p^{k_2} \frac {m_2} {n_2}$
Then:

$r_1 r_2 = p^{k_1 + k_2} \dfrac {m_1 m_2}{n_1 n_2}$
We have that $p \nmid m_1$, $p \nmid m_2$.
Since $p$ is prime:

$p \nmid m_1 m_2$.
Similarly:

$p \nmid n_1 n_2$.
Therefore:














\(\ds \norm {r_1 r_2}_p\)

\(=\)







\(\ds p^{-\paren {k_1 + k_2} }\)




















\(\ds \)

\(=\)







\(\ds p^{-k_1} p^{-k_2}\)




















\(\ds \)

\(=\)







\(\ds \norm {r_1}_p \norm {r_2}_p\)









$\Box$


Norm Axiom $\text N 3$: Triangle Inequality
Suppose one of the following is true:

$r_1 = 0$
$r_2 = 0$
$r_1 + r_2 = 0$
Then the result is straightforward.
Suppose $r_1 \ne 0$, $r_2 \ne 0$, $r_1 + r_2 \ne 0$.
Let $r_1 = p^{k_1} \dfrac {m_1} {n_1}, r_2 = p^{k_2} \dfrac {m_2} {n_2}$ where:

$k_1, k_2, m_1, m_2 \in \Z, n_1, n_2 \in \Z_{\ne 0} : p \nmid m_1, m_2, n_1, n_2$
Then:














\(\ds r_1 + r_2\)

\(=\)







\(\ds \frac {p^{k_1} m_1 n_2 + p^{k_2} m_2 n_1} {n_1 n_2}\)




















\(\ds \)

\(=\)







\(\ds p^{\map \min {k_1, k_2} } \frac {p^{k_1 \mathop - \map \min {k_1, k_2} } m_1 n_2 + p^{k_2 \mathop - \map \min {k_1, k_2} } n_1 m_2} {n_1 n_2}\)





Definition of Min Operation














\(\ds \)

\(=\)







\(\ds p^{\map \min {k_1, k_2} } \frac {\tilde m} {n_1 n_2}\)





$\tilde m := p^{k_1 \mathop - \map \min {k_1, k_2} } m_1 n_2 + p^{k_2 \mathop - \map \min {k_1, k_2} } n_1 m_2$



By Fundamental Theorem of Arithmetic:

$\exists ! \tilde k \in \Z_{\ge 0} : \exists m \in \Z : p \nmid m : \tilde m = p^{\tilde k} m$
Obviously, $p \nmid n_1 n_2$
Hence:














\(\ds \norm {r_1 + r_2}_p\)

\(=\)







\(\ds \frac 1 {p^{\tilde k + \map \min {k_1, k_2} } }\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {p^{\map \min {k_1, k_2} } }\)




















\(\ds \)

\(=\)







\(\ds \map \max {p^{-k_1}, p^{-k_2} }\)





Definition of Max Operation














\(\ds \)

\(=\)







\(\ds \map \max {\norm {r_1}_p, \norm {r_1}_p}\)




















\(\ds \)

\(\le\)







\(\ds \map \max {\norm {r_1}_p, \norm {r_2}_p} + \map \min {\norm {r_1}_p, \norm {r_2}_p}\)




















\(\ds \)

\(=\)







\(\ds \norm {r_1}_p + \norm {r_2}_p\)









$\Box$

All norm axioms are seen to be satisfied.
Hence the result.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.2$: Normed and Banach spaces. Normed spaces




