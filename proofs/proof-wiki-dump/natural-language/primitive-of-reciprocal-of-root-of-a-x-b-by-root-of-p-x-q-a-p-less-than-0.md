# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_%2B_b_by_Root_of_p_x_%2B_q/a_p_less_than_0



Theorem
Let $a, b, p, q \in \R$ such that $a p \ne b q$.
Let $a p < 0$.
Then:

$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \dfrac 2 {\sqrt {-a p} } \map \arctan {\sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } } } + C$
for all $x \in \R$ such that $\paren {a x + b} \paren {p x + q} > 0$.


Proof 1
Let us make the substitution:




\(\text {(1)}: \quad\)









\(\ds u\)

\(=\)







\(\ds \sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } }\)





This is valid, because as $a p < 0$ we have $\dfrac {-p} a > 0$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d u} {\d x}\)

\(=\)







\(\ds \sqrt {\dfrac {-p} a} \map {\dfrac \d {\d x} } {\sqrt {\dfrac {a x + b} {p x + q} } }\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac {-p} a} \dfrac 1 {2 \sqrt {\dfrac {a x + b} {p x + q} } } \times \map {\dfrac \d {\d x} } {\dfrac {a x + b} {p x + q} }\)





Power Rule for Derivatives, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\dfrac {-p} a} \dfrac {\sqrt {p x + q} } {\sqrt {a x + b} } \times \dfrac {\paren {p x + q} \map {\dfrac \d {\d x} } {a x + b} - \paren {a x + b} \map {\dfrac \d {\d x} } {p x + q} } {\paren {p x + q}^2}\)





Quotient Rule for Derivatives, some simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\dfrac {-p} a} \dfrac {\sqrt {p x + q} } {\sqrt {a x + b} } \times \dfrac {a \paren {p x + q} - p \paren {a x + b} } {\paren {p x + q}^2}\)





Derivative of Identity Function, Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\dfrac {-p} a} \dfrac {\sqrt {p x + q} } {\sqrt {a x + b} } \times \dfrac {a p x + a q - p a x - p b} {\paren {p x + q}^2}\)





mulitplying out














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\dfrac {-p} a} \dfrac {\sqrt {p x + q} } {\sqrt {a x + b} } \times \dfrac {a q - b p} {\paren {p x + q}^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\dfrac {-p} a} \dfrac 1 {\sqrt {p x + q} \sqrt {a x + b} } \times \dfrac {a q - b p} {p x + q}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d u}\)

\(=\)







\(\ds 2 \sqrt {\dfrac {-a} p} \paren {\sqrt {p x + q} \sqrt {a x + b} } \times \dfrac {p x + q} {a q - b p}\)





Derivative of Inverse Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \int \frac {\d u} {\sqrt {\paren {a x + b} \paren {p x + q} } } 2 \sqrt {\dfrac {-a} p} \paren {\sqrt {p x + q} \sqrt {a x + b} } \times \dfrac {p x + q} {a q - b p}\)





Integration by Substitution




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds 2 \sqrt {\dfrac {-a} p} \int \dfrac {p x + q} {a q - b p} \rd u\)





simplifying




Then:














\(\ds u\)

\(=\)







\(\ds \sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } }\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds u^2\)

\(=\)







\(\ds \dfrac {-p \paren {a x + b} } {a \paren {p x + q} }\)














\(\ds \leadsto \ \ \)





\(\ds u^2 \paren {a \paren {p x + q} }\)

\(=\)







\(\ds -p \paren {a x + b}\)














\(\ds \leadsto \ \ \)





\(\ds u^2 a p x + u^2 a q\)

\(=\)







\(\ds -p a x - p b\)














\(\ds \leadsto \ \ \)





\(\ds u^2 a p x + p a x\)

\(=\)







\(\ds -u^2 a q - p b\)














\(\ds \leadsto \ \ \)





\(\ds a p x \paren {u^2 + 1}\)

\(=\)







\(\ds -u^2 a q - p b\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \dfrac 1 {-a p} \dfrac {a q u^2 + p b} {u^2 + 1}\)










Hence:














\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds 2 \sqrt {\dfrac {-a} p} \int \dfrac {p x + q} {a q - b p} \rd u\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 2 \sqrt {\dfrac {-a} p} \int \dfrac {p \paren {\frac 1 {-a p} \frac {a q u^2 + p b} {u^2 + 1} } + q} {a q - b p} \rd u\)





substituting for $x$ from $(3)$














\(\ds \)

\(=\)







\(\ds 2 \sqrt {\dfrac {-a} p} \int \dfrac {a q u^2 + p b - a q \paren {u^2 + 1} } {-a \paren {u^2 + 1} \paren {a q - b p} } \rd u\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \int \dfrac {a q u^2 + p b - a q u^2 - a q} {\paren {u^2 + 1} \paren {b p - a q} } \rd u\)





multiplying out and consolidating constants














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \int \dfrac {b p - a q} {\paren {u^2 + 1} \paren {b p - a q} } \rd u\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \int \dfrac {\d u} {u^2 + 1}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \arctan u + C\)





Primitive of Arctangent Function














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \map \arctan {\sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } } } + C\)





substituting for $u$ from $(1)$



$\blacksquare$


Proof 2
First let us express the integrand in the following form:




\(\text {(1)}: \quad\)









\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \int \frac {\d x} {\sqrt {a p \paren {x - \paren {-\frac b a} } \paren {x - \paren {-\frac q p} } } }\)










Recall the definition of Euler's third substitution:
Let $a x^2 + b x + c$ have real roots $\alpha$ and $\beta$.

Euler's third substitution is the substitution:

$\ds \sqrt {a x^2 + b x + c} = \sqrt {a \paren {x - \alpha} \paren {x - \beta} } = \paren {x - \alpha} t$
Then:

$x = \dfrac {a \beta - \alpha t^2} {a - t^2}$
and hence $\d x$ is expressible as a rational function of $x$.

In this context we have:














\(\ds a\)

\(\gets\)







\(\ds a p\)




















\(\ds \alpha\)

\(\gets\)







\(\ds -\frac b a\)




















\(\ds \beta\)

\(\gets\)







\(\ds -\frac q p\)










Hence we make the substitution:














\(\ds x\)

\(=\)







\(\ds \dfrac {a p \paren {-\frac q p} - \paren {-\frac b a} t^2} {a p - t^2}\)





Lemmata for Euler's Third Substitution: Lemma $1$














\(\ds \)

\(=\)







\(\ds \dfrac {-a q + \paren {\frac b a} t^2} {a p - t^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {a^2 q - b t^2} {a \paren {t^2 - a p} }\)





multiplying top and bottom by $-a$




Then we use:








\(\ds \leadsto \ \ \)





\(\ds x - \alpha\)

\(=\)







\(\ds \dfrac {a \paren {\alpha - \beta} } {t^2 - a}\)





Lemmata for Euler's Third Substitution: Lemma $2$














\(\ds \)

\(=\)







\(\ds \dfrac {a p \paren {\paren {-\frac b a} - \paren {-\frac q p} } } {t^2 - a p}\)





substituting $a \gets a p$, $\alpha \gets -\dfrac b a$, $\beta \gets -\dfrac q p$




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x - \alpha\)

\(=\)







\(\ds \dfrac {a q - p b} {t^2 - a p}\)





simplifying




Then:














\(\ds \dfrac {\d x} {\d t}\)

\(=\)







\(\ds \dfrac {2 t a \paren {\beta - \alpha} } {\paren {a - t^2}^2}\)





Lemmata for Euler's Third Substitution: Lemma $3$














\(\ds \)

\(=\)







\(\ds \dfrac {2 t a p \paren {\paren {-\frac q p} - \paren {-\frac b a} } } {\paren {a p - t^2}^2}\)





substituting $a \gets a p$, $\alpha \gets -\dfrac b a$, $\beta \gets -\dfrac q p$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d t}\)

\(=\)







\(\ds \dfrac {2 t \paren {b p - a q} } {\paren {t^2 - a p}^2}\)





simplifying




Then:














\(\ds t\)

\(=\)







\(\ds \sqrt {\dfrac {a \paren {x - \beta} } {x - \alpha} }\)





Lemmata for Euler's Third Substitution: Lemma $4$














\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac {a p \paren {x - \paren {-\frac q p} } } {x - \paren {-\frac b a} } }\)





substituting $a \gets a p$, $\alpha \gets -\dfrac b a$, $\beta \gets -\dfrac q p$














\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac {a p \paren {x + \frac q p} } {x + \frac b a} }\)





rearranging














\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac {a^2 \paren {p x + q} } {a x + b} }\)





rearranging




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds t\)

\(=\)







\(\ds a \sqrt {\dfrac {p x + q} {a x + b} }\)





simplifying




Assembling the pieces:








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \int \frac {\d t} {\paren {\dfrac {a q - p b} {t^2 - a p} } t} \dfrac {2 t \paren {b p - a q} } {\paren {t^2 - a p}^2}\)





Integration by Substitution, using $\sqrt {\paren {a x + b} \paren {p x + q} } = \paren {x - \alpha} t$














\(\ds \)

\(=\)







\(\ds \int \frac {t^2 - a p} {\paren {a q - p b} t} \cdot \dfrac {-2 t \paren {a q - b p} } {\paren {t^2 - a p}^2} \rd t\)





simplifying














\(\ds \)

\(=\)







\(\ds -2 \int \dfrac {\d t} {\paren {t^2 - a p} }\)





simplifying














\(\ds \)

\(=\)







\(\ds -2 \int \dfrac {\d t} {\paren {t^2 + \paren {-a p} } }\)





as $a p < 0$ by hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac {-2} {\sqrt {-a p} } \map \arctan {\dfrac t {\sqrt {-a p} } } + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$: Arctangent Form














\(\ds \)

\(=\)







\(\ds \dfrac {-2} {\sqrt {-a p} } \map \arctan {\dfrac {a \sqrt {\frac {p x + q} {a x + b} } } {\sqrt {-a p} } } + C\)





substituting for $t$ from $(2)$














\(\ds \)

\(=\)







\(\ds \dfrac {-2} {\sqrt {-a p} } \map \arctan {\sqrt {\dfrac {-a \paren {p x + q} } {p \paren {a x + b} } } } + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-2} {\sqrt {-a p} } \map \arccot {\sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } } } + C\)





Arccotangent of Reciprocal equals Arctangent














\(\ds \)

\(=\)







\(\ds \dfrac {-2} {\sqrt {-a p} } \paren {\dfrac \pi 2 - \map \arctan {\sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } } } }  + C\)





Sum of Arctangent and Arccotangent














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \paren {\map \arctan {\sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } } } - \dfrac \pi 2} + C\)





Arctangent is Odd Function














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \map \arctan {\sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } } } + C\)





subsuming $\dfrac 2 {\sqrt {-a p} } \times \dfrac {-\pi} 2$ into the arbitrary constant



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.26$




