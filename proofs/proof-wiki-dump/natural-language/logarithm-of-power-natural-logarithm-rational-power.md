# 

Source: https://proofwiki.org/wiki/Logarithm_of_Power/Natural_Logarithm/Rational_Power

Theorem
Let $x \in \R$ be a strictly positive real number.
Let $r \in \R$ be any rational number.
Let $\ln x$ be the natural logarithm of $x$.

Then:

$\map \ln {x^r} = r \ln x$


Proof
Let $r = \dfrac s t$, where $s \in \Z$ and $t \in \Z_{>0}$.
First:














\(\ds \map \ln x\)

\(=\)







\(\ds \map \ln {x^{t / t} }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\paren {x^{1 / t} }^t}\)





Product of Indices of Real Number/Rational Numbers














\(\ds \)

\(=\)







\(\ds t \map \ln {x^{1 / t} }\)





Logarithm of Power/Natural Logarithm/Integer Power




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map \ln {x^{1 / t} }\)

\(=\)







\(\ds \frac 1 t \map \ln x\)





dividing both sides by $t$



Thus:














\(\ds \map \ln {x^{s / t} }\)

\(=\)







\(\ds \map \ln {\paren {x^{1 / t} }^s}\)





Product of Indices of Real Number/Rational Numbers














\(\ds \)

\(=\)







\(\ds s \map \ln {x^{1 / t} }\)





Logarithm of Power/Natural Logarithm/Integer Power














\(\ds \)

\(=\)







\(\ds \frac s t \map \ln x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds r \map \ln x\)





Definition of $s$ and $t$



$\blacksquare$





