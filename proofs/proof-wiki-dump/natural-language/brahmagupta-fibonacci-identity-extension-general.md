# 

Source: https://proofwiki.org/wiki/Brahmagupta-Fibonacci_Identity/Extension/General



Extension to Brahmagupta-Fibonacci Identity
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n, m$ be integers.
Then:

$\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + m {b_j}^2} = c^2 + m d^2$
for some $c, d \in \Z$.
That is: the set of all integers of the form $a^2 + m b^2$ is closed under multiplication.


Proof
The proof proceeds by induction.
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + m {b_j}^2} = c^2 + m d^2$
for some $c, d \in \Z$.

$\map P 1$ is the trivial case:














\(\ds \prod_{j \mathop = 1}^1 \paren { {a_j}^2 + m {b_j}^2}\)

\(=\)







\(\ds {a_1}^2 + m {b_1}^2\)




















\(\ds \)

\(=\)







\(\ds c^2 + m d^2\)





setting $c = a_1$ and $d = b_1$



Thus $\map P 1$ is seen to hold.


Basis for the Induction
$\map P 2$ is the case:














\(\ds \prod_{j \mathop = 1}^2 \paren { {a_j}^2 + m {b_j}^2}\)

\(=\)







\(\ds \paren { {a_1}^2 + m {b_1}^2} \paren { {a_2}^2 + m {b_2}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_1 a_2 + m b_1 b_2}^2 + m \paren {a_1 b_2 - b_1 a_2}^2\)





General Brahmagupta-Fibonacci Identity














\(\ds \)

\(=\)







\(\ds c^2 + m d^2\)





setting $c = a_1 a_2 + m b_1 b_2$ and $d = a_1 b_2 - b_1 a_2$



Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \prod_{j \mathop = 1}^k \paren { {a_j}^2 + m {b_j}^2} = c^2 + m d^2$
for some $c, d \in \Z$.

from which it is to be shown that:

$\ds \prod_{j \mathop = 1}^{k + 1} \paren { {a_j}^2 + m {b_j}^2} = c^2 + m d^2$
for some $c, d \in \Z$.


Induction Step
This is the induction step:















\(\ds \prod_{j \mathop = 1}^{k + 1} \paren { {a_j}^2 + m {b_j}^2}\)

\(=\)







\(\ds \prod_{j \mathop = 1}^k \paren { {a_j}^2 + m {b_j}^2} \paren { {a_{k + 1} }^2 + m {b_{k + 1} }^2}\)




















\(\ds \)

\(=\)







\(\ds \paren { {c'}^2 + m {d'}^2} \paren { {a_{k + 1} }^2 + m {b_{k + 1} }^2}\)





Induction Hypothesis: for some $c', d' \in \Z$














\(\ds \)

\(=\)







\(\ds c^2 + m d^2\)





Basis for the Induction: for some $c, d \in \Z$




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore, for all $n \in \Z_{> 0}$:

$\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + m {b_j}^2} = c^2 + m d^2$
for some $c, d \in \Z$.
$\blacksquare$





