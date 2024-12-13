# 

Source: https://proofwiki.org/wiki/Partial_Sums_of_P-adic_Expansion_forms_Coherent_Sequence



Theorem
Let $p$ be a prime number.
Let $\ds \sum_{n \mathop = 0}^\infty d_n p^n$ be a $p$-adic expansion.
Let $\sequence {\alpha_n}$ be the sequence of partial sums; that is:

$\forall n \in \N :\alpha_n = \ds \sum_{i \mathop = 0}^n d_i p^i$.

Then $\sequence {\alpha_n}$ is a coherent sequence.


Proof
From the definition of a coherent sequence, it needs to be shown that $\sequence {\alpha_n}$ is a sequence of integers such that:

$(1): \quad \forall n \in \N: 0 \le \alpha_n < p^{n + 1}$
$(2): \quad \forall n \in \N: \alpha_{n + 1} \equiv \alpha_n \pmod {p^{n + 1}}$

That the sequence $\sequence {\alpha_n}$ is a sequence of integers follows immediately from the assumption that the series begins at $n = 0$ and so the terms of each summation are integers. 

First note:










\(\ds \forall n \in \N: \, \)



\(\ds \alpha_{n + 1}\)

\(=\)







\(\ds \ds \sum_{i \mathop = 0}^{n + 1} d_i p^i\)




















\(\ds \)

\(=\)







\(\ds \ds \sum_{i \mathop = 0}^n d_i p^i + d_{n + 1} p^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds \alpha_n + d_{n + 1} p^{n + 1}\)











Partial Sums satisfy (1)
This is proved by induction on $n$:


Basis for the Induction
$n = 0$ 
By definition:
$\alpha_0 = d_0$
By definition of a $p$-adic expansion:

$0 \le d_0 < p$
So shown for basis for the induction.


Induction Hypothesis
This is our induction hypothesis:

$0 \le \alpha_k < p^{k + 1}$
Now we need to show true for $n=k+1$:

$0 \le \alpha_{k + 1} < p^{k + 2}$


Induction Step
This is our induction step:














\(\ds 0\)

\(\le\)







\(\ds \alpha_k + d_{k + 1} p^{k + 1}\)





as $\alpha_k, d_{k + 1}, p \ge 0$














\(\ds \)

\(<\)







\(\ds p^{k + 1} + d_{k + 1} p^{k + 1}\)





induction hypothesis














\(\ds \)

\(\le\)







\(\ds p^{k + 1} + \paren{p - 1} p^{k + 1}\)





Definition of $p$-adic expansion means $0 \le d_{k + 1} < p$














\(\ds \)

\(=\)







\(\ds p \cdot p^{k + 1}\)




















\(\ds \)

\(=\)







\(\ds p^{k + 2}\)










Since:

$\alpha_{k + 1} = \alpha_k + d_{k + 1} p^{k + 1}$
then:

$0 \le \alpha_{k + 1} < p^{k + 2}$

By induction:

$\forall n \in \N: 0 \le \alpha_n < p^{n + 1}$
$\Box$


Partial Sums satisfy (2)
Let $n \in \N$.
Since:

$\alpha_{n + 1} - \alpha_n = d_{n + 1}p^{n + 1}$
Then: 

$p^{n + 1} \divides \alpha_{n+1} - \alpha_n$
So:

$\alpha_{n + 1} \equiv \alpha_n \pmod {p^{n + 1} }$
The result follows.
$\blacksquare$


Note

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Extract this note and put it into a page making this statement in its own rightYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
The theorem is stated for the special set of $p$-adic expansions where the series index begins at $0$ and not the more general $m \in \Z_{\le 0}$.
From P-adic Integer has Unique P-adic Expansion Representative, it is seen that this set of $p$-adic expansions is indeed the $p$-adic integers.


Also see
Coherent Sequence is Partial Sum of P-adic Expansion




