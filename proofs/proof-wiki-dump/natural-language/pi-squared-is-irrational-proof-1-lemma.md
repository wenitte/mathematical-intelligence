# 

Source: https://proofwiki.org/wiki/Pi_Squared_is_Irrational/Proof_1/Lemma

Pi Squared is Irrational: Lemma
Let $n \in \Z_{\ge 0}$ be a positive integer.

Let it be supposed that $\pi^2$ is irrational, so that:

$\pi^2 = \dfrac p q$
where $p$ and $q$ are integers and $q \ne 0$.

Let $A_n$ be defined as:

$\ds A_n = \frac {q^n} {n!} \int_0^\pi \paren {x \paren {\pi - x} }^n \sin x \rd x$
Then:

$A_n = \paren {4 n - 2} q A_{n - 1} - p q A_{n - 2}$
is a reduction formula for $A_n$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \paren {x \paren {\pi - x} }^n\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds n \paren {x \paren {\pi - x} }^{n - 1} \paren {\pi - 2 x}\)





Power Rule for Derivatives and Chain Rule for Derivatives



and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \sin x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\cos x\)





Primitive of Sine Function



Then:














\(\ds A_n\)

\(=\)







\(\ds \frac {q^n} {n!} \int_0^\pi \paren {x \paren {\pi - x} }^n \sin x \rd x\)





by definition














\(\ds \)

\(=\)







\(\ds \frac {q^n} {n!} \paren {\bigintlimits {\paren {x \paren {\pi - x} }^n \paren {-\cos x} } 0 \pi - \int_0^\pi  \paren {-\cos x} n \paren {x \paren {\pi - x} }^{n - 1} \paren {\pi - 2 x} \rd x }\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {q^n} {n!} \int_0^\pi n \paren {x \paren {\pi - x} }^{n - 1} \paren {\pi - 2 x} \cos x \rd x\)





as $\bigintlimits {\paren {x \paren {\pi - x} }^n \paren {-\cos x} } 0 \pi$ trivially evaluates to $0$



$\Box$

Let:














\(\ds u\)

\(=\)







\(\ds n \paren {x \paren {\pi - x} }^{n - 1} \paren {\pi - 2 x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds n \paren {n - 1} \paren {x \paren {\pi - x} }^{n - 2} \paren {\pi - 2 x}^2 + \paren {-2} n \paren {x \paren {\pi - x} }^{n - 1}\)





Power Rule for Derivatives, Product Rule for Derivatives and Chain Rule for Derivatives



Now let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \cos x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \sin x\)





Primitive of Cosine Function




We note in passing that:

$(1): \quad \paren {q \pi}^2 = q^2 \paren {\dfrac p q} = p q$
which, by hypothesis, is an integer.

Then:














\(\ds A_n\)

\(=\)







\(\ds \frac {q^n} {n!} \int_0^\pi n \paren {x \paren {\pi - x} }^{n - 1} \paren {\pi - 2 x} \cos x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {q^n} {n!} \paren {\bigintlimits {n \paren {x \paren {\pi - x} }^{n - 1} \paren {\pi - 2 x} \paren {\sin x} } 0 \pi - \int_0^\pi  \paren {\sin x} \paren {n \paren {n - 1} \paren {x \paren {\pi - x} }^{n - 2} \paren {\pi - 2 x}^2 - 2 n \paren {x \paren {\pi - x} }^{n - 1} } \rd x}\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {q^n} {n!} \paren {-\int_0^\pi  \paren {\sin x} \paren {n \paren {n - 1} \paren {x \paren {\pi - x} }^{n - 2} \paren {\pi - 2 x}^2 - 2 n \paren {x \paren {\pi - x} }^{n - 1} } \rd x}\)





as $\bigintlimits {n \paren {x \paren {\pi - x} }^{n - 1} \paren {\pi - 2 x} \paren {\sin x} } 0 \pi$ trivially evaluates to $0$














\(\ds \)

\(=\)







\(\ds \frac {q^n} {n!} \int_0^\pi \paren {2 n \paren {x \paren {\pi - x} }^{n - 1} - n \paren {n - 1} \paren {x \paren {\pi - x} }^{n - 2} \paren {\pi - 2 x}^2 } \sin x \rd x\)





Sine of Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac {q^n} {n!} 2 n \int_0^\pi \paren {x \paren {\pi - x} }^{n - 1} \sin x \rd x - \frac {q^n} {n!} n \paren {n - 1} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 2} \paren {\pi - 2 x}^2 \sin x \rd x\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds 2 q \frac {q^{n - 1} } {\paren {n - 1}!} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 1} \sin x \rd x - q^2 \frac {q^{n - 2} } {\paren {n - 2}!} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 2} \paren {\pi - 2 x}^2 \sin x \rd x\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds 2 q A_{n - 1} - q^2 \frac {q^{n - 2} } {\paren {n - 2}!} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 2} \paren {\pi^2 - 4 x \pi + 4 x^2} \sin x \rd x\)





recalling $\ds A_{n - 1} = \frac {q^{n - 1} } {\paren {n - 1}!} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 1} \sin x \rd x$ and Square of Sum














\(\ds \)

\(=\)







\(\ds 2 q A_{n - 1} - \pi^2 q^2 \frac {q^{n - 2} } {\paren {n - 2}!} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 2} \sin x \rd x + 4 q^2 \frac {q^{n - 2} } {\paren {n - 2}!} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 1} \sin x \rd x\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds 2 q A_{n - 1} - p q \frac {q^{n - 2} } {\paren {n - 2}!} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 2} \sin x \rd x + 4 \frac {\paren {n - 1} } {\paren {n - 1} } q^2 \frac {q^{n - 2} } {\paren {n - 2}!} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 1} \sin x \rd x\)





multiplying top and bottom by $\paren {n - 1}$, and $\pi^2 q^2 = p q$ from $(1)$














\(\ds \)

\(=\)







\(\ds 2 q A_{n - 1} - p q A_{n - 2} + \paren {4 n - 4} q \frac {q^{n - 1} } {\paren {n - 1}!} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 1} \sin x \rd x\)





recalling $\ds A_{n - 2} = \frac {q^{n - 2} } {\paren {n - 2}!} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 2} \sin x \rd x$














\(\ds \)

\(=\)







\(\ds 2 q A_{n - 1} - p q A_{n - 2} + \paren {4 n - 4} q A_{n - 1}\)





recalling $\ds A_{n - 1} = \frac {q^{n - 1} } {\paren {n - 1}!} \int_0^\pi \paren {x \paren {\pi - x} }^{n - 1} \sin x \rd x$














\(\ds \)

\(=\)







\(\ds \paren {4 n - 2} q A_{n - 1} - p q A_{n - 2}\)









$\blacksquare$





