# 

Source: https://proofwiki.org/wiki/Divisor_of_Integer/Examples/80_divides_9%5E2n_-_1/Proof_1



Theorem
Let $n \in \Z_{\ge 0}$ be a non-negative integer.
Then:

$80 \divides 9^{2 n} - 1$
where $\divides$ denotes divisibility.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the equivalent proposition:

$80 \divides 9^{2 n} - 1$
where $\divides$ denotes divisbility

$\map P 0$ is the case:














\(\ds 9^{2 \times 0} - 1\)

\(=\)







\(\ds 9^0 - 1\)




















\(\ds \)

\(=\)







\(\ds 1 - 1\)





Zeroth Power of Real Number equals One














\(\ds \)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 80\)

\(\divides\)







\(\ds 9^{2 \times 0} - 1\)





Integer Divides Zero



Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds 9^{2 \times 1} - 1\)

\(=\)







\(\ds 9^2 - 1\)




















\(\ds \)

\(=\)







\(\ds 81 - 1\)




















\(\ds \)

\(=\)







\(\ds 80\)














\(\ds \leadsto \ \ \)





\(\ds 80\)

\(\divides\)







\(\ds 9^{2 \times 1} - 1\)





Integer Divides Itself



Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$80 \divides 9^{2 k} - 1$

from which it is to be shown that:

$80 \divides 9^{2 \paren {k + 1} } - 1$


Induction Step
This is the induction step:

From the induction hypothesis we have that:

$80 \divides 9^{2 k} - 1$
Hence by definition of divisibility, we have:

$\exists r \in \Z: 9^{2 k} - 1 = 80 r$
and so:

$(1): \quad \exists r \in \Z: 9^{2 k} = 80 r + 1$















\(\ds 9^{2 \paren {k + 1} } - 1\)

\(=\)







\(\ds 9^2 \times 9^{2 k} - 1\)














\(\ds \leadsto \ \ \)

\(\ds \exists r \in \Z: \, \)



\(\ds 9^{2 \paren {k + 1} } - 1\)

\(=\)







\(\ds 81 \times \paren {80 r + 1} - 1\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 81 \times 80 r + 80\)





algebra














\(\ds \)

\(=\)







\(\ds 80 \paren {81 r + 1}\)





algebra



Hence by definition of divisibility:

$80 \divides 9^{2 \paren {k + 1} } - 1$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: 80 \divides 9^{2 n} - 1$
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: The Method of Induction: Example $2$




