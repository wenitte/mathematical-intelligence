# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Euler%27s_Number/Proof_1/Lemma

Theorem
For $n \in \Z , n \ge 0$:













\(\ds A_n\)

\(=\)







\(\ds q_{3 n} e - p_{3 n}\)




















\(\ds B_n\)

\(=\)







\(\ds p_{3 n + 1} - q_{3 n + 1} e\)




















\(\ds C_n\)

\(=\)







\(\ds p_{3 n + 2} - q_{3 n + 2} e\)











Proof
To prove the assertion, we begin by demonstrating the relationships hold for the initial conditions at $n = 0$:














\(\ds A_0\)

\(=\)







\(\ds \int_0^1 e^x \rd x\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {e^x} {x \mathop = 0} {x \mathop = 1}\)





Primitive of Exponential Function














\(\ds \)

\(=\)







\(\ds e - 1\)




















\(\ds \)

\(=\)







\(\ds q_0 e - p_0\)




















\(\ds B_0\)

\(=\)







\(\ds \int_0^1 x e^x \rd x\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {x e^x - e^x} {x \mathop = 0} {x \mathop = 1}\)





Primitive of x by Exponential of a x














\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds p_1 - q_1 e\)




















\(\ds C_0\)

\(=\)







\(\ds \int_0^1 \paren {x - 1} e^x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^1 x e^x \rd x - \int_0^1 e^x \rd x\)




















\(\ds \)

\(=\)







\(\ds B_0 - A_0\)




















\(\ds \)

\(=\)







\(\ds 1 - \paren {e - 1}\)




















\(\ds \)

\(=\)







\(\ds 2 - e\)




















\(\ds \)

\(=\)







\(\ds p_2 - q_2 e\)










The final step needed to validate the assertion, we must demonstrate that the following three recurrence relations hold:




\(\text {(1)}: \quad\)









\(\ds A_n\)

\(=\)







\(\ds -B_{n - 1} - C_{n - 1}\)










\(\text {(2)}: \quad\)









\(\ds B_n\)

\(=\)







\(\ds -2 n A_n + C_{n - 1}\)










\(\text {(3)}: \quad\)









\(\ds C_n\)

\(=\)







\(\ds B_n - A_n\)










To prove the first relation, we note that the derivative of the integrand of $A_n$ is equal to the sum of the integrand of $A_n$ with the integrand of $B_{n - 1}$ and the integrand of $C_{n - 1}$.
By integrating both sides of the equation, we verify the first recurrence relation:














\(\ds \map {\frac \d {\d x} } {\frac {x^n \paren {x - 1}^n } {n!} e^x}\)

\(=\)







\(\ds \frac {x^n \paren {x - 1 }^n} {n!} e^x + \frac {x^n \paren {x - 1}^{n - 1} } {\paren {n - 1}!} e^x + \frac {x^{n - 1} \paren {x - 1}^n} {\paren {n - 1}!} e^x\)














\(\ds \leadsto \ \ \)





\(\ds \int_0^1 \map {\frac \d {\d x} } {\frac {x^n \paren {x - 1}^n} {n!} e^x}\)

\(=\)







\(\ds \int_0^1 \frac {x^n \paren {x - 1}^n} {n!} e^x \rd x + \int_0^1 \frac {x^n \paren {x - 1}^{n - 1} } {\paren {n - 1}!} e^x \rd x + \int_0^1 \frac {x^{n - 1} \paren {x - 1}^n} {\paren {n - 1}!} e^x \rd x\)





Integrating both sides of the equation over the interval from $0$ to $1$








\(\ds \leadsto \ \ \)





\(\ds \intlimits {\frac {x^n \paren {x - 1}^n} {n!} e^x} {x \mathop = 0} {x \mathop = 1}\)

\(=\)







\(\ds A_n + B_{n - 1} + C_{n - 1}\)





Fundamental Theorem of Calculus








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds A_n + B_{n - 1} + C_{n - 1}\)














\(\ds \leadsto \ \ \)





\(\ds A_n\)

\(=\)







\(\ds -B_{n - 1} - C_{n - 1}\)





rearranging




To prove the second relation, we note that the derivative of the integrand of $C_n$ is equal to the sum of the integrand of $B_n$ with two times n times the integrand of $A_{n}$ minus the integrand of $C_{n - 1}$.
By integrating both sides of the equation, we verify the second recurrence relation:














\(\ds \map {\frac \d {\d x} } {\frac {x^n \paren {x - 1}^{n + 1} } {n!} e^x}\)

\(=\)







\(\ds \frac {x^{n + 1} \paren {x - 1}^n} {n!} e^x + 2 n \frac {x^n \paren {x - 1}^n} {n!} e^x - \frac {x^{n - 1} \paren {x - 1}^n} {\paren {n - 1}!} e^x\)














\(\ds \leadsto \ \ \)





\(\ds \int_0^1 \map {\frac \d {\d x} } {\frac {x^n \paren {x - 1}^{n + 1} } {n!} e^x}\)

\(=\)







\(\ds \int_0^1 \frac {x^{n + 1} \paren {x - 1}^n} {n!} e^x \rd x + 2 n \int_0^1 \frac {x^n \paren {x - 1}^n} {n!} e^x \rd x - \int_0^1 \frac {x^{n - 1} \paren {x - 1}^n} {\paren {n - 1}!} e^x \rd x\)





Integrating both sides of the equation over the interval from $0$ to $1$








\(\ds \leadsto \ \ \)





\(\ds \intlimits {\frac {x^n \paren {x - 1}^{n + 1} } {n!} e^x} {x \mathop = 0} {x \mathop = 1}\)

\(=\)







\(\ds B_n + 2 n A_{n} - C_{n - 1}\)





Fundamental Theorem of Calculus








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds B_n + 2 n A_n - C_{n - 1}\)














\(\ds \leadsto \ \ \)





\(\ds B_n\)

\(=\)







\(\ds -2 n A_n + C_{n - 1}\)





rearranging




To prove the third relation, we have:














\(\ds C_n\)

\(=\)







\(\ds \int_0^1 \frac {x^n \paren {x - 1}^{n + 1} } {n!} e^x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^1 \frac {x^n \paren {x - 1 }^n} {n!} e^x \paren {x - 1} \rd x\)





factoring out $\paren {x - 1}$














\(\ds \)

\(=\)







\(\ds \int_0^1 \frac {x^n \paren {x - 1}^n} {n!} e^x \paren x \rd x - \int_0^1 \frac {x^n \paren {x - 1}^n} {n!} e^x \paren 1 \rd x\)





separate integrals














\(\ds \)

\(=\)







\(\ds \int_0^1 \frac {x^{n + 1} \paren {x - 1}^n} {n!} e^x \rd x - \int_0^1 \frac {x^n \paren {x - 1}^n} {n!} e^x \rd x\)




















\(\ds \)

\(=\)







\(\ds B_n - A_n\)










From the first relation, combined with the initial condition at $n = 0$ being satisfied, we have:














\(\ds A_n\)

\(=\)







\(\ds -B_{n - 1} - C_{n - 1}\)




















\(\ds \)

\(=\)







\(\ds -\paren {p_{3 n - 2} - q_{3 n -2 } e} - \paren {p_{3 n - 1} - q_{3 n - 1} e}\)




















\(\ds \)

\(=\)







\(\ds q_{3 n} e - p_{3 n}\)










From the second relation, combined with the initial condition at $n = 0$ being satisfied, we have:














\(\ds B_n\)

\(=\)







\(\ds -2 n A_n + C_{n - 1}\)




















\(\ds \)

\(=\)







\(\ds -2 n \paren {q_{3 n} e - p_{3 n} } + \paren {p_{3 n - 1} - q_{3 n - 1} e}\)




















\(\ds \)

\(=\)







\(\ds p_{3 n + 1} - q_{3 n + 1} e\)










From the third relation, combined with the initial condition at $n = 0$ being satisfied, we have:














\(\ds C_n\)

\(=\)







\(\ds B_n - A_n\)




















\(\ds \)

\(=\)







\(\ds \paren {p_{3 n + 1} - q_{3 n + 1} e} - \paren {q_{3 n} e - p_{3 n} }\)




















\(\ds \)

\(=\)







\(\ds p_{3 n + 2} - q_{3 n + 2 } e\)









$\blacksquare$


Sources
2006: Henry Cohn: A Short Proof of the Simple Continued Fraction Expansion of e (Amer. Math. Monthly Vol. 113: p. 57)  www.jstor.org/stable/27641837




