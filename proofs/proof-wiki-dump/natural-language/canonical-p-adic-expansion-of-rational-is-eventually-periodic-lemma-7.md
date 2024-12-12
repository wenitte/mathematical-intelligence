# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Lemma_7

Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.

Then:

$1 + p^k + p^{2 k} + p^{3 k} + \cdots = \dfrac 1 {1 - p^k}$


Proof
Let $S_n$ be the partial sum:

$\ds S_n = \sum_{j \mathop = 0}^n p^{j k}$

We have:














\(\ds \paren {1 - p^k} S_n\)

\(=\)







\(\ds \paren {1 - p^k} \sum_{j \mathop = 0}^n p^{j k}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{j \mathop = 0}^n p^{j k} } - p^k \paren {\sum_{j \mathop = 0}^n p^{j k} }\)





distributing the partial sum across $1 - p^k$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{j \mathop = 0}^n p^{j k} } - \paren {\sum_{j \mathop = 0}^n p^{\paren {j + 1} k} }\)





distributing $p^k$ across the partial sum














\(\ds \)

\(=\)







\(\ds 1 - p^k + p^k - p^{2 k} + p^{2 k} - \ldots - p^{n k} + p^{n k} - p^{\paren {n + 1} k}\)





rearranging terms














\(\ds \)

\(=\)







\(\ds 1 - p^ {\paren {n + 1} k}\)





as the series telescopes








\(\ds \leadsto \ \ \)





\(\ds \norm {\paren {1 - p^k} S_n - 1}_p\)

\(=\)







\(\ds \norm {1 - p^{\paren {n + 1} k} - 1}_p\)




















\(\ds \)

\(=\)







\(\ds \norm {- p^{\paren {n + 1} k} }_p\)





cancelling














\(\ds \)

\(=\)







\(\ds \norm {p^{\paren {n + 1} k} }_p\)





Norm of Negative in Division Ring














\(\ds \)

\(=\)







\(\ds \dfrac 1 {p^{\paren {n + 1} k} }\)





Definition of P-adic Norm on Rational Numbers














\(\ds \)

\(\to\)







\(\ds 0\)





as $n \to \infty$








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \paren{1 - p^k} S_n\)

\(=\)







\(\ds 1\)





Definition of Convergent P-adic Sequence








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} S_n\)

\(=\)







\(\ds \dfrac 1 {\paren {1 - p^k} }\)





Multiple Rule for Sequences in Normed Division Ring








\(\ds \leadsto \ \ \)





\(\ds \sum_{j \mathop = 0}^\infty p^{j k}\)

\(=\)







\(\ds \dfrac 1 {\paren {1 - p^k} }\)





Definition of Series



$\blacksquare$





