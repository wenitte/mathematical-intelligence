# 

Source: https://proofwiki.org/wiki/Gauss%27s_Hypergeometric_Theorem/Proof_2

Theorem
$\map F {a, b; c; 1} = \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }$


Proof
From Euler's Integral Representation of Hypergeometric Function, we have:

$\ds \map F {a, b; c; x} = \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 t^{b - 1} \paren {1 - t}^{c - b - 1} \paren {1 - x t}^{- a} \rd t$
Where $a, b, c \in \C$.
and $\size x < 1$
and $\map \Re c > \map \Re b > 0$.
Since Euler's Integral Representation only applies where $\size x < 1$, we will determine the limit of the integral as $x \to 1$.

Therefore:














\(\ds \map F {a, b; c; x}\)

\(=\)







\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 t^{b - 1} \paren {1 - t}^{c - b - 1} \paren {1 - \paren {1} t}^{- a} \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 t^{b - 1} \paren {1 - t}^{c - b - a - 1} \rd t\)





simplifying and Product of Powers








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \dfrac {\map \Gamma b \map \Gamma {c - a - b } } {\map \Gamma {c - a } }\)





Definition of Beta Function








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }\)





simplifying and canceling $\map \Gamma b$




$\blacksquare$


Source of Name
This entry was named for Carl Friedrich Gauss.





