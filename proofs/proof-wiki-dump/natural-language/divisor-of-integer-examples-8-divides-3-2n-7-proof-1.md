# 

Source: https://proofwiki.org/wiki/Divisor_of_Integer/Examples/8_divides_3%5E2n_%2B_7/Proof_1



Theorem
Let $n$ be an integer such that $n \ge 1$.
Then:

$8 \divides 3^{2 n} + 7$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 1}$, let $\map P n$ be the proposition:

$8 \divides 3^{2 n} + 7$


Basis for the Induction
$\map P 1$ is the case:














\(\ds 3^{2 \times 1} + 7\)

\(=\)







\(\ds 3^2 + 7\)




















\(\ds \)

\(=\)







\(\ds 9 + 7\)




















\(\ds \)

\(=\)







\(\ds 16\)




















\(\ds \)

\(=\)







\(\ds 8 \times 2\)














\(\ds \leadsto \ \ \)





\(\ds 8\)

\(\divides\)







\(\ds 3^{2 \times 1} + 7\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$8 \divides 3^{2 k} + 7$

from which it is to be shown that:

$8 \divides 3^{2 \paren {k + 1} } + 7$


Induction Step
This is the induction step:














\(\ds 3^{2 \paren {k + 1} } + 7\)

\(=\)







\(\ds 3^{2 k} \times 3^2 + 7\)




















\(\ds \)

\(=\)







\(\ds \paren {3^{2 k} + 7 - 7} \times 3^2 + 7\)




















\(\ds \)

\(=\)







\(\ds \paren {3^{2 k} + 7} \times 3^2 - 7 \times \paren {3^2 - 1}\)




















\(\ds \)

\(=\)







\(\ds 8 r \times 3^2 - 8 \times 7\)





where $8 r = 3^{2 k} + 7$: by the induction hypothesis: $8 \divides 3^{2 k} + 7$














\(\ds \)

\(=\)







\(\ds 8 \paren {3^2 r - 7}\)














\(\ds \leadsto \ \ \)





\(\ds 8\)

\(\divides\)







\(\ds 3^{2 \paren {k + 1} } + 7\)





Definition of Divisor of Integer




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 1}: 8 \divides 3^{2 n} + 7$
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $6 \ \text {(a)}$




