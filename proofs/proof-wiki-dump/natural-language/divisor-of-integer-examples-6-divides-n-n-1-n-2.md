# 

Source: https://proofwiki.org/wiki/Divisor_of_Integer/Examples/6_divides_n_(n%2B1)_(n%2B2)



Theorem
Let $n$ be an integer.
Then:

$6 \divides n \paren {n + 1} \paren {n + 2}$
where $\divides$ indicates divisibility.


Proof 1
From $3$ divides $n \paren {n + 1} \paren {n + 2}$:

$3 \divides n \paren {n + 1} \paren {n + 2}$
From $2$ divides $n \paren {n + 1}$:

$2 \divides n \paren {n + 1}$
and so:

$2 \divides n \paren {n + 1} \paren {n + 2}$
Hence:

$2 \times 3 = 6 \divides \paren {n + 1} \paren {n + 2}$
$\blacksquare$


Proof 2
Proof by induction:
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$6 \divides n \paren {n + 1} \paren {n + 2}$

$\map P 0$ is the case:














\(\ds 0 \times 1 \times 2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 6\)

\(\divides\)







\(\ds 0 \paren {0 + 1} \paren {0 + 2}\)





Integer Divides Zero



Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds 1 \paren {1 + 1} \paren {1 + 2}\)

\(=\)







\(\ds 1 \times 2 \times 3\)




















\(\ds \)

\(=\)







\(\ds 6\)














\(\ds \leadsto \ \ \)





\(\ds 6\)

\(\divides\)







\(\ds 1 \paren {1 + 1} \paren {1 + 2}\)





Integer Divides Itself



Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$6 \divides k \paren {k + 1} \paren {k + 2}$

from which it is to be shown that:

$6 \divides \paren {k + 1} \paren {k + 2} \paren {k + 3}$


Induction Step
This is the induction step:

From the induction hypothesis we have that:

$6 \divides k \paren {k + 1} \paren {k + 2}$
Hence by definition of divisibility, we have:

$(1): \quad \exists r \in \Z: k \paren {k + 1} \paren {k + 2} = 6 r$

From $2$ divides $n \paren {n + 1}$ we have:

$(2): \quad \exists s \in \Z: \paren {k + 1} \paren {k + 2} = 2 s$















\(\ds \paren {k + 1} \paren {k + 2} \paren {k + 3}\)

\(=\)







\(\ds k \paren {k + 1} \paren {k + 2} + 3 \paren {k + 1} \paren {k + 2}\)














\(\ds \leadsto \ \ \)

\(\ds \exists r \in \Z: \, \)



\(\ds \paren {k + 1} \paren {k + 2} \paren {k + 3}\)

\(=\)







\(\ds 6 r + 3 \times 2 s\)





from $(1)$ and $(2)$














\(\ds \)

\(=\)







\(\ds 7 \times 6 r + 6\)





algebra














\(\ds \)

\(=\)







\(\ds 6 \paren {r + s}\)





algebra








\(\ds \leadsto \ \ \)





\(\ds 6\)

\(\divides\)







\(\ds \paren {k + 1} \paren {k + 2} \paren {k + 3}\)





Definition of Divisor of Integer



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: 6 \divides n \paren {n + 1} \paren {n + 2}$
$\blacksquare$





