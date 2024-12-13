# 

Source: https://proofwiki.org/wiki/Kummer%27s_Hypergeometric_Theorem/Proof_3



Theorem
$\map F {n, -x; x + n + 1; -1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } {\map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {n + 1} }$


Proof
From Kummer's Quadratic Transformation, we have:

$\ds \map F {a, b; 1 + a - b; z} = \paren {1 - z}^{-a} \map F {\dfrac a 2, \dfrac {1 + a} 2 - b; 1 + a - b; \dfrac {-4 z} {\paren {1 - z }^2} }$
Let $z \to -1$ and we have:

$\ds \map F {a, b; 1 + a - b; -1} = 2^{-a} \map F {\dfrac a 2, \dfrac {1 + a} 2 - b; 1 + a - b; 1 }$
From Gauss's Hypergeometric Theorem, we have:

$\map F {a, b; c; 1} = \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }$
Therefore, the right hand side becomes:














\(\ds 2^{-a} \map F {\dfrac a 2, \dfrac {1 + a} 2 - b; 1 + a - b; 1 }\)

\(=\)







\(\ds 2^{-a} \dfrac {\map \Gamma {1 + a - b} \map \Gamma {\paren {1 + a - b} - \dfrac a 2 - \paren {\dfrac {1 + a} 2 - b} } } {\map \Gamma {\paren {1 + a - b} - \dfrac a 2} \map \Gamma {\paren {1 + a - b} - \paren {\dfrac {1 + a} 2 - b} } }\)





Gauss's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + a - b} } {\map \Gamma {1 + \dfrac a 2 - b} } \paren {2^{-a} \dfrac {\map \Gamma {\dfrac 1 2 } } {\map \Gamma {\dfrac {1 + a} 2 } } }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + a - b} } {\map \Gamma {1 + \dfrac a 2 - b} } \paren {\dfrac {\map \Gamma {\dfrac a 2 + 1 } } {\map \Gamma {a + 1 } } }\)





Legendre's Duplication Formula














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + a - b} \map \Gamma {\dfrac a 2 + 1 } } {\map \Gamma {1 + \dfrac a 2 - b} \map \Gamma {a + 1 } }\)





simplifying



Substituting $a = n$ and $b = -x$, we obtain:














\(\ds \map F {a, b; 1 + a - b; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + a - b} \map \Gamma {\dfrac a 2 + 1 } } {\map \Gamma {1 + \dfrac a 2 - b} \map \Gamma {a + 1 } }\)





before substitution








\(\ds \leadsto \ \ \)





\(\ds \map F {n, -x; 1 + n + x; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + n + x} \map \Gamma {\dfrac n 2 + 1 } } {\map \Gamma {1 + \dfrac n 2 + x} \map \Gamma {n + 1 } }\)





after substitution



$\blacksquare$


Source of Name
This entry was named for Ernst Eduard Kummer.


Sources
1935: W.N. Bailey: Generalized Hypergeometric Series Chapter $\text {2}$. The hypergeometric series




