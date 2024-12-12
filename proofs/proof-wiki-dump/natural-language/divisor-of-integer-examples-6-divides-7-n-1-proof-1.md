# 

Source: https://proofwiki.org/wiki/Divisor_of_Integer/Examples/6_divides_7%5En_-_1/Proof_1



Theorem
Let $n \in \Z_{\ge 0}$ be a positive integer.
Then:

$6 \divides 7^n - 1$
where $\divides$ denotes divisibility.


Proof
Proof by induction:
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$6 \divides 7^n - 1$

$\map P 0$ is the case:














\(\ds 7^0 - 1\)

\(=\)







\(\ds 1 - 1\)





Zeroth Power of Real Number equals One














\(\ds \)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 6\)

\(\divides\)







\(\ds 7^0 - 1\)





Integer Divides Zero



Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds 7^1 - 1\)

\(=\)







\(\ds 7 - 1\)




















\(\ds \)

\(=\)







\(\ds 6\)














\(\ds \leadsto \ \ \)





\(\ds 6\)

\(\divides\)







\(\ds 7^1 - 1\)





Integer Divides Itself



Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$6 \divides 7^k - 1$

from which it is to be shown that:

$6 \divides 7^{k + 1} - 1$


Induction Step
This is the induction step:

From the induction hypothesis we have that:

$6 \divides 7^k - 1$
Hence by definition of divisibility, we have:

$\exists r \in \Z: 7^k - 1 = 6 r$
and so:

$(1): \quad \exists r \in \Z: 7^k = 6 r + 1$















\(\ds 7^{k + 1} - 1\)

\(=\)







\(\ds 7 \times 7^k - 1\)














\(\ds \leadsto \ \ \)

\(\ds \exists r \in \Z: \, \)



\(\ds 7^{k + 1} - 1\)

\(=\)







\(\ds 7 \times \paren {6 r + 1} - 1\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 7 \times 6 r + 6\)





algebra














\(\ds \)

\(=\)







\(\ds 6 \paren {7 r + 1}\)





algebra








\(\ds \leadsto \ \ \)





\(\ds 6\)

\(\divides\)







\(\ds 7^{k + 1} - 1\)





Definition of Divisor of Integer



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: 6 \divides 7^n - 1$
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: The Method of Induction: Exercises $\text {II}$: $7$




