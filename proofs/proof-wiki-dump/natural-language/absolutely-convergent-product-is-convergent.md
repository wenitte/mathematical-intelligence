# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Product_is_Convergent

Theorem
Let $\struct {\mathbb K, \norm {\,\cdot\,} }$ be a valued field.
Let $\mathbb K$ be complete.
Let the infinite product $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ be absolutely convergent.

Then it is convergent.


Proof
Let $P_n$ and $Q_n$ denote the $n$th partial products of $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ and $\ds \prod_{n \mathop = 1}^\infty \paren {1 + \norm {a_n} }$ respectively.
We show that $\sequence {P_n}$ is Cauchy.
We have, for $m > n$:














\(\ds \norm {P_m - P_n}\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \norm {1 + a_k} \cdot \norm {\prod_{k \mathop = n + 1}^m \paren {1 + a_k} - 1}\)




















\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(\le\)







\(\ds \prod_{k \mathop = 1}^n \paren {1 + \norm {a_k} } \paren {\prod_{k \mathop = n + 1}^m \paren {1 + \norm {a_k} } - 1}\)




















\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds Q_m - Q_n\)










Because $\sequence {Q_n}$ converges, $\sequence {Q_n}$ is Cauchy.
By the above inequality, $\sequence {P_n}$ is Cauchy.
Because $\mathbb K$ is complete, $\sequence {P_n}$ converges to some $a \in \mathbb K$.
By Absolutely Convergent Product Does not Diverge to Zero, the product converges.
$\blacksquare$





