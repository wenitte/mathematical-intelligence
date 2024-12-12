# 

Source: https://proofwiki.org/wiki/Derivative_of_Natural_Logarithm_Function/Proof_4/Lemma

Theorem
Let $\sequence {f_n}_n$ be the sequence of real functions $f_n: \R_{>0} \to \R$ defined as:

$\map {f_n} x = n \paren {\sqrt [n] x - 1}$
Let $k \in \N$.
Let $J = \closedint {\dfrac 1 k} k$.

Then the sequence of derivatives $\sequence { {f_n}'}_n$ converges uniformly to some real function $g: J \to \R$.


Proof
From Derivative of $n$th Root and Combination Theorem for Sequences:

$\forall n \in \N: \forall x \in J : D_x \map {f_n} x = \dfrac {\sqrt [n] x} x$
From Closed Bounded Subset of Real Numbers is Compact, $J$ is compact.

Thus:














\(\ds \lim_{n \mathop \to \infty} D_x \map {f_n} x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \dfrac {\sqrt [n] x} x\)





from above














\(\ds \)

\(=\)







\(\ds \frac 1 x \lim_{n \mathop \to \infty} \sqrt [n] x\)





Multiple Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \frac 1 x \lim_{n \mathop \to \infty} x^{1/n}\)





Definition of $n$th Root














\(\ds \)

\(=\)







\(\ds \frac 1 x\)





Power Function tends to One as Power tends to Zero: Rational Number



In particular, $\sequence { {f_n}'}_n$ is pointwise convergent to a continuous function on $J$.

For $x \in \closedint {\frac 1 k} 1$:














\(\ds x^{1/n}\)

\(\le\)







\(\ds x^{1 / \paren {n + 1} }\)





Exponential is Monotonic: Rational Number








\(\ds \leadsto \ \ \)





\(\ds \sqrt [n] x\)

\(\le\)







\(\ds \sqrt [n + 1] x\)





Definition of $n$th Root








\(\ds \leadsto \ \ \)





\(\ds \frac {\sqrt [n] x} x\)

\(\le\)







\(\ds \frac {\sqrt [n + 1] x} x\)





Real Number Ordering is Compatible with Multiplication



So $\sequence {\map { {f_n}'} x}_n$ is increasing when $x \in \closedint {\dfrac 1 k} 1$.

For $x \in \closedint 1 k$:














\(\ds x^{1/n}\)

\(\ge\)







\(\ds x^{1 / \paren {n + 1} }\)





Exponential is Monotonic: Rational Number








\(\ds \leadsto \ \ \)





\(\ds \sqrt [n] x\)

\(\ge\)







\(\ds \sqrt [n + 1] x\)





Definition of $n$th Root








\(\ds \leadsto \ \ \)





\(\ds \frac {\sqrt [n] x} x\)

\(\ge\)







\(\ds \frac {\sqrt [n + 1] x} x\)





Real Number Ordering is Compatible with Multiplication



So $\sequence {\map { {f_n}'} x}_n$ is decreasing when $x \in \closedint {\dfrac 1 k} 1$.

Thus $\sequence {\map { {f_n}'} x}_n$ is monotone for all $x \in \closedint {\frac 1 k} 1 \cup \closedint 1 k = J$.
From Dini's Theorem, $\sequence { {f_n}'}_n$ converges uniformly to $\dfrac 1 x$ on $J$.
Hence the result.
$\blacksquare$





