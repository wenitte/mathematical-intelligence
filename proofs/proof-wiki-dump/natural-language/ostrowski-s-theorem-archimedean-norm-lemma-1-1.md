# 

Source: https://proofwiki.org/wiki/Ostrowski%27s_Theorem/Archimedean_Norm/Lemma_1.1

Theorem
Let $\norm {\, \cdot \,}$ be a non-trivial Archimedean norm on the rational numbers $\Q$.
Let $n_0 = \min \set {n \in \N : \norm n > 1}$
Let $\alpha = \dfrac {\log \norm {n_0} } {\log n_0 }$
Then:

$\forall n \in N: \norm n \le n^\alpha$


Proof
By the definition of $\alpha$ then:

$\norm {n_0} = {n_0}^\alpha$
By the definition of $n_0$ then:

${n_0}^\alpha > 1$

Let $n \in \N$.
By Basis Representation Theorem then $n$ can be written:

$n = a_0 + a_1 n_0 + a_2 {n_0}^2 + \cdots + a_s {n_0}^s$
where $0 \le a_i < n_0$ and $a_s \ne 0$
Since all of the $a_i < n_0$, by choice of $n_0$ then:

$\forall a_i: \norm {a_i} \le 1$

Then:














\(\ds \norm n\)

\(\le\)







\(\ds \norm {a_0} + \norm {a_1 n_0} + \norm {a_2 {n_0}^2} + \cdots + \norm {a_s {n_0}^s}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \norm {a_0} + \norm {a_1} \norm {n_0} + \norm {a_2} \norm {n_0}^2 + \cdots + \norm {a_s} \norm {n_0}^s\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \norm {a_0} + \norm {a_1} n_0^\alpha + \norm {a_2} {n_0}^{2 \alpha} + \cdots + \norm {a_s} {n_0}^{s\alpha}\)





as $\norm {n_0} = {n_0}^\alpha$














\(\ds \)

\(\le\)







\(\ds 1 + {n_0}^\alpha + {n_0}^{2 \alpha} + \cdots + {n_0}^{s \alpha}\)





as $\forall a_i: \norm {a_i} \le 1$














\(\ds \)

\(=\)







\(\ds n_0^{s \alpha} \paren {1 + {n_0}^{-\alpha} + {n_0}^{-2 \alpha} + \cdots + {n_0}^{-s \alpha} }\)




















\(\ds \)

\(\le\)







\(\ds {n_0}^{s \alpha} \paren {\sum_{i \mathop = 0}^\infty \paren {\frac 1 { {n_0}^\alpha} }^i}\)




















\(\ds \)

\(=\)







\(\ds {n_0}^{s \alpha} \paren {\dfrac { {n_0}^\alpha} { {n_0}^\alpha - 1} }\)





Sum of Infinite Geometric Progression (and as ${n_0}^\alpha > 1$)














\(\ds \)

\(\le\)







\(\ds n^\alpha \paren {\dfrac { {n_0}^\alpha} { {n_0}^\alpha - 1} }\)





as $n \ge {n_0}^s$




Let $C = \paren {\dfrac { {n_0}^\alpha} { {n_0}^\alpha - 1} }$
Hence:

$\norm n \le C n^\alpha$
As $n \in \N$ was arbitrary:

$\forall n \in N: \norm n \le C n^\alpha$

Let $n, N \in N$
Then:

$\norm {n^N} \le C \paren {n^N}^\alpha$
Now:














\(\ds \norm {n^N} \le C \paren {n^N}^\alpha\)

\(\leadsto\)







\(\ds \norm n^N \le C \paren {n^N}^\alpha\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(\leadsto\)







\(\ds \norm n^N \le C \paren {n^\alpha}^N\)




















\(\ds \)

\(\leadsto\)







\(\ds \norm n \le \sqrt [N] C n^\alpha\)





taking $N$th roots




By Limit of Root of Positive Real Number:

$\sqrt [N] C \to 1$ as $N \to \infty$
By the Multiple Rule for Real Sequences:

$\sqrt [N] C n^\alpha \to n^\alpha$ as $N \to \infty$
By Inequality Rule for Real Sequences, letting $N \to \infty$ for fixed $n$:

$\norm n \le n^\alpha$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.1$ Absolute Values on $\Q$, Theorem $3.1.3$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.9$ Metrics and norms on the rational numbers. Ostrowski’s Theorem, Theorem $1.50$




