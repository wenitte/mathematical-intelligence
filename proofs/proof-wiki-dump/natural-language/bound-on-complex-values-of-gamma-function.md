# 

Source: https://proofwiki.org/wiki/Bound_on_Complex_Values_of_Gamma_Function

Theorem
Let $\map \Gamma z$ denote the Gamma function.

Then for any complex number $z = s + i t$, we have for $\size b \le \size t$:

$\size {\map \Gamma {s + i t} } \le \dfrac {\size {s + i b} } {\size {s + i t} } \size {\map \Gamma {s + i b} }$


Proof
From the Euler Form of the Gamma Function:














\(\ds \size {\map \Gamma {s + i t} }\)

\(=\)







\(\ds \lim_{M \mathop \to \infty} \size {\dfrac 1 {s + i t} \prod_{n \mathop = 1}^M \dfrac {\paren {1 + \frac 1 n}^{s + i t} } {1 + \frac {s + i t} n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{M \mathop \to \infty} \dfrac 1 {\size {s + i t} } \prod_{n \mathop = 1}^M \size {\dfrac {\paren {1 + \frac 1 n}^{s + i t} } {1 + \frac {s + i t} n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{M \mathop \to \infty} \dfrac 1 {\size {s + i t} } \prod_{n \mathop = 1}^M \dfrac {\size {\paren {1 + \frac 1 n}^{s + i t} } } {\size {1 + \frac {s + i t} n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{M \mathop \to \infty} \dfrac 1 {\size {s + i t} } \prod_{n \mathop = 1}^M \dfrac {\size {\paren {1 + \frac 1 n}^s} } {\size {1 + \frac {s + i t} n} }\)





Modulus of Exponential of Imaginary Number is One




Because $\size b \le \size t$, we have that:














\(\ds b^2\)

\(\le\)







\(\ds t^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac b n}^2\)

\(\le\)







\(\ds \paren {\dfrac t n}^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \dfrac s n}^2 + \paren {\dfrac b n}^2\)

\(\le\)







\(\ds \paren {1 + \dfrac s n}^2 + \paren {\dfrac t n}^2\)














\(\ds \leadsto \ \ \)





\(\ds \size {1 + \frac {s + i b} n}\)

\(\le\)







\(\ds \size {1 + \frac {s + i t} n}\)





Definition of Complex Modulus








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 {\size {1 + \frac {s + i b} n} }\)

\(\ge\)







\(\ds \dfrac 1 {\size {1 + \frac {s + i t} n} }\)










Using this we obtain:














\(\ds \size {\map \Gamma {s + i t} }\)

\(=\)







\(\ds \lim_{M \mathop \to \infty} \dfrac 1 {\size {s + i t} } \prod_{n \mathop = 1}^M \dfrac {\size {\paren {1 + \frac 1 n}^s} } {\size {1 + \frac {s + i t} n} }\)




















\(\ds \)

\(\le\)







\(\ds \lim_{M \mathop \to \infty} \dfrac 1 {\size {s + i t} } \prod_{n \mathop = 1}^M \dfrac {\size {\paren {1 + \frac 1 n}^s} } {\size {1 + \frac {s + i b} n} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\size {s + i b} } {\size {s + i t} } \lim_{M \mathop \to \infty} \dfrac 1 {\size {s + i b} } \prod_{n \mathop = 1}^M \dfrac {\size {\paren {1 + \frac 1 n}^s} } {\size {1 + \frac{s + i b} n} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\size {s + i b} } {\size {s + i t} } \lim_{M \mathop \to \infty} \dfrac 1 {\size {s + i b} } \size {\prod_{n \mathop = 1}^M \dfrac {\paren {1 + \frac 1 n}^{s + i b} } {1 + \frac{s + i b} n} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\size {s + i b} } {\size {s + i t} } \size {\map \Gamma {s + i b} }\)









$\blacksquare$





