# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Root_of_a_squared_minus_x_squared



Theorem
$\ds \int x^2 \sqrt {a^2 - x^2} \rd x = -\frac {x \paren {\sqrt {a^2 - x^2} }^3} 4 + \frac {a^2 x \sqrt {a^2 - x^2} } 8 + \frac {a^4} 8 \arcsin \frac x a + C$


Proof 1
Let us assume that $a > 0$.
Let:














\(\ds x\)

\(=\)







\(\ds a \sin t\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d t}\)

\(=\)







\(\ds a \cos t\)














\(\ds \leadsto \ \ \)





\(\ds a^2 - x^2\)

\(=\)







\(\ds a^2 - a^2 \sin^2 t\)




















\(\ds \)

\(=\)







\(\ds a^2 \paren {1 - \sin^2 t}\)




















\(\ds \)

\(=\)







\(\ds a^2 \cos^2 t\)





Sum of Squares of Sine and Cosine




Hence:














\(\ds \int x^2 \sqrt {a^2 - x^2} \rd x\)

\(=\)







\(\ds \int a^2 \sin^2 t \cdot \sqrt {a^2 \cos^2 t} \cdot a \cos t \rd t\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds a^4 \int \sin^2 t \cos^2 t \rd t\)





simplifying














\(\ds \)

\(=\)







\(\ds a^4 \paren {\frac t 8 - \frac {\sin 4 t} {32} } + C\)





Primitive of $\sin^2 a t \cos^2 a t$ where $a \gets 1$














\(\ds \)

\(=\)







\(\ds a^4 \paren {\frac t 8 - \dfrac {4 \sin t \cos t - 8 \sin^3 t \cos t} {32} } + C\)





Quadruple Angle Formula for Sine




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {a^4} 8 \paren {t - \sin t \cos t - 2 \sin^3 t \cos t} + C\)





simplifying




Recall:














\(\ds x\)

\(=\)







\(\ds a \sin t\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(=\)







\(\ds \arcsin \frac x a\)










Hence:














\(\ds \)

\(\)







\(\ds \frac {a^4} 8 \paren {t - \sin t \cos t - 2 \sin^3 t \cos t} + C\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {a^4} 8 \paren {\arcsin \frac x a - \paren {\frac x a} \paren {\frac {\sqrt {a^2 - x^2} } a} + 2 \paren {\frac x a}^3 \paren {\frac {\sqrt {a^2 - x^2} } a} } + C\)





substituting $\sin t = \dfrac x a$, $\cos t = \dfrac {\sqrt {a^2 - x^2} } a$














\(\ds \)

\(=\)







\(\ds \frac {a^4} 8 \paren {\arcsin \frac x a + \paren {\frac x a} \paren {\frac {\sqrt {a^2 - x^2} } a} \paren {-1 + \frac {2 x^2} {a^2} } } + C\)





Distributive Laws of Arithmetic














\(\ds \)

\(=\)







\(\ds \frac {a^4} 8 \paren {\arcsin \frac x a + \paren {\frac x a} \paren {\frac {\sqrt {a^2 - x^2} } a} \paren {\dfrac {-2 a^2 + 2 x^2 + a^2} {a^2} } } + C\)





manipulating as necessary














\(\ds \)

\(=\)







\(\ds \frac {a^4} 8 \paren {\arcsin \frac x a + \paren {\frac x a} \frac {\sqrt {a^2 - x^2} } a \paren {-2 \frac {a^2 - x^2} {a^2} + 1} } + C\)




















\(\ds \)

\(=\)







\(\ds -\frac {x \paren {\sqrt {a^2 - x^2} }^3} 4 + \frac {a^2 x \sqrt {a^2 - x^2} } 8 + \frac {a^4} 8 \arcsin \frac x a + C\)





simplifying and rearranging



$\blacksquare$


Proof 2













\(\ds z\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int x^2 \sqrt {a^2 - x^2} \rd x\)

\(=\)







\(\ds \int \frac {z \sqrt {a^2 - z} \rd z} {2 \sqrt z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \sqrt {z \paren {a^2 - z} } \rd z\)





Primitive of Constant Multiple of Function




Recall:














\(\ds \int \sqrt {\paren {a x + b} \paren {p x + q} } \rd x\)

\(=\)







\(\ds \frac {2 a p x + b p + a q} {4 a p} \sqrt {\paren {a x + b} \paren {p x + q} } - \frac {\paren {b p - a q}^2} {8 a p} \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)





Primitive of $\sqrt {\paren {a x + b} \paren {p x + q} }$




Then:














\(\ds \frac {2 a p x + b p + a q} {4 a p}\)

\(=\)







\(\ds \frac {2 \times 1 \times \paren {-1} z + 0 \times \paren {-1} + 1 \times a^2} {4 \times 1 \times \paren {-1} }\)





setting $a \gets 1$, $b \gets 0$, $p \gets -1$, $q \gets a^2$, $x \gets z$














\(\ds \)

\(=\)







\(\ds \frac {-2 z + a^2} {-4}\)





simplifying




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {2 z - a^2} 4\)





simplifying further




Then:














\(\ds \frac 1 2 \int \sqrt {z \paren {a^2 - z} } \rd z\)

\(=\)







\(\ds \frac 1 2 \paren {\frac {2 z - a^2} 4 \sqrt {z \paren {a^2 - z} } - \frac {\paren {0 \times \paren {-1} + 1 \times a^2}^2} {8 \times 1 \times \paren {-1} } \int \frac {\d z} {\sqrt {z \paren {a^2 - z} } } }\)





setting $a \gets 1$, $b \gets 0$, $p \gets -1$, $q \gets a^2$, $x \gets z$














\(\ds \)

\(=\)







\(\ds \frac {2 z - a^2} 8 \sqrt {z \paren {a^2 - z} } + \frac {a^4} {16} \int \frac {\d z} {\sqrt {z \paren {a^2 - z} } }\)





simplifying




Recall:














\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \dfrac {-1} {\sqrt {-a p} } \map \arcsin {\dfrac {2 a p x + b p + a q} {a q - b p} } + C\)





Primitive of $\dfrac 1 {\sqrt {\paren {a x + b} \paren {p x + q} } }$ for $a > 0, p < 0$




Then:














\(\ds \frac {2 z - a^2} 8 \sqrt {z \paren {a^2 - z} } + \frac {a^4} {16} \int \frac {\d z} {\sqrt {z \paren {a^2 - z} } }\)

\(=\)







\(\ds \frac {2 z - a^2} 8 \sqrt {z \paren {a^2 - z} } + \frac {a^4} {16} \paren {\dfrac {-1} {\sqrt {-1 \times \paren {-1} } } \arcsin \frac {2 z - a^2} 4} + C\)





from $(1)$, and $a \gets 1$, $b \gets 0$, $p \gets -1$, $q \gets a^2$, $x \gets z$














\(\ds \)

\(=\)







\(\ds \frac {2 z - a^2} 8 \sqrt {z \paren {a^2 - z} } + \frac {a^4} {16} \paren {-\arcsin \frac {2 z - a^2} 4} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {2 x^2 - a^2} 8 \sqrt {x^2 \paren {a^2 - x^2} } + \frac {a^4} {16} \paren {-\arcsin \frac {2 x^2 - a^2} 4} + C\)





substituting $x^2$ back for $z$














\(\ds \)

\(=\)







\(\ds \frac {2 x^2 - 2 a^2 + a^2} 8 \sqrt {x^2 \paren {a^2 - x^2} } + \frac {a^4} {16} \paren {-\arcsin \frac {2 x^2 - a^2} 4} + C\)




















\(\ds \)

\(=\)







\(\ds -\frac {a^2 - x^2} 4 x \sqrt {a^2 - x^2} + \frac {a^2 x \sqrt {a^2 - x^2} } 8 + \frac {a^4} {16} \paren {-\arcsin \frac {2 x^2 - a^2} 4} + C\)





rearranging














\(\ds \)

\(=\)







\(\ds -\frac {x \paren {\sqrt {a^2 - x^2} }^3} 4 + \frac {a^2 x \sqrt {a^2 - x^2} } 8 + \frac {a^4} {16} \paren {-\arcsin \frac {2 x^2 - a^2} 4} + C\)





simplifying




This needs considerable tedious hard slog to complete it.In particular: Can this proof be salvaged?To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Also presented as
This result is also seen presented in the form:

$\ds \int x^2 \sqrt {a^2 - x^2} \rd x = \frac {a^4} 8 \arcsin \frac x a - \frac {x \sqrt {a^2 - x^2} \paren {a^2 - 2 x^2} } 8 + C$


Also see
Primitive of $x^2 \sqrt {x^2 + a^2}$
Primitive of $x^2 \sqrt {x^2 - a^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.246$




