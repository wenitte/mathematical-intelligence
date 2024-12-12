# 

Source: https://proofwiki.org/wiki/Closed_Ball_is_Disjoint_Union_of_Smaller_Closed_Balls_in_P-adic_Numbers/Disjoint_Closed_Balls

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a \in \Q_p$.
For all $\epsilon \in \R_{>0}$, let $\map {B_\epsilon} a$ denote the open $\epsilon$-ball of $a$. 

Then:

$\forall n \in Z : \set{\map {B^-_{p^{-m} } } {a + i p^n} : i = 0, \dotsc, p^{\paren {m - n}} - 1}$ is a set of pairwise disjoint open balls.


Proof
Let $0 \le i, j \le p^{\paren {m - n}} - 1$.
Let $x \in \map {B^-_{p^{-m} } } {a + i p^n} \cap \map {B^-_{p^{-m} } } {a + j p^n}$
From Characterization of Open Ball in P-adic Numbers:

$\norm {\paren {x -a} - i p^n}_p \le p^{-m}$
and:

$\norm {\paren {x -a} - j p^n}_p \le p^{-m}$

We have that P-adic Norm satisfies Non-Archimedean Norm Axioms.
Then:














\(\ds \norm {i p^n - j p^n}_p\)

\(\le\)







\(\ds p^{-m}\)





Corollary to P-adic Metric on P-adic Numbers is Non-Archimedean Metric








\(\ds \leadsto \ \ \)





\(\ds \norm {p^n}_p \norm {i - j}_p\)

\(\le\)







\(\ds p^{-m}\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity








\(\ds \leadsto \ \ \)





\(\ds p^{-n} \norm {i - j}_p\)

\(\le\)







\(\ds p^{-m}\)





Definition of $p$-adic norm








\(\ds \leadsto \ \ \)





\(\ds \norm {i - j}_p\)

\(\le\)







\(\ds p^{n - m}\)





multiplying both sides by $p^n$.








\(\ds \leadsto \ \ \)





\(\ds p^{\paren {m - n} }\)

\(\divides\)







\(\ds \paren {i - j}\)





Definition of $p$-adic norm








\(\ds \leadsto \ \ \)





\(\ds j\)

\(\equiv\)







\(\ds i \mod p^{\paren {m - n} }\)





Definition of Congruence Modulo $p$








\(\ds \leadsto \ \ \)





\(\ds i\)

\(=\)







\(\ds j\)





Integer is Congruent to Integer less than Modulus








\(\ds \leadsto \ \ \)





\(\ds \map {B^-_{p^{-m} } } {a + i p^n}\)

\(=\)







\(\ds \map {B^-_{p^{-m} } } {a + j p^n}\)









The result follows.
$\blacksquare$





