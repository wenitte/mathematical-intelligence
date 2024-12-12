# 

Source: https://proofwiki.org/wiki/Form_of_Geometric_Sequence_of_Integers/Corollary

Corollary to Form of Geometric Sequence of Integers
Let $p$ and $q$ be integers.
Then the finite sequence $P = \sequence {a_j}_{0 \mathop \le j \mathop \le n}$ defined as:

$a_j = p^j q^{n - j}$
is a geometric sequence whose common ratio is $\dfrac p q$.


Proof
Let the greatest common divisor of $p$ and $q$ be $d$.
Then by Integers Divided by GCD are Coprime:

$p = d r$
$q = d s$
where $r$ and $s$ are coprime integers.
Thus:

$a_j = p^j q^{n - j}$













\(\ds a_j\)

\(=\)







\(\ds p^j q^{n - j}\)




















\(\ds \)

\(=\)







\(\ds \paren {d r}^j \paren {d s}^{n - j}\)




















\(\ds \)

\(=\)







\(\ds d^n r^j s^{n - j}\)









and so by Form of Geometric Sequence of Integers it follows that $P$ is a geometric sequence whose common ratio is $\dfrac r s$.
Then:














\(\ds \dfrac r s\)

\(=\)







\(\ds \paren {\dfrac p d} / \paren {\dfrac q d}\)




















\(\ds \)

\(=\)







\(\ds \dfrac p d \dfrac d q\)




















\(\ds \)

\(=\)







\(\ds \dfrac p q\)









Hence the result.
$\blacksquare$





