# 

Source: https://proofwiki.org/wiki/Accuracy_of_Convergents_of_Continued_Fraction_Expansion_of_Irrational_Number/Corollary

Corollary to Accuracy of Convergents of Continued Fraction
Let $x$ be an irrational number.
Let $\left \langle {C_n}\right \rangle$ be the sequence of convergents of $x$.
Let $p_1, p_2, p_3, \ldots$ and $q_1, q_2, q_3, \ldots$ be its numerators and denominators.

Then:

$\forall k \ge 1: \dfrac 1 {q_k q_{k+1}} > \left\vert{x - \dfrac {p_k} {q_k}}\right\vert > \dfrac 1 {2 q_k q_{k+1}}$


Proof
From Accuracy of Convergents of Continued Fraction:

$\forall k \ge 1: \left\vert{x - \dfrac {p_{k+1}} {q_{k+1}}}\right\vert \le \dfrac 1 {q_{k+1} q_{k+2}} \le \dfrac 1 {2 q_k q_{k+1}} < \left\vert{x - \dfrac {p_k} {q_k}}\right\vert$
The last inequality immediately gives:

$\left\vert{x - \dfrac {p_k} {q_k}}\right\vert > \dfrac 1 {2 q_k q_{k+1}}$
The first inequality with $k-1$ gives:

$\dfrac 1 {q_k q_{k+1}} \ge \left\vert{x - \dfrac {p_k} {q_k}}\right\vert$
as desired.
$\blacksquare$





