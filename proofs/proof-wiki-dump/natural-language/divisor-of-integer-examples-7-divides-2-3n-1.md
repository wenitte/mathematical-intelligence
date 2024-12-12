# 

Source: https://proofwiki.org/wiki/Divisor_of_Integer/Examples/7_divides_2%5E3n_-_1



Theorem
Let $n$ be an integer such that $n \ge 1$.
Then:

$7 \divides 2^{3 n} - 1$
where $\divides$ indicates divisibility .


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 1}$, let $\map P n$ be the proposition:

$7 \divides 2^{3 n} - 1$


Basis for the Induction
$\map P 1$ is the case:














\(\ds 2^{3 \times 1} - 1\)

\(=\)







\(\ds 2^3 - 1\)




















\(\ds \)

\(=\)







\(\ds 8 - 1\)




















\(\ds \)

\(=\)







\(\ds 7\)














\(\ds \leadsto \ \ \)





\(\ds 7\)

\(\divides\)







\(\ds 2^{3 \times 1} - 1\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$7 \divides 2^{3 k} - 1$

from which it is to be shown that:

$7 \divides 2^{3 \paren {k + 1} } - 1$


Induction Step
This is the induction step:














\(\ds 2^{3 \paren {k + 1} } - 1\)

\(=\)







\(\ds 2^{3 k} \times 2^3 - 1\)




















\(\ds \)

\(=\)







\(\ds \paren {2^{3 k} - 1 + 1} \times 2^3 - 1\)




















\(\ds \)

\(=\)







\(\ds \paren {2^{3 k} - 1} \times 2^3 + 2^3 - 1\)




















\(\ds \)

\(=\)







\(\ds 7 r \times 2^3 + 7\)





where $7 r = 2^{3 k} - 1$: by the induction hypothesis $7 \divides 2^{3 k} - 1$














\(\ds \)

\(=\)







\(\ds 7 \paren {2^3 r + 1}\)














\(\ds \leadsto \ \ \)





\(\ds 7\)

\(\divides\)







\(\ds 2^{3 \paren {k + 1} } - 1\)





Definition of Divisor of Integer




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 1}: 7 \divides 2^{3 n} - 1$
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $6 \ \text {(a)}$




