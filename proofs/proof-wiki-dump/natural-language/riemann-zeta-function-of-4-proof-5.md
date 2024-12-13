# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_of_4/Proof_5

Theorem
The Riemann zeta function of $4$ is given by:














\(\ds \map \zeta 4\)

\(=\)







\(\ds \dfrac 1 {1^4} +  \dfrac 1 {2^4} +  \dfrac 1 {3^4} +  \dfrac 1 {4^4} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pi^4} {90}\)




















\(\ds \)

\(\approx\)







\(\ds 1 \cdotp 08232 \, 3 \ldots\)











Proof
Create a multiplication table where the column down the left hand side and the row across the top each contains the terms of zeta function of $2$:

$\begin {array} {c|cccccccccc}
\paren {\map \zeta 2}^2 & \paren {\dfrac 1 {1^2} } & \paren {\dfrac 1 {2^2} } & \paren {\dfrac 1 {3^2} } & \paren {\dfrac 1 {4^2} } & \cdots \\
\hline

\paren {\dfrac 1 {1^2} } & \paren {\dfrac 1 {1^4} } & \paren {\dfrac 1 {1^2} } \paren {\dfrac 1 {2^2} } & \paren {\dfrac 1 {1^2} } \paren {\dfrac 1 {3^2} } & \paren {\dfrac 1 {1^2} } \paren {\dfrac 1 {4^2} } & \cdots \\

\paren {\dfrac 1 {2^2} }  & \paren {\dfrac 1 {2^2} } \paren {\dfrac 1 {1^2} } & \paren {\dfrac 1 {2^4} } & \paren {\dfrac 1 {2^2} } \paren {\dfrac 1 {3^2} } & \paren {\dfrac 1 {2^2} } \paren {\dfrac 1 {4^2} } & \cdots \\

\paren {\dfrac 1 {3^2} }  & \paren {\dfrac 1 {3^2} } \paren {\dfrac 1 {1^2} } & \paren {\dfrac 1 {3^2} } \paren {\dfrac 1 {2^2} } & \paren {\dfrac 1 {3^4} } & \paren {\dfrac 1 {3^2} } \paren {\dfrac 1 {4^2} } & \cdots \\

\paren {\dfrac 1 {4^2} }  & \paren {\dfrac 1 {4^2} } \paren {\dfrac 1 {1^2} } & \paren {\dfrac 1 {4^2} } \paren {\dfrac 1 {2^2} } & \paren {\dfrac 1 {4^2} } \paren {\dfrac 1 {3^2} } & \paren {\dfrac 1 {4^4} } & \cdots \\

\vdots & \vdots & \vdots & \vdots & \vdots & \ddots \\
\end {array}$

The sum of all of the entries in this table is equal to $\paren {\map \zeta 2}^2$.

$\map \zeta 4$ is the sum of the entries along the main diagonal.

We have:














\(\ds \paren {\map \zeta 2}^2\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^\infty {\frac 1 {i^2} } } \paren {\sum_{j \mathop = 1}^\infty {\frac 1 {j^2} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^\infty \sum_{j \mathop = 1}^\infty {\frac 1 {i^2} } {\frac 1 {j^2} }\)





Product of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^{\infty} {\frac 1 {i^4} } + \sum_{i \mathop = 1}^\infty \sum_{j \mathop = {i + 1} }^\infty {\frac 1 {i^2} } {\frac 1 {j^2} } + \sum_{j \mathop = 1}^\infty \sum_{i \mathop = {j + 1} }^\infty {\frac 1 {i^2} } {\frac 1 {j^2} }\)





$\paren {i = j} + \paren {j > i} + \paren {j < i}$














\(\ds \)

\(=\)







\(\ds \map \zeta 4  + 2  \sum_{i \mathop = 1}^\infty \sum_{j \mathop = {i + 1} }^\infty {\frac 1 {i^2} } {\frac 1 {j^2} }\)










Let:














\(\ds P_k\)

\(=\)







\(\ds x \prod_{n \mathop = 1}^k \paren {1 - \frac {x^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds x \paren {1 - \dfrac {x^2} {1 \pi^2} } \paren {1 - \dfrac {x^2} {2^2 \pi^2} } \paren {1 - \dfrac {x^2} {3^2 \pi^2} } \cdots \paren {1 - \dfrac {x^2} {k^2 \pi^2} }\)









Therefore:














\(\ds P_1\)

\(=\)







\(\ds x - \frac {x^3} {\pi^2} \paren {\dfrac 1 {1^2} }\)




















\(\ds P_2\)

\(=\)







\(\ds x - \frac {x^3} {\pi^2} \paren {\dfrac 1 {1^2} +  \dfrac 1 {2^2} } + \frac {x^5} {\pi^4} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} }\)




















\(\ds P_3\)

\(=\)







\(\ds x - \frac {x^3} {\pi^2} \paren {\dfrac 1 {1^2} +  \dfrac 1 {2^2} + \dfrac 1 {3^2} } + \frac {x^5} {\pi^4} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} + \dfrac 1 {1^2} \dfrac 1 {3^2} + \dfrac 1 {2^2} \dfrac 1 {3^2} } - \frac {x^7} {\pi^6} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} \dfrac 1 {3^2} }\)




















\(\ds P_4\)

\(=\)







\(\ds x - \frac {x^3} {\pi^2} \paren {\dfrac 1 {1^2} +  \dfrac 1 {2^2} + \dfrac 1 {3^2} + \dfrac 1 {4^2} } + \frac {x^5} {\pi^4} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} + \dfrac 1 {1^2} \dfrac 1 {3^2} + \dfrac 1 {1^2} \dfrac 1 {4^2} + \dfrac 1 {2^2} \dfrac 1 {3^2} + \dfrac 1 {2^2} \dfrac 1 {4^2} + \dfrac 1 {3^2} \dfrac 1 {4^2} } - \frac {x^7} {\pi^6} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} \dfrac 1 {3^2} + \dfrac 1 {1^2} \dfrac 1 {2^2} \dfrac 1 {4^2} + \dfrac 1 {1^2} \dfrac 1 {3^2} \dfrac 1 {4^2} + \dfrac 1 {2^2} \dfrac 1 {3^2} \dfrac 1 {4^2} } + \frac {x^9} {\pi^8} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} \dfrac 1 {3^2} \dfrac 1 {4^2} }\)









We make the following observations:

$(1): \quad$ The number of terms added to calculate the coefficient of the $x^3$ term is $\dbinom k 1 = k$
$(2): \quad$ The number of terms added to calculate the coefficient of the $x^5$ term is $\dbinom k 2$
$(3): \quad$ For $k \ge 1$, the coefficient  of $x^3$ in $\ds P_k = - \dfrac 1 {\pi^2} \sum_{i \mathop = 1}^k \dfrac 1 {i^2}$
$(4): \quad$ For $k \ge 2$, the coefficient  of $x^5$ in $\ds P_k = \dfrac 1 {\pi^4} \sum_{i \mathop = 1}^{k - 1} \sum_{j \mathop = {i + 1} }^k \paren {\frac 1 {i^2} } \paren {\frac 1 {j^2} } $

Expanding the product out to k, we get:














\(\ds P_k\)

\(=\)







\(\ds x - \dfrac {x^3} {\pi^2} \sum_{i \mathop = 1}^k \dfrac 1 {i^2} + \frac {x^5} {\pi^4} \sum_{i \mathop = 1}^{k - 1} \sum_{j \mathop = {i + 1} }^k \paren {\frac 1 {i^2} } \paren {\frac 1 {j^2} } -  \cdots\)









Now recall the following two representations of the Sine of x:














\(\ds \sin x\)

\(=\)







\(\ds x \prod_{n \mathop = 1}^\infty \paren {1 - \dfrac {x^2} {n^2 \pi^2} }\)





Euler Formula for Sine Function
















\(\ds \sin x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac {x^{2 n + 1} } {\paren {2 n + 1}!} = x - \dfrac {x^3} {3!} + \dfrac {x^5} {5!} - \dfrac {x^7} {7!} + \cdots\)





Power Series Expansion for Sine Function



Notice that by taking the limit of $P_k$ as $k \to \infty$, we obtain precisely the Euler Formula for Sine Function.
Equating the coefficient of $x^5$ in the Euler Formula for Sine Function with the Power Series Expansion for Sine Function, we have:

$\ds \lim_{k \mathop \to \infty}  \dfrac 1 {\pi^4} \sum_{i \mathop = 1}^{k - 1} \sum_{j \mathop = {i + 1} }^k \paren {\frac 1 {i^2} } \paren {\frac 1 {j^2} } = \frac 1 {5!}$
Therefore:

$\ds \sum_{i \mathop = 1}^\infty \sum_{j \mathop = {i + 1} }^\infty \paren {\frac 1 {i^2} } \paren {\frac 1 {j^2} } = \frac {\pi^4} {5!}$

Therefore:














\(\ds \paren {\map \zeta 2}^2\)

\(=\)







\(\ds \map \zeta 4  + 2  \sum_{i \mathop = 1}^\infty \sum_{j \mathop = {i + 1} }^\infty {\frac 1 {i^2} } {\frac 1 {j^2} }\)




















\(\ds \paren {\map \zeta 2}^2\)

\(=\)







\(\ds \map \zeta 4 + 2  \dfrac {\pi^4} {5!}\)




















\(\ds \map \zeta 4\)

\(=\)







\(\ds \paren {\map \zeta 2}^2  - 2  \dfrac {\pi^4} {5!}\)





Rearranging














\(\ds \)

\(=\)







\(\ds \paren{\dfrac {\pi^2} 6 }^2 - \dfrac {\pi^4} {60}\)





Basel Problem














\(\ds \)

\(=\)







\(\ds \dfrac {\pi^4} {36} - \dfrac {\pi^4} {60}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {5\pi^4} {180} - \dfrac {3\pi^4} {180}\)




















\(\ds \)

\(=\)







\(\ds \frac {2\pi^4} {180}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^4} {90}\)









$\blacksquare$





