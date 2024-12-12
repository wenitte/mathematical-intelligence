# 

Source: https://proofwiki.org/wiki/Exponential_of_Product



Theorem
Let $x, y \in \R$ be real numbers.
Let $\exp x$ be the exponential of $x$.

Then:

$\map \exp {x y} = \paren {\exp y}^x$


Proof 1
Let $Y = \exp y$.
From Exponential of Natural Logarithm:

$\map \ln {\exp y} = y$
From Logarithms of Powers, we have:

$\ln Y^x = x \ln Y = x \, \map \ln {\exp y} = x y$

Thus:

$\map \exp {x y} = \map \exp {\ln Y^x} = Y^x = \paren {\exp y}^x$
$\blacksquare$


Proof 2













\(\ds \paren {\exp y}^x\)

\(=\)







\(\ds \map \exp {x \map \ln {\exp y} }\)





Definition of Power to Real Number














\(\ds \)

\(=\)







\(\ds \map \exp {x y}\)





Exponential of Natural Logarithm



$\blacksquare$


Proof 3
For $n \in \Z_{\ge 0}$:














\(\ds \map \exp {n y}\)

\(=\)







\(\ds \map \exp {\sum_{k \mathop = 1}^n y}\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \exp y\)





Exponential of Sum of Real Numbers




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren {\exp y}^n\)










That is:

$\forall n \in \Z_{\ge 0}: \map \exp {n y} = \paren {\exp y}^n$

Now let $n \in \Z_{<0}$.
It follows that $-n \in \Z_{>0}$, so:














\(\ds \exp n\)

\(=\)







\(\ds \map \exp {-\paren {-n y} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\map \exp {-n y} }\)





Reciprocal of Real Exponential














\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {\exp y}^{-n} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \paren {\exp y}^n\)





Real Number to Negative Power: Positive Integer




Thus:

$(2): \quad \forall m \in \Z: \map \exp {m y} = \paren {\exp y}^m$

Next, for $n \in \Z_{>0}$:














\(\ds \exp y\)

\(=\)







\(\ds \map \exp {n \frac y n}\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \exp {\frac y n} }^n\)





from $(1)$




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sqrt [n] {\exp y}\)

\(=\)







\(\ds \map \exp {\frac y n}\)









So fix $r \in \Q$.

Let $r = \dfrac m n$, where $m \in \Z$ is an integer and $n \in \Z_{>0}$ is a strictly positive integer.
From the above:














\(\ds \map \exp {r y}\)

\(=\)







\(\ds \map \exp {\frac m n y}\)




















\(\ds \)

\(=\)







\(\ds \sqrt [n] {\map \exp {m y} }\)





from $(3$














\(\ds \)

\(=\)







\(\ds \sqrt [n] {\paren {\exp y}^m}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \paren {\exp y}^r\)










Thus, from the definition of $\paren {\exp y}^x$ as the unique continuous extension of $r \mapsto \paren {\exp y}^r$ from $\Q$ to $\R$:

$\map \exp {x y} = \paren {\exp y}^x$
$\blacksquare$





