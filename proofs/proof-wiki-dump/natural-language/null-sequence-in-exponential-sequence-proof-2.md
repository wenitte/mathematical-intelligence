# 

Source: https://proofwiki.org/wiki/Null_Sequence_in_Exponential_Sequence/Proof_2

Theorem
Let $\sequence {a_n}_{n \mathop \in \N} \in \C$ be a sequence of complex numbers such that:

$\ds \lim_{n \mathop \to +\infty}a_n = 0$

Then:

$\ds \lim_{n \mathop \to +\infty} \paren {1 + \dfrac {a_n} n}^n = 1$


Proof
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





