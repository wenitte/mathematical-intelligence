# 

Source: https://proofwiki.org/wiki/Pi_Squared_is_Irrational/Proof_3/Lemma

Pi Squared is Irrational: Lemma
Let $n \in \Z_{\ge 0}$ be a positive integer.

Let it be supposed that $\pi^2$ is irrational, so that:

$\pi^2 = \dfrac p q$
where $p$ and $q$ are integers and $q \ne 0$.

Let $A_n$ be defined as:

$\ds A_n = \frac \pi 2 \frac {p^n} {n!}  \int_0^1 \paren {1 - x^2 }^n \map \cos {\dfrac {\pi x} 2} \rd x$
Then:

$A_n = \paren {16 n - 8} q A_{n - 1} - 16 p q A_{n - 2}$
is a reduction formula for $A_n$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \paren {1 - x^2 }^n\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds n \paren {1 - x^2 }^{n - 1} \paren {- 2 x}\)





Power Rule for Derivatives and Chain Rule for Derivatives



and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \map \cos {\dfrac {\pi x} 2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac 2 \pi \map \sin {\dfrac {\pi x} 2}\)





Primitive of Cosine Function



Then:














\(\ds A_n\)

\(=\)







\(\ds \frac \pi 2 \frac {p^n} {n!}  \int_0^1 \paren {1 - x^2 }^n \map \cos {\dfrac {\pi x} 2} \rd x\)





by definition














\(\ds \)

\(=\)







\(\ds \frac \pi 2 \frac {p^n} {n!} \paren {\frac 2 \pi \bigintlimits {\paren {1 - x^2 }^n \paren {\map \sin {\dfrac {\pi x} 2} } } 0 1 - \frac 2 \pi \int_0^1  \paren {\map \sin {\dfrac {\pi x} 2} } n \paren {1 - x^2 }^{n - 1} \paren {- 2 x} \rd x }\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {p^n} {n!} \int_0^1 n \paren {1 - x^2 }^{n - 1} \paren {2 x} \map \sin {\dfrac {\pi x} 2} \rd x\)





as $\dfrac 2 \pi \bigintlimits {\paren {1 - x^2 }^n \paren {\map \sin {\dfrac {\pi x} 2} } } 0 1$ trivially evaluates to $0$



$\Box$

Let:














\(\ds u\)

\(=\)







\(\ds n \paren {1 - x^2 }^{n - 1} \paren {2 x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -n \paren {n - 1} \paren {1 - x^2 }^{n - 2} \paren {2 x}^2 + 2 n \paren {1 - x^2 }^{n - 1}\)





Power Rule for Derivatives, Product Rule for Derivatives and Chain Rule for Derivatives



Now let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \map \sin {\dfrac {\pi x} 2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\frac 2 \pi \map \cos {\dfrac {\pi x} 2}\)





Primitive of Sine Function



Then:














\(\ds A_n\)

\(=\)







\(\ds \frac {p^n} {n!} \int_0^1 n \paren {1 - x^2 }^{n - 1} \paren {2 x} \map \sin {\dfrac {\pi x} 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {p^n} {n!} \paren {-\frac 2 \pi \bigintlimits {n \paren {1 - x^2 }^{n - 1} \paren {2 x} \paren {\map \cos {\dfrac {\pi x} 2} } } 0 1 - \paren {-\frac 2 \pi } \int_0^1  \paren {\map \cos {\dfrac {\pi x} 2} } \paren {-n \paren {n - 1} \paren {1 - x^2 }^{n - 2} \paren {2 x}^2 + 2 n \paren {1 - x^2 }^{n - 1} } \rd x}\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {p^n} {n!} \paren {\frac 2 \pi \int_0^1  \paren {\map \cos {\dfrac {\pi x} 2} } \paren {-n \paren {n - 1} \paren {1 - x^2 }^{n - 2} \paren {2 x}^2 + 2 n \paren {1 - x^2 }^{n - 1} } \rd x}\)





as $\bigintlimits {n \paren {1 - x^2 }^{n - 1} \paren {2 x} \paren {\map \cos {\dfrac {\pi x} 2} } } 0 1$ trivially evaluates to $0$














\(\ds \)

\(=\)







\(\ds \frac {p^n} {n!} \frac 2 \pi \int_0^1 \paren {2 n \paren {1 - x^2 }^{n - 1} - n \paren {n - 1} \paren {1 - x^2 }^{n - 2} \paren {2 x}^2 } \map \cos {\dfrac {\pi x} 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {p^n} {n!} \frac {4 n} \pi \int_0^1 \paren {1 - x^2 }^{n - 1} \map \cos {\dfrac {\pi x} 2} \rd x - \frac {p^n} {n!} \frac {8 n \paren {n - 1} } \pi \int_0^1 \paren {1 - x^2 }^{n - 2} \paren {x}^2 \map \cos {\dfrac {\pi x} 2} \rd x\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \frac {4 p} \pi \frac {p^{n - 1} } {\paren {n - 1}!} \int_0^1 \paren {1 - x^2 }^{n - 1} \map \cos {\dfrac {\pi x} 2} \rd x - \frac {8 p^2} \pi \frac {p^{n - 2} } {\paren {n - 2}!} \int_0^1 \paren {1 - x^2 }^{n - 2} \paren {x}^2 \map \cos {\dfrac {\pi x} 2} \rd x\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {8 p} {\pi^2} A_{n - 1} - \frac {8 p^2} \pi \frac {p^{n - 2} } {\paren {n - 2}!} \int_0^1 \paren {1 - x^2 }^{n - 2} \paren {x^2} \map \cos {\dfrac {\pi x} 2} \rd x\)





recalling $\ds A_{n - 1} = \frac \pi 2 \frac {p^{n - 1} } {\paren {n - 1}!} \int_0^1 \paren {1 - x^2 }^{n - 1} \map \cos {\dfrac {\pi x} 2} \rd x$














\(\ds \)

\(=\)







\(\ds \frac {8 p} {\pi^2} A_{n - 1} - \frac {8 p^2} \pi \frac {p^{n - 2} } {\paren {n - 2}!} \int_0^1 \paren {1 - x^2 }^{n - 2} \paren {x^2} \map \cos {\dfrac {\pi x} 2} \rd x + \paren {\frac {8 p^2} \pi \frac {p^{n - 2} } {\paren {n - 2}!} \int_0^1 \paren {1 - x^2 }^{n - 2} \map \cos {\dfrac {\pi x} 2} \rd x - \frac {8 p^2} \pi \frac {p^{n - 2} } {\paren {n - 2}!} \int_0^1 \paren {1 - x^2 }^{n - 2} \map \cos {\dfrac {\pi x} 2} \rd x }\)





adding $0$














\(\ds \)

\(=\)







\(\ds \frac {8 p} {\pi^2} A_{n - 1} + \frac {8 p^2} \pi \frac {p^{n - 2} } {\paren {n - 2}!} \int_0^1 \paren {1 - x^2 }^{n - 1} \map \cos {\dfrac {\pi x} 2} \rd x - \frac {8 p^2} \pi \frac {p^{n - 2} } {\paren {n - 2}!} \int_0^1 \paren {1 - x^2 }^{n - 2} \map \cos {\dfrac {\pi x} 2} \rd x\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \frac {8 p} {\pi^2} A_{n - 1} + \frac {8 p^2} \pi \frac {p^{n - 2} } {\paren {n - 2}!} \times \frac {\paren {n - 1} } {\paren {n - 1} } \int_0^1 \paren {1 - x^2 }^{n - 1} \map \cos {\dfrac {\pi x} 2} \rd x - \frac {8 p^2} \pi \frac {p^{n - 2} } {\paren {n - 2}!} \int_0^1 \paren {1 - x^2 }^{n - 2} \map \cos {\dfrac {\pi x} 2} \rd x\)





multiplying top and bottom by $\paren {n - 1}$














\(\ds \)

\(=\)







\(\ds \frac {8 p} {\pi^2} A_{n - 1} + \frac {\paren {8 n - 8} p} \pi \frac {p^{n - 1} } {\paren {n - 1}!} \int_0^1 \paren {1 - x^2 }^{n - 1} \map \cos {\dfrac {\pi x} 2} \rd x - \frac {16 p^2} {\pi^2} A_{n - 2}\)





recalling $\ds A_{n - 2} = \frac \pi 2 \frac {p^{n - 2} } {\paren {n - 2}!} \int_0^1 \paren {1 - x^2 }^{n - 2} \map \cos {\dfrac {\pi x} 2} \rd x$














\(\ds \)

\(=\)







\(\ds \frac {8 p} {\pi^2} A_{n - 1} + \frac {\paren {16 n - 16} p} {\pi^2} A_{n - 1} - \frac {16 p^2} {\pi^2} A_{n - 2}\)





recalling $\ds A_{n - 1} = \frac \pi 2 \frac {p^{n - 1} } {\paren {n - 1}!} \int_0^1 \paren {1 - x^2 }^{n - 1} \map \cos {\dfrac {\pi x} 2} \rd x$














\(\ds \)

\(=\)







\(\ds \frac {\paren {16 n - 8} p} {p / q} A_{n - 1} - \frac {16 p^2} {p / q} A_{n - 2}\)





assuming $\pi^2 = \dfrac p q$














\(\ds \)

\(=\)







\(\ds \paren {16 n - 8} q A_{n - 1} - 16 p q A_{n - 2}\)









$\blacksquare$





