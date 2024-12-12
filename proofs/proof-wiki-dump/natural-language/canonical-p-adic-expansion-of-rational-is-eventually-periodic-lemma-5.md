# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Lemma_5



Theorem
Let $p$ be a prime.
Let $b \in Z_{>0}$ such that $b, p$ are coprime.
Let $\sequence {d_n}$ be a sequence of $p$-adic digits.
Let $\sequence {r_n}$ be an integer sequence such that:




\(\text {(1)}: \quad\)





\(\ds \forall n \in \N: \, \)



\(\ds r_n\)

\(=\)







\(\ds d_{n + 1} b + p r_{n + 1}\)










\(\text {(2)}: \quad\)





\(\ds \exists n_0 \in \N: \forall n \ge n_0: \, \)



\(\ds -b\)

\(\le\)







\(\ds r_n \le 0\)










Then:

$\exists \mathop m, l \in \N : \forall n \ge m: r_n = r_{n + l}$ and $d_n = d_{n + l}$


Proof
We have by hypothesis that the set $\set {r_n : n \in \N}$ of values of $\sequence {r_n}$ is a subset of:

$\set {r_0, r_1, \ldots, r_{n_0} } \cup \set {-b, -b + 1, -b + 2, \ldots, 2, 1, 0}$
It follows that $\set {r_n : n \in \N}$ takes only finitely many values.
Hence:

$\exists m_0, l \in \N : l > 0 : r_{m_0} = r_{ {m_0} + l}$


Lemma 10
Let: 

$n, k \in \N : k > 0 : r_n = r_{n + k}$

Then:

$d_{n + 1} = d_{n + k + 1}$
$r_{n + 1} = r_{n + k + 1}$
$\Box$

Let $m = m_0 + 1$
The proof now proceeds by induction.
For all $n \ge m$, let $\map P n$ be the proposition:

$r_n = r_{n + l}$ and $d_n = d_{n + l}$


Basis for the Induction
$\map P m$ is the proposition:

$r_m = r_{m + l}$ and $d_m = d_{m + l}$

We have a priori that:

$r_{m_0} = r_{ {m_0} + l}$
From lemma $10$:

$d_m = d_{m + l}$
$r_m = r_{m + l}$
This proves proposition $\map P m$.
This is the basis for the induction.
$\Box$


Induction Hypothesis
Let $n \ge m$.
The induction hypothesis is the proposition $\map P {n}$:

$r_n = r_{n+l}$ and $d_n = d_{n + l}$
It has to be shown that the proposition $\map P {n+1}$ is true:

$r_{n + 1} = r_{n + l + 1}$ and $d_{n + 1} = d_{n + l + 1}$


Induction Step
From the induction hypothesis:

$r_n = r_{n + l}$
From lemma $10$:

$d_{n + 1} = d_{n + l + 1}$
$r_{n + 1} = r_{n + l + 1}$
$\Box$

Hence:

$\forall n \ge m: r_n = r_{n + l}$ and $d_n = d_{n + l}$
The result follows.
$\blacksquare$





