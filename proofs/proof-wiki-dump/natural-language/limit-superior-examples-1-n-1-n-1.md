# 

Source: https://proofwiki.org/wiki/Limit_Superior/Examples/(-1)%5En_(1_%2B_n%5E-1)

Example of Limit Superior
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N_{>0}: a_n = \paren {-1}^n \paren {1 + \dfrac 1 n}$

The limit superior of $\sequence {a_n}$ is given by:

$\ds \map {\limsup_{n \mathop \to \infty} } {a_n} = 1$

This is not the same as:

$\ds \sup_{n \mathop \ge 1} \paren {-1}^n \paren {1 + \dfrac 1 n}$


Proof
Let $L$ be the set of all real numbers which are the limit of some subsequence of $\sequence {a_n}$.
We have that:














\(\ds \paren {-1}^{2 n} \paren {1 + \dfrac 1 {2 n} }\)

\(=\)







\(\ds 1 + \dfrac 1 {2 n}\)




















\(\ds \)

\(\to\)







\(\ds 1\)

\(\ds \text {as $n \to \infty$}\)







and:














\(\ds \paren {-1}^{2 n - 1} \paren {1 + \dfrac 1 {2 n - 1} }\)

\(=\)







\(\ds -\paren {1 + \dfrac 1 {2 n - 1} }\)




















\(\ds \)

\(\to\)







\(\ds -1\)

\(\ds \text {as $n \to \infty$}\)







$\sequence {a_n}$ contains no subsequence which converges to a limit different from $-1$ or $1$.
Hence:

$L = \set {-1, 1}$
and it follows that:

$\ds \map {\limsup_{n \mathop \to \infty} } {\paren {-1}^n \paren {1 + \dfrac 1 n} } = 1$

But note that:

$\ds \sup_{n \mathop \ge 1} \paren {-1}^n \paren {1 + \dfrac 1 n}$
occurs when $n = 2$, at which point:

$\paren {-1}^n \paren {1 + \dfrac 1 n} = \paren {-1}^2 \paren {1 + \dfrac 1 2} = \dfrac 3 2$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Lim sup and lim inf: Exercise $\S 5.15 \ (1) \ \text {(i)}$




