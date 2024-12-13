# 

Source: https://proofwiki.org/wiki/Lemmata_for_Euler%27s_Third_Substitution/Lemma_3

Theorem
Let Euler's third substitution be employed in order to evaluate a primitive of the form:

$\ds \map R {x, \sqrt {a x^2 + b x + c} } \rd x$
where $R$ is a rational function of $x$ and $\sqrt {a x^2 + b x + c}$.
Thus:

$\ds \sqrt {a x^2 + b x + c} = \sqrt {a \paren {x - \alpha} \paren {x - \beta} } = \paren {x - \alpha} t$

Then we have:

$\dfrac {\d x} {\d t} = \dfrac {2 t a \paren {\beta - \alpha} } {\paren {a - t^2}^2}$


Proof













\(\ds \dfrac {\d x} {\d t}\)

\(=\)







\(\ds \map {\dfrac \d {\d t} } {x - \alpha}\)





Derivative of Function plus Constant














\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d t} } {\dfrac {a \paren {\alpha - \beta} } {t^2 - a} }\)





Lemmata for Euler's Third Substitution: Lemma $2$














\(\ds \)

\(=\)







\(\ds \dfrac {-a \paren {\alpha - \beta} } {\paren {t^2 - a}^2} \cdot \paren {2 t}\)





Power Rule for Derivatives, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d t}\)

\(=\)







\(\ds \dfrac {2 t a \paren {\beta - \alpha} } {\paren {a - t^2}^2}\)





simplifying



$\blacksquare$


Also see
Definition:Euler's Third Substitution




