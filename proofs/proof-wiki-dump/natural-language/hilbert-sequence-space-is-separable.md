# 

Source: https://proofwiki.org/wiki/Hilbert_Sequence_Space_is_Separable

Theorem
Let $A$ be the set of all real sequences $\sequence {x_i}$ such that the series $\ds \sum_{i \mathop \ge 0} x_i^2$ is convergent.
Let $\ell^2 = \struct {A, d_2}$ be the Hilbert sequence space on $\R$.

Then $\ell^2$ is a separable space.


Proof
Consider the set $H$ of all points of $\ell^2$ which have finitely many rational coordinates and all the rest zero.
$H$ is countable, since

Rational Numbers are Countably Infinite
Cartesian Product of Countable Sets is Countable
Countable Union of Countable Sets is Countable
It remains to show that $H$ is everywhere dense in $\ell^2$.
Indeed, the result then follows by definition of separable space.

To this end, let $\sequence {x_i} \in \ell^2$.
For each $n \in \N$, define $\sequence {q^{\paren n} _i} \in H$ by:

$q^{\paren n} _i :=
\begin {cases} \frac {\floor {2^{n+i} x} }{2^{n+i} } & : i < n
\\ 0 & : i \ge n \end{cases}$
where $\floor \cdot$ denotes the floor function.
Then, we have:














\(\ds \map {d_2} { \sequence {x_i} , \sequence {q^{\paren n} _i} } ^2\)

\(=\)







\(\ds \sum_{i \mathop \ge 0} \paren {x_i - q^{\paren n} _i}^2\)





Definition of Hilbert Sequence Space














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{n-1} \paren {x_i - \frac {\floor {2^{n+i} x} }{2^{n+i} }  }^2 + \sum_{i \mathop \ge n} x_i ^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{n-1} \paren {\frac {2^{n+i}x - \floor {2^{n+i} x} }{2^{n+i} }  }^2 + \sum_{i \mathop \ge n} x_i ^2\)




















\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 0}^{n-1} \paren {\frac 1 {2^{n+i} }  }^2 + \sum_{i \mathop \ge n} x_i ^2\)





in view of Definition of Floor Function














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop \ge 0} \paren {\frac 1 {2^{n+i} }  }^2 + \sum_{i \mathop \ge n} x_i ^2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {4^n} \sum_{i \mathop \ge 0} \frac 1 {4^i} + \sum_{i \mathop \ge n} x_i ^2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {4^n} \cdot \frac 4 3 + \sum_{i \mathop \ge n} x_i ^2\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(\to\)







\(\ds 0\)





as $n \to \infty$, since Tail of Convergent Series tends to Zero



$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $36$. Hilbert Space: $2$




