# 

Source: https://proofwiki.org/wiki/Characterisation_of_Non-Archimedean_Division_Ring_Norms/Corollary_5

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring with unity $1_R$.

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
By Corollary 1 of Characterisation of Non-Archimedean Division Ring Norms then:

$\sup \set {\norm{n \cdot 1_R}: n \in \N_{> 0}} = 1$
By Norm Axiom $(\text N 1)$ (Positive Definiteness) then:

$\norm {0 \cdot 1_R} = 0 \le 1$

Let $n < 0$ then:














\(\ds \norm {n \cdot 1_R}\)

\(=\)







\(\ds \norm {-\underbrace {\paren {1_R + 1_R + \dots + 1_R} }_{\text {$-n$ times} } }\)




















\(\ds \)

\(=\)







\(\ds \norm {\underbrace {1_R + 1_R + \dots + 1_R}_{\text {$-n$ times} } }\)





Norm of Ring Negative














\(\ds \)

\(=\)







\(\ds \norm {\paren {-n} \cdot 1_R}\)




















\(\ds \)

\(\le\)







\(\ds 1\)





Characterisation of Non-Archimedean Division Ring Norms




The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 2.2$ Basic Properties, Theorem $2.2.2$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$ Normed Fields, Proposition $1.14$




