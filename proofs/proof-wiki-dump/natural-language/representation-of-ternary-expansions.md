# 

Source: https://proofwiki.org/wiki/Representation_of_Ternary_Expansions

Theorem
Let $x \in \R$ be a real number.
Let $x$ be represented in base $3$ notation.
While it may be possible for $x$ to have two different such representations, for example:

$\dfrac 1 3 = 0.100000 \ldots_3 = 0.022222 \ldots_3$
it is not possible for $x$ be written in more than one way without using the digit $1$.


Proof
It is sufficient to show that two distinct representations represents two distinct numbers.
Let $a$ and $b$ two real numbers representable as the form above.
Their signs are easy to distinguish, so we consider $\size a$ and $\size b$.
There is some $n$ such that:

$\size a, \size b < 3^n$
In that case, $\dfrac {\size a} {3^n}$ can be represented as:

$0.a_1 a_2 a_3 \ldots$
and $\dfrac {\size b} {3^n}$ can be represented as:

$0.b_1 b_2 b_3 \ldots$
where $a_i, b_i$ are either $0$ or $2$.

Let $N$ be the smallest integer such that $a_N \ne b_N$.
Without loss of generality assume that $a_N = 2$ and $b_N = 0$.
We have:














\(\ds \frac {\size a} {3^n}\)

\(=\)







\(\ds \sum_{j \mathop = 1}^\infty \frac {a_j} {3^j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{N - 1} \frac {a_j} {3^j} + \sum_{j \mathop = N}^\infty \frac {a_j} {3^j}\)




















\(\ds \)

\(\ge\)







\(\ds \sum_{j \mathop = 1}^{N - 1} \frac {a_j} {3^j} + \frac 2 {3^N}\)





because $a_N = 2$, $a_j \ge 0$














\(\ds \)

\(>\)







\(\ds \sum_{j \mathop = 1}^{N - 1} \frac {a_j} {3^j} + \frac 1 {3^N}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{N - 1} \frac {b_j} {3^j} + \sum_{j \mathop = N + 1}^\infty \frac 2 {3^j}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(\ge\)







\(\ds \sum_{j \mathop = 1}^{N - 1} \frac {b_j} {3^j} + \sum_{j \mathop = N}^\infty \frac {b_j} {3^j}\)





because $b_N = 0$, $b_j \le 2$














\(\ds \)

\(=\)







\(\ds \frac {\size b} {3^n}\)









and thus $\size a$ and $\size b$ are distinct.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $29$. The Cantor Set




