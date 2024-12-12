# 

Source: https://proofwiki.org/wiki/Characterisation_of_Non-Archimedean_Division_Ring_Norms/Sufficient_Condition



Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring with unity $1_R$.

Then:

$\forall n \in \N_{>0}: \norm {n \cdot 1_R} \le 1 \implies \norm {\,\cdot\,}$ is non-archimedean
where:

$n \cdot 1_R = \underbrace {1_R + 1_R + \dots + 1_R}_{n \text { times} }$


Proof
Let:

$\forall n \in \N_{>0}: \norm {n \cdot 1_R} \le 1$
Let $x, y \in R$.

Let $y = 0_R$ where $0_R$ is the zero of $R$.
Then $\norm {x + y} = \norm x = \max \set {\norm x, 0} = \max \set {\norm x, \norm y}$


Lemma 1
Let $y \ne 0_R$ where $0_R$ is the zero of $R$.

Then:

$\norm {x + y} \le \max \set {\norm x, \norm y} \iff \norm {x y^{-1} + 1_R} \le \max \set {\norm {x y^{-1} }, 1}$
$\Box$

Hence to complete the proof it is sufficient to prove:

$\forall x \in R: \norm {x + 1_R} \le \max \set {\norm x, 1}$

For $n \in \N$:














\(\ds \norm {x + 1_R}^n\)

\(=\)







\(\ds \norm {\sum_{i \mathop = 0}^n \binom n i \cdot x^i}\)





Binomial Theorem














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 0}^n \norm {\binom n i \cdot x^i}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \norm {\binom n i \cdot 1_R} \norm x^i\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 0}^n \norm x^i\)





$\forall n \in \N_{>0}: \norm {n \cdot 1_R} \le 1$





Lemma 2
Then for all $i$, $0 \le i \le n$:

$\norm x^i \le \max \set {\norm x^n , 1}$
$\Box$

Hence














\(\ds \norm {x + 1_R}^n\)

\(\le\)







\(\ds \sum_{i \mathop = 0}^n \norm x^i\)





continuing from above














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 0}^n \max \set {\norm x^n , 1}\)





Lemma $2$














\(\ds \)

\(=\)







\(\ds \paren {n + 1} \max \set {\norm x^n , 1}\)










Taking $n$th roots yields:

$\norm {x + 1_R} \le \paren {n + 1}^{1/n} \max \set {\norm x, 1}$


Lemma 3
Let $\sequence {x_n}$ be the real sequence defined as $x_n = \paren {n + 1}^{1/n}$, using exponentiation.
Then $\sequence {x_n}$ converges with a limit of $1$.
$\Box$

By the Multiple Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \paren {n + 1}^{1/n} \max \set {\norm x, 1} = \max \set {\norm x, 1}$

By Inequality Rule for Real Sequences:

$\norm {x + 1_R} \le \max \set {\norm x, 1}$
The result follows.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$ Normed Fields, Proposition $1.14$
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 2.2$ Basic Properties, Theorem $2.2.2$




