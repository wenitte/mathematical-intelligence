# 

Source: https://proofwiki.org/wiki/Characterization_of_Rational_P-adic_Unit


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $\Z^\times_p$ be the $p$-adic units.
Let $\Q$ be the rational numbers.

Then:

$\Z^\times_p \cap \Q = \set{\dfrac a b \in \Q : p \nmid ab}$
Proof
Let $\norm{\,\cdot\,}^\Q _p$ denote the $p$-adic norm on the rational numbers.

We have:














\(\ds \Z^\times_p \cap \Q\)

\(=\)







\(\ds \set{\dfrac a b \in \Q : \norm {\dfrac a b}_p = 1}\)





P-adic Unit has Norm Equal to One














\(\ds \)

\(=\)







\(\ds \set{\dfrac a b \in \Q : \norm {\dfrac a b}_p \le 1} \setminus \set{\dfrac a b \in \Q : \norm {\dfrac a b}_p < 1}\)





Definition of Set Difference














\(\ds \)

\(=\)







\(\ds \set{\dfrac a b \in \Q : \norm{\dfrac a b}^\Q_p \le 1} \setminus \set{\dfrac a b \in \Q : \norm {\dfrac a b}^\Q_p < 1}\)





Rational Numbers are Dense Subfield of P-adic Numbers














\(\ds \)

\(=\)







\(\ds \set{\dfrac a b \in \Q : \norm{\dfrac a b}^\Q_p \le 1} \setminus \set{\dfrac a b \in \Q : p \nmid b, p \divides a}\)





Valuation Ideal of P-adic Norm on Rationals














\(\ds \)

\(=\)







\(\ds \set{\dfrac a b \in \Q : p \nmid b} \setminus \set{\dfrac a b \in \Q : p \nmid b, p \divides a}\)





Valuation Ring of P-adic Norm on Rationals














\(\ds \)

\(=\)







\(\ds \set{\dfrac a b \in \Q : p \nmid b, p \nmid a}\)





Definition of Set Difference














\(\ds \)

\(=\)







\(\ds \set{\dfrac a b \in \Q : p \nmid ab}\)





Prime Divisor of Coprime Integers and Divisor Divides Multiple



$\blacksquare$

Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.6$ The $p$-adic expansion of rational numbers: Exercise $32 \ (2)$




