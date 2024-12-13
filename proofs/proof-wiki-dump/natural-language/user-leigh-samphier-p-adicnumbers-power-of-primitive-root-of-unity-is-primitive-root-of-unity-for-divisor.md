# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/P-adicNumbers/Power_of_Primitive_Root_of_Unity_is_Primitive_Root_of_Unity_for_Divisor


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $n \in \Z_{> 0}$ be a strictly positive integer.
Let $F$ be a field.
Let $\alpha$ be an primitive $n$-th root of unity.

Let $\beta = \alpha^k$ be a power of $\alpha$ for some $k > 0$.
Let $m = \dfrac n {\gcd \tuple{k, n}}$, where $\gcd \tuple{k, n}$ is the greatest common divisor of $k$ and $n$.

Then:

$\beta$ is a primitive $m$-th root of unity
Proof
By Definition of Greatest Common Divisor of Integers:

$\exists c \in \N : k = c \cdot \gcd \tuple{k, n}$

We have:















\(\ds k m\)

\(=\)







\(\ds c \cdot \gcd \tuple{k, n}\)




















\(\ds \)

\(=\)







\(\ds c \cdot \gcd \tuple{k, n} \cdot \dfrac n {\gcd \tuple{k, n} }\)




















\(\ds \)

\(=\)







\(\ds c n\)










Hence:














\(\ds \beta^m\)

\(=\)







\(\ds \paren{\alpha^k}^m\)




















\(\ds \)

\(=\)







\(\ds \alpha^{km}\)




















\(\ds \)

\(=\)







\(\ds \alpha^{cn}\)




















\(\ds \)

\(=\)







\(\ds 1\)










By Definition of Root of Unity:

$\beta$ is an $m$-th root of unity

Let $l \in N : 0 < l < m$.
finish
$\blacksquare$





