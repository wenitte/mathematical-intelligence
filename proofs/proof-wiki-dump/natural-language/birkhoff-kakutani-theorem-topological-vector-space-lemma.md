# 

Source: https://proofwiki.org/wiki/Birkhoff-Kakutani_Theorem/Topological_Vector_Space/Lemma



Lemma
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \tau}$ be a first-countable Hausdorff topological vector space over $\GF$.
Let $D$ be the set of real numbers with a terminating binary notation.
Let $\sequence {V_n}_{n \mathop \in \N}$ be a local basis of ${\mathbf 0}_X$ such that:

$V_{n + 1} + V_{n + 1} \subseteq V_n$ for each $n \in \N$.
For $r \ge 1$, set $\map A r = X$. 
For $r \in D$, set:

$\ds \map A r = \sum_{j \mathop = 1}^\infty \map {c_j} r V_j$
where $\ds \sum_{j \mathop = 1}^\infty$ denotes linear combination.
Let $r, s \in D$ be such that $r + s < 1$.

Then:

$\map A r + \map A s \subseteq \map A {r + s}$


Proof
Proof by induction:
For all $m \in \N$, let $\map P m$ be the proposition:

if $\map {c_n} r = \map {c_n} s = 0$ for $n > m$, then:
$\map A r + \map A s \subseteq \map A {r + s}$


Basis for the Induction
We prove $\map P 1$.
If $\map {c_n} r = \map {c_n} s = 0$ for $n > 1$, then:

$r \in \set {0, 2^{-1} }$ and $s \in \set {0, 2^{-1} }$.
Since we have also imposed $r + s < 1$, we have $\set {r, s} = \set {0, 2^{-1} }$.
Then, we have $r + s = 2^{-1}$ and so: 

$\map A r + \map A s = 2^{-1} V_1 = \map A {2^{-1} } = \map A {r + s}$
So we have shown that $\map P 1$ holds. 
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P N$ is true, where $N \ge 1$, then it logically follows that $\map P {N + 1}$ is true.
So this is our induction hypothesis:

if $\map {c_n} r = \map {c_n} s = 0$ for $n > N$, we have:
$\map A r + \map A s = \map A {r + s}$

Then we need to show:

if $\map {c_n} r = \map {c_n} s = 0$ for $n > N + 1$, we have:
$\map A r + \map A s = \map A {r + s}$


Induction Step
This is our induction step.
Let $r, s \in D$ be such that $r + s < 1$ and $\map {c_n} r = \map {c_n} s = 0$ for $n > N + 1$.
Let:

$r' = r - \map {c_{N + 1} } r 2^{-\paren {N + 1} }$
$s' = s - \map {c_{N + 1} } s 2^{-\paren {N + 1} }$
Then we have $\map {c_n} {r'} = \map {c_n} {s'} = 0$ for $n > N$, so that:

$\map A {r'} + \map A {s'} \subseteq \map A {r' + s'}$
and:

$\map {c_n} {r' + s'} = 0$ for $n > N$.
We also have:

$\map A r = \map A {r'} + \map {c_{N + 1} } r V_{N + 1}$
and:

$\map A s = \map A {s'} + \map {c_{N + 1} } s V_{N + 1}$
Then, we have:

$\map A r + \map A s \subseteq \map A {r' + s'} + \map {c_{N + 1} } r V_{N + 1} + \map {c_{N + 1} } s V_{N + 1}$
If $\map {c_{N + 1} } r = \map {c_{N + 1} } s = 0$, then $r = r'$ and $s = s'$ and we obtain $\map A r + \map A s \subseteq \map A {r' + s'} = \map A {r + s}$. 

Now consider the case that $\map {c_{N + 1} } r = 0$ and $\map {c_{N + 1} } s = 1$. 
We have:

$\ds \map A r + \map A s \subseteq \map A {r' + s'} + V_{N + 1}$
We have:














\(\ds \map A {r' + s'} + V_{N + 1}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^N \map {c_n} {r' + s'} V_n + V_{N + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^N \map {c_n} {r' + s'} V_n + V_{N + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^{N + 1} \map {c_n} {r' + s' + 2^{-\paren {N + 1} } } V_n\)





since $\map {c_n} {r' + s'} = 0$ for $n > N$














\(\ds \)

\(=\)







\(\ds \map A {r' + s' + 2^{-\paren {N + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \map A {r + s}\)









So we obtain $\map A r + \map A s \subseteq \map A {r + s}$ for $\map {c_{N + 1} } r = 0$ and $\map {c_{N + 1} } s = 1$.
By swapping $r$ and $s$, we obtain $\map A r + \map A s \subseteq \map A {r + s}$ for $\map {c_{N + 1} } r = 1$ and $\map {c_{N + 1} } s = 0$.

Now consider the case $\map {c_{N + 1} } r = 1$ and $\map {c_{N + 1} } s = 1$. 
We have:

$\map A r + \map A s \subseteq \map A {r' + s'} + V_{N + 1} + V_{N + 1} \subseteq \map A {r' + s'} + V_N = \map A {r' + s'} + \map A {2^{-N} }$
Since $\map {c_n} {r' + s'} = 0$ for $n > N$ and $\map {c_n} {2^{-N} } = 0$ for $n > N$, we have:














\(\ds \map A {r' + s'} + \map A {2^{-N} }\)

\(\subseteq\)







\(\ds \map A {r' + s' + 2^{-N} }\)




















\(\ds \)

\(=\)







\(\ds \map A {\paren {r' + 2^{-\paren {N + 1} } } + \paren {s' + 2^{-\paren {N + 1} } } }\)




















\(\ds \)

\(=\)







\(\ds \map A {r + s}\)









Hence we obtain $\map A r + \map A s \subseteq \map A {r + s}$ in the case $\map {c_{N + 1} } r = 1$ and $\map {c_{N + 1} } s = 1$.
Hence we have proven that $\map A r + \map A s \subseteq \map A {r + s}$ if $\map {c_n} r = \map {c_n} s = 0$ for $n > N + 1$, completing the proof.
$\blacksquare$





