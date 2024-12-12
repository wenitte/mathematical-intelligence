# 

Source: https://proofwiki.org/wiki/Generalized_Sum_Preserves_Inequality



Theorem
Let $\family {a_i}_{i \mathop \in I}, \family {b_i}_{i \mathop \in I}$ be $I$-indexed families of positive real numbers.
That is, let $a_i, b_i \in \R_{\ge 0}$ for all $i \in I$.
Suppose that for all $i \in I$, $a_i \le b_i$.
Furthermore, suppose that $\ds \sum \set {b_i: i \in I}$ converges.

Then:

$\ds \sum \set {a_i: i \in I} \le \sum \set {b_i: i \in I}$
In particular, $\ds \sum \set {a_i: i \in I}$ converges.


Proof
First, it is proven that $\ds \sum \set {a_i: i \in I}$ converges.
Then, the inequality $\ds \sum \set {a_i: i \in I} \le \sum \set {b_i: i \in I}$ is well-defined, and hence can be proven.


Proof of Convergence
For every $n \in \N$, let $F_n \subseteq I$ be finite such that:

$\ds \sum_{i \mathop \in G} b_i > \sum \set {b_i: i \in I} - 2^{-n}$ for all finite $G$ with $F_n \subseteq G \subseteq I$
By passing over to $\ds F'_n = \bigcup_{i \mathop = 1}^n F_i$ if necessary, it may be arranged that $F_n \subseteq F_m$ for $n \le m$.

Next, define the sequence $\sequence {a_n}_{n \mathop \in \N}$ by $a_n := \ds \sum_{i \mathop \in F_n} a_i$.
To show $\sequence {a_n}_{n \mathop \in \N}$ is a Cauchy sequence, let $\epsilon > 0$.
Subsequently let $N \in \N$ be such that $2^{-N} < \epsilon$, and let $m \ge n \ge N$. Then:














\(\ds \map d {a_m, a_n}\)

\(=\)







\(\ds \size {\paren {\sum_{i \mathop \in F_m} a_i} - \paren {\sum_{i \mathop \in F_n} a_i} }\)





Definition of Metric Induced by Norm














\(\ds \)

\(=\)







\(\ds \size {\sum_{i \mathop \in F_m \mathop \setminus F_n} a_i}\)





$F_n \subseteq F_m$














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop \in F_m \mathop \setminus F_n} b_i\)





$b_i \ge a_i \ge 0$ for all $i \in I$




Now to estimate this last quantity, observe:














\(\ds \sum \set {b_i : i \in I} - 2^{-n} + \sum_{i \mathop \in F_m \mathop \setminus F_n} b_i\)

\(<\)







\(\ds \sum_{i \mathop \in F_n} b_i + \sum_{i \mathop \in F_m \mathop \setminus F_n} b_i\)





Definition of $F_n$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in F_m} b_i\)





Union with Relative Complement, $F_n \subseteq F_m$














\(\ds \)

\(\le\)







\(\ds \sum \set {b_i : i \in I}\)





Generalized Sum is Monotone








\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop \in F_m \mathop \setminus F_n} b_i\)

\(<\)







\(\ds 2^{-n}\)










Finally, as $n \ge N, 2^{-n} < 2^{-N} < \epsilon$ (by defining property of $N$).
Combining all of these estimates leads to the conclusion that $\map d {a_m, a_n} < \epsilon$.
It follows that $\sequence {a_n}_{n \mathop \in \N}$ is a Cauchy sequence.
By Real Number Line is Complete Metric Space, this implies there exists an $a \in \R$ such that $\ds \lim_{n \mathop \to \infty} a_n = a$.

Having identified a candidate $a$ for the sum $\ds \sum \set {a_i: i \in I}$ to converge to, it remains to verify that this is indeed the case.

According to the definition of considered sum, the convergence is convergence of a net.
Next, Metric Induces Topology ensures that we can limit the choice of opens $U$ containing $a$ to open balls centered at $a$.
Now let $\epsilon > 0$.
We want to find a finite $F \subseteq I$ such that:

$\map d {\ds \sum_{i \mathop \in G} a_i, a} < \epsilon$, for all finite $G$ with $F \subseteq G \subseteq I$

Now let $N \in \N$ such that for all $n \ge N$, $\map d {v_n, v} < \dfrac \epsilon 2$ (with the $v_n$ as above).
By taking a larger $N$ if necessary, ensure that $2^{-N} < \dfrac \epsilon 2$ holds as well.
Let us verify that the set $F_N$ defined above has the sought properties.
So let $G$ be finite with $F_N \subseteq G \subseteq I$. Then:














\(\ds \map d {\sum_{i \mathop \in G} a_i, a}\)

\(=\)







\(\ds \size {\paren {\sum_{i \mathop \in G} a_i} - a}\)





Definition of Metric Induced by Norm














\(\ds \)

\(\le\)







\(\ds \size {\paren {\sum_{i \mathop \in G} a_i} - \paren {\sum_{i \mathop \in F_N} a_i} } + \size {\paren {\sum_{i \mathop \in F_N} a_i} - a}\)





Triangle Inequality














\(\ds \)

\(<\)







\(\ds \size {\sum_{i \mathop \in G \mathop \setminus F_N} a_i} + \frac \epsilon 2\)





$F_N \subseteq G$, defining property of $N$














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop \in G \mathop \setminus F_N} b_i + \frac \epsilon 2\)





$b_i \ge a_i \ge 0$ for all $i \in I$




For the first of these terms, observe:














\(\ds \sum \set {b_i: i \in I} - 2^{-N} + \sum_{i \mathop \in G \mathop \setminus F_N} b_i\)

\(<\)







\(\ds \sum_{i \mathop \in F_N} b_i + \sum_{i \mathop \in G \mathop \setminus F_N} b_i\)





Defining property of $F_N$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in G} b_i\)





Union with Relative Complement, $F_N \subseteq G$














\(\ds \)

\(\le\)







\(\ds \sum \set {b_i: i \in I}\)





Generalized Sum is Monotone








\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop \in G \mathop \setminus F_N} b_i\)

\(<\)







\(\ds 2^{-N}\)










Using that $2^{-N} < \dfrac \epsilon 2$, combine these inequalities to obtain:

$\ds \map d {\sum_{i \mathop \in G} a_i, a} < \frac \epsilon 2 + \frac \epsilon 2 = \epsilon$

By definition of convergence of a net, it follows that:

$\ds \sum \set {a_i: i \in I} = a$
$\Box$


Proof of Inequality
Aiming for a contradiction, suppose $\ds \sum \set {a_i: i \in I} > \sum \set {b_i: i \in I}$.
Then, as the sums converge, there exists a finite $F \subseteq I$ such that:

$\ds \sum_{i \mathop \in F} a_i > \sum \set {a_i: i \in I} - \epsilon$
for every $\epsilon > 0$. 
So by picking a suitable $\epsilon$, it may be arranged that:














\(\ds \sum \set { b_i: i \in I}\)

\(<\)







\(\ds \sum \set {a_i: i \in I} - \epsilon\)




















\(\ds \)

\(<\)







\(\ds \sum_{i \mathop \in F} a_i\)





Defining property of $F$














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop \in F} b_i\)





$a_i \le b_i$ for all $i$














\(\ds \)

\(\le\)







\(\ds \sum \set {b_i: i \in I}\)





Generalized Sum is Monotone




These inequalities together constitute a contradiction, and therefore:

$\ds \sum \set {a_i: i \in I} \le \sum \set {b_i: i \in I}$
$\blacksquare$





