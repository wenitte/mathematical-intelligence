# 

Source: https://proofwiki.org/wiki/Modulo_Arithmetic/Examples/n(n%5E2-1)(3n-2)_Modulo_24



Example of Modulo Arithmetic
$n \paren {n^2 - 1} \paren {3 n + 2} \equiv 0 \pmod {24}$


Proof
The proof proceeds by induction.
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$n \paren {n^2 - 1} \paren {3 n + 2} \equiv 0 \pmod {24}$


Basis for the Induction
$\map P 1$ is the case:














\(\ds 1 \paren {1^2 - 1} \paren {3 \times 1 + 2}\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {24}\)








Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$k \paren {k^2 - 1} \paren {3 k + 2} \equiv 0 \pmod {24}$

from which it is to be shown that:

$\paren {k + 1} \paren {\paren {k + 1}^2 - 1} \paren {3 \paren {k + 1} + 2} \equiv 0 \pmod {24}$


Induction Step
This is the induction step:














\(\ds \paren {k + 1} \paren {\paren {k + 1}^2 - 1} \paren {3 \paren {k + 1} - 2}\)

\(=\)







\(\ds k \paren {k + 1} \paren {k + 2} \paren {3 k + 5}\)




















\(\ds \)

\(=\)







\(\ds k \paren {k + 1} \paren {k - 1 + 3} \paren {3 k + 2 + 3}\)




















\(\ds \)

\(=\)







\(\ds k \paren {k + 1} \paren {k - 1} \paren {3 k + 2 + 3} + 3 k \paren {k + 1} \paren {3 k + 2 + 3}\)




















\(\ds \)

\(=\)







\(\ds k \paren {k + 1} \paren {k - 1} \paren {3 k + 2} + 3 k \paren {k + 1} \paren {k - 1} + 3 k \paren {k + 1} \paren {3 k + 5}\)




















\(\ds \)

\(=\)







\(\ds k \paren {k^2 - 1} \paren {3 k + 2} + 3 k \paren {k + 1} \paren {k - 1 + 3 k + 5}\)




















\(\ds \)

\(=\)







\(\ds k \paren {k^2 - 1} \paren {3 k + 2} + 3 k \paren {k + 1} \paren {4 k + 4}\)




















\(\ds \)

\(=\)







\(\ds k \paren {k^2 - 1} \paren {3 k + 2} + 12 k \paren {k + 1}^2\)










By the induction hypothesis:

$k \paren {k^2 - 1} \paren {3 k + 2} = 24 r$
for some $r \in \Z$.
Take $12 k \paren {k + 1}^2$.
If $k$ is even, then $12 k$ and so $12 k \paren {k + 1}^2$ is divisible by $24$.
If $k$ is odd, then $k + 1$ is even and so $12 k \paren {k + 1}^2$ is again divisible by $24$.
Thus:

$12 k \paren {k + 1}^2 = 24 s$
for some $s \in \Z$.

Thus:

$k \paren {k^2 - 1} \paren {3 k + 2} + 12 k \paren {k + 1}^2 = 24 \paren {r + s}$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>0}: n \paren {n^2 - 1} \paren {3 n + 2} \equiv 0 \pmod {24}$
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-1}$ Principle of Mathematical Induction: Exercise $18$




