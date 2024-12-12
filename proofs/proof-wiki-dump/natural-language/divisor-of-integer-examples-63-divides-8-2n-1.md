# 

Source: https://proofwiki.org/wiki/Divisor_of_Integer/Examples/63_divides_8%5E2n_-_1



Theorem
Let $n \in \Z_{\ge 0}$ be a positive integer.
Then:

$63 \divides 8^{2 n} - 1$
where $\divides$ denotes divisibility.


Proof 1
Proof by induction:
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$63 \divides 8^{2 n} - 1$

$\map P 0$ is the case:














\(\ds 8^{2 \times 0} - 1\)

\(=\)







\(\ds 8^0 - 1\)




















\(\ds \)

\(=\)







\(\ds 1 - 1\)





Zeroth Power of Real Number equals One














\(\ds \)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 63\)

\(\divides\)







\(\ds 8^{2 \times 0} - 1\)





Integer Divides Zero



Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds 8^{2 \times 1} - 1\)

\(=\)







\(\ds 8^2 - 1\)




















\(\ds \)

\(=\)







\(\ds 64 - 1\)




















\(\ds \)

\(=\)







\(\ds 63\)














\(\ds \leadsto \ \ \)





\(\ds 63\)

\(\divides\)







\(\ds 8^{2 \times 1} - 1\)





Integer Divides Itself



Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$63 \divides 8^{2 k} - 1$

from which it is to be shown that:

$63 \divides 8^{2 \paren {k + 1} } - 1$


Induction Step
This is the induction step:

From the induction hypothesis we have that:

$63 \divides 8^{2 k} - 1$
Hence by definition of divisibility, we have:

$\exists r \in \Z: 8^{2 k} - 1 = 63 r$
and so:

$(1): \quad \exists r \in \Z: 8^{2 k} = 63 r + 1$















\(\ds 8^{2 \paren {k + 1} } - 1\)

\(=\)







\(\ds 8^2 \times 8^{2 k} - 1\)














\(\ds \leadsto \ \ \)

\(\ds \exists r \in \Z: \, \)



\(\ds 8^{2 \paren {k + 1} } - 1\)

\(=\)







\(\ds 64 \times \paren {63 r + 1} - 1\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 64 \times 63 r + 63\)





algebra














\(\ds \)

\(=\)







\(\ds 63 \paren {64 r + 1}\)





algebra








\(\ds \leadsto \ \ \)





\(\ds 63\)

\(\divides\)







\(\ds 8^{2 \paren {k + 1} } - 1\)





Definition of Divisor of Integer



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: 63 \divides 8^{2 n} - 1$
$\blacksquare$


Proof 2
From Integer Less One divides Power Less One, we have that:

$\forall m, n \in \Z: \paren {m - 1} \divides \paren {m^n - 1}$
This result is the special case where $m = 8^2$.
$\blacksquare$





