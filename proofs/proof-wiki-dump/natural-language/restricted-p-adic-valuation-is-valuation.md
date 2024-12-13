# 

Source: https://proofwiki.org/wiki/Restricted_P-adic_Valuation_is_Valuation



Theorem
Let $\nu_p^\Z: \Z \to \Z \cup \set {+\infty}$ be the $p$-adic valuation restricted to the integers.

Then $\nu_p^\Z$ is a valuation.


Proof
To prove that $\nu_p^\Z$ is a valuation it is necessary to demonstrate:




\((\text V 1)\)  

$:$  





  \(\ds \forall m, n \in \Z:\)



   \(\ds \map {\nu_p^\Z} {m n} \)

  \(\ds = \)  

\(\ds  \map {\nu_p^\Z} m + \map {\nu_p^\Z} n \)   

  


\((\text V 2)\)  

$:$  





  \(\ds \forall n \in \Z:\)



   \(\ds \map {\nu_p^\Z} n = +\infty \)

  \(\ds \iff \)  

\(\ds  n = 0 \)   

  


\((\text V 3)\)  

$:$  





  \(\ds \forall m, n \in \Z:\)



   \(\ds \map {\nu_p^\Z} {m + n} \)

  \(\ds \ge \)  

\(\ds  \min \set {\map {\nu_p^\Z} m, \map {\nu_p^\Z} n} \)   

  



Axiom $(\text V 1)$
Let $m, n \in \Z$.
Let $m = 0$ or $n = 0$.
Then:

$\map {\nu_p^\Z} m = +\infty$
or:

$\map {\nu_p^\Z} n = +\infty$
Also:

$n m = 0$
and hence:














\(\ds \map {\nu_p^\Z} {n m}\)

\(=\)







\(\ds +\infty\)




















\(\ds \)

\(=\)







\(\ds \map {\nu_p^\Z} n + \map {\nu_p^\Z} m\)










Let $n m \ne 0$.
Then by definition of the restricted $p$-adic valuation:

$p^{\map {\nu_p^\Z} n} \divides n$
$p^{\map {\nu_p^\Z} n + 1} \nmid n$
Also:

$p^{\map {\nu_p^\Z} m} \divides m$
$p^{\map {\nu_p^\Z} m + 1} \nmid m$

Hence:

$p^{\map {\nu_p^\Z} n + \map {\nu_p^\Z} m} \divides n m$
$p^{\map {\nu_p^\Z} n + \map {\nu_p^\Z} m + 1} \nmid n m$
So:

$\map {\nu_p^\Z} {n m} = \map {\nu_p^\Z} n + \map {\nu_p^\Z} m$
$\Box$


Axiom $(\text V 2)$
By definition of the restricted $p$-adic valuation:

$\forall n \in \Z: \map {\nu_p^\Z} n = +\infty \iff n = 0$
$\Box$


Axiom $(\text V 3)$
Let $m, n \in \Z$.
Without loss of generality let:

$p^\alpha \divides n$
$p^\beta \divides m$
where $\alpha \ge \beta$.

Then $\exists t \in \Z, k \in \Z$ such that:














\(\ds n + m\)

\(=\)







\(\ds p^\alpha k + p^\beta t\)




















\(\ds \)

\(=\)







\(\ds p^\beta \paren {p^{\alpha - \beta} k + t}\)









Thus:

$p^\beta \divides \paren {m + n}$
$\Box$

Hence by the definition of $\nu_p^\Z$:

$\map {\nu_p^\Z} {m + n} \ge \min \set {\map {\nu_p^\Z} m, \map {\nu_p^\Z} n}$
$\blacksquare$





