# 

Source: https://proofwiki.org/wiki/Characterisation_of_Non-Archimedean_Division_Ring_Norms/Sufficient_Condition/Lemma_1

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring with unity $1_R$.
Let $x, y \in R$.
Let $y \ne 0_R$ where $0_R$ is the zero of $R$.

Then:

$\norm {x + y} \le \max \set {\norm x, \norm y} \iff \norm {x y^{-1} + 1_R} \le \max \set {\norm {x y^{-1} }, 1}$


Proof













\(\ds \norm {x + y}\)

\(\le\)







\(\ds \max \set {\norm x, \norm y}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {x + y} \norm {y^{-1} }\)

\(\le\)







\(\ds \max \set {\norm x \norm {y^{-1} }, \norm y \norm {y^{-1} } }\)





Multiply through by $\norm{y^{-1} }$








\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {\paren {x + y} y^{-1} }\)

\(\le\)







\(\ds \max \set {\norm {x y^{-1} }, \norm {y y^{-1} } }\)





Norm Axiom $\text N 2$: Multiplicativity








\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {\paren {x y^{-1} + y y^{-1} } }\)

\(\le\)







\(\ds \max \set {\norm {x y^{-1} }, \norm {y y^{-1} } }\)





Ring Axiom $\text D$: Distributivity of Product over Addition








\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {\paren {x y^{-1} + 1_R } }\)

\(\le\)







\(\ds \max \set {\norm {x y^{-1} }, \norm {1_R } }\)





Product with Inverse is Unit








\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {\paren {x y^{-1} + 1_R } }\)

\(\le\)







\(\ds \max \set {\norm {x y^{-1} }, 1 }\)





Norm of Unity



$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$ Normed Fields, Proposition $1.14$
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 2.2$ Basic Properties, Theorem $2.2.2$




