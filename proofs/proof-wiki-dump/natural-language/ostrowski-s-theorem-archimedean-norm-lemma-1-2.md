# 

Source: https://proofwiki.org/wiki/Ostrowski%27s_Theorem/Archimedean_Norm/Lemma_1.2

Theorem
Let $\norm {\, \cdot \,}$ be a non-trivial Archimedean norm on the rational numbers $\Q$.
Let $n_0 = \min \set {n \in \N : \norm n > 1}$
Let $\alpha = \dfrac {\log \norm {n_0} } {\log n_0}$
Then:

$\forall n \in N: \norm n \ge n^\alpha$


Proof
By the definition of $\alpha$:

$\norm {n_0} = {n_0}^\alpha$
By the definition of $n_0$:

${n_0}^\alpha > 1$

Let $n \in \N$.
By Basis Representation Theorem then $n$ can be written:

$n = a_0 + a_1 n_0 + a_2 {n_0}^2 + \cdots + a_s {n_0}^s$
where $0 \le a_i < n_0$ and $a_s \ne 0$
By Bounds for Integer Expressed in Base k:

${n_0}^{s + 1} > n \ge {n_0}^s$

By Lemma 1.1:

$\norm { {n_0}^{s + 1} - n} \le \paren { {n_0}^{s + 1} - n}^\alpha$
Hence:














\(\ds \norm n\)

\(\ge\)







\(\ds \norm { {n_0}^{s + 1} } - \norm { {n_0}^{s + 1} - n}\)





Reverse Triangle Inequality on Normed Division Ring














\(\ds \)

\(=\)







\(\ds \norm {n_0}^{s + 1} - \norm { {n_0}^{s + 1} - n}\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds {n_0}^{\alpha \paren {s + 1} } - \norm { {n_0}^{s + 1} - n}\)





as $\norm {n_0} = {n_0}^\alpha$














\(\ds \)

\(\ge\)







\(\ds {n_0}^{\alpha \paren {s + 1} } - \paren { {n_0}^{s + 1} - n}^\alpha\)





as $\norm { {n_0}^{s + 1} - n} \le \paren { {n_0}^{s + 1} - n}^\alpha$














\(\ds \)

\(\ge\)







\(\ds {n_0}^{\alpha \paren {s + 1} } - \paren { {n_0}^{s + 1} - {n_0}^s}^\alpha\)





as $n \ge n_0^s$














\(\ds \)

\(=\)







\(\ds {n_0}^{\alpha \paren {s + 1} } \paren {1 - \paren {1 - \frac 1 {n_0} }^\alpha}\)




















\(\ds \)

\(\ge\)







\(\ds n^\alpha \paren {1 - \paren {1 - \frac 1 {n_0} }^\alpha}\)





as ${n_0}^{s + 1} > n$




Let $C' = \paren{1 - \paren{1 - \frac 1 {n_0} }^\alpha}$.
Then:

$\norm n \ge C' n^\alpha$
As $n \in \N$ was arbitrary:

$\forall n \in N: \norm n \ge C' n^\alpha$

Let $n, N \in N$.
Then:

$\norm {n^N} \ge C' \paren {n^N}^\alpha$
Now:














\(\ds \norm {n^N} \ge C' \paren {n^N}^\alpha\)

\(\leadsto\)







\(\ds \norm n^N \ge C' \paren {n^N}^\alpha\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(\leadsto\)







\(\ds \norm n^N \ge C' \paren {n^\alpha}^N\)




















\(\ds \)

\(\leadsto\)







\(\ds \norm n \ge \sqrt [N] {C'} n^\alpha\)





taking $N$th roots




By Limit of Root of Positive Real Number:

$\sqrt [N] {C'} \to 1$ as $N \to \infty$
By the Multiple Rule for Real Sequences:

$\sqrt [N] {C'} n^\alpha \to n^\alpha$ as $N \to \infty$
By Inequality Rule for Real Sequences, letting $N \to \infty$ for fixed $n$:

$\norm n \ge n^\alpha$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.1$ Absolute Values on $\Q$, Theorem $3.1.3$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.9$ Metrics and norms on the rational numbers. Ostrowski’s Theorem, Theorem $1.50$




