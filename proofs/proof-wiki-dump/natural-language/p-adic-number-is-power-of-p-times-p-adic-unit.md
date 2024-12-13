# 

Source: https://proofwiki.org/wiki/P-adic_Number_is_Power_of_p_Times_P-adic_Unit

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p^\times$ be the $p$-adic units.
Let $\nu_p: \Q_p \to \Z \cup \set {+\infty}$ denote the $p$-adic valuaton on the $p$-adic numbers.
Let $a \in \Q_p$.

Then there exists $u \in \Z_p^\times$ such that:

$a = p^{\map {\nu_p} a} \cdot u$
Proof
From P-adic Number times P-adic Norm is P-adic Unit, there exists $n \in \Z$ such that:

$p^n a \in \Z_p^\times$
where

$p^n = \norm a_p$

We have:














\(\ds \map {\nu_p} a\)

\(=\)







\(\ds -\log_p \norm a_p\)





Definition of P-adic Valuation on P-adic Numbers














\(\ds \)

\(=\)







\(\ds -\log_p p^n\)




















\(\ds \)

\(=\)







\(\ds -n\)










Let $u = p^n a$.
Then:














\(\ds a\)

\(=\)







\(\ds p^{-n} u\)




















\(\ds \)

\(=\)







\(\ds p^{\map {\nu_p} a} \cdot u\)









$\blacksquare$





