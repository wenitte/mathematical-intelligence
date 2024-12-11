# 

Source: https://proofwiki.org/wiki/2_to_the_n_is_Greater_than_n_Cubed_when_n_is_10_and_above



Theorem
$\forall n \in \Z, n \ge 10: 2^n > n^3$


Proof
Proof by induction:
For all $n \in \Z$ such that $n \ge 10$, let $\map P n$ be the proposition:

$2^n > n^3$

We note that:

$2^9 = 512 < 729 = 9^3$
so when $n < 10$ the proposition does not hold.


Basis for the Induction
$\map P {10}$ is the case:

$2^{10} = 1024 > 1000 = 10^3$
so $\map P {10}$ is seen to hold.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 10$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$2^k > k^3$

We need to show that:

$2^{k + 1} > \paren {k + 1}^3$


Induction Step
This is our induction step:
We note that when $k \ge 10$:














\(\ds \paren {1 + \frac 1 k}^3\)

\(\le\)







\(\ds \paren {1 + \frac 1 {10} }^3\)




















\(\ds \)

\(=\)







\(\ds 1.331\)










\(\text {(1)}: \quad\)









\(\ds \)

\(<\)







\(\ds 2\)










Thus:














\(\ds 2^{k + 1}\)

\(=\)







\(\ds 2 \times 2^k\)




















\(\ds \)

\(>\)







\(\ds \paren {1 + \dfrac 1 k}^3 2^k\)





from $(1)$














\(\ds \)

\(>\)







\(\ds \paren {1 + \dfrac 1 k}^3 k^3\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {k + 1}^3\)





Product of Powers



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction: Exercise $10$




