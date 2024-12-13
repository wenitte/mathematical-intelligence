# 

Source: https://proofwiki.org/wiki/Sequence_of_Best_Rational_Approximations_to_Square_Root_of_2



Theorem
A sequence of best rational approximations to the square root of $2$ starts:

$\dfrac 1 1, \dfrac 3 2, \dfrac 7 5, \dfrac {17} {12}, \dfrac {41} {29}, \dfrac {99} {70}, \dfrac {239} {169}, \dfrac {577} {408}, \ldots$
where:

the numerators are half of the Pell-Lucas numbers, $\dfrac 1 2 Q_n$
the denominators are the Pell numbers $P_n$
starting from $\dfrac {\tfrac12 Q_1} {P_1}$.
The numerators form sequence A001333 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
The denominators form sequence A000129 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Let $\tuple {a_0, a_1, \ldots}$ be the continued fraction expansion of $\sqrt 2$.
By Continued Fraction Expansion of Root 2:

$\sqrt 2 = \sqbrk {1, \sequence 2} = \sqbrk {1, 2, 2, 2, \ldots}$
From Convergents are Best Approximations, the convergents of $\sqbrk {1, \sequence 2}$ are the best rational approximations of $\sqrt 2$.
Let $\sequence {p_n}_{n \mathop \ge 0}$ and $\sequence {q_n}_{n \mathop \ge 0}$ be the numerators and denominators of the continued fraction expansion of $\sqrt 2$.
Then $\dfrac {p_n} {q_n}$ is the $n$th convergent of $\sqbrk {1, \sequence 2}$.
By Convergents of Simple Continued Fraction are Rationals in Canonical Form, $p_n$ and $q_n$ are coprime for all $n \ge 0$.
It remains to show that for all $n \ge 1$:

$Q_n = 2 p_{n - 1}$
$P_n = q_{n - 1}$
It is sufficient to prove that they satisfy the same recurrence relation.
By definition:














\(\ds p_0\)

\(=\)







\(\ds a_0\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds q_0\)

\(=\)







\(\ds 1\)









so that:

$\tuple {Q_1, P_1} = \tuple {2, 1} = \tuple {2 p_0, q_0}$















\(\ds p_1\)

\(=\)







\(\ds a_0 a_1 + 1\)




















\(\ds \)

\(=\)







\(\ds 1 \times 2 + 1\)




















\(\ds \)

\(=\)







\(\ds 3\)




















\(\ds q_1\)

\(=\)







\(\ds a_1\)




















\(\ds \)

\(=\)







\(\ds 2\)









so that:

$\tuple {Q_2, P_2} = \tuple {6, 2} = \tuple {2 p_1, q_1}$















\(\ds p_k\)

\(=\)







\(\ds a_k p_{k - 1} + p_{k - 2}\)




















\(\ds \)

\(=\)







\(\ds 2 p_{k - 1} + p_{k - 2}\)




















\(\ds q_k\)

\(=\)







\(\ds a_k q_{k - 1} + q_{k - 2}\)




















\(\ds \)

\(=\)







\(\ds 2 q_{k - 1} + q_{k - 2}\)









The result follows by definition of Pell numbers and Pell-Lucas numbers.
$\blacksquare$


Historical Note
The sequence of best rational approximations to the square root of $2$ was known to Theon of Smyrna in the $2$nd century C.E.
More precisely, he knew that if $\dfrac p q$ is an approximation to $\sqrt 2$, then $\dfrac {p + 2 q} {p + q}$ is a better one, which result is demonstrated in Relation between Adjacent Best Rational Approximations to Root 2.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1 \cdotp 41421 \, 35623 \, 73095 \, 04880 \, 16887 \, 24209 \, 69807 \, 85697 \ldots$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $13$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1 \cdotp 41421 \, 35623 \, 73095 \, 04880 \, 16887 \, 24209 \, 69807 \, 85697 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $13$




