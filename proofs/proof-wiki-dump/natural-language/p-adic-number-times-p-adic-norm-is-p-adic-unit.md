# 

Source: https://proofwiki.org/wiki/P-adic_Number_times_P-adic_Norm_is_P-adic_Unit

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p^\times$ be the $p$-adic units.
Let $a \in \Q_p$.

Then there exists $n \in \Z$ such that:

$p^n a \in \Z_p^\times$
where

$p^n = \norm a_p$


Proof
From P-adic Norm of p-adic Number is Power of p, there exists $v \in \Z$ such that $\norm a_p = p^{-v}$.
Let $n = -v$.
Now:














\(\ds \norm{p^n a}_p\)

\(=\)







\(\ds \norm{p^n }_p \norm a_p\)





Norm axiom (N2) (Multiplicativity)














\(\ds \)

\(=\)







\(\ds p^{-n} \norm a_p\)





Definition of $p$-adic norm on the rational numbers














\(\ds \)

\(=\)







\(\ds p^{-n} p^{n}\)





Definition of $n$














\(\ds \)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds p^n a\)

\(\in\)







\(\ds \Z_p^\times\)





P-adic Unit has Norm Equal to One



$\blacksquare$

Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.5$ Arithmetical operations in $\Q_p$: Proposition $1.37$




