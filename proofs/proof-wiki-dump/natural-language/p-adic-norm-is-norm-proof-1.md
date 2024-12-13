# 

Source: https://proofwiki.org/wiki/P-adic_Norm_is_Norm/Proof_1



Theorem
The $p$-adic norm forms a norm on the rational numbers $\Q$.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: The claim is that the P-adic norm is a multplicative norm on a ring. Links to axioms are to vector space norm axiomsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
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


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.1$: Absolute Values on a Field: Proposition $2.1.5$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$: Proposition $1.26$




