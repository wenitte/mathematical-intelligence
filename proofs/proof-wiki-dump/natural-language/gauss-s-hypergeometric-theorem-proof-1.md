# 

Source: https://proofwiki.org/wiki/Gauss%27s_Hypergeometric_Theorem/Proof_1



Theorem
$\map F {a, b; c; 1} = \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }$


Proof
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


Source of Name
This entry was named for Carl Friedrich Gauss.


Historical Note
The proof shown above is a more detailed version of a proof by Srinivasa Ramanujan.
Based on Ramanujan's Notebook, as transcribed in Chapter $10$ of Berndt's book, Ramanujan's proof goes as follows:




\(\text {(8.1)}: \quad\)









\(\ds \map F {-x, -y; n + 1; 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + y + n + 1} \map \Gamma {n + 1} } {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} }\)









Assume that $n$ and $x$ are integers with $n \ge 0$ and $n + x \ge 0$.
Expanding $\paren {1 + u}^{y + n}$ and $\paren {1 + \dfrac 1 u}^x$ in their formal binomial series and taking their product, we find that, if $a_n$ is the coefficient of $u^n$:













\(\ds a_n\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \binom {y + n} {k + n} \binom x k\)










\(\text {(8.2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {y + 1} } \sum_{k \mathop = 0}^\infty \dfrac { \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { k! \paren {n + 1}^{\overline k} }\)











On the other hand, expanding $\paren {1 + u}^{x + y + n}$ in its binomial series and dividing by $u^x$, we find that:













\(\ds a_n\)

\(=\)







\(\ds \binom {x + y + n} {x + n}\)










\(\text {(8.3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {x + y + n + 1} } {\map \Gamma {x + n + 1} \map \Gamma {y + 1} }\)











Comparing $(8.2)$ and $(8.3)$, we deduce $(8.1)$.

As can be seen, Ramanujan jumped over several intermediate steps in $(8.2)$, but his assertions were all correct.


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




