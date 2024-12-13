# 

Source: https://proofwiki.org/wiki/Product_of_r_Choose_m_with_m_Choose_k/Complex_Numbers

Theorem
For all $z, w \in \C$ such that it is not the case that $z$ is a negative integer and $t, w$ integers:

$\dbinom z t \dbinom t w = \dbinom z w \dbinom {z - w} {t - w}$
where $\dbinom z w$ is a binomial coefficient.


Proof













\(\ds \dbinom z t \dbinom t w\)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\tau \mathop \to t} \dfrac {\map \Gamma {\zeta + 1} } {\map \Gamma {\tau + 1} \map \Gamma {\zeta - \tau + 1} } \lim_{\tau \mathop \to t} \lim_{\omega \mathop \to w} \dfrac {\map \Gamma {\tau + 1} } {\map \Gamma {\omega + 1} \map \Gamma {\tau - \omega + 1} }\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\tau \mathop \to t} \paren {\dfrac {\map \Gamma {\zeta + 1} } {\map \Gamma {\tau + 1} \map \Gamma {\zeta - \tau + 1} } \dfrac {\map \Gamma {\tau + 1} } {\map \Gamma {\omega + 1} \map \Gamma {\tau - \omega + 1} } }\)





Product Rule for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\tau \mathop \to t} \paren {\dfrac {\map \Gamma {\zeta + 1} } {\map \Gamma {\zeta - \tau + 1} \map \Gamma {\omega + 1} \map \Gamma {\tau - \omega + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\tau \mathop \to t} \paren {\dfrac {\map \Gamma {\zeta + 1} \map \Gamma {\zeta - \omega + 1} } {\map \Gamma {\omega + 1} \map \Gamma {\zeta - \omega + 1} \map \Gamma {\zeta - \tau + 1} \map \Gamma {\tau - \omega + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \binom z w \binom {z - w} {t - w}\)





Definition of Binomial Coefficient



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $42$ (Solution)




