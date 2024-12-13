# 

Source: https://proofwiki.org/wiki/P-adic_Numbers_are_Uncountable


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $p$ be any prime number.
The set of $p$-adic numbers $\Q_p$ is an uncountable set.

Proof
Let $P$ be the set of sequences on $\set{i : i \in \N : 0 \le i < p}$.
That is:

$P = \set{\sequence{d_n} : d_n \in \N : 0 \le d_n < p}$
From Cantor's Diagonal Argument:

$P$ is an uncountable set

Let $f: P \to \Q_p$ be the mapping from $P$ to $\Z_p$ defined by:

$\forall \sequence{d_n} \in P : \map f {\sequence{d_n}} = \ds \sum_{n = 0}^\infty d_n p^n$
where $Z_p$ denotes the $p$-adic integers and $\ds \sum_{n = 0}^\infty d_n p^n$ denotes a $p$-adic expansion
From P-adic Integer has Unique P-adic Expansion Representative:

$f$ is bijective
Hence:

$\Z_p$ is an uncountable set

Recall that $\Z_p \subseteq \Q_p$.
From Sufficient Conditions for Uncountability:

$\Q_p$ is an uncountable set
$\blacksquare$

Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$: Exercise $20$




