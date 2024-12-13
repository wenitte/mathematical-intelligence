# 

Source: https://proofwiki.org/wiki/Null_Sequence_in_Exponential_Sequence

Theorem
Let $\sequence {a_n}_{n \mathop \in \N} \in \C$ be a sequence of complex numbers such that:

$\ds \lim_{n \mathop \to +\infty}a_n = 0$

Then:

$\ds \lim_{n \mathop \to +\infty} \paren {1 + \dfrac {a_n} n}^n = 1$


Proof 1













\(\ds \paren {1 + \frac {a_n} n}^n\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n {n \choose k} \paren {\frac {a_n} n}^k\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds {n \choose 0} \paren {\frac {a_n} n}^0 + \sum_{k \mathop = 1}^n {n \choose k} \paren {\frac {a_n} n}^k\)




















\(\ds \)

\(=\)







\(\ds 1 + a_n \sum_{k \mathop = 1}^n \dbinom n k \frac { {a_n}^{k - 1} } {n^k}\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to +\infty} 1 + a_n \sum_{k \mathop = 1}^n \dbinom n k \frac { {a_n}^{k - 1} } {n^k}\)

\(=\)







\(\ds 1 + \paren {\lim_{n \mathop \to +\infty} a_n} \paren {\lim_{n \mathop \to +\infty} \sum_{k \mathop = 1}^n \dbinom n k \frac { {a_n}^{k - 1} } {n^k} }\)





Combination Theorem for Sequences














\(\ds \)

\(=\)







\(\ds 1 + 0 \cdot \paren {\lim_{n \mathop \to +\infty} \sum_{k \mathop = 1}^n \dbinom n k \frac { {a_n}^{k - 1} } {n^k} }\)




















\(\ds \)

\(=\)







\(\ds 1\)










This article, or a section of it, needs explaining.In particular: A note on the finiteness of the right limit is necessary to be allowed to use the combination theoremYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Proof 2
Let $\sequence {E_n}$ be the sequence of complex functions $E_n: \C \to \C$ defined by:

$\map {E_n} z = \paren {1 + \dfrac z n}^n$
We have that:

$\ds \lim_{n \mathop \to \infty} \map {E_n} z = \map \exp z$
where $\map \exp z$ is the complex exponential.
We also have that:

$E_n \paren {a_n} = \paren {1 + \dfrac {a_n} n}^n$
By Convergent Sequence in Metric Space is Bounded, we have that $\sequence {a_n}$ is Bounded Complex Sequence.
Let this bound be $M$.
Let $K \subseteq \C$ be the closed disk of radius $M$.
By Closed Disk is Compact, $K$ is compact.
By Exponential Sequence is Uniformly Convergent on Compact Sets, $\sequence {E_n}$ is uniformly convergent on $K$.
Now the hypotheses of Uniformly Convergent Sequence Evaluated on Convergent Sequence are satisfied, so:

$\ds \lim_{n \mathop \to \infty} \map {E_n} {a_n} = \map \exp 0 = 1$
Hence the result.
$\blacksquare$





