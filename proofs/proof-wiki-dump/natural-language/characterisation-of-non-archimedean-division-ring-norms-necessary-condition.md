# 

Source: https://proofwiki.org/wiki/Characterisation_of_Non-Archimedean_Division_Ring_Norms/Necessary_Condition

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring with unity $1_R$.

Then:

$\norm {\,\cdot\,}$ is non-Archimedean $\implies \forall n \in \N_{>0}: \norm {n \cdot 1_R} \le 1$.
where:
$n \cdot 1_R = \underbrace {1_R + 1_R + \dots + 1_R}_{\text {$n$ times} }$


Proof
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




$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$ Normed Fields, Proposition $1.14$
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 2.2$ Basic Properties, Theorem $2.2.2$




