# 

Source: https://proofwiki.org/wiki/Limit_of_(Cosine_(X)_-_1)_over_X_at_Zero/Proof_3

Theorem
$\ds \lim_{x \mathop \to 0} \frac {\cos x - 1} x = 0$


Proof













\(\ds \lim_{x \mathop \to 0} \frac {\cos x - 1} x\)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {\paren {\cos x - 1} \paren {\cos x + 1} } {x \paren {\cos x + 1} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {\cos^2 x - 1} {x \paren {\cos x + 1} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {-\sin^2 x} {x \paren {\cos x + 1} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \paren {\lim_{x \mathop \to 0} \frac {\sin x} x} \paren {\lim_{x \mathop \to 0} \frac {-\sin x} {\cos x + 1} }\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds 1 \times \paren {\lim_{x \mathop \to 0} \frac{-\sin x} {\cos x + 1} }\)





Limit of $\dfrac {\sin x} x$ at Zero














\(\ds \)

\(=\)







\(\ds \frac {\ds \lim_{x \mathop \to 0} \paren {-\sin x} } {\ds \lim_{x \mathop \to 0} \paren {\cos x + 1} }\)





Quotient Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \frac 0 2\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$





