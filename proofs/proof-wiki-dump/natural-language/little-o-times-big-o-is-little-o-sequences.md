# 

Source: https://proofwiki.org/wiki/Little-O_Times_Big-O_is_Little-O/Sequences

Theorem
Let $\sequence {a_n}, \sequence {b_n}, \sequence {c_n}, \sequence {d_n}$ be sequences of real or complex numbers.
Let:

$a_n = \map \OO {b_n}$
$c_n = \map {\mathcal o} {d_n}$
where:

$\OO$ denotes big-$\OO$ notation
$\mathcal o$ denotes little-$\mathcal o$ notation.

Then:

$a_n c_n = \map {\mathcal o} {b_n d_n}$


Proof
Let $\epsilon \in \R_{> 0}$.
Since $a_n = \map \OO {b_n}$:

$\exists c \in \R: c \ge 0: \exists n_0 \in \N: \paren {n \ge n_0 \implies \size {a_n} \le c \cdot \size {b_n} }$
Since $c_n = \map {\mathcal o} {d_n}$:

$\exists n_1 \in \N: \paren {n \ge n_1 \implies \size {c_n} \le \dfrac \epsilon {c + 1} \cdot \size {d_n} }$

Thus for $n \ge \max \set {n_0, n_1}$:














\(\ds \)

\(\)







\(\ds \size {a_n c_n}\)




















\(\ds \)

\(=\)







\(\ds \size {a_n} \size {c_n}\)




















\(\ds \)

\(\le\)







\(\ds \paren {c \cdot \size {b_n} } \paren {\frac \epsilon {c + 1} \cdot \size {d_n} }\)




















\(\ds \)

\(\le\)







\(\ds \size {b_n} \paren {\epsilon \cdot \size {d_n} }\)




















\(\ds \)

\(=\)







\(\ds \epsilon \cdot \size {b_n d_n}\)









Thus $a_n c_n = \map {\mathcal o} {b_n d_n}$.
$\blacksquare$





