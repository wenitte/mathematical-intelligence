# 

Source: https://proofwiki.org/wiki/P-adic_Norm_is_Norm



Theorem
The $p$-adic norm forms a norm on the rational numbers $\Q$.


Proof 1
Let $v_p$ be the $p$-adic valuation on the rational numbers.
Recall that the $p$-adic norm is defined as:

$\forall q \in \Q: \norm q_p := \begin {cases} 0 & : q = 0 \\ p^{- \map {\nu_p} q} & : q \ne 0 \end {cases}$
We must show the following hold for all $x$, $y \in \Q$:




\((\text N 1)\)  

$:$  





  \(\ds \forall x \in \Q:\)



   \(\ds \norm x_p = 0 \)

  \(\ds \iff \)  

\(\ds  x = 0 \)   

  


\((\text N 2)\)  

$:$  





  \(\ds \forall x, y \in \Q:\)



   \(\ds \norm {x y}_p \)

  \(\ds = \)  

\(\ds  \norm x_p \times \norm y_p \)   

  


\((\text N 3)\)  

$:$  





  \(\ds \forall x, y \in \Q:\)



   \(\ds \norm {x + y}_p \)

  \(\ds \le \)  

\(\ds  \norm x_p + \norm y_p \)   

  



Norm Axiom $\text N 1$: Positive Definiteness
By Power of Positive Real Number is Positive:

$\ds \forall s \in \R: \frac 1 {p^s} > 0$
By definition of the $p$-adic norm it follows that:

$\forall x \in \Q: \norm x_p = 0 \iff x = 0$
Thus the $p$-adic norm fulfils Norm Axiom $\text N 1$: Positive Definiteness.
$\Box$


Norm Axiom $\text N 2$: Positive Homogeneity
Let $x = 0$ or $y = 0$.
Then $\norm x_p = 0$ or $\norm y_p = 0$ from Norm Axiom $\text N 1$: Positive Definiteness, and:














\(\ds x y\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \norm {x y}_p\)

\(=\)







\(\ds 0\)





Norm Axiom $\text N 1$: Positive Definiteness














\(\ds \)

\(=\)







\(\ds \norm x_p \times \norm y_p\)










Let $x, y\in \Q_{\ne 0}$.
Then:














\(\ds \norm {x y}_p\)

\(=\)







\(\ds \frac 1 {p^{\map {\nu_p} {x y} } }\)





Definition of $p$-adic Norm














\(\ds \)

\(=\)







\(\ds \frac 1 {p^{\map {\nu_p} x + \map {\nu_p} y} }\)





$p$-adic Valuation is Valuation














\(\ds \)

\(=\)







\(\ds \frac 1 {p^{\map {\nu_p} x} p^{\map {\nu_p} y} }\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \norm x_p \times \norm y_p\)





Definition of $p$-adic Norm



Thus the $p$-adic norm fulfils Norm Axiom $\text N 2$: Positive Homogeneity.
$\Box$


Norm Axiom $\text N 3$: Triangle Inequality
Let $x = 0$ or $y = 0$, or $x + y = 0$, the result is trivial.
Let $x = 0$.
Then:














\(\ds x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \norm x_p\)

\(=\)







\(\ds 0\)





Definition of $p$-adic Norm








\(\ds \leadsto \ \ \)





\(\ds \norm x_p + \norm y_p\)

\(=\)







\(\ds \norm y_p\)




















\(\ds \)

\(=\)







\(\ds \norm {x + y}_p\)









and so $\norm {x + y}_p \le \norm x_p + \norm y_p$
The same argument holds for $y = 0$.

Let $x + y = 0$.














\(\ds x + y\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \norm {x + y}_p\)

\(=\)







\(\ds 0\)





Definition of $p$-adic Norm














\(\ds \)

\(\le\)







\(\ds \norm x_p + \norm y_p\)





as $\norm x_p \ge 0$ and $\norm y_p \ge 0$ from Norm Axiom $\text N 1$: Positive Definiteness




Let $x, y, x + y \in \Q_{\ne 0}$.
From $p$-adic Valuation is Valuation:

$\map {\nu_p} {x + y} \ge \min \set {\map {\nu_p} x, \map {\nu_p} y}$
Then:














\(\ds \norm {x + y}_p\)

\(=\)







\(\ds p^{-\map {\nu_p} {x + y} }\)





Definition of $p$-adic Norm














\(\ds \)

\(\le\)







\(\ds \max \set {p^{-\map {\nu_p} x}, p^{-\map {\nu_p} y} }\)




















\(\ds \)

\(=\)







\(\ds \max \set {\norm x_p, \norm y_p}\)





Definition of $p$-adic Norm














\(\ds \)

\(\le\)







\(\ds \norm x_p + \norm y_p\)









Thus the $p$-adic norm fulfils Norm Axiom $\text N 3$: Triangle Inequality.
$\Box$

All norm axioms are seen to be satisfied.
Hence the result.
$\blacksquare$


Proof 2
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





