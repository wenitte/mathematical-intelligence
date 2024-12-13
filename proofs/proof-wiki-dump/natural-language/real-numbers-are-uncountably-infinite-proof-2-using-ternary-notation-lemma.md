# 

Source: https://proofwiki.org/wiki/Real_Numbers_are_Uncountably_Infinite/Proof_2_using_Ternary_Notation/Lemma

Lemma to Real Numbers are Uncountably Infinite: Proof 2 using Ternary Notation
Let $\sequence {d_n}$ and $\sequence {e_n}$ be infinite sequences in $\set {0, 1}$ such that:

$\exists m \in \N: d_m \ne e_m$
That is, the sequences $\sequence {d_n}$ and $\sequence {e_n}$ are different in at least one term.
Then the ternary representations $D = 0.d_1 d_2 \ldots$ and $E = 0.e_1 e_2 \dots$ represent distinct real numbers.


Proof
Let $\sequence {d_n} \ne \sequence {e_n}$.
By the Well-Ordering Principle, there is a smallest $n \in \N_{>0}$ such that $d_n \ne e_n$.
Without loss of generality, suppose that $d_n = 0$ and $e_n = 1$.
Let:

$\ds K = 0.d_1 d_2 \ldots d_{n - 1} = \sum_{i \mathop = 1}^{n - 1} d_i 3^{-i}$
$\ds D := K + \sum_{i \mathop = n + 1}^\infty d_i 3^{-i}$
$\ds E := K + 3^{-n} + \sum_{i \mathop = n + 1}^\infty e_i 3^{-i} \ge K + 3^{-n}$
But then:














\(\ds D \le K + \sum_{i \mathop = n + 1}^\infty 3^{-i}\)

\(=\)







\(\ds K + 3^{-n-1} \sum_{i \mathop = 0}^\infty 3^{-i}\)




















\(\ds \)

\(=\)







\(\ds K + 3^{-n - 1} \dfrac 3 2\)




















\(\ds \)

\(=\)







\(\ds K + \frac {3^{-n} } 2\)









Thus $D < E$, so $D \ne E$.
$\blacksquare$





