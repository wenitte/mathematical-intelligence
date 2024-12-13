# 

Source: https://proofwiki.org/wiki/Pfaff-Saalsch%C3%BCtz_Theorem



Theorem
Let $a, b, c \in \C$.
Let $n \in Z_{\ge 0}$.
Then:

$\ds \map { {}_3 \operatorname F_2} { { {a, b, -n} \atop {c, 1 + a + b - c - n} } \, \middle \vert \, 1} = \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } { c^{\overline n} \paren {c - a - b}^{\overline n} }$
where:

${}_3 \operatorname F_2$ is the generalized hypergeometric function
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$.


Proof
By definition of the generalized hypergeometric function:

$\ds \map { {}_3 \operatorname F_2} { { {a, b, -n} \atop {c, 1 + a + b - c - n} } \, \middle \vert \, 1} = \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} b^{\overline k} \paren {-n}^{\overline k} } { c^{\overline k} \paren {1 + a + b - c - n}^{\overline k} } \dfrac {1^k} {k!}$

From Euler's Transformation, we have:














\(\ds \map F {a, b; c; x}\)

\(=\)







\(\ds \paren {1 - x}^{c - a - b} \map F {c - a, c - b; c; x }\)





Euler's Transformation




\(\text {(1)}: \quad\)









\(\ds \paren {1 - x}^{a + b - c} \map F {a, b; c; x}\)

\(=\)







\(\ds \map F {c - a, c - b; c; x }\)





multiplying both sides by $\paren {1 - x}^{a + b - c}$




Next, we observe that:














\(\ds \paren {1 - x}^{a + b - c}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom {a + b - c} k \paren {-x}^k\)





Binomial Theorem: Complex Numbers








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {\binom {c - a - b + k - 1} k \paren {-1}^k} \paren {-x}^k\)





Negated Upper Index of Binomial Coefficient








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom {c - a - b + k - 1} k x^k\)





$\paren {-1}^{2 k} = 1$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {c - a - b + k - 1}!} {k! \paren {c - a - b - 1}! } x^k\)





Definition of Binomial Coefficient








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {c - a - b}^{\overline k} } {k!} x^k\)





Rising Factorial as Quotient of Factorials




Equating coefficients of $x^n$ in $(1)$ above, we obtain:














\(\ds \sum_{k \mathop = 0}^n \dfrac {\paren {c - a - b}^{\overline {n - k} } } {\paren {n - k}!} \dfrac {a^{\overline k} b^{\overline k} } {k! c^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





Definition of Gaussian Hypergeometric Function








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \paren {\dfrac {\paren {c - a - b - 1 + n - k}!} {\paren {c - a - b - 1}!} \times \dfrac {\paren {n - k}!} {\paren {n - k}!} } \paren {\dfrac 1 {\paren {n - k}!} \times \dfrac {n!} {n!} } \dfrac {a^{\overline k} b^{\overline k} } { k! c^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





Rising Factorial as Quotient of Factorials and multiplying by $1$








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \paren {\dbinom {c - a - b - 1 + n - k} {n - k} \paren {n - k}!} \paren {\dfrac {n^{\underline k} } {n!} } \dfrac {a^{\overline k} b^{\overline k} } {k! c^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





Definition of Binomial Coefficient and Falling Factorial as Quotient of Factorials








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \paren {\dbinom {-c + a + b} {n - k} \paren {n - k}! \paren {-1}^{n - k} } \paren {\dfrac {\paren {-1}^k \paren {-n}^{\overline k} } {n!} } \dfrac {a^{\overline k} b^{\overline k} } {k! c^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





Negated Upper Index of Binomial Coefficient and Rising Factorial in terms of Falling Factorial of Negative








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \paren {\dbinom {-c + a + b} {n - k} \paren {n - k}! \paren {-1}^n} \paren {\dfrac {\paren {-n}^{\overline k} } {n!} } \dfrac {a^{\overline k} b^{\overline k} } {k! c^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





Product of Powers $\paren {-1}^{n - k} \times \paren {-1}^k = \paren {-1}^n$








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \paren {\dfrac {\paren {a + b - c}!} {\paren {n - k}! \paren {a + b - c - n + k}! } \paren {n - k}! \paren {-1}^n } \paren {\dfrac {\paren {-n}^{\overline k} } {n!} } \dfrac {a^{\overline k} b^{\overline k} } {k! c^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





Definition of Binomial Coefficient








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \paren {\dfrac {\paren {a + b - c}!} {\paren {a + b - c - n + k}! } \paren {-1}^n } \paren {\dfrac {\paren {-n}^{\overline k} } {n!} } \dfrac { a^{\overline k} b^{\overline k} } {k! c^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





$\paren {n - k}!$ cancels








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \paren {\dfrac {\paren {a + b - c}!} {\paren {a + b - c - n + k}! } \times \dfrac {\paren {a + b - c - n}!} {\paren {a + b - c - n}!} \paren {-1}^n } \paren {\dfrac {\paren {-n}^{\overline k} } {n!} } \dfrac { a^{\overline k} b^{\overline k} } { k! c^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





multiplying by $1$








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \paren {\dfrac {\paren {a + b - c}!} {\paren {1 + a + b - c - n}^{\overline k} } \times \dfrac 1 {\paren {a + b - c - n}!} \paren {-1}^n} \paren {\dfrac {\paren {-n}^{\overline k} } {n!} } \dfrac {a^{\overline k} b^{\overline k} } {k! c^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





Rising Factorial as Quotient of Factorials








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \paren {\dfrac {\paren {a + b - c}^{\underline n} } {\paren {1 + a + b - c - n}^{\overline k} } \paren {-1}^n} \paren {\dfrac {\paren {-n}^{\overline k} } {n!} } \dfrac {a^{\overline k} b^{\overline k} } {k! c^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





Definition of Falling Factorial








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \paren {\dfrac {\paren {c - a - b}^{\overline n} \paren {-1}^n } {\paren {1 + a + b - c - n}^{\overline k} } \paren {-1}^n } \paren {\dfrac {\paren {-n}^{\overline k} } {n!} } \dfrac {a^{\overline k} b^{\overline k} } {k! c^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





Rising Factorial in terms of Falling Factorial of Negative








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \dfrac {a^{\overline k} b^{\overline k} \paren {-n}^{\overline k} \paren {c - a - b}^{\overline n} } {n! k! c^{\overline k} \paren {1 + a + b - c - n}^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)





Product of Powers $\paren {-1}^n \times \paren {-1}^n = \paren {-1}^{2 n} = 1$ and rearranging








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n \dfrac {a^{\overline k} b^{\overline k} \paren {-n}^{\overline k} } {k! c^{\overline k} \paren {1 + a + b - c - n}^{\overline k} }\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {c^{\overline n} \paren {c - a - b}^{\overline n} }\)





multiplying both sides by $\dfrac {n!} {\paren {c - a - b}^{\overline n} }$








\(\ds \leadsto \ \ \)





\(\ds \map { {}_3 \operatorname F_2} { { {a, b, -n} \atop {c, 1 + a + b - c - n} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {c^{\overline n} \paren {c - a - b}^{\overline n} }\)





Definition of Generalized Hypergeometric Function



$\blacksquare$


Also known as
Some sources refer to the Pfaff-Saalschütz Theorem as Saalschütz's Hypergeometric Theorem.


Examples
Example: $\map { {}_3 \operatorname F_2} {\dfrac 1 2, \dfrac 1 2, -2; \dfrac 3 2, -\dfrac 3 2; 1}$
$\ds \map { {}_3 \operatorname F_2} { { {\dfrac 1 2, \dfrac 1 2, -2} \atop {\dfrac 3 2, -\dfrac 3 2} } \, \middle \vert \, 1} = \dfrac {64} {45}$



Also see
Dixon's Hypergeometric Theorem
Gauss's Hypergeometric Theorem
Kummer's Hypergeometric Theorem
Properties of Generalized Hypergeometric Function


Source of Name
This entry was named for Louis Saalschütz and Johann Friedrich Pfaff.


Historical Note
According to Special Functions by George E. Andrews, Richard Askey and Ranjan Roy, the Pfaff-Saalschütz Theorem was discovered by Johann Friedrich Pfaff in $1797$, and rediscovered by Louis Saalschütz in $1890$.
The proof shown here is a more detailed version of a proof presented in chapter $2$ of Generalized Hypergeometric Series by Wilfrid Norman Bailey, as follows.

In the formula:




\(\text {(1)}: \quad\)









\(\ds \paren {1 - z}^{a + b - c} \map F {a, b; c; z}\)

\(=\)







\(\ds \map F {c - a, c - b; c; z}\)









obtained in $\S 1.2$, equate the coefficients of $z^n$ to obtain:




\(\text {(2)}: \quad\)









\(\ds \sum_{r \mathop = 0}^n \dfrac {a^{\overline r} b^{\overline r} } {r! c^{\overline r} } \dfrac {\paren {c - a - b}^{\overline {n - r} } } {\paren {n - r}!}\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)









Hence:




\(\text {(3)}: \quad\)









\(\ds \sum_{r \mathop = 0}^n \dfrac { a^{\overline r} b^{\overline r} \paren {c - a - b}^{\overline n} \paren {-n}^{\overline r} } {r! c^{\overline r} \paren {1 + a + b - c - n}^{\overline r} n!}\)

\(=\)







\(\ds \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } {n! c^{\overline n} }\)









As can be seen, Bailey vaulted over several intermediate steps between steps $(2)$ and $(3)$, but his assertions were correct.


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$
1935: W.N. Bailey: Generalized Hypergeometric Series Chapter $\text {2}$. The hypergeometric series
Weisstein, Eric W. "Saalschütz's Theorem." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/SaalschuetzsTheorem.html




