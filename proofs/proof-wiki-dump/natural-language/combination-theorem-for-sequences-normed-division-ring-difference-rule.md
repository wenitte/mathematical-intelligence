# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Normed_Division_Ring/Difference_Rule

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Let $\sequence {x_n}$,  $\sequence {y_n}$ be sequences in $R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent in the norm $\norm {\,\cdot\,}$ to the following limits:

$\ds \lim_{n \mathop \to \infty} x_n = l$
$\ds \lim_{n \mathop \to \infty} y_n = m$
Then:

$\sequence {x_n - y_n}$ is convergent and $\ds \lim_{n \mathop \to \infty} \paren {x_n - y_n} = l - m$


Proof
From Sum Rule for Sequences in Normed Division Ring:

$\ds \lim_{n \mathop \to \infty} \paren {x_n + y_n} = l + m$
From Multiple Rule for Sequences in Normed Division Ring:

$\ds \lim_{n \mathop \to \infty} \paren {-y_n} = -m$
Hence:

$\ds \lim_{n \mathop \to \infty} \paren {x_n + \paren {-y_n} } = l + \paren {-m}$
The result follows.
$\blacksquare$


Also see
Sum Rule for Sequences in Normed Division Ring
Multiple Rule for Sequences in Normed Division Ring




