# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_P-adic_Integer


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.

The following definitions of the concept of P-adic Integer are equivalent:


Definition 1
An element $x \in \Q_p$ is called a $p$-adic integer if and only if $\norm x_p \le 1$.
The set of all $p$-adic integers is usually denoted $\Z_p$.

Thus:

$\Z_p = \set {x \in \Q_p: \norm x_p \le 1}$
Definition 2
An element $x \in \Q_p$ is called a $p$-adic integer if and only if the canonical expansion of $x$ contains only positive powers of $p$.
The set of all $p$-adic integers is usually denoted $\Z_p$.

Thus:

$\ds \Z_p = \set {\sum_{n \mathop = 0}^\infty d_n p^n : \forall n \in \N: 0 \le d_n < p} = \set{\ldots d_n \ldots d_3 d_2 d_1 d_0 : \forall n \in \N: 0 \le d_n < p}$


Proof
Definition 1 implies Definition 2
Let $x \in \Q_p$ such that $\norm x_p \le 1$.
From P-adic Integer is Limit of Unique P-adic Expansion, there exists a $p$-adic expansion of the form:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$
By definition of the canonical expansion:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$ is the canonical expansion of $x$
It follows that the canonical expansion of $x$ contains only positive powers of $p$.
$\Box$


Definition 2 implies Definition 1
Let the canonical expansion of $x$ contain only positive powers of $p$.
That is:

$x = \ds \sum_{n \mathop = 0}^\infty d_n p^n : \forall n \in \N : 0 \le d_n < p$


Case 1 : $\forall n \in \N : d_n = 0$
Let: 

$\forall n \in \N : d_n = 0$
Then:














\(\ds x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty 0 * p^n\)





Definition of Canonical P-adic Expansion














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty 0\)




















\(\ds \)

\(=\)







\(\ds 0\)









Hence:














\(\ds \norm x_p\)

\(=\)







\(\ds \norm 0_p\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(<\)







\(\ds 1\)









$\Box$


Case 2 : $\exists n \in \N : d_n > 0$
Let:

$\exists n \in \N : d_n > 0$

Let:

$l = \min \set {i: i \ge 0 \land d_i \ne 0}$
Hence:

$l \ge 0$

Thus:














\(\ds \norm x_p\)

\(=\)







\(\ds p^{-l}\)





P-adic Norm of P-adic Expansion is determined by First Nonzero Coefficient














\(\ds \)

\(\le\)







\(\ds p^0\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$




