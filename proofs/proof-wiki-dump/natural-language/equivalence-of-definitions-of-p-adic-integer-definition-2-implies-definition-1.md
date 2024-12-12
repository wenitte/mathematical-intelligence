# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_P-adic_Integer/Definition_2_Implies_Definition_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the valued field of $p$-adic numbers for some prime $p$. 
That is, such that:

$\Q_p$ is the field of $p$-adic numbers
$\norm {\,\cdot\,}_p$ is the $p$-adic norm on $\Q_p$.

Let $x \in \Q_p$ such that the canonical expansion of $x$ contains only positive powers of $p$.

Then:

$\norm x_p \le 1$


Proof
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





