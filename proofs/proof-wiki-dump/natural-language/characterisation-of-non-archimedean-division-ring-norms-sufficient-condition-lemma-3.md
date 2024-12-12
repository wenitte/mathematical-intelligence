# 

Source: https://proofwiki.org/wiki/Characterisation_of_Non-Archimedean_Division_Ring_Norms/Sufficient_Condition/Lemma_3

Theorem
Let $\sequence {x_n}$ be the real sequence defined as $x_n = \paren {n + 1}^{1/n}$, using exponentiation.
Then $\sequence {x_n}$ converges with a limit of $1$.


Proof
We have the definition of the power to a real number:

$\paren {n + 1}^{1/n} = \map \exp {\dfrac 1 n \map \ln {n + 1} }$

For $n \ge 1$ then $n + 1 \le 2 n$.
Hence:














\(\ds \frac 1 n \map \ln {n + 1}\)

\(\le\)







\(\ds \frac 1 n \map \ln {2 n}\)





Logarithm is Strictly Increasing














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \paren {\ln 2 + \ln n}\)





Logarithm on Positive Real Numbers is Group Isomorphism














\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \frac {\ln 2} n + \frac 1 n \ln n\)










By Powers Drown Logarithms:

$\ds \lim_{n \mathop \to \infty} \frac 1 n \ln n = 0$

By Sequence of Reciprocals is Null Sequence:

$\ds \lim_{n \mathop \to \infty} \frac 1 n = 0$

By Combined Sum Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \paren {\frac {\ln 2} n + \frac 1 n \ln n} = \ln 2 \cdot 0 + 0 = 0$

By the Squeeze Theorem for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \paren {n + 1}^{1/n} = 0$

Hence:

$\ds \lim_{n \mathop \to \infty} \paren {n + 1}^{1/n} = \exp 0 = 1$
and the result follows.
$\blacksquare$





