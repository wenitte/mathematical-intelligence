# 

Source: https://proofwiki.org/wiki/Integers_with_Metric_Induced_by_P-adic_Valuation


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $p \in \N$ be a prime.
Let $d: \Z^2 \to \R_{\ge 0}$ be the mapping defined as:

$\forall x, y \in \Z: \map d {x, y} = \begin {cases} 0 & : x = y \\ \dfrac 1 r & : x - y = p^{r - 1} k: r \in \N_{>0}, k \in \Z, p \nmid k \end {cases}$
Then $d$ is a metric on $\Z$.


Proof
From Characterization of P-adic Valuation on Integers:

$d$ is well-defined.

We prove the metric space axioms.


Metric Space Axiom $(\text M 1)$
This follows immediately from the definition of $d$.
$\Box$


Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $x, y, z \in \Z$.
From Characterization of P-adic Valuation on Integers:

$\exists r, s, t \in \N_{>0}, k, l, m \in \Z, p \nmid k, l , m:$
$x - y = p^{r - 1} k$
$y - z = p^{s - 1} l$
$x - z = p^{t - 1} m$

Let $t' = \min \set{r, s}$.
Then:














\(\ds x - z\)

\(=\)







\(\ds \paren{x - y} + \paren{y - z}\)





Add $-y + y$














\(\ds \)

\(=\)







\(\ds p^{r - 1} k  + p^{s - 1} l\)




















\(\ds \)

\(=\)







\(\ds p^{t' - 1} \paren{p^{r - t'} k  + p^{s - t'} l}\)









Hence:

$p^{t' - 1} \divides p^{t - 1} m$
Then:

$t' \le t$

Hence:














\(\ds \map d {x, z}\)

\(=\)







\(\ds \dfrac 1 t\)




















\(\ds \)

\(\le\)







\(\ds \dfrac 1 {t'}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\min \set{r, s} }\)




















\(\ds \)

\(=\)







\(\ds \max \set{ \dfrac 1 r, \dfrac 1 s}\)




















\(\ds \)

\(\le\)







\(\ds \dfrac 1 r + \dfrac 1 s\)




















\(\ds \)

\(=\)







\(\ds \map d {x, y} + \map d {y, z}\)









$\Box$


Metric Space Axiom $(\text M 3)$
Let $x, y \in \Z$.


Case 1: $x = y$
Let $x = y$.
By definition of $d$:

$\map d {x, y} = 0 = \map d {y, x}$
$\Box$


Case: $x \ne y$
Let $x \neq y$.
Then














\(\ds x - y\)

\(=\)







\(\ds p^{r - 1} k:\)

\(\ds : r \in \N_{>0}, k \in \Z, p \nmid k\)



Characterization of P-adic Valuation on Integers














\(\ds \)

\(=\)







\(\ds p^{r - 1} \paren{-k'}\)

\(\ds : r \in \N_{>0}, k' \in \Z, p \nmid k'\)



Replacing $k$ with $k' = -k$








\(\ds \leadstoandfrom \ \ \)





\(\ds y - x\)

\(=\)







\(\ds p^{r - 1} k'\)

\(\ds : r \in \N_{>0}, k' \in \Z, p \nmid k'\)







Hence:

$\map d {x, y} = \dfrac 1 r = \map d {y, x}$
$\Box$


Metric Space Axiom $(\text M 4)$
Let $x, y \in \Z$ such that:

$x \ne y$
Let $x - y = p^{r - 1} k: r \in \N_{>0}, k \in \Z, p \nmid k$.
We have:














\(\ds \map d {x, y}\)

\(=\)







\(\ds \dfrac 1 r\)





Definition of $d$














\(\ds \)

\(>\)







\(\ds 0\)





as $r > 0$



$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 23$




