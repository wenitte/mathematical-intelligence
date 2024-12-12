# 

Source: https://proofwiki.org/wiki/Banach_Fixed-Point_Theorem



Theorem
Let $\struct {M, d}$ be a complete metric space.
Let $f: M \to M$ be a contraction.
That is, there exists $q \in \hointr 0 1$ such that for all $x, y \in M$:

$\map d {\map f x, \map f y} \le q \, \map d {x, y}$

Then there exists a unique fixed point of $f$.


Proof
Uniqueness
Let $f$ have two fixed points $p_1, p_2 \in M$.
It is to be proved that $p_1 = p_2$.















\(\ds \map d {p_1, p_2}\)

\(=\)







\(\ds \map d {\map f {p_1}, \map f {p_2} }\)





Definition of Fixed Point














\(\ds \)

\(\le\)







\(\ds q \, \map d {p_1, p_2}\)





Definition of Contraction Mapping (Metric Space)








\(\ds \leadsto \ \ \)





\(\ds \paren {1 - q} \map d {p_1, p_2}\)

\(\le\)







\(\ds 0\)





subtracting $q \, \map d {p_1, p_2}$ from both sides




Then from $\paren {1 - q} > 0$ and $\map d {p_1, p_2} \ge 0$:

$\map d {p_1, p_2} = 0$

From Metric Space Axiom $(\text M 4)$:

$p_1 = p_2$


Existence
The fixed point $p$ will be found from an arbitrary member $a_0$ of $M$ by iteration.
The plan is to obtain $\ds p = \lim_{n \mathop \to \infty} a_n$ with definition $a_{n + 1} = \map f {a_n}$.
The sequence of iterates converges in complete metric space $M$ because it is a Cauchy sequence in $M$, as is proved in the following.

Induction on $n$ applies to obtain the contractive estimate:

$\map d {a_{n + 1}, a_n} \le q^n \map d {a_1, a_0}$
Induction details $n = 1$:














\(\ds \map d {a_2, a_1}\)

\(=\)







\(\ds \map d {\map f {a_1}, \map f {a_0} }\)





Definition of $\sequence {a_n}$














\(\ds \)

\(\le\)







\(\ds q \, \map d {a_1, a_0}\)





Definition of Contraction Mapping (Metric Space)




Assume the contractive estimate for $n = k$.
Induction details for $n = k + 1$:














\(\ds \map d {a_{k + 2}, a_{k + 1} }\)

\(=\)







\(\ds \map d {\map f {a_{k + 1} }, \map f {a_k} }\)




















\(\ds \)

\(\le\)







\(\ds q \, \map d {a_{k + 1}, a_k}\)





Definition of Contraction Mapping (Metric Space)














\(\ds \)

\(\le\)







\(\ds q \, q^k \, \map d {a_1, a_0}\)





Induction hypothesis applied. Induction complete.




Next it is to be proved that $\sequence {a_n}$ is a Cauchy sequence in $M$ by showing that $\ds \lim_{m \mathop \to \infty} \map d {a_{n + m}, a_n} = 0$ for $n$ large.














\(\ds \map d {a_{n + m}, a_n}\)

\(\le\)







\(\ds \sum_{j \mathop = n}^{n + m - 1} \map d {a_{j + 1}, a_j}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality and telescoping sum ideas














\(\ds \)

\(\le\)







\(\ds \sum_{j \mathop = n}^{n + m - 1} q^j \, \map d {a_1, a_0}\)





Apply the contractive estimate.














\(\ds \)

\(\le\)







\(\ds q^n \paren {\dfrac {1 - q^m} {1 - q} } \, \map d {a_1, a_0}\)





Sum of Geometric Sequence on right hand side




We have that:

$\ds \lim_{n \mathop \to \infty} q^n = 0$
and:

$\dfrac {1 - q^m} {1 - q} \le \dfrac 1 {1 - q}$

Then $\sequence {\map d {a_{n + m}, a_n} }$ has limit zero at $m = \infty$ for large $n$.
Sequence $\sequence{a_n}$ is a Cauchy sequence convergent to some $p$ in $M$.
Then:














\(\ds \map d {\map f p, p}\)

\(\le\)







\(\ds \map d {\map f p, \map f {a_n} } + \map d {\map f {a_n}, p}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds q \, \map d {p, a_n} + \map d {a_{n + 1}, p}\)





Definition of Contraction Mapping (Metric Space), and $a_{n + 1} = \map f {a_n}$



The right hand side has limit zero at $n = \infty$.
Then:

$\map d {\map f p, p} = 0$
Then by Metric Space Axiom $(\text M 4)$:

$\map f p = p$
$\blacksquare$


Also known as
The Banach Fixed-Point Theorem is also known as:

the Contraction Mapping Principle
the Contraction Mapping Theorem
the Contraction Theorem
the Banach Contraction Principle
the Banach Contraction Theorem
the Contraction Lemma.


Source of Name
This entry was named for Stefan Banach.


Historical Note
The Banach Fixed-Point Theorem was proved by Stefan Banach in $1922$.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): contraction mapping
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): fixed-point theorem
2003: John M. Lee: Introduction to Smooth Manifolds: Appendix $\text C$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): contraction mapping
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): fixed-point theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Contraction Mapping Theorem




