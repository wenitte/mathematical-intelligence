# 

Source: https://proofwiki.org/wiki/Properties_of_Norm_on_Division_Ring/Norm_of_Integer

Theorem
Let $\struct {R, +, \circ}$ be a division ring with zero $0_R$ and unity $1_R$.
Let $\norm {\,\cdot\,}$ be a norm on $R$.

For all $n \in \N_{>0}$, let $n \cdot 1_R$ denote the sum of $1_R$ with itself $n$-times. That is:

$n \cdot 1_R = \underbrace {1_R + 1_R + \dots + 1_R}_{\text {$n$ times} }$
Then:

$\norm {n \cdot 1_R} \le n$.


Proof
Let $n \in \N_{>0}$.
Then:














\(\ds \norm {n \cdot 1_R}\)

\(=\)







\(\ds \norm {1_R + 1_R + \dots + 1_R}\)




















\(\ds \)

\(\le\)







\(\ds \underbrace {\norm {1_R} + \norm {1_R} + \dots + \norm {1_R} }_{\text {$n$ times} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \underbrace {1 + 1 + \dots + 1 }_{\text {$n$ times} }\)





Norm of Unity














\(\ds \)

\(=\)







\(\ds n\)









$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.2$: Normed Fields, Theorem $1.6 \,(f)$




