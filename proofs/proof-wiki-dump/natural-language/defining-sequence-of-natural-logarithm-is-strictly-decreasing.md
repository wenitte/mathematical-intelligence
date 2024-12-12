# 

Source: https://proofwiki.org/wiki/Defining_Sequence_of_Natural_Logarithm_is_Strictly_Decreasing

Theorem
Let $x \in \R$ be a real number such that $x > 0$.
Let $\sequence {f_n}$ be the sequence of mappings $f_n : \R_{>0} \to \R$ defined as:

$\map {f_n} x = n \paren {\sqrt [n] x - 1}$

Then $\forall x \in \R_{>0}: \sequence {\map {f_n} x}$ is strictly decreasing.


Proof
Fix $t \in R_{>0}$.
Then:














\(\ds n \paren {t^{n + 1} - 1} - \paren {n + 1} \paren {t^n - 1}\)

\(=\)







\(\ds \paren {t - 1}^2 \paren {1 + 2 t + 3 t^2 + \ldots + n t^{n - 1} }\)





Sum of Geometric Sequence: Corollary 2














\(\ds \)

\(>\)







\(\ds 0\)





Product of Real Numbers is Positive iff Numbers have Same Sign



Thus:

$n \paren {t^{n + 1} - 1} > \paren {n + 1} \paren {t^n - 1}$

Fix $x \in \R_{>0}$.
From Power of Positive Real Number is Positive: Rational Number:

$\forall n \in \N : x^{1 / \paren {n \paren {n + 1} } } \in \R_{>0}$

Thus:










\(\ds \forall t \in \R_{>0}: \, \)



\(\ds n \paren {t^{n + 1} - 1}\)

\(>\)







\(\ds \paren {n + 1} \paren {t^n - 1}\)





by the result obtained above








\(\ds \leadsto \ \ \)





\(\ds n \paren {\paren {x^{1 / \paren {n \paren {n + 1} } } }^{n + 1} - 1}\)

\(>\)







\(\ds \paren {n + 1} \paren {\paren {x^{1 / \paren {n \paren {n + 1} } } }^n - 1 }\)





as $x^{1 / \paren {n \paren {n + 1} } } \in \R_{>0}$








\(\ds \leadsto \ \ \)





\(\ds n \paren {x^{1 / n} - 1}\)

\(>\)







\(\ds \paren {n + 1} \paren {x^{1 / \paren {n + 1} } - 1}\)





Product of Indices of Real Number: Rational Numbers








\(\ds \leadsto \ \ \)





\(\ds n \paren {\sqrt [n] x - 1}\)

\(>\)







\(\ds \paren {n + 1} \paren {\map {f_n} x - 1 }\)





Definition of $n$th root




Hence the result, by definition of strictly decreasing sequence.
$\blacksquare$





