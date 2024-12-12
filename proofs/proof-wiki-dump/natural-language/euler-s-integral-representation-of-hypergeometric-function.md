# 

Source: https://proofwiki.org/wiki/Euler%27s_Integral_Representation_of_Hypergeometric_Function



Theorem
Let $a, b, c \in \C$.
Let $\size x < 1$
Let $\map \Re c > \map \Re b > 0$.
Then:

$\ds \map F {a, b; c; x} = \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 t^{b - 1} \paren {1 - t}^{c - b - 1} \paren {1 - x t}^{- a} \rd t$
in the $x$ plane cut along the real axis from $1$ to $\infty$. 
where:

$\map \arg t = \map \arg {1 - t} = 0$
$\map F {a, b; c; x}$ is the Gaussian hypergeometric function of $x$:
$\map F {a, b; c; x} := \ds \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} b^{\overline k} } {c^{\overline k} } \dfrac {x^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.


Proof
Letting $\size x < 1$ and expanding the product of $\paren {1 - x t}^{-a}$:














\(\ds \paren {1 - x t}^{-a}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom {-a} k \paren {-1}^k \paren {x t}^k\)





Binomial Theorem - Complex Numbers








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {\binom {a + k - 1} k \paren {-1}^k} \paren {-1}^k \paren {x t}^k\)





Negated Upper Index of Binomial Coefficient








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom {a + k - 1} k \paren {x t}^k\)





$\paren {-1}^{2k} = 1$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {a + k - 1}!} {k! \paren {a - 1}! } x^k t^k\)





Definition of Binomial Coefficient








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {k!} x^k t^k\)





Rising Factorial as Quotient of Factorials




Therefore:














\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 t^{b - 1} \paren {1 - t}^{c - b - 1} \paren {1 - x t}^{-a} \rd t\)

\(=\)







\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 t^{b - 1} \paren {1 - t}^{c - b - 1} \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {k!} x^k t^k \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {k!} x^k \int_0^1 t^{b - 1} \paren {1 - t}^{c - b - 1} t^k \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {k!} x^k \int_0^1 t^{k + b - 1} \paren {1 - t}^{c - b - 1} \rd t\)





Product of Powers








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {k!} x^k \dfrac {\map \Gamma {k + b} \map \Gamma {c - b} } {\map \Gamma {k + c} }\)





Definition of Beta Function








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} b^{\overline k} } { c^{\overline k} } \dfrac {x^k} {k!}\)





Rising Factorial as Quotient of Factorials and $\map \Gamma {c - b}$ cancels








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \map F {a, b; c; x}\)





Definition of Hypergeometric Function




Therefore:

$\ds \map F {a, b; c; x} = \dfrac {\map \Gamma c} {\map \Gamma b \map \Gamma {c - b} } \int_0^1 t^{b - 1} \paren {1 - t}^{c - b - 1} \paren {1 - x t}^{-a} \rd t$
$\blacksquare$


Also see
Gauss's Hypergeometric Theorem


Source of Name
This entry was named for Leonhard Paul Euler.



This article is complete as far as it goes, but it could do with expansion.In particular: Historical note explaining Euler's involvement in a construct that had not at the time been defined -- Gauss had barely been born before Euler diedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 31$: Hypergeometric Functions: Miscellaneous Properties: $31.16$
1999: George E. Andrews, Richard Askey and Ranjan Roy: Special Functions: Chapter $\text {2}$. The Hypergeometric Functions
1935: W.N. Bailey: Generalized Hypergeometric Series Chapter $\text {1}$. The hypergeometric series
Weisstein, Eric W. "Hypergeometric Function." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/HypergeometricFunction.html




