# 

Source: https://proofwiki.org/wiki/Egorov%27s_Theorem



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $D \in \Sigma$ be such that $\map \mu D < +\infty$.
Let $\sequence {f_n}_{n \mathop \in \N}, f_n: D \to \R$ be a sequence of $\Sigma$-measurable functions.
Suppose that $f_n$ converges a.e. to $f$, for some $\Sigma$-measurable function $f: D \to \R$.

Then $f_n$ converges a.u. to $f$.


Proof
Let $\epsilon \in \R_{>0}$ be arbitrary.
By definition of convergence a.e., there is a set $E \in \Sigma$ such that $E \subseteq D$, $\map \mu E = 0$ and:

$\ds \lim_{n \mathop \to \infty} \map {f_n} x = \map f x$
for each $x \in A$ where $A = D \setminus E$ is the set difference of $D$ with $E$.

For all $n, k \in \N$, define $A_{n, k}$ by:

$A_{n, k} = \set {x \in A: \size {\map {f_n} x - \map f x} \ge \dfrac 1 k}$
Also, define $B_{n, k}$ by:

$B_{n, k} = \ds \bigcup_{i \mathop = n}^\infty A_{i, k}$

Since $f_n$ converges pointwise to $f$ on $A$, it follows by definition of convergence that for each $x \in A$ and $k \in \N$:

$\size {\map {f_i} x - \map f x} < \dfrac 1 k$
for all $i \in \N$ sufficiently large.
Thus, when $k$ is fixed, no element of $A$ belongs to $A_{n, k}$ for infinitely many $n$. 
Hence, by Definition 2 of Limit Superior of Sequence of Sets:

$\ds \limsup_{n \mathop \to \infty} A_{n, k} = \O$

So we have:














\(\ds 0\)

\(=\)







\(\ds \map \mu \O\)





Measure of Empty Set is Zero














\(\ds \)

\(=\)







\(\ds \map \mu {\limsup_{n \mathop \to \infty} A_{n, k} }\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\bigcap_{n \mathop = 0}^\infty B_{n, k} }\)





Definition of Limit Superior of Sequence of Sets














\(\ds \)

\(=\)







\(\ds \map \mu {\limsup_{n \mathop \to \infty} B_{n, k} }\)





Definition 2 of Limit Superior of Sequence of Sets














\(\ds \)

\(=\)







\(\ds \map \mu {\lim_{n \mathop \to \infty} B_{n, k} }\)





since $B_{n, k}$ is a decreasing sequence of sets














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \mu {B_{n, k} }\)





since $B_{n, k} \subseteq D$, $\map \mu D < \infty$ and by Continuity of Measure




This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article contains statements that are justified by handwavery.In particular: last two linesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus, since $k$ was arbitrary, we can associate some $n_k \in N$ with each $k$ such that $\map \mu {B_{n_k, k} } < \dfrac \epsilon {2^{k + 1} }$.
Setting $B = \ds \bigcup_{k \mathop \in \N} B_{n_k, k}$, we have:

$\ds \map \mu B \le \sum_{k \mathop \in \N} \map \mu { B_{n_k, k} } < \sum_{k \mathop \in \N} \frac \epsilon {2^{k + 1} } = \epsilon$
by the countable additivity of $\mu$ and by Sum of Infinite Geometric Sequence.

Also, given any $k$, we have that $x \in A \setminus B$ implies $x \notin B_{n_k, k}$, which means:

$\size {\map {f_i} x - \map f x} < \dfrac 1 k$
for all $i \ge n_k$.
Since this is true for all $x \in A \setminus B$, it follows that $f_n$ converges to $f$ uniformly on $A \setminus B$.

Finally, note that $A \setminus B = D \setminus \paren {E \cup B}$, and:

$\map \mu {E \cup B} \le \map \mu B + \map \mu E = \map \mu B + 0 < \epsilon$
Since $\epsilon$ was arbitrary, it follows that:

$\map \mu {E \cup B} = 0$
Hence $f_n$ converges to $f$ almost uniformly.
$\blacksquare$


Also see
Convergence a.u. Implies Convergence a.e., of which Egorov's theorem is a partial converse.


Source of Name
This entry was named for Dmitri Fyodorovich Egorov.





