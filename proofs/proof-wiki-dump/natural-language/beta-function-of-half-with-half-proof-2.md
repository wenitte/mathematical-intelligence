# 

Source: https://proofwiki.org/wiki/Beta_Function_of_Half_with_Half/Proof_2

Theorem
$\map \Beta {\dfrac 1 2, \dfrac 1 2} = \pi$
where $\Beta$ denotes the Beta function.


Proof
By definition of the Beta function:

$\ds \map \Beta {x, y} := \int_{\mathop \to 0}^{\mathop \to 1} t^{x - 1} \paren {1 - t}^{y - 1} \rd t$
Thus:














\(\ds \map \Beta {\dfrac 1 2, \dfrac 1 2}\)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} t^{\frac 1 2 - 1} \paren {1 - t}^{\frac 1 2 - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} \dfrac {\rd t} {\sqrt {t \paren {1 - t} } }\)










Let $t = \sin^2 \theta$.
Then:

$\rd t = 2 \sin \theta \cos \theta \rd \theta$
and:














\(\ds t\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \sin^2 \theta\)

\(=\)







\(\ds 0\)




















\(\ds t\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \sin^2 \theta\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \pi / 2\)










and so:














\(\ds \map \Beta {\dfrac 1 2, \dfrac 1 2}\)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to \pi / 2} \frac {2 \sin \theta \cos \theta \rd \theta} {\sin \theta \sqrt {1 - \sin^2 \theta} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to \pi / 2} \frac {2 \sin \theta \cos \theta \rd \theta} {\sin \theta \cos \theta}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to \pi / 2} 2 \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {2 \theta} 0 {\pi / 2}\)




















\(\ds \)

\(=\)







\(\ds 2 \times \pi / 2 - 0\)




















\(\ds \)

\(=\)







\(\ds \pi\)









$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.7 \ (6)$




