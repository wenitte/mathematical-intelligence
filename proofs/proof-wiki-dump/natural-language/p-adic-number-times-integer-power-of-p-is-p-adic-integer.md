# 

Source: https://proofwiki.org/wiki/P-adic_Number_times_Integer_Power_of_p_is_P-adic_Integer



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ be the $p$-adic integers.

Then:

$\forall a \in \Q_p: \exists n \in \N: p^n a \in \Z_p$


Proof
Let $a \in \Q_p$.


Case: $\norm a_p \le 1$
Let $\norm a_p \le 1$.
By definition of the $p$-adic integers:

$a \in \Z_p$.
Hence:

$p^0 a \in \Z_p$.
$\Box$


Case: $\norm a_p > 1$
Let $\norm a_p > 1$.
From P-adic Number times P-adic Norm is P-adic Unit, there exists $n \in \Z$ such that $p^n a$ is a $p$-adic unit.
Then:














\(\ds \norm{p^n a}_p\)

\(=\)







\(\ds 1\)





P-adic Unit has Norm Equal to One












\(\, \ds \leadstoandfrom \, \)

\(\ds \norm{p^n}_p \norm a_p\)

\(=\)







\(\ds 1\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity












\(\, \ds \leadstoandfrom \, \)

\(\ds \norm{p^n}_p\)

\(<\)







\(\ds 1\)





As $\norm{a}_p > 1$ by assumption












\(\, \ds \leadstoandfrom \, \)

\(\ds p^{-n}\)

\(<\)







\(\ds 1\)





Definition of $p$-adic norm on integers












\(\, \ds \leadstoandfrom \, \)

\(\ds p^n\)

\(>\)







\(\ds 1\)


















\(\, \ds \leadstoandfrom \, \)

\(\ds n\)

\(>\)







\(\ds 0\)





Real Power Function on Base Greater than One is Strictly Increasing



$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$: Lemma $3.3.5$




