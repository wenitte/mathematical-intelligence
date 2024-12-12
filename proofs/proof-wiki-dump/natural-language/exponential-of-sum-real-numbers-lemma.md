# 

Source: https://proofwiki.org/wiki/Exponential_of_Sum/Real_Numbers/Lemma

Lemma
Let $x, y \in \R$.
Let $n \in \N_{> 0}$ such that $n > -\paren {x + y}$.

Then:

$1 + \dfrac {x + y} n + \dfrac {x y} {n^2} = \paren {1 + \dfrac {x + y} n} \paren {1 + \dfrac {\paren {\frac {x y} {n + x + y} } } n}$
$\Box$


Proof
As $n \in \N_{> 0}$ we have that $n \ne 0$ and so the fractions in the expressions are defined.














\(\ds 1 + \frac {x + y} n + \frac {x y} {n^2}\)

\(=\)







\(\ds \frac {\paren {1 + \frac {x + y} n} \paren {1 + \frac {x + y} n + \frac {x y} {n^2} } } {1 + \frac {x + y} n}\)





multiplying and dividing by $1 + \dfrac {x + y} n$














\(\ds \)

\(=\)







\(\ds \paren {1 + \frac {x + y} n} \frac {\paren {1 + \frac {x + y} n + \frac {x y} {n^2} } } {\paren {1 + \frac {x + y} n} }\)





extracting a factor














\(\ds \)

\(=\)







\(\ds \paren {1 + \frac {x + y} n} \paren {\frac {n^2 + n x + n y + x y} {n^2 + n x + n y} }\)





multiplying top and bottom by $n^2$














\(\ds \)

\(=\)







\(\ds \paren {1 + \frac {x + y} n} \paren {1 + \frac {x y} {n^2 + n x + n y} }\)





Polynomial Long Division














\(\ds \)

\(=\)







\(\ds \paren {1 + \frac {x + y} n} \paren {1 + \frac {\paren {\frac {x y} {n + x + y} } } n}\)





dividing top and bottom by $n + x + y$




That final step is justified, as we have that $n > -\paren {x + y}$ and so $n + x + y \ne 0$.
$\blacksquare$


Also see
This lemma is used in:

Proof 2 of (Real) Exponential of Sum
Proof 3 of (Real) Exponential of Sum
$\map \exp {x + y} = \paren {\exp x} \paren {\exp y}$
for real $x$ and $y$.





