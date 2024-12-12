# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Normed_Division_Ring/Product_Rule/Proof_2

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent in the norm $\norm {\,\cdot\,}$ to the following limits:

$\ds \lim_{n \mathop \to \infty} x_n = l$
$\ds \lim_{n \mathop \to \infty} y_n = m$

Then:

$\sequence {x_n y_n}$ is convergent to the limit $\ds \lim_{n \mathop \to \infty} \paren {x_n y_n} = l m$


Proof
By Convergent Sequence in Normed Division Ring is Bounded, $\sequence {x_n}$ is bounded.
Suppose $\norm {x_n} \le K$ for $n = 1, 2, 3, \ldots$.
Then for $n = 1, 2, 3, \ldots$:














\(\ds \norm {x_n y_n - l m}\)

\(=\)







\(\ds \norm {x_n y_n - x_n m + x_n m - l m}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n y_n - x_n m} + \norm {x_n m - l m}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \norm {x_n} \norm {y_n - m} + \norm {x_n - l} \norm m\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(\le\)







\(\ds K \norm {y_n - m} + \norm m \norm {x_n - l}\)





as $\sequence {x_n}$ is bounded by $K$














\(\ds \)

\(=:\)







\(\ds z_n\)









We note that $\sequence {z_n}$ is a real sequence.
But $x_n \to l$ as $n \to \infty$.
So from Definition:Convergent Sequence in Normed Division Ring:

$\norm {x_n - l} \to 0$ as $n \to \infty$
Similarly $\norm {y_n - m} \to 0$ as $n \to \infty$.
From the Combined Sum Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \paren {\lambda x'_n + \mu y'_n} = \lambda l' + \mu m'$, $z_n \to 0$ as $n \to \infty$
By applying the Squeeze Theorem for Complex Sequences (which applies as well to real as to complex sequences):

$\sequence {\norm {x_n y_n - l m}}$ converges to $0$ in $\R$.
By definition of a convergent sequence in a normed division ring:

$\sequence{x_n y_n}$ is convergent in $R$
It follows that:

$\ds \lim_{n \mathop \to \infty} \paren {x_n y_n} = l m$
$\blacksquare$





