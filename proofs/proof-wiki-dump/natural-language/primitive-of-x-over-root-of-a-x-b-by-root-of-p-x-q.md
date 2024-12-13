# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Root_of_a_x_%2B_b_by_Root_of_p_x_%2B_q

Theorem
$\ds \int \frac {x \rd x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \frac {\sqrt {\paren {a x + b} \paren {p x + q} } } {a p} - \frac {b p + a q} {2 a p} \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \sqrt {a x + b}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {u^2 - b} a\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {p x + q}\)

\(=\)







\(\ds \sqrt {p \paren {\frac {u^2 - b} a} + q}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\frac {p \paren {u^2 - b} + a q} a}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\frac {p u^2 - b p + a q} a}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sqrt {\frac p a} \sqrt {u^2 - \paren {\frac {b p - a q} p} }\)










Let $c^2 = \dfrac {b p - a q} p$.

Then:














\(\ds \)

\(\)







\(\ds \int \frac {x \rd x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {2 u} a \paren {\frac {u^2 - b} a} \frac {\d u} {u \sqrt {\frac p a} \sqrt {u^2 - c^2} }\)





Primitive of Function of $\sqrt {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 2 {a \sqrt {a p} } \int \frac {u^2 \rd u} {\sqrt {u^2 - c^2} } - \frac {2 b} {a \sqrt {a p} } \int \frac {\d u} {\sqrt {u^2 - c^2} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 2 {a \sqrt {a p} } \paren {\frac {u \sqrt {u^2 - c^2} } 2 + \frac {c^2} 2 \map \ln {u + \sqrt {u^2 - c^2} } }\)





Primitive of $\dfrac {x^2} {\sqrt {x^2 - a^2} }$














\(\ds \)

\(=\)





\(\, \ds - \, \)

\(\ds \frac {2 b} {a \sqrt {a p} } \map \ln {u + \sqrt {u^2 - c^2} }\)





... and Primitive of $\dfrac 1 {\sqrt {x^2 - a^2} }$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \frac 2 {a \sqrt {a p} } \paren {\frac {u \sqrt {u^2 - c^2} } 2 + \paren {\frac {c^2} 2 - b} \map \ln {u + \sqrt {u^2 - c^2} } }\)





common factor














\(\ds \)

\(=\)







\(\ds \frac 2 {a \sqrt {a p} } \paren {\frac {\sqrt {a x + b} \sqrt {\frac a p} \sqrt {p x + q} } 2 + \paren {\frac {c^2} 2 - b} \map \ln {\sqrt {a x + b} + \sqrt {\frac a p} \sqrt {p x + q} } }\)





substituting for $u$, noting that $\sqrt {p x + q} = \sqrt {\dfrac p a} \sqrt {u^2 - c^2}$














\(\ds \)

\(=\)







\(\ds \frac {\sqrt {\paren {a x + b} \paren {p x + q} } } {a p} + \paren {\frac {b p - a q} {a p \sqrt {a p} } - \frac {2 b} {a \sqrt {a p} } } \map \ln {\frac {\sqrt {p \paren {a x + b} } + \sqrt {a \paren {p x + q} } } {\sqrt p} }\)





substituting for $c^2$ and simplifying














\(\ds \)

\(=\)







\(\ds \frac {\sqrt {\paren {a x + b} \paren {p x + q} } } {a p} + \paren {\frac {b p - a q - 2 b p} {a p \sqrt {a p} } } \map \ln {\frac {\sqrt {p \paren {a x + b} } + \sqrt {a \paren {p x + q} } } {\sqrt p} }\)





common denominator














\(\ds \)

\(=\)







\(\ds \frac {\sqrt {\paren {a x + b} \paren {p x + q} } } {a p} - \paren {\frac {b p + a q} {a p \sqrt {a p} } } \frac {\sqrt {a p} } 2 \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)





Primitive of Reciprocal of $\sqrt {\paren {a x + b} \paren {p x + q} }$














\(\ds \)

\(=\)







\(\ds \frac {\sqrt {\paren {a x + b} \paren {p x + q} } } {a p} - \paren {\frac {b p + a q} {2 a p} } \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)





simplifying



$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: This is messy -- open to anyone else to write a better versionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $\sqrt {p x + q}$: $14.121$




