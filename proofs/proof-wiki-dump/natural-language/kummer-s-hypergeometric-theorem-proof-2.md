# 

Source: https://proofwiki.org/wiki/Kummer%27s_Hypergeometric_Theorem/Proof_2

Theorem
$\map F {n, -x; x + n + 1; -1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } {\map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {n + 1} }$


Proof
From Euler's Integral Representation of Hypergeometric Function, we have:

$\ds \map F {a, b; c; x} = \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 t^{b - 1} \paren {1 - t}^{c - b - 1} \paren {1 - x t}^{- a} \rd t$
Where $a, b, c \in \C$.
and $\size x < 1$
and $\map \Re c > \map \Re b > 0$.
Since Euler's Integral Representation only applies where $\size x < 1$, we will determine the limit of the integral as $x \to -1$.

By symmetry, we have:

$\ds \map F {n, -x; x + n + 1; -1} = \ds \map F {-x, n; x + n + 1; -1}$
Therefore:














\(\ds \map F {-x, n; x + n + 1; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + n + 1 - n } } \int_0^1 t^{n - 1} \paren {1 - t}^{x + n + 1 - n - 1} \paren {1 - \paren {-1} t}^{- \paren {-x} } \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + 1 } } \int_0^1 t^{n - 1} \paren {1 - t}^x \paren {1 + t}^x \rd t\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + 1 } } \int_0^1 t^{n - 1} \paren {1 - t^2}^x \rd t\)





simplifying further: $\paren {1 - t^2} = \paren {1 - t}\paren {1 + t}$



We now apply a u-substitution:
Let $u = t^2$














\(\ds u\)

\(=\)







\(\ds t^2\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(=\)







\(\ds \sqrt u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d t}\)

\(=\)







\(\ds 2 t\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \d t\)

\(=\)







\(\ds \frac {\d u} {2 t}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \frac {\d u} {2 \sqrt u}\)









Substituting back into our equation, we have:














\(\ds \map F {-x, n; x + n + 1; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + 1 } } \int_0^1 \paren {\sqrt u}^{n - 1} \paren {1 - u}^x \frac {\d u} {2 \sqrt u}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + 1 } } \int_0^1 u^{\frac n 2 - 1} \paren {1 - u}^x \d u\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + 1 } } \dfrac {\map \Gamma {\dfrac n 2 } \map \Gamma {x + 1 } } {\map \Gamma {\dfrac n 2 + x + 1 } }\)





Definition of Beta Function








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac 1 2 \map \Gamma {x + n + 1} } {\map \Gamma n } \dfrac {\map \Gamma {\dfrac n 2 } } {\map \Gamma {\dfrac n 2 + x + 1 } }\)





simplifying and canceling $\map \Gamma {x + 1 }$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac n 2 \map \Gamma {x + n + 1} } {n \map \Gamma n } \dfrac {\map \Gamma {\dfrac n 2 } } {\map \Gamma {\dfrac n 2 + x + 1 } }\)





multiplying by $1$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } {\map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {n + 1} }\)





Definition of Gamma Function



$\blacksquare$


Source of Name
This entry was named for Ernst Eduard Kummer.





