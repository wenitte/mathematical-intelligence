# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Generalized_Sum_Converges

Theorem
Let $V$ be a Banach space.
Let $\norm {\, \cdot \,}$ denote the norm on $V$.
Let $d$ denote the corresponding induced metric.
Let $\family {v_i}_{i \mathop \in I}$ be an indexed subset of $V$ such that the generalized sum $\ds \sum \set {v_i: i \in I }$ converges absolutely.

Then the generalized sum $\ds \sum \set {v_i: i \in I}$ converges.


Proof
The proof proceeds in two stages:

$(1): \quad$ Finding a candidate $v \in V$ where the sum might converge to
$(2): \quad$ Showing that the candidate is indeed sought limit.

That $\ds \sum \set {v_i: i \mathop \in I}$ converges absolutely means that $\ds \sum \set {\norm {v_i}: i \mathop \in I}$ converges.
Now, for all $n \in \N$, let $F_n \subseteq I$ be finite such that:

$\ds \sum_{i \mathop \in G} \norm {v_i} > \sum \set {\norm {v_i}: i \mathop \in I} - 2^{-n}$
for all finite $G$ with $F_n \subseteq G \subseteq I$
It may be arranged that $n \ge m \implies F_m \subseteq F_n$ by passing over to $\ds F'_n = \bigcup_{m \mathop = 1}^n F_m$ if necessary.
Define:

$\ds v_n = \sum_{i \mathop \in F_n} v_i$
Next, it is to be shown that the sequence $\sequence {v_n}_{n \mathop \in \N}$ is Cauchy.

So let $\epsilon > 0$, and let $N \in \N$ be such that $2^{-N} < \epsilon$.
Then for $m \ge n \ge N$, have:














\(\ds \map d {v_m, v_n}\)

\(=\)







\(\ds \norm {\paren {\sum_{i \mathop \in F_m} v_i} - \paren {\sum_{i \mathop \in F_n} v_i} }\)





Definition of Metric Induced by Norm














\(\ds \)

\(=\)







\(\ds \norm {\sum_{i \mathop \in F_m \setminus F_n} v_i}\)





$F_n \subseteq F_m$














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop \in F_m \setminus F_n} \norm {v_i}\)





Triangle Inequality for $\norm {\, \cdot \,}$




Now to estimate this last quantity, observe:














\(\ds \sum \set {\norm {v_i}: i \mathop \in I} - 2^{-n} + \sum_{i \mathop \in F_m \setminus F_n} \norm {v_i}\)

\(<\)







\(\ds \sum_{i \mathop \in F_n} \norm {v_i} + \sum_{i \mathop \in F_m \setminus F_n} \norm {v_i}\)





Defining property of $F_n$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in F_m} \norm {v_i}\)





Union with Relative Complement, $F_n \subseteq F_m$














\(\ds \)

\(\le\)







\(\ds \sum \set {\norm {v_i}: i \mathop \in I}\)





Generalized Sum is Monotone








\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop \in F_m \setminus F_n} \norm {v_i}\)

\(<\)







\(\ds 2^{-n}\)










Finally, by the defining property of $N$, as $n \ge N:

2^{-n} < 2^{-N} < \epsilon$
Combining all of these estimates leads to the conclusion that:

$\map d {v_m, v_n} < \epsilon$
It follows that $\sequence {v_n}_{n \mathop \in \N}$ is a Cauchy sequence.
As $V$ is a Banach space:

$\ds \exists v \in V: \lim_{n \mathop \to \infty} v_n = v$

Having identified a candidate $v$ for the sum $\ds \sum \set {v_i: i \in I}$ to converge to, it remains to verify that this is indeed the case.

According to the definition of considered sum, the convergence is convergence of a net.
Next, Metric Induces Topology ensures that we can limit the choice of opens $U$ containing $v$ to open balls centered at $v$.
Now let $\epsilon > 0$.
We want to find a finite $F \subseteq I$ such that:

$\map d {\ds \sum_{i \mathop \in G} v_i, v} < \epsilon$
for all finite $G$ with $F \subseteq G \subseteq I$.

Now let $N \in \N$ such that:

$\forall n \ge N: \map d {v_n, v} < \dfrac \epsilon 2$
with the $v_n$ as above.
By taking a larger $N$ if necessary, ensure that $2^{-N} < \dfrac \epsilon 2$ holds as well.
Let us verify that the set $F_N$ defined above has sought properties.
So let $G$ be finite with $F_N \subseteq G \subseteq I$.
Then:














\(\ds \map d {\sum_{i \mathop \in G} v_i, v}\)

\(=\)







\(\ds \norm {\paren {\sum_{i \mathop \in G} v_i} - v}\)





Definition of Metric Induced by Norm














\(\ds \)

\(\le\)







\(\ds \norm {\paren {\sum_{i \mathop \in G} v_i} - \paren {\sum_{i \mathop \in F_N} v_i} } + \norm {\paren {\sum_{i \mathop \in F_N} v_i} - v}\)





Triangle inequality for $\norm {\, \cdot \,}$














\(\ds \)

\(<\)







\(\ds \norm {\sum_{i \mathop \in G \setminus F_N} v_i} + \frac \epsilon 2\)





$F_N \subseteq G$, defining property of $N$














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop \in G \setminus F_N} \norm {v_i} + \frac \epsilon 2\)





Triangle inequality for $\norm {\, \cdot \,}$




For the first of these terms, observe:














\(\ds \sum \set {\norm {v_i}: i \in I} - 2^{-N} + \sum_{i \mathop \in G \setminus F_N} \norm {v_i}\)

\(<\)







\(\ds \sum_{i \mathop \in F_N} \norm {v_i} + \sum_{i \mathop \in G \setminus F_N} \norm {v_i}\)





defining property of $F_N$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in G} \norm {v_i}\)





Union with Relative Complement, $F_N \subseteq G$














\(\ds \)

\(\le\)







\(\ds \sum \set {\norm {v_i}: i \in I}\)





Generalized Sum is Monotone








\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop \in G \setminus F_N} \norm {v_i}\)

\(<\)







\(\ds 2^{-N}\)










Using that $2^{-N} < \dfrac \epsilon 2$, combine these inequalities to obtain:

$\ds \map d {\sum_{i \mathop \in G} v_i, v} < \frac \epsilon 2 + \frac \epsilon 2 = \epsilon$

By definition of convergence of a net, it follows that:

$\ds \sum \set {v_i: i \in I} = v$
$\blacksquare$


Also see
Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach




