# 

Source: https://proofwiki.org/wiki/Membership_of_Equivalence_Class_of_m_mod_pi_is_Replicative_Function

Theorem
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \sqbrk {\exists r \in \Q, \exists m \in \Z: x = r \pi + m}$
where $\sqbrk {\cdots}$ is Iverson's convention.

Then $f$ is a replicative function.


Proof
Let $\map f x = 1$.
Then:

$\exists r \in \Q, \exists m \in \Z: x = r \pi + m$
and:














\(\ds x\)

\(=\)







\(\ds r \pi + m\)














\(\ds \leadsto \ \ \)





\(\ds n x\)

\(=\)







\(\ds \paren {r n} \pi + m n\)









But $r n \in \Q$ and $m n \in \Z$.
So:

$\map f x = 1 \implies \map f {n x} = 1$

Let $n \in \Z_{>0}$.
Let $k \in \Z: 0 \le k < n$.
Then:














\(\ds x + \frac k n\)

\(=\)







\(\ds r \pi + m + \frac k n\)














\(\ds \leadsto \ \ \)





\(\ds x + \frac k n\)

\(=\)







\(\ds \paren {r + \frac {k \pi} n} \pi + m\)









Thus, when $0 \le k < n$ it follows that the coefficient of $\pi$ cannot be rational.
Thus:

$\map f x = 1 \implies \map f {x + \dfrac k n} = 0$
and so:

$\ds \sum_{k \mathop = 0}^{n - 1} \map f {x + \frac k n} = \map f {n x}$
$\Box$

Now let $\map f {n x} = 1$.
Then:

$r_n \pi + m_n = n x$
for some rational $r_n$ and integer $m_n$.
Thus exactly one of $m_n + k$ where $0 \le n < k$ is a multiple of $n$.
Therefore there exists exactly one $k \in \Z$ such that $0 \le n < k$ such that:

$\map f {x + \dfrac k n} = 1$
Therefore:

$\ds \sum_{k \mathop = 0}^{n - 1} \map f {x + \frac k n} = 1 = \map f {n x}$

Hence the result by definition of replicative function.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $39 \ \text{d)}$




