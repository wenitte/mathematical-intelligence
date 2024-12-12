# 

Source: https://proofwiki.org/wiki/Characterisation_of_Non-Archimedean_Division_Ring_Norms



Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring with unity $1_R$.

Then $\norm {\,\cdot\,}$ is non-Archimedean if and only if:

$\forall n \in \N_{>0}: \norm {n \cdot 1_R} \le 1$
where:

$n \cdot 1_R = \underbrace {1_R + 1_R + \dotsb + 1_R}_{\text {$n$ times} }$


Corollary 1
$\norm {\,\cdot\,}$ is non-Archimedean if and only if:

$\sup \set {\norm {n \cdot 1_R}: n \in \N_{> 0}} = 1$.


Corollary 2
Let $\sup \set {\norm {n \cdot 1_R}: n \in \N_{> 0} } = C < +\infty$.

Then $\norm {\,\cdot\,}$ is non-Archimedean and $C = 1$.


Corollary 3
$\norm {\,\cdot\,}$ is Archimedean if and only if:

$\sup \set {\norm {n \cdot 1_R}: n \in \N_{>0} } = +\infty$


Corollary 4
Let $R$ have characteristic $p > 0$.

Then $\norm {\,\cdot\,}$ is a non_Archimedean norm on $R$.


Corollary 5
If $\norm {\, \cdot \,}$ is non-Archimedean then:

$\sup \set {\norm {n \cdot 1_R}: n \in \Z} = 1$

where $n \cdot 1_R = 
\begin{cases}
\underbrace {1_R + 1_R + \dots + 1_R}_{\text {$n$ times} } & : n > 0 \\
0 & : n = 0 \\
\\
-\underbrace {\paren {1_R + 1_R + \dots + 1_R} }_{\text {$-n$ times} } & : n < 0 \\
\end{cases}$


Proof
Necessary Condition
Let $\norm {\,\cdot\,}$ be non-Archimedean.
Then by the definition of a non-Archimedean norm, for $n \in \N$:










\(\ds \forall n \in \N_{>0}: \, \)



\(\ds \norm {n \cdot 1_R}\)

\(=\)







\(\ds \norm {1_R + \dots + 1_R}\)





($n$ summands)














\(\ds \)

\(\le\)







\(\ds \max \set {\norm {1_R}, \ldots, \norm {1_R} }\)




















\(\ds \)

\(=\)







\(\ds 1\)





because $\norm {1_R} = 1$



$\Box$


Sufficient Condition
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
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.2$ Basic Properties: Theorem $2.2.2$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.2$ Normed Fields: Proposition $1.14$




