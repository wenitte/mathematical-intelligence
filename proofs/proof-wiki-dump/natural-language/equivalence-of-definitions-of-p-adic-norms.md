# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_P-adic_Norms


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $p \in \N$ be a prime.
Let $\Q$ denote the rational numbers.

The following definitions of the concept of $p$-adic norm on $\Q$ are equivalent: 

Definition 1
Let $\nu_p: \Q \to \Z \cup \set {+\infty}$ be the $p$-adic valuation on $\Q$.

The $p$-adic norm on $\Q$ is the mapping $\norm {\,\cdot\,}_p: \Q \to \R_{\ge 0}$ defined as:

$\forall q \in \Q: \norm q_p := \begin {cases} 0 & : q = 0 \\ p^{-\map {\nu_p} q} & : q \ne 0 \end {cases}$


Definition 2
The $p$-adic norm on $\Q$ is the mapping $\norm {\,\cdot\,}_p: \Q \to \R_{\ge 0}$ defined as:

$\forall r \in \Q: \norm r_p = \begin {cases} 0 & : r = 0 \\ \dfrac 1 {p^k} & : r = p^k \dfrac m n: k, m, n \in \Z, p \nmid m, n \end {cases}$


Proof
From Negative Powers of Group Elements, Definition 2 can be rewritten as:

$\forall r \in \Q: \norm r_p = \begin {cases} 0 & : r = 0 \\ p^{-k} & : r = p^k \dfrac m n: k, m, n \in \Z, p \nmid m, n \end {cases}$

Hence if follows that Definition 1 and Definition 2 are equivalent if it is shown:

$\forall r \in \Q_{\ne 0}: \map {\nu_p} r = k  : r = p^k \dfrac m n: k, m, n \in \Z, p \nmid m, n$

Let $r \in \Q_{\ne 0}$.
Let $r = \dfrac a b : a, b \in \Z_{\ne 0}$

We have:














\(\ds \map {\nu_p} r\)

\(=\)







\(\ds \map {\nu_p} {\dfrac a b}\)




















\(\ds \)

\(=\)







\(\ds \map {\nu_p} a - \map {\nu_p} b\)





Definition of P-adic Valuation



Let:

$k_a := \map {\nu_p} a$
$k_b := \map {\nu_p} b$


Lemma 1
$\forall x \in Z_{\ne 0}: \map {\nu_p} x = k : x = p^k y  : p \nmid y$
$\Box$

From Lemma 1:

$a = p^{k_a} m$
$b = p^{k_b} n$
$p \nmid m, n$

Hence:














\(\ds r\)

\(=\)







\(\ds \dfrac a b\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p^{k_a} m} {p^{k_b} n}\)





From lemma 1














\(\ds \)

\(=\)







\(\ds p^{k_a - k_b} \dfrac m n\)





Sum of Powers of Group Elements




Let $k = k_a - k_b$.
It follows that:

$\map {\nu_p} r = k  : r = p^k \dfrac m n: k, m, n \in \Z, p \nmid m, n$

Since $r$ was arbitrary:

$\forall r \in \Q_{\ne 0}: \map {\nu_p} r = k  : r = p^k \dfrac m n: k, m, n \in \Z, p \nmid m, n$
$\blacksquare$





