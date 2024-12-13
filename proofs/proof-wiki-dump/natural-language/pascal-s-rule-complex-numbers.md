# 

Source: https://proofwiki.org/wiki/Pascal%27s_Rule/Complex_Numbers

Theorem
For all $z, w \in \C$ such that it is not the case that $z$ is a negative integer and $w$ an integer:

$\dbinom z {w - 1} + \dbinom z w = \dbinom {z + 1} w$
where $\dbinom z w$ is a binomial coefficient.


Proof













\(\ds \binom z {w - 1} + \binom z w\)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \dfrac {\map \Gamma {\zeta + 1} } {\map \Gamma \omega \map \Gamma {\zeta - \omega + 2} } + \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \dfrac {\map \Gamma {\zeta + 1} } {\map \Gamma {\omega + 1} \map \Gamma {\zeta - \omega + 1} }\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \paren {\dfrac {\map \Gamma {\zeta + 1} } {\map \Gamma \omega \map \Gamma {\zeta - \omega + 2} } + \dfrac {\map \Gamma {\zeta + 1} } {\map \Gamma {\omega + 1} \map \Gamma {\zeta - \omega + 1} } }\)





Sum Rule for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \paren {\dfrac {\map \Gamma {\zeta + 1} } {\map \Gamma \omega \paren {\zeta - \omega + 1} \map \Gamma {\zeta - \omega + 1} } + \dfrac {\map \Gamma {\zeta + 1} } {\omega \map \Gamma \omega \map \Gamma {\zeta - \omega + 1} } }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \paren {\dfrac {\omega \map \Gamma {\zeta + 1} + \paren {\zeta - \omega + 1} \map \Gamma {\zeta + 1} } {\omega \map \Gamma \omega \paren {\zeta - \omega + 1} \map \Gamma {\zeta - \omega + 1} } }\)





common demonimator














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \paren {\dfrac {\omega \map \Gamma {\zeta + 1} + \paren {\zeta - \omega + 1} \map \Gamma {\zeta + 1} } {\map \Gamma {\omega + 1} \map \Gamma {\zeta - \omega + 2} } }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \paren {\dfrac {\map \Gamma {\zeta + 1} \paren {\zeta - \omega + 1 + \omega} } {\map \Gamma {\omega + 1} \map \Gamma {\zeta - \omega + 2} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \paren {\dfrac {\map \Gamma {\zeta + 1} \paren {\zeta + 1} } {\map \Gamma {\omega + 1} \map \Gamma {\zeta - \omega + 2} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \paren {\dfrac {\map \Gamma {\zeta + 2} } {\map \Gamma {\omega + 1} \map \Gamma {\zeta - \omega + 2} } }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \binom {z + 1} w\)





Definition of Binomial Coefficient



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $42$ (Solution)




