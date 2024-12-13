# 

Source: https://proofwiki.org/wiki/Morley%27s_Formula



Theorem
Let $n \in \C$ be a complex number.
Let $\map \Re n < \dfrac 2 3$.
Then:














\(\ds \sum_{k \mathop = 0}^\infty \paren {\dfrac {n^{\overline k} } {k!} }^3\)

\(=\)







\(\ds \dfrac {\map \Gamma {1 - \dfrac {3 n} 2} } {\map {\Gamma^3} {1 - \dfrac n 2} } \map \cos {\dfrac {\pi n} 2}\)











Proof













\(\ds \sum_{k \mathop = 0}^\infty \paren {\dfrac {n^{\overline k} } {k!} }^3\)

\(=\)







\(\ds \dfrac {6 \map \sin {\dfrac {\pi n} 2} \map \sin {\pi n} } {\pi^2 n^2 \paren {1 + 2 \map \cos {\pi n} } } \times \dfrac {\map {\Gamma^3} {\dfrac n 2 + 1} } {\map \Gamma {\dfrac {3 n} 2 + 1} }\)





Dixon's Hypergeometric Theorem: Corollary 1














\(\ds \)

\(=\)







\(\ds \dfrac {6 \map \sin {\dfrac {\pi n} 2} \map \sin {\pi n} } {\pi^2 n^2 \paren {1 + 2 \map \cos {\pi n} } } \times \dfrac {\paren {\dfrac n 2}^3 \map {\Gamma^3} {\dfrac n 2} } {\paren {\dfrac {3 n} 2} \map \Gamma {\dfrac {3 n} 2} }\)





Definition of Gamma Function














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\dfrac {\pi n} 2} \map \sin {\pi n} } {2 \pi^2 \paren {1 + 2 \map \cos {\pi n} } } \times \dfrac {\map {\Gamma^3} {\dfrac n 2} } {\map \Gamma {\dfrac {3 n} 2} } \times \dfrac {\map {\Gamma^3} {1 - \dfrac n 2} } {\map {\Gamma^3} {1 - \dfrac n 2} } \times \dfrac {\map \Gamma {1 - \dfrac {3 n} 2} } {\map \Gamma {1 - \dfrac {3 n} 2} }\)





multiplying by $1$ and simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\dfrac {\pi n} 2} \map \sin {\pi n} \map \Gamma {1 - \dfrac {3 n} 2} } {2 \pi^2 \paren {1 + 2 \map \cos {\pi n} } \map {\Gamma^3} {1 - \dfrac n 2} } \times \dfrac {\pi^3 } {\paren {\map \sin {\dfrac {\pi n} 2}^3 } } \times \dfrac {\map \sin {\dfrac {3\pi n} 2} } \pi\)





Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\dfrac {\pi n} 2} \map \sin {\pi n} \map \Gamma {1 - \dfrac {3 n} 2} } {2 \map \sin {\dfrac {3\pi n} 2} \map {\Gamma^3} {1 - \dfrac n 2} } \times \dfrac 1 {\paren {\map \sin {\dfrac {\pi n} 2}^2} } \times \map \sin {\dfrac {3\pi n} 2}\)





Sine of Integer Multiple of Argument: Formulation 6 and simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi n} \map \Gamma {1 - \dfrac {3 n} 2} } {2 \map \sin {\dfrac {\pi n} 2} \map {\Gamma^3} {1 - \dfrac n 2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {2 \map \sin {\dfrac {\pi n} 2} \map \cos {\dfrac {\pi n} 2}  \map \Gamma {1 - \dfrac {3 n} 2} } {2 \map \sin {\dfrac {\pi n} 2} \map {\Gamma^3} {1 - \dfrac n 2} }\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {1 - \dfrac {3 n} 2} } {\map {\Gamma^3} {1 - \dfrac n 2}  } \map \cos {\dfrac {\pi n} 2}\)





rearranging



$\blacksquare$


Source of Name
This entry was named for Frank Morley.


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$
Weisstein, Eric W. "Morley's Formula." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/MorleysFormula.html




