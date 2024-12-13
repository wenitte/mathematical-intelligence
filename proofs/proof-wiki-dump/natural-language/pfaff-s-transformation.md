# 

Source: https://proofwiki.org/wiki/Pfaff%27s_Transformation



Theorem
Let $a, b, c \in \C$.
Let $\size x < \dfrac 1 2$
Let $\map \Re c > \map \Re b > 0$.
Then:

$\ds \map F {a, b; c; x} = \paren {1 - x}^{-a} \map F {a, c - b; c; \dfrac x {x - 1} }$

where:

$\map F {a, b; c; x}$ is the Gaussian hypergeometric function of $x$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} b^{\overline k} } { c^{\overline k} } \dfrac {x^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.


Proof
From Euler's Integral Representation of Hypergeometric Function, we have:

$\ds \map F {a, b; c; x} = \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 t^{b - 1} \paren {1 - t}^{c - b - 1} \paren {1 - xt}^{- a} \rd t$
Letting $s = \paren {1 - t}$, we now have:














\(\ds \map F {a, b; c; x}\)

\(=\)







\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_1^0 \paren {1 - s}^{b - 1} s^{c - b - 1} \paren {1 - x\paren {1 - s} }^{- a} \paren {-\rd s}\)





substituting $s = \paren {1 - t}$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 \paren {1 - s}^{b - 1} s^{c - b - 1} \paren {1 - x\paren {1 - s} }^{- a} \rd s\)





reversing limits of integration








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 \paren {1 - s}^{b - 1} s^{c - b - 1} \paren {1 - x + xs }^{- a} \rd s\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 \paren {1 - s}^{b - 1} s^{c - b - 1} \paren {1 - x + xs }^{- a} \rd s \times \dfrac {\paren {1 - x}^{-a} } {\paren {1 - x}^{-a} }\)





multiplying by $1$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c \paren {1 - x}^{-a} } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 \paren {1 - s}^{b - 1} s^{c - b - 1} \paren {1 + \dfrac {xs} {1 - x} }^{- a} \rd s\)





rearranging




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c \paren {1 - x}^{-a} } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 \paren {1 - s}^{b - 1} s^{c - b - 1} \paren {1 - \dfrac {xs} {x - 1} }^{- a} \rd s\)





switching the sign in the last term




Letting $\size x < \dfrac 1 2$ and expanding the product of $\paren {1 - \dfrac {xs} {x - 1} }^{-a}$:














\(\ds \paren {1 - \dfrac {xs} {x - 1} }^{-a}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom {-a} k \paren {-1}^k \paren {\dfrac {xs} {x - 1} }^k\)





Binomial Theorem - Complex Numbers








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {\binom {a + k - 1} k \paren {-1}^k} \paren {-1}^k \paren {\dfrac {xs} {x - 1} }^k\)





Negated Upper Index of Binomial Coefficient








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom {a + k - 1} k \paren {\dfrac {xs} {x - 1} }^k\)





$\paren {-1}^{2k} = 1$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {a + k - 1}! } {k! \paren {a - 1}! } \paren {\dfrac x {\paren {x - 1} } }^k s^k\)





Definition of Binomial Coefficient




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {k!} \paren {\dfrac x {\paren {x - 1} } }^k s^k\)





Rising Factorial as Quotient of Factorials




Therefore:














\(\ds \dfrac {\map \Gamma c \paren {1 - x}^{-a} } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 \paren {1 - s}^{b - 1} s^{c - b - 1} \paren {1 - \dfrac {xs} {x - 1} }^{- a} \rd s\)

\(=\)







\(\ds \dfrac {\map \Gamma c \paren {1 - x}^{-a} } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 \paren {1 - s}^{b - 1} s^{c - b - 1} \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {k!} \paren {\dfrac x {\paren {x - 1} } }^k s^k \rd s\)





substituting $\paren {2}$ into $\paren {1}$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c \paren {1 - x}^{-a} } {\map \Gamma b \map \Gamma {c - b} } \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {k!} \paren {\dfrac x {\paren {x - 1} } }^k \int_0^1 \paren {1 - s}^{b - 1} s^{c - b - 1} s^k \rd s\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c \paren {1 - x}^{-a} } {\map \Gamma b \map \Gamma {c - b} } \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {k!} \paren {\dfrac x {\paren {x - 1} } }^k \int_0^1 \paren {1 - s}^{b - 1} s^{k + c - b - 1} \rd s\)





Product of Powers








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c \paren {1 - x}^{-a} } {\map \Gamma b \map \Gamma {c - b} } \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {k!} \paren {\dfrac x {\paren {x - 1} } }^k \dfrac {\map \Gamma {k + c - b} \map \Gamma b } {\map \Gamma {k + c} }\)





Definition of Beta Function








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \paren {1 - x}^{-a} \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} \paren {c - b}^{\overline k} } { k! c^{\overline k} } \paren {\dfrac x {\paren {x - 1} } }^k\)





Rising Factorial as Quotient of Factorials and $\map \Gamma b$ cancels








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \paren {1 - x}^{-a} \map F {a, c - b; c; \dfrac x {x - 1} }\)





Definition of Gaussian Hypergeometric Function




Therefore:

$\ds \map F {a, b; c; x} = \paren {1 - x}^{-a} \map F {a, c - b; c; \dfrac x {x - 1} }$
$\blacksquare$


Also see
Euler's Integral Representation of Hypergeometric Function
Euler's Transformation
Kummer's Quadratic Transformation


Source of Name
This entry was named for Johann Friedrich Pfaff.


Sources
1999: George E. Andrews, Richard Askey and Ranjan Roy: Special Functions: Chapter $\text {2}$. The Hypergeometric Functions
Weisstein, Eric W. "Pfaff Transformation." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/PfaffTransformation.html




