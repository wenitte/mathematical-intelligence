# 

Source: https://proofwiki.org/wiki/Gauss%27s_Hypergeometric_Theorem


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $a, b, c \in \C$.
Let $c \notin \Z_{\le 0}$.
Let $\map \Re {c - a - b} > 0$.

Then:

$\map F {a, b; c; 1} = \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }$
where:

$\map F {a, b; c; 1}$ is the Gaussian hypergeometric function of $1$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} b^{\overline k} } { c^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.


Corollary 1
Let $\map \Re {1 - a} > 0$.
Let $c \notin \Z_{\le 0}$ and $c \ne 1$.
Then:

$\ds \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {\paren {c - 1 + k} k!} = \dfrac {\map \Gamma {c - 1} \map \Gamma {1 - a} } {\map \Gamma {c - a} }$


Corollary 2
Let $\map \Re {a - 1} < 0$.
Then:

$\ds \dfrac 1 a + \dfrac {a } {\paren {a + 1} 1!} + \dfrac {a \paren {a + 1} } {\paren {a + 2} 2!} + \dfrac {a \paren {a + 1} \paren {a + 2} } {\paren {a + 3} 3!} + \cdots = \dfrac {\pi} {\map \sin {\pi a } } $


Proof 1
Let $x, y, n \in \C$ be complex numbers such that $\map \Re {x + y + n + 1} > 0$.
Let $u \in \C$ be a complex number such that $\cmod u < 1$.
Expanding the product of $\paren {1 + u}^{y + n}$ and $\paren {\dfrac {1 + u} u}^x$:














\(\ds \paren {1 + u}^{y + n}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom {y + n} k u^k\)





Binomial Theorem - Complex Numbers














\(\ds \paren {1 + \dfrac 1 u}^x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom x k u^{-k}\)





Binomial Theorem - Complex Numbers, Power of Product








\(\ds \leadsto \ \ \)





\(\ds \paren {1 + u}^{y + n} \paren {\dfrac {1 + u} u}^x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom {y + n} k u^k \sum_{k \mathop = 0}^\infty \binom x k u^{-k}\)





multiplying



The coefficient $a_n$ of $u^n$ of the product $\dfrac {\paren {1 + u}^{x + y + n} } {u^x}$ above can be determined by setting $k = k + n$ in the series with $\dbinom {y + n} k$:














\(\ds a_n\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom {y + n} {k + n} \binom x k\)





substituting $k = k + n$ in first series: $u^n = u^{k+n} u^{-k}$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {y + n}!} {\paren {k + n}! \paren {y - k}!} \dfrac {x!} {k! \paren {x - k}!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {y + n}!} {\paren {k + n}! \paren {y - k}!} \dfrac {x!} {k! \paren {x - k}!} \paren {\dfrac {n! y!} {n! y!} }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {y + n}! } {n! y!}  \sum_{k \mathop = 0}^\infty \dfrac {n! } {k! \paren {k + n}! } \dfrac {y!} {\paren {y - k}!}  \dfrac {x!} {\paren {x - k}!}\)





moving $\dfrac {\paren {y + n}! } {n! y!}$ outside the sum and rearranging














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {y + 1} }  \sum_{k \mathop = 0}^\infty \dfrac {n! } {k! \paren {k + n}! } \dfrac {y!} {\paren {y - k}!} \dfrac {k!} {k!}  \dfrac {x!} {\paren {x - k}!} \dfrac {k!} {k!}\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {y + 1} }  \sum_{k \mathop = 0}^\infty \dfrac {n! } {k! \paren {k + n}! } \dbinom y k \dbinom x k \paren {k!}^2\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {y + 1} }  \sum_{k \mathop = 0}^\infty \dfrac {n! } {k! \paren {k + n}! } \paren {-1}^k \dbinom {-y + k - 1} k \paren {-1}^k \dbinom {-x + k - 1} k \paren {k!}^2\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {y + 1} }  \sum_{k \mathop = 0}^\infty \dfrac {n! } {k! \paren {k + n}! } \dfrac {\paren {-y + k - 1}!} {k! \paren {-y - 1}!} \dfrac {\paren {-x + k - 1}!} {k! \paren {-x - 1}!} \paren {k!}^2\)





Definition of Binomial Coefficient, $\paren {-1}^{2 k} = 1$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {y + 1} } \sum_{k \mathop = 0}^\infty \dfrac { \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { k! \paren {n + 1}^{\overline k} }\)





Rising Factorial as Quotient of Factorials, and $k!$ cancels




Now expand $\paren {1 + u}^{x + y + n}$ and divide by $u^x$:














\(\ds \dfrac {\paren {1 + u}^{x + y + n} } {u^x}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom {x + y + n} k u^{k - x}\)





Binomial Theorem - Complex Numbers




The coefficient $a_n$ of $u^n$ of the product $\dfrac {\paren {1 + u}^{x + y + n} } {u^x}$ above is:














\(\ds a_n\)

\(=\)







\(\ds \binom {x + y + n} {x + n}\)





$n = k - x$, so $k = x + n$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {x + y + n + 1} } {\map \Gamma {x + n + 1} \map \Gamma {y + 1} }\)





Definition of Binomial Coefficient




Equating coefficients gives us:














\(\ds \dfrac {\map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {y + 1} } \sum_{k \mathop = 0}^\infty \dfrac { \paren {-x}^{\overline k} \paren {-y}^{\overline k} } {\paren {n + 1}^{\overline k} } \dfrac 1 {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + y + n + 1} } {\map \Gamma {x + n + 1} \map \Gamma {y + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { \paren {n + 1}^{\overline k} } \dfrac 1 {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + y + n + 1} \map \Gamma {n + 1} } {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} }\)





dividing both sides by $\dfrac {\map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {y + 1} }$








\(\ds \leadsto \ \ \)





\(\ds \map F {-x, -y; n + 1; 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + y + n + 1} \map \Gamma {n + 1} } {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} }\)





Definition of Hypergeometric Function



Letting $a = -x$, $b = -y$ and $c = n + 1$, we obtain:














\(\ds \map F {a, b; c; 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }\)









$\blacksquare$


Proof 2
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


Examples
Example: $\map F {1, 2; 4; 1}$
$1 + \dfrac 2 4 + \paren {\dfrac {2 \times 3} {4 \times 5} } + \paren {\dfrac {2 \times 3 \times 4} {4 \times 5 \times 6} } + \cdots = 3$


Example: $\map F {1, 1; \dfrac 5 2; 1}$
$1 + \dfrac 2 5 + \paren {\dfrac {2 \times 4} {5 \times 7} } + \paren {\dfrac {2 \times 4 \times 6} {5 \times 7 \times 9} } + \cdots = 3$


Example: $\map F {\dfrac 1 2, \dfrac 1 2; \dfrac 3 2; 1}$
$1 + \paren {\dfrac 1 {2^1 \times 3 \times 1!} } + \paren {\dfrac {1 \times 3} {2^2 \times 5 \times 2!} } + \paren {\dfrac {1 \times 3 \times 5} {2^3 \times 7 \times 3!} } + \cdots  = \dfrac \pi 2$


Example: $\dfrac {10} 3 \map F {\dfrac 3 {10}, \dfrac 3 {10}; \dfrac {13} {10}; 1}$
$\paren {\dfrac 1 {10^{-1} \times 3 \times 0!} } + \paren {\dfrac 3 {10^0 \times 13 \times 1!} } + \paren {\dfrac {3 \times 13} {10^1 \times 23 \times 2!} } + \paren {\dfrac {3 \times 13 \times 23} {10^2 \times 33 \times 3!} } + \cdots = \dfrac {2 \pi} \phi$


Also see
Dixon's Hypergeometric Theorem
Kummer's Hypergeometric Theorem
Properties of Generalized Hypergeometric Function


Source of Name
This entry was named for Carl Friedrich Gauss.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 31$: Hypergeometric Functions: Miscellaneous Properties: $31.14$
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$
Weisstein, Eric W. "Gauss's Hypergeometric Theorem." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/GausssHypergeometricTheorem.html




