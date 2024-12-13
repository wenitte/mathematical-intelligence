# 

Source: https://proofwiki.org/wiki/Limit_of_x_to_the_x/Proof_2

Theorem
Let $f: \R_{>0} \to \R$ be defined as:

$\forall x \in \R_{>0}: \map f x = x^x$

Then:

$\ds \lim_{x \mathop \to 0^+} x^x = 1$


Proof













\(\ds \lim_{x \mathop \to 0^+} x^x\)

\(=\)







\(\ds \lim_{x \mathop \to 0^+} \map \exp {x \ln x}\)





Definition 1 of Power (Algebra)














\(\ds \)

\(=\)







\(\ds \map \exp {\lim_{x \mathop \to 0^+} x \ln x}\)





Exponential Function is Continuous














\(\ds \)

\(=\)







\(\ds \exp 0\)





Limit of Power of $x$ by Absolute Value of Power of Logarithm of $x$: Corollary














\(\ds \)

\(=\)







\(\ds 1\)





Exponential of Zero



$\blacksquare$





