# 

Source: https://proofwiki.org/wiki/Membership_of_Set_of_Integers_is_Replicative_Function

Theorem
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \sqbrk {x \in \Z}$
where $\sqbrk {\cdots}$ is Iverson's convention.

Then $f$ is a replicative function.


Proof
First note that the interval between $x$ and $x + \dfrac {n - 1} n$ is less than $1$.
Thus there can be no more than one $k$ such that $0 \le k < n$ such that:

$x + \dfrac k n \in \Z$
Hence:

$\ds \sum_{k \mathop = 0}^{n - 1} \sqbrk {x + \frac k n \in \Z} \le 1$

First let:

$\ds \sum_{k \mathop = 0}^{n - 1} \sqbrk {x + \frac k n \in \Z} = 1$
Then:














\(\ds x + \frac k n\)

\(\in\)







\(\ds \Z\)














\(\ds \leadsto \ \ \)





\(\ds n \paren {x + \frac k n}\)

\(\in\)







\(\ds \Z\)














\(\ds \leadsto \ \ \)





\(\ds n x + k\)

\(\in\)







\(\ds \Z\)














\(\ds \leadsto \ \ \)





\(\ds n x\)

\(\in\)







\(\ds \Z\)














\(\ds \leadsto \ \ \)





\(\ds \sqbrk {n x \in \Z}\)

\(=\)







\(\ds 1\)









$\Box$

Let:

$\ds \sum_{k \mathop = 0}^{n - 1} \sqbrk {x + \frac k n \in \Z} = 0$
Aiming for a contradiction, suppose $\sqbrk {n x \in \Z} = 1$.
Then:














\(\ds n x\)

\(\in\)







\(\ds \Z\)














\(\ds \leadsto \ \ \)

\(\ds \forall k \in \Z: \, \)



\(\ds n x + k\)

\(\in\)







\(\ds \Z\)









But at least one $n x + k$ such that $0 \le k < n$ is a multiple of $n$.
Hence:

$\exists k \in \Z: 0 \le k < n: \sqbrk {x + \dfrac k n \in \Z} = 1$
So:

$\ds \sum_{k \mathop = 0}^{n - 1} \sqbrk {x + \frac k n \in \Z} = 1$
which contradicts the supposition that $\sqbrk {n x \in \Z} = 1$.

Hence the result by definition of replicative function.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $39 \ \text{b)}$




