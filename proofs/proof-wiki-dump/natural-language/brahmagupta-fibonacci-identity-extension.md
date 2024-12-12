# 

Source: https://proofwiki.org/wiki/Brahmagupta-Fibonacci_Identity/Extension



Extension to Brahmagupta-Fibonacci Identity
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n$ be integers.
Then:

$\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + {b_j}^2} = c^2 + d^2$
where $c, d \in \Z$.
That is: the product of any number of sums of two squares is also a sum of two squares.


General Version
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n, m$ be integers.
Then:

$\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + m {b_j}^2} = c^2 + m d^2$
for some $c, d \in \Z$.
That is: the set of all integers of the form $a^2 + m b^2$ is closed under multiplication.


Proof 1
From the extension to the general Brahmagupta-Fibonacci Identity:

$\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + m {b_j}^2} = c^2 + m d^2$
for some $c, d \in \Z$, for all $m \in \Z$.
The result follows by setting $m = 1$.
$\blacksquare$


Proof 2
The proof proceeds by induction.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + {b_j}^2} = c^2 + d^2$
for some $c, d \in \Z$.

$\map P 1$ is the trivial case:














\(\ds \prod_{j \mathop = 1}^1 \paren { {a_j}^2 + {b_j}^2}\)

\(=\)







\(\ds {a_1}^2 + {b_1}^2\)




















\(\ds \)

\(=\)







\(\ds c^2 + d^2\)





setting $c = a_1$ and $d = b_1$



Thus $\map P 1$ is seen to hold.


Basis for the Induction
$\map P 2$ is the case:














\(\ds \prod_{j \mathop = 1}^2 \paren { {a_j}^2 + {b_j}^2}\)

\(=\)







\(\ds \paren { {a_1}^2 + {b_1}^2} \paren { {a_2}^2 + {b_2}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_1 a_2 + b_1 b_2}^2 + \paren {a_1 b_2 - b_1 a_2}^2\)





Brahmagupta-Fibonacci Identity














\(\ds \)

\(=\)







\(\ds c^2 + d^2\)





setting $c = a_1 a_2 + b_1 b_2$ and $d = a_1 b_2 - b_1 a_2$



Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \prod_{j \mathop = 1}^k \paren { {a_j}^2 + {b_j}^2} = c^2 + d^2$
for some $c, d \in \Z$.

from which it is to be shown that:

$\ds \prod_{j \mathop = 1}^{k + 1} \paren { {a_j}^2 + {b_j}^2} = c^2 + d^2$
for some $c, d \in \Z$.


Induction Step
This is the induction step:















\(\ds \prod_{j \mathop = 1}^{k + 1} \paren { {a_j}^2 + {b_j}^2}\)

\(=\)







\(\ds \prod_{j \mathop = 1}^k \paren { {a_j}^2 + {b_j}^2} \paren { {a_{k + 1} }^2 + {b_{k + 1} }^2}\)




















\(\ds \)

\(=\)







\(\ds \paren { {c'}^2 + {d'}^2} \paren { {a_{k + 1} }^2 + {b_{k + 1} }^2}\)





Induction Hypothesis: for some $c', d' \in \Z$














\(\ds \)

\(=\)







\(\ds c^2 + m d^2\)





Basis for the Induction: for some $c, d \in \Z$




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore, for all $n \in \Z_{>0}$:

$\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + {b_j}^2} = c^2 + d^2$
for some $c, d \in \Z$.
$\blacksquare$


Proof 3
Let $z_j = a_j + i b_j$ for each $j = 1, 2, \ldots, n$.
Let $\ds c + i d = \prod_{j \mathop = 1}^n z_j$.
Then:














\(\ds c + i d\)

\(=\)







\(\ds \prod_{j \mathop = 1}^n z_j\)




















\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^n \paren {a_j + i b_j}\)










As $a_1, a_2, \ldots, a_n$ and $b_1, b_2, \ldots, b_n$ are integers, so are $c$ and $d$.

Thus:














\(\ds c^2 + d^2\)

\(=\)







\(\ds \cmod {c + i d}^2\)





Definition of Complex Modulus














\(\ds \)

\(=\)







\(\ds \cmod {\prod_{j \mathop = 1}^n z_j}^2\)





$\ds c + i d = \prod_{j \mathop = 1}^n z_j$














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^n \cmod {z_j}^2\)





Complex Modulus of Product of Complex Numbers: General Result














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^n \cmod {a_j + i b_j}^2\)





$z_j = a_j + i b_j$














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + {b_j}^2}\)





Definition of Complex Modulus



$\blacksquare$





