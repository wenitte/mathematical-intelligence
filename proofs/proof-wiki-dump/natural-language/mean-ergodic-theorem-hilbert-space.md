# 

Source: https://proofwiki.org/wiki/Mean_Ergodic_Theorem_(Hilbert_Space)

Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\mathbb F$.
Let $U : \HH \to \HH$ be a bounded linear operator such that:

$\forall f \in \HH : \norm {\map U f} \le \norm f$

Then for each $f \in \HH$:

$\ds \lim_{N \mathop \to \infty} \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \map {U^n} f = \map P f$
where:

$U^n$ denotes the $n$ times composition of $U$
$I := \set {f \in \HH : \map U f = f}$
$P : \HH \to I$ denotes the orthogonal projection on $I$


Proof
Note that $I$ is a closed linear subspace of $\HH$, since $U$ is bounded.
Especially, $P : \HH \to I$ is well-defined.
Moreover, by Direct Sum of Subspace and Orthocomplement:

$\HH = I \oplus I^\perp$

Let $f \in \HH$.
We can write:

$ f = \map P f + f^\perp$
where $f^\perp \in I^\perp$.
Then we have:














\(\ds \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \map {U^n} f\)

\(=\)







\(\ds \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \map {U^n} {\map P f} + \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \map {U^n} {f^\perp}\)




















\(\ds \)

\(=\)







\(\ds \map P f + \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \map {U^n} {f^\perp}\)





as $\map P f \in I$



Thus we need to show:

$\ds \lim_{N \mathop \to \infty} \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \map {U^n} {f^\perp} = 0$
Lemma
Let $B \subseteq \HH$ be the linear subspace defined as:

$B := \set {\map U h - h : h \in \HH }$

Then:

$I^\perp \subseteq \overline B$
$\Box$

Let $\epsilon > 0$ be arbitrary.
Since $f^\perp \in \overline B$, there is a $g \in B$ such that:

$\norm {f^\perp - g} < \epsilon$
where $g = \map U h - h$ for an $h \in \HH$.
Thus for all $N \ge 2 \norm h \epsilon^{-1}$:














\(\ds \norm {\dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \map {U^n} {f^\perp} }\)

\(=\)







\(\ds \norm {\dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \map {U^n} { {f^\perp} -g} + \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \map {U^n} g}\)




















\(\ds \)

\(=\)







\(\ds \norm {\dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \map {U^n} { {f^\perp} -g} + \dfrac {\map {U^N}h - h} N}\)




















\(\ds \)

\(\le\)







\(\ds \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \norm {\map {U^n} { {f^\perp} -g} } + \dfrac { {\norm {\map {U^N} h} } + \norm h} N\)




















\(\ds \)

\(\le\)







\(\ds \norm { {f^\perp} -g} + \dfrac {2 \norm h} N\)





by hypothesis














\(\ds \)

\(\le\)







\(\ds 2 \epsilon\)









$\blacksquare$





